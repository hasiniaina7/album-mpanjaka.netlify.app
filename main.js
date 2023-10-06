let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create new audio element
let curr_track = document.createElement("audio");

// Define the tracks that have to be played
let track_list = [
    {
        name: "After (Tsy Midodo)",
        artist: "BIG MJ",
        image: "https://i.ytimg.com/vi/lvkDF1lIp0I/0.jpg",
        path: "https://archive.org/download/big-mj-lelah-manambo-la-128-kbps/BIG%20MJ%20-%20After%20%28Tsy%20Midodo%29.mp3",
    },
    {
        name: "Araiha",
        artist: "BIG MJ",
        image: "https://i.ytimg.com/vi/BynXdJIE1ds/0.jpg",
        path: "https://archive.org/download/big-mj-lelah-manambo-la-128-kbps/BIG%20MJ%20-%20Araiha.mp3",
    },
    {
        name: "Atsika Roe ft Blad",
        artist: "BIG MJ",
        image: "https://i.ytimg.com/vi/KDM9Zm4XXRw/0.jpg",
        path: "https://archive.org/download/big-mj-lelah-manambo-la-128-kbps/BIG%20MJ%20-%20Atsika%20Roe%20ft%20Blad.mp3",
    },
    {
        name: "Feno Anao",
        artist: "BIG MJ",
        image: "https://i.ytimg.com/vi/FjYM4pRAaIs/0.jpg",
        path: "https://archive.org/download/big-mj-lelah-manambo-la-128-kbps/BIG%20MJ%20-%20Feno%20Anao.mp3",
    },
    {
        name: "Hiova",
        artist: "BIG MJ",
        image: "https://i.ytimg.com/vi/nCui7YIxOHk/0.jpg",
        path: "https://archive.org/download/big-mj-lelah-manambo-la-128-kbps/BIG%20MJ%20-%20Hiova.mp3",
    },
    {
        name: "Jobojoboa",
        artist: "BIG MJ",
        image: "https://i.ytimg.com/vi/_NgAwXsdIHw/0.jpg",
        path: "https://archive.org/download/big-mj-lelah-manambo-la-128-kbps/BIG%20MJ%20-%20Jobojoboa.mp3",
    },
    {
        name: "Kotrokotro 2.0 ft Romeo",
        artist: "BIG MJ",
        image: "https://i.ytimg.com/vi/bcPMcQBlYWU/0.jpg",
        path: "https://archive.org/download/big-mj-lelah-manambo-la-128-kbps/BIG%20MJ%20-%20Kotrokotro%202.0%20ft%20Romeo.mp3",
    },
    {
        name: "LELAH MANAMBÔLA (128 kbps)",
        artist: "BIG MJ",
        image: "https://i.ytimg.com/vi/a9A0nF36G6Q/0.jpg",
        path: "https://archive.org/download/big-mj-lelah-manambo-la-128-kbps/BIG%20MJ%20-%20LELAH%20MANAMB%C3%94LA%20%28128%20kbps%29.mp3",
    },
    {
        name: "Louisiana",
        artist: "Big MJ",
        image: "https://i.ytimg.com/vi/IqGDbNjjIY0/0.jpg",
        path: "https://archive.org/download/big-mj-lelah-manambo-la-128-kbps/Big%20MJ%20%20-%20Louisiana.mp3",
    },
    {
        name: "Madame ft Nael, Yoann Loic",
        artist: "BIG MJ",
        image: "https://i.ytimg.com/vi/Yml4yJSdRlo/0.jpg",
        path: "https://archive.org/download/big-mj-lelah-manambo-la-128-kbps/BIG%20MJ%20-%20Madame%20ft%20Nael%2C%20Yoann%20Loic.mp3",
    },
    {
        name: "Mam'Zel ft. @MadmaxGasy",
        artist: "BIG MJ",
        image: "https://i.ytimg.com/vi/omgKCS3kA94/0.jpg",
        path: "https://archive.org/download/big-mj-lelah-manambo-la-128-kbps/BIG%20MJ%20-%20Mam%27Zel%20ft.%20%40MadmaxGasy.mp3",
    },
    {
        name: "Mangiky ft Arione Joy & Agrad",
        artist: "BIG MJ",
        image: "https://i.ytimg.com/vi/nmNul-B_2kY/0.jpg",
        path: "https://archive.org/download/big-mj-lelah-manambo-la-128-kbps/BIG%20MJ%20-%20Mangiky%20ft%20Arione%20Joy%20%26%20Agrad.mp3",
    },
    {
        name: "Mbola Hitomoagny ft Eley",
        artist: "BIG MJ",
        image: "https://i.ytimg.com/vi/L5cQ9fURdHk/0.jpg",
        path: "https://archive.org/download/big-mj-lelah-manambo-la-128-kbps/BIG%20MJ%20-%20Mbola%20Hitomoagny%20ft%20Eley.mp3",
    },
    {
        name: "MPANJAKA",
        artist: "BIG MJ",
        image: "https://i.ytimg.com/vi/Li0UVzNP2dA/0.jpg",
        path: "https://archive.org/download/big-mj-lelah-manambo-la-128-kbps/BIG%20MJ%20-%20MPANJAKA.mp3",
    },
    {
        name: "Oh Marie ft Lion Hill",
        artist: "BIG MJ",
        image: "https://i.ytimg.com/vi/9L97IzsUknQ/0.jpg",
        path: "https://archive.org/download/big-mj-lelah-manambo-la-128-kbps/BIG%20MJ%20-%20Oh%20Marie%20ft%20Lion%20Hill.mp3",
    },
    {
        name: "Ramose Tatanta ft Tempo Gaigy",
        artist: "BIG MJ",
        image: "https://i.ytimg.com/vi/QSMck8ra6J8/0.jpg",
        path: "https://archive.org/download/big-mj-lelah-manambo-la-128-kbps/BIG%20MJ%20-%20Ramose%20Tatanta%20ft%20Tempo%20Gaigy.mp3",
    },
    {
        name: "Solo ft Docteur Love",
        artist: "BIG MJ",
        image: "https://i.ytimg.com/vi/Qom8SJ3oCrU/0.jpg",
        path: "https://archive.org/download/big-mj-lelah-manambo-la-128-kbps/BIG%20MJ%20-%20Solo%20ft%20Docteur%20Love.mp3",
    },
    {
        name: "Tsy Ahoan’ologno",
        artist: "BIG MJ",
        image: "https://i.ytimg.com/vi/7OfRqv7Xh4E/0.jpg",
        path: "https://archive.org/download/big-mj-lelah-manambo-la-128-kbps/BIG%20MJ%20-%20Tsy%20Ahoan%E2%80%99ologno.mp3",
    },
    {
        name: "Tsy idoko",
        artist: "BIG MJ",
        image: "https://i.ytimg.com/vi/89tykxOxdXg/0.jpg",
        path: "https://archive.org/download/big-mj-lelah-manambo-la-128-kbps/BIG%20MJ%20-%20Tsy%20idoko.mp3",
    },
    {
        name: "Tsy Mandry Mandry ft Big Jim Dah",
        artist: "BIG MJ",
        image: "https://i.ytimg.com/vi/diX3jsxeLzk/0.jpg",
        path: "https://archive.org/download/big-mj-lelah-manambo-la-128-kbps/BIG%20MJ%20-%20Tsy%20Mandry%20Mandry%20ft%20Big%20Jim%20Dah.mp3",
    },
    {
        name: "Tsy resy",
        artist: "BIG MJ",
        image: "https://i.ytimg.com/vi/6cI1K_kswkw/0.jpg",
        path: "https://archive.org/download/big-mj-lelah-manambo-la-128-kbps/BIG%20MJ%20-%20Tsy%20resy.mp3",
    },
    {
        name: "Zah Havanao",
        artist: "BIG MJ",
        image: "https://i.ytimg.com/vi/6Ko4z9b8jZU/0.jpg",
        path: "https://archive.org/download/big-mj-lelah-manambo-la-128-kbps/BIG%20MJ%20-%20Zah%20Havanao.mp3",
    },
    {
        name: "Zanako",
        artist: "BIG MJ",
        image: "https://i.ytimg.com/vi/_WwwKkCUiaM/0.jpg",
        path: "https://archive.org/download/big-mj-lelah-manambo-la-128-kbps/BIG%20MJ%20-%20Zanako.mp3",
    },
];

