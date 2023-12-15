const Page = require('./page')
const Selectors = require('./selectors.js')
const Passwords = require('./passwords.js')

class Flow extends Page  {

    async signIn() {
        await super.openSpotifyMainPage();
        await Selectors.loginBtn.click();
        await Selectors.login(Passwords.email, Passwords.password);
        await expect(Selectors.successfulLogin).toBeExisting();
    }

    async runFlowOne() {
        await this.signIn()
        await Selectors.signOut();
    }

    async runFlowOneNegative () {
        await super.openSpotifyMainPage();
        await Selectors.logInBtn.click();
        await Selectors.emailField.setValue(Passwords.email);
        await Selectors.passwordField.setValue('Yeho3jjaaa');
        await Selectors.logInBtn.click();
        await expect(Selectors.loginFailAlert).toBeExisting();

    }

    async runFlowOneWrongEamil () {
        await super.openSpotifyMainPage();
        await Selectors.logInBtn.click();
        await Selectors.emailField.setValue('adsjfwekvl');
        await Selectors.passwordField.setValue('5Janleksa');
        await Selectors.logInBtn.click();
        await expect(Selectors.loginFailAlert).toBeExisting();
    }
    
    async runFlowTwo() {
        await this.signIn()
        await Selectors.searchBtn.click();
        await Selectors.searchField.setValue('U2');
        await Selectors.threeDotsWithWithoutYou.click();
        await Selectors.saveToYourLikedSongsBtn.click();
        await expect(Selectors.likedSongsBtn).toBeExisting();
        await Selectors.threeDotsWithWithoutYou.click();
        await Selectors.removeFromYourLikedSongsBtn.click();
        await Selectors.homeIcon.click();
    }
    
    async runFlowThree() {
        await this.signIn();
        await Selectors.homeIcon.click();
        await Selectors.createPlaylistPlusBtn.click();
        await Selectors.createANewPlaylist.click();
        await Selectors.changePlaylistNameBtn.click();
        await Selectors.newPlaylistNameField.setValue('sarah');
        await Selectors.savePlaylistName.click();
        await Selectors.searchSongsInPlaylist.setValue('u2');
        await browser.pause(6000);  
        // don't delete this line. Need the pause for results to show up
        await Selectors.u2Result.click();
        await browser.pause(4000);
        await Selectors.stillHaventFound.click();
        await browser.pause(4000);
        await Selectors.Vertigo.click();
        await browser.pause(6000);
        await Selectors.playlist.click({button: 'right'});
        await browser.pause(4000);
        await Selectors.deletePlaylistFromList.click();
        await browser.pause(4000);
        await Selectors.deletePlaylistBtn.click();
        await browser.pause(4000);
        await Selectors.signOut();
    }

    async runFlowFour() {
        await this.signIn();
        await Selectors.homeIcon.click();
        await Selectors.profileIcon.click();
        await Selectors.profileBtn.click();
        await Selectors.profileNameField.click();
        await Selectors.editUserNameField.setValue('sarah');
        await Selectors.saveNewUsername.click();

    }
}

module.exports = new Flow();