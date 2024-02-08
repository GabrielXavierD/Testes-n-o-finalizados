let timerInterval;
let isRunning = false;
let seconds = 0;

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function startTimer() {
    if (!isRunning) {
        const timeInput = document.getElementById('timeInput');
        seconds = parseInt(timeInput.value, 10) || 0; // Use o valor do campo de entrada, ou 0 se for inválido
        isRunning = true;
        timerInterval = setInterval(() => {
            seconds--;
            if (seconds < 0) {
                stopTimer();
                document.getElementById('countdown').textContent = '00:00';
            } else {
                document.getElementById('countdown').textContent = formatTime(seconds);
            }
        }, 1000);
    }
}

function stopTimer() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timerInterval);
    }
}

function resetTimer() {
    stopTimer();
    const timeInput = document.getElementById('timeInput');
    seconds = parseInt(timeInput.value, 10) || 0; // Use o valor do campo de entrada, ou 0 se for inválido
    document.getElementById('countdown').textContent = formatTime(seconds);
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
