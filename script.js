let title = document.getElementById('title');
let blogPost = document.getElementById('blogpost');
let photoLink = document.getElementById('photo');
let save = document.getElementById('save-btn');
let edit = document.getElementById('edit-btn');
let clear = document.getElementById('clear-btn');      //declaring input fields as variables



save.addEventListener("click", function(event) {
    event.preventDefault();
    let titleInput = title.value;
    let blogInput = blogPost.value;
    let photoInput = photoLink.value;
    if (titleInput && blogInput) {
        localStorage.setItem('title', titleInput); //saving input into local storage via click event
        localStorage.setItem('blog-post', blogInput);
        alert('Post submitted!');
        displayTitle();
        displayBlog();
    }
    else alert('Please fill out the required fields before submitting.');
       
    if (photoInput) {
        localStorage.setItem('photo', photoInput); //optional photo upload
        displayPhoto();
    }
    });
    
edit.addEventListener("click", function (event) {
    event.preventDefault();
    if (titleInput && blogInput) {
        localStorage.getItem('title', titleInput);
        localStorage.getItem('blog-post', blogInput);
    }
});

clear.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.clear(); 
    displayData();
});


function displayTitle() {
        const titleDisplay = document.getElementById('display-title');
        const titleSaved = localStorage.getItem('title');
        if (titleSaved) {
            titleDisplay.textContent = `${titleSaved}`;
        } else {
            titleDisplay.textContent = 'No blog titles have been uploaded';
        }
    }

function displayBlog() {
        const blogDisplay = document.getElementById('display-blog');
        const blogSaved = localStorage.getItem('blog-post');
        if (blogSaved) {
            blogDisplay.textContent = `${blogSaved}`;
        } else {
            blogDisplay.textContent = 'No blog entries have been uploaded';
        }
}
function loadContent() {
    displayTitle();
    displayBlog();
    displayPhoto();
}
loadContent();