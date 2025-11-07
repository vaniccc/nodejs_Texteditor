// #################################### Footer Functions ####################################

const words = document.getElementById('words');

const zoomInput = document.getElementById('zoomInput');
const zoomOutput = document.getElementById('zoomOutput');

const decreaseZoomBtn = document.getElementById('decreaseZoomBtn');
const increaseZoomBtn = document.getElementById('increaseZoomBtn');

let zoom = 100;

function WordCount() {
    try {
        const editorString = editor.innerHTML.toString();
               
        words.innerHTML = 'Wörter: ' + editorString.split(" ").length;
    } catch(e) {
        console.error('ERROR #501 - COUNTING WORDS ERROR: ' + e);
        alert('Fehler beim zählen der Wörter (Fehler #501)! \n Weitere Informationen sind in der Konsole zu finden.');
    }
}
WordCount();


function changeZoom() {
    try {
        zoom = zoomInput.value;

        //console.log(`Zoom auf ${zoom} gestellt.`);
        editor.style.zoom = zoom + '%';

        outputZoomValue();
    } catch(e) {
        console.error('ERROR #601 - ZOOMING ERROR: ' + e);
        alert('Fehler beim Zoomen (Fehler #601)! \n Weitere Informationen sind in der Konsole zu finden.');
    }
}

function increaseZoomByTen() {
    try {
        if(zoom >= 400 ) 
            return;
        
        zoom = zoom + 10;

        zoomInput.value = zoom;

        //console.log(`Zoom auf ${zoom} gestellt.`);
        editor.style.zoom = zoom + '%';

        outputZoomValue();
    } catch(e) {
        console.error('ERROR #602 - ZOOMING IN ERROR: ' + e);
        alert('Fehler beim rein Zoomen (Fehler #602)! \n Weitere Informationen sind in der Konsole zu finden.');
    }
}

function decreaseZoomByTen() {
    try {
        if(zoom <= 10 ) {
            return;
        }
        zoom = zoom - 10;

        zoomInput.value = zoom;

        //console.log(`Zoom auf ${zoom} gestellt.`);
        editor.style.zoom = zoom + '%';

        outputZoomValue();
    } catch(e) {
        console.error('ERROR #603 - ZOOMING OUT ERROR: ' + e);
        alert('Fehler beim raus Zoomen (Fehler #603)! \n Weitere Informationen sind in der Konsole zu finden.');
    }
}

function outputZoomValue() {
    try {
        zoomOutput.innerHTML = zoom + '%';
    } catch(e) {
        console.error('ERROR #604 - ZOOM OUTPUT ERROR: ' + e);
        alert('Fehler beim Ausgeben der Zoomstärke (Fehler #602)! \n Weitere Informationen sind in der Konsole zu finden.');
    }
}
outputZoomValue();

// ################# Eventlisteners (Function Calls) #################

editor.addEventListener("input", WordCount);

zoomInput.addEventListener("input", changeZoom);

increaseZoomBtn.addEventListener('click', increaseZoomByTen);
decreaseZoomBtn.addEventListener('click', decreaseZoomByTen);




