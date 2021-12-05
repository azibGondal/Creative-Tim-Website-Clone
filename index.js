let tgl = document.getElementById('tgl');
let target = document.getElementById('section2');

tgl.addEventListener('click',()=>{
    target.classList.toggle('show');
})

let more = document.getElementById('m-btn');
let cross = document.getElementById('cross');
console.log(more);
let additional = document.getElementById('additional')
more.addEventListener('click',()=>{

    additional.classList.add('show1');
   



})

cross.addEventListener("click", () => {
  additional.classList.remove("show1");
 
});