function random_bg_color() {
    // Get a number between 64 to 256 (for getting lighter colors)
    let red = Math.floor(Math.random() * 128);
    let green = Math.floor(Math.random() * 128);
    let blue = Math.floor(Math.random() * 128);

    // Construct a color withe the given values
    let bgColor = "rgb(" + red + "," + green + "," + blue + ")";

    // Set the background to that color
    document.body.style.background = bgColor;
}

function loadTrack(track_index) {
    clearInterval(updateTimer);
    resetValues();
    curr_track.src = track_list[track_index].path;
    curr_track.load();

    track_art.style.backgroundImage =
        "url(" + track_list[track_index].image + ")";
    track_name.textContent = track_list[track_index].name;
    track_artist.textContent = track_list[track_index].artist;
    now_playing.textContent =
        "LECTURE DE " + (track_index + 1) + " sur " + track_list.length;

    updateTimer = setInterval(seekUpdate, 1000);
    curr_track.addEventListener("ended", nextTrack);
    random_bg_color();
}

function resetValues() {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}

// Load the first track in the tracklist
loadTrack(track_index);

function playpauseTrack() {
    if (!isPlaying) playTrack();
    else pauseTrack();
}

function playTrack() {
    curr_track.play();
    isPlaying = true;
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
    curr_track.pause();
    isPlaying = false;
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

function nextTrack() {
    if (track_index < track_list.length - 1) track_index += 1;
    else track_index = 0;
    loadTrack(track_index);
    playTrack();
}

function prevTrack() {
    if (track_index > 0) track_index -= 1;
    else track_index = track_list.length;
    loadTrack(track_index);
    playTrack();
}

function seekTo() {
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}

function setVolume() {
    curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
    let seekPosition = 0;

    if (!isNaN(curr_track.duration)) {
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);

        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(
            curr_track.currentTime - currentMinutes * 60
        );
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(
            curr_track.duration - durationMinutes * 60
        );

        if (currentSeconds < 10) {
            currentSeconds = "0" + currentSeconds;
        }
        if (durationSeconds < 10) {
            durationSeconds = "0" + durationSeconds;
        }
        if (currentMinutes < 10) {
            currentMinutes = "0" + currentMinutes;
        }
        if (durationMinutes < 10) {
            durationMinutes = "0" + durationMinutes;
        }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}
// Créer un élément de liste pour chaque piste
function createTrackList() {
    let playlist = document.querySelector(".playlist");

    track_list.forEach((track, index) => {
        let trackItem = document.createElement("li");
        let trackTitle = document.createElement("h4");
        let trackArtist = document.createElement("p");
        let trackImage = document.createElement("img");

        trackTitle.textContent = track.name;
        trackArtist.textContent = track.artist;
        trackImage.src = track.image;

        // Ajouter un écouteur d'événements pour jouer la piste lorsque vous cliquez sur le titre
        trackTitle.addEventListener("click", () => {
            // Supprimer la classe active-track de l'élément précédemment actif
            let previousActiveTrack = playlist.querySelector(".active-track");
            if (previousActiveTrack) {
                previousActiveTrack.classList.remove("active-track");
            }

            // Mettre à jour la classe active-track pour l'élément actuel
            trackItem.classList.add("active-track");
            track_index = index;
            loadTrack(track_index);
            playTrack();
        });

        trackItem.appendChild(trackImage);
        trackItem.appendChild(trackTitle);
        // trackItem.appendChild(trackArtist);

        playlist.appendChild(trackItem);
    });
}

// Appeler la fonction pour créer la liste de lecture
createTrackList();
window.onload = function () {
    var element = document.querySelector(".track-artist");
    var words = element.innerText.split(" ").length;

    if (words <= 5) {
        element.style.fontSize = "2em";
    } else if (words <= 10) {
        element.style.fontSize = "1.5em";
    } else {
        element.style.fontSize = "1em";
    }
};
