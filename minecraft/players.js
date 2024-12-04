function fetchJSONData() {
    fetch("https://api.mcsrvstat.us/3/minecraft.lylacoding.com")
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => {
            const playerList = document.getElementById("player-list");
            playerList.innerHTML = ""; // Clear previous content
            if (data.players && data.players.list) {
                data.players.list.forEach(player => {
                    const listItem = document.createElement("li");
                    listItem.textContent = player.name; // Add player's name
                    playerList.appendChild(listItem); // Append to the list
                });
            } else {
                playerList.textContent = "No players found.";
            }
        })
        .catch((error) =>
            console.error("Unable to fetch data:", error));
}
fetchJSONData();