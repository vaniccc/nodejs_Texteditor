import express from 'express';
import fse from 'fs-extra';

const router = express.Router();


// Save File
router.post('/', (req, res) => {
    try {
        
    } catch (e) {
        console.error('Save File Error #01: ' + e);
    }
});


// Open File
router.post('/', (req, res) => {
    try {
        
    } catch (e) {
        console.error('Open File Error #01: ' + e);
    }
});


export default router;