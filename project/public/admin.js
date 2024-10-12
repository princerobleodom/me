// admin.js
fetch('/admin-data')
    .then(response => response.json())
    .then(attempts => {
        const table = document.getElementById("attempts-table");
        attempts.forEach(attempt => {
            const row = table.insertRow();
            const usernameCell = row.insertCell(0);
            const passwordCell = row.insertCell(1);
            usernameCell.innerText = attempt.username;
            passwordCell.innerText = attempt.password;
        });
    });
