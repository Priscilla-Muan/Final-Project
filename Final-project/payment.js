document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const cardNumber = document.getElementById('cardNumber').value.trim();
    const courseSelection = document.getElementById('courseSelection').value;
    const cardType = document.getElementById('cardType').value;
    const date = document.getElementById('date').value;

    console.log('Payment Information:', {name,email,cardType,cardNumber,date,courseSelection});

    alert('Payment submitted. Check console for details.');
});
