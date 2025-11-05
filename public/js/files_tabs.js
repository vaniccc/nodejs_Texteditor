// #################################### Tab Functions ####################################

const editor = document.getElementById('editor');

const tabBar = document.getElementById("tabBar");

const newTabBtn = document.getElementById('newTabBtn');
const qSAddTabBtn = document.getElementById('qSAddTabBtn');
const closeLastTabBtn = document.getElementById('closeLastTabBtn');
const qSCloseTabBtn = document.getElementById('qSCloseTabBtn');

const openFileBtn = document.getElementById('openFileBtn');
const saveFileBtn = document.getElementById('saveFileBtn');
const saveFileAsBtn = document.getElementById('saveFileAsBtn');
const closeFileBtn = document.getElementById('closeFileBtn');



let tabs = []; 
let activeTabId = null;
let nextid = 1; 
let numberOfTabs = 0;

function addTab({ title = 'Neuer Tab', content = '', path = null} = {}) {
    const id = nextid++;
    numberOfTabs++;
    tabs.push({id, title, path, content, edited: false});
    selectTab(id);
}

function getActiveTab() {
    return tabs.find(t => t.id === activeTabId) || null;
}

function selectTab(id) {
    try {
        activeTabId = id;
        console.log('Selected Tab: ' + activeTabId);
        const t = getActiveTab();
        editor.innerHTML = t ? t.content : '';
        
        if(numberOfTabs <= 9)
            createTab();
        else
            return alert('Es dürfen maximal nur 9 Tabs geöffnet sein'); 
        updateTitle();

    } catch(e) {
        console.error('ERROR #421 - SELECT TAB ERROR: ' + e);
        alert('Fehler beim Selektieren eines Tabs (Fehler #421)! \n Weitere Informationen sind in der Konsole zu finden.');
    }
}

function createTab() {
    try {
        tabBar.innerHTML = '';
        
        tabs.forEach(t => {
            const tab = document.createElement("div");
            tab.className = "tab" + (t.id === activeTabId ? " tabActive" : "");
            tab.dataset.id = t.id;

            const title = document.createElement('button');
            title.textContent = (t.title || 'Neuer Tab');
            title.className = 'tabBtn';

            const close = document.createElement('button');
            close.textContent = "x";
            close.className = 'closeTabBtn';
            close.title = 'Tab schließen';

            tab.appendChild(title);
            tab.appendChild(close);
            tabBar.appendChild(tab);
           

            tab.addEventListener('click', (e) => {
                if (e.target === close) closeTab(t.id);
                
                else selectTab(t.id);
            });
        });
    } catch(e) {
        console.error('ERROR #411 - CREATING NEW TAB ERROR: ' + e);
        alert('Fehler beim erstellen eines neuen Tabs (Fehler #411)! \n Weitere Informationen sind in der Konsole zu finden.');
    }
}


function closeTab(id) {
    try {
        const t = tabs.find(x => x.id === id);

        if(!t) 
            return;

        if(t.edited && !confirm('Ungespeicherte Änderungen verwerfen?')) 
            return;

        numberOfTabs--;

        tabs = tabs.filter(x => x.id !== id);

        if(tabs.length === 0) 
            addTab();

        else if (activeTabId === id) 
            selectTab(tabs[tabs.length - 1].id);

        else 
            createTab();
    
    } catch(e) {
        console.error('ERROR #441 - CLOSING TAB ERROR: ' + e);
        alert('Fehler beim Schließen eines Tabs (Fehler #441)! \n Weitere Informationen sind in der Konsole zu finden.');
    }
}

function updateTitle() {
    const t = getActiveTab();
    document.title = (t?.title || 'Neuer Tab') + ' — Node.js Texteditor';
}


newTabBtn.onclick = () => addTab();
qSAddTabBtn.onclick = () => addTab();


openFileBtn.onclick = async () => {
    try {
        const res = await fetch('/api/open', { 
            method: 'POST'
        });

        if(res.status === 204) { // abgebrochen, wenn kein Path existent ist (Status 204 = No Content)
            return;
        }

        const data = await res.json();

        addTab({ title: basename(data.filePath), content: data.content, path: data.filePath})

    } catch (e) {
        console.error('ERROR #001: OPEN FILE ERROR: ' + e);
        alert('Fehler beim Öffnen der Datei (Fehler #001)! \n \nWeitere Informationen sind in der Konsole zu finden.');
    }
};

saveFileBtn.onclick = async () => {
    
    const t = getActiveTab();

    if(!t)
        return;
    
    try {

        if(!t.path) 
            return await saveAs();

        const res = await fetch('/api/save', { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ filePath: t.path, content: getPlainTextFromEditor() })
        });

        t.content = editor.innerHTML;
        t.edited = false;

        createTab();
        updateTitle();
    } catch (e) {
        console.error('ERROR #011: SAVE FILE ERROR: ' + e);
        alert('Fehler beim Speichern der Datei (Fehler #011)! \n \nWeitere Informationen sind in der Konsole zu finden.');
    }
}; 

saveFileAsBtn.onclick = () => saveAs();

async function saveAs() {

    const t = getActiveTab();

    if(!t) 
        return;

    try {
        const res = await fetch('/api/saveas', { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content: getPlainTextFromEditor(), suggestedName: t.title || 'Unbenannt.txt' })
        });

        console.log("SaveAs content:", editor.innerHTML);

        if(res.status === 204) { // abgebrochen, wenn kein Path existent ist (Status 204 = No Content)
            return;
        }

        const data = await res.json();

        t.path = data.filePath;
        t.title = basename(data.filePath);
        t.content = editor.innerHTML;
        t.edited = false;

        createTab();
        updateTitle();
    } catch (e) {
        console.error('ERROR #021: SAVE FILE AS ERROR: ' + e);
        alert('Fehler beim Speichern der Datei (Fehler #021)! \n \nWeitere Informationen sind in der Konsole zu finden.');
    }
}

editor.addEventListener('input', () => {
    const t = getActiveTab();
    
    if (!t) return;
    
    t.content = editor.innerHTML;

    if(!t.edited) {
        t.edited = true;
    }
});

function basename(p) {
  if (!p) return '';
  return p.split(/[\\/]/).pop();
}

function getPlainTextFromEditor() {
    let newValue = '';
    let isOnFreshLine = true;

    // Rekursive Funktion zur Navigation durch knoten und zum Erstellen von Zeilenumbrüchen mit Text
    function parseNodes(nodes) {
        nodes.forEach(node => {
            
            if (node.nodeName === 'BR') {
                // BRs sind immer Zeilenumbrüche, was bedeutet, dass die nächste Schleife in einer neuen Zeile beginnt.
                newValue += '\n';
                isOnFreshLine = true;
                return;
            }

            if (node.nodeName === 'DIV' && !isOnFreshLine) {
                // Divs erstellen neue Linien für sich selbst, falls sie nicht bereits in einer sind.
                newValue += '\n';
            }

            // Unabhängig davon, ob wir eine neue Zeile erstellt haben oder nicht, verwenden wir sie für diesen Inhalt, sodass die nächste Schleife nicht in einer neuen Zeile beginnt:
            isOnFreshLine = false;

      
            // Füge den Textinhalt hinzu, falls es sich um einen Textknoten handelt:
            if (node.nodeType === 3 && node.textContent) {
                newValue += node.textContent;
            }

            parseNodes(node.childNodes);
            
        });
    }

    parseNodes(editor.childNodes);
    return newValue;
}

addTab();