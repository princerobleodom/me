function login() {
    // Perform login validation (add your logic here)
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") {
        // Redirect to admin panel
        window.location.href = "admin.html";
    } else {
        alert("Invalid credentials. Please try again.");
    }
}

// Function to fetch and display login details in admin panel
function fetchLoginDetails() {
    // Simulated login details, replace with actual data fetching logic
    var loginDetails = [
        { id: 1, username: "user1", timestamp: "2022-01-01 12:00:00" },
        { id: 2, username: "user2", timestamp: "2022-01-02 14:30:00" }
        // Add more login details as needed
    ];

    var table = document.getElementById("loginDetailsTable");

    loginDetails.forEach(function (detail) {
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.textContent = detail.id;
        cell2.textContent = detail.username;
        cell3.textContent = detail.timestamp;
    });
}

// Call fetchLoginDetails when the admin panel page loads
if (window.location.pathname === "/admin.html") {
    window.onload = fetchLoginDetails;
}
