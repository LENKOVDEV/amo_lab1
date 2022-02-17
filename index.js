const READER1 = new FileReader();
const READER2 = new FileReader();
const READER3 = new FileReader();

function visible_btn1(){
    let a = document.getElementById('one_a').value;
    let b = document.getElementById('one_b').value; 
    let c = document.getElementById('one_c').value;
    let d = document.getElementById('one_d').value;
    if(a !== '' &  b !== '' & c !== '' & d !== ''){
        document.getElementById('btn1').disabled = false;
    }
}

function visible_btn2(){
    let a = document.getElementById('two_a').value; 
    let c = document.getElementById('two_c').value;
    let k = document.getElementById('two_k').value;
    if(a !== '' &  k !== '' & c !== ''){
        document.getElementById('btn2').disabled = false;
    }
}

function visible_btn3(){
    let a = document.getElementById('three_a').value; 
    let b = document.getElementById('three_b').value;
    let p = document.getElementById('three_p').value;
    if(a !== '' &  p !== '' & b !== ''){
        document.getElementById('btn3').disabled = false;
    }
}

function visible_btn1_file(input){
    let file = input.files[0];
    READER1.readAsText(file);
    READER1.onload = function(){
        let temp = READER1.result.split(' ');
        document.getElementById('btn1').disabled = false;
        document.getElementById('one_a').value = `${temp[0]}`;
        document.getElementById('one_b').value = `${temp[1]}`;
        document.getElementById('one_c').value = `${temp[2]}`;
        document.getElementById('one_d').value = `${temp[3]}`;
    }
}

function visible_btn2_file(input){
    let file = input.files[0];
    READER2.readAsText(file);
    READER2.onload = function(){
        let temp = READER2.result.split(' ');
        document.getElementById('btn2').disabled = false;
        document.getElementById('two_a').value = `${temp[0]}`;
        document.getElementById('two_c').value = `${temp[1]}`;
        document.getElementById('two_k').value = `${temp[2]}`;
    }
}

function visible_btn3_file(input){
    let file = input.files[0];
    READER3.readAsText(file);
    READER3.onload = function(){
        let temp = READER3.result.split(' ');
        document.getElementById('btn3').disabled = false;
        document.getElementById('three_a').value = `${temp[0]}`;
        document.getElementById('three_b').value = `${temp[1]}`;
        document.getElementById('three_p').value = `${temp[2]}`;
    }
}

function deleteWin(){
    document.getElementById('win').style.display = 'none';
}

function makeImgBigger1(){
    let newDiv = document.createElement("div");
    newDiv.setAttribute('id', 'win');
    newDiv.innerHTML = `<img src="photos/task1.jpg">`;
    my_div = document.getElementById("win");
    document.body.insertBefore(newDiv, my_div);
    newDiv.addEventListener('click', deleteWin);
}


function makeImgBigger2(){
    let newDiv = document.createElement("div");
    newDiv.setAttribute('id', 'win');
    newDiv.innerHTML = `<img src="photos/task2.jpg">`;
    my_div = document.getElementById("win");
    document.body.insertBefore(newDiv, my_div);
    newDiv.addEventListener('click', deleteWin);
}


function makeImgBigger3(){
    let newDiv = document.createElement("div");
    newDiv.setAttribute('id', 'win');
    newDiv.innerHTML = `<img src="photos/task3.jpg">`;
    my_div = document.getElementById("win");
    document.body.insertBefore(newDiv, my_div);
    newDiv.addEventListener('click', deleteWin);
}
function function1(){

    let a = +document.getElementById('one_a').value;
    let b = +document.getElementById('one_b').value; 
    let c = +document.getElementById('one_c').value;
    let d = +document.getElementById('one_d').value;
    let result = (Math.sqrt(a) + b*b)/(Math.sqrt(b) - a*a) + Math.sqrt(a*b/c*d);
    if (isNaN(result)){
        document.getElementById('result1').innerText = `Вираз під коренем не може бути меньше ніж нуль. Перевірте правильність даних.`;    
    } else if (result === Infinity){
        document.getElementById('result1').innerText = `Не можна ділити на нуль. Перевірте правильність даних`;
    } else {
        document.getElementById('result1').innerText = `Резултат: ${result}`;
    }   

}
function function2(){
    let a = +document.getElementById('two_a').value;
    let c = +document.getElementById('two_c').value;
    let k = +document.getElementById('two_k').value;
    if (k < 10){
        let result = Math.pow((a + c), 4) + (a - c)*(a - c);
        document.getElementById('result2').innerText = `Результат: ${result}`;
    } else {
        let result = Math.pow((a - c), 3) + (a + c)*(a + c);
        document.getElementById('result2').innerText = `Результат: ${result}`;
    }
}
function function3(){
    let a = +document.getElementById('three_a').value;
    let b = +document.getElementById('three_b').value;
    let p = +document.getElementById('three_p').value;
    let result = 0;
    
    for(let i = 1; i < p; i++){
        for(let j = 1; j < p; j++){
            for(let k = 1; k < p; k++){
                result += i*(i*j*(i*j*k*Math.sqrt(a + b)));
            }
        }
    }
    if (isNaN(result)){
        document.getElementById('result3').innerText = `Вираз під коренем не може бути меньше ніж нуль. Перевірте правильність даних.`;
    } else {
        document.getElementById('result3').innerText = `Результат: ${result}`;
    }
}

const IMG1 = document.getElementById('img1');
IMG1.addEventListener('click', makeImgBigger1);
const IMG2 = document.getElementById('img2');
IMG2.addEventListener('click', makeImgBigger2);
const IMG3 = document.getElementById('img3');
IMG3.addEventListener('click', makeImgBigger3);

const INPUT1_1 = document.getElementById('one_a');
const INPUT1_2 = document.getElementById('one_b');
const INPUT1_3 = document.getElementById('one_c');
const INPUT1_4 = document.getElementById('one_d');

INPUT1_1.addEventListener('keyup', visible_btn1);
INPUT1_2.addEventListener('keyup', visible_btn1);
INPUT1_3.addEventListener('keyup', visible_btn1);
INPUT1_4.addEventListener('keyup', visible_btn1);

const INPUT2_1 = document.getElementById('two_a');
const INPUT2_2 = document.getElementById('two_c');
const INPUT2_3 = document.getElementById('two_k');

INPUT2_1.addEventListener('keyup', visible_btn2);
INPUT2_2.addEventListener('keyup', visible_btn2);
INPUT2_3.addEventListener('keyup', visible_btn2);

const INPUT3_1 = document.getElementById('three_a');
const INPUT3_2 = document.getElementById('three_b');
const INPUT3_3 = document.getElementById('three_p');

INPUT3_1.addEventListener('keyup', visible_btn3);
INPUT3_2.addEventListener('keyup', visible_btn3);
INPUT3_3.addEventListener('keyup', visible_btn3);
