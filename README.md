# Firefox config

This is my personal conf for firefox

## user.js
> this is very WIP made by a idiot, read files before using

I use `user.js` from [Betterfox](https://github.com/yokoffing/BetterFox) with some overrides.

## Addons

I don't use a lot of addons only the necessary

- [ublock origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/)
- [bitwarden](https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager/)
- [dark reader](https://addons.mozilla.org/en-US/firefox/addon/darkreader/)
- [YouTube No Translation](https://addons.mozilla.org/en-US/firefox/addon/youtube-no-translation/)
- [Violentmonkey](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/)
 - [4chan-xt](https://github.com/TuxedoTako/4chan-xt)
 - [OneeChan](https://github.com/KevinParnell/OneeChan)
 - [bypass-all-shortlinks-debloated](https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/)

### Themes

- [Matte Black by Elijah Lopez - firefox](https://addons.mozilla.org/en-US/firefox/addon/matte-black-v1/)
- [Firefox-UI-Fix](https://github.com/black7375/Firefox-UI-Fix)

## Firefox UI Fix little install guide

To install the UI fix, you first find your Firefox profile

1. In Firefox go to `about:support`
2. In the `Profile Directory` section display the path to your profile
3. Go to directory

Once inside your profile directory, clone the repository using the branch you like (Lepton, Photon or Proton)

```sh
# Original Lepton
git clone https://github.com/black7375/Firefox-UI-Fix chrome

# Lepton's Photon style
git clone https://github.com/black7375/Firefox-UI-Fix chrome -b photon-style

# Lepton's Proton style
git clone https://github.com/black7375/Firefox-UI-Fix chrome -b proton-style
```

This will create a `chrome` directory that containing all necessary files

The main configuration file for this UI fix is `chrome/user.js`

1. Put your `user.js` in your profile path
2. Copy the contents of `chrome/user.js` into your `user.js`
3. Add your custom overrides at the end of the file

I use Photon style, this are my overrides:

```js
// https://github.com/black7375/Firefox-UI-Fix/wiki/Options#one-liner
user_pref("userChrome.tabbar.one_liner", false);
user_pref("userChrome.tabbar.one_liner.combine_navbar", true);
user_pref("userChrome.tabbar.one_liner.tabbar_first", true);
user_pref("userChrome.tabbar.one_liner.responsive", true);

// https://github.com/black7375/Firefox-UI-Fix/wiki/Options#icons
user_pref("userChrome.icon.library", true);
user_pref("userChrome.icon.panel", false);
user_pref("userChrome.icon.context_menu", false);
user_pref("userChrome.icon.global_menu", false);
user_pref("userChrome.icon.global_menubar", false);

// https://github.com/black7375/Firefox-UI-Fix/wiki/Options#decoration
user_pref("userChrome.decoration.animate", false);
user_pref("userChrome.decoration.disable_panel_animate", true);
user_pref("userChrome.decoration.disable_sidebar_animate", true);

// https://github.com/black7375/Firefox-UI-Fix/wiki/Options#padding
user_pref("userChrome.padding.menu_compact", true);
user_pref("userChrome.padding.bookmark_menu.compact", true);
user_pref("userChrome.padding.panel_header", true);
user_pref("userChrome.padding.urlView_expanding", true);

// https://github.com/black7375/Firefox-UI-Fix/wiki/Options#media-player
user_pref("userContent.player.ui.twoline", true);

// Fixing Megabar
// https://github.com/black7375/Firefox-UI-Fix/issues/1038
// replace in chrome/css/leptonChrome.css

@media (-moz-bool-pref: "userChrome.padding.urlView_expanding"), (-moz-bool-pref: "userChrome.urlView.as_commandbar") {
#urlbar[breakout][breakout-extend] {
    top: calc((var(--urlbar-toolbar-height, var(--urlbar-container-height)) - var(--urlbar-height)) / 2) !important;
    left: 0 !important;
    width: 100% !important;
  }

// with this code

@media (-moz-bool-pref: "userChrome.padding.urlView_expanding"), (-moz-bool-pref: "userChrome.urlView.as_commandbar") {
   #urlbar[breakout][breakout-extend] {
        margin: 4px;
    }
```

# TODO

- [ ] del cookies and use white list
- [ ] `policies.json` ? auto install addons

## Cuztomize toolbar
- [ ] auto set `browser.uiCustomization.state`
 - [ ] del spacers left and right of urlbar
 - [ ] del import bookmarks label
 - [ ] del list all tabs
 - [ ] del firefox view
 - [ ] del new tab
