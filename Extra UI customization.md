# Automate Extra UI customization!

In firefox you can use the Customize Toolbar options to change UI settins easily like density, change the space in the URL bar, change the order of addons, etc.

I used to make all this settings manually but recently i found that all those values are stored in `browser.uiCustomization.state` in a form of JSON.

I use two ways to access or extract this data.

## From about:config

In `about:config`, search for `browser.uiCustomization.state`, then copy the value.

## From prefs.js

In the root profile directory find the `prefs.js` file, extract using `grep`

``` shell
grep "browser.uiCustomization.state" prefs.js
```

Be careful: the format and layout of this preference can change between Firefox versions, profiles, or addon updates.

Sometimes you will need to manually fix conflicts or clean things up after an update
