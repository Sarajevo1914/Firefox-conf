// this file is fastfox and a few from narsil user.js // why this and not the other file?? well my ff-nightly and ff performance with both combided is shit
// this file is not smooth as fastfox only but i need some other minor config for better security and not be naked on the web

// fastfox.js of course i know what all this shit do!

user_pref("content.notify.interval", 100000); // (.10s); default=120000 (.12s)
user_pref("gfx.canvas.accelerated.cache-items", 4096); // default=2048; alt=8192
user_pref("gfx.canvas.accelerated.cache-size", 512); // default=256; alt=1024
user_pref("gfx.content.skia-font-cache-size", 20); // default=5; Chrome=20
user_pref("browser.cache.jsbc_compression_level", 3);
user_pref("media.memory_cache_max_size", 65536); // default=8192; AF=65536; alt=131072
user_pref("media.cache_readahead_limit", 7200); // 120 min; default=60; stop reading ahead when our buffered data is this many seconds ahead of the current playback
user_pref("media.cache_resume_threshold", 3600); // 60 min; default=30; when a network connection is suspended, don't resume it until the amount of buffered data falls below this threshold
user_pref("image.mem.decode_bytes_at_a_time", 32768); // default=16384; alt=65536; chunk size for calls to the image decoders
user_pref("network.http.max-connections", 1800); // default=900
user_pref("network.http.max-persistent-connections-per-server", 10); // default=6; download connections; anything above 10 is excessive
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5); // default=3
user_pref("network.http.pacing.requests.enabled", false);
user_pref("network.dnsCacheExpiration", 3600); // keep entries for 1 hour
user_pref("network.ssl_tokens_cache_capacity", 10240); // default=2048; more TLS token caching (fast reconnects)
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true); // [FF127+ false]
user_pref("network.prefetch-next", false);
user_pref("network.predictor.enabled", false);
user_pref("layout.css.grid-template-masonry-value.enabled", true);
user_pref("dom.enable_web_task_scheduling", true);
user_pref("dom.security.sanitizer.enabled", true);

// this is from https://wiki.archlinux.org/title/Firefox/Tweaks#Change_Performance_settings
// user
user_pref("dom.ipc.processCount", ); // set value to 1-8 check with `ps -e | grep 'Web Content'`
user_pref("browser.preferences.defaultPerformanceSettings.enabled", false); // article say false so i put false, default seem to be true


// PERSONAL PREFS

user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.startup.page", 0);
user_pref("browser.startup.homepage", "about:blank");
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.compactmode.show", true);
user_pref("browser.aboutwelcome.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.ctrlTab.sortByRecentlyUsed", false);
user_pref("browser.download.always_ask_before_handling_new_types", true);
user_pref("browser.messaging-system.whatsNewPanel.enabled", false);
user_pref("apz.autoscroll.enabled", true);
user_pref("general.autoScroll", true);
user_pref("general.smoothScroll", true);
user_pref("full-screen-api.warning.delay", 0);
user_pref("full-screen-api.warning.timeout", 0);
user_pref("mousewheel.min_line_scroll_amount", 40);
user_pref("general.smoothScroll.pages", false);
user_pref("general.autoScroll", true);
user_pref("widget.gtk.overlay-scrollbars.enabled", false);
user_pref("browser.tabs.tabmanager.enabled", false);


user_pref("extensions.pocket.enabled", false);
user_pref("extensions.screenshots.disabled", false);
user_pref("identity.fxaccounts.enabled", false);
// user_pref("reader.parse-on-load.enabled", false); // Reader View ????
user_pref("browser.tabs.firefox-view", false);

user_pref("browser.urlbar.suggest.history", true);
user_pref("browser.urlbar.suggest.bookmark", true);
user_pref("browser.urlbar.suggest.openpage", true);
user_pref("browser.urlbar.suggest.topsites", true);
user_pref("browser.urlbar.suggest.weather", true);
user_pref("browser.urlbar.autoFill", true);
user_pref("places.history.enabled", true);

