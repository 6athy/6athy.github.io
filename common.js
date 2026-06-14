// Deterministic OTHER navigation mapping:
// - bmw.html  -> index.html
// - index.html -> ford.html
// - ford.html -> bmw.html
const otherMap = {
  'bmw.html': 'index.html',
  'index.html': 'ford.html',
  'ford.html': 'bmw.html'
};

function navigateOtherPage() {
  const current = window.location.pathname.split('/').pop().split('?')[0] || 'index.html';
  const target = otherMap[current] || 'index.html';
  window.location.href = target;
}
