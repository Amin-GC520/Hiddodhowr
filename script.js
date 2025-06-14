document.addEventListener('DOMContentLoaded', function() {
    const reservationForm = document.getElementById('reservation-form');
    
    if (reservationForm) {
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const guests = document.getElementById('guests').value;
            const privacy = document.getElementById('privacy').checked;
            
            if (!name || !email || !phone || !date || !time || !guests || !privacy) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // In a real application, you would send this data to a server
            alert('Thank you for your reservation! We will contact you shortly to confirm.');
            reservationForm.reset();
        });
    }
});