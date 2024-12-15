window.onload = function() {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');  // Make sure you're targeting the right element

    if (hamburger && menu) {
        hamburger.addEventListener('click', () => {
            console.log('Hamburger clicked!');
            menu.classList.toggle('active');
            console.log(menu.classList);  // Check the class list after toggling
        });
    } else {
        console.error('Hamburger or menu element not found.');
    }
};
