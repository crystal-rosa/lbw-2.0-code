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


``
  const buttons = document.querySelectorAll(".category-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

