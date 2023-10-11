//set initial count
let count = 0; 

//select values and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click",function(e){
       const styles = e.currentTarget.classList;
       if(styles.contains('inc')){
        count++;
       }
       else if (styles.contains('dec')){
        count--;
       }
       else{
        count = 0;
       }
       if(count>0){
        value.style.color = 'rgb(0, 255, 0)';

       }
       if(count<0){
        value.style.color = 'red';
        
       }
       if(count===0){
        value.style.color = 'black';
       }
       value.textContent = count;
    });
});