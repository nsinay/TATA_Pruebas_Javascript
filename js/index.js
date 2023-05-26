const listUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    let tableBody = ``;
    users.forEach((user, index) => {
        tableBody += `<tr>
        <td class='centered'>${user.id}</td>
        <td class='centered'>${user.name}</td>
        <td class='centered'>${user.username}</td>
        <td class='centered'>${user.email}</td>
        <td class='centered'>${user.website}</td>
        </tr>`;
    });
    // document.getElementById("tableBody_Users").innerHTML = tableBody;
    tableBody_Users.innerHTML = tableBody;
};

window.addEventListener("load", function () {
    listUsers();
});
document.getElementById("input-search").addEventListener("input", onInputChange)

function onInputChange() {
    let inputText = document.getElementById("input-search").value.toString().toLowerCase();
    let tableBody = document.getElementById("tableBody_Users");
    let tableRows = tableBody.getElementsByTagName("tr");
    for (let i = 0; i < tableRows.length; i++) {
        let textConsulta = tableRows[i].cells[1].textContent.toString().toLowerCase();
        if (textConsulta.indexOf(inputText) === -1) {
            tableRows[i].style.visibility = "collapse";
        } else {
            tableRows[i].style.visibility = "";

        }
    }
}
