// setTimeout(myfunction, 10000 );

// function myfunction() {
//     alert("hello");
// }

// setInterval(mysecondfunction, 5000);

// function mysecondfunction() {
//     alert("hello world");
// }


// let mainImage = document.getElementById('sliderimg');
// let otherImages = ['image4.jpg', 'image3.jpg', 'image2.jpg', 'image1.jpg'];
// let currentIndex = 0;

// function myImages() {

//     mainImage.src = otherImages[currentIndex];
//     currentIndex = (currentIndex + 1) % otherImages.length;
// }
// setInterval(myImages, 3000);



// let name = window.prompt("Enter your name");
let designation = window.prompt("Enter your designation");

if (designation === "designer"){
    window.location.href = "http://facebook.com";
}

else if(designation === "developer"){
    window.open("http://www.linkedin.com");

}