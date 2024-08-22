const links = document.querySelectorAll(".alternate-style"),
      totalLinks = links.length;

const colorToSong = {
    "color1": "song1.mp3",
    "color2": "song2.mp3",
    "color3": "song3.mp3",
    "color4": "song4.mp3",
    "color5": "song5.mp3"
};

function setActiveStyle(color) {
    for(let i = 0; i < totalLinks; i++) {
        if(color === links[i].getAttribute("title")) {
            links[i].removeAttribute("disabled");
        } else {
            links[i].setAttribute("disabled", "true");
        }
    }
    
    // Play corresponding song when color is activated
    if (colorToSong[color]) {
        const backgroundMusic = document.getElementById('backgroundMusic');
        backgroundMusic.src = `music/${colorToSong[color]}`;
        backgroundMusic.play();
    }
}

const bodySkin = document.querySelectorAll(".body-skin"),
      totalBodySkin = bodySkin.length;

for (let i = 0; i < totalBodySkin; i++) {
    bodySkin[i].addEventListener("change", function() {
        if(this.value === "dark") {
            document.body.className = "dark";
        } else {
            document.body.className = "";
        }
    });
}

document.querySelector(".toggle-style-switcher").addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});