user_pref("media.eme.enabled", true);
user_pref("browser.eme.ui.enabled", true);
user_pref("media.gmp-widevinecdm.enabled", true);
user_pref("media.hardware-video-decoding.enabled", true);
user_pref("media.hardware-video-decoding.force-enabled", true);

// TEL QUITER

user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.shopping.experience2023.enabled", false);
user_pref("browser.shopping.experience2023.opted", 2);
user_pref("browser.shopping.experience2023.active", false);

user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("browser.search.serpEventTelemetry.enabled",false);
user_pref("corroborator.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("media.webvtt.debug.logging", false);
user_pref("media.webvtt.testing.events", false);
user_pref("browser.contentblocking.database.enabled", false);
user_pref("browser.contentblocking.cfr-milestone.enabled", false);
user_pref("browser.ping-centre.telemetry", false);
user_pref("default-browser-agent.enabled", false);


// STUDIES

user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

// CRASH REPORTS

user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

// OTHERS

user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);
user_pref("browser.contentblocking.reportBreakage.url", "");
user_pref("browser.contentblocking.report.cookie.url", "");
user_pref("browser.contentblocking.report.cryptominer.url", "");
user_pref("browser.contentblocking.report.fingerprinter.url", "");
user_pref("browser.contentblocking.report.lockwise.enabled", false);
user_pref("browser.contentblocking.report.lockwise.how_it_works.url", "");
user_pref("browser.contentblocking.report.manage_devices.url", "");
user_pref("browser.contentblocking.report.monitor.enabled", false);
user_pref("browser.contentblocking.report.monitor.how_it_works.url", "");
user_pref("browser.contentblocking.report.monitor.sign_in_url", "");
user_pref("browser.contentblocking.report.monitor.url", "");
user_pref("browser.contentblocking.report.proxy.enabled", false);
user_pref("browser.contentblocking.report.proxy_extension.url", "");
user_pref("browser.contentblocking.report.social.url", "");
user_pref("browser.contentblocking.report.tracker.url", "");
user_pref("browser.contentblocking.report.endpoint_url", "");
user_pref("browser.contentblocking.report.monitor.home_page_url", "");
user_pref("browser.contentblocking.report.monitor.preferences_url", "");
user_pref("browser.contentblocking.report.vpn.enabled", false);
user_pref("browser.contentblocking.report.hide_vpn_banner", true);
user_pref("browser.contentblocking.report.show_mobile_app", false);
user_pref("browser.vpn_promo.enabled", false);
user_pref("browser.promo.focus.enabled", false);
user_pref("app.feedback.baseURL", "");
user_pref("app.support.baseURL", "");
user_pref("app.releaseNotesURL", "");
user_pref("app.update.url.details", "");
user_pref("app.update.url.manual", "");
user_pref("app.update.staging.enabled", false);
user_pref("gecko.handlerService.schemes.mailto.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.mailto.0.name", "");
user_pref("gecko.handlerService.schemes.mailto.1.uriTemplate", "");
user_pref("gecko.handlerService.schemes.mailto.1.name", "");
user_pref("gecko.handlerService.schemes.irc.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.irc.0.name", "");
user_pref("gecko.handlerService.schemes.ircs.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.ircs.0.name", "");
user_pref("browser.translation.engine", "");
user_pref("services.settings.server", "");

// SAFE BROWSING (SB)

user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.passwords.enabled", false);
user_pref("browser.safebrowsing.allowOverride", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);

// Google connections

user_pref("browser.safebrowsing.downloads.remote.block_dangerous", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.updateURL", "");
user_pref("browser.safebrowsing.provider.google4.gethashURL", "");
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");
user_pref("browser.safebrowsing.provider.google4.reportURL", "");
user_pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.dataSharing.enabled", false);
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", "");
user_pref("browser.safebrowsing.provider.google.advisory", "");
user_pref("browser.safebrowsing.provider.google.advisoryURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.advisoryURL", "");
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");
user_pref("browser.region.update.enabled", false);

// SEC

user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true);