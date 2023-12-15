const { $ } = require('@wdio/globals')
const Passwords = require('./passwords.js')

class Selectors {

    get loginBtn () {
        return $('button[data-testid="login-button"]');
    }

    get emailField () {
        return $('input[data-testid="login-username"]')
    }

    get passwordField () {
        return $('input[data-testid="login-password"]')
    }

    get logInBtn () {
        return $('button[data-testid="login-button"]')
    }

    get successfulLogin () {
        return $('button[data-testid="user-widget-link"]') 
    }

    get loginFailAlert () {
        return $('svg[aria-label="Error:"]')
    }

    get searchBtn () {
        return $('a[aria-label="Search"]')
    }

    get searchField () {
        return $('input[data-testid="search-input"]')
    }

    get threeDotsWithWithoutYou () {
        return $('button[aria-label="More options for With Or Without You by U2"]')
    }

    get saveToYourLikedSongsBtn () {
        return $('//span[@dir="auto"][contains(text(), "Save to your")]')
    }

    get likedSongsBtn () {
        return $('div[aria-describedby="onClickHintspotify:collection:tracks"]')
    }

    get userIconBtn () {
        return $('button[data-testid="user-widget-link"]') 
    }

    get logOutBtn () {
        return $('button[data-testid="user-widget-dropdown-logout"]') 
    }

    get removeFromYourLikedSongsBtn () {
        return $('//span[@dir="auto"][contains(text(), "Remove from your Liked Songs")]')
    }

    get homeIcon () {
        return $('a[aria-label="Home"]')
    }

    get createPlaylistPlusBtn () {
        return $('button[aria-label="Create playlist or folder"]')
    }

    get createANewPlaylist () {
        return $('//span[@class="Type__TypeElement-sc-goli3j-0 ieTwfQ ellipsis-one-line PDPsYDh4ntfQE3B4duUI"][@data-encore-id="type"][contains(text(), "Create a new playlist")]')
    }

    get changePlaylistNameBtn () {
        return $('span[data-testid="entityTitle"]')
    }

    get newPlaylistNameField () {
        return $('input[data-testid="playlist-edit-details-name-input"]')
    }

    get savePlaylistName () {
        return $('button[data-testid="playlist-edit-details-save-button"]')
    }

    get searchSongsInPlaylist () {
        return $('input[placeholder="Search for songs or episodes"]')
    }

    get u2Result () {
        return $('//div[@aria-label="See more U2"][@data-testid="playlist-inline-curation-artist"]')
    }
    
    get stillHaventFound () {
        return $('//div[@aria-rowindex="1"]//button[contains(text(), "Add")]')
    }

    get Vertigo () {
        return $('//div[@aria-rowindex="9"]//button[contains(text(), "Add")]')
    }
    
    get threeDotsInPlaylist () {
        return $('//button[@aria-haspopup="menu"][@data-testid="more-button"][@aria-label="More options for sarah"]')
    }

    get playlist () {
        return $('div[data-testid="bottom-sentinel"]')
    }

    get deletePlaylistFromList () {
        return $('//span[@data-encore-id="type"][contains(text(), "Delete")]')
     }


    get deletePlaylistBtn () {
        return $('//span[@class="ButtonInner-sc-14ud5tc-0 glYGDr encore-bright-accent-set MIsUJlamzLYuAlvPbmZz"][contains(text(), "Delete")]')
    }

    get profileIcon () {
        return $('svg[data-testid="user-icon"]')
    }

    get profileBtn () {
        return $('//a[@role="menuitem"]/span[contains(text(), "Profile")]')
    }

    get profileNameField () {
        return $('span[data-testid="entityTitle"]')
    }

    get editUserNameField () {
        return $('input[data-testid="user-edit-name-input"]')
    }

    get saveNewUsername () {
        return $('//button[@data-encore-id="buttonPrimary"]/span[contains(text(), "Save")]')
    }


    //on the above I will use it in my test to make sure this selector exists. 

    async login (username, password) {
        await this.emailField.setValue(Passwords.email);
        await this.passwordField.setValue(Passwords.password);
        await this.logInBtn.click();
    }

    async signOut () {
        await this.userIconBtn.click()
        await this.logOutBtn.click()
    }

    async return () {
        await this.searchSongsInPlaylist('u2').dispatchEvent(event);
    }
 
}

module.exports = new Selectors();
