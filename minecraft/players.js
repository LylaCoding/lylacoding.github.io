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
                    
                    const listName = document.createElement("li");
                    const players = document.createElement("div");
                    const img = document.createElement("img");

                    players.classList.add("playerDiv");

                    img.src = "https://mineskin.eu/helm/" + player.name + "/50.png";
                    listName.textContent = player.name; // Add player's name
                    
                    playerList.appendChild(players);

                    players.appendChild(img);
                    players.appendChild(listName);
                    
                    
                    
                    

                    console.log("https://mineskin.eu/helm/" + player.name + "/100.png");
                });
            } else {
                playerList.textContent = "No players found.";
            }
        })
        .catch((error) =>
            console.error("Unable to fetch data:", error));
}
fetchJSONData();