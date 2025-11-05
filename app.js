// Plugin Imports
import express from 'express';
import session from 'express-session';
import nfd from 'node-file-dialog';
//const nfd = require('node-file-dialog');
import fs from 'fs/promises';
//const fs = require('fs').promises;
import path from 'path';
// const path = require('path');

const __dirname = path.resolve(); // Fix für Fehler: "ReferenceError: __dirname is not defined in ES module scope"

const dialog = (typeof nfd === 'function') ? nfd : nfd.dialog; 
// Server
const app = express();
app.use(express.json());

// PORT
const PORT = process.env.PORT || 3000;

// Routen Imports
import userRoute from './routes/userRoute.js';

// Statischer Verweis auf den public Ordner
app.use(express.static(path.join(__dirname, 'public')));

// ejs als View Engine setzen
app.set('view engine', 'ejs');

// Default Route "/" definiert, welche pages/Index rendert
app.get('/', (req, res) => {
    res.render('index');
});

// Route "/signup" definiert, welche pages/signup rendert
app.get('/signup', (req, res) => {
    res.render('pages/signup');
});

// Route "/editor" definiert, welche pages/editor rendert
app.get('/editor', (req, res) => {
    res.render('pages/texteditor');
});

// Session
app.use(session({
    secret: '123',
    //Daten Merken?
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 1000 * 60 * 60}
}));


//Routes
app.use('/users', userRoute);

function firstPath(sel) {
  if (!sel) return null;
  return Array.isArray(sel) ? (sel[0] || null) : sel;
}

// Öffnen -> OS-Dialog, Datei lesen
app.post('/api/open', async (_req, res) => {
    try {
        const sel = await dialog({ type: 'open-file' });    // Öffnet "open File" Dialog
        const filePath = firstPath(sel);    // Definiert den ersten Path des Dialogs
        if (!filePath) return res.status(204).end(); // abgebrochen, wenn kein Path existent
        const content = await fs.readFile(filePath, 'utf8'); // lies Datei im Dateipfad mit Zeichensatz 'UTF-8'
        res.json({ filePath, content });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// Speichern -> existierender Pfad
app.post('/api/save', async (req, res) => {
    try {
        const { filePath, content } = req.body || {}; 
        if (!filePath) return res.status(400).json({ error: 'filePath fehlt' }); // returned status(400) mit Fehler "filePath fehlt", wenn FilePath fehlt.
        await fs.writeFile(filePath, content ?? '', 'utf8'); // Schreibt den Content oder einen leeren String mit dem Zeichensatz 'UTF-8' in die Datei im filePath
        res.json({ ok: true }); 
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// Speichern unter -> OS-Dialog, schreiben, Pfad zurück
app.post('/api/saveas', async (req, res) => {
    try {
        const { content } = req.body || {};
        const sel = await dialog({ type: 'save-file' }); // Öffnet "Save File" Dialog
        const filePath = firstPath(sel); // Definiert den Pfad zur ausgewählten Datei
        if (!filePath) return res.status(204).end(); // abgebrochen, wenn keine Datei ausgewählt wurde / existent ist
        await fs.writeFile(filePath, content ?? '', 'utf8'); // Schreibt den Content oder einen leeren String mit dem Zeichensatz 'UTF-8' in die Datei im filePath
        res.json({ filePath });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});


app.listen(PORT, () => {
    console.log(`Server running on ${PORT} | http://www.localhost:3000`);
});