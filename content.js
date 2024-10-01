// DOM Elements
var generateBtn = document.getElementById("addProject");
var cvOutput = document.getElementById("cvOutput");
// Event listener for the "Generate Resume" button
generateBtn.addEventListener("click", function () {
    generateCV();
});
// Function to generate the CV and show "Print CV" button
function generateCV() {
    var firstName = document.getElementById("firstName").value;
    var email = document.getElementById("address").value;
    var phone = document.getElementById("phoneNumber").value;
    var education = document.getElementById("achievementTitle").value;
    var experience = document.getElementById("companyName").value;
    var skill = document.getElementById("skill").value;
    // Creating the CV HTML structure dynamically
    cvOutput.innerHTML = "\n        <div class=\"cv\">\n            <h3>".concat(firstName, "</h3>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <h4>Education</h4>\n            <p>").concat(education, "</p>\n            <h4>Experience</h4>\n            <p>").concat(experience, "</p>\n            <h4>Skills</h4>\n            <p>").concat(skill, "</p>\n        </div>\n        <button id=\"printCvButton\" class=\"button\">Print CV</button>\n    ");
    // Adding print functionality to the "Print CV" button
    var printBtn = document.getElementById("printCvButton");
    printBtn.addEventListener("click", function () {
        printCV();
    });
}
// Function to print the CV
function printCV() {
    window.print();
}
