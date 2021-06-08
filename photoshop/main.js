const input = document.getElementById('file')
const button = document.querySelectorAll('button')
const output = document.getElementById('image');

let styles = ['grayscale(100%)', 'sepia(100%)', 'saturate(5))', 'hue-rotate(500deg)', 'invert(100%)', 'opacity(100%)', 'brightness(5)', 'contrast(5)', 'blur(8px)']

var loadFile = function (event) {
    var reader = new FileReader();
    reader.onload = function () {
        output.src = reader.result;
        localStorage.setItem('new image' , reader.result)
 

    };
    reader.readAsDataURL(event.target.files[0]);
};


for (let i of Array.from(button)) {


    i.addEventListener('click', () => {
        output.style.filter = styles[Array.from(button).indexOf(i)]
        console.log(output.style.filter);

    })
}






// filter: sepia(var(--value, 100%)

// filter: saturate(var(--value, 5))

// filter: hue-rotate(var(--value, 360deg))

// filter: invert(var(--value, 100%))

// filter: opacity(var(--value, 100%))

// filter: brightness(var(--value, 5))

// filter: contrast(var(--value, 5))

// filter: blur(var(--value, 1rem))


