/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
// 1.html
//2.imagenes html ->JS
//3.eventos -DOM

//<div class= "p-4">
//<img  class ="mx-auto"  src="https://randomfox.ca/images/2.jpg" alt="" width="320">
//</div>  
const maximum = 122
const minimum = 1
const random = () => Math.floor(Math.random()*(maximum - minimum))+ minimum
const createImageNode = () => {
    const container = document.createElement("div")
    container.className = "p-4"
    const imagen = document.createElement('img')
    imagen.className = "mx-auto"
    imagen.width = "320"
    imagen.src = `https://randomfox.ca/images/${random()}.jpg`//todo

    container.appendChild(imagen)
    return container
}

const nuevaImagen = createImageNode()
// document.getElementById('images').appendChild(nuevaImagen)
const mountNode = document.getElementById('images')

const addButton = document.querySelector('button')

const addImage = () => {
    const newImage = createImageNode()
    mountNode.append(newImage)
}
 addButton.addEventListener("click", addImage )




