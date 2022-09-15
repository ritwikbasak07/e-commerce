// Home page 

const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// Single product page

let mainimg = document.getElementById("mainimg");
let smallimg = (document.getElementsByClassName("small-img"));


for (let x = 0; x < smallimg.length; x++) {
    smallimg[x].onclick = () => {
        mainimg.src = smallimg[x].src;
    }
}
{
var a ;
let product = document.getElementsByClassName("pro");
for (let l = 0; l < product.length; l++) {
    product[l].onclick = ()=>{
        let product_price = document.getElementsByTagName("h4");
        let product_name = document.getElementsByTagName("h5");
        a = product_price[0].innerText;
        window.open("sproduct.html","_blank");
        
    }

}
}


window.addEventListener('load', function () {
    console.log(document.querySelectorAll(".single-pro-details h2")[0].innerText = a);
  })
// console.log(document.getElementById("price_product").innerText);