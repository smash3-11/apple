

let btnSpace = document.querySelector(".spacegray")
let btnWhite = document.querySelector(".white")
let img = document.querySelector("#img")
let chP = document.querySelector(".color")
// let price = document.querySelector(".price")

btnSpace.onclick = () => {
  btnSpace.style.backgroundColor = "#0071E3"
  btnWhite.style.backgroundColor = "#CFE7FF"
//   img.src = "img/silver.png"
  chP.innerHTML = 'Space Gray'
//   price.innerHTML = '$ 2.599'
img.src = "img/spacegray.png"

console.log("click1"); 
};

btnWhite.onclick = () => {
    btnWhite.style.backgroundColor =  "#0071E3"
    btnSpace.style.backgroundColor = "#CFE7FF"
    // img.src = "img/spacegray.png"
    chP.innerHTML = 'White' 
    // price.innerHTML = '$ 1.999'
    img.src = "img/silver.png"
    console.log("click2");
};


let priceEl = document.querySelector(".price")
let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')
let btn4 = document.querySelector('.btn4')
let price = 1999


// ! active, foEach is not defind
let active_btn = document.querySelectorAll("button[data-price]")

active_btn.forEach(btn => {
    btn.onclick = () =>{
        forEach(el =  el.classList.remove('active'))
        btn.classList.add('active')

    }
});
btn1.onclick = () => {
    price = 1999 
    if (price === 1999) {
        priceEl.innerHTML = `$ ${price}`
    }

}

btn2.onclick = () => {
      price += 200
      if (price >= 2199) {
          priceEl.innerHTML = `$ ${price}`
      }
      console.log("click200");
}
btn3.onclick = () => {
    price += 600
    if (price === 2599) {
        priceEl.innerHTML = `$ ${price}`
    }
    console.log("click600");
}
btn4.onclick = () => {
    price += 1200
    if (price === 3199) {
        priceEl.innerHTML = `$ ${price}`
    }
    console.log("click1200");
}





















// if (document.readyState === "interactive" || document.readyState === "complete") {
//     console.log("DOM is ready!");
//   } else {
//     console.log("DOM is not ready yet.");
//   }
  