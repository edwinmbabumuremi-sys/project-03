const button = document.getElementById("contactBtn");

button.addEventListener("click", function() {
    title.textContent = "Thanks for contacting me!";
});
let name = "edwin";
let skill = "Web Development";

console.log(name);
console.log(skill);
const title = document.getElementById("profileTitle");

title.textContent = "Hello, " + name + "!";

let age = 23;
if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are under 18");
}

const greetBtn = document.getElementById("greetBtn");

greetBtn.addEventListener("click", function() {
    let userName = prompt("What is your name?");

    if (userName) {
        title.textContent = "Hello, " + userName + "!";
    }
});

function welcome() {
    console.log("welcome to my website!");
}

welcome();
function greet(name) {
    console.log("Hello," + name);
}

greet("Edwin");
greet("Atlas")