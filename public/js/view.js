// #################################### View Functions ####################################

// ################# Login View Functions #################

function loginThemeSwitch() {
    try {

        var background = document.getElementById('main');
        background.classList.toggle('background-dark-mode');

        var container = document.getElementById('container');
        container.classList.toggle('container-dark-mode');

        var a = document.getElementById('signupLink');
        a.classList.toggle('a-dark-mode');

        // Form Buttons
        var loginBtn = document.getElementById('loginBtn');
        loginBtn.classList.toggle('formBtn-dark-mode');

        var resetBtn = document.getElementById('resetBtn');
        resetBtn.classList.toggle('formBtn-dark-mode');

        // Theme Switch Button
        var loginThemeSwitchBtn = document.getElementById('loginThemeSwitchBtn');
        loginThemeSwitchBtn.classList.toggle('themeSwitch-dark-mode');

        var themeSwitchIcon = document.getElementById('themeSwitchIcon');
        themeSwitchIcon.classList.toggle('themeSwitchIcon-dark-mode');

    } catch (e) {
        console.error('ERROR #201 - THEME SWITCH ERROR (Login Page): ' + e);
        alert('Fehler beim ändern der Ansichts Modi (Fehler #201)! \n Weitere Informationen sind in der Konsole zu finden.');
    }
}


// ################# Signup View Functions #################

function signupThemeSwitch() {
    try {

        var background = document.getElementById('main');
        background.classList.toggle('background-dark-mode');

        var container = document.getElementById('container');
        container.classList.toggle('container-dark-mode');

        var a = document.getElementById('loginLink');
        a.classList.toggle('a-dark-mode');

        // Form Buttons
        var signupBtn = document.getElementById('signupBtn');
        signupBtn.classList.toggle('formBtn-dark-mode');

        var resetBtn = document.getElementById('resetBtn');
        resetBtn.classList.toggle('formBtn-dark-mode');

        // Theme Switch Button
        var signupThemeSwitchBtn = document.getElementById('signupThemeSwitchBtn');
        signupThemeSwitchBtn.classList.toggle('themeSwitch-dark-mode');

        var themeSwitchIcon = document.getElementById('themeSwitchIcon');
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
        var main = document.getElementById('main');
        main.classList.toggle('main-dark-mode');

       // Header Theme Switch
        var header = document.getElementById('header');
        header.classList.toggle('header-dark-mode');

        var fileHeaderButton = document.getElementById('fileHeaderButton');
        fileHeaderButton.classList.toggle('headerButton-dark-mode');
        
        var tabHeaderButton = document.getElementById('tabHeaderButton');
        tabHeaderButton.classList.toggle('headerButton-dark-mode');

        var viewHeaderButton = document.getElementById('viewHeaderButton');
        viewHeaderButton.classList.toggle('headerButton-dark-mode');

        var headerButton1 = document.getElementById('formatHeaderButton');
        headerButton1.classList.toggle('headerButton-dark-mode');
        
        var userHeaderButton = document.getElementById('userHeaderButton');
        userHeaderButton.classList.toggle('headerButton-dark-mode');
  
        // Quick Selection Theme Switch
        var qSBar = document.getElementById('qSSection');
        qSBar.classList.toggle('qSBar-dark-mode');

        var qSFontDiv = document.getElementById('qSFontDiv');
        qSFontDiv.classList.toggle('qSDiv-dark-mode');

        var qSTabDiv = document.getElementById('qSTabDiv');
        qSTabDiv.classList.toggle('qSDiv-dark-mode');

        var fontFamilySelection = document.getElementById('fontFamilySelection');
        fontFamilySelection.classList.toggle('comboBox-dark-mode');

        var selectableDiv = document.getElementById('selectable-Div');
        selectableDiv.classList.toggle('comboBox-dark-mode');

        var sizeInput = document.getElementById('sizeInput');
        sizeInput.classList.toggle('sizeInput-dark-mode');

        var fontSizeSelection = document.getElementById('fontSizeSelection');
        fontSizeSelection.classList.toggle('comboBox-dark-mode');

        var fontBoldBtn = document.getElementById('fontBoldBtn');
        fontBoldBtn.classList.toggle('qS-smallBtn-dark-mode');

        var fontItalicBtn = document.getElementById('fontItalicBtn');
        fontItalicBtn.classList.toggle('qS-smallBtn-dark-mode');

        var fontUnderlinedBtn = document.getElementById('fontUnderlinedBtn');
        fontUnderlinedBtn.classList.toggle('qS-smallBtn-dark-mode');

        var fontCrossedBtn = document.getElementById('fontCrossedBtn');
        fontCrossedBtn.classList.toggle('qS-smallBtn-dark-mode');

        var qSAddTabBtn = document.getElementById('qSAddTabBtn');
        qSAddTabBtn.classList.toggle('qS-smallBtn-dark-mode');

        // var qSCloseTabBtn = document.getElementById('qSCloseTabBtn');
        // qSCloseTabBtn.classList.toggle('qS-smallBtn-dark-mode');

        var qSThemeSwitchBtn = document.getElementById('qSThemeSwitchBtn');
        qSThemeSwitchBtn.classList.toggle('qS-bigBtn-dark-mode');

        var qSlogoutBtn = document.getElementById('qSLogoutBtn');
        qSlogoutBtn.classList.toggle('qS-bigBtn-dark-mode');


        // Tab Bar Theme Switch
        var tabBar = document.getElementById('tabBar');
        tabBar.classList.toggle('tabBar-dark-mode');


        // Editor Theme Switch
        var editor = document.getElementById('editor');
        editor.classList.toggle('editor-dark-mode');


        // Footer Theme Switch
        var footer = document.getElementById('footer');
        footer.classList.toggle('footer-dark-mode');

    } catch(e) {
        console.error('ERROR #203 - THEME SWITCH ERROR (Editor Page): ' + e);
        alert('Fehler beim ändern der Ansichts Modi (Fehler #203)! \n Weitere Informationen sind in der Konsole zu finden.');
    }
}

// ################# Eventlisteners (Function Calls) #################
const loginBtn = document.getElementById('loginThemeSwitchBtn');
if (loginBtn) 
    loginBtn.addEventListener("click", loginThemeSwitch);

const signupBtn = document.getElementById('signupThemeSwitchBtn');
if (signupBtn) 
    signupBtn.addEventListener("click", signupThemeSwitch);

const editorBtn = document.getElementById('editorThemeSwitchBtn');
if (editorBtn) 
    editorBtn.addEventListener("click", editorThemeSwitch);

const qSBtn = document.getElementById('qSThemeSwitchBtn');
if (qSBtn) 
    qSBtn.addEventListener("click", editorThemeSwitch);

