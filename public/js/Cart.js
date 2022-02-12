var bagproducts = JSON.parse(localStorage.getItem("bagdata")) || [];
console.log("bagproducts", bagproducts)



// console.log(bagproducts.length) 

var pr = 0;

var bigBox = document.getElementById("V-cart-products");

if (bagproducts.length == 0) {
    // document.getElementById("heading").style.display = "none" 
    document.getElementById("hide").style.display = "none"
    document.getElementById("V-total-details").style.display = "none"


    let image = document.createElement("img");
    image.setAttribute("id", "image-icon")
    let para = document.createElement("h4")
    para.innerText = "Your Shopping Bag is Empty"
    para.setAttribute("class", "para")

    let shopBtn = document.createElement("button");
    shopBtn.innerText = "Start Shopping"
    shopBtn.setAttribute("class", "shopBtn")
    bigBox.style.height = "500px"
    document.getElementById("cart-items").style.height = "623px"


    image.src = "https://cdn0.iconfinder.com/data/icons/flat-design-business-set-5/24/shopping-bag-grey-512.png"
    bigBox.append(image, para, shopBtn)
}
else {
    showProducts(bagproducts)
}



function showProducts(item) {
    item.forEach(function (el, index) {
        var div = document.createElement("div");
        var img = document.createElement("img");
        img.src = el.images[0];
        var p = document.createElement("p");
        p.innerText = el.name;

        var div2 = document.createElement("div");
        var lable = document.createElement("label")
        lable.textContent = "Quantity :"

        var i = document.createElement("i");
        i.setAttribute("class", "fas fa-trash-alt")
        i.setAttribute("id", "deleteItem");

        i.addEventListener("click", function () {
            makeDelete(index)
            // deleteItem(event)
        })


        var select = document.createElement("select");
        select.setAttribute("id", "selected");

        var opt1 = document.createElement("option")
        opt1.textContent = "1"

        var opt2 = document.createElement("option")
        opt2.textContent = "2"

        var opt3 = document.createElement("option")
        opt3.textContent = "3"
        var opt4 = document.createElement("option")
        opt4.textContent = "4"
        var opt5 = document.createElement("option")
        opt5.textContent = "5"

        select.append(opt1, opt2, opt3, opt4, opt5)
        div2.append(select);

        var p2 = document.createElement("h3");
        p2.setAttribute("id", "price")
        p2.innerText = `₹ ${el.newprice.$numberInt}`

        pr += +el.newprice.$numberInt

        select.addEventListener("change", function () {
            var p = +el.newprice.$numberInt;

            var qty_p = p * select.value
            p2.textContent = Math.floor(qty_p)

            pr += qty_p;
            document.getElementById("total").innerText = "₹" + Math.floor(pr) + " " + "/-"

            let discount = Math.floor(0.1 * Math.floor(pr));
            document.getElementById("bigDis").innerText = `₹ ${discount}`;

            let discounted_price = Math.floor(pr) - Math.floor(0.1 * Math.floor(pr));
            document.getElementById("subtotal").innerText = `₹ ${discounted_price}`;

            document.getElementById("shipping").innerText = "None";
            document.getElementById("grand").innerText = `₹ ${discounted_price}`;

            let total_price = document.getElementById("grand_total");
            total_price.innerText = `₹ ${discounted_price}`

        })
        div.append(img, p, i, lable, div2, p2)
        bigBox.append(div)
    })
}


document.getElementById("total").innerText = "₹" + Math.floor(pr) + " " + "/-"
let discount = Math.floor(0.1 * pr);
document.getElementById("bigDis").innerText = `₹ ${discount}`;;

let discounted_price = Math.floor(pr) - discount
document.getElementById("subtotal").innerText = `₹ ${discounted_price}`;

document.getElementById("shipping").innerText = "FREE";
document.getElementById("grand").innerText = `₹ ${discounted_price}`;


let total_price = document.getElementById("grand_total");
total_price.innerText = `₹ ${discounted_price}`

function makeDelete(index) {
    bagproducts.splice(index, 1)
    localStorage.setItem("bagdata", JSON.stringify(bagproducts));


    location.reload();

}


var count7 = 0

function hide() {

    document.getElementById("test").style.right = "0"
    document.getElementById("test").style.left = "72%"
    document.getElementById("test").style.transition = "all 1s ease"
    // document.body.style.overflow = "hidden" 
    // disableBodyScroll()   



    // document.getElementById("test").style.opacity="1"

}


localStorage.setItem("count", count7);

function myFunction() {
    console.log("here")
    document.getElementById("test").style.right = "-80%"
    document.getElementById("test").style.left = "100%"
    document.getElementById("test").style.transition = "all 1s ease"
    // document.body.style.overflow = "scroll" 
    enableBodyScroll()
}

document.getElementById("openCart").addEventListener("click", () => {
    // window.location.href="cart.html"
    hide();
})


function disableBodyScroll() {
    const element = document.querySelector("body");
    element.classList.add("stop-scroll");
}

function enableBodyScroll() {
    const element = document.querySelector("body");
    element.classList.remove("stop-scroll");
}
function deleteItem(event) {
    event.target.parentNode.remove();
}


document.getElementById("gotopayment666").addEventListener("click", function () {
    let ff = Math.floor(Math.floor(pr) - Math.floor(0.1 * pr))
    localStorage.setItem("discount", discount);
    localStorage.setItem("totalprice", ff)
    console.log(ff)
    window.location.href = "/add2"
})
// console.log(document.getElementById("gotopayment666")) 