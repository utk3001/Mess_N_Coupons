var counter;
setInterval(function(){
    if(document.getElementById('radio1').checked === true) {
        counter = 2;
    } else if(document.getElementById('radio2').checked === true) {
        counter = 3;
    } else if(document.getElementById('radio3').checked === true) {
        counter = 4;
    } else if(document.getElementById('radio4').checked === true) {
        counter = 5;
    } else if(document.getElementById('radio5').checked === true) {
        counter = 6;
    } else if(document.getElementById('radio6').checked === true) {
        counter = 7;
    } else {
        counter = 1;
    }
    document.getElementById('radio' + counter).checked = true;
},5000)