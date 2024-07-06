fetch('https://btu-exam-cb6c3fdf3b9d.herokuapp.com/news')
.then(response => response.json())
.then(data => {
    const html = data.map(item => {
        return `
        <div class="fetchedDiv">
            <h1 class="id">${item.id}</h1>
            <h1 class="h1text">${item.title}</h1>
            <h1 class="h1text">${item.category}</h1>
            <h1 class="h1text">${item.likes}</h1>
            <h1 class="h1text">${item.dateUpdated}</h1>
            <h1 class="h1text">${item.dateCreated}</h1>
            <div>
                <button class="CreationButton" onclick="deleteItem(${item.id})">Delete</button>
                <a href="update.html?id=${item.id}"><button class="CreationButton">Update</button></a>
            </div>
            <br>
        </div>
        <hr class="line1">
        `;
    }).join('');
    document.getElementById('news-list').innerHTML = html;
});

function deleteItem(itemId) {
fetch(`https://btu-exam-cb6c3fdf3b9d.herokuapp.com/news/${itemId}`, {
    method: 'DELETE',
})
.then(response => {
    if (response.ok) {
        
        fetchNews();
    } else {
        console.error('Failed to delete item');
    }
})
.catch(error => {
    console.error('Error deleting item:', error);
});
}

function fetchNews() {
fetch('https://btu-exam-cb6c3fdf3b9d.herokuapp.com/news')
    .then(response => response.json())
    .then(data => {
        const html = data.map(item => {
            return `
            <div class="fetchedDiv">
                <h1 class="id">${item.id}</h1>
                <h1 class="h1text">${item.title}</h1>
                <h1 class="h1text">${item.category}</h1>
                <h1 class="h1text">${item.likes}</h1>
                <h1 class="h1text">${item.dateUpdated}</h1>
                <h1 class="h1text">${item.dateCreated}</h1>
                <div>
                    <button class="CreationButton" onclick="deleteItem(${item.id})">Delete</button>
                    <a href="update.html?id=${item.id}"><button class="CreationButton">Update</button></a>
                </div>
                <br>
            </div>
            <hr class="line1">
            `;
        }).join('');
        document.getElementById('news-list').innerHTML = html;
    });
}