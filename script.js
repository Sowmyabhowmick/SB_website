document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('form-msg').style.display = 'block';
    document.getElementById('form-msg').innerText = 'Thank you for contacting me!';
    document.getElementById('contact-form').reset();
});
