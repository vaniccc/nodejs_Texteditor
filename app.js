// Plugin Imports
import express from 'express';

// Server
const app = express();

// PORT
const PORT = process.env.PORT || 3000;

// Routen Imports
import userRoute from './routes/userRoute.js';

// Statische Dateien
app.use(express.static('public'));

// ejs als View Engine auswählen
app.set('view engine', 'ejs');

// render index page
app.get('/', (req, res) => {
    res.render('pages/index');
});

// render signup page
app.get('/signup', (req, res) => {
    res.render('pages/signup');
});

// render Editor Page
app.get('/editor', (req, res) => {
    res.render('pages/texteditor');
});

//Routes
app.use('/users', userRoute);

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});