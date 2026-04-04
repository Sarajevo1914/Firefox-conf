# Firefox configuration
This is my personal Firefox configuration.

**READ EVERY FILE BEFORE USE**

## user.js
I use `user.js` from [Betterfox](https://github.com/yokoffing/BetterFox) with some [personal overrides](user-overrides.js).

## Addons
I only use a few essential addons.

- [ublock origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/)
- [bitwarden](https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager/)
- [dark reader](https://addons.mozilla.org/en-US/firefox/addon/darkreader/)
- [Violentmonkey](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/)

### Themes
- [Firefox-UI-Fix](https://github.com/black7375/Firefox-UI-Fix) (Photon-style branch) with [custom overrides](ui-fix-overrides.js)

### Toolbar UI Customization
You can change some toolbar settings using the special interactive page `Customize Firefox`, which can be accessed from the menu `More tools -> Customize toolbar...`.

Those values cannot be fully automated because Mozilla may change layouts, formats, or UI structures between updates.

Most toolbar UI customization is stored in the `browser.uiCustomization.state` preference inside `prefs.js`. The value is a JSON structure.

Sometimes you will need to manually fix conflicts or clean things up after an update.

## Firefox UI Fix little install guide [OPTIONAL]
To install the UI Fix, locate your Firefox profile directory.

1. Go to the profile root directory (access from `about:support` -> `Profile Directory`)

Once inside your profile directory, clone the repository using the branch you prefer (Lepton, Photon or Proton). In my case **Photon-style** and copy the `user.js` to the profile root

```sh
# Lepton's Photon style
git clone https://github.com/black7375/Firefox-UI-Fix chrome -b photon-style
cp chrome/user.js .
```

MEGABAR may not work. If you use it, this file may [help](megabar-fix.js)

# Install my config [TODO]
1. Get a updated and clean `user.js` from betterfox using the `get-and-clean-betterfox.sh` script
1. Create your Firefox profile and go the root of your Firefox profile
1. Install UI Fix photon-style [OPTIONAL]
1. Add to the end [ui-fix-overrides.js](ui-fix-overrides.js) [OPTIONAL]
1. Add to the end the content of `betterfox.js` to `user.js`
1. Add to the end the content of [user-overrides.js](user-overrides.js) to `user.js`

# TODO
- [ ] Redo and simplify the installation instructions
- [ ] `policies.json`
  - auto install addons
  - delete and clean all cookies minus in white list
  - set search engine
- [ ] Script to automate all manual labor, update and install to the selected Firefox profile
  - Install UI Fix
  - Install UI Fix Overrides
  - Install user.js
  - Install overrides for user.js
  - Install policies.js
