const container = document.getElementById("container");
const list = document.getElementById("list");

let itemCount = 0;

function addItems(count) {
    for (let i = 0; i < count; i++) {
        itemCount++;
        const li = document.createElement("li");
        li.textContent = "Item " + itemCount;
        list.appendChild(li);
    }
}

// Add 10 items by default
addItems(10);

// Load 2 more items when user scrolls to the end
container.addEventListener("scroll", function () {
    const scrolledToBottom =
        container.scrollTop + container.clientHeight >= container.scrollHeight - 5;

    if (scrolledToBottom) {
        addItems(2);
    }
});