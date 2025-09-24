// Import Plugins
import Database from 'better-sqlite3';
import express from 'express';
const router = express.Router();

// Connect to SQLite DB or Create, if it doesnt exist
const db = new Database('texteditor_db.db');


db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        user_id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL
    )
`);


export function createUser(username, password) {
    const result = db.prepare('INSERT INTO users (username, password_hash) VALUES (?, ?)').run(username, password);
    return result.lastInsertRowid;
}

export function showAllUsers() {
    const result = db.prepare('SELECT * FROM users').all();
    console.log(result);
}

export function getSelectedUser(username) {
    const result = db.prepare('SELECT * FROM users WHERE username = ?').get(username);
    return result;
}


export default router;