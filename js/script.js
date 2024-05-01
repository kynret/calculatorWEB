const keys = document.querySelectorAll(".btn");
const display = document.querySelector(".screen");

let input = "";

keys.forEach(key => {
    const value = key.dataset.key;

    key.addEventListener("click", () =>{
        if(value == "c"){
            input = "";
            display.innerHTML = "";

        }else if(value == "="){
            let result = eval(input);

            display.innerHTML = result;
        }else {
            input += value;
            display.innerHTML = cleanInput(input);
        }
    });
});

function cleanInput(input){
    let input_array = input.split("");    
    let input_array_length = input_array.length;

    for(let i = 0; i < input_array_length; i++){
        if (input_array[i] == "*"){
            input_array[i] = "x";
        }else if (input_array[i] == "/"){
            input_array[i] = "÷";
        }
    }

    return input_array.join("");
}