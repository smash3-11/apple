let btn14 = document.querySelector('#btn14')
let btn14Max = document.querySelector('#btn14Max')
let blac = document.querySelector('.blac')
let img = document.querySelector('#img')
btn14.onclick = ()=>{
    btn14.style.border = '3px solid #0071e3'
    blac.classList.add('none')
    btn14Max.style.border = '1px solid gray'
    blac.classList.add('none')
    img.src = 'img/deeppurple.jpg'
} 

btn14Max.onclick = ()=>{
    btn14Max.style.border = '3px solid #0071e3'
    blac.classList.add  ('none')
    btn14.style.border = '1px solid gray'
    img.src="img/deeppurple.jpg"
    blac.classList.add('none')

}
let color1 = document.querySelector('#color1')
let color2 = document.querySelector('#color2')
let color3 = document.querySelector('#color3')
let color4 = document.querySelector('#color4')


let color = document.querySelector('#color')

color1.onmouseenter = ()=>{
    color.innerHTML=' Purple'
}
color1.onclick = ()=>{
    img.src = 'img/deeppurple.jpg'
}
color2.onmouseenter = ()=>{
    color.innerHTML=' Gold'
    
}
color2.onclick = ()=>{
    img.src = 'img/golg.jpg'
}
color3.onmouseenter = ()=>{
    color.innerHTML=' Silver'
}
color3.onclick = ()=>{
    img.src = 'img/silver.jpg'
}
color4.onmouseenter = ()=>{
    color.innerHTML=' Black'
}
color4.onclick = ()=>{
    img.src = 'img/black.jpg'
}
