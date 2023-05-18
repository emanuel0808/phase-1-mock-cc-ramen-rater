const ramenAPI =  'http://localhost:3000/ramens';
const ramenMenuDiv = el('ramen-menu');




fetch(ramenAPI)
   .then(res => res.json())
   .then(renderRamens);


function renderRamens(ramens){
    ramens.forEach(renderRamen);
}

function renderRamen(ramen) {
    const ramenImageElement = document.createElement('img');
    ramenImageElement.src = ramen.image;
    ramenMenuDiv.append(ramenImageElement);


    ramenImageElement.addEventListener('click', () => ramenClickHandler(ramen))
}
function ramenClickHandler(ramen) {
   el('detail-image').src = ramen.image;
   el('detail-name').textContent = ramen.name;
   el('detail-restaurant').textContent = ramen.restaurant;
   el('rating-display').textContent = ramen.rating;
   el('comment-display').textContent = ramen.comment;
  
}



function el(id) {
   return document.getElementById(id);
}
