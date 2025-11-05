// #################################### Format Functions ####################################

let isLineBreakOn = false;
        
function toggleLineBreak() {
    isLineBreakOn = !isLineBreakOn;

    var checkmark = document.getElementById('checkmark');
    checkmark.classList.toggle('checkmarkclicked'); 
}

    document.getElementById('editor').addEventListener("focus", function (e) {
    
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

        const btn = document.getElementById('fontBoldBtn');
        btn.classList.toggle('toggleActive', isBold);
               
    } catch(e) {
        console.error('ERROR #101 - TOGGLE BOLD FONT ERROR: ' + e);
        alert('Fehler beim verändern der Schrift(Fett) (Fehler #101)! \n Weitere Informationen sind in der Konsole zu finden.');
    }
}

function toggleItalicFont() {
    try {

        document.execCommand('italic');

        const isItalic = document.queryCommandState('italic');

        const btn = document.getElementById('fontItalicBtn');
        btn.classList.toggle('toggleActive', isItalic);

    } catch(e) {
        console.error('ERROR #111 - TOGGLE ITALIC FONT ERROR: ' + e);
        alert('Fehler beim verändern der Schrift(Kursiv) (Fehler #111)! \n Weitere Informationen sind in der Konsole zu finden.');
    }
}

function toggleUnderlinedFont() {
    try {

        document.execCommand('underline');

        const isUnderlined = document.queryCommandState('underline');

        const btn = document.getElementById('fontUnderlinedBtn');
        btn.classList.toggle('toggleActive', isUnderlined);

    } catch(e) {
        console.error('ERROR #121 - TOGGLE UNDERLINED FONT ERROR: ' + e);
        alert('Fehler beim verändern der Schrift(Unterstrichen) (Fehler #121)! \n Weitere Informationen sind in der Konsole zu finden.');
    }
}

function toggleStrikeThroughFont() {
    try {

        document.execCommand('strikeThrough');

        const isStrikeThrough = document.queryCommandState('strikeThrough');

        const btn = document.getElementById('fontCrossedBtn');
        btn.classList.toggle('toggleActive', isStrikeThrough);

    } catch(e) {
        console.error('ERROR #131 - TOGGLE STRIKETHROUGH FONT ERROR: ' + e);
        alert('Fehler beim verändern der Schrift(Durchgestrichen) (Fehler #131)! \n Weitere Informationen sind in der Konsole zu finden.');
    }
}

function setSelectedSize() {
    try {

        var selection = document.getElementById('fontSizeSelection');
        var selectionValue = selection.value;

        var sizeInput = document.getElementById('sizeInput');
        sizeInput.value = selectionValue;

        changeFontSize(sizeInput.value);

    } catch(e) {
        console.error('ERROR #142 - CHANGING FONT SIZE ERROR: ' + e);
        alert('Fehler beim Ändern der Schriftgröße (Fehler #142)! \n Weitere Informationen sind in der Konsole zu finden.');
    }
}
setSelectedSize();

function setFontSize() {
    try {

        var sizeInput = document.getElementById('sizeInput');

        changeFontSize(sizeInput.value);

    } catch(e) {
        console.error('ERROR #141 - CHANGING FONT SIZE ERROR: ' + e);
        alert('Fehler beim Ändern der Schriftgröße (Fehler #141)! \n Weitere Informationen sind in der Konsole zu finden.');
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

        var selection = document.getElementById('fontFamilySelection');
        var value = selection.value;

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

document.getElementById('lineBreakBtn').addEventListener("click", toggleLineBreak);

document.getElementById('fontBoldBtn').addEventListener("click", toggleBoldFont);
document.getElementById('fontItalicBtn').addEventListener("click", toggleItalicFont);
document.getElementById('fontUnderlinedBtn').addEventListener("click", toggleUnderlinedFont);
document.getElementById('fontCrossedBtn').addEventListener("click", toggleStrikeThroughFont);

document.getElementById('sizeInput').addEventListener("input", setFontSize);
document.getElementById('fontSizeSelection').addEventListener("change", setSelectedSize);

document.getElementById('fontFamilySelection').addEventListener("change", changeFontFamily);