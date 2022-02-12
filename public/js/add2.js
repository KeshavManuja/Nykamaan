let userEmail = JSON.parse(localStorage.getItem("UserDetails"))
let email = document.getElementById("email");
email.innerText = `${userEmail.email}`

email.style.color = "rgb(82,83, 94)";
email.style.fontSize = "14px";

var userArr = JSON.parse(localStorage.getItem("userData")) || [];

document.getElementById("btn").addEventListener("click", gotopay)
function gotopay() {
    // console.log("ok")
    // let address = document.getElementById("addo").value
    // console.log(address)
    var Name = document.getElementById("box").value;
const pnumber = document.getElementById("box1").value;
const postalcode = document.getElementById("box2").value;
const address = document.getElementById("addo").value;



 function check(){
     
if (Name.length == 0) {
    
    document.getElementById("box").style.border = "1px solid red";
    document.getElementById("error").innerText = "Name Field is Required*";
    document.getElementById("error").style.color = "red";

    return false;
 
} else {
   document.getElementById("box").style.border = "none";
}

if (pnumber.length != 10) {
    document.getElementById("box1").style.border = "1px solid red";
    document.getElementById("error").innerText = "Invalid Phone Number*";
    document.getElementById("error").style.color = "red";
    return false;
} else {
    document.getElementById("box1").style.border = "none";
}

if (postalcode.length != 6) {
    document.getElementById("box2").style.border = "1px solid red";
    document.getElementById("error").innerText = "Invalid Postal code*";
    document.getElementById("error").style.color = "red";
    return false;
} else {
    document.getElementById("box2").style.border = "none";
}

if (add.length == 0) {
    document.getElementById("addo").style.border = "1px solid red";
    document.getElementById("error").innerText = " Address Field is Required*";
    document.getElementById("error").style.color = "red";
    return false;
} else {
    document.getElementById("addo").style.border = "none";
}
return true;

}

  if (check()) {
    var userC = {
        
        Name: Name,
        pnumber: pnumber,
        postalcode: postalcode,
        add: add,
       
    };
    userArr.push(userC);
    localStorage.setItem("userData", JSON.stringify(userArr));
    var inputs = document.querySelectorAll("input");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
    localStorage.setItem("address", address)
    window.location = "/payment"
}
}

let cartappend = document.getElementById("cartdata")

let data = JSON.parse(localStorage.getItem("bagdata"))
console.log('data:', data)
displayitems(data)

function displayitems(data) {
    data.forEach(function (item) {

        console.log(item)
        let mdiv = document.createElement("div")
        mdiv.setAttribute("id", "mdiv")

        let div1 = document.createElement("div")
        div1.setAttribute("id", "imgdiv")

        let img = document.createElement("img")
        img.setAttribute("src", item.images[0])
        img.style.width = "100%"
        img.style.height = "70%"

        div1.append(img)

        let div2 = document.createElement("div")
        div2.setAttribute("id", "detailsdiv")

        let title = document.createElement("p")
        title.textContent = item.name

        let ml = document.createElement("p")
        let ram = Math.floor(Math.random() * 100)
        ml.innerHTML = `${ram} ml`

        let lowerdiv = document.createElement("div")
        lowerdiv.setAttribute("id", "lowerdiv")
        let qty = document.createElement("p")
        let num = 1
        qty.innerHTML = `Qty : ${num}`

        let pricediv = document.createElement("div")
        pricediv.setAttribute("id", "pdiv")

        let oldprice = document.createElement("p")
        oldprice.textContent = `₹${item.oldPrice.$numberInt}`
        oldprice.style.textDecoration = "line-through";
        oldprice.style.marginRight = "5%"

        let newprice = document.createElement("p")
        newprice.textContent = `₹${item.newprice.$numberInt}`;

        pricediv.append(oldprice, newprice)

        lowerdiv.append(qty, pricediv)


        div2.append(title, ml, lowerdiv)
        // let hr=document.createElement("hr")
        mdiv.append(div1, div2)
        mdiv.style.width = "100%"

        cartappend.append(mdiv)
    })

}


// Chaging item bag
let a = JSON.parse(localStorage.getItem("bagdata"))
let b = a.length
document.getElementById("itemsinbag").innerHTML = `${b} items in your cart`

var click_edit = 0
// details change
document.getElementById("detailsicon").addEventListener("click", () => {


    if (click_edit % 2 == 0) {
        let a = document.getElementById("detailsicon")
        a.childNodes[1].innerHTML = "EDIT"
        console.log(a.childNodes)

        // console.log(a.childNodes[3].classList)
        a.childNodes[3].outerHTML = '<i class="fas fa-angle-up" aria-hidden="true"></i>';

        document.getElementById("cartdata").style.display = "none"
    }
    else {
        let a = document.getElementById("detailsicon")
        a.childNodes[1].innerHTML = "DETAILS"
        console.log(a.childNodes)

        // console.log(a.childNodes[3].classList)
        a.childNodes[3].outerHTML = '<i class="fas fa-angle-down" aria-hidden="true"></i>'
        document.getElementById("cartdata").style.display = "block"
    }
    click_edit++


})

// Grandtotal
var click_total = 0
// details change
document.getElementById("ftotal").addEventListener("click", () => {
    if (click_total % 2 == 0) {

        document.getElementById("totaldiv").style.display = "none"
    }
    else {
        let a = document.getElementById("detailsicon")
        a.childNodes[1].innerHTML = "DETAILS"
        console.log(a.childNodes)

        // console.log(a.childNodes[3].classList)
        a.childNodes[3].outerHTML = '<i class="fas fa-angle-down" aria-hidden="true"></i>'
        document.getElementById("totaldiv").style.display = "block"
    }
    click_total++;
});

let discount = localStorage.getItem("discount");
document.getElementById("discount").innerText = `₹${discount}`;
let totalprice = localStorage.getItem("totalprice");
document.getElementById("subtotal").textContent = `₹${totalprice}`;
document.getElementById("totall").textContent = `₹${totalprice}`;