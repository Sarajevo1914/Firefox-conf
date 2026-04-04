/*******************************************************************************
 * SECTION: STARTUP & HOMEPAGE                                                *
 *******************************************************************************/

user_pref("browser.aboutConfig.showWarning", false);                                                             // Don't show warning when opening about:config
user_pref("browser.aboutwelcome.enabled", false);                                                                // Disable welcome screen on first startup
user_pref("browser.shell.checkDefaultBrowser", false);                                                           // Don't ask if Firefox is default browser
user_pref("browser.startup.page", 0);                                                                            // Startup page: 0=blank, 1=home, 3=previous session
user_pref("browser.startup.homepage", "about:blank");                                                            // Set homepage to blank page
user_pref("browser.newtabpage.enabled", false);                                                                  // Disable new tab page with content

/* Home page settings */
user_pref("browser.newtabpage.activity-stream.showSearch", false);                                               // Disable web search on home page
user_pref("browser.newtabpage.activity-stream.feeds.weather", false);                                            // Disable weather on home page
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);                                           // Disable top sites (shortcuts)
user_pref("browser.newtabpage.activity-stream.showTopSites", false);                                             // Hide top sites section

/*******************************************************************************
 * SECTION: USER INTERFACE & EXPERIENCE                                       *
 *******************************************************************************/

/* UI Enhancements */
user_pref("browser.compactmode.show", true);                                                                     // Show compact mode option in Customize
user_pref("browser.chrome.site_icons", true);                                                                    // Show website favicons in tabs
user_pref("browser.profiles.enabled", true);                                                                     // Enable support for multiple profiles
user_pref("browser.shell.shortcutFavicons", false);                                                              // Don't use favicons in desktop shortcuts
user_pref("browser.ctrlTab.sortByRecentlyUsed", false);                                                          // Tab switching by order, not recent use

/* Sidebar settings */
user_pref("sidebar.revamp", false);                                                                              // Disable new sidebar redesign
user_pref("sidebar.verticalTabs", false);                                                                        // Disable vertical tabs in sidebar

/* Tab behavior */
user_pref("browser.tabs.warnOnClose", false);                                                                    // Don't warn when closing multiple tabs
user_pref("browser.tabs.warnOnCloseOtherTabs", false);                                                           // Don't warn when closing other tabs
user_pref("browser.tabs.warnOnOpen", true);                                                                      // Warn when opening many tabs at once
user_pref("browser.tabs.loadInBackground", true);                                                                // Keep focus on current tab when opening links

/* Fullscreen behavior */
user_pref("full-screen-api.warning.delay", 0);                                                                   // No delay for fullscreen warning
user_pref("full-screen-api.warning.timeout", 0);                                                                 // No duration for fullscreen warning

/*******************************************************************************
 * SECTION: DOWNLOADS & FILE HANDLING                                         *
 *******************************************************************************/

user_pref("browser.download.always_ask_before_handling_new_types", true);                                        // Always ask how to handle new file types
user_pref("browser.download.useDownloadDir", false);                                                             // Always ask where to save files
user_pref("browser.download.manager.addToRecentDocs", false);                                                    // Don't add downloads to system recent documents

/*******************************************************************************
 * SECTION: SCROLLING & NAVIGATION                                            *
 *******************************************************************************/

/* Smooth scrolling and autoscroll */
user_pref("apz.autoscroll.enabled", true);                                                                       // Enable autoscroll with middle click
user_pref("general.autoScroll", true);                                                                           // Enable general autoscroll
user_pref("general.smoothScroll", true);                                                                         // Enable smooth scrolling
user_pref("general.smoothScroll.pages", false);                                                                  // Disable smooth scrolling for full pages

/* Mouse wheel settings */
user_pref("mousewheel.min_line_scroll_amount", 40);                                                              // Minimum lines per scroll (faster)
user_pref("mousewheel.acceleration.start", 2);                                                                   // Start acceleration after 2 wheel movements
user_pref("mousewheel.acceleration.factor", 5);                                                                  // 5x acceleration factor for fast scrolling

/* Always show scrollbars (Linux/GTK) */
user_pref("widget.gtk.overlay-scrollbars.enabled", false);                                                       // Disable overlay scrollbars

/*******************************************************************************
 * SECTION: URL BAR & SEARCH                                                  *
 *******************************************************************************/

