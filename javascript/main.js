fetch('../components/components.html')
.then(res => res.text())
.then(data => {
  const parser = new DOMParser();
  const htmlDoc = parser.parseFromString(data, 'text/html');

  const nav = htmlDoc.querySelector('#nav-comp');
  // const footer = htmlDoc.querySelector('#footer-comp');
  // const rewards = htmlDocquerySelector('#rewards-comp');

  document.getElementById('nav-placeholder').replaceWith(nav);
  // document.getElementById('footer-placeholder').innterHTML = footer.innerHTML;
  // document.getElementById('rewards-placeholder').innterHTML = rewards.innterHTML;
})

.catch(err => console.error('Error loading components:', err)); 