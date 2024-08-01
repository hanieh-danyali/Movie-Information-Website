'use strict';
const img_actor1 = document.querySelector('.img_actor1');
const img_actor2 = document.querySelector('.img_actor2');
const img_actor3 = document.querySelector('.img_actor3');
const img_actor4 = document.querySelector('.img_actor4');
const name_actor = document.querySelector('.name_actor');
const about_actor = document.querySelector('.about_actor');
const image_actor = document.querySelector('.image__actor');


img_actor1.addEventListener('click',function(){
    name_actor.textContent ='Jenna Ortega';
    about_actor.textContent = `Jenna Ortega, an American actress and voice actress, was born on September 27, 2002 in Coachella Valley, California. Due to her interest in acting, she entered the field of acting since she was 6 years old. Besides acting, she is also interested in writing. Jenna Ortega has a history of acting and voicing in films and series such as Wednesday, Scream 5, Yes Day, Princess Elena, Jurassic World: Camp Cretaceous, Saving Flora, You and Iron Man 3 in her artistic career.`;
    image_actor.src = 'img/photo_jenna.png';
    image_actor.classList.remove('hidden');
});

img_actor2.addEventListener('click',function(){
    name_actor.textContent ='Hunter Doohan';
    about_actor.textContent = `Hunter Doohan, born on January 19, 1994 in America, is an actor and writer, he started his first work in 2012 at the age of 18 with the short film Lost Pursuit and then in several other short films such as Grace, "It's supposed to be healthy" Mosh Opera, Far from the Tree and Dirty Bomb. Then he played in other series such as "Schooled" as Matt Ryan and "What/If" as Tyler. In 2022, at the age of 28, he achieved world fame by shining in the Wednesday series as Tyler Galpin.`;
    image_actor.src = 'img/photo_hunter.png';
    image_actor.classList.remove('hidden');
});

img_actor3.addEventListener('click',function(){
    name_actor.textContent ='Emma Myers';
    about_actor.textContent = `Emma Myers, born on April 2, 2002, is an American actress. He was educated at home and never had the experience of a traditional school, he made his first acting experience in the TV series Bisheh. She began acting professionally at the age of 16. Myers has appeared in the films Southern Gospel (2020), A Taste of Christmas (2020), and Girl in the Basement (2021). She rose to fame in the 2022 TV series Wednesday playing the role of End Sinclair alongside co-star Jenna Ortega, who played Wednesday Addams.`;
    image_actor.src = 'img/photo_emma.png';
    image_actor.classList.add('hidden');
});

img_actor4.addEventListener('click',function(){
    name_actor.textContent ='Percy Hynes White';
    about_actor.textContent = `Percy Hines White was born on October 8, 2001. He is a Canadian actor. Hines White is the son of Joel Thomas Hines, a writer, actor and director, and Sherry White, an actor and writer. He is known for his roles in films such as A Christmas Horror Story (2015), The Edge of Winter (2016) and for his role in the television series The Middle (2015) and for his starring role as Andy Strucker in The Talented (2017). In 2022, he acted as the lead actor Xavier Thorpe in the comedy-horror Wednesday series.`;
    image_actor.src = 'img/photo12850770410_prev_ui.png';
    image_actor.classList.remove('hidden');
});