console.log("JS is now starting");

var submitButton = document.getElementById('submit-button');

    var submitIt = function() {

        var smoothie1 = document.form.smoothie1.value;
        var smoothie2 = document.form.smoothie2.value;
        var smoothie3 = document.form.smoothie3.value;
        var smoothie4 = document.form.smoothie4.value;
        var smoothie5 = document.form.smoothie5.value;
        var smoothie6 = document.form.smoothie6.value;
        var smoothie7 = document.form.smoothie7.value;
        var smoothie8 = document.form.smoothie8.value;
        var smoothie9 = document.form.smoothie9.value;
        var result = document.getElementById("directions");

        result.innerHTML = [smoothie1  + smoothie2 + smoothie3 + smoothie4 +
          smoothie5 + smoothie6 + smoothie7 + smoothie6 + smoothie8 +
          smoothie9 + smoothie2 + smoothie8];
        };

        return false;

        submitButton.addEventListener('click', submitIt);

console.log("JS has successfully hacked your mainframe");
