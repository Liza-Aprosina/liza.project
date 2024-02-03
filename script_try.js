/* JS */
// const form = document.getElementById('registration-form');
// form.addEventListener('submit', function(event) {
//  event.preventDefault();

//  const username = form.elements['username'].value;
//  const email = form.elements['email'].value;
//  const password = form.elements['password'].value;

//  console.log(username: ${username});
//  console.log(email: ${email});
//  console.log(password: ${password});
// });
function handle() {
    let inputs = document.querySelectorAll(".try");
    let input_values = [];
    for (let i = 0; i < inputs.length; i++) {
        input_values.push(inputs[i].value);
    }
    console.log(input_values);
};
let btn=document.querySelector('.submit');
btn.addEventListener('click', handle);
