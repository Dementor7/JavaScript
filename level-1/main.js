const clr = document.getElementById('color')
const btn = document.getElementById('btn')
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']


btn.addEventListener('click', () => {
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }

    clr.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;


})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}




