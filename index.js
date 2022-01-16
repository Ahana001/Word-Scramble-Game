const button = document.querySelector('.btn');
const text = document.querySelector('.msg');
const input = document.querySelector('#input');
const data = ['python','javascript','css','html','java','android','nodejs','angularjs','reactjs'];
let play = false;
let answer = "";
let scrambleStr = "";

function randomData (arr){
    const randomNumber =  Math.floor(Math.random()*(arr.length-1));
    return arr[randomNumber];
}
function scramble(arr){
    for(let i=arr.length-1 ; i>0 ; i--){
        let temp = arr[i];
        let j = Math.floor(Math.random()*(i+1));
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

button.addEventListener('click', ()=>{
    if(!play){
    play = true;
    input.classList.toggle('hidden');
    button.innerHTML = "Guess";
    answer = randomData(data);
    scrambleStr = scramble(answer.split(""));
    scrambleStr = scrambleStr.join("");
    text.innerHTML = scrambleStr;
    }else{
        if(input.value === answer){
            text.innerHTML = `correct!! it is ${answer}`;
            button.innerHTML="start Again";
            input.classList.toggle('hidden');
            input.value="";
            play = false;
        }else{
            text.innerHTML = `incorrect!! please try again ${scrambleStr}`;
        }
    }
});

