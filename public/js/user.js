// #################################### User Functions ####################################

const usernameDisplay = document.getElementById('usernameDisplay');
const logoutBtn = document.getElementById('logoutBtn');
const qSLogoutBtn = document.getElementById('qSLogoutBtn');

async function loadCurrentUser() {
    try {

        const res = await fetch('/users/user');

        if(!res.ok) {
            window.location.href = '../';
            return;
        }

        const data = await res.json();

        if(data && data.user) {
            usernameDisplay.textContent = 'User: ' + data.user.username;
        }

    } catch (e) {
        console.error('ERROR #301 - LOAD USER ERROR: ' + e);
        alert('Fehler beim Laden des Benutzers (Fehler #301)! \n Weitere Informationen sind in der Konsole zu finden.');
    }
}
loadCurrentUser();

async function logoutUser() {
    try {

        const res = await fetch('/users/logout', {                                          
            method: 'POST'
        });

        const data = await res.json();

        if(data.success) {
            window.location.href = "../";
        } else {
            console.error('ERROR #312 - LOGOUT ERROR: ' + e);
            alert('Fehler beim Ausloggen (Fehler #312)! \n Weitere Informationen sind in der Konsole zu finden.');
        }

    } catch(e) {
        console.error('ERROR #311 - LOGOUT ERROR: ' + e);
        alert('Fehler beim Ausloggen (Fehler #311)! \n Weitere Informationen sind in der Konsole zu finden.');
    }
}

// ################# Eventlisteners (Function Calls) #################

logoutBtn.addEventListener("click", logoutUser);
qSLogoutBtn.addEventListener("click", logoutUser);