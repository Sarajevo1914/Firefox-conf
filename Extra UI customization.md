# Automate Extra UI customization!
In firefox you can use the Customize Toolbar options to change UI settins easily like density, change the space in the URL bar, change the order of addons, etc.

I used to make all this settings manually but recently i found that all those values are stored in `browser.uiCustomization.state` in a form of JSON.

I use two ways to access or extract this data.

## From about:config
in the about:config page search for `browser.uiCustomization.state`, then you can copy the value.

## From prefs.js
Go to the profile and find the `prefs.js` file, extract using `grep`

``` shell
grep "browser.uiCustomization.state" prefs.js
```

This will output to the terminal

---

Be careful because the layout and format of this variable can change betweens firefox version, addons ID, etc.

Maybe need manual intervection sometimes to fix the conflics.
