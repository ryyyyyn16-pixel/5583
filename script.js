const button=document.getElementById("theme-toggle");

button.addEventListener("click",()=>{
document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
button.innerHTML="☀️";
}else{
button.innerHTML="🌙";
}
});
