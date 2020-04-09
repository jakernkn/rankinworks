const DELAY = 3000;

setTimeout(delayedStart, DELAY);

function delayedStart() {
    const logo = document.getElementById('bm');
    logo.addEventListener('click', () => {
        window.open('https://rankin.works/', '_blank');
    });
    logo.classList.add('clickable-logo')
    logoCircle.play();
}