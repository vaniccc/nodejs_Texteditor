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
                    const passwordHashed = bcrypt.hash(password, 10).toString();

                    createUser(username, passwordHashed);

                    showAllUsers();
                } else {
                    console.error('Der Benutzername ist bereits vergeben!');
                }
            } catch(e) {
                console.error('SIGNUP ERROR #01: ' + e);
            }
        }


    } catch (e) {
        console.error('SIGNUP ERROR #02: ' + e);
    }

});






export default router;