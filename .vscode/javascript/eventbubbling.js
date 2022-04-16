// console.log("hello world");
const grandparent=document.querySelector(".grandparent");
const parent=document.querySelector(".parent");
const child=document.querySelector(".child");

// capturing events
// child.addEventListener("click",function(){
//     console.log("captured !!! child");
// },true)
// parent.addEventListener("click",function(){
//     console.log("captured !!! parent");
// },true)
// grandparent.addEventListener("click",function(){
//     console.log("captured !!!Grandparent");
// },true)
// document.body.addEventListener("click",function(){
//     console.log("captured !!! document.body");
// },true)



// child.addEventListener("click",function(){
//     console.log("You clicked on child");
// })
// parent.addEventListener("click",function(){
//     console.log("You clicked on parent");
// })
// grandparent.addEventListener("click",function(){
//     console.log("You clicked on Grandparent");
// })
// document.body.addEventListener("click",function(){
//     console.log("You clicked on document.body");
// })
//   event delegation=>
grandparent.addEventListener("click",(e)=>{
        console.log(e.target.textContent);
    });
    