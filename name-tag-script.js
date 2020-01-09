const nameBox =
document.getElementById('the-name');


const myInput =
document.getElementById('bobby');

const button =
document.getElementById('bobby-button')

const changeValue = () => {
    alert(myInput.value)
    nameBox.textContent = myInput.value
}

button.addEventListener('click', changeValue)


