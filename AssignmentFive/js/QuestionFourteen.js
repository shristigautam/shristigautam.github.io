/*14.	Refer to your work on Lab Assignment 4. Add Javascript code to work with your 2 HTML forms as follows:
a.	Login Form: Add code such that when the Submit button is clicked, the values entered in the input fields are printed to the Console.
b.	New Product Form: Add code such that when the Submit button is clicked, the values entered in the input fields are displayed in a pop-up window.
*/

function Submit(thisForm) {
    // console.log("Email: " + document.getElementById('email').value);
    // console.log("Website: " + document.getElementById('website').value);
    // console.log("Check me out: " + document.getElementById('checkme').value);

    let resultStr = '';
    for (let i = 0; i < thisForm.elements.length; i++) {
        resultStr += thisForm.elements[i].name + ": " + thisForm.elements[i].value + "\n";
    }
    console.log(resultStr);
}

function submitProduct(thisForm) {
    let resultStr = '';
    for (let i = 0; i < thisForm.elements.length; i++) {
        resultStr += '<p><span>' + thisForm.elements[i].name + ":</span> " + thisForm.elements[i].value + '</p>';
    }
    let newWin = window.open("about:blank", "Form Data", "width=500,height=500");
    newWin.document.write(resultStr);
}