const num1=Math.ceil(Math.random()*10);
const num2=Math.ceil(Math.random()*10);

const questionE1=document.getElementById("question");
const formE1=document.getElementById("form")
const scoreEL=document.getElementById("score");
let score=JSON.parse(localStorage.getItem("score"));
if(!score){
    score=0;
}
scoreEL.innerText=`score : ${score}`;
const inputEL=document.getElementById("input")
questionE1.innerText=`what is ${num1} multiply by ${num2} ?`;
const correctAns=num1*num2;
formE1.addEventListener("submit",()=>{
    const userAns=+inputEL.value
    if(userAns===correctAns){
        score++
        updatelocalstorage()
    }
    else{
        score--
        updatelocalstorage()
    }
});
 
function updatelocalstorage(){
    localStorage.setItem("score",JSON.stringify(score))
}


