// Personal user.js overrides

// General UI & UX Tweaks
user_pref("browser.aboutConfig.showWarning", false); // Disable about:config warning
user_pref("browser.aboutwelcome.enabled", false); // Disable welcome screen
user_pref("browser.compactmode.show", true); // Enable compact mode option
user_pref("browser.tabs.firefox-view", false); // Disable Firefox View
user_pref("browser.ctrlTab.sortByRecentlyUsed", false); // Disable MRU tab switching
user_pref("browser.tabs.tabmanager.enabled", false); // Disable Tab Manager
user_pref("browser.chrome.site_icons", true); // Enable site icons
user_pref("browser.profiles.enabled", true); // Enable multiple profiles
user_pref("browser.shell.shortcutFavicons", false); // Disable favicons on shortcuts

// Startup & Homepage
user_pref("browser.shell.checkDefaultBrowser", false); // Disable default browser check
user_pref("browser.startup.page", 0); // Start with a blank page
user_pref("browser.startup.homepage", "about:blank"); // Set homepage to blank
user_pref("browser.newtabpage.enabled", false); // Disable new tab page

// Downloads
user_pref("browser.download.always_ask_before_handling_new_types", true); // Always ask where to download files
user_pref("browser.download.useDownloadDir", false); // Always ask where to save files

// Scrolling & Navigation
user_pref("apz.autoscroll.enabled", true); // Enable autoscrolling
user_pref("general.autoScroll", true); // Enable autoscrolling
user_pref("general.smoothScroll", true); // Enable smooth scrolling
user_pref("general.smoothScroll.pages", false); // Disable smooth scrolling for pages
user_pref("mousewheel.min_line_scroll_amount", 40); // Increase scroll speed
user_pref("widget.gtk.overlay-scrollbars.enabled", false); // Always show scrollbars

// URL Bar & Search
user_pref("browser.urlbar.autoFill", true); // Enable address bar auto-fill
user_pref("browser.urlbar.autoFill.adaptiveHistory.enabled", true); // Enable adaptive history autofill
user_pref("browser.urlbar.autoFill.adaptiveHistory.minCharsThreshold", 0); // Autofill with zero characters
user_pref("browser.urlbar.suggest.history", true); // Suggest browsing history
user_pref("browser.urlbar.suggest.bookmark", true); // Suggest bookmarks
user_pref("browser.urlbar.suggest.clipboard", true); // Suggest clipboard contents
user_pref("browser.urlbar.suggest.openpage", true); // Suggest open tabs
user_pref("browser.urlbar.suggest.topsites", true); // Suggest top sites
user_pref("browser.urlbar.suggest.weather", true); // Suggest weather info
user_pref("browser.urlbar.suggest.searches", true); // Show search suggestions ahead of history
user_pref("browser.search.suggest.enabled", true); // Enable search suggestions
user_pref("browser.search.suggest.enabled.private", true); // Enable search suggestions in private mode
user_pref("browser.urlbar.showSearchTerms.enabled", true); // Show recent searches
user_pref("places.history.enabled", true); // Enable browsing history
user_pref("browser.urlbar.trimHttps", false); // Show "https://" in URLs
user_pref("browser.search.separatePrivateDefault", false); // Use the same search engine for normal and private windows
user_pref("browser.urlbar.suggest.searches", false); // Disable search engine suggestions in the address bar

// Privacy & Security
user_pref("dom.security.https_only_mode", true); // Enable HTTPS-Only Mode
user_pref("privacy.globalprivacycontrol.enabled", false); // Disable "Tell websites not to sell or share my data"
user_pref("browser.safebrowsing.malware.enabled", false); // Disable blocking dangerous and deceptive content
user_pref("browser.safebrowsing.phishing.enabled", false); // Disable blocking dangerous and deceptive content
// user_pref("privacy.sanitize.sanitizeOnShutdown", true); // Clear cookies on shutdown (set exceptions manually)

// Password & Sync Preferences
user_pref("signon.rememberSignons", false); // Disable password saving
user_pref("signon.autofillForms", false); // Disable autofill for forms
user_pref("signon.generation.enabled", false); // Disable password generation
user_pref("signon.management.page.breach-alerts.enabled", false); // Disable breach alerts
user_pref("signon.firefoxRelay.feature", "disabled"); // Disable Firefox Relay
user_pref("services.sync.prefs.sync.browser.urlbar.suggest.history", false);
user_pref("services.sync.prefs.sync.browser.urlbar.suggest.openpage", false);
user_pref("services.sync.prefs.sync.browser.urlbar.suggest.topsites", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

// Media & DRM
user_pref("media.eme.enabled", true); // Enable DRM content playback
user_pref("browser.eme.ui.enabled", true); // Show DRM content settings in UI
user_pref("media.gmp-widevinecdm.enabled", true); // Enable Widevine CDM
user_pref("media.hardware-video-decoding.enabled", true); // Enable hardware video decoding
user_pref("media.hardware-video-decoding.force-enabled", true); // Force enable hardware video decoding
user_pref("media.videocontrols.picture-in-picture.enabled", true); // Enable Picture-in-Picture
user_pref("media.hardwaremediakeys.enabled", true); // Enable media keys

// Disable Firefox Features & Ads
user_pref("browser.discovery.enabled", false); // Disable "Recommended by Firefox"
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false); // Disable extension recommendations
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false); // Disable feature recommendations
user_pref("extensions.pocket.enabled", false); // Disable Pocket
user_pref("identity.fxaccounts.enabled", false); // Disable Firefox accounts
user_pref("reader.parse-on-load.enabled", false); // Disable automatic Reader Mode parsing

// Notifications & Warnings
user_pref("full-screen-api.warning.delay", 0); // Remove full-screen warning delay
user_pref("full-screen-api.warning.timeout", 0); // Remove full-screen warning timeout
user_pref("browser.tabs.warnOnClose", true); // Warn when closing multiple tabs
user_pref("browser.tabs.warnOnCloseOtherTabs", true); // Warn when closing other tabs
user_pref("browser.tabs.warnOnOpen", true); // Warn when opening multiple tabs

// Enable Container Tabs
user_pref("privacy.userContext.enabled", true);

// Disable sending daily usage ping to Mozilla
user_pref("datareporting.healthreport.uploadEnabled", false);