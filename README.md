# Firefox config
This is my personal conf for firefox

## user.js
> this is very WIP made by a idiot, read files before using

I use `user.js` from [Betterfox](https://github.com/yokoffing/BetterFox) with some [overrides](user-overrides.js).

## Addons
I don't use a lot of addons only the necessary

- [ublock origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/)
- [bitwarden](https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager/)
- [dark reader](https://addons.mozilla.org/en-US/firefox/addon/darkreader/)
- [Violentmonkey](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/)
  - [4chan-xt](https://github.com/TuxedoTako/4chan-xt)
  - [OneeChan](https://github.com/KevinParnell/OneeChan)
  - [bypass-all-shortlinks-debloated](https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/)

### Themes
- [Firefox-UI-Fix](https://github.com/black7375/Firefox-UI-Fix) (Photon-style branch) with [custom overrides](ui-fix-overrides.js)

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
1. Copy the contents of `chrome/user.js` into your `user.js`
1. Add your custom overrides at the end of the file

If you have some error in the URL or MEGABAR maybe this [help](megabar-fix.js)

# Install my config
1. Create your Firefox profile
1. Go to the root dir of profile (can be acces from `about:support` -> `Profile Directory`)
1. Copy the [user.js](user.js)
1. Add the [user-overrides.js](user-overrides.js) to the end of `user.js`
1. add to the end the content of the UI Fix located in `chrome/user.js`
1. add to the end [ui-fix-overrides.js](ui-fix-overrides.js)

In theory you should have the exac same config as me.

# TODO
- [ ] del cookies and use white list
- [ ] `policies.json` ? auto install addons
- [ ] maybe create a script for auto install and update

## Cuztomize toolbar
- [ ] auto set `browser.uiCustomization.state`
  - [ ] [Extra UI customization.md](Extra UI customization.md)
  - [ ] del spacers left and right of urlbar
  - [ ] del import bookmarks label
  - [ ] del list all tabs
  - [ ] del firefox view
  - [ ] del new tab
