console.log('home page')


// for every time setInterval call , grab the images indexing vice
const images = [
    '/public/images/student1.jpg',
    '/public/images/student2.jpg',
    '/public/images/student0.jpg',
]


let index  = 0
function slideImages(){
    let imageContainer = document.getElementById('student-images')

    if (index < images.length) {
        let newImage  = images[index]
        imageContainer.style.backgroundImage = `url(${newImage})`
        index++;
    }
    else {
        imageContainer.style.backgroundImage = `url(${images[0]})`
        index = 0;
    }

    
}
setInterval(slideImages, 5000)

