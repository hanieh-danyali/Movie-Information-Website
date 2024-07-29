'use strict';
const img_actor1 = document.querySelector('.img_actor1');
const img_actor2 = document.querySelector('.img_actor2');
const img_actor3 = document.querySelector('.img_actor3');
const img_actor4 = document.querySelector('.img_actor4');

const info__artists1 = document.querySelector('.info__artists1');

img_actor1.addEventListener('click',function(){
    info__artists1.classList.add('move1');
    info__artists1.classList.remove('move2');
    info__artists1.classList.remove('move3');
    info__artists1.classList.remove('move4');
})


img_actor2.addEventListener('click',function(){
    info__artists1.textContent='fatemeh abbasi';
    info__artists1.classList.add('move2');
    info__artists1.classList.remove('move1');
    info__artists1.classList.remove('move3');
    info__artists1.classList.remove('move4');
    
});

img_actor3.addEventListener('click',function(){
    // info__artists1.classList.remove('move1');
    info__artists1.textContent='hesaaaam';
    info__artists1.classList.add('move3');
    info__artists1.classList.remove('move1');
    info__artists1.classList.remove('move2');
    info__artists1.classList.remove('move4');
});

img_actor4.addEventListener('click',function(){
    // info__artists1.classList.remove('move1');
    info__artists1.textContent='amir mohammad';
    info__artists1.classList.add('move4');
    info__artists1.classList.remove('move3');
    info__artists1.classList.remove('move2');
    info__artists1.classList.remove('move1');
});