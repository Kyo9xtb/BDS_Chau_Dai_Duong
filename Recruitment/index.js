const btnShow = document.getElementsByClassName("title");
console.log(btnShow)
for(let i= 0; i < btnShow.length; i++){
    const item = btnShow[i];
    item.addEventListener('click',show)
}
function show() {
    const item = document.getElementsByClassName("'content'")
    console.log(item)
    item[0].style.display= "block";
}