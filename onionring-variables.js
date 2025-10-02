// onionring.js is made up of four files - onionring-widget.js, onionring-index.js, onionring-variables.js (this one!), and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium house, last updated 2020-11-24

// === ONIONRING-VARIABLES ===
//this file contains the stuff you edit to set up your specific webring
window.onionrings ??= {};

/* the unique ID of the widget. two things to note:
 1) make sure there are no spaces in it - use dashes or underscores if you must
 2) remember to change 'webringid' in the widget code you give out and all instances of '#webringid' in the css file to match this value!*/
window.ringID = 'friends-of-the-mouse-ring';
//the full URLs of all the sites in the ring
window.onionrings[ringID] = {
    sites: [
        'https://mousetail.github.io/how-normal-am-i/',
        'https://mousetail.gitlab.io/weapon-generator/',
        'https://mousetail.github.io/improv-or-dream',
    ],

    //the name of the ring
    ringName: 'Friends of the Mouse',

    //should the widget include a link to an index page?
    useIndex: true,
    //the full URL of the index page. if you're not using one, you don't have to specify anything here
    indexPage: 'https://webring.mousetail.nl',

    //should the widget include a random button?
    useRandom: true
};
