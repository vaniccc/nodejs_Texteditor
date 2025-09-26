// Plugin Import
import express from 'express';
import validator from 'validator';
import bcrypt from 'bcrypt';
// Set Router
const router = express.Router();


import { createUser, showAllUsers, getSelectedUser} from '../db/db.js';

router.use(express.urlencoded({ extended: true }));


router.post('/signup', async (req, res) => {

    const { username, password, passwordConfirm } = req.body;

    try {

        if(!validator.isLength(username, 4)) 
            console.error('Benutername muss mindestens 4 Zeichen betragen!');
        
        else if(!validator.isLength(password, 8))
            console.error('Passwort muss mindestens 8 Zeichen brtragen!');

        else if(!validator.equals(password, passwordConfirm))
            console.error('Passwörter stimmen nicht überein!');

        else {
            try {
                //console.log('Validierung erfolgreich abgeschlossen');

                const checkUserByUsername = getSelectedUser(username);
            
                if(!checkUserByUsername) {
                    const passwordHashed = (await bcrypt.hash(password, 10)).toString();

                    createUser(username, passwordHashed);

                    //showAllUsers();

                    res.redirect('http://localhost:3000/editor');
                } else {
                    console.error('Der Benutzername ist bereits vergeben!');
                }
            } catch(e) {
                console.error('SIGNUP ERROR #02: ' + e);
            }
        }

    } catch (e) {
        console.error('SIGNUP ERROR #01: ' + e);
    }
});

router.post('/login', async (req, res) => {

    const { username, password } = req.body;

    //console.log('LOGIN EINGABE: ' + username + ', ' + password);

    try {
        const result = getSelectedUser(username);

        if(!result) 
            console.log('Anmeldedaten flasch');
        
        else {
            try {
                const passwordCompare = await bcrypt.compare(password, result.password_hash);

                //console.log('HASHED PW: ' + passwordCompare);

                if(!passwordCompare) {
                    console.log('Anmeldedaten falsch');
                    //console.log('HASHED PW: ' + result.password_hash);
                }
                else {
                    console.log('Anmeldedaten richtig');
                    res.redirect('http://localhost:3000/editor');
                }
            } catch (e) {
                console.log('LOGIN ERROR #02: ' + e);
            }
        }

    } catch(e) {
        console.log('LOGIN ERROR #01: ' + e);
    }
});


export default router;