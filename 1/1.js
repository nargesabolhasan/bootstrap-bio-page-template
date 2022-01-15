const tile=document.getElementsByClassName("tile")
const tileArr=Array.from(tile)
let counter=0
let xcount=0
let xarr=[]
let oarr=[]
myfunc()
function myfunc(){
tileArr.map(input=>{
input.addEventListener('click',e=>{
        counter++
        if(counter%2==0){
            input.classList.add("fill-o")
            checkwinner()
        }else{
            input.classList.add("fill-x")
            xcount++
            checkwinner()
        }
        
    },{once : true})
})
}
function checkwinner(){
    const t0=document.getElementById("0")
    const t1=document.getElementById("1")
    const t2=document.getElementById("2")
    const t3=document.getElementById("3")
    const t4=document.getElementById("4")
    const t5=document.getElementById("5")
    const t6=document.getElementById("6")
    const t7=document.getElementById("7")
    const t8=document.getElementById("8")
   console.log(counter)
 switch(true){
    case t0.classList.value===t1.classList.value && t0.classList.value===t2.classList.value && t0.classList.value!=="tile" :   
          console.log("+++");
          Whowinner(t0,t1,t2);
          break;
    case t3.classList.value===t4.classList.value && t3.classList.value===t5.classList.value && t3.classList.value!=="tile": 
          Whowinner(t3,t4,t5);
         console.log("+++"); 
         break; 
    case t6.classList.value===t7.classList.value && t6.classList.value===t8.classList.value && t6.classList.value!=="tile": 
          Whowinner(t6,t7,t8); 
         console.log("+++");
         break;
    case t0.classList.value===t4.classList.value && t0.classList.value===t8.classList.value && t0.classList.value!=="tile":  
          Whowinner(t0,t4,t8);
          console.log("+++");
         break; 
    case t6.classList.value===t4.classList.value && t6.classList.value===t2.classList.value && t6.classList.value!=="tile":
          Whowinner(t6,t4,t2);  
         console.log("+++");
         break; 
    case t0.classList.value===t3.classList.value && t0.classList.value===t6.classList.value && t0.classList.value!=="tile":   
          Whowinner(t0,t3,t6);
         console.log("+++");
         break; 
    case t1.classList.value===t4.classList.value && t1.classList.value===t7.classList.value && t1.classList.value!=="tile":
          Whowinner(t1,t4,t7);       
         console.log("+++");
         break; 
    case t2.classList.value===t5.classList.value && t2.classList.value===t8.classList.value && t2.classList.value!=="tile":
          Whowinner(t2,t5,t8);  
         console.log("+++");
         break;                                           
   
}
 
}

function Whowinner(h1,h2,h3){
     let board=document.getElementsByClassName("board")
     const boardArr=Array.from(board)
     if (h1.classList.value==="tile fill-x"){
        boardArr.map(i=>{
            i.classList.add("win-x")
         })
        h1.classList.add("win-xx")
        h2.classList.add("win-xx")
        h3.classList.add("win-xx")
        reset()
      }else{
           boardArr.map(i=>{
                i.classList.add("win-o")
            })
           h1.classList.add("win-oo")
           h2.classList.add("win-oo")
           h3.classList.add("win-oo")
           reset()

          }
     
}
// function reset(){
//       const div= document.getElementsByTagName("body")
//       let divArr=Array.from(div)
//       divArr.map(input=>{
//           input.addEventListener('click',e=>{
//                tileArr.map(i=>{
//                     i.classList.remove("fill-x")
//                     i.classList.remove("fill-o")
//                   })
//           })
//      })       
// }
//  