let searchbtn = document.querySelector('#search');
let searchbar = document.querySelector('.searchbar');
let user = document.querySelector('#user')
let login = document.querySelector('.login')
let slides = document.querySelectorAll('.slide-container')
let index = 0;


// Search Bar 
window.onscroll =() =>{
    searchbtn.classList.remove('fa-times');
    searchbar.classList.remove('active');
}

searchbtn.addEventListener('click', () =>{
    searchbtn.classList.toggle('fa-times');
    searchbar.classList.toggle('active');
});
// Login Form 
user.addEventListener('click', () =>{
    user.classList.toggle('fa-times');
    login.classList.toggle('active');
});

window.onscroll =() =>{
    user.classList.remove('fa-times');
    login.classList.remove('active');
}

// Slides Bar 
function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function previous(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}
