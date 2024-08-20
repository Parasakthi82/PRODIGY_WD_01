document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    const navToggle = document.getElementById('nav-toggle');
    const navToggle_x = document.getElementById('nav-toggle-x');
    const navLinksContainer = document.getElementById('nav-links-manu');
     navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const target = this.getAttribute('data-target');

            pages.forEach(page => {
                if (page.id === target) {
                    page.classList.add('active');
                } else {
                    page.classList.remove('active');
                }
            });
            navToggle.style.display='block';
            navToggle_x.style.display='none';
            
            if (window.innerWidth <= 768) {
                
                navLinksContainer.classList.remove('show');
                
            }
            if (window.innerWidth >= 769) {
                navToggle.style.display='none';
                navToggle_x.style.display='none';
                
                
            }
        });
    });

    navToggle.addEventListener('click', function () {
        navLinksContainer.classList.toggle('show');
        navToggle.style.display='none';
        navToggle_x.style.display='block';
        
    });
    navToggle_x.addEventListener('click',()=>{
        navLinksContainer.classList.remove('show');
        navToggle.style.display='block';
        navToggle_x.style.display='none';
    })

    

    
    document.getElementById('home').classList.add('active');
});
/*document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    const navToggle = document.getElementById('nav-toggle');
    const navToggle_x = document.getElementById('nav-toggle-x');
    const navLinksContainer = document.getElementById('nav-links-manu');
    

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const target = this.getAttribute('data-target');

            pages.forEach(page => {
                if (page.id === target) {
                    page.classList.add('active');
                } else {
                    page.classList.remove('active');
                }
            });
            navToggle.style.display='block';
            navToggle_x.style.display='none';
            
            if (window.innerWidth<= 768) {
                
                navLinksContainer.classList.remove('show');
                
            }
            if (window.innerWidth >769) {
                navToggle.style.display='none';
                navToggle_x.style.display='none';
                
                
            }
        });
    });

    navToggle.addEventListener('click', function () {
        navLinksContainer.classList.toggle('show');
        navToggle.style.display='none';
        navToggle_x.style.display='block';
        
    });
    navToggle_x.addEventListener('click',()=>{
        navLinksContainer.classList.remove('show');
        navToggle.style.display='block';
        navToggle_x.style.display='none';
    })

    

    
    document.getElementById('home').classList.add('active');
});*/
