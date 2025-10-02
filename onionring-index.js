// onionring.js is made up of four files - onionring-widget.js, onionring-index.js (this one!), onionring-variables.js, and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium house, last updated 2020-11-24

// === ONIONRING-INDEX ===
//this file builds the list of sites in the ring for displaying on your index page
(()=>{
  const escapeHTML = (e) => e
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

  const ring = window.onionrings[window.ringID];

  var tag = document.getElementById('index');
  regex = /^https?:\/\/|\/$/g; //strips the https:// and trailing slash off the urls for aesthetic purposes

  list = "";
  for (site of ring.sites) {
    list += `<li><a href='${escapeHTML(site)}'>${escapeHTML(site.replace(regex, ""))}</a></li>`;
  }

  tag.insertAdjacentHTML('afterbegin', `
    <ul>
      ${list}
    </ul>
  `);
})();
