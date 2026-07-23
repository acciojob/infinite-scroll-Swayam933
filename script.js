const list = document.getElementById("infi-list");

let itemCount = 0;

function addItems(count) {
    for (let i = 0; i < count; i++) {
        itemCount++;
        const li = document.createElement("li");
        li.textContent = "Item " + itemCount;
        li.className = "list-item";
        list.appendChild(li);
    }
}

addItems(10);

let loading = false;

list.addEventListener("scroll", function () {
    if (loading) return;

    const scrolledToBottom =
        list.scrollTop + list.clientHeight >= list.scrollHeight - 10;

    if (scrolledToBottom) {
        loading = true;
        addItems(2);
        loading = false;
    }
});