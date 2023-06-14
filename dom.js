console.log("Khushi");
console.log(document);
console.log(document.URL);
console.log(document.title);
//document.title=123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);

//var headerTitle=document.getElementById('header-title')
var headerTitle = document.getElementById('main-header');
headerTitle.style.borderBottom ='solid 3px #000';

let title=document.getElementsByClassName('title');
console.log(title);
title[0].style.fontWeight='Bold';
title[0].style.color='green';


