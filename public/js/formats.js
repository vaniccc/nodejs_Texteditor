// #################################### Format Functions ####################################
const checkmark = document.getElementById('checkmark');
const lineBreakBtn = document.getElementById('lineBreakBtn');

const fontBoldBtn = document.getElementById('fontBoldBtn');
const fontItalicBtn = document.getElementById('fontItalicBtn');
const fontUnderlinedBtn = document.getElementById('fontUnderlinedBtn');
const fontCrossedBtn = document.getElementById('fontCrossedBtn');
const fontSizeSelection = document.getElementById('fontSizeSelection');
const sizeInput = document.getElementById('sizeInput');
const fontFamilySelection = document.getElementById('fontFamilySelection');


let isLineBreakOn = false;
        
function toggleLineBreak() {
    isLineBreakOn = !isLineBreakOn;

    checkmark.classList.toggle('checkmarkclicked'); 
}

editor.addEventListener("focus", function (e) {
    
    if(isLineBreakOn === true) {
        editor.style.overflowWrap = "break-word";
        editor.style.whiteSpace = "normal";
    }

    if(isLineBreakOn === false) {
        editor.style.whiteSpace = "nowrap";
    }
});

// #################################### Font Format Functions ####################################

function toggleBoldFont() {
    try {

        document.execCommand('bold');

        const isBold = document.queryCommandState('bold');

        fontBoldBtn.classList.toggle('toggleActive', isBold);
               
    } catch(e) {
        console.error('ERROR #101 - TOGGLE BOLD FONT ERROR: ' + e);
        alert('Fehler beim verändern der Schrift(Fett) (Fehler #101)! \n Weitere Informationen sind in der Konsole zu finden.');
    }
}

function toggleItalicFont() {
    try {

        document.execCommand('italic');

        const isItalic = document.queryCommandState('italic');
        
        fontItalicBtn.classList.toggle('toggleActive', isItalic);

    } catch(e) {
        console.error('ERROR #111 - TOGGLE ITALIC FONT ERROR: ' + e);
        alert('Fehler beim verändern der Schrift(Kursiv) (Fehler #111)! \n Weitere Informationen sind in der Konsole zu finden.');
    }
}

function toggleUnderlinedFont() {
    try {

        document.execCommand('underline');

        const isUnderlined = document.queryCommandState('underline');

        fontUnderlinedBtn.classList.toggle('toggleActive', isUnderlined);

    } catch(e) {
        console.error('ERROR #121 - TOGGLE UNDERLINED FONT ERROR: ' + e);
        alert('Fehler beim verändern der Schrift(Unterstrichen) (Fehler #121)! \n Weitere Informationen sind in der Konsole zu finden.');
    }
}

function toggleStrikeThroughFont() {
    try {

        document.execCommand('strikeThrough');

        const isStrikeThrough = document.queryCommandState('strikeThrough');

        fontCrossedBtn.classList.toggle('toggleActive', isStrikeThrough);

    } catch(e) {
        console.error('ERROR #131 - TOGGLE STRIKETHROUGH FONT ERROR: ' + e);
        alert('Fehler beim verändern der Schrift(Durchgestrichen) (Fehler #131)! \n Weitere Informationen sind in der Konsole zu finden.');
    }
}

function setSelectedSize() {
    try {

        var selectionValue = fontSizeSelection.value;
        
        sizeInput.value = selectionValue;

        changeFontSize(sizeInput.value);

    } catch(e) {
        console.error('ERROR #141 - CHANGING FONT SIZE ERROR: ' + e);
        alert('Fehler beim Ändern der Schriftgröße (Fehler #141)! \n Weitere Informationen sind in der Konsole zu finden.');
    }
}
setSelectedSize();

function setFontSize() {
    try {

        changeFontSize(sizeInput.value);

    } catch(e) {
        console.error('ERROR #142 - CHANGING FONT SIZE ERROR: ' + e);
        alert('Fehler beim Ändern der Schriftgröße (Fehler #142)! \n Weitere Informationen sind in der Konsole zu finden.');
    }
}

function changeFontSize(sizeInputValue) {
    try {


        if(sizeInputValue < 1 || sizeInputValue > 1000) {
            console.warn(`Die Schriftgröße darf nicht weniger als 1px und nicht höher als 1000px sein! Eingebene Größe: ${sizeInputValue}`);
            alert(`Die Schriftgröße darf nicht weniger als 1px und nicht höher als 1000px sein! \n Eingebene Größe: ${sizeInputValue}`);
        } else {
            //document.execCommand("fontSize", sizeInputValue);
            console.log(`Schriftgröße ${sizeInputValue} ausgewählt.`);
            editor.style.fontSize = sizeInputValue + 'px';
        }

    } catch(e) {
        console.error('ERROR #143 - CHANGING FONT SIZE ERROR: ' + e);
        alert('Fehler beim Ändern der Schriftgröße (Fehler #143)! \n Weitere Informationen sind in der Konsole zu finden.');
    }
}

function changeFontFamily() {
    try {
        
        var value = fontFamilySelection.value;

        switch(value) {
            case "arial":
                console.log('Schriftart auf "Arial" gesetzt.');
                editor.style.fontFamily = "Arial, Helvetica, sans-serif";
                break;
            case "courierNew":
                console.log('Schriftart auf "Courier" gesetzt.');
                editor.style.fontFamily = "'Courier New', Courier, monospace";
                break;
            case "timesNewRoman":
                console.log('Schriftart auf "Times New Roman" gesetzt.');
                editor.style.fontFamily = "'Times New Roman', Times, serif";
                break;

        }
    } catch(e) {
        console.error('ERROR #151 - CHANGING FONT FAMILY ERROR: ' + e);
        alert('Fehler beim ändern der Schriftart (Fehler #151)! \n Weitere Informationen sind in der Konsole zu finden.');
    }
}


// ################# Eventlisteners (Function Calls) #################

lineBreakBtn.addEventListener("click", toggleLineBreak);

fontBoldBtn.addEventListener("click", toggleBoldFont);
fontItalicBtn.addEventListener("click", toggleItalicFont);
fontUnderlinedBtn.addEventListener("click", toggleUnderlinedFont);
fontCrossedBtn.addEventListener("click", toggleStrikeThroughFont);

sizeInput.addEventListener("input", setFontSize);
fontSizeSelection.addEventListener("change", setSelectedSize);

fontFamilySelection.addEventListener("change", changeFontFamily);