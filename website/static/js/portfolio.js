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

// const sendEmailButton = document.getElementById('send-email');
// const contactForm = document.getElementById('contact-form');

// sendEmailButton.addEventListener('click', function () {
//     console.log("clicked");
//     const email = 'thomas.marconi@outlook.com'; // Replace with your email address
//     const subject = `Contact from Thomas Marconi's Portfolio`;
//     const formData = new FormData(contactForm);

//     let body = 'Message from: ' + formData.get('name') + '\n';
//     body += 'Email: ' + formData.get('email') + '\n';
//     body += 'Subject: ' + formData.get('subject') + '\n';
//     body += 'Message: ' + formData.get('message');
//     console.log(body);
//     body = encodeURIComponent(body);
//     console.log(body);
//     const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`;
//     console.log(mailtoLink);
//     window.location.href = mailtoLink;
// });