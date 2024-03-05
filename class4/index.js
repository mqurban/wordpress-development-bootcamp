// let a1 = document.getElementById("myheading");
// a1.innerText = "<h6>this text is changed with javascript</h6>";
// a1.innerHTML = "<h6>this is changed through inner html</h6>";

// a1.style.color = "red";
// a1.style.backgroundColor = "yellow";
// a1.style.fontSize = "30px";
// a1.style.border = "2px solid black";
// a1.style.padding = "10px";
// a1.style.margin = "10px";

// let testing = document.getElementsByClassName("testing");

// class1[0].innerText = "change this text";
// class1[1].innerText = "second heading with same class";

// let a1 = testing.length;

// for (let i = 0; i <= a1; i++) {
//     testing[i].style.color = "red";
//     testing[i].style.backgroundColor = "yellow";
//     testing[i].style.fontSize = "30px";
//     testing[i].style.border = "2px solid black";
//     testing[i].style.padding = "10px";
//     testing[i].style.margin = "10px";
// }

// let para = document.getElementsByTagName("p");
// // para[0].innerHTML = "<h1>this is a new paragraph</h1>";

// Array.from(para).forEach(function(p){
//     p.style.color = "red";
//     p.style.backgroundColor = "yellow";
//     p.style.fontSize = "30px";
//     p.style.border = "2px solid black";
// });

// let para1 = document.querySelector("p");

// para1.style.color = "red";


let mydiv = document.querySelectorAll(".class1 h1, p, a");

mydiv.forEach(function(div){
//  div.style.color = "red";
 if (div.tagName === "H1"){
        div.style.backgroundColor = "yellow";
        div.style.color = "pink";
 };
 if (div.tagName === "P"){
        div.style.backgroundColor = "red";
        div.style.color = "white";
 };
 if (div.tagName === "A"){
        div.style.backgroundColor = "green";
        div.style.color = "white";
 };

});



