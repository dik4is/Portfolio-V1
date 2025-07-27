const nav = document.getElementById('nav');

window.addEventListener('scroll', function(){
    let scrollposition = window.scrollY;
    
    if (scrollposition >=30){
        nav.classList.add('nav-dark');
    } else if (scrollposition <=30){
        nav.classList.remove('nav-dark');
    }
})

