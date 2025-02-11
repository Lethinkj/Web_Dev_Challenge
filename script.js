document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const errorMessage = document.getElementById('error-message');

    if (validateEmail(email)) {
        errorMessage.classList.add('hidden');
        // Here you can add code to handle the email submission
        alert('Thank you for subscribing!');
    } else {
        errorMessage.classList.remove('hidden');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
