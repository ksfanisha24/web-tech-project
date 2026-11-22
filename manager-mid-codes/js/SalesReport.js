function filterSales() {
    let selectedMonth = document.getElementById("month").value;
    let table = document.getElementById("monthlySalesTable");
    let rows = table.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {
        let month = rows[i].cells[0].textContent.toLowerCase();

        if (selectedMonth === "all" || selectedMonth === month) {
            rows[i].style.display = "";
        }
        else {
            rows[i].style.display = "none";
        }
    }
}

document.getElementById("salesFilterForm").addEventListener("submit", function(event) {
    event.preventDefault();
    filterSales();
});