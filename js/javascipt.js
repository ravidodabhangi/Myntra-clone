let anchor=document.querySelector("#anchorls");
let section=document.querySelector(".signupModule");
let aside=document.querySelector("#xmark");
let li=document.querySelector(".li");

anchor.onclick=()=>{
    section.classList.toggle("active");
    li.classList.toggle("lii");
    document.body.style.overflow="hidden";
}
aside.onclick=()=>{
    section.classList.toggle("active");
    li.classList.toggle("lii");
    document.body.style.overflow="visible";
}

