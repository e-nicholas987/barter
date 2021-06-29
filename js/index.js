const profiles = [
    "./assets/profile-pic/Ellipse 44.png",
    "./assets/profile-pic/Ellipse 45.png",
    "./assets/profile-pic/Ellipse 46.png",
    "./assets/profile-pic/Ellipse 48.png",
    "./assets/profile-pic/Ellipse 44.png",
    "./assets/profile-pic/Ellipse 45.png",
    "./assets/profile-pic/Ellipse 46.png",
    
]

const prev = document.getElementById('chevron-left');
const next = document.getElementById('chevron-right');

let startInd = 0;
let numberOfAvatars = 4;

prev.addEventListener('click', () => {
    startInd--
    if (startInd < 0)
        startInd = 0;
    displaySuccessfulTrader(startInd)
});


next.addEventListener('click', () => {
    startInd++
    if (startInd > profiles.length - numberOfAvatars)
        startInd = profiles.length - numberOfAvatars;
    displaySuccessfulTrader(startInd)
});

function displaySuccessfulTrader(start) {
    const tAvatars = document.getElementById('trader-avatars');
    (start < 1) ? prev.style.display = 'none' : prev.style.display = 'block';
    (start === profiles.length - numberOfAvatars || profiles.length < numberOfAvatars) ? next.style.display = 'none' : next.style.display = 'block';


    tAvatars.innerHTML = '';
    return profiles.slice(start, start + numberOfAvatars).
        forEach(item =>
            tAvatars.innerHTML += `<img src="${item}" alt="">`
        )
}

window.onload = () => {
    displaySuccessfulTrader(startInd, numberOfAvatars)
}
