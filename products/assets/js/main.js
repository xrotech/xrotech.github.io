
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

  // Simple contact form validation (client-side)
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
      alert('Thanks! This is a demo submission. Connect a backend (e.g., Google Forms, Netlify Forms, or your API) to receive messages.');
      form.reset();
    });
  }
});
