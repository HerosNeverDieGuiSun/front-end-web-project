window.onload = function () {
  const top_nav_account = document.getElementById('top_nav_account');
  const top_nav_account_more = document.querySelector('.top_nav_account_more');
  const top_nav_account_a = top_nav_account.getElementsByTagName('a')[0];
  const arrow = document.querySelector('.arrow');
  function show_account_more() {
    top_nav_account_a.href = '#';
    top_nav_account_more.style.display = 'block';
    top_nav_account_a.style.color = '#ffffff';
    arrow.style.borderColor = '#ffffff transparent transparent transparent';
  }

  top_nav_account.addEventListener('click', show_account_more);
  top_nav_account_a.addEventListener('click', show_account_more);
  top_nav_account_a.onmouseover = function () {
    top_nav_account_a.href = 'https://www.douban.com/mine/';
  };
};
window.addEventListener('click', (e) => {
  const top_nav_account = document.getElementById('top_nav_account');
  const top_nav_account_more = document.querySelector('.top_nav_account_more');
  const arrow = document.querySelector('.arrow');
  const top_nav_account_a = top_nav_account.getElementsByTagName('a')[0];
  if (!e.target.closest('.top_nav_account')) {
    top_nav_account_more.style.display = 'none';
    arrow.style.borderColor = '#d5d5d5 transparent transparent transparent';
    top_nav_account_a.style.color = '#d5d5d5';
  }
});
