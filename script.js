const list = document.getElementById("infi-list");

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
list.addEventListener("scroll", function () {
    const scrolledToBottom =
        list.scrollTop + list.clientHeight >= list.scrollHeight - 5;

    if (scrolledToBottom) {
        addItems(2);
    }
});