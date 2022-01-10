
const tile=document.getElementsByClassName("tile")
const tileArr=Array.from(tile)
let counter=0
let x=0
let o=0
tileArr.map((input,i)=>{
input.addEventListener('click',e=>{
        counter++
        if(counter%2==0){
            input.classList.add("fill-o")
        }else{
            input.classList.add("fill-x")
        }
        
    },{once : true})
})





