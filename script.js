'use strict';
const img_actor1 = document.querySelector('.img_actor1');
const img_actor2 = document.querySelector('.img_actor2');
const img_actor3 = document.querySelector('.img_actor3');
const img_actor4 = document.querySelector('.img_actor4');
const name_actor = document.querySelector('.name_actor');
const about_actor = document.querySelector('.about_actor');
const image_actor = document.querySelector('.image_actor');


img_actor1.addEventListener('click',function(){
    name_actor.textContent ='Jenna Ortega';
    about_actor.textContent = `American actress and voice actress Jenna Ortega was born on September 27, 2002 in Coachella Valley, California. Besides acting, she is also interested in writing,
     her book was published in January 2022 with the name (It's All Love).
        Jenna Ortega has a history of acting and voicing in films and series such as Wednesday, Scream 5, Yes Day, Princess Elena, Jurassic World: Camp Cretaceous, Saving Flora, You and Iron Man 3 in her artistic career.`;
    image_actor.src = 'img/photo12814841522.jpg';
});

img_actor2.addEventListener('click',function(){
    name_actor.textContent ='Hunter Doohan';
    about_actor.textContent = `Hunter Doohan Hunter Doohan Hunter Doohan Hunter Doohan Hunter Doohan`;
    image_actor.src = 'img/photo12830957814.png';
});

img_actor3.addEventListener('click',function(){
    name_actor.textContent ='Emma Myers';
    about_actor.textContent = 'Emma Myers Emma Myers Emma Myers Emma Myers Emma Myers Emma Myers Emma Myers Emma Myers';
    image_actor.src = 'img/photo12810731170.jpg';
});

img_actor4.addEventListener('click',function(){
    name_actor.textContent ='Percy Hynes White';
    about_actor.textContent = `American actress and voice actress Jenna Ortega was born on September 27, 2002 in Coachella Valley, California. Besides acting, she is also interested in writing,
     her book was published in January 2022 with the name (It's All Love).
        Jenna Ortega has a history of acting and voicing in films and series such as Wednesday, Scream 5, Yes Day, Princess Elena, Jurassic World: Camp Cretaceous, Saving Flora, You and Iron Man 3 in her artistic career.`;
    image_actor.src = 'img/photo12810941916.jpg';
});