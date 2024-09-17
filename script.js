let bar = document.querySelector('.bar');
let closeicon = document.querySelector('.close-icon');
let navlinks = document.querySelector('.navlinks');

function toggleNav() {
    navlinks.classList.toggle('active');  
    bar.style.display = bar.style.display === 'none' ? 'block' : 'none'; 
    closeicon.style.display = closeicon.style.display === 'block' ? 'none' : 'block'; 
}