/* URL Bar behavior */
user_pref("browser.urlbar.trimHttps", false);                                                                    // Show full URLs with https://
user_pref("browser.urlbar.autoFill", true);                                                                      // Enable address bar autofill
user_pref("browser.urlbar.autoFill.adaptiveHistory.enabled", true);                                              // Adaptive autofill based on history
user_pref("browser.urlbar.autoFill.adaptiveHistory.minCharsThreshold", 0);                                       // Autofill from first character

/* URL Bar suggestions */
user_pref("browser.urlbar.suggest.history", true);                                                               // Suggest from browsing history
user_pref("browser.urlbar.suggest.bookmark", true);                                                              // Suggest from bookmarks
user_pref("browser.urlbar.suggest.clipboard", true);                                                             // Suggest clipboard content
user_pref("browser.urlbar.suggest.openpage", true);                                                              // Suggest open tabs
user_pref("browser.urlbar.suggest.topsites", true);                                                              // Suggest most visited sites
user_pref("browser.urlbar.suggest.weather", true);                                                               // Suggest weather information
user_pref("browser.urlbar.suggest.searches", false);                                                             // DON'T send keystrokes to search engine (privacy)

/* Search settings */
user_pref("browser.search.suggest.enabled", true);                                                               // Enable general search suggestions
user_pref("browser.search.suggest.enabled.private", true);                                                       // Enable suggestions in private mode
user_pref("browser.search.separatePrivateDefault", true);                                                        // Use same search engine in normal and private windows
user_pref("browser.search.separatePrivateDefault.ui.enabled", false);                                            // Hide the private search engine UI option
user_pref("browser.urlbar.showSearchTerms.enabled", true);                                                       // Show recent search terms

/* History */
user_pref("places.history.enabled", true);                                                                       // Enable browsing history storage

/*******************************************************************************
 * SECTION: PRIVACY & SECURITY                                                *
 *******************************************************************************/

/* HTTPS-Only mode */
user_pref("dom.security.https_only_mode", true);                                                                 // Force HTTPS on all connections
user_pref("dom.security.https_only_mode_pbm", true);                                                             // Force HTTPS in private browsing too

/* Safe browsing */
user_pref("browser.safebrowsing.malware.enabled", false);                                                        // Disable malware checking
user_pref("browser.safebrowsing.phishing.enabled", false);                                                       // Disable anti-phishing protection
user_pref("privacy.globalprivacycontrol.enabled", false);                                                        // Don't send "don't sell my data" signal

/* Payment methods and autofill */
user_pref("extensions.formautofill.addresses.enabled", false);                                                   // Disable address autofill
user_pref("extensions.formautofill.creditCards.enabled", false);                                                 // Disable credit card autofill
user_pref("extensions.formautofill.creditCards.available", false);                                               // Hide credit card options
user_pref("dom.payments.defaults.saveAddress", false);                                                           // Don't save addresses
user_pref("dom.payments.defaults.saveCreditCard", false);                                                        // Don't save payment methods

/* Container tabs */
user_pref("privacy.userContext.enabled", true);                                                                  // Enable container tabs
user_pref("privacy.userContext.ui.enabled", true);                                                               // Show container interface

/* Clear data on shutdown */
user_pref("privacy.sanitize.sanitizeOnShutdown", true);                                                          // Clear data when closing Firefox
user_pref("privacy.clearOnShutdown.cache", true);                                                                // Clear cache on shutdown
user_pref("privacy.clearOnShutdown.cookies", false);                                                             // Keep cookies (login sessions)
user_pref("privacy.clearOnShutdown.downloads", false);                                                           // Don't clear download history
user_pref("privacy.clearOnShutdown.formdata", true);                                                             // Clear form data
user_pref("privacy.clearOnShutdown.history", false);                                                             // Don't clear browsing history
user_pref("privacy.clearOnShutdown.sessions", false);                                                            // Don't clear saved sessions
user_pref("network.cookie.lifetimePolicy", 3);                                                                   // Only allow First Party EXPERIMENTAL

/*******************************************************************************
 * SECTION: PASSWORDS & FORMS                                                 *
 *******************************************************************************/

user_pref("signon.rememberSignons", false);                                                                      // Disable built-in password manager
user_pref("signon.autofillForms", false);                                                                        // Don't autofill forms with credentials
user_pref("signon.generation.enabled", false);                                                                   // Don't generate passwords automatically
user_pref("signon.management.page.breach-alerts.enabled", false);                                                // Don't show breach alerts
user_pref("signon.firefoxRelay.feature", "disabled");                                                            // Disable Firefox Relay

