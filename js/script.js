/*-----------------------------Menu--------------------*/
const btn = document.querySelector("#menu-icon");
const menu = document.querySelector(".menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("active");
});



/*-----------------------------texto multiple--------------------*/

var typed = new Typed('#element', {
    strings: ['Diseñador Frontend', 'Analista', 'Diseñador SQL','Backend - Junior'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true
  });

/*-----------------------------Contacto--------------------*/
document.getElementById('contacta-me').addEventListener('submit',function (event) {
    event.preventDefault();
    var data = new FormData (event.target);
    fetch("URL", {
        method:'POST',
        body:data,        
    }) .then(response => {
        if (response.ok) {
            alert ('Success');
        } else {
            alert('Error');
        }
});
document.getElementById('contacta-me').reset();
});