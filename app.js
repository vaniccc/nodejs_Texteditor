// Plugin Imports
import express from 'express';
import session from 'express-session';

// Server
const app = express();

// PORT
const PORT = process.env.PORT || 3000;

// Routen Imports
import userRoute from './routes/userRoute.js';

// Statischer Verweis auf den public Ordner
app.use(express.static('public'));

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

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});