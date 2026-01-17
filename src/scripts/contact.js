document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('status');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.textContent = 'Sending...';

    const formData = new FormData(form);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed');
      }

      status.textContent = 'Message sent successfully ✅';
      form.reset();
    } catch (err) {
      console.error(err);
      status.textContent = 'Something went wrong ❌';
    }
    finally {
      form.reset();
      setTimeout(()=>{
        status.textContent = '';
      },3000)
    }

  });
});
