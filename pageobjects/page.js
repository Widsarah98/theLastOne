const { browser } = require('@wdio/globals')

module.exports = class Page {
    openSpotifyMainPage () {
        return browser.url(`https://open.spotify.com`)
    }
    // get flashAlert () {
    //     return $('#flash');
    // }
}
