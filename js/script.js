let currentContentIndex = 0;
const contents = ["Conteúdo 1", "Conteúdo 2", "Conteúdo 3"];

function updateContent() {
    const contentBox = document.getElementById("content-box");
    contentBox.textContent = contents[currentContentIndex];
    updateDots();
}

function nextContent() {
    currentContentIndex = (currentContentIndex + 1) % contents.length;
    updateContent();
}

function previousContent() {
    currentContentIndex = (currentContentIndex - 1 + contents.length) % contents.length;
    updateContent();
}

function updateDots() {
    for (let i = 0; i < contents.length; i++) {
        const dot = document.getElementById(`dot-${i}`);
        if (i === currentContentIndex) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    }
}

document.addEventListener("DOMContentLoaded", updateContent);