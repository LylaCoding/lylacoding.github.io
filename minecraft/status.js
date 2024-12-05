function fetchJSONData() {
    fetch("https://api.mcsrvstat.us/3/minecraft.lylacoding.com")
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => {
            const StatusBox = document.getElementById("status-box");
            StatusBox.innerHTML = ""; 
            if (data.online == true) {
                console.log("server is online");
                StatusBox.innerHTML = "🟢 Server Is online"
            } else {
                console.log("server is offline");
                StatusBox.innerHTML = "🔴 Server Is offline"
            }
        })
        .catch((error) =>
            console.error("Unable to fetch data:", error));
}
fetchJSONData();