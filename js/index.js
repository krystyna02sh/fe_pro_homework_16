const titleInput = document.getElementById('title');
const textInput = document.getElementById('text');
const submitBtn = document.getElementById('submitBtn');
const customAlert = document.getElementById('customAlert');
const trueAlert = document.getElementById('alert');
const alerTitle = document.getElementById('alerTitle');
const alerText = document.getElementById('alerText');
const alertBtn = document.getElementById('alertBtn');
submitBtn.addEventListener('click', () => {
    const title = titleInput.value.trim();
    const text = textInput.value.trim();
    if (text !== "" && title !== "") {
        addText(title, text);
        showAlert(customAlert, trueAlert);
        titleInput.value = "";
        textInput.value = "";
    }
    else {
        alert('Nothig is typed to one of the registration fields.')
    }
}

)
function showAlert(wrapper, al) {

    wrapper.classList.add('active');
    al.classList.add('active');

}
function addText(title, text) {
    alerTitle.textContent = title;
    alerText.textContent = text;
}

alertBtn.addEventListener('click', () => {
    customAlert.classList.remove('active');
    trueAlert.classList.remove('active');
}

)