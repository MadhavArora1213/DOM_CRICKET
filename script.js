function colorChange(){
    let btn = document.querySelector(".btn");
    btn.addEventListener("click",()=>{
        btn.style.backgroundColor= "brown";
    })
}
let h1 = document.querySelectorAll("h1");
h1.forEach((item)=>{
    item.style.color="blue";

})
let para =document.querySelectorAll("p");
para.forEach((item)=>{
    item.style.color="pink";;

})
let list =document.querySelectorAll("li");
list.forEach((item)=>{
    item.style.color="red";

})


document.getElementById("table").style.backgroundColor = "cyan";
let form = document.getElementsByClassName("form");
for (let i = 0; i < form.length; i++) {
    form[i].style.backgroundColor = "green";
    form[i].style.color = "white";
    
  }