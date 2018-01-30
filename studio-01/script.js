document.form.onsubmit = processForm; //function for submit
document.form.onreset = clearForm; //function for reset

function processForm() {

var smoothie1 = document.form.smoothie1.value;
var smoothie2 = document.form.smoothie2.value;
var smoothie3 = document.form.smoothie3.value;
var smoothie4 = document.form.smoothie4.value;
var smoothie5 = document.form.smoothie5.value;
var smoothie6 = document.form.smoothie6.value;
var smoothie7 = document.form.smoothie7.value;
var smoothie8 = document.form.smoothie8.value;
var smoothie9 = document.form.smoothie9.value;

var myMsg = document.getElementById("myMsg");

myMsg.innerHTML = smoothie1 + " " smoothie2 + " " + smoothie3 + " " + smoothie4 + " " + 
smoothie5 + " " + smoothie6 + " " + smoothie7 + " " + smoothie8 + " " + smoothie9;

myMsg.className = "show";

return false;

}

function clearForm() {
    var myMsg = document.getElementById("myMsg");
		myMsg.className = "hide";
}
