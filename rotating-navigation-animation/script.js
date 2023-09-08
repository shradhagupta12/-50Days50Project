/* 
README

In below code have taken two of the html ID's have add and remove the class name using toggle 

1. For icon have add classList when click on the icon because of that 'X' has been visible

2. For roatation have already made a style with the class name and then just class that class name using toggle.

*/

let open = document.getElementById('open');
let cover = document.getElementById('cover')

let changeIcon = function (icon){
    icon.classList.toggle('fa-x')
}


open.addEventListener('click' , ()=>{
    cover.classList.toggle('rotate-child');
});

