let count = 0;
const countEl = document.getElementById("count-el");
const saveEl = document.getElementById("save-el");

export function increment() {
    count += 1;
    countEl.textContent = count;
}

export function save() {
    const countStr = count + " - ";
    count = 0;
    saveEl.textContent += countStr;
    countEl.textContent = count;
}