///JavaScript Function for up down ng Features and Company.
///Once na tinanggal and inerase tong function na to, di ka makakapag drow down sa feautures and Company.
const menu = document.querySelector('.menu');


///JavaScript Function for up down ng Features and Company pareeen
///This javascript function ay pag nag zoom in ka ng 200% yung navbar lalaki sa upper right then basahin mo sunod na comment.
///Once na tinanggal and inerase tong function na to, di ka makakapag drow down sa feautures and Company.
const dropdown = document.querySelectorAll('.dropdown');


///Function naman neto is pag still naka 200% ka pag tinanggal mo ang function nato dimo mapipindot yung navbar menu.
menu.addEventListener('click',function(){
    menu.parentElement.classList.toggle('open');
    document.body.classList.toggle('nav-open');
})

///Pag tinaggal tong function na to di ka makakapag drop down ng features and company at di mo makikita listed items.
dropdown.forEach(function(item){
    item.addEventListener('click',function(){
        item.parentElement.classList.toggle('link-open');
    })
})