/*******************************************************************************
 * SECTION: MEDIA & DRM                                                       *
 *******************************************************************************/

/* Enable media features */
user_pref("media.eme.enabled", true);                                                                            // Enable DRM content playback
user_pref("browser.eme.ui.enabled", true);                                                                       // Show DRM settings in interface
user_pref("media.gmp-widevinecdm.enabled", true);                                                                // Enable Widevine CDM

/* Hardware acceleration */
user_pref("media.hardware-video-decoding.enabled", true);                                                        // Enable hardware video decoding
user_pref("media.hardware-video-decoding.force-enabled", true);                                                  // Force hardware decoding
user_pref("media.ffmpeg.vaapi.enabled", true);                                                                   // Enable VAAPI for Linux acceleration
user_pref("gfx.webrender.all", true);                                                                            // Force WebRender

/* Media controls */
user_pref("media.videocontrols.picture-in-picture.enabled", true);                                               // Enable Picture-in-Picture
user_pref("media.hardwaremediakeys.enabled", true);                                                              // Enable keyboard media keys

/* Autoplay settings (adjust as needed) */
user_pref("media.autoplay.default", 5);                                                                          // Block all autoplay
user_pref("media.autoplay.blocking_policy", 2);                                                                  // Blocking policy per-origin

/*******************************************************************************
 * SECTION: FIREFOX FEATURES & BLOAT                                          *
 *******************************************************************************/

/* Disable unwanted features */
user_pref("browser.discovery.enabled", false);                                                                   // Disable "Recommended by Firefox"
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);                            // Don't recommend extensions
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);                          // Don't recommend features
user_pref("browser.newtabpage.activity-stream.system.showWeather", false);                                       // Disable weather widget
user_pref("browser.newtabpage.activity-stream.weather.locationSearchEnabled", false);                            // Prevent weather location search UI
user_pref("extensions.pocket.enabled", false);                                                                   // Disable Pocket
user_pref("identity.fxaccounts.enabled", false);                                                                 // Disable Firefox accounts
user_pref("reader.parse-on-load.enabled", false);                                                                // Disable automatic Reader Mode parsing

/*******************************************************************************
 * TELEMETRY
 *******************************************************************************/

user_pref("datareporting.healthreport.uploadEnabled", false);                                                    // Disable health reports
user_pref("toolkit.telemetry.unified", false);                                                                   // Telemetry legacy switch
user_pref("toolkit.telemetry.enabled", false);                                                                   // Disable telemetry completely

/*******************************************************************************
 * ADVANCED
 *******************************************************************************/

user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);                                          // Enable userChrome.css
user_pref("network.http.max-persistent-connections-per-server", 10);                                             // Persistent connections per server

/*******************************************************************************
 * SECTION: SYNC PREFERENCES                                                  *
 *******************************************************************************/
                                                                                                                 // Disable syncing of certain preferences
user_pref("services.sync.prefs.sync.browser.urlbar.suggest.history", false);                                     // Don't sync history suggestions
user_pref("services.sync.prefs.sync.browser.urlbar.suggest.openpage", false);                                    // Don't sync open tab suggestions
user_pref("services.sync.prefs.sync.browser.urlbar.suggest.topsites", false);                                    // Don't sync top sites suggestions
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);   // Don't sync extension recommendations
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false); // Don't sync feature recommendations

/*******************************************************************************
 * UI CUSTOMIZATION
 *******************************************************************************/

/* Additional toolbar and UI customizations that can be automated */
user_pref("browser.toolbars.bookmarks.visibility", "never");                                                     // Hide bookmarks toolbar by default
user_pref("browser.tabs.drawInTitlebar", true);                                                                  // Draw tabs in title bar
user_pref("browser.tabs.tabMinWidth", 76);                                                                       // Minimum tab width
user_pref("browser.tabs.tabClipWidth", 140);                                                                     // Width at which to clip tab titles

/* Context menu customizations */
user_pref("browser.menu.showViewImageInfo", true);                                                               // Show "View Image Info" in context menu
user_pref("browser.urlbar.openintab", false);                                                                    // Open URL bar results in current tab

/* New tab behavior */
user_pref("browser.newtab.preload", false);                                                                      // Don't preload new tab page
user_pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts", false);                     // Disable search shortcuts

/*******************************************************************************
 * END OF USER OVERRIDES
 *******************************************************************************/
