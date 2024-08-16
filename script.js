let input=document.getElementById('inputBox');
let buttons=document.querySelectorAll("button");

let res="";
let arr=Array.from(buttons);
arr.forEach(button=>{
    button.addEventListener("click",(event)=>{
        if(event.target.innerHTML=="="){  // if user has clicked equal btn 
            res=eval(res);
            input.value=res;
        }
        else if(event.target.innerHTML=="AC"){
            res="";
            input.value=res;
        }
        else if(event.target.innerHTML=="DEL"){
            res=res.substring(0,res.length-1);
            input.value=res;    
        }

        else{
            res+=event.target.innerHTML; // if user has not clicked equal btn
            input.value=res;

        }

       
    })
})