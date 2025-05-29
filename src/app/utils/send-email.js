

export function sendEmail(data) {
  const apiEndpoint = '/api/email';

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      //TODO: on success, redirect to a thank you page or show a success message
      if (response.success) {
        // Optionally, you can reset the form or redirect
        // document.getElementById('contact-form').reset();
        alert('Your message has been sent successfully!');
      }
      else {
        // Handle the error case
        alert('There was an error sending your message. Please try again later.');
      }
    })
    .catch((err) => {
      alert(err);
    });
}