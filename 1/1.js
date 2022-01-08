const tile=document.getElementsByClassName("tile")
const tileArr=Array.from(tile)
let counter=0
tileArr.map(input=>{
input.addEventListener('click',e=>{
        counter++
        if(counter%2==0){
            input.classList.add("fill-o") 
        }                                                                                                                                                                   
   
})
})
  

