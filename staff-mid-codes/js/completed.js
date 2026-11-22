// Search completed orders table
function searchCompleted() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let rows = document.getElementById("completedTableBody").getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        let text = rows[i].innerText.toLowerCase();
        if (text.indexOf(input) > -1) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}
