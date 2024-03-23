let imgs = ['img/apple.jpg', 'img/banana.jpg', 'img/pear.jpg']

let image = document.querySelector('img')
let i = 0;

setInterval(()=> {
    image.src = imgs[i]
    i++
    if (i == imgs.length) {
        i = 0
    }
},1000)