// let num = document.querySelector("#value")
// const btnD = document.getElementById("btn_decrease")
// const btnR = document.getElementById("btn_reset")
// const btnI = document.getElementById("btn_increase")
// btnD.addEventListener("click", function(){
//      let dec = num.textContent;
//      dec=dec-1;
//      num.textContent=dec;
// })
// btnR.addEventListener("click", function(){
//     num.textContent = 0;
// })
let count = 0;
const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn") //selecting elements that have same class btn
// console.log(btns)  shows the selection as nodelist on console
// btns.forEach(function(items){    used to perform specified action to each node list i.e. to each buttons
//     console.log(items)
// })
btns.forEach(function(btn){
    btn.addEventListener("click", function(e){  //e=event object to check which is the button the user clicked on
    const styles = e.currentTarget.classList;
    if(styles.contains('decrease')){
        count--;
        btn.style.backgroundColor = 'red';
        btn.style.color = 'white';
    }
    else if(styles.contains('increase')){
        count++;
        btn.style.backgroundColor = 'green';
        btn.style.color = 'white';
    }
    else{
        count = 0;
        btn.style.backgroundColor = 'white';
        btn.style.color = 'blue';
    }
    value.textContent = count;
    if(count<0){
        value.style.color = 'red';
    }
    if(count>0){
        value.style.color = 'green';
    }
    if(count==0){
        value.style.color = 'black';
    }
    })

})

// learnt from freecodecamp - build 15 javascript projects

