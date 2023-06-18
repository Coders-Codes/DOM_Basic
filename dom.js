/*console.log("Khushi");
console.log(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
//document.title="Item Lister 5";
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
//document.all[10].textContent='Hello';
console.log(document.forms);
console.log(document.links);
console.log(document.images);
*/

//GETELEMENTBYID

//console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
console.log(headerTitle);
//headerTitle.textContent='List of Items';
headerTitle.innerText='GoodBye';
//console.log(headerTitle.innertext);
//headerTitle.innerHTML=<h3>'Hello'</h3>;
var headerTitle = document.getElementById('main-header')
headerTitle.style.borderBottom='solid 3px #000';



let title=document.getElementsByClassName('title');
console.log(title);
title[0].style.fontWeight='Bold';
title[0].style.color='green';

let form=document.getElementsByClassName('btn btn-dark');
form[0].style.color="Blue";

let items=document.getElementsByClassName('list-group-item');
console.log(items);

items[0].style.fontWeight='Bold'; // for highlighting the single if we have to bold all text we will use loop

for(let i=0;i<items.length;i++)
items[i].style.fontWeight='Bold';

items[2].style.backgroundColor='Green';

