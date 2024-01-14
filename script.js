let countdown;
let countdownValue = 3600; // Set the initial countdown value in seconds (1 hour)

function startCountdown() {
    const inputHours = document.getElementById('countdownInput').value;
    countdownValue = inputHours * 3600; // Convert hours to seconds
    clearInterval(countdown); // Clear any existing countdown

    updateCountdown(); // Update immediately to show the initial value

    countdown = setInterval(function() {
        updateCountdown();
    }, 1000); // Update every 1 second
}

function updateCountdown() {
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    if (countdownValue > 0) {
        countdownValue--;
        const hours = Math.floor(countdownValue / 3600);
        const minutes = Math.floor((countdownValue % 3600) / 60);
        const seconds = countdownValue % 60;

        hoursElement.textContent = formatTime(hours);
        minutesElement.textContent = formatTime(minutes);
        secondsElement.textContent = formatTime(seconds);
    } else {
        clearInterval(countdown);
        hoursElement.textContent = '00';
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';
    }
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
