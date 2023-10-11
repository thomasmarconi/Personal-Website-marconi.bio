const header = document.querySelector(".navbar");

const faders = document.querySelectorAll('.fade-in');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=500) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

const appearOnScroll = new IntersectionObserver(function(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('appear');
        }
        else{
            entry.target.classList.remove('appear');
        }
    })
});

faders.forEach((el) => appearOnScroll.observe(el)); 
