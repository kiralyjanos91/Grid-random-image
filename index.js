const gridContainer = document.querySelector(".grid-container")
const mainImg = document.querySelector('.main-img')
const backgroundColors = ["#633d0e","#ed1eb6","#e3b5e1","#d9d2dc","#e5eaf2"]
let colorCounter = 0

async function getImages(){
    let response = await fetch("https://picsum.photos/v2/list?limit=9")
    let data = await response.json()
    return data.map(x => x.download_url)
}

htmlCreator = (url) => url => `<img src="${url}" class="smallimgs" onclick="gomain(this)">`

getImages()
    .then(urls => {
        document.querySelector('.main-img').innerHTML = `<img src="${urls[0]}">`
        gridContainer.innerHTML += urls.map(htmlCreator()).join("")
    })
      
function gomain(e){
    document.querySelector('.main-img').innerHTML = `<img src="${e.src}">`
    randomColor()
}

randomColor = () => {
    colorCounter += 1
    if (colorCounter === 5){colorCounter = 0}
    document.body.style.backgroundColor = backgroundColors[colorCounter]
}