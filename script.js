console.log('Welcome to the Spotify');

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif')
let songItems = document.getElementsByClassName('songItem');

let songs = [
    {songName: "1 Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "2 Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "3 Salam-e-Ishq", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "4 Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "5 Salam-e-Ishq", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"}, 
    {songName: "6 Salam-e-Ishq", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "7 Salam-e-Ishq", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"}, 
    {songName: "8 Salam-e-Ishq", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"}, 
    {songName: "9 Salam-e-Ishq", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"} 
];

songItems.forEach((element)=>{
    element.getElementsByTagName("img")
})

//audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})

//Listen to events
audioElement.addEventListener('timeupdate', ()=>{
    //Update Seekbar
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})