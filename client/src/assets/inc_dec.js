var total = 0;
var Out = document.getElementsByClassName("Quant-out");
var Rate = document.getElementsByClassName("Rate");
var OutTotal = document.getElementById("Total");
OutTotal.innerText=0;
for(let i=0;i<Out.length;i++) {
    Out[i].innerText = 0;
}
function increment(n) {
    Out[n].innerText++;
    total = total + parseFloat(Rate[n].innerText);
    OutTotal.innerText = total;
}
function decrement(n) {
    if(Out[n].innerText>0) {
        Out[n].innerText--;
        total = total - parseFloat(Rate[n].innerText);
        OutTotal.innerText = total;
    }
}