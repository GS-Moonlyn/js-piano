const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider");
const keysCheck = document.querySelector(".keys-check input");

let mappedKeys = [];

let audio = new Audio("src/audio/a.wav")

const playTune = (key) => {
    audio.src = `src/audio/${key}.wav`;
    audio.play();
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");

    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
}

pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.key));
    mappedKeys.push(key.dataset.key);
  });


document.addEventListener("keydown", (e) => {
    if(mappedKeys.includes(e.key)){
        playTune(e.key);
    }
})

const handleVolume = (e) => {
    audio.volume = e.target.value
};

const toggleKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hidden"))
};

volumeSlider.addEventListener("input", handleVolume);

keysCheck.addEventListener("click", toggleKeys);