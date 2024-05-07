let title = document.querySelector(".typewriter");
let hello = "Design Your Recipe   "
let index = 1;
const animation = () => {
    let new_title = hello.slice(0,index);
    title.innerText = new_title;
    index > hello.length ? index = 1 : index++;
    setTimeout(() => animation(), 120)
}
animation();
alert("Ready For The Ride of Good Recipes")