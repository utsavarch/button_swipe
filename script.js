document.getElementById('messageButton').addEventListener('click', function() {
    document.getElementById('dialogBox').classList.remove('hidden');
});

document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('dialogBox').classList.add('hidden');
    document.getElementById('secondDialogBox').classList.remove('hidden');
});

document.getElementById('noButton').addEventListener('mouseover', function() {
    swapButtons();
});

function swapButtons() {
    let yesButton = document.getElementById('yesButton');
    let noButton = document.getElementById('noButton');
    let buttonsContainer = document.getElementById('buttonsContainer');

    // Create a temporary placeholder for swapping positions
    let temp = document.createElement('div');
    buttonsContainer.insertBefore(temp, yesButton);
    buttonsContainer.insertBefore(yesButton, noButton);
    buttonsContainer.insertBefore(noButton, temp);
    buttonsContainer.removeChild(temp);
}

document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('secondDialogBox').classList.add('hidden');
});
