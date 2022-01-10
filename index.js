// add functionality to the sidebar nav

const sideBar = document.querySelector('.side-bar');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const crossBtn = document.querySelector('.cross-btn');


// Cart increment & Decrement 
const minusBtn = document.querySelector('.fa-minus');
const plusBtn = document.querySelector('.fa-plus');
const counterValue = document.querySelector('#counter');
const addCartBtn = document.querySelector('#add-to-cart');


addCartBtn.addEventListener('click', ()=>{
    counterValue.textContent = ++counter; 
});

plusBtn.addEventListener('click', ()=>{
    counterValue.textContent = ++counter; 
});

minusBtn.addEventListener('click', ()=>{
    counterValue.textContent -= 1; 
});


hamburgerMenu.addEventListener('click', () => myFunc('open'));
crossBtn.addEventListener('click', () => myFunc('close'));

function myFunc(condition){
    if(condition === 'open'){
        sideBar.classList.add('show-sidebar');
    }
    else if(condition === 'close'){
        sideBar.classList.remove('show-sidebar');
    }
}
// side bar functionality ends right here

// select that hero slide image and the btns containers

const mySlides = document.querySelectorAll('.hero-slide-image');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

mySlides.forEach(function (slideItem, index){
    slideItem.style.left = `${index * 100}%`;
});

//  let counter equal to 0 for the starting point
// increase the counter by 1 each time you click on it
// call the function slideImage to slide the image by 100% when you click on it

let counter = 0;
leftArrow.addEventListener('click', function (){
    counter--;
    slideImage();
});
// right Arrow
rightArrow.addEventListener('click', function (){
    counter++;
    slideImage();
});
// function slideImage is down here

function slideImage(){
    // add conditions to the slide
    if(counter >= mySlides.length){
        counter = 0;
    }
    if(counter < 0){
        counter = mySlides.length - 1;
    }
    mySlides.forEach(function (slideItem){
        slideItem.style.transform = `translateX(-${counter * 100}%)`;
    });
}


// listen for the clicks event on all thumbnails images 
//  change the main hero image by click on the specific thumbnails

let image = document.querySelector('.hero-img');

const myTarget1 = document.querySelector('.tbhn1'); // thumbnail image 1

myTarget1.addEventListener('click', function (){
    myTarget1.style.opacity = 0.5;
    image.setAttribute('src', './images/image-product-2.jpg');
    myTarget2.style.opacity = 1;
    myTarget3.style.opacity = 1;
    myTarget4.style.opacity = 1;

});

const myTarget2 = document.querySelector('.tbhn2'); // thumbnail image 2

myTarget2.addEventListener('click', function (){
    myTarget2.style.opacity = 0.5;
    image.setAttribute('src', './images/image-product-3.jpg');
    myTarget1.style.opacity = 1;
    myTarget3.style.opacity = 1;
    myTarget4.style.opacity = 1;
   
})

const myTarget3 = document.querySelector('.tbhn3'); // thumbnail image 3

myTarget3.addEventListener('click', function (){
    myTarget3.style.opacity = 0.5;
    image.setAttribute('src', './images/image-product-4.jpg');
    myTarget1.style.opacity = 1;
    myTarget2.style.opacity = 1;
    myTarget4.style.opacity = 1;myTarget2.style.opacity = 1;
})

const myTarget4 = document.querySelector('.tbhn4'); // thumbnail image 4

myTarget4.addEventListener('click', function (){
    myTarget4.style.opacity = 0.5;
    image.setAttribute('src', './images/image-product-1.jpg');
    myTarget1.style.opacity = 1;
    myTarget2.style.opacity = 1;
    myTarget3.style.opacity = 1;

});



// auto sliding product image functionality
setTimeout(function (){
    image.setAttribute('src', './images/image-product-2.jpg');
}, 5000);
setTimeout(function (){
    image.setAttribute('src', './images/image-product-3.jpg');
}, 10000);
setTimeout(function (){
    image.setAttribute('src', './images/image-product-4.jpg');
}, 15000);
setTimeout(function (){
    image.setAttribute('src', './images/image-product-1.jpg');
}, 20000);


setInterval( () => {
    setTimeout(function (){
        image.setAttribute('src', './images/image-product-2.jpg');
    }, 5000);
    setTimeout(function (){
        image.setAttribute('src', './images/image-product-3.jpg');
    }, 10000);
    setTimeout(function (){
        image.setAttribute('src', './images/image-product-4.jpg');
    }, 15000);
    setTimeout(function (){
        image.setAttribute('src', './images/image-product-1.jpg');
    }, 20000);
}, 20000);