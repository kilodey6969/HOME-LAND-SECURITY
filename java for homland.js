document.getElementById('trackingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const trackingNumber = document.getElementById('trackingNumber').value;

    // Simulate tracking result (replace with actual API call)
    const trackingResult = `Tracking Number: ${trackingNumber} - Status: In Transit`;
    document.getElementById('trackingResult').innerText = trackingResult;
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Simulate sending email (replace with actual email sending logic)
    alert(`Email sent!\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);
});