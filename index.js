const driveVideoUrl = 'https://drive.google.com/file/d/1wS5WhxESl1BvEmAdci6BHJF54ae9PuGR/preview?autoplay=1';

function openVideo() {
  const iframe = document.getElementById('my-video');
  if (!iframe) return;
  iframe.src = driveVideoUrl;
  document.getElementById('videoOverlay').classList.add('active');
}

function closeVideo() {
  const iframe = document.getElementById('my-video');
  if (iframe) iframe.src = '';
  document.getElementById('videoOverlay').classList.remove('active');
}

function openOtherModal() {
  const otherModal = document.getElementById('otherModal');
  if (!otherModal) return;
  otherModal.classList.add('active');
  otherModal.setAttribute('aria-hidden', 'false');
}

function closeOtherModal() {
  const otherModal = document.getElementById('otherModal');
  if (!otherModal) return;
  otherModal.classList.remove('active');
  otherModal.setAttribute('aria-hidden', 'true');
}

document.addEventListener('click', (e) => {
  const otherModal = document.getElementById('otherModal');
  if (!otherModal) return;
  if (e.target === otherModal) {
    closeOtherModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeOtherModal();
  }
});
