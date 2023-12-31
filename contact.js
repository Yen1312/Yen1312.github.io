document.querySelector('.contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name-input').value;
  const email = document.getElementById('email-input').value;
  const message = document.getElementById('message-input').value;
  const errorMessages = document.getElementsByClassName('error-message');

  // Reset error messages
  for (let i = 0; i < errorMessages.length; i++) {
    errorMessages[i].innerHTML = '';
  }

  // Validate required fields
  let isValid = true;
  if (name.trim() === '') {
    document.getElementById('name-error').innerHTML = 'Name is required';
    isValid = false;
  }
  if (email.trim() === '') {
    document.getElementById('email-error').innerHTML = 'Email is required';
    isValid = false;
  }
  if (message.trim() === '') {
    document.getElementById('message-error').innerHTML = 'Message is required';
    isValid = false;
  }

  if (isValid) {
    // Display the popup
    var popupOverlay = document.getElementById('popup-overlay');
    var popup = document.getElementById('popup');
    var popupCloseButton = document.getElementById('popup-close');

    popupOverlay.style.display = 'block';
    popup.style.display = 'block';

    // Close the popup when the close button is clicked
    popupCloseButton.addEventListener('click', function() {
      popupOverlay.style.display = 'none';
      popup.style.display = 'none';
    });
  }
});
