const scenes = document.querySelectorAll(".scene");
const nextButtons = document.querySelectorAll(".next-btn");

let currentScene = 0;

function showScene(nextScene) {
    const current = scenes[currentScene];
    const next = scenes[nextScene];

    current.classList.add("leaving");

    setTimeout(() => {
        current.classList.remove("active");
        next.classList.add("active", "entering");

        setTimeout(() => {
            next.classList.remove("entering");
        }, 1500);

        currentScene = nextScene;
    }, 1000);
}

nextButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (currentScene < scenes.length - 1) {
            showScene(currentScene + 1);
        }
    });
});