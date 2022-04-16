// console.log("Hello world");
// const firstbutton=document.querySelector("#one");
// firstbutton.addEventListener("click",function(){
// console.log("You clicked me");
// });
// const allbutton=document.querySelectorAll(".my-Button button");
// // console.log(allbutton);
// for(let buttons of allbutton){
//     buttons.addEventListener("click",function(){
//         console.log(this.textContent);
//     });
// }
//  event object=>
const allbutton=document.querySelectorAll(".my-Button button");
for(let buttons of allbutton){
    buttons.addEventListener("click",function(){
        buttons.style.backgroundColor="rgb(209, 175,123)";
    })
}