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

var myMsg = document.getElementById("myMsg");

myMsg.innerHTML = ["First, get out your NutriBullet. If you don't have one, get one. Next, do not even think about using " + smoothie1 + ", ever. " + " You can use " + smoothie2 + ", sometimes. Next, grab as many "
+ smoothie3 + " as you can. If you can find " + smoothie4 + " ones, use those. Next, go to your local " + smoothie5 + " market, and buy all the " + smoothie6 + " they have. Now, " + smoothie7 + " throw all the ingredients in your NutriBullet and then fill with "
+ smoothie8 + ". Finally, smash that blend down and enjoy! "];

myMsg.className = "show";

return false;

}

function clearForm() {
    var myMsg = document.getElementById("myMsg");
		myMsg.className = "hide";
}
