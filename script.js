'use strict';
const img_actor = document.querySelector('.img_actor2');
const info__artists1 = document.querySelector('.info__artists1');
img_actor.addEventListener('click',function(){
    info__artists1.classList.add('visible');
    info__artists1.classList.remove('hidden');
})