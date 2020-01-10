const myInput = document.getElementById('text');

const myStereo = document.getElementById('my-stereo');

const button = document.getElementById('text-button');

const changeValue = () => {
    alert(myInput.value);
    myStereo.textContent = myInput.value;
};

button.addEventListener('click', changeValue);
