// 6.1 (3p) Hämta posts med fetch från denna url: https://jsonplaceholder.typicode.com/posts
// Visa title och body från varje post på sidan inuti: <div id="posts"></div>
// Visa endast posts från användaren med userId: 1

const postsEl = document.querySelector(".posts");

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  console.log(data);

  const userOnePosts = posts.filter((post) => post.userId === 1);

  const postsContainer = document.getElementById("posts");
  userOnePosts.forEach((post) => {
    const postDiv = document.createElement("div");
    postDiv.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
    postsContainer.appendChild(postDiv);
  });
}

getPosts();

// 6.2 (3p)
// Varje post ska ha padding: 20px och margin: 10px
// Texten på title ska vara bold
// Text-färgen ska vara grå
// Backgrundsfärgen på varje post ska vara ljus-grå
// När man för muspekaren över en post ska bakgrundsfärgen ändras till vit
// Visa posts i fyra kolumner för desktop och en kolumn för mobil

// 6.3 (3p)
// Hämta posts från url: https://jsonplaceholder.typicode.com/posts
// och hämta comments från denna url: https://jsonplaceholder.typicode.com/comments
// Visa title och body från varje post
// Under varje post visa alla dess tillhörande kommentarer.
// name och body visas för varje kommentar.
// Lägg alla posts med kommentarer på sidan inuti: <div id="postsWithComments"></div>
// Styla posts och comments på samma sätt som ovan.
// tips: comments är kopplade till posts med postId

function fetchData(url, callback) {
  $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    success: function (data) {
      callback(data);
    },
    error: function (error) {
      console.error("Error fetching data:", error);
    },
  });
}

function displayPosts(data) {
  var postsWithCommentsDiv = $("#postsWithComments");

  data.forEach(function (post) {
    var postContainer = $('<div class="post"></div>');

    var postTitle = $("<h3>" + post.title + "</h3>");
    var postBody = $("<p>" + post.body + "</p>");

    postContainer.append(postTitle, postBody);

    displayComments(post.id, function (comments) {
      comments.forEach(function (comment) {
        var commentContainer = $('<div class="comment"></div>');

        var commentName = $("<strong>" + comment.name + "</strong>");
        var commentBody = $("<p>" + comment.body + "</p>");

        commentContainer.append(commentName, commentBody);
        postContainer.append(commentContainer);
      });

      postsWithCommentsDiv.append(postContainer);
    });
  });
}

function displayComments(postId, callback) {
  fetchData(
    "https://jsonplaceholder.typicode.com/comments?postId=" + postId,
    callback
  );
}

fetchData("https://jsonplaceholder.typicode.com/posts", displayPosts);
