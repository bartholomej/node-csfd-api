export const directorMock = `

<!DOCTYPE html>
<html lang="cs-CZ">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Quentin Tarantino | ČSFD.cz</title>
<script>
	var ab_detection = 'xbax';
	window[ab_detection] = 1;
</script>
<script src="/nativeads.js"></script>
<script>
	window.dataLayer = window.dataLayer || [];
	function gtag() {window.dataLayer.push(arguments);}

	gtag('consent', 'default', {
		'ad_storage': 'denied',
		'ad_user_data': 'denied',
		'ad_personalization': 'denied',
		'analytics_storage': 'denied',
		'functionality_storage': 'denied',
		'personalization_storage': 'denied',
		'security_storage': 'denied'
	});

	window.didomiOnReady = window.didomiOnReady || [];
	window.didomiOnReady.push(function () {
		var consentIsGranted = false;
		var consentObject = {};
		if (Didomi.getUserConsentStatusForPurpose('publishers-Kqq3iPge')) {
			consentObject.analytics_storage = 'granted';
			consentIsGranted = true;
		}

		if (Didomi.getUserConsentStatusForVendor('google')) {
			consentObject.ad_storage = 'granted';
			consentObject.ad_user_data = 'granted';
			consentObject.ad_personalization = 'granted';
			consentObject.functionality_storage = 'granted';
			consentObject.personalization_storage = 'granted';
			consentObject.security_storage = 'granted';
			consentIsGranted = true;
		}

		if (consentIsGranted) {
			gtag('consent', 'update', consentObject);

			window.dataLayer.push({
				'event': 'consent_init',
				'consent': consentObject
			});
		}
	});

	var googleAnalyticsPageViewData = {"event":"page_view","site":"www.csfd.cz","platform":"web","environment":"production","language":"cs","device":"desktop","user":{"id":null,"adblock":false},"page":{"id":2120,"type":"Creator","title":null,"url":"https:\/\/www.csfd.cz\/tvurce\/2120-quentin-tarantino\/prehled\/","path":"\/tvurce\/2120-quentin-tarantino\/prehled\/","section":"Creator"},"_clear":true};
	if (googleAnalyticsPageViewData !== null) {
		googleAnalyticsPageViewData.page.title = "Quentin Tarantino | ČSFD.cz";
		googleAnalyticsPageViewData.user.adblock = !!window[ab_detection];
		var sp = null;
		if (window.localStorage !== null) {
			var i = window.localStorage.getItem('sp');
			if (i === '1' || i === '2') {
				sp = parseInt(i, 10);
			} else {
				sp = Math.floor(Math.random() * 2) + 1;
				window.localStorage.setItem('sp', sp);
			}
		}
		googleAnalyticsPageViewData.status_pair = sp === null ? Math.floor(Math.random() * 2) + 1 : sp;
		window.dataLayer.push(googleAnalyticsPageViewData);
	}
</script>
<script>
window.didomiConfig = {
	languages: {
		enabled: ["cs"],
		default: "cs"
	}
};
window.gdprAppliesGlobally=true;(function(){function a(e){if(!window.frames[e]){if(document.body&&document.body.firstChild){var t=document.body;var n=document.createElement("iframe");n.style.display="none";n.name=e;n.title=e;t.insertBefore(n,t.firstChild)} else{setTimeout(function(){a(e)},5)}}}function e(n,r,o,c,s){function e(e,t,n,a){if(typeof n!=="function"){return}if(!window[r]){window[r]=[]}var i=false;if(s){i=s(e,t,n)}if(!i){window[r].push({command:e,parameter:t,callback:n,version:a})}}e.stub=true;function t(a){if(!window[n]||window[n].stub!==true){return}if(!a.data){return} var i=typeof a.data==="string";var e;try{e=i?JSON.parse(a.data):a.data}catch(t){return}if(e[o]){var r=e[o];window[n](r.command,r.parameter,function(e,t){var n={};n[c]={returnValue:e,success:t,callId:r.callId};a.source.postMessage(i?JSON.stringify(n):n,"*")},r.version)}} if(typeof window[n]!=="function"){window[n]=e;if(window.addEventListener){window.addEventListener("message",t,false)}else{window.attachEvent("onmessage",t)}}}e("__tcfapi","__tcfapiBuffer","__tcfapiCall","__tcfapiReturn");a("__tcfapiLocator"); (function(e){var t=document.createElement("script");t.id="spcloader";t.type="text/javascript";t.async=true;t.src="https://sdk.privacy-center.org/"+e+"/loader.js?target="+document.location.hostname;t.charset="utf-8";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)})("9a8e2159-3781-4da1-9590-fbf86806f86e")})();
</script>
<script src="https://cdn.cpex.cz/cmp/v2/cpex-cmp-upgrade.min.js" type="text/javascript"></script>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer',"GTM-TM3S526");</script>
<script type="text/javascript">
	<!--//--><![CDATA[//><!--
	var pp_gemius_identifier = '.Xo70CM6eCnBhv6vp5QQNcR77xEWf47KiIqfXU6rmdf.e7';
	var pp_gemius_use_cmp = true;
	// lines below shouldn't be edited
	function gemius_pending(i) { window[i] = window[i] || function() { var x = window[i+'_pdata'] = window[i+'_pdata'] || []; x[x.length]=arguments;};};
	gemius_pending('gemius_hit'); gemius_pending('gemius_event'); gemius_pending('pp_gemius_hit'); gemius_pending('pp_gemius_event');
	(function(d,t) { try { var gt=d.createElement(t),s=d.getElementsByTagName(t)[0],l='http'+((location.protocol=='https:')?'s':''); gt.setAttribute('async','async');
	gt.setAttribute('defer','defer'); gt.src=l+'://spir.hit.gemius.pl/xgemius.js'; s.parentNode.insertBefore(gt,s);} catch (e) { }})(document,'script');
	//--><!]]>
</script>

<meta name="description" content="Vše o tvůrci Quentin Tarantino: Filmografie, Biografie, Zajímavosti, Videa, Galerie, Diskuze a další...">

<link rel="alternate" hreflang="cs-cz" href="https://www.csfd.cz/tvurce/2120-quentin-tarantino/prehled/" />
<link rel="alternate" hreflang="sk-sk" href="https://www.csfd.sk/tvorca/2120-quentin-tarantino/prehlad/" />
<link rel="alternate" hreflang="de-at" href="https://www.filmbooster.at/filmemacher/2120-quentin-tarantino/ubersicht/" />
<link rel="alternate" hreflang="en-ca" href="https://www.filmbooster.ca/creator/2120-quentin-tarantino/overview/" />
<link rel="alternate" hreflang="en-gb" href="https://www.filmbooster.co.uk/creator/2120-quentin-tarantino/overview/" />
<link rel="alternate" hreflang="en-us" href="https://www.filmbooster.com/creator/2120-quentin-tarantino/overview/" />
<link rel="alternate" hreflang="en-au" href="https://www.filmbooster.com.au/creator/2120-quentin-tarantino/overview/" />
<link rel="alternate" hreflang="de-de" href="https://www.filmbooster.de/filmemacher/2120-quentin-tarantino/ubersicht/" />
<link rel="alternate" hreflang="es-es" href="https://www.filmbooster.es/cineasta/2120-quentin-tarantino/resumen/" />
<link rel="alternate" hreflang="fi-fi" href="https://www.filmbooster.fi/tekija/2120-quentin-tarantino/yleista/" />
<link rel="alternate" hreflang="fr-fr" href="https://www.filmbooster.fr/artiste/2120-quentin-tarantino/apercu/" />
<link rel="alternate" hreflang="hu-hu" href="https://www.filmbooster.hu/alkoto/2120-quentin-tarantino/attekintes/" />
<link rel="alternate" hreflang="nl-nl" href="https://www.filmbooster.nl/maker/2120-quentin-tarantino/overzicht/" />
<link rel="alternate" hreflang="pl-pl" href="https://www.filmbooster.pl/tworca/2120-quentin-tarantino/przeglad/" />
<link rel="alternate" hreflang="pt-pt" href="https://www.filmbooster.pt/criador/2120-quentin-tarantino/resumo/" />

<link rel="canonical" href="https://www.csfd.cz/tvurce/2120-quentin-tarantino/prehled/">

<meta property="og:site_name" content="ČSFD.cz">
<meta property="og:image" content="//image.pmgstatic.com/cache/resized/w936/files/images/film/photos/000/127/127233_d667d6.jpg">
<meta property="og:image" content="//image.pmgstatic.com/cache/resized/w936/files/images/film/photos/164/503/164503407_c93ac9.jpg">
<meta property="og:image" content="//image.pmgstatic.com/cache/resized/w936/files/images/film/photos/163/565/163565021_38fdcc.jpg">
<meta property="og:description" content="Vše o tvůrci Quentin Tarantino: Filmografie, Biografie, Zajímavosti, Videa, Galerie, Diskuze a další...">
<meta property="og:title" content="Quentin Tarantino | ČSFD.cz">
<meta property="og:type" content="director">
<meta property="og:url" content="https://www.csfd.cz/tvurce/2120-quentin-tarantino/prehled/">
<meta property="fb:app_id" content="260163667481043">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://www.csfd.cz/tvurce/2120-quentin-tarantino/prehled/">
<meta name="twitter:title" content="Quentin Tarantino | ČSFD.cz">
<meta name="twitter:description" content="Vše o tvůrci Quentin Tarantino: Filmografie, Biografie, Zajímavosti, Videa, Galerie, Diskuze a další...">
<meta name="twitter:image" content="//image.pmgstatic.com/cache/resized/w936/files/images/film/photos/000/127/127233_d667d6.jpg">
		<meta name="theme-color" content="#ba0305">
		<meta name="theme-color" media="(prefers-color-scheme: light)" content="#ba0305">
		<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#ba0305">
		<link rel="stylesheet" href="//static.pmgstatic.com/assets/web-css/004abeaf57e23c8fe28a2473e92e11d5/styles.min.css">
		<link rel="shortcut icon" href="//static.pmgstatic.com/assets/images/4b37ac5ff3cce04f5ea0278688618768/favicon.ico">
		<link rel="apple-touch-icon" href="//static.pmgstatic.com/assets/images/4b37ac5ff3cce04f5ea0278688618768/apple-touch-icon.png">
		<script src="//static.pmgstatic.com/assets/vendor/672bc7a35152f1a31eea0f71cc398bdb/jquery.min.js"></script>
		<script src="//static.pmgstatic.com/assets/web-js/29a6231a0410e2580881e75f9858280b/scripts.min.js" defer></script>

<script type="text/javascript">
	window.AdsObject = {};
	window.sasUrl = "https://a.csfd.cz/csfd";
</script>
<script>
		(function () {
			function loadScript (url, name) {
				var script = document.createElement('script')
				script.src = url
				script.fetchPriority = 'high'
				document.head.appendChild(script)
			}
			// R2B2 skript pro HB
			var scriptType = window.innerWidth <= 500 ? 'mobile' : 'desktop'
			loadScript('//trackad.cz/hb/pomoMediaGroup/pomo.csfd.cz_' + scriptType)
			loadScript('//delivery.r2b2.cz/get/pomo.csfd.cz/hb/video_preroll')
			// cpexPackage
			window.cpexPackageConfig = {
				publisherSettingsPath: 'https://cdn.cpex.cz/settings/' + isOn('stageSetPub', 'stage', 'production') + '/csfd.js',
				websiteSettingsPath: 'https://cdn.cpex.cz/settings/' + isOn('stageSetWeb', 'stage', 'production') + '/csfd/csfd.cz.js',
				errorPath: ''
			}
			function isOn(keyword, on, off) { return window.location.href.indexOf(keyword) > -1 ? on : off }
			loadScript('https://cdn.cpex.cz/' + isOn('stagePackage', 'stage/', '') + 'package/cpex-package' + isOn('debug', '.js', '.min.js'))
		})()
</script>

<script id="caroda-videoplayer-script" src="https://publisher.caroda.io/videoPlayer/caroda.min.js?ctok=231efd424e405a" crossorigin="anonymous" defer></script>


<script id="videojs-vendor" src="//static.pmgstatic.com/assets/vendor/672bc7a35152f1a31eea0f71cc398bdb/videojs/video.min.js" async defer></script>
<script type="text/javascript" src="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1" async defer></script>
<link rel="stylesheet" href="//static.pmgstatic.com/assets/vendor/672bc7a35152f1a31eea0f71cc398bdb/videojs/video-js.min.css">
	</head>

	<body id="top" class="lang-1" data-page="creator">
		<div class="body">
			<div class="ad-wrapper">
				<div id="leaderboard-wrapper">
					<p class="box-banner-text-center">Reklama</p>
<div id="leaderboard" class="ad-pmg" style="height: 200px;"></div>
				</div>
				<div class="box box-banner-mobile">
					<p class="box-banner-text-center">Reklama</p>
<div id="mobile_leaderboard" class="ad-pmg" style="height: 100px;"></div>
				</div>
			</div>

			<div id="page-wrapper">

				<div class="top-info">
					<div class="top-info-content">
						<p>
							<a href="/akce/499-csfd-projekce-gladiator-ii/">ČSFD projekce <em>Gladiátor II</em></a>
						</p>
					</div>
				</div>

				<header class="page-header user-not-logged projection-on">
					<div class="header-main">
						<div class="logo">
							<a href="/" class="csfd-cz">ČSFD.cz</a>
						</div>


						<div class="header-search">
							<form id="main-search-form" action="/hledat/" data-autocomplete-url="/api/search/autocomplete/?q=__query__" method="get" role="search">
								<div class="search-input">
									<input name="q" type="search" autocomplete="off" placeholder="Vyhledávání">
									<a href="javascript:void(0);" class="input-search-close">
										<i class="icon icon-close"></i>
									</a>
									<button type="submit" class="btn-search"><i class="icon icon-search"></i><span>Hledat</span></button>
								</div>
							</form>

							<a href="/podrobne-vyhledavani/" class="detailed-search">Podrobné vyhledávání</a>

						</div>

						<ul class="header-bar">
							<li class="item-search">
								<a href="#show-search" class="user-link show-search">
									<i class="icon icon-search"></i>
								</a>
							</li>
									<li>
										<a href="/prihlaseni/" rel="dropdownContent" class="my-account user-link">
											<i class="icon icon-user"></i> <span>Můj účet</span>
										</a>
<div class="dropdown-content main-menu">
	<h2>Ovládací panel</h2>
		<ul class="blue">
			<li><a href="/prihlaseni/">Přihlášení</a></li>
			<li><a href="/registrace/">Registrace</a></li>
			<li><a href="/ztracene-heslo/">Zapomenuté heslo</a></li>
		</ul>
	<hr>
	<ul>
			<li><a href="/registration-motivation/?title=VyOlolOjKUHjZGH5nJEpqGNjMGShKUHjZTIxVTMcoT11VUAyVT11p1k1ZQOyMSk1ZQR2ZFOhMJcxKUHjZGH5KUHjZTIxqvOjKUHjZGH5nJufKUHjZTHkp2y0YvV" rel="registrationMotivation">Přidat film</a></li>
			<li><a href="/registration-motivation/?title=VyOlolOjKUHjZGH5nJEpqGNjMGShKUHjZTIxVUE2KUHjZGMzpzAyVUAyVT11p1k1ZQOyMSk1ZQR2ZFOhMJcxKUHjZGH5KUHjZTIxqvOjKUHjZGH5nJufKUHjZTHkp2y0YvV" rel="registrationMotivation">Přidat tvůrce</a></li>
	</ul>
</div>
									</li>
						</ul>

					</div>

					<div class="top-nav">
<nav class="tab-nav">
	<ul class="tab-nav-list">
		<li class="tab-nav-item">
			<a href="/novinky/">Novinky</a>
		</li>
		<li class="tab-nav-item">
			<a href="/televize/">Televize</a>
		</li>
		<li class="tab-nav-item">
			<a href="/kino/">Kino</a>
		</li>
		<li class="tab-nav-item">
			<a href="/vod/">VOD</a>
		</li>
		<li class="tab-nav-item">
			<a href="/zebricky/filmy/nejlepsi/">Žebříčky</a>
		</li>
		<li class="tab-nav-item">
			<a href="/bluray/">Blu-ray</a>
		</li>
		<li class="tab-nav-item">
			<a href="/dvd/">DVD</a>
		</li>
		<li class="tab-nav-item">
			<a href="/zanry/">Žánry<span class="top-nav-new">NEW</span></a>
		</li>
		<li class="tab-nav-item">
			<a href="/oceneni/">Ocenění</a>
		</li>
		<li class="tab-nav-item">
			<a href="/uzivatele/">Uživatelé</a>
		</li>
		<li class="tab-nav-item">
			<a href="/diskuze/">Diskuze</a>
		</li>
		<li class="tab-nav-item">
			<a href="https://shop.csfd.cz"><i class="icon icon-shopping-cart"></i>Shop</a>
		</li>
	</ul>
	<ul class="tab-nav-more">
		<li>
			<a class="tab-nav-more-btn" href="#dropdown-menu-1" rel="dropdownContent">
				další <i class="icon icon-arrow-down"></i>
			</a>
			<ul id="dropdown-menu-1" class="dropdown-content">
				<li class="tab-nav-item">
					<a href="/novinky/">Novinky</a>
				</li>
				<li class="tab-nav-item">
					<a href="/televize/">Televize</a>
				</li>
				<li class="tab-nav-item">
					<a href="/kino/">Kino</a>
				</li>
				<li class="tab-nav-item">
					<a href="/vod/">VOD</a>
				</li>
				<li class="tab-nav-item">
					<a href="/zebricky/filmy/nejlepsi/">Žebříčky</a>
				</li>
				<li class="tab-nav-item">
					<a href="/bluray/">Blu-ray</a>
				</li>
				<li class="tab-nav-item">
					<a href="/dvd/">DVD</a>
				</li>
				<li class="tab-nav-item">
					<a href="/zanry/">Žánry<span class="top-nav-new">NEW</span></a>
				</li>
				<li class="tab-nav-item">
					<a href="/oceneni/">Ocenění</a>
				</li>
				<li class="tab-nav-item">
					<a href="/uzivatele/">Uživatelé</a>
				</li>
				<li class="tab-nav-item">
					<a href="/diskuze/">Diskuze</a>
				</li>
				<li class="tab-nav-item">
					<a href="https://shop.csfd.cz"><i class="icon icon-shopping-cart"></i>Shop</a>
				</li>
			</ul>
		</li>
	</ul>
</nav>
					</div>
				</header>

				<div class="page-content page-red">



<div class="creator-main">
<script type="application/ld+json">{"@context":"https://schema.org/","@type":"Person","name":"Quentin Tarantino","birthDate":"1963-03-27","birthPlace":{"@type":"Place","name":"Knoxville, Tennessee, USA"},"image":"//static.pmgstatic.com/assets/images/4b37ac5ff3cce04f5ea0278688618768/empty-image.svg"}</script>
	<div class="creator-main-content">
		<div class="creator-about">
			<div class="creator-profile">
				<div id="profile-header-info" class="hidden has-boxes creator-profile-head">
					<div id="snippet--boxButtonFanclub" class="hidden snippet-box" data-auto-show-hide-parent>
					</div>

					<div id="snippet--boxButtonWatchlist" class="hidden snippet-box" data-auto-show-hide-parent>
					</div>

					<div id="snippet--boxCharts" class="snippet-box" data-auto-show-hide-parent>
						<div class="label-simple label-favorite-white" data-auto-show-hide-data-box>
							<a href="/zebricky/reziseri/#highlight-3-2120" title="Umístění tvůrce v sekci žebříčky se zvýrazněním.">
								<i class="icon icon-thumb-up"></i>1. nejoblíbenější režisér
							</a>
						</div>
						<div class="label-simple label-favorite-white" data-auto-show-hide-data-box>
							<a href="/zebricky/scenariste-kameramani-skladatele/#highlight-5-2120" title="Umístění tvůrce v sekci žebříčky se zvýrazněním.">
								<i class="icon icon-thumb-up"></i>1. nejoblíbenější scenárista
							</a>
						</div>
						<div class="label-simple label-favorite-white" data-auto-show-hide-data-box>
							<a href="/zebricky/herci-a-herecky/?fromLeft=200#highlight-1-2120" title="Umístění tvůrce v sekci žebříčky se zvýrazněním.">
								<i class="icon icon-thumb-up"></i>269. nejoblíbenější herec
							</a>
						</div>
					</div>

					<div id="snippet--boxFanclub" class="snippet-box" data-auto-show-hide-parent>
						<div class="label-simple label-fanclub" data-auto-show-hide-data-box>
							<a href="/tvurce/2120-quentin-tarantino/prehled/?modal=fanclubList" rel="contentModal" class="btn-fanclub" data-modal-class="modal-fanclub">
								Fanklub (39 150)
							</a>
						</div>
					</div>
				</div>
				<div class="creator-profile-content">
					<figure>
						
							<img src="//image.pmgstatic.com/cache/resized/w100h132crop/files/images/creator/photos/164/515/164515525_b98f8a.jpg" loading="lazy" width="100" height="132" srcset="//image.pmgstatic.com/cache/resized/w100h132crop/files/images/creator/photos/164/515/164515525_b98f8a.jpg 1x, //image.pmgstatic.com/cache/resized/w200h264crop/files/images/creator/photos/164/515/164515525_b98f8a.jpg 2x, //image.pmgstatic.com/cache/resized/w300h396crop/files/images/creator/photos/164/515/164515525_b98f8a.jpg 3x" alt="Quentin Tarantino">
						
					</figure>

					<div class="creator-profile-content-desc">
						<h1>
							Quentin Tarantino
						</h1>
						<p>
									nar. 27.03.1963
									<span class="info">(61 let)</span>


							<span class="info-place">
								Knoxville, Tennessee, USA

							</span>
						</p>
					</div>

					<div class="creator-photo-copyright">
						<div class="creator-photo-copyright-content">
							<span class="item-text">
								Photo from
							</span>
								<a href="/film/7743-ctyri-pokoje/" class="item-movie">
									Čtyři pokoje
								</a>
								<span class="item-movie-rest">
										(1995)
								</span>
						</div>
					</div>

					<div class="control-panel-mobile">
						<a href="#dropdown-control-panel" rel="dropdownContent" class="button button-control-panel small" data-pos="js" data-pos-right-offset="16" data-pos-side="bottom-right">
							<i class="icon icon-menu"></i>
							
						</a>
					</div>
				</div>
			</div>

			<div class="creator-tabs">
				<div class="tabs">
<nav class="tab-nav tab-nav-count-7">
	<ul class="tab-nav-list">
		<li class="tab-nav-item active">
			<a class="tab-link" href="/tvurce/2120-quentin-tarantino/prehled/">
				Přehled
			</a>
		</li>
		<li class="tab-nav-item">
			<a class="tab-link" href="/tvurce/2120-quentin-tarantino/biografie/">
				Biografie
			</a>
		</li>
		<li class="tab-nav-item">
			<a class="tab-link" href="/tvurce/2120-quentin-tarantino/zajimavosti/">
				Zajímavosti
			</a>
		</li>
		<li class="tab-nav-item">
			<a class="tab-link" href="/tvurce/2120-quentin-tarantino/videa/">
				Videa
			</a>
		</li>
		<li class="tab-nav-item">
			<a class="tab-link" href="/tvurce/2120-quentin-tarantino/galerie/">
				Galerie
			</a>
		</li>
		<li class="tab-nav-item">
			<a class="tab-link" href="/tvurce/2120-quentin-tarantino/oceneni/">
				Ocenění
			</a>
		</li>
		<li class="tab-nav-item">
			<a class="tab-link" href="/tvurce/2120-quentin-tarantino/diskuze/">
				Diskuze
			</a>
		</li>
	</ul>
	<div class="tab-nav-more">
		<a class="tab-nav-more-btn" href="#dropdown-menu-2" rel="dropdownContent">
			další <i class="icon icon-arrow-down"></i>
		</a>
		<ul id="dropdown-menu-2" class="dropdown-content">
			<li class="tab-nav-item active">
				<a class="tab-link" href="/tvurce/2120-quentin-tarantino/prehled/">
					Přehled
				</a>
			</li>
			<li class="tab-nav-item">
				<a class="tab-link" href="/tvurce/2120-quentin-tarantino/biografie/">
					Biografie
				</a>
			</li>
			<li class="tab-nav-item">
				<a class="tab-link" href="/tvurce/2120-quentin-tarantino/zajimavosti/">
					Zajímavosti
				</a>
			</li>
			<li class="tab-nav-item">
				<a class="tab-link" href="/tvurce/2120-quentin-tarantino/videa/">
					Videa
				</a>
			</li>
			<li class="tab-nav-item">
				<a class="tab-link" href="/tvurce/2120-quentin-tarantino/galerie/">
					Galerie
				</a>
			</li>
			<li class="tab-nav-item">
				<a class="tab-link" href="/tvurce/2120-quentin-tarantino/oceneni/">
					Ocenění
				</a>
			</li>
			<li class="tab-nav-item">
				<a class="tab-link" href="/tvurce/2120-quentin-tarantino/diskuze/">
					Diskuze
				</a>
			</li>
		</ul>
	</div>
</nav>

<div class="tab-content creator-profile--tab-default">
	<section class="box">
		<header class="box-header">
			<h2>Biografie <span class="count">(2)</span></h2>
		</header>
		<div class="box-content">
			<article class="article article-white">
				<div class="article-content article-content-justify">
						<p>
							Narodil se teprve šestnáctileté Connii McHugh, která mu dala křestní jméno podle své oblíbené postavy Quinta ze seriálu Gunsmoke. Jeho biologickým otcem byl jistý Tony Tarantino, který rodinu opustil když byl Quentin ještě malinký a nikdy o syna nejevil zájem (přesněji řečeno jen do doby, než se potomek stal slavným – pak se na jeho úspěchu pokoušel parazitovat). Jeho náhradním tatínkem se stal hudebník s československými kořeny, který si Connii vzal a Quentina…
							<span class="span-more-small">(<a href="/tvurce/2120-quentin-tarantino/biografie/">více</a>)</span>
						</p>
				</div>
			</article>
		</div>
	</section>

	<section class="box box-borderless">
			<header class="box-header">
				<h2>Videa <span class="count">(5)</span></h2>
				<div class="box-header-action">
					<a href="/tvurce/2120-quentin-tarantino/videa/" class="button">Více</a>
				</div>
			</header>
			<div class="box-content">
				<div class="box box-media">
					<figure class="box-video preview box-video-autoplay" data-autoplay-video>
							<div class="box-videoplayer-film">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/527699-tenkrat-v-hollywoodu/" class="film-title-name">Tenkrát v Hollywoodu</a> <span class="film-title-info"><span class="info">(2019)</span></span></h3>							</div>

<div class="box-video-content">
	<a href="javascript:void(0);" class="box-video-preview disabled" data-video-player-initialize="video-player-1" data-video-player-playlist-start="0" data-video-player-autoplay="" data-video-player-translations-url="/api/video-player/translations/">
			<picture>
				<source media="(max-width: 650px)" srcset="//image.pmgstatic.com/cache/resized/w360/files/images/film/video/preview/163/495/163495461_d25706.jpg 1x, //image.pmgstatic.com/cache/resized/w720/files/images/film/video/preview/163/495/163495461_d25706.jpg 2x, //image.pmgstatic.com/cache/resized/w1080/files/images/film/video/preview/163/495/163495461_d25706.jpg 3x" />
				<img class="prev-img" src="//image.pmgstatic.com/cache/resized/w663/files/images/film/video/preview/163/495/163495461_d25706.jpg" loading="lazy" width="663" height="372" alt="Rozhovor 2 - Quentin Tarantino, Margot Robbie" />
			</picture>
		<span class="play-button"><i class="icon icon-play-simple"></i></span>
	</a>

	<div class="box-video-player">
		<video id="video-player-1"
			class="hidden vjs-waiting vjs-has-started"
			controls
			preload="none"
			crossorigin="anonymous"
			playsinline
			width="637"
			height="360"
			
			data-video-url="/api/video-player/?data=__data__"
			data-videos="[&#123;&quot;description&quot;:&quot;Rozhovor 2 - Quentin Tarantino, Margot Robbie&quot;,&quot;language_id&quot;:3,&quot;duration&quot;:191,&quot;subtitles_language_id&quot;:1,&quot;preview_image_path&quot;:&quot;files/images/film/video/preview/163/495/163495461_d25706.jpg&quot;,&quot;preview_image_storage_id&quot;:&quot;image-production&quot;,&quot;preview_image_width&quot;:1280,&quot;preview_image_height&quot;:720,&quot;film_video_id&quot;:157746741,&quot;film_video_type_id&quot;:9,&quot;position&quot;:2,&quot;video_id&quot;:157752839,&quot;copyright&quot;:&quot;Sony Pictures Entertainment&quot;,&quot;film_type&quot;:0,&quot;film_root_id&quot;:null,&quot;film_root_slug&quot;:null,&quot;film_id&quot;:527699,&quot;film_slug&quot;:&quot;tenkrat-v-hollywoodu&quot;,&quot;film_name&quot;:&quot;Tenkrát v Hollywoodu&quot;,&quot;film_year&quot;:2019,&quot;film_rating_category&quot;:1,&quot;preview_image&quot;:&#123;&quot;path&quot;:&quot;files/images/film/video/preview/163/495/163495461_d25706.jpg&quot;,&quot;storage_id&quot;:&quot;image-production&quot;,&quot;width&quot;:1280,&quot;height&quot;:720},&quot;external_description&quot;:&quot;Tenkrát v Hollywoodu: Rozhovor 2 - Quentin Tarantino, Margot Robbie&quot;,&quot;title&quot;:&quot;&lt;h3 class=\&quot;film-title\&quot;&gt;&lt;i class=\&quot;icon icon-rounded-square red\&quot;&gt;&lt;/i&gt;&lt;a href=\&quot;/film/527699-tenkrat-v-hollywoodu/\&quot; class=\&quot;film-title-name\&quot;&gt;Tenkrát v Hollywoodu&lt;/a&gt; &lt;span class=\&quot;film-title-info\&quot;&gt;&lt;span class=\&quot;info\&quot;&gt;(2019)&lt;/span&gt;&lt;/span&gt;&lt;/h3&gt;&quot;,&quot;request_data&quot;:&quot;rlW2nJEyo0yxVwbkAGp3AGV4ZmxfVaA1LaEcqTkyGTShM3IuM2IWMUZvByfkYQWqYPW0o2gyovV6VwR2ZmZ3MTAyMTSwMQplBGOvZTHjMQLmMzL0ZwRjBTIvZzAuATR5BGLvsD&quot;}]"
			data-recommended-videos-url="/api/video-player/recommended-videos/?videoId=157752839&amp;limit=2"
			data-recommended-autoplay
			
		>
			<p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a></p>
		</video>
	</div>
</div>
					</figure>
				</div>
			</div>
	</section>

	<section class="box box-nooverflow">
		<header class="box-header">
			<h2>Zajímavosti <span class="count">(613)</span></h2>
			<div class="box-header-action">
				<a href="/tvurce/2120-quentin-tarantino/zajimavosti/" class="button">Více</a>
			</div>
		</header>
		<div class="box-content">
	<article class="article article-trivia">
		<div class="article-content article-content-justify">

			<ul>
				<li>
					Ke své proslavené práci v půjčovně Video Archives v roce 2008 (během diskuse na festivalu v Cannes) doplnil: <em>"Panuje legenda, že jsem své filmové znalosti získal při práci v jedné videotéce. Ve skutečnosti mě tam vzali, protože jsem už filmovým expertem byl. Na téhle práci bylo fajn, že tam měli oddělení se zahraničními filmy a s klasikou. Díky tomu jsem nemusel čekat na reprízy v kině nebo v televizi. Předtím jsem si vždycky každý týden koupil televizní program, probral stanice od začátku až do konce a zaškrtl si všechno, co jsem chtěl vidět nebo nahrát. Ale ve videotéce jsem měl denně přístup ke všem těm filmům, a tak jsem se jimi pořád probíral. Stal jsem se fandou třeba <a href="https://www.csfd.cz/tvurce/3809-eric-rohmer/">Erica Rohmera</a> a podíval se tam na všechno, co natočil. Dělám to dodnes: když narazím na někoho, kdo mě zajímá, chci vidět všechno, co udělal."</em> <span class="span-more-small">
							(<a href="/uzivatel/34-niro/">NIRO</a>)


					</span>
				</li>
			</ul>
		</div>
	</article>

	<article class="article article-trivia">
		<div class="article-content article-content-justify">

			<ul>
				<li>
					Ke svému "tréninku" řekl: <em>"Každému, kdo se chce stát režisérem nebo autorem, bych doporučil, aby nechodil na režii nebo na scenáristiku, ale zapsal se na hereckou školu. Všechno, co vím o psaní, jsem se naučil při hraní. Naučíš se tam, jak se před kameru vchází a jak se odchází, jak se máš pohybovat v jednom záběru. Všechny tyhle věci pak ulehčují práci režiséra nebo scenáristy. Ale přitom se na žádný škole nevyučují. (...) Když jsem byl na filmové škole, předehrávali jsme některé filmové scény. Přitom jsme ale neměli možnost číst takové scénáře jako třeba <a href="https://www.csfd.cz/film/5076-na-vychod-od-raje/">Na východ od ráje</a> nebo jim podobné. Ale já jsem měl dobrou paměť. Když jsem nějaký film viděl, vzpomněl jsem si na ten nebo jinej dialog a mohl ho zpaměti napsat. A na co jsem si nevzpomněl, o tom vůbec nepřemýšlel. Tak jsem si třeba zapsal jednu scénu z <a href="https://www.csfd.cz/film/39800-marty/">Martyho</a> a jednoduše k ní přidal jeden nový monolog - a to byl přece jen scénář <a href="https://www.csfd.cz/tvurce/81329-paddy-chayefsky/">Paddyho Chayefského</a>! Pak jsem ho dal přečíst svýmu hereckýmu partnerovi. Ten si to prolítnul a povídá: 'Tenhle monolog přee není od Chayefskýho, ale je stejně dobrej jako ta jeho věc.' To pro mě vlastně bylo první potvrzení, že bych měl svoje psaní brát vážně."</em> <span class="span-more-small">
							(<a href="/uzivatel/34-niro/">NIRO</a>)


					</span>
				</li>
			</ul>
		</div>
	</article>

	<article class="article article-trivia">
		<div class="article-content article-content-justify">

			<ul>
				<li>
					Herec <a href="https://www.csfd.cz/tvurce/144-michael-madsen/">Michael Madsen</a> srovnával pracovní přístupy Tarantina a jeho nejlepšího kamaráda <a href="https://www.csfd.cz/tvurce/3054-robert-rodriguez/">Roberta Rodrigueze</a>: <em>"Robert je tichej, metodickej chlap. Hraje na place na kytaru... (...) a rád jede tak na jednu, dvě, tři klapky. Připraví záběr, sedne si, podívá se na vás a řekne: 'OK, pusť se do toho.' Odehrajete to a on: 'Fajn, jdeme dál.' Zato Quentin spíš chrlí: 'Jedemeznovu! Ještějednou!' Ten sjede záběr tak desetkrát, patnáctkrát. A vlastně nevíte, co chce. Já dělám furt to samý, znovu a znovu. Ale někdy, když jste trochu podrážděnej, tak to z vás asi něco dostane. A na to Quentin čeká, na ty malý detaily."</em> <span class="span-more-small">
							(<a href="/uzivatel/34-niro/">NIRO</a>)


					</span>
				</li>
			</ul>
		</div>
	</article>

		</div>
	</section>

	<section class="box box-borderless">
		<header class="box-header">
			<h2>Galerie <span class="count">(147)</span></h2>
			<div class="box-header-action">
				<a href="/tvurce/2120-quentin-tarantino/galerie/" class="button">Více</a>
			</div>
		</header>
		<div class="box-content"><div class="gallery-item">
			<div class="box box-media">
<figure class="figure-skeleton">
	<div class="box-photo-film">
<h3 class="film-title"><i class="icon icon-rounded-square red"></i><a href="/film/7741-desperado/" class="film-title-name">Desperado</a> <span class="film-title-info"><span class="info">(1995)</span></span></h3>	</div>

	<div class="box-copyright box-copyright-bottom">
		<p class="p-box-copyright">Photo © Columbia Pictures</p>
	</div>

	<div class="media-img" style="padding-bottom: 147.92%">
		<picture>
			<source media="(max-width: 400px)" >
			<source media="(max-width: 750px) and (min-width: 401px)" >
			<img src="//image.pmgstatic.com/cache/resized/w468/files/images/film/photos/158/470/158470746_2629c0.jpg" loading="lazy" width="468" height="692" alt="Quentin Tarantino - Desperado - Z filmu" />
		</picture>
	</div>
</figure>
<figcaption>
		<a href="/tvurce/2120-quentin-tarantino/">Quentin Tarantino</a>
</figcaption>
			</div>
		</div></div>
	</section>
</div>

					<section class="box box-borderless box-noborderbottom box-margintop creator-news-desktop">
						<header class="box-header">
							<h2>Související novinky</h2>
							<div class="box-header-action">
								<a href="/novinky/?creatorId=2120" class="button">více</a>
							</div>
						</header>
						<div class="box-content">
							<div class="newslist-content">
								<div class="newslist newslist-creator">
										<section class="newslist-item">
											<div class="box-content">
												<article class="article article-news article-news-60">
													<figure class="article-img">
														<a href="/novinky/9163-margaret-qualley-bude-viktorianska-psychopatka/">
															<img class="img" src="//image.pmgstatic.com/cache/resized/w100h132crop/files/images/news/article/169/455/169455955_v7t0m6.jpg" loading="lazy" width="100" height="132" srcset="//image.pmgstatic.com/cache/resized/w100h132crop/files/images/news/article/169/455/169455955_v7t0m6.jpg 1x, //image.pmgstatic.com/cache/resized/w200h264crop/files/images/news/article/169/455/169455955_v7t0m6.jpg 2x, //image.pmgstatic.com/cache/resized/w300h396crop/files/images/news/article/169/455/169455955_v7t0m6.jpg 3x" alt="Margaret Qualley bude viktoriánská psychopatka">
														</a>
													</figure>
													<header class="article-header">
														<h3>
															<a href="/novinky/9163-margaret-qualley-bude-viktorianska-psychopatka/">Margaret Qualley bude viktoriánská psychopatka</a>
														</h3>
														<div class="info">
															<span class="date">31.10.2024</span>
														</div>
													</header>
													<div class="article-news-content article-content-justify">
														<div class="article-news-textshort">
															<p>
																Jen málokterá mladá herečka má v současném Hollywoodu tak dobrou výchozí pozici jako Margaret Qualley. Svou kariéru odstartovala menší roličkou v buddy komedii Správní chlapi, posléze se…
																<span class="span-more-small">(<a href="/novinky/9163-margaret-qualley-bude-viktorianska-psychopatka/">více</a>)</span>
															</p>
														</div>
													</div>
												</article>
											</div>
										</section>

										<section class="newslist-item">
											<div class="box-content">
												<article class="article article-news article-news-60">
													<figure class="article-img">
														<a href="/novinky/8991-zemrel-roger-corman/">
															<img class="img" src="//image.pmgstatic.com/cache/resized/w100h132crop/files/images/news/article/168/931/168931666_fk4dhs.jpg" loading="lazy" width="100" height="132" srcset="//image.pmgstatic.com/cache/resized/w100h132crop/files/images/news/article/168/931/168931666_fk4dhs.jpg 1x, //image.pmgstatic.com/cache/resized/w200h264crop/files/images/news/article/168/931/168931666_fk4dhs.jpg 2x, //image.pmgstatic.com/cache/resized/w300h396crop/files/images/news/article/168/931/168931666_fk4dhs.jpg 3x" alt="Zemřel Roger Corman">
														</a>
													</figure>
													<header class="article-header">
														<h3>
															<a href="/novinky/8991-zemrel-roger-corman/">Zemřel Roger Corman</a>
														</h3>
														<div class="info">
															<span class="date">12.05.2024</span>
														</div>
													</header>
													<div class="article-news-content article-content-justify">
														<div class="article-news-textshort">
															<p>
																Svět filmu přišel o jednu z ikon americké kinematografie, v kalifornské Santa Monice totiž zemřel legendární americký režisér, producent a scenárista Roger Corman. Bylo mu úctyhodných osmadevadesát…
																<span class="span-more-small">(<a href="/novinky/8991-zemrel-roger-corman/">více</a>)</span>
															</p>
														</div>
													</div>
												</article>
											</div>
										</section>

											<div class="newslist-item">
												<div class="article article-native">
<div id="native_short_1" class="ad-pmg" style="height: 115px;"></div>
												</div>
											</div>
										<section class="newslist-item">
											<div class="box-content">
												<article class="article article-news article-news-60">
													<figure class="article-img">
														<a href="/novinky/8962-tarantino-rusi-the-movie-critic-jako-svuj-10-film/">
															<img class="img" src="//image.pmgstatic.com/cache/resized/w100h132crop/files/images/news/article/168/849/168849977_b1g1e6.jpg" loading="lazy" width="100" height="132" srcset="//image.pmgstatic.com/cache/resized/w100h132crop/files/images/news/article/168/849/168849977_b1g1e6.jpg 1x, //image.pmgstatic.com/cache/resized/w200h264crop/files/images/news/article/168/849/168849977_b1g1e6.jpg 2x, //image.pmgstatic.com/cache/resized/w300h396crop/files/images/news/article/168/849/168849977_b1g1e6.jpg 3x" alt="Tarantino ruší The Movie Critic jako svůj 10. film">
														</a>
													</figure>
													<header class="article-header">
														<h3>
															<a href="/novinky/8962-tarantino-rusi-the-movie-critic-jako-svuj-10-film/">Tarantino ruší The Movie Critic jako svůj 10. film</a>
														</h3>
														<div class="info">
															<span class="date">18.04.2024</span>
														</div>
													</header>
													<div class="article-news-content article-content-justify">
														<div class="article-news-textshort">
															<p>
																Následující sdělení bude pro mnohé filmové diváky a zejména pak fanoušky tvorby Quentina Tarantina (Pulp Fiction: Historky z podsvětí, Hanebný pancharti) zřejmě dost pochmurné a možná i…
																<span class="span-more-small">(<a href="/novinky/8962-tarantino-rusi-the-movie-critic-jako-svuj-10-film/">více</a>)</span>
															</p>
														</div>
													</div>
												</article>
											</div>
										</section>

										<section class="newslist-item">
											<div class="box-content">
												<article class="article article-news article-news-60">
													<figure class="article-img">
														<a href="/novinky/8914-tom-cruise-si-zahraje-ve-filmu-alejandra-g-inarritu/">
															<img class="img" src="//image.pmgstatic.com/cache/resized/w100h132crop/files/images/news/article/168/659/168659475_h1jmgq.jpg" loading="lazy" width="100" height="132" srcset="//image.pmgstatic.com/cache/resized/w100h132crop/files/images/news/article/168/659/168659475_h1jmgq.jpg 1x, //image.pmgstatic.com/cache/resized/w200h264crop/files/images/news/article/168/659/168659475_h1jmgq.jpg 2x, //image.pmgstatic.com/cache/resized/w300h396crop/files/images/news/article/168/659/168659475_h1jmgq.jpg 3x" alt="Tom Cruise si zahraje ve filmu Alejandra G. Iñárritu">
														</a>
													</figure>
													<header class="article-header">
														<h3>
															<a href="/novinky/8914-tom-cruise-si-zahraje-ve-filmu-alejandra-g-inarritu/">Tom Cruise si zahraje ve filmu Alejandra G. Iñárritu</a>
														</h3>
														<div class="info">
															<span class="date">23.02.2024</span>
														</div>
													</header>
													<div class="article-news-content article-content-justify">
														<div class="article-news-textshort">
															<p>
																Tom Cruise (Magnolia, Spalující touha), jehož mnozí nazývají poslední opravdovou velkou hollywoodskou hvězdou, se nedávno v ohromné dohodě upsal spolupráci s Warnery, pro něž by měl produkovat…
																<span class="span-more-small">(<a href="/novinky/8914-tom-cruise-si-zahraje-ve-filmu-alejandra-g-inarritu/">více</a>)</span>
															</p>
														</div>
													</div>
												</article>
											</div>
										</section>

										<section class="newslist-item">
											<div class="box-content">
												<article class="article article-news article-news-60">
													<figure class="article-img">
														<a href="/novinky/8890-brad-pitt-krouzi-kolem-desate-tarantinovky/">
															<img class="img" src="//image.pmgstatic.com/cache/resized/w100h132crop/files/images/news/article/168/588/168588240_y55ucc.jpg" loading="lazy" width="100" height="132" srcset="//image.pmgstatic.com/cache/resized/w100h132crop/files/images/news/article/168/588/168588240_y55ucc.jpg 1x, //image.pmgstatic.com/cache/resized/w200h264crop/files/images/news/article/168/588/168588240_y55ucc.jpg 2x, //image.pmgstatic.com/cache/resized/w300h396crop/files/images/news/article/168/588/168588240_y55ucc.jpg 3x" alt="Brad Pitt krouží kolem desáté tarantinovky">
														</a>
													</figure>
													<header class="article-header">
														<h3>
															<a href="/novinky/8890-brad-pitt-krouzi-kolem-desate-tarantinovky/">Brad Pitt krouží kolem desáté tarantinovky</a>
														</h3>
														<div class="info">
															<span class="date">02.02.2024</span>
														</div>
													</header>
													<div class="article-news-content article-content-justify">
														<div class="article-news-textshort">
															<p>
																Co se týče současné tvorby oblíbeného režiséra Quentina Tarantina, už nějakou dobu víme, že jeho desátým a podle tvůrcových vlastních slov také finálním filmem má být chystaný snímek pojmenovaný The…
																<span class="span-more-small">(<a href="/novinky/8890-brad-pitt-krouzi-kolem-desate-tarantinovky/">více</a>)</span>
															</p>
														</div>
													</div>
												</article>
											</div>
										</section>

								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>

		<div class="box box-banner-mobile box-banner-mobile-padding">
			<p class="box-banner-text">Reklama</p>
<div id="mobile_square_1" class="ad-pmg" style="height: 300px;"></div>
		</div>

		<div class="creator-filmography">
<section class="box">
	<header class="box-header">
		<h2>Režisér</h2>
		<div class="box-header-action">
			<form action="" method="get" data-form="get">
				<select name="sort" data-auto-submit-form="true" data-empty-value="year" id="frm-sort-careerBox-2-sort-sort"><option value="year">seřadit od nejnovějšího</option><option value="sort_average">seřadit od nejlepšího</option><option value="rating_count">seřadit podle počtu hodnocení</option></select>
			</form>
		</div>
	</header>
	<div class="box-content">
		<table class="no-column-borders">
			<tbody>
				<tr>
					<th colspan="2">Filmy</th>
				</tr>
						<tr>
							<td class="year">
								2025
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/1328972-the-movie-critic/" class="film-title-name">The Movie Critic</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2019
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/527699-tenkrat-v-hollywoodu/" class="film-title-name">Tenkrát v Hollywoodu</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2015
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/362228-osm-hroznych/" class="film-title-name">Osm hrozných</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2012
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/294824-nespoutany-django/" class="film-title-name">Nespoutaný Django</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2009
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/117077-hanebny-pancharti/" class="film-title-name">Hanebný pancharti</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2007
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/229384-grindhouse-auto-zabijak/" class="film-title-name">Grindhouse: Auto zabiják</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2005
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/178904-sin-city-mesto-hrichu/" class="film-title-name">Sin City - město hříchu</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2004
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/136304-kill-bill-2/" class="film-title-name">Kill Bill 2</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr class="tr-add-border">
							<td class="year">
								2003
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/43483-kill-bill/" class="film-title-name">Kill Bill</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr class="tr-banner-desktop">
							<td class="box box-banner" colspan="2">
								<p class="box-banner-text-center">Reklama</p>
								<div class="box-banner-336max">
<div id="large_rectangle_1" class="ad-pmg" style="height: 300px;"></div>
								</div>
							</td>
						</tr>
						<tr class="tr-banner-mobile">
							<td class="box box-banner-mobile" colspan="2">
								<p class="box-banner-text">Reklama</p>
<div id="mobile_square_2" class="ad-pmg" style="height: 300px;"></div>
							</td>
						</tr>
						<tr>
							<td class="year">
								1997
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/8850-jackie-brown/" class="film-title-name">Jackie Brown</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1995
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/7743-ctyri-pokoje/" class="film-title-name">Čtyři pokoje</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1994
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/8852-pulp-fiction-historky-z-podsveti/" class="film-title-name">Pulp Fiction: Historky z podsvětí</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1992
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/8853-gauneri/" class="film-title-name">Gauneři</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1987
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/117078-my-best-friend-s-birthday/" class="film-title-name">My Best Friend's Birthday</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1983
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/301498-love-birds-in-bondage/" class="film-title-name">Love Birds in Bondage</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
			</tbody>
		</table>
		<table class="no-column-borders">
			<tbody>
				<tr>
					<th colspan="2">Seriály</th>
				</tr>
						<tr>
							<td class="year">
								2005
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/69540-kriminalka-las-vegas/" class="film-title-name">Kriminálka Las Vegas</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
<tbody id="snippet-careerBox-2-episodes-69540-2005" data-ajax-append>
	<tr>
		<td class="year">&nbsp;</td>
		<td class="episode">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/69540-kriminalka-las-vegas/543094-obema-nohama-v-hrobe-ii/" class="film-title-name">Oběma nohama v hrobě II.</a> <span class="film-title-info"> <span class="info">(S05E25)</span></span></h3>		</td>
	</tr>
	<tr>
		<td class="year">&nbsp;</td>
		<td class="episode">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/69540-kriminalka-las-vegas/543093-obema-nohama-v-hrobe-i/" class="film-title-name">Oběma nohama v hrobě I.</a> <span class="film-title-info"> <span class="info">(S05E24)</span></span></h3>		</td>
	</tr>
</tbody>

<tbody id="snippet-careerBox-2-next-69540-2005">
</tbody>
						<tr>
							<td class="year">
								1995
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/69276-pohotovost/" class="film-title-name">Pohotovost</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
<tbody id="snippet-careerBox-2-episodes-69276-1995" data-ajax-append>
	<tr>
		<td class="year">&nbsp;</td>
		<td class="episode">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/69276-pohotovost/536646-materstvi/" class="film-title-name">Mateřství</a> <span class="film-title-info"> <span class="info">(S01E24)</span></span></h3>		</td>
	</tr>
</tbody>

<tbody id="snippet-careerBox-2-next-69276-1995">
</tbody>
			</tbody>
		</table>
		<table class="no-column-borders">
			<tbody>
				<tr>
					<th colspan="2">Krátkometrážní</th>
				</tr>
						<tr>
							<td class="year">
								1992
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1052345-reservoir-dogs-deleted-scenes/" class="film-title-name">Reservoir Dogs: Deleted Scenes</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1991
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1051715-reservoir-dogs-sundance-institute-1991-june-film-lab/" class="film-title-name">Reservoir Dogs: Sundance Institute 1991 June Film Lab</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
			</tbody>
		</table>
	</div>
</section>
<section class="box">
	<header class="box-header">
		<h2>Scenárista</h2>
		<div class="box-header-action">
			<form action="" method="get" data-form="get">
				<select name="sort" data-auto-submit-form="true" data-empty-value="year" id="frm-sort-careerBox-4-sort-sort"><option value="year">seřadit od nejnovějšího</option><option value="sort_average">seřadit od nejlepšího</option><option value="rating_count">seřadit podle počtu hodnocení</option></select>
			</form>
		</div>
	</header>
	<div class="box-content">
		<table class="no-column-borders">
			<tbody>
				<tr>
					<th colspan="2">Filmy</th>
				</tr>
						<tr>
							<td class="year">
								2025
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/1328972-the-movie-critic/" class="film-title-name">The Movie Critic</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2019
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/527699-tenkrat-v-hollywoodu/" class="film-title-name">Tenkrát v Hollywoodu</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2015
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/362228-osm-hroznych/" class="film-title-name">Osm hrozných</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2012
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/294824-nespoutany-django/" class="film-title-name">Nespoutaný Django</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2009
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/117077-hanebny-pancharti/" class="film-title-name">Hanebný pancharti</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2007
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/229384-grindhouse-auto-zabijak/" class="film-title-name">Grindhouse: Auto zabiják</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2004
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/136304-kill-bill-2/" class="film-title-name">Kill Bill 2</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2003
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/43483-kill-bill/" class="film-title-name">Kill Bill</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr class="tr-add-border">
							<td class="year">
								1997
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/8850-jackie-brown/" class="film-title-name">Jackie Brown</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr class="tr-banner-desktop">
							<td class="box box-banner" colspan="2">
								<p class="box-banner-text-center">Reklama</p>
								<div class="box-banner-336max">
<div id="large_rectangle_2" class="ad-pmg" style="height: 300px;"></div>
								</div>
							</td>
						</tr>
						<tr class="tr-banner-mobile">
							<td class="box box-banner-mobile" colspan="2">
								<p class="box-banner-text">Reklama</p>
<div id="mobile_square_3" class="ad-pmg" style="height: 300px;"></div>
							</td>
						</tr>
						<tr>
							<td class="year">
								1996
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/7744-od-soumraku-do-usvitu/" class="film-title-name">Od soumraku do úsvitu</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1995
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/7743-ctyri-pokoje/" class="film-title-name">Čtyři pokoje</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1994
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/8852-pulp-fiction-historky-z-podsveti/" class="film-title-name">Pulp Fiction: Historky z podsvětí</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1993
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/8289-pravdiva-romance/" class="film-title-name">Pravdivá romance</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1992
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/8853-gauneri/" class="film-title-name">Gauneři</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1987
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/117078-my-best-friend-s-birthday/" class="film-title-name">My Best Friend's Birthday</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1983
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/301498-love-birds-in-bondage/" class="film-title-name">Love Birds in Bondage</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
			</tbody>
		</table>
		<table class="no-column-borders">
			<tbody>
				<tr>
					<th colspan="2">Seriály</th>
				</tr>
						<tr>
							<td class="year">
								2023
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/1031794-bounty-law/" class="film-title-name">Bounty Law</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
			</tbody>
		</table>
		<table class="no-column-borders">
			<tbody>
				<tr>
					<th colspan="2">Krátkometrážní</th>
				</tr>
						<tr>
							<td class="year">
								1995
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/240544-dance-me-to-the-end-of-love/" class="film-title-name">Dance Me to the End of Love</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1992
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1052345-reservoir-dogs-deleted-scenes/" class="film-title-name">Reservoir Dogs: Deleted Scenes</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1991
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1051715-reservoir-dogs-sundance-institute-1991-june-film-lab/" class="film-title-name">Reservoir Dogs: Sundance Institute 1991 June Film Lab</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
			</tbody>
		</table>
	</div>
</section>
<section class="box">
	<header class="box-header">
		<h2>Herec</h2>
		<div class="box-header-action">
			<form action="" method="get" data-form="get">
				<select name="sort" data-auto-submit-form="true" data-empty-value="year" id="frm-sort-careerBox-1-sort-sort"><option value="year">seřadit od nejnovějšího</option><option value="sort_average">seřadit od nejlepšího</option><option value="rating_count">seřadit podle počtu hodnocení</option></select>
			</form>
		</div>
	</header>
	<div class="box-content">
		<table class="no-column-borders">
			<tbody>
				<tr>
					<th colspan="2">Filmy</th>
				</tr>
						<tr>
							<td class="year">
								2019
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/527699-tenkrat-v-hollywoodu/" class="film-title-name">Tenkrát v Hollywoodu</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2015
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/362228-osm-hroznych/" class="film-title-name">Osm hrozných</a> <span class="film-title-info"> - vypravěč</span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2014
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/321529-je-proste-bajecna/" class="film-title-name">Je prostě báječná</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2012
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/294824-nespoutany-django/" class="film-title-name">Nespoutaný Django</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2009
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/117077-hanebny-pancharti/" class="film-title-name">Hanebný pancharti</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2007
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/226028-denik-mrtvych/" class="film-title-name">Deník mrtvých</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/229384-grindhouse-auto-zabijak/" class="film-title-name">Grindhouse: Auto zabiják</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/221616-grindhouse-planeta-teror/" class="film-title-name">Grindhouse: Planeta Teror</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr class="tr-add-border">
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/229980-nemilosrdny-strelec/" class="film-title-name">Nemilosrdný střelec</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr class="tr-banner-desktop">
							<td class="box box-banner" colspan="2">
								<p class="box-banner-text-center">Reklama</p>
								<div class="box-banner-336max">
<div id="large_rectangle_3" class="ad-pmg" style="height: 300px;"></div>
								</div>
							</td>
						</tr>
						<tr class="tr-banner-mobile">
							<td class="box box-banner-mobile" colspan="2">
								<p class="box-banner-text">Reklama</p>
<div id="mobile_square_4" class="ad-pmg" style="height: 300px;"></div>
							</td>
						</tr>
						<tr>
							<td class="year">
								2005
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/183558-the-muppets-wizard-of-oz/" class="film-title-name">The Muppets' Wizard of Oz</a> <span class="film-title-info"> <span class="info">(TV film)</span></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2004
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/136304-kill-bill-2/" class="film-title-name">Kill Bill 2</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/44485-planet-of-the-pitts/" class="film-title-name">Planet of the Pitts</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2003
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/43483-kill-bill/" class="film-title-name">Kill Bill</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2000
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/13933-maly-nicky-satan-junior/" class="film-title-name">Malý Nicky - Satan Junior</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1998
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/34703-god-said-ha/" class="film-title-name">God Said, 'Ha!'</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1997
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/8850-jackie-brown/" class="film-title-name">Jackie Brown</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1996
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/10527-krvava-romance/" class="film-title-name">Krvavá romance</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/7744-od-soumraku-do-usvitu/" class="film-title-name">Od soumraku do úsvitu</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/5802-sex-po-telefonu/" class="film-title-name">Sex po telefonu</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1995
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/7741-desperado/" class="film-title-name">Desperado</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/22755-johnny-zapina-radio/" class="film-title-name">Johnny zapíná rádio</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/7743-ctyri-pokoje/" class="film-title-name">Čtyři pokoje</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1994
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/8852-pulp-fiction-historky-z-podsveti/" class="film-title-name">Pulp Fiction: Historky z podsvětí</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/11131-somebody-to-love/" class="film-title-name">Somebody to Love</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/22753-vyspi-se-se-mnou/" class="film-title-name">Vyspi se se mnou</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1992
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/29644-eddie-presley/" class="film-title-name">Eddie Presley</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/8853-gauneri/" class="film-title-name">Gauneři</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1989
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/179086-vegetables/" class="film-title-name">Vegetables</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1987
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/117078-my-best-friend-s-birthday/" class="film-title-name">My Best Friend's Birthday</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1983
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/301498-love-birds-in-bondage/" class="film-title-name">Love Birds in Bondage</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
			</tbody>
		</table>
		<table class="no-column-borders">
			<tbody>
				<tr>
					<th colspan="2">Seriály</th>
				</tr>
						<tr>
							<td class="year">
								2022
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1110295-super-pumped-valka-o-uber/" class="film-title-name">Super Pumped: Válka o Uber</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
<tbody id="snippet-careerBox-1-episodes-1110295-2022" data-ajax-append>
	<tr>
		<td class="year">&nbsp;</td>
		<td class="episode">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1110295-super-pumped-valka-o-uber/1110298-x-do-x/" class="film-title-name">X do X</a> <span class="film-title-info"> <span class="info">(E02)</span></span></h3>		</td>
	</tr>
	<tr>
		<td class="year">&nbsp;</td>
		<td class="episode">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1110295-super-pumped-valka-o-uber/1110297-rust-nebo-zemrit/" class="film-title-name">Růst nebo zemřít</a> <span class="film-title-info"> <span class="info">(E01)</span></span></h3>		</td>
	</tr>
</tbody>

<tbody id="snippet-careerBox-1-next-1110295-2022">
</tbody>
						<tr>
							<td class="year">
								2005
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/189822-kacer-dodgers/" class="film-title-name">Kačer Dodgers</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
<tbody id="snippet-careerBox-1-episodes-189822-2005" data-ajax-append>
	<tr>
		<td class="year">&nbsp;</td>
		<td class="episode">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/189822-kacer-dodgers/1479223-mistr-moloch-zvykackova-loupez/" class="film-title-name">Mistr moloch / Žvýkačková loupež</a> <span class="film-title-info"> <span class="info">(S03E11)</span></span></h3>		</td>
	</tr>
</tbody>

<tbody id="snippet-careerBox-1-next-189822-2005">
</tbody>
						<tr>
							<td class="year">
								2004
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/70285-alias/" class="film-title-name">Alias</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
<tbody id="snippet-careerBox-1-episodes-70285-2004" data-ajax-append>
	<tr>
		<td class="year">&nbsp;</td>
		<td class="episode">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/70285-alias/540705-po-seste/" class="film-title-name">Po šesté</a> <span class="film-title-info"> <span class="info">(S03E13)</span></span></h3>		</td>
	</tr>
	<tr>
		<td class="year">&nbsp;</td>
		<td class="episode">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/70285-alias/540703-odhaleni/" class="film-title-name">Odhalení</a> <span class="film-title-info"> <span class="info">(S03E11)</span></span></h3>		</td>
	</tr>
</tbody>

<tbody id="snippet-careerBox-1-next-70285-2004">
</tbody>
						<tr>
							<td class="year">
								2002
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/70285-alias/" class="film-title-name">Alias</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
<tbody id="snippet-careerBox-1-episodes-70285-2002" data-ajax-append>
	<tr>
		<td class="year">&nbsp;</td>
		<td class="episode">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/70285-alias/540659-pouzdro-2-cast/" class="film-title-name">Pouzdro - 2. část</a> <span class="film-title-info"> <span class="info">(S01E13)</span></span></h3>		</td>
	</tr>
	<tr>
		<td class="year">&nbsp;</td>
		<td class="episode">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/70285-alias/540658-pouzdro-1-cast/" class="film-title-name">Pouzdro - 1. část</a> <span class="film-title-info"> <span class="info">(S01E12)</span></span></h3>		</td>
	</tr>
</tbody>

<tbody id="snippet-careerBox-1-next-70285-2002">
</tbody>
						<tr>
							<td class="year">
								1994
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/75283-all-american-girl/" class="film-title-name">All-American Girl</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1990
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/69398-the-golden-girls/" class="film-title-name">The Golden Girls</a> <span class="film-title-info"> - <span title="archivní záběry">a.z.</span></span></h3>							</td>
						</tr>
<tbody id="snippet-careerBox-1-episodes-69398-1990" data-ajax-append>
	<tr>
		<td class="year">&nbsp;</td>
		<td class="episode">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/69398-the-golden-girls/725371-prijizdi-prezident-2-cast/" class="film-title-name">Přijíždí prezident! – 2. část</a> <span class="film-title-info"> - <span title="archivní záběry">a.z.</span> <span class="info">(S05E26)</span></span></h3>		</td>
	</tr>
</tbody>

<tbody id="snippet-careerBox-1-next-69398-1990">
</tbody>
						<tr>
							<td class="year">
								1988
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/69398-the-golden-girls/" class="film-title-name">The Golden Girls</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
<tbody id="snippet-careerBox-1-episodes-69398-1988" data-ajax-append>
	<tr>
		<td class="year">&nbsp;</td>
		<td class="episode">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/69398-the-golden-girls/725306-sophiina-svatba-1-cast/" class="film-title-name">Sophiina svatba, 1. část</a> <span class="film-title-info"> <span class="info">(S04E06)</span></span></h3>		</td>
	</tr>
</tbody>

<tbody id="snippet-careerBox-1-next-69398-1988">
</tbody>
			</tbody>
		</table>
		<table class="no-column-borders">
			<tbody>
				<tr>
					<th colspan="2">Dokumentární</th>
				</tr>
						<tr>
							<td class="year">
								2024
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/1546828-american-badass-a-michael-madsen-retrospective/" class="film-title-name">American Badass: A Michael Madsen Retrospective</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2023
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/1386687-burt-reynolds-the-last-interview/" class="film-title-name">Burt Reynolds: The Last Interview</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/1372528-cannes-bez-obalu/" class="film-title-name">Cannes bez obalu</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1385432-sly/" class="film-title-name">Sly</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/1427677-the-moviemakers-tarantino/" class="film-title-name">The Moviemakers: Tarantino</a> <span class="film-title-info"> - <span title="archivní záběry">a.z.</span></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2022
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1228996-sergio-leone-ital-ktery-vynalezl-ameriku/" class="film-title-name">Sergio Leone: Ital, který vynalezl Ameriku</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2021
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1055777-dark-side-of-the-90s/" class="film-title-name">Dark Side of the '90s</a> <span class="film-title-info"> <span class="info">(seriál)</span> - <span title="archivní záběry">a.z.</span></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1078235-django-django/" class="film-title-name">Django &amp; Django</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1052215-ennio/" class="film-title-name">Ennio</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/662995-filmarske-legendy/" class="film-title-name">Filmařské legendy</a> <span class="film-title-info"> <span class="info">(seriál)</span> - <span title="archivní záběry">a.z.</span></span></h3>							</td>
						</tr>
<tbody id="snippet-careerBox-1-episodes-662995-2021" data-ajax-append>
	<tr>
		<td class="year">&nbsp;</td>
		<td class="episode">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/662995-filmarske-legendy/1476279-quentin-tarantino/" class="film-title-name">Quentin Tarantino</a> <span class="film-title-info"> - <span title="archivní záběry">a.z.</span> <span class="info">(S06E06)</span></span></h3>		</td>
	</tr>
</tbody>

<tbody id="snippet-careerBox-1-next-662995-2021">
</tbody>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1029207-michael-cimino/" class="film-title-name">Michael Cimino</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2020
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/661760-eli-roth-historie-hororu/" class="film-title-name">Eli Roth: Historie hororu</a> <span class="film-title-info"> <span class="info">(seriál)</span></span></h3>							</td>
						</tr>
<tbody id="snippet-careerBox-1-episodes-661760-2020" data-ajax-append>
	<tr>
		<td class="year">&nbsp;</td>
		<td class="episode">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/661760-eli-roth-historie-hororu/911661-monsters/" class="film-title-name">Monsters</a> <span class="film-title-info"> <span class="info">(S02E02)</span></span></h3>		</td>
	</tr>
</tbody>

<tbody id="snippet-careerBox-1-next-661760-2020">
</tbody>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/830241-jay-sebring-cutting-to-the-truth/" class="film-title-name">Jay Sebring....Cutting to the Truth</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2019
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/903330-bob-richardson-for-the-love-of-the-film/" class="film-title-name">Bob Richardson: For the Love of the Film</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/764695-life-as-a-b-movie-piero-vivarelli/" class="film-title-name">Life As a B-Movie: Piero Vivarelli</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/777500-qt8-the-first-eight/" class="film-title-name">QT8: The First Eight</a> <span class="film-title-info"> - <span title="archivní záběry">a.z.</span></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/903332-quentin-tarantino-s-love-letter-to-hollywood/" class="film-title-name">Quentin Tarantino's Love Letter to Hollywood</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/903335-restoring-hollywood-the-production-design/" class="film-title-name">Restoring Hollywood: The Production Design</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/903342-shop-talk-the-cars-of-1969/" class="film-title-name">Shop Talk: The Cars of 1969</a> <span class="film-title-info"> - <span title="archivní záběry">a.z.</span></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/903338-the-fashion-of-1969/" class="film-title-name">The Fashion of 1969</a> <span class="film-title-info"> - <span title="archivní záběry">a.z.</span></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2018
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/661760-eli-roth-historie-hororu/" class="film-title-name">Eli Roth: Historie hororu</a> <span class="film-title-info"> <span class="info">(seriál)</span></span></h3>							</td>
						</tr>
<tbody id="snippet-careerBox-1-episodes-661760-2018" data-ajax-append>
	<tr>
		<td class="year">&nbsp;</td>
		<td class="episode">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/661760-eli-roth-historie-hororu/734903-upiri/" class="film-title-name">Upíři</a> <span class="film-title-info"> <span class="info">(S01E06)</span></span></h3>		</td>
	</tr>
	<tr>
		<td class="year">&nbsp;</td>
		<td class="episode">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/661760-eli-roth-historie-hororu/734902-killer-creatures/" class="film-title-name">Killer Creatures</a> <span class="film-title-info"> <span class="info">(S01E05)</span></span></h3>		</td>
	</tr>
	<tr>
		<td class="year">&nbsp;</td>
		<td class="episode">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/661760-eli-roth-historie-hororu/734901-demoni/" class="film-title-name">Démoni</a> <span class="film-title-info"> <span class="info">(S01E04)</span></span></h3>		</td>
	</tr>
</tbody>

<tbody id="snippet-careerBox-1-next-661760-2018">
	<tr>
		<td class="year">&nbsp;</td>
		<td class="more-episode" colspan="2"><a href="/tvurce/2120-quentin-tarantino/prehled/?careerBox-1-year=2018&amp;careerBox-1-creatorTypeId=1&amp;careerBox-1-rootId=661760&amp;careerBox-1-page=2&amp;careerBox-1-sort=year&amp;do=careerBox-1-more" class="ajax">více epizod (3)</a></td>
	</tr>
</tbody>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/650728-tak-pravila-pauline-kael/" class="film-title-name">Tak pravila Pauline Kael</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/649748-velky-buster-keaton/" class="film-title-name">Velký Buster Keaton</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/650599-why-are-we-creative/" class="film-title-name">Why Are We Creative?</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/649804-william-friedkin-bez-cenzury/" class="film-title-name">William Friedkin - bez cenzury</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2017
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/1199297-behind-the-scenes/" class="film-title-name">Behind the Scenes</a> <span class="film-title-info"> - <span title="archivní záběry">a.z.</span></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2016
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/1182585-tourner-pour-vivre/" class="film-title-name">Tourner pour vivre</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2015
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/986292-la-legende-de-la-palme-d-or/" class="film-title-name">La Légende de la palme d'or</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2012
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/63695-tarantino-xx-20-years-of-filmmaking/" class="film-title-name">Tarantino XX - 20 Years of Filmmaking</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2011
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/298515-cormanuv-svet/" class="film-title-name">Cormanův svět</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/294287-nejlepsi-film-jaky-byl-kdy-prodan/" class="film-title-name">Nejlepší film, jaký byl kdy prodán</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/316691-nightmare-factory/" class="film-title-name">Nightmare Factory</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2010
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/278607-hollywood-don-t-surf/" class="film-title-name">Hollywood Don't Surf!</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2009
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/132965-michel-ciment-umeni-vnimat-film/" class="film-title-name">Michel Ciment, umění vnímat film</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2008
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/971372-a-conversation-with-enzo-castellari-and-quentin-tarantino/" class="film-title-name">A Conversation with Enzo Castellari and Quentin Tarantino</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/230164-dead-on-the-life-and-cinema-of-george-a-romero/" class="film-title-name">Dead On: The Life and Cinema of George A. Romero</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/253428-kam-se-hrabe-hollywood/" class="film-title-name">Kam se hrabe Hollywood</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/277603-starz-inside-fantastic-flesh/" class="film-title-name">Starz Inside: Fantastic Flesh</a> <span class="film-title-info"> <span class="info">(TV film)</span></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2007
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/249215-manufacturing-dissent/" class="film-title-name">Manufacturing Dissent</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2006
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/240070-50-films-to-see-before-you-die/" class="film-title-name">50 Films to See Before You Die</a> <span class="film-title-info"> <span class="info">(TV film)</span></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/228495-back-to-the-well-clerks-ii/" class="film-title-name">Back to the Well: Clerks II</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2005
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/260481-budd-boetticher-a-man-can-do-that/" class="film-title-name">Budd Boetticher: A Man Can Do That</a> <span class="film-title-info"> <span class="info">(TV film)</span></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/537615-l-hebdo-cinema/" class="film-title-name">L'Hebdo cinéma</a> <span class="film-title-info"> <span class="info">(seriál)</span></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/213569-make-your-own-damn-movie/" class="film-title-name">Make Your Own Damn Movie!</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/202388-tsunami-aid-a-concert-of-hope/" class="film-title-name">Tsunami Aid: A Concert of Hope</a> <span class="film-title-info"> <span class="info">(koncert)</span></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2004
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/61416-pulp-fiction-on-a-dime-a-10th-anniversary-retrospect/" class="film-title-name">'Pulp Fiction' on a Dime: A 10th Anniversary Retrospect</a> <span class="film-title-info"> <span class="info">(TV film)</span></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/282173-celluloid-horror/" class="film-title-name">Celluloid Horror</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/135712-dvoji-vyzva/" class="film-title-name">Dvojí výzva</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/218773-john-travolta-the-inside-story/" class="film-title-name">John Travolta: The Inside Story</a> <span class="film-title-info"> <span class="info">(TV film)</span></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/168403-kanal-z-velkolepa-posedlost/" class="film-title-name">Kanál Z: Velkolepá posedlost</a> <span class="film-title-info"> <span class="info">(TV film)</span></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/366670-the-anti-hero-s-journey/" class="film-title-name">The Anti-Hero's Journey</a> <span class="film-title-info"> - <span title="archivní záběry">a.z.</span></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/221765-the-cutting-edge-the-magic-of-movie-editing/" class="film-title-name">The Cutting Edge: The Magic of Movie Editing</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/237922-the-making-of-kill-bill-volume-2/" class="film-title-name">The Making of 'Kill Bill: Volume 2'</a> <span class="film-title-info"> <span class="info">(TV film)</span></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2003
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/218772-biography-john-travolta/" class="film-title-name">Biography: John Travolta</a> <span class="film-title-info"> <span class="info">(TV film)</span></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/191632-the-making-of-kill-bill/" class="film-title-name">The Making of 'Kill Bill'</a> <span class="film-title-info"> <span class="info">(TV film)</span></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2002
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/43181-all-the-love-you-cannes/" class="film-title-name">All the Love You Cannes!</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/41162-baadasssss-cinema/" class="film-title-name">Baadasssss Cinema</a> <span class="film-title-info"> <span class="info">(TV film)</span></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/238537-filmove-zanry/" class="film-title-name">Filmové žánry</a> <span class="film-title-info"> <span class="info">(seriál)</span></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/240564-jackie-brown-how-it-went-down/" class="film-title-name">Jackie Brown: How It Went Down</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/74950-pulp-fiction-the-facts/" class="film-title-name">Pulp Fiction: The Facts</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/135022-sundance-20/" class="film-title-name">Sundance 20</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/135344-the-class-of-92/" class="film-title-name">The Class of '92</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2001
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/134005-die-zehn-gebote-der-kreativitat/" class="film-title-name">Die zehn Gebote der Kreativität</a> <span class="film-title-info"> <span class="info">(TV film)</span></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/623658-hudba-stribrneho-platna/" class="film-title-name">Hudba stříbrného plátna</a> <span class="film-title-info"> <span class="info">(seriál)</span></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/88886-sergio-leone/" class="film-title-name">Sergio Leone</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2000
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/167441-hollywood-miri-do-pekel/" class="film-title-name">Hollywood míří do pekel</a> <span class="film-title-info"> <span class="info">(TV film)</span></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1999
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/117948-a-e-biography-samuel-l-jackson/" class="film-title-name">A&amp;E Biography: Samuel L. Jackson</a> <span class="film-title-info"> <span class="info">(TV film)</span></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/45752-christopher-jones-the-e-true-hollywood-story/" class="film-title-name">Christopher Jones: The E! True Hollywood Story</a> <span class="film-title-info"> <span class="info">(TV film)</span></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/43760-forever-hollywood/" class="film-title-name">Forever Hollywood</a> <span class="film-title-info"> <span class="info">(TV film)</span></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/41175-intimate-portrait-pam-grier/" class="film-title-name">Intimate Portrait: Pam Grier</a> <span class="film-title-info"> <span class="info">(TV film)</span></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1998
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/69644-jackie-chan-my-story/" class="film-title-name">Jackie Chan: My Story</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1997
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/34702-full-tilt-boogie/" class="film-title-name">Full Tilt Boogie</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/35699-off-the-menu-the-last-days-of-chasen-s/" class="film-title-name">Off the Menu: The Last Days of Chasen's</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1996
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/45538-the-typewriter-the-rifle-the-movie-camera/" class="film-title-name">The Typewriter, the Rifle &amp; the Movie Camera</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1995
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/73245-american-cinema/" class="film-title-name">American Cinema</a> <span class="film-title-info"> <span class="info">(seriál)</span></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/45751-the-anatomy-of-horror/" class="film-title-name">The Anatomy of Horror</a> <span class="film-title-info"> <span class="info">(TV film)</span></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1993
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/313217-cinefile-made-in-the-usa/" class="film-title-name">Cinefile: Made in the USA</a> <span class="film-title-info"> <span class="info">(TV film)</span></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1990
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/1110197-intimate-portrait/" class="film-title-name">Intimate Portrait</a> <span class="film-title-info"> <span class="info">(seriál)</span></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1987
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/184458-biography/" class="film-title-name">Biography</a> <span class="film-title-info"> <span class="info">(seriál)</span></span></h3>							</td>
						</tr>
			</tbody>
		</table>
		<table class="no-column-borders">
			<tbody>
				<tr>
					<th colspan="2">Krátkometrážní</th>
				</tr>
						<tr>
							<td class="year">
								2009
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/265176-pycha-naroda/" class="film-title-name">Pýcha národa</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1995
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/240544-dance-me-to-the-end-of-love/" class="film-title-name">Dance Me to the End of Love</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1994
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/34701-the-coriolis-effect/" class="film-title-name">The Coriolis Effect</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1991
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1051715-reservoir-dogs-sundance-institute-1991-june-film-lab/" class="film-title-name">Reservoir Dogs: Sundance Institute 1991 June Film Lab</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
			</tbody>
		</table>
	</div>
</section>
<section class="box">
	<header class="box-header">
		<h2>Producent</h2>
		<div class="box-header-action">
			<form action="" method="get" data-form="get">
				<select name="sort" data-auto-submit-form="true" data-empty-value="year" id="frm-sort-careerBox-7-sort-sort"><option value="year">seřadit od nejnovějšího</option><option value="sort_average">seřadit od nejlepšího</option><option value="rating_count">seřadit podle počtu hodnocení</option></select>
			</form>
		</div>
	</header>
	<div class="box-content">
		<table class="no-column-borders">
			<tbody>
				<tr>
					<th colspan="2">Filmy</th>
				</tr>
						<tr>
							<td class="year">
								2025
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/1328972-the-movie-critic/" class="film-title-name">The Movie Critic</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2019
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/527699-tenkrat-v-hollywoodu/" class="film-title-name">Tenkrát v Hollywoodu</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2007
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/229384-grindhouse-auto-zabijak/" class="film-title-name">Grindhouse: Auto zabiják</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/221616-grindhouse-planeta-teror/" class="film-title-name">Grindhouse: Planeta Teror</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1996
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/7744-od-soumraku-do-usvitu/" class="film-title-name">Od soumraku do úsvitu</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1987
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/117078-my-best-friend-s-birthday/" class="film-title-name">My Best Friend's Birthday</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
			</tbody>
		</table>
	</div>
</section>
<section class="box">
	<header class="box-header">
		<h2>Kameraman</h2>
		<div class="box-header-action">
			<form action="" method="get" data-form="get">
				<select name="sort" data-auto-submit-form="true" data-empty-value="year" id="frm-sort-careerBox-6-sort-sort"><option value="year">seřadit od nejnovějšího</option><option value="sort_average">seřadit od nejlepšího</option><option value="rating_count">seřadit podle počtu hodnocení</option></select>
			</form>
		</div>
	</header>
	<div class="box-content">
		<table class="no-column-borders">
			<tbody>
				<tr>
					<th colspan="2">Filmy</th>
				</tr>
						<tr>
							<td class="year">
								2007
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/229384-grindhouse-auto-zabijak/" class="film-title-name">Grindhouse: Auto zabiják</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
			</tbody>
		</table>
		<table class="no-column-borders">
			<tbody>
				<tr>
					<th colspan="2">Krátkometrážní</th>
				</tr>
						<tr>
							<td class="year">
								1991
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1051715-reservoir-dogs-sundance-institute-1991-june-film-lab/" class="film-title-name">Reservoir Dogs: Sundance Institute 1991 June Film Lab</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
			</tbody>
		</table>
	</div>
</section>
<section class="box">
	<header class="box-header">
		<h2>Střihač</h2>
		<div class="box-header-action">
			<form action="" method="get" data-form="get">
				<select name="sort" data-auto-submit-form="true" data-empty-value="year" id="frm-sort-careerBox-8-sort-sort"><option value="year">seřadit od nejnovějšího</option><option value="sort_average">seřadit od nejlepšího</option><option value="rating_count">seřadit podle počtu hodnocení</option></select>
			</form>
		</div>
	</header>
	<div class="box-content">
		<table class="no-column-borders">
			<tbody>
				<tr>
					<th colspan="2">Filmy</th>
				</tr>
						<tr>
							<td class="year">
								1987
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/117078-my-best-friend-s-birthday/" class="film-title-name">My Best Friend's Birthday</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
			</tbody>
		</table>
		<table class="no-column-borders">
			<tbody>
				<tr>
					<th colspan="2">Krátkometrážní</th>
				</tr>
						<tr>
							<td class="year">
								1991
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1051715-reservoir-dogs-sundance-institute-1991-june-film-lab/" class="film-title-name">Reservoir Dogs: Sundance Institute 1991 June Film Lab</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
			</tbody>
		</table>
	</div>
</section>
<section class="box">
	<header class="box-header">
		<h2>Účinkující</h2>
		<div class="box-header-action">
			<form action="" method="get" data-form="get">
				<select name="sort" data-auto-submit-form="true" data-empty-value="year" id="frm-sort-careerBox-14-sort-sort"><option value="year">seřadit od nejnovějšího</option><option value="sort_average">seřadit od nejlepšího</option><option value="rating_count">seřadit podle počtu hodnocení</option></select>
			</form>
		</div>
	</header>
	<div class="box-content">
		<table class="no-column-borders">
			<tbody>
				<tr>
					<th colspan="2">Pořady</th>
				</tr>
						<tr>
							<td class="year">
								2023
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1294284-80th-golden-globe-awards/" class="film-title-name">80th Golden Globe Awards</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2022
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/1165725-club-random-with-bill-maher/" class="film-title-name">Club Random with Bill Maher</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/1410244-who-s-talking-to-chris-wallace/" class="film-title-name">Who's Talking to Chris Wallace?</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2020
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/809546-26th-annual-screen-actors-guild-awards/" class="film-title-name">26th Annual Screen Actors Guild Awards</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/804712-77th-golden-globe-awards/" class="film-title-name">77th Golden Globe Awards</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/812823-oscar-2020/" class="film-title-name">Oscar 2020</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2018
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/1205475-front-row-flynn/" class="film-title-name">Front Row Flynn</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/1293890-hollywood-insider/" class="film-title-name">Hollywood Insider</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2016
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/1425727-nerdrotic/" class="film-title-name">Nerdrotic</a> <span class="film-title-info"> - <span title="archivní záběry">a.z.</span></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/417711-zlaty-globus-2016/" class="film-title-name">Zlatý Glóbus 2016</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2015
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/1205208-close-up-with-the-hollywood-reporter/" class="film-title-name">Close Up with the Hollywood Reporter</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/399286-the-late-show-with-stephen-colbert/" class="film-title-name">The Late Show with Stephen Colbert</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2013
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/330165-85-annual-academy-awards/" class="film-title-name">85. Annual Academy Awards</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/1108736-the-big-interview-with-dan-rather/" class="film-title-name">The Big Interview with Dan Rather</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/330506-zlaty-globus-2013/" class="film-title-name">Zlatý Glóbus 2013</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2012
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/1470604-msn-exclusives/" class="film-title-name">MSN Exclusives</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2011
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/310670-scream-awards/" class="film-title-name">Scream Awards</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2010
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/1585163-15th-annual-critics-choice-movie-awards/" class="film-title-name">15th Annual Critics' Choice Movie Awards</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/1204619-41st-naacp-image-awards/" class="film-title-name">41st NAACP Image Awards</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/273290-82-annual-academy-awards/" class="film-title-name">82. Annual Academy Awards</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/272565-grammy-awards-2010/" class="film-title-name">Grammy Awards 2010</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/272436-zlaty-globus-2010/" class="film-title-name">Zlatý Glóbus 2010</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2009
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/1235798-live-from-studio-five/" class="film-title-name">Live from Studio Five</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/318371-spike-s-guys-choice/" class="film-title-name">Spike's Guys Choice</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/266504-the-jay-leno-show/" class="film-title-name">The Jay Leno Show</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/508727-the-joe-rogan-experience/" class="film-title-name">The Joe Rogan Experience</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/262013-the-tonight-show-with-conan-o-brien/" class="film-title-name">The Tonight Show with Conan O'Brien</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2008
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/251217-warren-beatty-pocta-za-celozivotni-dilo/" class="film-title-name">Warren Beatty - pocta za celoživotní dílo</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/382788-world-s-dumbest/" class="film-title-name">World's Dumbest</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2007
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/255168-scream-awards-2007/" class="film-title-name">Scream Awards 2007</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/457858-the-big-fat-anniversary-quiz/" class="film-title-name">The Big Fat Anniversary Quiz</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/291145-xpose/" class="film-title-name">Xposé</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2005
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/252507-2005-mtv-movie-awards/" class="film-title-name">2005 MTV Movie Awards</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/1189873-entertainment-tonight-canada/" class="film-title-name">Entertainment Tonight Canada</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/230147-nocni-show-craiga-fergusona/" class="film-title-name">Noční Show Craiga Fergusona</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/259548-show-tyry-banksove/" class="film-title-name">Show Tyry Banksové</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/180031-the-57th-annual-primetime-emmy-awards/" class="film-title-name">The 57th Annual Primetime Emmy Awards</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2004
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/1238462-2004-mtv-movie-awards/" class="film-title-name">2004 MTV Movie Awards</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/241465-le-grand-journal-de-canal/" class="film-title-name">Le Grand Journal de Canal+</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/231940-on-air-with-ryan-seacrest/" class="film-title-name">On-Air with Ryan Seacrest</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/279610-tavis-smiley/" class="film-title-name">Tavis Smiley</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/1099123-the-46th-annual-grammy-awards/" class="film-title-name">The 46th Annual Grammy Awards</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2003
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/30240-4pop/" class="film-title-name">4Pop</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/118656-jimmy-kimmel-live/" class="film-title-name">Jimmy Kimmel Live!</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/118155-real-time-with-bill-maher/" class="film-title-name">Real Time with Bill Maher</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/1465373-redbar/" class="film-title-name">Redbar</a> <span class="film-title-info"> - <span title="archivní záběry">a.z.</span></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2002
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/107000-american-idol/" class="film-title-name">American Idol</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/281563-eigo-de-shabera-night/" class="film-title-name">Eigo de shabera-night</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/233351-last-call-with-carson-daly/" class="film-title-name">Last Call with Carson Daly</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2001
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/134006-friday-night-with-jonathan-ross/" class="film-title-name">Friday Night with Jonathan Ross</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1997
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/428229-tracks/" class="film-title-name">Tracks</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1996
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/1272530-2nd-annual-screen-actors-guild-awards/" class="film-title-name">2nd Annual Screen Actors Guild Awards</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/1239098-el-magacine/" class="film-title-name">El magacine</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/1336367-mundo-vip/" class="film-title-name">Mundo VIP</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/216372-smap-x-smap/" class="film-title-name">Smap x Smap</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/1193802-tfi-friday/" class="film-title-name">TFI Friday</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/72574-the-american-film-institute-salute-to-clint-eastwood/" class="film-title-name">The American Film Institute Salute to Clint Eastwood</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1995
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/1231791-1995-mtv-movie-awards/" class="film-title-name">1995 MTV Movie Awards</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/453053-e-zive-z-cerveneho-koberce/" class="film-title-name">E! Živě z červeného koberce</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/1257771-the-52nd-annual-golden-globe-awards/" class="film-title-name">The 52nd Annual Golden Globe Awards</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1994
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/98047-extra/" class="film-title-name">Extra</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/192041-howard-stern/" class="film-title-name">Howard Stern</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/1332013-wgn-morning-news/" class="film-title-name">WGN Morning News</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1993
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/75521-nocni-show-conana-o-briena/" class="film-title-name">Noční show Conana O'Briena</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/150118-nocni-show-davida-lettermana/" class="film-title-name">Noční show Davida Lettermana</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1992
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/413801-gomorron/" class="film-title-name">Gomorron</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								&nbsp;
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/157303-nocni-show-jaye-lenoe/" class="film-title-name">Noční Show  Jaye Lenoe</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1991
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/321869-charlie-rose/" class="film-title-name">Charlie Rose</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1985
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/253542-larry-king-live/" class="film-title-name">Larry King Live</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1984
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/390931-cinema-3/" class="film-title-name">Cinema 3</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1982
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/457110-waratte-iitomo/" class="film-title-name">Waratte iitomo!</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1981
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/98209-entertainment-tonight/" class="film-title-name">Entertainment Tonight</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1979
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/1089648-cbs-news-sunday-morning/" class="film-title-name">CBS News Sunday Morning</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1976
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/422879-la-nuit-des-cesars/" class="film-title-name">La Nuit des Césars</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								1975
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/231480-saturday-night-live/" class="film-title-name">Saturday Night Live</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
			</tbody>
		</table>
	</div>
</section>
		</div>

					<section class="box box-borderless box-noborderbottom box-margintop creator-news-mobil">
						<header class="box-header">
							<h2>Související novinky</h2>
							<div class="box-header-action">
								<a href="/novinky/?creatorId=2120" class="button">více</a>
							</div>
						</header>
						<div class="box-content">
							<div class="newslist-content">
								<div class="newslist newslist-creator">
										<section class="newslist-item">
											<div class="box-content">
												<article class="article article-news article-news-60">
													<figure class="article-img">
														<a href="/novinky/9163-margaret-qualley-bude-viktorianska-psychopatka/">
															<img class="img" src="//image.pmgstatic.com/cache/resized/w100h132crop/files/images/news/article/169/455/169455955_v7t0m6.jpg" loading="lazy" width="100" height="132" srcset="//image.pmgstatic.com/cache/resized/w100h132crop/files/images/news/article/169/455/169455955_v7t0m6.jpg 1x, //image.pmgstatic.com/cache/resized/w200h264crop/files/images/news/article/169/455/169455955_v7t0m6.jpg 2x, //image.pmgstatic.com/cache/resized/w300h396crop/files/images/news/article/169/455/169455955_v7t0m6.jpg 3x" alt="Margaret Qualley bude viktoriánská psychopatka">
														</a>
													</figure>
													<header class="article-header">
														<h3>
															<a href="/novinky/9163-margaret-qualley-bude-viktorianska-psychopatka/">Margaret Qualley bude viktoriánská psychopatka</a>
														</h3>
														<div class="info">
															<span class="date">31.10.2024</span>
														</div>
													</header>
													<div class="article-news-content article-content-justify">
														<div class="article-news-textshort">
															<p>
																Jen málokterá mladá herečka má v současném Hollywoodu tak dobrou výchozí pozici jako Margaret Qualley. Svou kariéru odstartovala menší roličkou v buddy komedii Správní chlapi, posléze se…
																<span class="span-more-small">(<a href="/novinky/9163-margaret-qualley-bude-viktorianska-psychopatka/">více</a>)</span>
															</p>
														</div>
													</div>
												</article>
											</div>
										</section>

										<section class="newslist-item">
											<div class="box-content">
												<article class="article article-news article-news-60">
													<figure class="article-img">
														<a href="/novinky/8991-zemrel-roger-corman/">
															<img class="img" src="//image.pmgstatic.com/cache/resized/w100h132crop/files/images/news/article/168/931/168931666_fk4dhs.jpg" loading="lazy" width="100" height="132" srcset="//image.pmgstatic.com/cache/resized/w100h132crop/files/images/news/article/168/931/168931666_fk4dhs.jpg 1x, //image.pmgstatic.com/cache/resized/w200h264crop/files/images/news/article/168/931/168931666_fk4dhs.jpg 2x, //image.pmgstatic.com/cache/resized/w300h396crop/files/images/news/article/168/931/168931666_fk4dhs.jpg 3x" alt="Zemřel Roger Corman">
														</a>
													</figure>
													<header class="article-header">
														<h3>
															<a href="/novinky/8991-zemrel-roger-corman/">Zemřel Roger Corman</a>
														</h3>
														<div class="info">
															<span class="date">12.05.2024</span>
														</div>
													</header>
													<div class="article-news-content article-content-justify">
														<div class="article-news-textshort">
															<p>
																Svět filmu přišel o jednu z ikon americké kinematografie, v kalifornské Santa Monice totiž zemřel legendární americký režisér, producent a scenárista Roger Corman. Bylo mu úctyhodných osmadevadesát…
																<span class="span-more-small">(<a href="/novinky/8991-zemrel-roger-corman/">více</a>)</span>
															</p>
														</div>
													</div>
												</article>
											</div>
										</section>

										<section class="newslist-item">
											<div class="box-content">
												<article class="article article-news article-news-60">
													<figure class="article-img">
														<a href="/novinky/8962-tarantino-rusi-the-movie-critic-jako-svuj-10-film/">
															<img class="img" src="//image.pmgstatic.com/cache/resized/w100h132crop/files/images/news/article/168/849/168849977_b1g1e6.jpg" loading="lazy" width="100" height="132" srcset="//image.pmgstatic.com/cache/resized/w100h132crop/files/images/news/article/168/849/168849977_b1g1e6.jpg 1x, //image.pmgstatic.com/cache/resized/w200h264crop/files/images/news/article/168/849/168849977_b1g1e6.jpg 2x, //image.pmgstatic.com/cache/resized/w300h396crop/files/images/news/article/168/849/168849977_b1g1e6.jpg 3x" alt="Tarantino ruší The Movie Critic jako svůj 10. film">
														</a>
													</figure>
													<header class="article-header">
														<h3>
															<a href="/novinky/8962-tarantino-rusi-the-movie-critic-jako-svuj-10-film/">Tarantino ruší The Movie Critic jako svůj 10. film</a>
														</h3>
														<div class="info">
															<span class="date">18.04.2024</span>
														</div>
													</header>
													<div class="article-news-content article-content-justify">
														<div class="article-news-textshort">
															<p>
																Následující sdělení bude pro mnohé filmové diváky a zejména pak fanoušky tvorby Quentina Tarantina (Pulp Fiction: Historky z podsvětí, Hanebný pancharti) zřejmě dost pochmurné a možná i…
																<span class="span-more-small">(<a href="/novinky/8962-tarantino-rusi-the-movie-critic-jako-svuj-10-film/">více</a>)</span>
															</p>
														</div>
													</div>
												</article>
											</div>
										</section>

										<section class="newslist-item">
											<div class="box-content">
												<article class="article article-news article-news-60">
													<figure class="article-img">
														<a href="/novinky/8914-tom-cruise-si-zahraje-ve-filmu-alejandra-g-inarritu/">
															<img class="img" src="//image.pmgstatic.com/cache/resized/w100h132crop/files/images/news/article/168/659/168659475_h1jmgq.jpg" loading="lazy" width="100" height="132" srcset="//image.pmgstatic.com/cache/resized/w100h132crop/files/images/news/article/168/659/168659475_h1jmgq.jpg 1x, //image.pmgstatic.com/cache/resized/w200h264crop/files/images/news/article/168/659/168659475_h1jmgq.jpg 2x, //image.pmgstatic.com/cache/resized/w300h396crop/files/images/news/article/168/659/168659475_h1jmgq.jpg 3x" alt="Tom Cruise si zahraje ve filmu Alejandra G. Iñárritu">
														</a>
													</figure>
													<header class="article-header">
														<h3>
															<a href="/novinky/8914-tom-cruise-si-zahraje-ve-filmu-alejandra-g-inarritu/">Tom Cruise si zahraje ve filmu Alejandra G. Iñárritu</a>
														</h3>
														<div class="info">
															<span class="date">23.02.2024</span>
														</div>
													</header>
													<div class="article-news-content article-content-justify">
														<div class="article-news-textshort">
															<p>
																Tom Cruise (Magnolia, Spalující touha), jehož mnozí nazývají poslední opravdovou velkou hollywoodskou hvězdou, se nedávno v ohromné dohodě upsal spolupráci s Warnery, pro něž by měl produkovat…
																<span class="span-more-small">(<a href="/novinky/8914-tom-cruise-si-zahraje-ve-filmu-alejandra-g-inarritu/">více</a>)</span>
															</p>
														</div>
													</div>
												</article>
											</div>
										</section>

										<section class="newslist-item">
											<div class="box-content">
												<article class="article article-news article-news-60">
													<figure class="article-img">
														<a href="/novinky/8890-brad-pitt-krouzi-kolem-desate-tarantinovky/">
															<img class="img" src="//image.pmgstatic.com/cache/resized/w100h132crop/files/images/news/article/168/588/168588240_y55ucc.jpg" loading="lazy" width="100" height="132" srcset="//image.pmgstatic.com/cache/resized/w100h132crop/files/images/news/article/168/588/168588240_y55ucc.jpg 1x, //image.pmgstatic.com/cache/resized/w200h264crop/files/images/news/article/168/588/168588240_y55ucc.jpg 2x, //image.pmgstatic.com/cache/resized/w300h396crop/files/images/news/article/168/588/168588240_y55ucc.jpg 3x" alt="Brad Pitt krouží kolem desáté tarantinovky">
														</a>
													</figure>
													<header class="article-header">
														<h3>
															<a href="/novinky/8890-brad-pitt-krouzi-kolem-desate-tarantinovky/">Brad Pitt krouží kolem desáté tarantinovky</a>
														</h3>
														<div class="info">
															<span class="date">02.02.2024</span>
														</div>
													</header>
													<div class="article-news-content article-content-justify">
														<div class="article-news-textshort">
															<p>
																Co se týče současné tvorby oblíbeného režiséra Quentina Tarantina, už nějakou dobu víme, že jeho desátým a podle tvůrcových vlastních slov také finálním filmem má být chystaný snímek pojmenovaný The…
																<span class="span-more-small">(<a href="/novinky/8890-brad-pitt-krouzi-kolem-desate-tarantinovky/">více</a>)</span>
															</p>
														</div>
													</div>
												</article>
											</div>
										</section>

								</div>
							</div>
						</div>
					</section>
	</div>

	<div class="creator-aside">
		<div id="dropdown-control-panel" class="dropdown-content control-panel">
			<ul class="blue">
				<li id="snippet--publicControlMenuWatchlist">
					<a href="/registration-motivation/" rel="registrationMotivation">
							Přidat do Chci vidět
					</a>
				</li>
				<li id="snippet--publicControlMenuFanclub">
					<a href="/registration-motivation/" rel="registrationMotivation">
							Přidat do oblíbených
					</a>
				</li>
			</ul>
			<hr>
			<ul class="blue">
				<li>
					<a href="/registration-motivation/" rel="registrationMotivation">
						Přidat biografii
					</a>
				</li>
				<li>
					<a href="/registration-motivation/" rel="registrationMotivation">
						Přidat zajímavost
					</a>
				</li>
				<li>
					<a href="/registration-motivation/" rel="registrationMotivation">
						Přidat web
					</a>
				</li>
				<li>
					<a href="/registration-motivation/" rel="registrationMotivation">
						Přidat fotku
					</a>
				</li>
			</ul>
		</div>

		<a href="#dropdown-control-panel" rel="dropdownContent" class="button button-control-panel button-control-panel-desktop" data-parent-class="creator-aside">
			<i class="icon icon-menu"></i><span>Ovládací panel</span>
			
		</a>

		<section class="fan-club">
			<div class="fan-club-header">
				<div class="ranking">
					<a href="/zebricky/reziseri/#highlight-3-2120" title="Umístění tvůrce v sekci žebříčky se zvýrazněním.">
						<i class="icon icon-thumb-up"></i> 1. nejoblíbenější režisér
					</a>
				</div>
				<div class="ranking">
					<a href="/zebricky/scenariste-kameramani-skladatele/#highlight-5-2120" title="Umístění tvůrce v sekci žebříčky se zvýrazněním.">
						<i class="icon icon-thumb-up"></i> 1. nejoblíbenější scenárista
					</a>
				</div>
				<div class="ranking">
					<a href="/zebricky/herci-a-herecky/?fromLeft=200#highlight-1-2120" title="Umístění tvůrce v sekci žebříčky se zvýrazněním.">
						<i class="icon icon-thumb-up"></i> 269. nejoblíbenější herec
					</a>
				</div>
			</div>
			<div class="fan-club-content">
				<h3>Fanklub</h3>
				<span>(39 150)</span>
				<ul>
					<li title="POMO (režisér)">
						<a href="/uzivatel/1-pomo/oblibene/reziseri/">
							POMO
						</a>
						<span>režisér</span>
					</li>
					<li title="POMO (scenárista)">
						<a href="/uzivatel/1-pomo/oblibene/scenariste/">
							POMO
						</a>
						<span>scenárista</span>
					</li>
					<li title="verbal (režisér)">
						<a href="/uzivatel/195357-verbal/oblibene/reziseri/">
							verbal
						</a>
						<span>režisér</span>
					</li>
					<li title="KevSpa (režisér)">
						<a href="/uzivatel/5-kevspa/oblibene/reziseri/">
							KevSpa
						</a>
						<span>režisér</span>
					</li>
					<li title="KevSpa (scenárista)">
						<a href="/uzivatel/5-kevspa/oblibene/scenariste/">
							KevSpa
						</a>
						<span>scenárista</span>
					</li>
					<li title="Douglas (scenárista)">
						<a href="/uzivatel/4-douglas/oblibene/scenariste/">
							Douglas
						</a>
						<span>scenárista</span>
					</li>
					<li title="kOCOUR (režisér)">
						<a href="/uzivatel/69-kocour/oblibene/reziseri/">
							kOCOUR
						</a>
						<span>režisér</span>
					</li>
					<li title="don corleone (režisér)">
						<a href="/uzivatel/11567-don-corleone/oblibene/reziseri/">
							don corleone
						</a>
						<span>režisér</span>
					</li>
					<li title="Tsunami_X (režisér)">
						<a href="/uzivatel/474-tsunami-x/oblibene/reziseri/">
							Tsunami_X
						</a>
						<span>režisér</span>
					</li>
					<li title="Tsunami_X (scenárista)">
						<a href="/uzivatel/474-tsunami-x/oblibene/scenariste/">
							Tsunami_X
						</a>
						<span>scenárista</span>
					</li>
					<li title="Blizzard (režisér)">
						<a href="/uzivatel/1537-blizzard/oblibene/reziseri/">
							Blizzard
						</a>
						<span>režisér</span>
					</li>
					<li title="Matty (scenárista)">
						<a href="/uzivatel/2008-matty/oblibene/scenariste/">
							Matty
						</a>
						<span>scenárista</span>
					</li>
					<li title="Enšpígl (režisér)">
						<a href="/uzivatel/6811-enspigl/oblibene/reziseri/">
							Enšpígl
						</a>
						<span>režisér</span>
					</li>
					<li title="Radyo (režisér)">
						<a href="/uzivatel/151-radyo/oblibene/reziseri/">
							Radyo
						</a>
						<span>režisér</span>
					</li>
					<li title="T2 (scenárista)">
						<a href="/uzivatel/12308-t2/oblibene/scenariste/">
							T2
						</a>
						<span>scenárista</span>
					</li>
					<li title="Renton (režisér)">
						<a href="/uzivatel/3399-renton/oblibene/reziseri/">
							Renton
						</a>
						<span>režisér</span>
					</li>
					<li title="RedAK (režisér)">
						<a href="/uzivatel/447317-redak/oblibene/reziseri/">
							RedAK
						</a>
						<span>režisér</span>
					</li>
					<li title="Faye (režisér)">
						<a href="/uzivatel/6356-faye/oblibene/reziseri/">
							Faye
						</a>
						<span>režisér</span>
					</li>
					<li title="woody (režisér)">
						<a href="/uzivatel/363-woody/oblibene/reziseri/">
							woody
						</a>
						<span>režisér</span>
					</li>
					<li title="woody (scenárista)">
						<a href="/uzivatel/363-woody/oblibene/scenariste/">
							woody
						</a>
						<span>scenárista</span>
					</li>
				</ul>
				<div class="box-more-bar">
<div class="pagination">
	<a href="/tvurce/2120-quentin-tarantino/prehled/?pageFanclub=0" class="page-prev disabled">
		<span class="pagination-btn-reader">předchozí</span>
	</a>
	1 - 20
	<a href="/tvurce/2120-quentin-tarantino/prehled/?pageFanclub=2" class="page-next">
		<span class="pagination-btn-reader">další</span>
	</a>
</div>
				</div>
			</div>
		</section>

		<div class="links">
				<a href="http://www.tarantino.info/" title="tarantino.info (fandovský web)" class="website"><i class="icon icon-globe-circle"></i><span>tarantino.info</span></a>
				<a href="http://www.qtarantino.cz/" title="qtarantino.cz (fandovský web)" class="website"><i class="icon icon-globe-circle"></i><span>qtarantino.cz</span></a>
		</div>

		<div class="box-buttons">
		</div>

	</div>
</div>

					<div id="bottom-banner">
						<div class="box box-banner box-bannercenter box-banner-spacetop">
							<p class="box-banner-text-center">Reklama</p>
							<div class="bottom-banner-content">
<div id="billboard" class="ad-pmg" style="height: 315px;"></div>
							</div>
						</div>
						<div class="box box-banner-mobile box-banner-mobile-padding">
							<p class="box-banner-text">Reklama</p>
<div id="mobile_billboard" class="ad-pmg" style="height: 300px;"></div>
						</div>
					</div>
				</div>
			</div>

			<footer class="page-footer">
				<div class="footer-content">
					<div class="footer-list">
						<div class="footer-list-size">
							<div class="linklist languages">
								<div class="timezones">
									<h3>Výběr časového pásma</h3>
									<form action="/tvurce/2120-quentin-tarantino/prehled/" method="post" id="frm-timezoneForm">
										<select name="timezone" data-auto-submit-form="true" id="frm-timezoneForm-timezone"><option value="Africa/Abidjan">Africa/Abidjan</option><option value="Africa/Accra">Africa/Accra</option><option value="Africa/Addis_Ababa">Africa/Addis Ababa</option><option value="Africa/Algiers">Africa/Algiers</option><option value="Africa/Asmara">Africa/Asmara</option><option value="Africa/Bamako">Africa/Bamako</option><option value="Africa/Bangui">Africa/Bangui</option><option value="Africa/Banjul">Africa/Banjul</option><option value="Africa/Bissau">Africa/Bissau</option><option value="Africa/Blantyre">Africa/Blantyre</option><option value="Africa/Brazzaville">Africa/Brazzaville</option><option value="Africa/Bujumbura">Africa/Bujumbura</option><option value="Africa/Cairo">Africa/Cairo</option><option value="Africa/Casablanca">Africa/Casablanca</option><option value="Africa/Ceuta">Africa/Ceuta</option><option value="Africa/Conakry">Africa/Conakry</option><option value="Africa/Dakar">Africa/Dakar</option><option value="Africa/Dar_es_Salaam">Africa/Dar es Salaam</option><option value="Africa/Djibouti">Africa/Djibouti</option><option value="Africa/Douala">Africa/Douala</option><option value="Africa/El_Aaiun">Africa/El Aaiun</option><option value="Africa/Freetown">Africa/Freetown</option><option value="Africa/Gaborone">Africa/Gaborone</option><option value="Africa/Harare">Africa/Harare</option><option value="Africa/Johannesburg">Africa/Johannesburg</option><option value="Africa/Juba">Africa/Juba</option><option value="Africa/Kampala">Africa/Kampala</option><option value="Africa/Khartoum">Africa/Khartoum</option><option value="Africa/Kigali">Africa/Kigali</option><option value="Africa/Kinshasa">Africa/Kinshasa</option><option value="Africa/Lagos">Africa/Lagos</option><option value="Africa/Libreville">Africa/Libreville</option><option value="Africa/Lome">Africa/Lome</option><option value="Africa/Luanda">Africa/Luanda</option><option value="Africa/Lubumbashi">Africa/Lubumbashi</option><option value="Africa/Lusaka">Africa/Lusaka</option><option value="Africa/Malabo">Africa/Malabo</option><option value="Africa/Maputo">Africa/Maputo</option><option value="Africa/Maseru">Africa/Maseru</option><option value="Africa/Mbabane">Africa/Mbabane</option><option value="Africa/Mogadishu">Africa/Mogadishu</option><option value="Africa/Monrovia">Africa/Monrovia</option><option value="Africa/Nairobi">Africa/Nairobi</option><option value="Africa/Ndjamena">Africa/Ndjamena</option><option value="Africa/Niamey">Africa/Niamey</option><option value="Africa/Nouakchott">Africa/Nouakchott</option><option value="Africa/Ouagadougou">Africa/Ouagadougou</option><option value="Africa/Porto-Novo">Africa/Porto-Novo</option><option value="Africa/Sao_Tome">Africa/Sao Tome</option><option value="Africa/Tripoli">Africa/Tripoli</option><option value="Africa/Tunis">Africa/Tunis</option><option value="Africa/Windhoek">Africa/Windhoek</option><option value="America/Adak">America/Adak</option><option value="America/Anchorage">America/Anchorage</option><option value="America/Anguilla">America/Anguilla</option><option value="America/Antigua">America/Antigua</option><option value="America/Araguaina">America/Araguaina</option><option value="America/Argentina/Buenos_Aires">America/Argentina/Buenos Aires</option><option value="America/Argentina/Catamarca">America/Argentina/Catamarca</option><option value="America/Argentina/Cordoba">America/Argentina/Cordoba</option><option value="America/Argentina/Jujuy">America/Argentina/Jujuy</option><option value="America/Argentina/La_Rioja">America/Argentina/La Rioja</option><option value="America/Argentina/Mendoza">America/Argentina/Mendoza</option><option value="America/Argentina/Rio_Gallegos">America/Argentina/Rio Gallegos</option><option value="America/Argentina/Salta">America/Argentina/Salta</option><option value="America/Argentina/San_Juan">America/Argentina/San Juan</option><option value="America/Argentina/San_Luis">America/Argentina/San Luis</option><option value="America/Argentina/Tucuman">America/Argentina/Tucuman</option><option value="America/Argentina/Ushuaia">America/Argentina/Ushuaia</option><option value="America/Aruba">America/Aruba</option><option value="America/Asuncion">America/Asuncion</option><option value="America/Atikokan">America/Atikokan</option><option value="America/Bahia">America/Bahia</option><option value="America/Bahia_Banderas">America/Bahia Banderas</option><option value="America/Barbados">America/Barbados</option><option value="America/Belem">America/Belem</option><option value="America/Belize">America/Belize</option><option value="America/Blanc-Sablon">America/Blanc-Sablon</option><option value="America/Boa_Vista">America/Boa Vista</option><option value="America/Bogota">America/Bogota</option><option value="America/Boise">America/Boise</option><option value="America/Cambridge_Bay">America/Cambridge Bay</option><option value="America/Campo_Grande">America/Campo Grande</option><option value="America/Cancun">America/Cancun</option><option value="America/Caracas">America/Caracas</option><option value="America/Cayenne">America/Cayenne</option><option value="America/Cayman">America/Cayman</option><option value="America/Chicago">America/Chicago</option><option value="America/Chihuahua">America/Chihuahua</option><option value="America/Ciudad_Juarez">America/Ciudad Juarez</option><option value="America/Costa_Rica">America/Costa Rica</option><option value="America/Creston">America/Creston</option><option value="America/Cuiaba">America/Cuiaba</option><option value="America/Curacao">America/Curacao</option><option value="America/Dawson">America/Dawson</option><option value="America/Dawson_Creek">America/Dawson Creek</option><option value="America/Denver">America/Denver</option><option value="America/Detroit">America/Detroit</option><option value="America/Dominica">America/Dominica</option><option value="America/Edmonton">America/Edmonton</option><option value="America/Eirunepe">America/Eirunepe</option><option value="America/El_Salvador">America/El Salvador</option><option value="America/Fort_Nelson">America/Fort Nelson</option><option value="America/Fortaleza">America/Fortaleza</option><option value="America/Glace_Bay">America/Glace Bay</option><option value="America/Goose_Bay">America/Goose Bay</option><option value="America/Grand_Turk">America/Grand Turk</option><option value="America/Grenada">America/Grenada</option><option value="America/Guadeloupe">America/Guadeloupe</option><option value="America/Guatemala">America/Guatemala</option><option value="America/Guayaquil">America/Guayaquil</option><option value="America/Guyana">America/Guyana</option><option value="America/Halifax">America/Halifax</option><option value="America/Havana">America/Havana</option><option value="America/Hermosillo">America/Hermosillo</option><option value="America/Indiana/Indianapolis">America/Indiana/Indianapolis</option><option value="America/Indiana/Knox">America/Indiana/Knox</option><option value="America/Indiana/Marengo">America/Indiana/Marengo</option><option value="America/Indiana/Petersburg">America/Indiana/Petersburg</option><option value="America/Indiana/Tell_City">America/Indiana/Tell City</option><option value="America/Indiana/Vevay">America/Indiana/Vevay</option><option value="America/Indiana/Vincennes">America/Indiana/Vincennes</option><option value="America/Indiana/Winamac">America/Indiana/Winamac</option><option value="America/Inuvik">America/Inuvik</option><option value="America/Iqaluit">America/Iqaluit</option><option value="America/Jamaica">America/Jamaica</option><option value="America/Juneau">America/Juneau</option><option value="America/Kentucky/Louisville">America/Kentucky/Louisville</option><option value="America/Kentucky/Monticello">America/Kentucky/Monticello</option><option value="America/Kralendijk">America/Kralendijk</option><option value="America/La_Paz">America/La Paz</option><option value="America/Lima">America/Lima</option><option value="America/Los_Angeles">America/Los Angeles</option><option value="America/Lower_Princes">America/Lower Princes</option><option value="America/Maceio">America/Maceio</option><option value="America/Managua">America/Managua</option><option value="America/Manaus">America/Manaus</option><option value="America/Marigot">America/Marigot</option><option value="America/Martinique">America/Martinique</option><option value="America/Matamoros">America/Matamoros</option><option value="America/Mazatlan">America/Mazatlan</option><option value="America/Menominee">America/Menominee</option><option value="America/Merida">America/Merida</option><option value="America/Metlakatla">America/Metlakatla</option><option value="America/Mexico_City">America/Mexico City</option><option value="America/Miquelon">America/Miquelon</option><option value="America/Moncton">America/Moncton</option><option value="America/Monterrey">America/Monterrey</option><option value="America/Montevideo">America/Montevideo</option><option value="America/Montserrat">America/Montserrat</option><option value="America/Nassau">America/Nassau</option><option value="America/New_York">America/New York</option><option value="America/Nome">America/Nome</option><option value="America/North_Dakota/Beulah">America/North Dakota/Beulah</option><option value="America/North_Dakota/Center">America/North Dakota/Center</option><option value="America/North_Dakota/New_Salem">America/North Dakota/New Salem</option><option value="America/Nuuk">America/Nuuk</option><option value="America/Ojinaga">America/Ojinaga</option><option value="America/Panama">America/Panama</option><option value="America/Paramaribo">America/Paramaribo</option><option value="America/Phoenix">America/Phoenix</option><option value="America/Port-au-Prince">America/Port-au-Prince</option><option value="America/Port_of_Spain">America/Port of_Spain</option><option value="America/Porto_Velho">America/Porto Velho</option><option value="America/Puerto_Rico">America/Puerto Rico</option><option value="America/Punta_Arenas">America/Punta Arenas</option><option value="America/Rankin_Inlet">America/Rankin Inlet</option><option value="America/Recife">America/Recife</option><option value="America/Regina">America/Regina</option><option value="America/Resolute">America/Resolute</option><option value="America/Rio_Branco">America/Rio Branco</option><option value="America/Santarem">America/Santarem</option><option value="America/Santiago">America/Santiago</option><option value="America/Santo_Domingo">America/Santo Domingo</option><option value="America/Sao_Paulo">America/Sao Paulo</option><option value="America/Scoresbysund">America/Scoresbysund</option><option value="America/Sitka">America/Sitka</option><option value="America/St_Barthelemy">America/St Barthelemy</option><option value="America/St_Johns">America/St. John's</option><option value="America/St_Kitts">America/St Kitts</option><option value="America/St_Lucia">America/St Lucia</option><option value="America/St_Thomas">America/St Thomas</option><option value="America/St_Vincent">America/St Vincent</option><option value="America/Swift_Current">America/Swift Current</option><option value="America/Tegucigalpa">America/Tegucigalpa</option><option value="America/Thule">America/Thule</option><option value="America/Tijuana">America/Tijuana</option><option value="America/Toronto">America/Toronto</option><option value="America/Tortola">America/Tortola</option><option value="America/Vancouver">America/Vancouver</option><option value="America/Whitehorse">America/Whitehorse</option><option value="America/Winnipeg">America/Winnipeg</option><option value="America/Yakutat">America/Yakutat</option><option value="America/Yellowknife">America/Yellowknife</option><option value="Antarctica/Syowa">Antarctica/Syowa</option><option value="Arctic/Longyearbyen">Arctic/Longyearbyen</option><option value="Asia/Aden">Asia/Aden</option><option value="Asia/Almaty">Asia/Almaty</option><option value="Asia/Amman">Asia/Amman</option><option value="Asia/Anadyr">Asia/Anadyr</option><option value="Asia/Aqtau">Asia/Aqtau</option><option value="Asia/Aqtobe">Asia/Aqtobe</option><option value="Asia/Ashgabat">Asia/Ashgabat</option><option value="Asia/Atyrau">Asia/Atyrau</option><option value="Asia/Baghdad">Asia/Baghdad</option><option value="Asia/Bahrain">Asia/Bahrain</option><option value="Asia/Baku">Asia/Baku</option><option value="Asia/Bangkok">Asia/Bangkok</option><option value="Asia/Barnaul">Asia/Barnaul</option><option value="Asia/Beirut">Asia/Beirut</option><option value="Asia/Bishkek">Asia/Bishkek</option><option value="Asia/Brunei">Asia/Brunei</option><option value="Asia/Chita">Asia/Chita</option><option value="Asia/Choibalsan">Asia/Choibalsan</option><option value="Asia/Colombo">Asia/Colombo</option><option value="Asia/Damascus">Asia/Damascus</option><option value="Asia/Dhaka">Asia/Dhaka</option><option value="Asia/Dili">Asia/Dili</option><option value="Asia/Dubai">Asia/Dubai</option><option value="Asia/Dushanbe">Asia/Dushanbe</option><option value="Asia/Famagusta">Asia/Famagusta</option><option value="Asia/Gaza">Asia/Gaza</option><option value="Asia/Hebron">Asia/Hebron</option><option value="Asia/Ho_Chi_Minh">Asia/Ho Chi_Minh</option><option value="Asia/Hong_Kong">Asia/Hong_Kong</option><option value="Asia/Hovd">Asia/Hovd</option><option value="Asia/Irkutsk">Asia/Irkutsk</option><option value="Asia/Jakarta">Asia/Jakarta</option><option value="Asia/Jayapura">Asia/Jayapura</option><option value="Asia/Jerusalem">Asia/Jerusalem</option><option value="Asia/Kabul">Asia/Kabul</option><option value="Asia/Kamchatka">Asia/Kamchatka</option><option value="Asia/Karachi">Asia/Karachi</option><option value="Asia/Kathmandu">Asia/Kathmandu</option><option value="Asia/Kolkata">Asia/Kolkata</option><option value="Asia/Krasnoyarsk">Asia/Krasnoyarsk</option><option value="Asia/Kuala_Lumpur">Asia/Kuala_Lumpur</option><option value="Asia/Kuching">Asia/Kuching</option><option value="Asia/Kuwait">Asia/Kuwait</option><option value="Asia/Macau">Asia/Macau</option><option value="Asia/Magadan">Asia/Magadan</option><option value="Asia/Makassar">Asia/Makassar</option><option value="Asia/Manila">Asia/Manila</option><option value="Asia/Muscat">Asia/Muscat</option><option value="Asia/Nicosia">Asia/Nicosia</option><option value="Asia/Novokuznetsk">Asia/Novokuznetsk</option><option value="Asia/Novosibirsk">Asia/Novosibirsk</option><option value="Asia/Omsk">Asia/Omsk</option><option value="Asia/Oral">Asia/Oral</option><option value="Asia/Phnom_Penh">Asia/Phnom_Penh</option><option value="Asia/Pontianak">Asia/Pontianak</option><option value="Asia/Pyongyang">Asia/Pyongyang</option><option value="Asia/Qatar">Asia/Qatar</option><option value="Asia/Qostanay">Asia/Qostanay</option><option value="Asia/Qyzylorda">Asia/Qyzylorda</option><option value="Asia/Riyadh">Asia/Riyadh</option><option value="Asia/Sakhalin">Asia/Sakhalin</option><option value="Asia/Samarkand">Asia/Samarkand</option><option value="Asia/Seoul">Asia/Seoul</option><option value="Asia/Shanghai">Asia/Shanghai</option><option value="Asia/Singapore">Asia/Singapore</option><option value="Asia/Taipei">Asia/Taipei</option><option value="Asia/Tashkent">Asia/Tashkent</option><option value="Asia/Tbilisi">Asia/Tbilisi</option><option value="Asia/Tehran">Asia/Tehran</option><option value="Asia/Thimphu">Asia/Thimphu</option><option value="Asia/Tokyo">Asia/Tokyo</option><option value="Asia/Tomsk">Asia/Tomsk</option><option value="Asia/Ulaanbaatar">Asia/Ulaanbaatar</option><option value="Asia/Urumqi">Asia/Urumqi</option><option value="Asia/Vientiane">Asia/Vientiane</option><option value="Asia/Vladivostok">Asia/Vladivostok</option><option value="Asia/Yakutsk">Asia/Yakutsk</option><option value="Asia/Yangon">Asia/Yangon</option><option value="Asia/Yekaterinburg">Asia/Yekaterinburg</option><option value="Asia/Yerevan">Asia/Yerevan</option><option value="Atlantic/Azores">Atlantic/Azores</option><option value="Atlantic/Bermuda">Atlantic/Bermuda</option><option value="Atlantic/Canary">Atlantic/Canary</option><option value="Atlantic/Cape_Verde">Atlantic/Cape Verde</option><option value="Atlantic/Faroe">Atlantic/Faroe</option><option value="Atlantic/Madeira">Atlantic/Madeira</option><option value="Atlantic/Reykjavik">Atlantic/Reykjavik</option><option value="Atlantic/South_Georgia">Atlantic/South Georgia</option><option value="Atlantic/St_Helena">Atlantic/St Helena</option><option value="Atlantic/Stanley">Atlantic/Stanley</option><option value="Australia/Adelaide">Australia/Adelaide</option><option value="Australia/Brisbane">Australia/Brisbane</option><option value="Australia/Broken_Hill">Australia/Broken Hill</option><option value="Australia/Darwin">Australia/Darwin</option><option value="Australia/Eucla">Australia/Eucla</option><option value="Australia/Hobart">Australia/Hobart</option><option value="Australia/Lindeman">Australia/Lindeman</option><option value="Australia/Lord_Howe">Australia/Lord Howe</option><option value="Australia/Melbourne">Australia/Melbourne</option><option value="Australia/Perth">Australia/Perth</option><option value="Australia/Sydney">Australia/Sydney</option><option value="Europe/Amsterdam">Europe/Amsterdam</option><option value="Europe/Andorra">Europe/Andorra</option><option value="Europe/Astrakhan">Europe/Astrakhan</option><option value="Europe/Athens">Europe/Athens</option><option value="Europe/Belgrade">Europe/Belgrade</option><option value="Europe/Berlin">Europe/Berlin</option><option value="Europe/Bratislava">Europe/Bratislava</option><option value="Europe/Brussels">Europe/Brussels</option><option value="Europe/Bucharest">Europe/Bucharest</option><option value="Europe/Budapest">Europe/Budapest</option><option value="Europe/Chisinau">Europe/Chisinau</option><option value="Europe/Copenhagen">Europe/Copenhagen</option><option value="Europe/Dublin">Europe/Dublin</option><option value="Europe/Gibraltar">Europe/Gibraltar</option><option value="Europe/Guernsey">Europe/Guernsey</option><option value="Europe/Helsinki">Europe/Helsinki</option><option value="Europe/Isle_of_Man">Europe/Isle of Man</option><option value="Europe/Istanbul">Europe/Istanbul</option><option value="Europe/Jersey">Europe/Jersey</option><option value="Europe/Kaliningrad">Europe/Kaliningrad</option><option value="Europe/Kirov">Europe/Kirov</option><option value="Europe/Kyiv">Europe/Kyiv</option><option value="Europe/Lisbon">Europe/Lisbon</option><option value="Europe/Ljubljana">Europe/Ljubljana</option><option value="Europe/London">Europe/London</option><option value="Europe/Luxembourg">Europe/Luxembourg</option><option value="Europe/Madrid">Europe/Madrid</option><option value="Europe/Malta">Europe/Malta</option><option value="Europe/Mariehamn">Europe/Mariehamn</option><option value="Europe/Minsk">Europe/Minsk</option><option value="Europe/Monaco">Europe/Monaco</option><option value="Europe/Moscow">Europe/Moscow</option><option value="Europe/Oslo">Europe/Oslo</option><option value="Europe/Paris">Europe/Paris</option><option value="Europe/Podgorica">Europe/Podgorica</option><option value="Europe/Prague" selected>Europe/Prague</option><option value="Europe/Riga">Europe/Riga</option><option value="Europe/Rome">Europe/Rome</option><option value="Europe/Samara">Europe/Samara</option><option value="Europe/San_Marino">Europe/San Marino</option><option value="Europe/Sarajevo">Europe/Sarajevo</option><option value="Europe/Saratov">Europe/Saratov</option><option value="Europe/Simferopol">Europe/Simferopol</option><option value="Europe/Skopje">Europe/Skopje</option><option value="Europe/Sofia">Europe/Sofia</option><option value="Europe/Stockholm">Europe/Stockholm</option><option value="Europe/Tallinn">Europe/Tallinn</option><option value="Europe/Tirane">Europe/Tirane</option><option value="Europe/Ulyanovsk">Europe/Ulyanovsk</option><option value="Europe/Vaduz">Europe/Vaduz</option><option value="Europe/Vatican">Europe/Vatican</option><option value="Europe/Vienna">Europe/Vienna</option><option value="Europe/Vilnius">Europe/Vilnius</option><option value="Europe/Volgograd">Europe/Volgograd</option><option value="Europe/Warsaw">Europe/Warsaw</option><option value="Europe/Zagreb">Europe/Zagreb</option><option value="Europe/Zurich">Europe/Zurich</option><option value="Indian/Antananarivo">Indian/Antananarivo</option><option value="Indian/Chagos">Indian/Chagos</option><option value="Indian/Christmas">Indian/Christmas</option><option value="Indian/Cocos">Indian/Cocos</option><option value="Indian/Comoro">Indian/Comoro</option><option value="Indian/Kerguelen">Indian/Kerguelen</option><option value="Indian/Mahe">Indian/Mahe</option><option value="Indian/Maldives">Indian/Maldives</option><option value="Indian/Mauritius">Indian/Mauritius</option><option value="Indian/Mayotte">Indian/Mayotte</option><option value="Indian/Reunion">Indian/Reunion</option><option value="Pacific/Apia">Pacific/Apia</option><option value="Pacific/Auckland">Pacific/Auckland</option><option value="Pacific/Bougainville">Pacific/Bougainville</option><option value="Pacific/Chatham">Pacific/Chatham</option><option value="Pacific/Chuuk">Pacific/Chuuk</option><option value="Pacific/Easter">Pacific/Easter</option><option value="Pacific/Efate">Pacific/Efate</option><option value="Pacific/Fakaofo">Pacific/Fakaofo</option><option value="Pacific/Fiji">Pacific/Fiji</option><option value="Pacific/Funafuti">Pacific/Funafuti</option><option value="Pacific/Galapagos">Pacific/Galapagos</option><option value="Pacific/Gambier">Pacific/Gambier</option><option value="Pacific/Guadalcanal">Pacific/Guadalcanal</option><option value="Pacific/Guam">Pacific/Guam</option><option value="Pacific/Honolulu">Pacific/Honolulu</option><option value="Pacific/Kanton">Pacific/Kanton</option><option value="Pacific/Kiritimati">Pacific/Kiritimati</option><option value="Pacific/Kosrae">Pacific/Kosrae</option><option value="Pacific/Kwajalein">Pacific/Kwajalein</option><option value="Pacific/Majuro">Pacific/Majuro</option><option value="Pacific/Marquesas">Pacific/Marquesas</option><option value="Pacific/Midway">Pacific/Midway</option><option value="Pacific/Nauru">Pacific/Nauru</option><option value="Pacific/Niue">Pacific/Niue</option><option value="Pacific/Norfolk">Pacific/Norfolk</option><option value="Pacific/Noumea">Pacific/Noumea</option><option value="Pacific/Pago_Pago">Pacific/Pago Pago</option><option value="Pacific/Palau">Pacific/Palau</option><option value="Pacific/Pitcairn">Pacific/Pitcairn</option><option value="Pacific/Pohnpei">Pacific/Pohnpei</option><option value="Pacific/Port_Moresby">Pacific/Port Moresby</option><option value="Pacific/Rarotonga">Pacific/Rarotonga</option><option value="Pacific/Saipan">Pacific/Saipan</option><option value="Pacific/Tahiti">Pacific/Tahiti</option><option value="Pacific/Tarawa">Pacific/Tarawa</option><option value="Pacific/Tongatapu">Pacific/Tongatapu</option><option value="Pacific/Wake">Pacific/Wake</option><option value="Pacific/Wallis">Pacific/Wallis</option></select>
									<input type="hidden" name="_do" value="timezoneForm-submit"></form>
										<p>Detekovali jsme, že jsi v časové zóně Europe/Chisinau. <a href="/tvurce/2120-quentin-tarantino/prehled/?value=Europe%2FChisinau&do=changeHomeTimezone">Změnit časovou zónu</a></p>
								</div>
								<div class="theme-switcher">
									<a id="switch-to-dark-mode" href="javascript:void(0);">
										<span>
											<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
										</span>Tmavý vzhled
									</a>
									<a id="switch-to-light-mode" href="javascript:void(0);" class="hidden">
										<span>
											<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
										</span>Světlý vzhled
									</a>
								</div>
							</div>
							<div class="footer-list-content">
								<div class="linklist linklist-small">
									<h3>Užitečné</h3>
									<ul>
												<li><a href="/prihlaseni/">Přihlášení</a></li>
												<li><a href="/registrace/">Registrace</a></li>
										<li><a href="javascript:Didomi.preferences.show()">Nastavení soukromí</a></li>
										<li><a href="/vyvojari/">Pracuj s námi</a></li>
										<li><a href="/napis-nam/">Napiš nám</a></li>
									</ul>
								</div>

								<div class="linklist">
									<h3>Obecné</h3>
									<ul>
										<li><a href="/provozovatel-a-redakce/">Provozovatel a redakce</a></li>
										<li><a href="/reklama-a-marketing/">Reklama a marketing</a></li>
										<li><a href="/zasady-ochrany-osobnich-udaju/">Zásady ochrany osobních údajů</a></li>
										<li><a href="/vseobecne-podminky-uzivani/">Všeobecné podmínky užívání</a></li>
										<li><a href="/cookies/">Cookies</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div class="footer-about">
						<div class="footer-social">
							<h3>Social</h3>
								<a href="https://www.facebook.com/www.CSFD.cz/" class="btn-social" target="_blank" rel="noreferrer"><i class="icon icon-facebook"></i></a>
								<a href="https://www.instagram.com/csfd.cz/" class="btn-social" target="_blank" rel="noreferrer"><i class="icon icon-instagram"></i></a>
						</div>
						<div class="footer-app">
							<h3>Mobilní aplikace</h3>
							<a href="https://apps.apple.com/cz/app/csfd-web/id1552901865#?platform=iphone" class="btn-app-store" target="_blank"><img src=&#47;&#47;static.pmgstatic.com&#47;assets&#47;images&#47;4b37ac5ff3cce04f5ea0278688618768&#47;appstore.svg alt="ČSFD Web | App Store"></a>
							<a href="https://play.google.com/store/apps/details?id=cz.csfd.lite" class="btn-google-play" target="_blank"><img src=&#47;&#47;static.pmgstatic.com&#47;assets&#47;images&#47;4b37ac5ff3cce04f5ea0278688618768&#47;googleplay.svg alt="ČSFD Web | Google Play"></a>
						</div>
						<div class="site-info">
							<p>Česko-Slovenská filmová databáze</p><p>&copy; 2001-2024 POMO Media Group s.r.o.</p>
							<p>Všechna práva vyhrazena.</p>
						</div>
					</div>
				</div>
			</footer>
		</div>
<div id="panelModal" class="modal mfp-hide" role="dialog">
	<span id="mfp-modalWindow">
		<div id="snippet--modalWindow"></div>
	</span>
</div>

		<div id="snippet--flashes" class="flash-message" data-ajax-prepend="true">

		</div>

<div id="slide_up" class="ad-pmg"></div>


<script type="text/json" id="js-common-config">{"country":1,"domain":"csfd.cz","host":"www.csfd.cz","userLanguageId":1,"translations":{"web.ajax.default.error.message":"Omlouváme se, ale nastala chyba při zpracování.","web.ajax.resend.button":"Odeslat znovu","web.autocomplete.creator.header":"Tvůrci","web.autocomplete.creator.more.link":"Všichni tvůrci","web.autocomplete.film.header":"Filmy","web.autocomplete.film.more.link":"Všechny filmy","web.autocomplete.noservice":"Služba vyhledávání není momentálně dostupná.","web.autocomplete.searching":"Vyhledávám...","web.autocomplete.search.select":"Vyplň název filmu / jméno tvůrce nebo uživatele","web.autocomplete.series.header":"Seriály","web.autocomplete.series.more.link":"Všechny seriály","web.autocomplete.user.header":"Uživatelé","web.autocomplete.user.more.link":"Všichni uživatelé","web.check.all":"zaškrtnout vše","web.fileupload.preloader":"Načítám knihovnu, prosím o strpení...","web.modal.confirm.close":"Opravdu chceš zavřít okno? Možná máš neuložené změny.","web.preloader.loading":"Načítání...","web.search.creator.notfound":"Nenalezeni žádní tvůrci","web.search.film.notfound":"Nenalezeny žádné filmy","web.search.series.notfound":"Nenalezeny žádné seriály","web.search.user.notfound":"Nenalezeni žádní uživatelé","web.selectize.plugin.remove.button.remove":"Odebrat","web.sortable.error.move":"Při přesunu pozic došlo k chybě. Stránka bude obnovena. Pokračovat?","web.common.onboarding.button.previous":"Předchozí","web.common.onboarding.button.next":"Další","web.common.onboarding.button.close":"Zavřít"},"route":":Web:Creator:Overview:default","isLoggedIn":false,"userId":null,"hooks":["FormGet","AutoSubmitForm"]}</script>
<script src="//static.pmgstatic.com/assets/utils-js/c38a059f9f69d34b09118407202a750c/scripts.min.js"></script>
<script type="text/javascript">
	CSFDAds.setTServer("https://a.csfd.cz/csfd/tserver");
	CSFDAds.complete({"ball":{"site":"csfd.cz","page":3,"login":2,"viewId":33285982,"creator_id":2120},"0":{"area":"leaderboard","size":"1000x210,2000x1400,1800x1000,728x90,970x210,750x100,998x200,930x180,970x90,750x200,1000x200,branding_web"},"1":{"area":"large_rectangle_1","size":"336x300,300x250,336x280,320x100,300x100,300x300"},"2":{"area":"large_rectangle_2","size":"336x300,300x250,336x280,320x100,300x100,300x300"},"3":{"area":"large_rectangle_3","size":"336x300,300x250,336x280,320x100,300x100,300x300"},"4":{"area":"billboard","size":"970x250,728x90,1000x310,970x310,970x210,950x300,900x250,1000x210,750x100,998x200,930x180,970x90,750x200,1000x250,750x300,980x250,1000x200"},"5":{"area":"slide_up","size":"970x250,728x90,1000x310,320x100,970x310,970x210,320x50,300x100,300x50,360x90,500x200,320x150,slide_up"},"6":{"area":"mobile_leaderboard","size":"320x100,320x50,300x100,300x50"},"7":{"area":"mobile_square_1","size":"300x300,300x250,250x250,200x200,300x100,300x600,480x820,720x1280,Interscroller"},"8":{"area":"mobile_square_2","size":"300x300,300x250,250x250,200x200,300x100"},"9":{"area":"mobile_square_3","size":"300x300,300x250,250x250,200x200,300x100"},"10":{"area":"mobile_square_4","size":"300x300,300x250,250x250,200x200,300x100"},"11":{"area":"mobile_billboard","size":"300x300,300x250,250x250,200x200,300x100"},"12":{"area":"native_short_1","size":"native_50,430x115,320x100","options":"lazy"},"13":{"area":"pre_roll","size":"videoad","supertag":"InstreamVideo"},"14":{"area":"pre_roll_2","size":"videoad","supertag":"InstreamVideo"}}, false, false);
</script>
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TM3S526" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
	</body>

	<a href="#top" title="Zpět nahoru" id="back-to-top"><i class="icon icon-arrow-up" aria-hidden="true"></i></a>
</html>

`;
