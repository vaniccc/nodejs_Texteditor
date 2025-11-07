const popup = document.getElementById('helpPopup');
const helpHeaderButton = document.getElementById('helpHeaderButton');
const closePopupBtn = document.getElementById('closePopupBtn');


function toggleHelpPopup() {
    popup.classList.toggle("showPopup");
}

helpHeaderButton.addEventListener("click", toggleHelpPopup);
closePopupBtn.addEventListener("click", toggleHelpPopup);