function myclick() {
    // Prevent reload my webpage to unfill any input area
    var form = document.getElementById('myform');
    form.addEventListener('submit', function(event){
        event.preventDefault();
    });


    // Get the value from the first input field
    var inputValue = document.getElementById('pickupname').value;
    var inputValue1 = document.getElementById('pickupmail').value;
    var inputValue2 = document.getElementById('pickupmess').value;

    // if (!inputValue1 || !inputValue2 || !inputValue) {
    //     alert('Please fill out all fields before sending.');
    //     return;
    // }

    if(!inputValue){
        alert("Please fill out all fields before sending.")
        document.getElementById('pickupname').focus();
        return;
    }
    else if(!inputValue1){
        alert("Please fill out all fields before sending.")
        document.getElementById('pickupmail').focus();
        return;
    }
    else if(!inputValue2){
        alert("Please fill out all fields before sending.")
        document.getElementById('pickupmess').focus();
        return;
    }
    
    // Store the value in a variable
    var storedValue = inputValue;
    var storedValue1 = inputValue1;
    var storedValue2 = inputValue2;

    // Create the message text
    var message = `Hi, I'm : ${storedValue}`;
    var message1 = `This is my mail id : ${storedValue1}`;
    var message2 = `. ${storedValue2}`;
    
    // URL-encode the message text
    var encodedMessage = encodeURIComponent(message);
    var encodedMessage1 = encodeURIComponent(message1);
    var encodedMessage2 = encodeURIComponent(message2);
    
    // Replace '1234567890' with the actual phone number in international format
    var phoneNumber = '8482059043';
    
    // Create the WhatsApp URL
    var whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}, ${encodedMessage1}, ${encodedMessage2}`;
    
    // Redirect to WhatsApp
    window.open(whatsappURL, '_blank');
}
