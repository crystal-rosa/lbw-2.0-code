// Quantity buttons
document.querySelectorAll('.select-quan-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.select-quan-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Flavor buttons
document.querySelectorAll('.select-flavor-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.select-flavor-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// SIDESSS cards
document.querySelectorAll('.sides-card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.sides-card').forEach(c => c.classList.remove('active'));
    card.classList.add('active');
  });
});
 

fetch('../components/components.html')
  .then(res => res.text())
  .then(data => {
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(data, 'text/html');

    const nav = htmlDoc.querySelector('#nav-comp');
    const rewards = htmlDoc.querySelector('#rewards-banner');
    const footer = htmlDoc.querySelector('#footer-comp');

    if (nav) {
      document.getElementById('nav-placeholder').replaceWith(nav);
    }

    if (rewards) {
      document.getElementById('rewards-placeholder').innerHTML = rewards.outerHTML;
    } else {
      console.warn('No #rewards-banner found in fetched HTML');
    }

    if(footer){
      document.getElementById('footer-placeholder').replaceWith(footer);
    }
  })
  .catch(err => console.error('Error loading components:', err));