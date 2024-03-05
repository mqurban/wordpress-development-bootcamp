// let fb = document.getElementById("fb");
// let tw = document.getElementById("tw");
// let ld = document.getElementById("ld");



// fb.href = "https://www.google.com";
// tw.href = "https://www.pinterest.com";
// ld.href = "https://www.wikipedia.com";


let all_images = document.getElementsByTagName("img");

// all_images[0].src = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
// all_images[1].src = "https://source.unsplash.com/random/200x200";
// all_images[2].src =  "https://source.unsplash.com/random/203x201";


// all_images[0].alt = "Google Logo";

// all_images[0].setAttribute("id", "first_image");
// let first_image = document.getElementById("first_image");

// first_image.src = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";

// Events 


// let btn1 = document.getElementById("btn");
// btn1.addEventListener("mouseenter", function(){

//     btn1.style.backgroundColor = "blue";
//     btn1.style.color = "white";


// });


// btn1.addEventListener("mouseleave", function(){

//     btn1.style.backgroundColor = "gray";
//     btn1.style.color = "red";


// });


// create elements through javascript

let new_div = document.createElement("div");
new_div.innerHTML = "<h1> This is a new div</h1>";
new_div.style.backgroundColor = "red";
new_div.style.width = "200px";
new_div.style.height = "200px";
new_div.style.padding = "20px";

document.body.appendChild(new_div);


let new_para = document.createElement("p");
new_para.innerHTML = "This is a new paragraph";
new_para.style.color = "white";
let btn1 = document.createElement("button");
btn1.innerHTML = "button";
document.body.appendChild(btn1);



btn1.addEventListener("click", function(){


    new_div.appendChild(new_para);
    

})

