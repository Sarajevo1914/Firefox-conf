# Firefox configuration
This is my personal Firefox configuration.

**READ EVERY FILE BEFORE USE**

**BACKUP YOUR PROFILE FIRST:** This process maybe destrucctive and maybe you gonna loose important data.

# user.js
I use `user.js` from [Betterfox](https://github.com/yokoffing/BetterFox) with some [personal overrides](user-overrides.js).

# Addons
I only use a few essential addons.

- [Ublock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/)
- [Bitwarden](https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager/)
- [Dark Reader](https://addons.mozilla.org/en-US/firefox/addon/darkreader/)
- [Violentmonkey](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/)
  - [bypass-all-shortlinks-debloated](https://codeberg.org/gongchandang49/bypass-all-shortlinks-debloated)

# Themes
- [Firefox-UI-Fix](https://github.com/black7375/Firefox-UI-Fix) (Photon-style branch) with [custom overrides](ui-fix-overrides.js)

# Toolbar UI Customization
Toolbar customization is stored in the `browser.uiCustomization.state` preference inside `prefs.js` as a JSON structure. However, Firefox may change layouts, formats, or UI structures between updates, which breaks automation.

Automating this is not yet reliable. Manual customization via `More tools -> Customize toolbar...` is currently the most stable approach.

# [OPTIONAL] Firefox UI Fix Installation
To install the UI Fix, locate your Firefox profile directory.

1. Go to the profile root directory (access from `about:support` -> `Profile Directory`)

Once inside your profile directory, clone the repository using the branch you prefer (Lepton, Photon or Proton). In this case, **Photon-style** is used, and the `user.js` is copied to the profile root:

```sh
# Lepton's Photon style
git clone https://github.com/black7375/Firefox-UI-Fix chrome -b photon-style
cp chrome/user.js .
```

**Note:** MEGABAR may not work correctly. If you use it, this [megabar-fix.js](megabar-fix.js) file may help.

# Installation Instructions
1. Get an updated and clean `user.js` from Betterfox using the `get-and-clean-betterfox.sh` script
1. Create your Firefox profile and navigate to the root of your Firefox profile
1. [OPTIONAL] Install UI Fix photon-style
1. [OPTIONAL] Append the [ui-fix-overrides.js](ui-fix-overrides.js) file to `user.js` (only if you installed UI Fix in previous step)
1. Append the content of `betterfox.js` to `user.js`
1. Append the content of the [user-overrides.js](user-overrides.js) file to `user.js`

# Policies.json Configuration
The `policies.json` file is a system-wide Firefox configuration file located at `/usr/lib/firefox/distribution/policies.json`. It applies to all Firefox profiles for all users on the host.

Some settings are available in both `user.js` and `policies.json`, but policies.json takes priority when both exist. Other settings are only configurable through `policies.json`.

There are options in `policies.json` that offer better capabilities or are the only way to properly configure certain features.

For more information, see the [Firefox policies documentation](https://firefox-admin-docs.mozilla.org/guides/policies-configuration/). You can also use the [Enterprise Policy Generator addon](https://addons.mozilla.org/en-US/firefox/addon/enterprise-policy-generator/) to explore available options.

# TODO
- [ ] Redo and simplify the installation instructions
- [-] `policies.json`
  - auto install addons
  - ~~delete and clean all cookies except those on the whitelist~~ ([policies-template.json](policies-template.json) is a basic template for whitelist domains)
  - ~~set search engine~~
  - set other privacy options
- [ ] Script to automate all manual labor, update and install to the selected Firefox profile (consolidate all steps into a single setup script)
  - Install UI Fix
  - Install UI Fix Overrides
  - Install user.js
  - Install overrides for user.js
  - Install policies.json
- [ ] Automate toolbar UI customization (`browser.uiCustomization.state`)
  - Handle Firefox layout changes gracefully
  - Script to safely update JSON structure
