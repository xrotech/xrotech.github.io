// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const navUL = document.querySelector('.nav ul');
  if(navToggle && navUL){
    navToggle.addEventListener('click', () => {
      const open = navUL.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Contact form submission to Google Sheets
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const name = (fd.get('name') || '').trim();
      const email = (fd.get('email') || '').trim();
      const message = (fd.get('message') || '').trim();

      if(!name || !email || !message){
        alert('Please fill in the required fields (Name, Email, Message).');
        return;
      }

      // Replace this URL with your Google Apps Script Web App URL
      const scriptURL = "https://script.google.com/macros/s/AKfycbyzJe-qg_ebM0V_SwQ64PVwXWq6I1pExoU5_2MYlOC-qkICctDBxqfw-H_GcqjEmk24/exec";

      fetch(scriptURL, { method: 'POST', body: fd })
        .then(response => {
          alert("✅ Thank you! Your message has been sent.");
          form.reset();
        })
        .catch(error => {
          alert("❌ Something went wrong. Please try again.");
          console.error('Error!', error.message);
        });
    });
  }
});
