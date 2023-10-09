const toggleButton = document.getElementById('toggleButton');
const hiddenContent = document.getElementById('hiddenContent');
const closeButton = document.getElementById('closeButton');

let isOpen = false;

toggleButton.addEventListener('click', () => {
    isOpen = !isOpen;

    if (isOpen) {
        hiddenContent.style.display = 'block';
        toggleButton.style.display = 'none'; // Hide the "View More" button
    } else {
        hiddenContent.style.display = 'none';
        toggleButton.style.display = 'block'; // Show the "View More" button
    }
});

closeButton.addEventListener('click', () => {
    isOpen = false;
    hiddenContent.style.display = 'none';
    toggleButton.style.display = 'block'; // Show the "View More" button when closing
});
