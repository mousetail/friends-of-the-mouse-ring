// onionring.js is made up of four files - onionring-widget.js (this one!), onionring-index.js, onionring-variables.js and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium house, last updated 2020-11-24

// === ONIONRING-WIDGET ===
//this file contains the code which builds the widget shown on each page in the ring. ctrl+f 'EDIT THIS' if you're looking to change the actual html of the widget

var tag = document.getElementById(window.ringID); //find the widget on the page

(()=>{
  const escapeHTML = (e) => e.replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;');;

  const ring = window.onionrings[window.ringID];

  const thisSite = window.location.href;
  let thisIndex = null;

  // go through the site list to see if this site is on it and find its position
  for (i = 0; i < ring.sites.length; i++) {
    if (thisSite.startsWith(ring.sites[i])) { //we use startswith so this will match any subdirectory, users can put the widget on multiple pages
      thisIndex = i;
      break; //when we've found the site, we don't need to search any more, so stop the loop
    }
  }

  function randomSite() {
    otherSites = ring.sites.slice(); //create a copy of the sites list
    otherSites.splice(thisIndex, 1); //remove the current site so we don't just land on it again
    randomIndex = Math.floor(Math.random() * otherSites.length);
    return otherSites[randomIndex];
  }

  //if we didn't find the site in the list, the widget displays a warning instead
  if (thisIndex == null) {
    tag.insertAdjacentHTML('afterbegin', `
      <table>
        <tr>
          <td>This site isn't part of the ${ringName} webring yet. You should talk to the manager to have your site added to the list!</td>
        </tr>
        <tr>
          <td>Check if the URL is correct and the exact same as in onionring-variables.js</td>
        </tr>
      </table>
    `);
  }
  else {
    //find the 'next' and 'previous' sites in the ring. this code looks complex
    //because it's using a shorthand version of an if-else statement to make sure
    //the first and last sites in the ring join together correctly
    previousIndex = (thisIndex-1 < 0) ? sites.length-1 : thisIndex-1;
    nextIndex = (thisIndex+1 >= ring.sites.length) ? 0 : thisIndex+1;

    const indexText = ring.useIndex ? `<a href='${escapeHTML(ring.indexPage)}'>index</a> | ` : '';
    const randomText = ring.useRandom ? `<a href='${escapeHTML(randomSite())}'>random</a> | ` : '';

    //this is the code that displays the widget - EDIT THIS if you want to change the structure
    tag.insertAdjacentHTML('afterbegin', `
      <table>
        <tr>
          <td class='webring-prev'><a href='${escapeHTML(ring.sites[previousIndex])}'>← previous</a></td>
          <td class='webring-info'>This site is part of the ${escapeHTML(ring.ringName)} webring</br>
          <span class='webring-links'>
            ${randomText}
            ${indexText}
            <a href='https://garlic.garden/onionring/'>what is this?</a></span></td>
          <td class='webring-next'><a href='${escapeHTML(ring.sites[nextIndex])}'>next →</a></td>
        </tr>
      </table>
    `);

  }
})();