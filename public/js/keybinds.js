// #################################### Keybinds ####################################


document.addEventListener("keydown", function(e) {
    if((e.ctrlKey || e.metaKey) && e.altKey && e.key === "f") { toggleBoldFont(); }

    if((e.ctrlKey || e.metaKey) && e.altKey && e.key === "k") { toggleItalicFont(); }

    if((e.ctrlKey || e.metaKey) && e.altKey && e.key === "u") { toggleUnderlinedFont(); }

    if((e.ctrlKey || e.metaKey) && e.altKey && e.key === "a") { themeSwitch(); }

    if((e.ctrlKey || e.metaKey) && e.key === "s") { e.preventDefault(); saveFileBtn.click(); }

    if((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "+") { increaseZoomBtn.click(); }

    if((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "-") { decreaseZoomBtn.click(); }
});

