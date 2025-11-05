// #################################### Footer Functions ####################################

const zoomInput = document.getElementById('zoomInput');

function WordCount() {
    try {
        const editorString = editor.innerHTML.toString();
               
        const words = document.getElementById('words');
        words.innerHTML = 'Wörter: ' + editorString.split(" ").length;
    } catch(e) {
        console.error('ERROR #501 - COUNTING WORDS ERROR: ' + e);
        alert('Fehler beim zählen der Wörter (Fehler #501)! \n Weitere Informationen sind in der Konsole zu finden.');
    }
}
WordCount();

function changeZoom() {
    try {
        const zoomInputValue = zoomInput.value;

        console.log(`Zoom auf ${zoomInputValue} gestellt.`);
        editor.style.zoom = zoomInputValue + '%';

        outputZoomValue();
    } catch(e) {
        console.error('ERROR #601 - ZOOMING ERROR: ' + e);
        alert('Fehler beim Zoomen (Fehler #601)! \n Weitere Informationen sind in der Konsole zu finden.');
    }
}

function outputZoomValue() {
    try {

        const zoomInputValue = zoomInput.value;

        const zoomOutput = document.getElementById('zoomOutput');
        zoomOutput.innerHTML = zoomInputValue + '%';

    } catch(e) {
        console.error('ERROR #602 - ZOOM OUTPUT ERROR: ' + e);
        alert('Fehler beim Aufgeben der Zoom % (Fehler #602)! \n Weitere Informationen sind in der Konsole zu finden.');
    }
}
outputZoomValue();

// ################# Eventlisteners (Function Calls) #################

document.getElementById('editor').addEventListener("input", WordCount);

document.getElementById('zoomInput').addEventListener("input", changeZoom);

