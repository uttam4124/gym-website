console.log("script start");
setTimeout(()=>{
    console.log("inside timeout");
},0);
// console.log("script end");
for (let i = 0; i < 10000; i++) {
    console.log("...");
}
console.log("script end")