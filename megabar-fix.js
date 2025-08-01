// Megabar Fix
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
