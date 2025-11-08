document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('ping').addEventListener('click', async () => {
  const out = document.getElementById('out');
  out.textContent = 'Pinging...';
  try {
    // Example of a static-only action
    await new Promise(r => setTimeout(r, 400));
    out.textContent = 'Pong from client-side JS at ' + new Date().toLocaleString();
  } catch (e) {
    out.textContent = 'Error: ' + (e && e.message ? e.message : String(e));
  }
});
