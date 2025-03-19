function getRandomUser() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://randomuser.me/api/", true);
    
    xhr.onload = function() {
        if (xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            var user = response.results[0];

            document.getElementById("userImage").src = user.picture.large;
            document.getElementById("userName").textContent = "Name: " + user.name.first + " " + user.name.last;
            document.getElementById("userEmail").textContent = "Email: " + user.email;
            document.getElementById("userLocation").textContent = "Location: " + user.location.city + ", " + user.location.country;
        }
    };

    xhr.onerror = function() {
        alert("Failed to fetch user data. Try again!");
    };

    xhr.send();
}