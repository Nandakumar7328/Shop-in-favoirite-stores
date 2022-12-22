let containerElement = document.getElementById("subDiveElement")
const listOfBrand = [
    {image:"https://assets.ccbp.in/frontend/static-website/amazon-logo-img.png",
    title:"Amazon",
    discripton:"Online Shopping Free Shipping and Cash on Delivery..."
},
{image:"https://assets.ccbp.in/frontend/static-website/ikea-logo-img.png",
    title:"IKEA",
    discripton:"Explore our furniture & home furnishing range. IKEA a global leader..."
},
{image:"https://assets.ccbp.in/frontend/static-website/bewakoof-logo-img.png",
    title:"Bewakoof",
    discripton:"A Lifestyle Fashion Brand That offers creative and Distinctve Fashion..."
}
,
{image:"https://assets.ccbp.in/frontend/static-website/flipkart-logo-img.png",
    title:"Flipkart",
    discripton:"Wide Range of Genuine Products,Easy Returns,Cash on Delivery,Browse Now..."
}
]

const createListfunction = (item) => {
 const {
    image,title,discripton
 } = item

  let createLiElement = document.createElement("li")
  createLiElement.classList.add("li-container")
  containerElement.appendChild(createLiElement)

  let createImageElement = document.createElement("img")
  createImageElement.src=image
  createImageElement.classList.add("logo")
  createLiElement.appendChild(createImageElement)

  let craeteDivElement = document.createElement("div")
  craeteDivElement.classList.add("card-li-container")
  createLiElement.appendChild(craeteDivElement)

  let createHeadingElement = document.createElement("h1")
  createHeadingElement.textContent = title
  craeteDivElement.appendChild(createHeadingElement)

  let craeteParaElement = document.createElement("p")
  craeteParaElement.textContent = discripton
  craeteDivElement.appendChild(craeteParaElement)


}


for (let item of listOfBrand){
    createListfunction(item)
}