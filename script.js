let string = "";
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = ""
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = string.substring(0, string.length-1);
            document.querySelector('input').value = string;
        }
        // else if (Symbol == "%") {
        //     // if (answer == "") return;
        //     string = setAnswer((parseFloat(answer) / 100).toString());
        //     document.querySelector('input').value = string;
        //     // setAnswer((parseFloat(answer) / 100).toString());
        // }
        else {
            e.target
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    });
});