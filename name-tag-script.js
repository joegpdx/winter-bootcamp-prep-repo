const currentTime = new Date().getHours();


const nametag =
    document.getElementById('nametag');

// eslint-disable-next-line keyword-spacing
if (currentTime > 17) { nametag.style.background = 'darkblue'; } else { nametag.style.background = 'lightblue'; }


const nameBox =
    document.getElementById('the-name');


const myInput =
    document.getElementById('bobby');

const button =
    document.getElementById('bobby-button');

const changeValue = () => { alert(myInput.value); nameBox.textContent = myInput.value; };

button.addEventListener('click', changeValue);


