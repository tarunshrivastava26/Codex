const movies = [
    {
        name: "Interstellar",
        genre: "Sci-Fi",
        desc: "A team of explorers travel through a wormhole in space to save humanity.",
        img: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg"
    },
    {
        name: "Inception",
        genre: "Sci-Fi",
        desc: "A thief enters dreams to steal secrets, but faces a deeper challenge.",
        img: "https://m.media-amazon.com/images/I/5101wRwFfpL.jpg"
    },
    {
        name: "Avatar",
        genre: "Sci-Fi",
        desc: "A marine on an alien planet becomes part of an indigenous tribe.",
        img: "https://m.media-amazon.com/images/I/81t6f1D2QwL._AC_SL1500_.jpg"
    },

    {
        name: "John Wick",
        genre: "Action",
        desc: "A retired assassin seeks revenge for the loss of his dog.",
        img: "https://m.media-amazon.com/images/I/81T6tWwY3-L._AC_SL1500_.jpg"
    },
    {
        name: "Mad Max: Fury Road",
        genre: "Action",
        desc: "A woman rebels against a tyrant with the help of a drifter.",
        img: "https://m.media-amazon.com/images/I/91KkWf50SoL._AC_SL1500_.jpg"
    },
    {
        name: "Gladiator",
        genre: "Action",
        desc: "A betrayed general fights as a gladiator to avenge his family.",
        img: "https://m.media-amazon.com/images/I/71pWvCr0cPL._AC_SL1000_.jpg"
    },

    {
        name: "The Conjuring",
        genre: "Horror",
        desc: "Paranormal investigators help a family plagued by dark forces.",
        img: "https://m.media-amazon.com/images/I/71qU7XcHj3L._AC_SL1178_.jpg"
    },
    {
        name: "IT",
        genre: "Horror",
        desc: "A demonic clown terrorizes children in a small town.",
        img: "https://m.media-amazon.com/images/I/81p7cYnpBKL._AC_SL1500_.jpg"
    },
    {
        name: "A Quiet Place",
        genre: "Horror",
        desc: "A family lives in silence to hide from sound-sensitive creatures.",
        img: "https://m.media-amazon.com/images/I/71xsBGTNncL._AC_SL1500_.jpg"
    },

    {
        name: "The Hangover",
        genre: "Comedy",
        desc: "Three friends try to piece together a wild night in Vegas.",
        img: "https://m.media-amazon.com/images/I/91VwkNv7-CS._AC_SL1500_.jpg"
    },
    {
        name: "Jumanji",
        genre: "Comedy",
        desc: "Players get trapped inside a magical and dangerous video game.",
        img: "https://m.media-amazon.com/images/I/911TuGJqJTL._AC_SL1500_.jpg"
    },
    {
        name: "Deadpool",
        genre: "Comedy",
        desc: "A hilarious anti-hero seeks revenge with dark humour.",
        img: "https://m.media-amazon.com/images/I/81l-BH+aJpL._AC_SL1500_.jpg"
    },

    {
        name: "The Shawshank Redemption",
        genre: "Drama",
        desc: "Two imprisoned men form a friendship and find hope.",
        img: "https://m.media-amazon.com/images/I/51NiGlapXlL.jpg"
    },
    {
        name: "Forrest Gump",
        genre: "Drama",
        desc: "A simple man lives an extraordinary life filled with love and adventure.",
        img: "https://m.media-amazon.com/images/I/71rZd59wxpL._AC_SL1000_.jpg"
    },
    {
        name: "The Pursuit of Happyness",
        genre: "Drama",
        desc: "A struggling salesman fights to build a better life for his son.",
        img: "https://m.media-amazon.com/images/I/81cowvNvBO-L._AC_SL1500_.jpg"
    }
];

function recommendMovies() {
    const genre = document.getElementById("genreSelect").value;
    const movieList = document.getElementById("movieList");

    movieList.innerHTML = "";

    if (!genre) {
        movieList.innerHTML = "<p>Please select a genre.</p>";
        return;
    }

    const filtered = movies.filter(movie => movie.genre === genre);

    filtered.forEach(movie => {
        const card = document.createElement("div");
        card.classList.add("movie-card");

        card.innerHTML = `
            <img src="${movie.img}" alt="${movie.name}">
            <h3>${movie.name}</h3>
            <p>${movie.desc}</p>
        `;

        movieList.appendChild(card);
    });
}
