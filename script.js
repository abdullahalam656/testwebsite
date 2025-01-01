
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

setInterval(() => {
    document.body.style.backgroundColor = getRandomColor();
}, 1000);

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000); // Remove heart after animation
}

function openEnvelope() {
    // Select elements
    const topFlap = document.getElementById("topFlap");
    const buttonContainer = document.getElementById("buttonContainer");
    const paper = document.getElementById("paper");
    const message = document.getElementById("message");
    alert('THANK U FOR OPEN THIS MY NO WAY')

    // Open the envelope flap
    topFlap.classList.add("open");

    // Hide the button container
    buttonContainer.style.display = "none";

    // Unfold the paper after a short delay
    setTimeout(() => {
        paper.classList.add("open");

        // Show the message after the paper unfolds
        setTimeout(() => {
            message.classList.add("visible");
        }, 500); // Matches the paper unfold animation
    }, 500);
   
     // Matches the flap animation
}



//function openEnvelope() {
   // alert("THANK U KAINAT! FINALLY FOR ACCEPTING ME U MAKE MY DAY BEAUTIFUL" );
//}
// Change color every second



