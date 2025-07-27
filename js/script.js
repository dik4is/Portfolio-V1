const nav = document.getElementById('nav');

window.addEventListener('scroll', function(){
    scrollposition = window.scrollY;
    
    if (scrollposition >=30){
        nav.classlist.add('nav-dark');
    } else if (scrollposition <=30){
        nav.classlist.remove('nav-dark');
    }
})

