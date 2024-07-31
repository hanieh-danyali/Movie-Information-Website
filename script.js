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
    about_actor.textContent = `American actress and voice actress Jenna Ortega was born on September 27, 2002 in Coachella Valley, California. Besides acting, she is also interested in writing, her book was published in January 2022 with the name (It's All Love).
Jenna Ortega has a history of acting and voicing in films and series such as Wednesday, Scream 5, 2002 in Coachella Valley, California. Besides acting, she is also interested in writing Yes Day, Princess Elena, Jurassic World: Camp Cretaceous, Saving Flora, You and Iron Man 3 in her artistic career.`;
    image_actor.src = 'img/photo_jenna.png';
    image_actor.classList.remove('hidden');
});

img_actor2.addEventListener('click',function(){
    name_actor.textContent ='Hunter Doohan';
    about_actor.textContent = `Hunter Doohan, born on January 19, 1994 in America, is an actor and writer, he started his first work in 2012 at the age of 18 with the short film Lost Pursuit, and then in several other short films such as Grace, has played a role. In 2015, at the age of 21, he appeared in front of the camera in the role of Owen in the series "Cafe Chronicles".
Then he played in other series such as "Schooled" in t. In 2022, at the age of 28, he starred in the series "Wednesday" in the role of Tyler. Galpin achieved world fame.`;
    image_actor.src = 'img/photo_hunter.png';
    image_actor.classList.remove('hidden');
});

img_actor3.addEventListener('click',function(){
    name_actor.textContent ='Emma Myers';
    about_actor.textContent = `Emma Myers (English: Emma Myers; born April 2, 2002) is an American actress.when he appeared in the movie Bisheh. He became famous by playing the role of Inde Sinclair in the series Wednesday (2022). She has a sister named Isabel Myers. Emma Myers was born on April 2, 2002 in Orlando, Florida. He was home schooled and never had a traditional school experience. He began acting professionally at the age of 16. started. Myers appeared in the films Southern Gospel (2020). She rose to fame in the 2022 TV series Wednesday playing the role of End Sinclair alongside co-star Jenna Ortega, who played Wednesday Addams.`;
    image_actor.src = 'img/photo_emma.png';
    image_actor.classList.remove('hidden');
});

img_actor4.addEventListener('click',function(){
    name_actor.textContent ='Percy Hynes White';
    about_actor.textContent = `Percy Haynes White was born on October 8, 2001 and is a Canadian actor. He is known for his roles in films such as A Christmas Horror Story (2015), The Edge of Winter (2016) and for his role in the television series The Middle (2015) and for his starring role as Andy Strucker in The Talented (2017). In 2022, he starred as Xavier Thorpe in the comedy-horror Wednesday. Hines White is the son of writer, actor and director Joel Thomas Hines and actor and writer Sherry White. Percy studied performing arts in his hometown of St. John's for two years.`;
    image_actor.src = 'img/photo_percy.png';
    image_actor.classList.add('hidden');
});