document.addEventListener("DOMContentLoaded", function () {
    fetch('posts.json')
    .then(response => response.json())
    .then(posts => {
        const pageContent = document.getElementById('pageContent');
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'post';
            postElement.innerHTML = `
                <h3>${post.author}</h3>
                <img src="images/${post.image}" alt="Post image">
                <div class="post-info">
                    <i class="fa-regular fa-heart fa-2xl heart-icon interaction"></i>
                    <i class="fa-solid fa-link fa-2xl interaction"></i>
                    <i class="fa-solid fa-paper-plane fa-2xl interaction"></i>
                </div>
                <div class="post-info">
                    <h4 class="p-author">${post.author}</h4>
                    <h4>${post.caption}</h4>
                </div>
                <p>${post.timestamp}</p>
            `;
            pageContent.appendChild(postElement);
        });

        // Add event listener to toggle heart icon class and color
        document.querySelectorAll('.heart-icon').forEach(icon => {
            icon.addEventListener('click', function () {
                this.classList.toggle('fa-regular');
                this.classList.toggle('fa-solid');
                if (this.classList.contains('fa-solid')) {
                    this.style.color = '#ff2600';
                } else {
                    this.style.color = ''; // Reset to default color
                }
            });
        });
    })
    .catch(error => console.error('Error fetching posts:', error));});