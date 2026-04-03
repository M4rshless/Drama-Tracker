// scripts/components.js

function renderHeader(activePage) {
  const header = `
    <div class="header">
      <h1>[The Drama]</h1>
      <nav class="pages">
        <a href="homepage.html">
          <button class="btn-nav ${activePage === 'home' ? 'active' : ''}">Home</button>
        </a>
        <a href="discover.html">
          <button class="btn-nav ${activePage === 'discover' ? 'active' : ''}">About</button>
        </a>
        <a href="watchlist.html">
          <button class="btn-nav ${activePage === 'watchlist' ? 'active' : ''}">Watchlist</button>
        </a>
        <a href="activity.html">
          <button class="btn-nav ${activePage === 'activity' ? 'active' : ''}">Activity</button>
        </a>
        <a href="login-page.html">
          <button class="btn-nav ${activePage === 'login' ? 'active' : ''}">Login</button>
        </a>
      </nav>
      <div class="pfp"></div>
    </div>
    <hr />
  `
  document.getElementById('header').innerHTML = header;
}

function renderFooter() {
  const footer = `
    <div class="footer">
      <hr />
      <p>&copy; Charles Plana</p>
    </div>
  `
  document.getElementById('footer').innerHTML = footer;
}