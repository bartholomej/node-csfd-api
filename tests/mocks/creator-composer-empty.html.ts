export const composerMock = `

<!DOCTYPE html>
<html lang="cs-CZ">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Sven Mikkelsen | Biografie | ČSFD.cz</title>
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

	var googleAnalyticsPageViewData = {"event":"page_view","site":"www.csfd.cz","platform":"web","environment":"production","language":"cs","device":"desktop","user":{"id":null,"adblock":false},"page":{"id":500749,"type":"Creator","title":null,"url":"https:\/\/www.csfd.cz\/tvurce\/500749-sven-mikkelsen\/biografie\/","path":"\/tvurce\/500749-sven-mikkelsen\/biografie\/","section":"Creator"},"_clear":true};
	if (googleAnalyticsPageViewData !== null) {
		googleAnalyticsPageViewData.page.title = "Sven Mikkelsen | Biografie | ČSFD.cz";
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

<meta name="description" content="Biografie tvůrce Sven Mikkelsen. Vše o životě, kariéře, filmech a seriálech tvůrce Sven Mikkelsen.">

<link rel="alternate" hreflang="cs-cz" href="https://www.csfd.cz/tvurce/500749-sven-mikkelsen/biografie/" />
<link rel="alternate" hreflang="sk-sk" href="https://www.csfd.sk/tvorca/500749-sven-mikkelsen/biografia/" />
<link rel="alternate" hreflang="de-at" href="https://www.filmbooster.at/filmemacher/500749-sven-mikkelsen/biografie/" />
<link rel="alternate" hreflang="en-ca" href="https://www.filmbooster.ca/creator/500749-sven-mikkelsen/biography/" />
<link rel="alternate" hreflang="en-gb" href="https://www.filmbooster.co.uk/creator/500749-sven-mikkelsen/biography/" />
<link rel="alternate" hreflang="en-us" href="https://www.filmbooster.com/creator/500749-sven-mikkelsen/biography/" />
<link rel="alternate" hreflang="en-au" href="https://www.filmbooster.com.au/creator/500749-sven-mikkelsen/biography/" />
<link rel="alternate" hreflang="de-de" href="https://www.filmbooster.de/filmemacher/500749-sven-mikkelsen/biografie/" />
<link rel="alternate" hreflang="es-es" href="https://www.filmbooster.es/cineasta/500749-sven-mikkelsen/biografia/" />
<link rel="alternate" hreflang="fi-fi" href="https://www.filmbooster.fi/tekija/500749-sven-mikkelsen/biografia/" />
<link rel="alternate" hreflang="fr-fr" href="https://www.filmbooster.fr/artiste/500749-sven-mikkelsen/biographie/" />
<link rel="alternate" hreflang="hu-hu" href="https://www.filmbooster.hu/alkoto/500749-sven-mikkelsen/eletrajz/" />
<link rel="alternate" hreflang="nl-nl" href="https://www.filmbooster.nl/maker/500749-sven-mikkelsen/biografie/" />
<link rel="alternate" hreflang="pl-pl" href="https://www.filmbooster.pl/tworca/500749-sven-mikkelsen/biografia/" />
<link rel="alternate" hreflang="pt-pt" href="https://www.filmbooster.pt/criador/500749-sven-mikkelsen/biografia/" />

<link rel="canonical" href="https://www.csfd.cz/tvurce/500749-sven-mikkelsen/biografie/">

<meta property="og:site_name" content="ČSFD.cz">
<meta property="og:description" content="Biografie tvůrce Sven Mikkelsen. Vše o životě, kariéře, filmech a seriálech tvůrce Sven Mikkelsen.">
<meta property="og:title" content="Sven Mikkelsen | Biografie | ČSFD.cz">
<meta property="og:type" content="actor">
<meta property="og:url" content="https://www.csfd.cz/tvurce/500749-sven-mikkelsen/biografie/">
<meta property="fb:app_id" content="260163667481043">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://www.csfd.cz/tvurce/500749-sven-mikkelsen/biografie/">
<meta name="twitter:title" content="Sven Mikkelsen | Biografie | ČSFD.cz">
<meta name="twitter:description" content="Biografie tvůrce Sven Mikkelsen. Vše o životě, kariéře, filmech a seriálech tvůrce Sven Mikkelsen.">
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
<script type="application/ld+json">{"@context":"https://schema.org/","@type":"Person","name":"Sven Mikkelsen","image":"//static.pmgstatic.com/assets/images/4b37ac5ff3cce04f5ea0278688618768/empty-image.svg"}</script>
	<div class="creator-main-content">
		<div class="creator-about">
			<div class="creator-profile">
				<div id="profile-header-info" class="hidden creator-profile-head">
					<div id="snippet--boxButtonFanclub" class="hidden snippet-box" data-auto-show-hide-parent>
					</div>

					<div id="snippet--boxButtonWatchlist" class="hidden snippet-box" data-auto-show-hide-parent>
					</div>

					<div id="snippet--boxCharts" class="hidden snippet-box" data-auto-show-hide-parent>
					</div>

					<div id="snippet--boxFanclub" class="hidden snippet-box" data-auto-show-hide-parent>
					</div>
				</div>
				<div class="creator-profile-content creator-profile-content-nocopyright">
					<figure>
						
							<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" loading="lazy" class="empty-image" width="100" height="132" alt="Sven Mikkelsen">
						
					</figure>

					<div class="creator-profile-content-desc">
						<h1>
							Sven Mikkelsen
						</h1>
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
		<li class="tab-nav-item disabled">
			<a class="tab-link" href="javascript:void(0);">
				Přehled
			</a>
		</li>
		<li class="tab-nav-item active">
			<a class="tab-link" href="/tvurce/500749-sven-mikkelsen/biografie/">
				Biografie
			</a>
		</li>
		<li class="tab-nav-item disabled">
			<a class="tab-link" href="javascript:void(0);">
				Zajímavosti
			</a>
		</li>
		<li class="tab-nav-item disabled">
			<a class="tab-link" href="javascript:void(0);">
				Videa
			</a>
		</li>
		<li class="tab-nav-item disabled">
			<a class="tab-link" href="javascript:void(0);">
				Galerie
			</a>
		</li>
		<li class="tab-nav-item disabled">
			<a class="tab-link" href="javascript:void(0);">
				Ocenění
			</a>
		</li>
		<li class="tab-nav-item disabled">
			<a class="tab-link" href="javascript:void(0);">
				Diskuze
			</a>
		</li>
	</ul>
	<div class="tab-nav-more">
		<a class="tab-nav-more-btn" href="#dropdown-menu-2" rel="dropdownContent">
			další <i class="icon icon-arrow-down"></i>
		</a>
		<ul id="dropdown-menu-2" class="dropdown-content">
			<li class="tab-nav-item disabled">
				<a class="tab-link" href="javascript:void(0);">
					Přehled
				</a>
			</li>
			<li class="tab-nav-item active">
				<a class="tab-link" href="/tvurce/500749-sven-mikkelsen/biografie/">
					Biografie
				</a>
			</li>
			<li class="tab-nav-item disabled">
				<a class="tab-link" href="javascript:void(0);">
					Zajímavosti
				</a>
			</li>
			<li class="tab-nav-item disabled">
				<a class="tab-link" href="javascript:void(0);">
					Videa
				</a>
			</li>
			<li class="tab-nav-item disabled">
				<a class="tab-link" href="javascript:void(0);">
					Galerie
				</a>
			</li>
			<li class="tab-nav-item disabled">
				<a class="tab-link" href="javascript:void(0);">
					Ocenění
				</a>
			</li>
			<li class="tab-nav-item disabled">
				<a class="tab-link" href="javascript:void(0);">
					Diskuze
				</a>
			</li>
		</ul>
	</div>
</nav>


<div class="tab-content">
	<section class="box box-intabs">
		<header class="box-header">
			<h2>
				Biografie
			</h2>
		</header>
		<div class="box-content">
			<div class="tabs">
				<div class="tab-content tab-content-nopadding">
					<article class="article article-white">
						<div class="article-content article-content-justify">
								<p class="text-center"><span class="info"><small>Tento tvůrce zatím nemá přidanou biografii.</small></span></p>
						</div>
					</article>
				</div>
			</div>
		</div>
	</section>
</div>

				</div>
			</div>
		</div>


		<div class="creator-filmography">
<section class="box">
	<header class="box-header">
		<h2>Skladatel</h2>
		<div class="box-header-action">
			<form action="" method="get" data-form="get">
				<select name="sort" data-auto-submit-form="true" data-empty-value="year" id="frm-sort-careerBox-3-sort-sort"><option value="year">seřadit od nejnovějšího</option><option value="sort_average">seřadit od nejlepšího</option><option value="rating_count">seřadit podle počtu hodnocení</option></select>
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
								2022
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1079136-spolu/" class="film-title-name">Spolu</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
						<tr>
							<td class="year">
								2019
							</td>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/637977-poslouchej/" class="film-title-name">Poslouchej</a> <span class="film-title-info"></span></h3>							</td>
						</tr>
			</tbody>
		</table>
	</div>
</section>
		</div>

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
									<form action="/tvurce/500749-sven-mikkelsen/biografie/" method="post" id="frm-timezoneForm">
										<select name="timezone" data-auto-submit-form="true" id="frm-timezoneForm-timezone"><option value="Africa/Abidjan">Africa/Abidjan</option><option value="Africa/Accra">Africa/Accra</option><option value="Africa/Addis_Ababa">Africa/Addis Ababa</option><option value="Africa/Algiers">Africa/Algiers</option><option value="Africa/Asmara">Africa/Asmara</option><option value="Africa/Bamako">Africa/Bamako</option><option value="Africa/Bangui">Africa/Bangui</option><option value="Africa/Banjul">Africa/Banjul</option><option value="Africa/Bissau">Africa/Bissau</option><option value="Africa/Blantyre">Africa/Blantyre</option><option value="Africa/Brazzaville">Africa/Brazzaville</option><option value="Africa/Bujumbura">Africa/Bujumbura</option><option value="Africa/Cairo">Africa/Cairo</option><option value="Africa/Casablanca">Africa/Casablanca</option><option value="Africa/Ceuta">Africa/Ceuta</option><option value="Africa/Conakry">Africa/Conakry</option><option value="Africa/Dakar">Africa/Dakar</option><option value="Africa/Dar_es_Salaam">Africa/Dar es Salaam</option><option value="Africa/Djibouti">Africa/Djibouti</option><option value="Africa/Douala">Africa/Douala</option><option value="Africa/El_Aaiun">Africa/El Aaiun</option><option value="Africa/Freetown">Africa/Freetown</option><option value="Africa/Gaborone">Africa/Gaborone</option><option value="Africa/Harare">Africa/Harare</option><option value="Africa/Johannesburg">Africa/Johannesburg</option><option value="Africa/Juba">Africa/Juba</option><option value="Africa/Kampala">Africa/Kampala</option><option value="Africa/Khartoum">Africa/Khartoum</option><option value="Africa/Kigali">Africa/Kigali</option><option value="Africa/Kinshasa">Africa/Kinshasa</option><option value="Africa/Lagos">Africa/Lagos</option><option value="Africa/Libreville">Africa/Libreville</option><option value="Africa/Lome">Africa/Lome</option><option value="Africa/Luanda">Africa/Luanda</option><option value="Africa/Lubumbashi">Africa/Lubumbashi</option><option value="Africa/Lusaka">Africa/Lusaka</option><option value="Africa/Malabo">Africa/Malabo</option><option value="Africa/Maputo">Africa/Maputo</option><option value="Africa/Maseru">Africa/Maseru</option><option value="Africa/Mbabane">Africa/Mbabane</option><option value="Africa/Mogadishu">Africa/Mogadishu</option><option value="Africa/Monrovia">Africa/Monrovia</option><option value="Africa/Nairobi">Africa/Nairobi</option><option value="Africa/Ndjamena">Africa/Ndjamena</option><option value="Africa/Niamey">Africa/Niamey</option><option value="Africa/Nouakchott">Africa/Nouakchott</option><option value="Africa/Ouagadougou">Africa/Ouagadougou</option><option value="Africa/Porto-Novo">Africa/Porto-Novo</option><option value="Africa/Sao_Tome">Africa/Sao Tome</option><option value="Africa/Tripoli">Africa/Tripoli</option><option value="Africa/Tunis">Africa/Tunis</option><option value="Africa/Windhoek">Africa/Windhoek</option><option value="America/Adak">America/Adak</option><option value="America/Anchorage">America/Anchorage</option><option value="America/Anguilla">America/Anguilla</option><option value="America/Antigua">America/Antigua</option><option value="America/Araguaina">America/Araguaina</option><option value="America/Argentina/Buenos_Aires">America/Argentina/Buenos Aires</option><option value="America/Argentina/Catamarca">America/Argentina/Catamarca</option><option value="America/Argentina/Cordoba">America/Argentina/Cordoba</option><option value="America/Argentina/Jujuy">America/Argentina/Jujuy</option><option value="America/Argentina/La_Rioja">America/Argentina/La Rioja</option><option value="America/Argentina/Mendoza">America/Argentina/Mendoza</option><option value="America/Argentina/Rio_Gallegos">America/Argentina/Rio Gallegos</option><option value="America/Argentina/Salta">America/Argentina/Salta</option><option value="America/Argentina/San_Juan">America/Argentina/San Juan</option><option value="America/Argentina/San_Luis">America/Argentina/San Luis</option><option value="America/Argentina/Tucuman">America/Argentina/Tucuman</option><option value="America/Argentina/Ushuaia">America/Argentina/Ushuaia</option><option value="America/Aruba">America/Aruba</option><option value="America/Asuncion">America/Asuncion</option><option value="America/Atikokan">America/Atikokan</option><option value="America/Bahia">America/Bahia</option><option value="America/Bahia_Banderas">America/Bahia Banderas</option><option value="America/Barbados">America/Barbados</option><option value="America/Belem">America/Belem</option><option value="America/Belize">America/Belize</option><option value="America/Blanc-Sablon">America/Blanc-Sablon</option><option value="America/Boa_Vista">America/Boa Vista</option><option value="America/Bogota">America/Bogota</option><option value="America/Boise">America/Boise</option><option value="America/Cambridge_Bay">America/Cambridge Bay</option><option value="America/Campo_Grande">America/Campo Grande</option><option value="America/Cancun">America/Cancun</option><option value="America/Caracas">America/Caracas</option><option value="America/Cayenne">America/Cayenne</option><option value="America/Cayman">America/Cayman</option><option value="America/Chicago">America/Chicago</option><option value="America/Chihuahua">America/Chihuahua</option><option value="America/Ciudad_Juarez">America/Ciudad Juarez</option><option value="America/Costa_Rica">America/Costa Rica</option><option value="America/Creston">America/Creston</option><option value="America/Cuiaba">America/Cuiaba</option><option value="America/Curacao">America/Curacao</option><option value="America/Dawson">America/Dawson</option><option value="America/Dawson_Creek">America/Dawson Creek</option><option value="America/Denver">America/Denver</option><option value="America/Detroit">America/Detroit</option><option value="America/Dominica">America/Dominica</option><option value="America/Edmonton">America/Edmonton</option><option value="America/Eirunepe">America/Eirunepe</option><option value="America/El_Salvador">America/El Salvador</option><option value="America/Fort_Nelson">America/Fort Nelson</option><option value="America/Fortaleza">America/Fortaleza</option><option value="America/Glace_Bay">America/Glace Bay</option><option value="America/Goose_Bay">America/Goose Bay</option><option value="America/Grand_Turk">America/Grand Turk</option><option value="America/Grenada">America/Grenada</option><option value="America/Guadeloupe">America/Guadeloupe</option><option value="America/Guatemala">America/Guatemala</option><option value="America/Guayaquil">America/Guayaquil</option><option value="America/Guyana">America/Guyana</option><option value="America/Halifax">America/Halifax</option><option value="America/Havana">America/Havana</option><option value="America/Hermosillo">America/Hermosillo</option><option value="America/Indiana/Indianapolis">America/Indiana/Indianapolis</option><option value="America/Indiana/Knox">America/Indiana/Knox</option><option value="America/Indiana/Marengo">America/Indiana/Marengo</option><option value="America/Indiana/Petersburg">America/Indiana/Petersburg</option><option value="America/Indiana/Tell_City">America/Indiana/Tell City</option><option value="America/Indiana/Vevay">America/Indiana/Vevay</option><option value="America/Indiana/Vincennes">America/Indiana/Vincennes</option><option value="America/Indiana/Winamac">America/Indiana/Winamac</option><option value="America/Inuvik">America/Inuvik</option><option value="America/Iqaluit">America/Iqaluit</option><option value="America/Jamaica">America/Jamaica</option><option value="America/Juneau">America/Juneau</option><option value="America/Kentucky/Louisville">America/Kentucky/Louisville</option><option value="America/Kentucky/Monticello">America/Kentucky/Monticello</option><option value="America/Kralendijk">America/Kralendijk</option><option value="America/La_Paz">America/La Paz</option><option value="America/Lima">America/Lima</option><option value="America/Los_Angeles">America/Los Angeles</option><option value="America/Lower_Princes">America/Lower Princes</option><option value="America/Maceio">America/Maceio</option><option value="America/Managua">America/Managua</option><option value="America/Manaus">America/Manaus</option><option value="America/Marigot">America/Marigot</option><option value="America/Martinique">America/Martinique</option><option value="America/Matamoros">America/Matamoros</option><option value="America/Mazatlan">America/Mazatlan</option><option value="America/Menominee">America/Menominee</option><option value="America/Merida">America/Merida</option><option value="America/Metlakatla">America/Metlakatla</option><option value="America/Mexico_City">America/Mexico City</option><option value="America/Miquelon">America/Miquelon</option><option value="America/Moncton">America/Moncton</option><option value="America/Monterrey">America/Monterrey</option><option value="America/Montevideo">America/Montevideo</option><option value="America/Montserrat">America/Montserrat</option><option value="America/Nassau">America/Nassau</option><option value="America/New_York">America/New York</option><option value="America/Nome">America/Nome</option><option value="America/North_Dakota/Beulah">America/North Dakota/Beulah</option><option value="America/North_Dakota/Center">America/North Dakota/Center</option><option value="America/North_Dakota/New_Salem">America/North Dakota/New Salem</option><option value="America/Nuuk">America/Nuuk</option><option value="America/Ojinaga">America/Ojinaga</option><option value="America/Panama">America/Panama</option><option value="America/Paramaribo">America/Paramaribo</option><option value="America/Phoenix">America/Phoenix</option><option value="America/Port-au-Prince">America/Port-au-Prince</option><option value="America/Port_of_Spain">America/Port of_Spain</option><option value="America/Porto_Velho">America/Porto Velho</option><option value="America/Puerto_Rico">America/Puerto Rico</option><option value="America/Punta_Arenas">America/Punta Arenas</option><option value="America/Rankin_Inlet">America/Rankin Inlet</option><option value="America/Recife">America/Recife</option><option value="America/Regina">America/Regina</option><option value="America/Resolute">America/Resolute</option><option value="America/Rio_Branco">America/Rio Branco</option><option value="America/Santarem">America/Santarem</option><option value="America/Santiago">America/Santiago</option><option value="America/Santo_Domingo">America/Santo Domingo</option><option value="America/Sao_Paulo">America/Sao Paulo</option><option value="America/Scoresbysund">America/Scoresbysund</option><option value="America/Sitka">America/Sitka</option><option value="America/St_Barthelemy">America/St Barthelemy</option><option value="America/St_Johns">America/St. John's</option><option value="America/St_Kitts">America/St Kitts</option><option value="America/St_Lucia">America/St Lucia</option><option value="America/St_Thomas">America/St Thomas</option><option value="America/St_Vincent">America/St Vincent</option><option value="America/Swift_Current">America/Swift Current</option><option value="America/Tegucigalpa">America/Tegucigalpa</option><option value="America/Thule">America/Thule</option><option value="America/Tijuana">America/Tijuana</option><option value="America/Toronto">America/Toronto</option><option value="America/Tortola">America/Tortola</option><option value="America/Vancouver">America/Vancouver</option><option value="America/Whitehorse">America/Whitehorse</option><option value="America/Winnipeg">America/Winnipeg</option><option value="America/Yakutat">America/Yakutat</option><option value="America/Yellowknife">America/Yellowknife</option><option value="Antarctica/Syowa">Antarctica/Syowa</option><option value="Arctic/Longyearbyen">Arctic/Longyearbyen</option><option value="Asia/Aden">Asia/Aden</option><option value="Asia/Almaty">Asia/Almaty</option><option value="Asia/Amman">Asia/Amman</option><option value="Asia/Anadyr">Asia/Anadyr</option><option value="Asia/Aqtau">Asia/Aqtau</option><option value="Asia/Aqtobe">Asia/Aqtobe</option><option value="Asia/Ashgabat">Asia/Ashgabat</option><option value="Asia/Atyrau">Asia/Atyrau</option><option value="Asia/Baghdad">Asia/Baghdad</option><option value="Asia/Bahrain">Asia/Bahrain</option><option value="Asia/Baku">Asia/Baku</option><option value="Asia/Bangkok">Asia/Bangkok</option><option value="Asia/Barnaul">Asia/Barnaul</option><option value="Asia/Beirut">Asia/Beirut</option><option value="Asia/Bishkek">Asia/Bishkek</option><option value="Asia/Brunei">Asia/Brunei</option><option value="Asia/Chita">Asia/Chita</option><option value="Asia/Choibalsan">Asia/Choibalsan</option><option value="Asia/Colombo">Asia/Colombo</option><option value="Asia/Damascus">Asia/Damascus</option><option value="Asia/Dhaka">Asia/Dhaka</option><option value="Asia/Dili">Asia/Dili</option><option value="Asia/Dubai">Asia/Dubai</option><option value="Asia/Dushanbe">Asia/Dushanbe</option><option value="Asia/Famagusta">Asia/Famagusta</option><option value="Asia/Gaza">Asia/Gaza</option><option value="Asia/Hebron">Asia/Hebron</option><option value="Asia/Ho_Chi_Minh">Asia/Ho Chi_Minh</option><option value="Asia/Hong_Kong">Asia/Hong_Kong</option><option value="Asia/Hovd">Asia/Hovd</option><option value="Asia/Irkutsk">Asia/Irkutsk</option><option value="Asia/Jakarta">Asia/Jakarta</option><option value="Asia/Jayapura">Asia/Jayapura</option><option value="Asia/Jerusalem">Asia/Jerusalem</option><option value="Asia/Kabul">Asia/Kabul</option><option value="Asia/Kamchatka">Asia/Kamchatka</option><option value="Asia/Karachi">Asia/Karachi</option><option value="Asia/Kathmandu">Asia/Kathmandu</option><option value="Asia/Kolkata">Asia/Kolkata</option><option value="Asia/Krasnoyarsk">Asia/Krasnoyarsk</option><option value="Asia/Kuala_Lumpur">Asia/Kuala_Lumpur</option><option value="Asia/Kuching">Asia/Kuching</option><option value="Asia/Kuwait">Asia/Kuwait</option><option value="Asia/Macau">Asia/Macau</option><option value="Asia/Magadan">Asia/Magadan</option><option value="Asia/Makassar">Asia/Makassar</option><option value="Asia/Manila">Asia/Manila</option><option value="Asia/Muscat">Asia/Muscat</option><option value="Asia/Nicosia">Asia/Nicosia</option><option value="Asia/Novokuznetsk">Asia/Novokuznetsk</option><option value="Asia/Novosibirsk">Asia/Novosibirsk</option><option value="Asia/Omsk">Asia/Omsk</option><option value="Asia/Oral">Asia/Oral</option><option value="Asia/Phnom_Penh">Asia/Phnom_Penh</option><option value="Asia/Pontianak">Asia/Pontianak</option><option value="Asia/Pyongyang">Asia/Pyongyang</option><option value="Asia/Qatar">Asia/Qatar</option><option value="Asia/Qostanay">Asia/Qostanay</option><option value="Asia/Qyzylorda">Asia/Qyzylorda</option><option value="Asia/Riyadh">Asia/Riyadh</option><option value="Asia/Sakhalin">Asia/Sakhalin</option><option value="Asia/Samarkand">Asia/Samarkand</option><option value="Asia/Seoul">Asia/Seoul</option><option value="Asia/Shanghai">Asia/Shanghai</option><option value="Asia/Singapore">Asia/Singapore</option><option value="Asia/Taipei">Asia/Taipei</option><option value="Asia/Tashkent">Asia/Tashkent</option><option value="Asia/Tbilisi">Asia/Tbilisi</option><option value="Asia/Tehran">Asia/Tehran</option><option value="Asia/Thimphu">Asia/Thimphu</option><option value="Asia/Tokyo">Asia/Tokyo</option><option value="Asia/Tomsk">Asia/Tomsk</option><option value="Asia/Ulaanbaatar">Asia/Ulaanbaatar</option><option value="Asia/Urumqi">Asia/Urumqi</option><option value="Asia/Vientiane">Asia/Vientiane</option><option value="Asia/Vladivostok">Asia/Vladivostok</option><option value="Asia/Yakutsk">Asia/Yakutsk</option><option value="Asia/Yangon">Asia/Yangon</option><option value="Asia/Yekaterinburg">Asia/Yekaterinburg</option><option value="Asia/Yerevan">Asia/Yerevan</option><option value="Atlantic/Azores">Atlantic/Azores</option><option value="Atlantic/Bermuda">Atlantic/Bermuda</option><option value="Atlantic/Canary">Atlantic/Canary</option><option value="Atlantic/Cape_Verde">Atlantic/Cape Verde</option><option value="Atlantic/Faroe">Atlantic/Faroe</option><option value="Atlantic/Madeira">Atlantic/Madeira</option><option value="Atlantic/Reykjavik">Atlantic/Reykjavik</option><option value="Atlantic/South_Georgia">Atlantic/South Georgia</option><option value="Atlantic/St_Helena">Atlantic/St Helena</option><option value="Atlantic/Stanley">Atlantic/Stanley</option><option value="Australia/Adelaide">Australia/Adelaide</option><option value="Australia/Brisbane">Australia/Brisbane</option><option value="Australia/Broken_Hill">Australia/Broken Hill</option><option value="Australia/Darwin">Australia/Darwin</option><option value="Australia/Eucla">Australia/Eucla</option><option value="Australia/Hobart">Australia/Hobart</option><option value="Australia/Lindeman">Australia/Lindeman</option><option value="Australia/Lord_Howe">Australia/Lord Howe</option><option value="Australia/Melbourne">Australia/Melbourne</option><option value="Australia/Perth">Australia/Perth</option><option value="Australia/Sydney">Australia/Sydney</option><option value="Europe/Amsterdam">Europe/Amsterdam</option><option value="Europe/Andorra">Europe/Andorra</option><option value="Europe/Astrakhan">Europe/Astrakhan</option><option value="Europe/Athens">Europe/Athens</option><option value="Europe/Belgrade">Europe/Belgrade</option><option value="Europe/Berlin">Europe/Berlin</option><option value="Europe/Bratislava">Europe/Bratislava</option><option value="Europe/Brussels">Europe/Brussels</option><option value="Europe/Bucharest">Europe/Bucharest</option><option value="Europe/Budapest">Europe/Budapest</option><option value="Europe/Chisinau">Europe/Chisinau</option><option value="Europe/Copenhagen">Europe/Copenhagen</option><option value="Europe/Dublin">Europe/Dublin</option><option value="Europe/Gibraltar">Europe/Gibraltar</option><option value="Europe/Guernsey">Europe/Guernsey</option><option value="Europe/Helsinki">Europe/Helsinki</option><option value="Europe/Isle_of_Man">Europe/Isle of Man</option><option value="Europe/Istanbul">Europe/Istanbul</option><option value="Europe/Jersey">Europe/Jersey</option><option value="Europe/Kaliningrad">Europe/Kaliningrad</option><option value="Europe/Kirov">Europe/Kirov</option><option value="Europe/Kyiv">Europe/Kyiv</option><option value="Europe/Lisbon">Europe/Lisbon</option><option value="Europe/Ljubljana">Europe/Ljubljana</option><option value="Europe/London">Europe/London</option><option value="Europe/Luxembourg">Europe/Luxembourg</option><option value="Europe/Madrid">Europe/Madrid</option><option value="Europe/Malta">Europe/Malta</option><option value="Europe/Mariehamn">Europe/Mariehamn</option><option value="Europe/Minsk">Europe/Minsk</option><option value="Europe/Monaco">Europe/Monaco</option><option value="Europe/Moscow">Europe/Moscow</option><option value="Europe/Oslo">Europe/Oslo</option><option value="Europe/Paris">Europe/Paris</option><option value="Europe/Podgorica">Europe/Podgorica</option><option value="Europe/Prague" selected>Europe/Prague</option><option value="Europe/Riga">Europe/Riga</option><option value="Europe/Rome">Europe/Rome</option><option value="Europe/Samara">Europe/Samara</option><option value="Europe/San_Marino">Europe/San Marino</option><option value="Europe/Sarajevo">Europe/Sarajevo</option><option value="Europe/Saratov">Europe/Saratov</option><option value="Europe/Simferopol">Europe/Simferopol</option><option value="Europe/Skopje">Europe/Skopje</option><option value="Europe/Sofia">Europe/Sofia</option><option value="Europe/Stockholm">Europe/Stockholm</option><option value="Europe/Tallinn">Europe/Tallinn</option><option value="Europe/Tirane">Europe/Tirane</option><option value="Europe/Ulyanovsk">Europe/Ulyanovsk</option><option value="Europe/Vaduz">Europe/Vaduz</option><option value="Europe/Vatican">Europe/Vatican</option><option value="Europe/Vienna">Europe/Vienna</option><option value="Europe/Vilnius">Europe/Vilnius</option><option value="Europe/Volgograd">Europe/Volgograd</option><option value="Europe/Warsaw">Europe/Warsaw</option><option value="Europe/Zagreb">Europe/Zagreb</option><option value="Europe/Zurich">Europe/Zurich</option><option value="Indian/Antananarivo">Indian/Antananarivo</option><option value="Indian/Chagos">Indian/Chagos</option><option value="Indian/Christmas">Indian/Christmas</option><option value="Indian/Cocos">Indian/Cocos</option><option value="Indian/Comoro">Indian/Comoro</option><option value="Indian/Kerguelen">Indian/Kerguelen</option><option value="Indian/Mahe">Indian/Mahe</option><option value="Indian/Maldives">Indian/Maldives</option><option value="Indian/Mauritius">Indian/Mauritius</option><option value="Indian/Mayotte">Indian/Mayotte</option><option value="Indian/Reunion">Indian/Reunion</option><option value="Pacific/Apia">Pacific/Apia</option><option value="Pacific/Auckland">Pacific/Auckland</option><option value="Pacific/Bougainville">Pacific/Bougainville</option><option value="Pacific/Chatham">Pacific/Chatham</option><option value="Pacific/Chuuk">Pacific/Chuuk</option><option value="Pacific/Easter">Pacific/Easter</option><option value="Pacific/Efate">Pacific/Efate</option><option value="Pacific/Fakaofo">Pacific/Fakaofo</option><option value="Pacific/Fiji">Pacific/Fiji</option><option value="Pacific/Funafuti">Pacific/Funafuti</option><option value="Pacific/Galapagos">Pacific/Galapagos</option><option value="Pacific/Gambier">Pacific/Gambier</option><option value="Pacific/Guadalcanal">Pacific/Guadalcanal</option><option value="Pacific/Guam">Pacific/Guam</option><option value="Pacific/Honolulu">Pacific/Honolulu</option><option value="Pacific/Kanton">Pacific/Kanton</option><option value="Pacific/Kiritimati">Pacific/Kiritimati</option><option value="Pacific/Kosrae">Pacific/Kosrae</option><option value="Pacific/Kwajalein">Pacific/Kwajalein</option><option value="Pacific/Majuro">Pacific/Majuro</option><option value="Pacific/Marquesas">Pacific/Marquesas</option><option value="Pacific/Midway">Pacific/Midway</option><option value="Pacific/Nauru">Pacific/Nauru</option><option value="Pacific/Niue">Pacific/Niue</option><option value="Pacific/Norfolk">Pacific/Norfolk</option><option value="Pacific/Noumea">Pacific/Noumea</option><option value="Pacific/Pago_Pago">Pacific/Pago Pago</option><option value="Pacific/Palau">Pacific/Palau</option><option value="Pacific/Pitcairn">Pacific/Pitcairn</option><option value="Pacific/Pohnpei">Pacific/Pohnpei</option><option value="Pacific/Port_Moresby">Pacific/Port Moresby</option><option value="Pacific/Rarotonga">Pacific/Rarotonga</option><option value="Pacific/Saipan">Pacific/Saipan</option><option value="Pacific/Tahiti">Pacific/Tahiti</option><option value="Pacific/Tarawa">Pacific/Tarawa</option><option value="Pacific/Tongatapu">Pacific/Tongatapu</option><option value="Pacific/Wake">Pacific/Wake</option><option value="Pacific/Wallis">Pacific/Wallis</option></select>
									<input type="hidden" name="_do" value="timezoneForm-submit"></form>
										<p>Detekovali jsme, že jsi v časové zóně Europe/Chisinau. <a href="/tvurce/500749-sven-mikkelsen/biografie/?value=Europe%2FChisinau&do=changeHomeTimezone">Změnit časovou zónu</a></p>
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


<script type="text/json" id="js-common-config">{"country":1,"domain":"csfd.cz","host":"www.csfd.cz","userLanguageId":1,"translations":{"web.ajax.default.error.message":"Omlouváme se, ale nastala chyba při zpracování.","web.ajax.resend.button":"Odeslat znovu","web.autocomplete.creator.header":"Tvůrci","web.autocomplete.creator.more.link":"Všichni tvůrci","web.autocomplete.film.header":"Filmy","web.autocomplete.film.more.link":"Všechny filmy","web.autocomplete.noservice":"Služba vyhledávání není momentálně dostupná.","web.autocomplete.searching":"Vyhledávám...","web.autocomplete.search.select":"Vyplň název filmu / jméno tvůrce nebo uživatele","web.autocomplete.series.header":"Seriály","web.autocomplete.series.more.link":"Všechny seriály","web.autocomplete.user.header":"Uživatelé","web.autocomplete.user.more.link":"Všichni uživatelé","web.check.all":"zaškrtnout vše","web.fileupload.preloader":"Načítám knihovnu, prosím o strpení...","web.modal.confirm.close":"Opravdu chceš zavřít okno? Možná máš neuložené změny.","web.preloader.loading":"Načítání...","web.search.creator.notfound":"Nenalezeni žádní tvůrci","web.search.film.notfound":"Nenalezeny žádné filmy","web.search.series.notfound":"Nenalezeny žádné seriály","web.search.user.notfound":"Nenalezeni žádní uživatelé","web.selectize.plugin.remove.button.remove":"Odebrat","web.sortable.error.move":"Při přesunu pozic došlo k chybě. Stránka bude obnovena. Pokračovat?","web.common.onboarding.button.previous":"Předchozí","web.common.onboarding.button.next":"Další","web.common.onboarding.button.close":"Zavřít"},"route":":Web:Creator:Biographies:default","isLoggedIn":false,"userId":null,"hooks":["FormGet","AutoSubmitForm"]}</script>
<script src="//static.pmgstatic.com/assets/utils-js/c38a059f9f69d34b09118407202a750c/scripts.min.js"></script>
<script type="text/javascript">
	CSFDAds.setTServer("https://a.csfd.cz/csfd/tserver");
	CSFDAds.complete({"ball":{"site":"csfd.cz","page":3,"login":2,"viewId":68862388,"creator_id":500749},"0":{"area":"leaderboard","size":"1000x210,2000x1400,1800x1000,728x90,970x210,750x100,998x200,930x180,970x90,750x200,1000x200,branding_web"},"1":{"area":"billboard","size":"970x250,728x90,1000x310,970x310,970x210,950x300,900x250,1000x210,750x100,998x200,930x180,970x90,750x200,1000x250,750x300,980x250,1000x200"},"2":{"area":"slide_up","size":"970x250,728x90,1000x310,320x100,970x310,970x210,320x50,300x100,300x50,360x90,500x200,320x150,slide_up"},"3":{"area":"mobile_leaderboard","size":"320x100,320x50,300x100,300x50"},"4":{"area":"mobile_billboard","size":"300x300,300x250,250x250,200x200,300x100"}}, false, false);
</script>
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TM3S526" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
	</body>

	<a href="#top" title="Zpět nahoru" id="back-to-top"><i class="icon icon-arrow-up" aria-hidden="true"></i></a>
</html>

`;
