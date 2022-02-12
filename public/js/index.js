document.getElementById("GoToLogin").addEventListener("click",()=>{
    window.location.href="/users"
})
function clickedInput()
{
  document.getElementById("seach-dropdown").style.visibility="visible"
}

document.getElementById("header1Data").addEventListener("click",()=>{
  document.getElementById("seach-dropdown").style.visibility="hidden"
})

//main slider js
let sliderList = document.querySelector("#sf-Slider");
let items = sliderList.querySelectorAll(".sf-SliderBox");
let count = 1;

document.getElementById("leftButton").addEventListener("click", () => {
  prevSlide();
});

document.getElementById("rightButton").addEventListener("click", () => {
  nextSlide();
});

function prevSlide() {
  if (count > 1) {
    count = count - 2;
    sliderList.style.left = "-" + count * 1600 + "px";
    count++;
  }
}

function nextSlide() {
  if (count < 6) {
    sliderList.style.left = "-" + count * 1560 + "px";
    count++;
  }
}

setInterval(function () {
  if (count == 6) {
    count = 0;
    document.getElementById("aaja1").style.left = 0;
    prevSlide();
  } else {
    nextSlide();
  }
}, 2000);


let sliderList1 = document.querySelector("#sf-Slider1");
let items1 = sliderList1.querySelectorAll(".sf-SliderBox1");
let count1 = 1;

document.getElementById("leftButton1").addEventListener("click", () => {
  prevSlide1();
});

document.getElementById("rightButton1").addEventListener("click", () => {
  nextSlide1();
});

function prevSlide1() {
  if (count1 > 1) {
    count1 = count1 - 2;
    sliderList1.style.left = "-" + count1 * 220 + "px";
    count1++;
  }
}

function nextSlide1() {
  if (count1 < 3) {
    sliderList1.style.left = "-" + count1 * 210 + "px";
    count1++;
  }
}


setInterval(function () {
    if (count1 == 3) {
      count1 = 0;
      document.getElementById("aaja1").style.left = "0px";
      prevSlide1();
    } else {
      nextSlide1();
    }
  }, 2000);

//saurabh first slider js end

//vinod part slider js
let sliderList2 = document.querySelector("#sf2-Slider");
let items2 = sliderList2.querySelectorAll(".sf2-SliderBox");
let count2 = 1;

document.getElementById("sf2-leftButton").addEventListener("click", () => {
  SF2prevSlide();
});

document.getElementById("sf2-rightButton").addEventListener("click", () => {
  SF2nextSlide();
});

function SF2prevSlide() {
  if (count2 > 1) {
    count2 = count2 - 2;
    sliderList2.style.left = "-" + count2 * 220 + "px";
    count2++;
  }
}

function SF2nextSlide() {
  if (count2 < 4) {
    sliderList2.style.left = "-" + count2 * 210 + "px";
    count2++;
  }
}
  //saurabh2 slider js ended

  setInterval(function () {
  if (count2 == 3) {
    count2 = 0;
    document.getElementById("aaja2").style.left = "0px";
    SF2prevSlide();
  } else {
    SF2nextSlide();
  }
}, 2000);

//vinod part slider js end

//saurabh slider 3 start

let sliderList3 = document.querySelector("#sf3-Slider");
  let items3 = sliderList3.querySelectorAll(".sf3-SliderBox");
  let count3 = 1;

  document.getElementById("sf3-leftButton").addEventListener("click", () => {
    SF3prevSlide();
  });

  document.getElementById("sf3-rightButton").addEventListener("click", () => {
    SF3nextSlide();
  });

  function SF3prevSlide() {
    if (count3 > 1) {
      count3 = count3 - 2;
      sliderList3.style.left = "-" + count3 * 220 + "px";
      count3++;
    }
  }

  function SF3nextSlide() {
    if (count3 < 3) {
      sliderList3.style.left = "-" + count3 * 210 + "px";
      count3++;
    }
  }
  setInterval(function () {
  if (count3 == 2) {
    count3 = 0;
    document.getElementById("aaja3").style.left = 0;
    SF3prevSlide();
  } else {
    SF3nextSlide();
  }
}, 2000);

//saurbh slider 3 end

//durgesh slider started

let sliderList4 = document.querySelector("#sf4-Slider");
let items4 = sliderList4.querySelectorAll(".sf4-SliderBox");
let count4 = 1;

document.getElementById("sf4-leftButton").addEventListener("click", () => {
  SF4prevSlide();
});

document.getElementById("sf4-rightButton").addEventListener("click", () => {
  SF4nextSlide();
});

function SF4prevSlide() {
  if (count4 > 1) {
    count4 = count4 - 2;
    sliderList4.style.left = "-" + count4 * 220 + "px";
    count4++;
  }
}

function SF4nextSlide() {
  if (count4 < 3) {
    sliderList4.style.left = "-" + count4 * 210 + "px";
    count4++;
  }
}

setInterval(function () {
    if (count4 == 2) {
      count4 = 0;
      document.getElementById("aaja4").style.left = "0px";
      SF4prevSlide();
    } else {
      SF4nextSlide();
    }
  }, 2000);

//durgesh slider ended

document.getElementById("openCart").addEventListener("click",()=>{
    // window.location.href="cart.html"
    hide();
})

//button 
mybutton = document.getElementById("myBtnSF");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

var scrollBtn = document.querySelector("#scrollTop");
scrollBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

// function userShowDown(){
//   let userShow = JSON.parse(localStorage.getItem("UserDetails")) ||["Acoount"]
//   let userName =  document.getElementById("getn")
//   console.log(userShow)
//     if(userShow.length>0){
//       userName.innerText=`${userShow[userShow.length-1].name}`
//       document.getElementById("GoToLogin").addEventListener("mouseover",()=>{
//         document.getElementById("accountdropdown").style.visibility="visible"
//       })
//       document.getElementById("accountdropdown").addEventListener("mouseover",()=>{
//         document.getElementById("accountdropdown").style.visibility="visible"
//       })
//       document.getElementById("accountdropdown").addEventListener("mouseout",()=>{
//         document.getElementById("accountdropdown").style.visibility="hidden"
//       })
//     }
//     else{
//       userName.innerText="Account"
//     }

// }
// userShowDown()