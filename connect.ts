// DOM Elements
const generateBtn = document.getElementById("addProject") as HTMLButtonElement;
const cvOutput = document.getElementById("cvOutput") as HTMLDivElement;

// Event listener for the "Generate Resume" button
generateBtn.addEventListener("click", () => {
    generateCV();
});

// Function to generate the CV and show "Print CV" button
function generateCV() {
    const firstName = (document.getElementById("firstName") as HTMLInputElement).value;
    const email = (document.getElementById("address") as HTMLInputElement).value;
    const phone = (document.getElementById("phoneNumber") as HTMLInputElement).value;
    const education = (document.getElementById("achievementTitle") as HTMLInputElement).value;
    const experience = (document.getElementById("companyName") as HTMLInputElement).value;
    const skill = (document.getElementById("skill") as HTMLInputElement).value;

    // Creating the CV HTML structure dynamically
    cvOutput.innerHTML = `
        <div class="cv">
            <h3>${firstName}</h3>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <h4>Education</h4>
            <p>${education}</p>
            <h4>Experience</h4>
            <p>${experience}</p>
            <h4>Skills</h4>
            <p>${skill}</p>
        </div>
        <button id="printCvButton" class="button">Print CV</button>
    `;

    // Adding print functionality to the "Print CV" button
    const printBtn = document.getElementById("printCvButton") as HTMLButtonElement;
    printBtn.addEventListener("click", () => {
        printCV();
    });
}

// Function to print the CV
function printCV() {
    window.print();
}
