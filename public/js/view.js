// #################################### View Functions ####################################

// ################# Variables #################
const main = document.getElementById('main');
const container = document.getElementById('container');
const resetBtn = document.getElementById('resetBtn');
const themeSwitchIcon = document.getElementById('themeSwitchIcon');

// ### Login ###
const signupLinkBtn = document.getElementById('signupLinkBtn');
const loginThemeSwitchBtn = document.getElementById('loginThemeSwitchBtn');
const loginBtn = document.getElementById('loginBtn');

// ### Signup ###
const loginLinkBtn = document.getElementById('loginLinkBtn');
const signupThemeSwitchBtn = document.getElementById('signupThemeSwitchBtn');
const signupBtn = document.getElementById('signupBtn');

// ### Editor ###
const header = document.getElementById('header');

const fileHeaderButton = document.getElementById('fileHeaderButton');
const tabHeaderButton = document.getElementById('tabHeaderButton');
const viewHeaderButton = document.getElementById('viewHeaderButton');
const formatHeaderButton = document.getElementById('formatHeaderButton');
const userHeaderButton = document.getElementById('userHeaderButton');

const qSSection = document.getElementById('qSSection');
const qSFontDiv = document.getElementById('qSFontDiv');
const qSTabDiv = document.getElementById('qSTabDiv');
const selectableDiv = document.getElementById('selectable-Div');
const qSThemeSwitchBtn = document.getElementById('qSThemeSwitchBtn');
const footer = document.getElementById('footer');
const editorThemeSwitchBtn = document.getElementById('editorThemeSwitchBtn');
const qSBtn = document.getElementById('qSThemeSwitchBtn');


// ################# Login View Functions #################

function loginThemeSwitch() {
    try {
        main.classList.toggle('background-dark-mode');

        container.classList.toggle('container-dark-mode');

        // Form Buttons
        signupLinkBtn.classList.toggle('a-dark-mode');

        loginBtn.classList.toggle('formBtn-dark-mode');
        resetBtn.classList.toggle('formBtn-dark-mode');

        // Theme Switch Button
        loginThemeSwitchBtn.classList.toggle('themeSwitch-dark-mode');

        themeSwitchIcon.classList.toggle('themeSwitchIcon-dark-mode');
    } catch (e) {
        console.error('ERROR #201 - THEME SWITCH ERROR (Login Page): ' + e);
        alert('Fehler beim ändern der Ansichts Modi (Fehler #201)! \n Weitere Informationen sind in der Konsole zu finden.');
    }
}


// ################# Signup View Functions #################

function signupThemeSwitch() {
    try {
        main.classList.toggle('background-dark-mode');
        
        container.classList.toggle('container-dark-mode');

        // Form Buttons
        loginLinkBtn.classList.toggle('a-dark-mode');

        signupBtn.classList.toggle('formBtn-dark-mode');
        resetBtn.classList.toggle('formBtn-dark-mode');

        // Theme Switch Button
        signupThemeSwitchBtn.classList.toggle('themeSwitch-dark-mode');

        themeSwitchIcon.classList.toggle('themeSwitchIcon-dark-mode');
    } catch(e) {
        console.error('ERROR #202 - THEME SWITCH ERROR (Signup Page): ' + e);
        alert('Fehler beim ändern der Ansichts Modi (Fehler #202)! \n Weitere Informationen sind in der Konsole zu finden.');
    }
}


// ################# Texteditor View Functions #################

function editorThemeSwitch() {
    try {
 
        // Main Theme Switch
        main.classList.toggle('main-dark-mode');

       // Header Theme Switch
        header.classList.toggle('header-dark-mode');

        fileHeaderButton.classList.toggle('headerButton-dark-mode');
        tabHeaderButton.classList.toggle('headerButton-dark-mode');
        viewHeaderButton.classList.toggle('headerButton-dark-mode');
        formatHeaderButton.classList.toggle('headerButton-dark-mode');
        userHeaderButton.classList.toggle('headerButton-dark-mode');
  
        // Quick Selection Theme Switch
        qSSection.classList.toggle('qSBar-dark-mode');

        qSFontDiv.classList.toggle('qSDiv-dark-mode');
        qSTabDiv.classList.toggle('qSDiv-dark-mode');

        fontFamilySelection.classList.toggle('comboBox-dark-mode');
        
        selectableDiv.classList.toggle('comboBox-dark-mode');
        sizeInput.classList.toggle('sizeInput-dark-mode');
        fontSizeSelection.classList.toggle('comboBox-dark-mode');

        fontBoldBtn.classList.toggle('qS-smallBtn-dark-mode');
        fontItalicBtn.classList.toggle('qS-smallBtn-dark-mode');
        fontUnderlinedBtn.classList.toggle('qS-smallBtn-dark-mode');
        fontCrossedBtn.classList.toggle('qS-smallBtn-dark-mode');
        qSAddTabBtn.classList.toggle('qS-smallBtn-dark-mode');

        qSThemeSwitchBtn.classList.toggle('qS-bigBtn-dark-mode');
        qSLogoutBtn.classList.toggle('qS-bigBtn-dark-mode');

        // Tab Bar Theme Switch
        tabBar.classList.toggle('tabBar-dark-mode');

        // Editor Theme Switch
        editor.classList.toggle('editor-dark-mode');

        // Footer Theme Switch
        footer.classList.toggle('footer-dark-mode');

        increaseZoomBtn.classList.toggle('footerBtn-dark-mode');
        decreaseZoomBtn.classList.toggle('footerBtn-dark-mode');

    } catch(e) {
        console.error('ERROR #203 - THEME SWITCH ERROR (Editor Page): ' + e);
        alert('Fehler beim ändern der Ansichts Modi (Fehler #203)! \n Weitere Informationen sind in der Konsole zu finden.');
    }
}

// ################# Eventlisteners (Function Calls) #################
if (loginThemeSwitchBtn) 
    loginThemeSwitchBtn.addEventListener("click", loginThemeSwitch);

if (signupThemeSwitchBtn) 
    signupThemeSwitchBtn.addEventListener("click", signupThemeSwitch);

if (editorThemeSwitchBtn) 
    editorThemeSwitchBtn.addEventListener("click", editorThemeSwitch);

if (qSBtn) 
    qSBtn.addEventListener("click", editorThemeSwitch);

