/// JavaScript for Interactivity ////
   // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Form submission handling
    document.getElementById('contactForm').addEventListener('submit', async function (e) {
      e.preventDefault();

      // Get form data
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      // Validate form inputs
      if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
      }

      try {
        // Send data to the backend API
        const response = await fetch('https://personal-web-profile-cjvv.onrender.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, message }),
        });
      

        const data = await response.json();

        if (response.ok) {
          alert(data.message); // Success message
          document.getElementById('contactForm').reset(); // Clear form
        } else {
          alert(data.error || 'Something went wrong. Please try again.'); // Error message
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Failed to submit form. Please try again.');
      }
    });
