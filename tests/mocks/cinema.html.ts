export const cinemaMock = `
<!DOCTYPE html>
<html lang="cs-CZ">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Kino | Program | ČSFD.cz</title>
<script>
	var ab_detection = 'xbax';
	window[ab_detection] = 1;
</script>
<script src="/adcounter.js"></script>
<script>
	window.dataLayer = window.dataLayer || [];
	function gtag() {window.dataLayer.push(arguments);}

	gtag('consent', 'default', {
		'ad_storage': 'denied',
		'analytics_storage': 'denied',
		'functionality_storage': 'denied',
		'personalization_storage': 'denied',
		'security_storage': 'denied'
	});

	window.didomiOnReady = window.didomiOnReady || [];
	window.didomiOnReady.push(function () {
		if (Didomi.getUserConsentStatusForPurpose('publishers-Kqq3iPge')) {
			gtag('consent', 'update', {
				'ad_storage': 'granted',
				'analytics_storage': 'granted',
				'functionality_storage': 'granted',
				'personalization_storage': 'granted',
				'security_storage': 'granted'
			});

			window.dataLayer.push({
				'event': 'consent_init',
				'consent': {
					'ad_storage': 'granted',
					'analytics_storage': 'granted',
					'functionality_storage': 'granted',
					'personalization_storage': 'granted',
					'security_storage': 'granted'
				},
			});
		}
	});

	var googleAnalyticsPageViewData = {"event":"page_view","site":"www.csfd.cz","platform":"web","environment":"production","language":"cs","device":"desktop","user":{"id":null,"adblock":false},"page":{"id":null,"type":"Cinema","title":null,"url":"https:\/\/www.csfd.cz\/kino\/","path":"\/kino\/","section":"Cinema"},"_clear":true};
	if (googleAnalyticsPageViewData !== null) {
		googleAnalyticsPageViewData.page.title = "Kino | Program | ČSFD.cz";
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
<script>window.gdprAppliesGlobally=true;(function(){function a(e){if(!window.frames[e]){if(document.body&&document.body.firstChild){var t=document.body;var n=document.createElement("iframe");n.style.display="none";n.name=e;n.title=e;t.insertBefore(n,t.firstChild)} else{setTimeout(function(){a(e)},5)}}}function e(n,r,o,c,s){function e(e,t,n,a){if(typeof n!=="function"){return}if(!window[r]){window[r]=[]}var i=false;if(s){i=s(e,t,n)}if(!i){window[r].push({command:e,parameter:t,callback:n,version:a})}}e.stub=true;function t(a){if(!window[n]||window[n].stub!==true){return}if(!a.data){return} var i=typeof a.data==="string";var e;try{e=i?JSON.parse(a.data):a.data}catch(t){return}if(e[o]){var r=e[o];window[n](r.command,r.parameter,function(e,t){var n={};n[c]={returnValue:e,success:t,callId:r.callId};a.source.postMessage(i?JSON.stringify(n):n,"*")},r.version)}} if(typeof window[n]!=="function"){window[n]=e;if(window.addEventListener){window.addEventListener("message",t,false)}else{window.attachEvent("onmessage",t)}}}e("__tcfapi","__tcfapiBuffer","__tcfapiCall","__tcfapiReturn");a("__tcfapiLocator"); (function(e){var t=document.createElement("script");t.id="spcloader";t.type="text/javascript";t.async=true;t.src="https://sdk.privacy-center.org/"+e+"/loader.js?target="+document.location.hostname;t.charset="utf-8";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)})("9a8e2159-3781-4da1-9590-fbf86806f86e")})();</script><script src="https://cdn.cpex.cz/cmp/v2/cpex-cmp-upgrade.min.js" type="text/javascript"></script>
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

<meta name="description" content="Program všech českých kin. Vyber si film dle hodnocení ČSFD a vyraž do kina.">


<link rel="canonical" href="https://www.csfd.cz/kino/">

<meta property="og:site_name" content="ČSFD.cz">
<meta property="og:description" content="Program všech českých kin. Vyber si film dle hodnocení ČSFD a vyraž do kina.">
<meta property="og:title" content="Kino | Program | ČSFD.cz">
<meta property="og:url" content="https://www.csfd.cz/kino/?period=today&amp;district=1">
<meta property="fb:app_id" content="260163667481043">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://www.csfd.cz/kino/?period=today&amp;district=1">
<meta name="twitter:title" content="Kino | Program | ČSFD.cz">
<meta name="twitter:description" content="Program všech českých kin. Vyber si film dle hodnocení ČSFD a vyraž do kina.">
		<meta name="theme-color" content="#ba0305">
		<meta name="theme-color" media="(prefers-color-scheme: light)" content="#ba0305">
		<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#ba0305">
		<link rel="stylesheet" href="//static.pmgstatic.com/assets/web-css/b691ce0d69948a67040ffa7d7ea3277c/styles.min.css">
		<link rel="shortcut icon" href="//static.pmgstatic.com/assets/images/76af1be24867e083347626550b6adef7/favicon.ico">
		<link rel="apple-touch-icon" href="//static.pmgstatic.com/assets/images/76af1be24867e083347626550b6adef7/apple-touch-icon.png">
		<script src="//static.pmgstatic.com/assets/vendor/6832d710d453923cf0491030058f80d3/jquery.min.js"></script>
		<script src="//static.pmgstatic.com/assets/web-js/bc652088d6653d0a21ebd4f108f96035/scripts.min.js" defer></script>

<script type="text/javascript">
	window.AdsObject = {};
	window.sasUrl = "https://a.csfd.cz/csfd";
</script>

<script src="https://publisher.caroda.io/videoPlayer/caroda.min.js?ctok=231efd424e405a" crossorigin="anonymous" defer></script>
	</head>

	<body id="top" class="lang-1">
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
							<a href="/akce/413-csfd-projekce-bastard/">ČSFD projekce <em>Bastard</em></a>
						</p>
					</div>
				</div>

				<header class="page-header user-not-logged projection-on">
					<div class="header-main">
						<div class="logo">
							<a href="/" class="csfd-cz">ČSFD.cz</a>
						</div>


						<div class="header-search">
							<form id="main-search-form" action="/hledat/" data-autocomplete-url="/api/search/autocomplete/" method="get" role="search">
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
<div id="contributionFilm" class="modal mfp-hide" role="dialog">
	<h2>Přidat film</h2>
	<p>Pro přidání filmu se musíš nejdřív přihlásit.</p>
	<a class="button button-red link-preloader" href="/pridat/film/">Přihlásit se</a>
</div>
			<li><a href="#contributionFilm" rel="contentInfoModal">Přidat film</a></li>

<div id="contributionCreator" class="modal mfp-hide" role="dialog">
	<h2>Přidat tvůrce</h2>
	<p>Pro přidání tvůrce se musíš nejdřív přihlásit.</p>
	<a class="button button-red link-preloader" href="/pridat/tvurce/">Přihlásit se</a>
</div>
			<li><a href="#contributionCreator" rel="contentInfoModal">Přidat tvůrce</a></li>
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
		<li class="tab-nav-item active">
			<a href="/kino/?period=today&amp;district=1">Kino</a>
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
		<li class="tab-nav-item yellow">
			<a href="/cesky-lev/">Český lev</a>
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
				<li class="tab-nav-item active">
					<a href="/kino/?period=today&amp;district=1">Kino</a>
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
				<li class="tab-nav-item yellow">
					<a href="/cesky-lev/">Český lev</a>
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

					<div class="heading-h1">
						<div class="column">
							<h1>
								Kino - Program
							</h1>
						</div>
					</div>

<div class="cinema-main">
	<div class="tabs" id="tabs">
<nav class="tab-nav tab-nav-count-3">
	<ul class="tab-nav-list">
		<li class="tab-nav-item active">
			<a class="tab-link" href="/kino/?period=today&amp;district=1">
				Program kin
			</a>
		</li>
		<li class="tab-nav-item">
			<a class="tab-link" href="/kino/premiery/">
				Kino premiéry
			</a>
		</li>
		<li class="tab-nav-item">
			<a class="tab-link" href="/kino/prehled/?year=2024">
				Roční přehled premiér
			</a>
		</li>
	</ul>
	<div class="tab-nav-more">
		<a class="tab-nav-more-btn" href="#dropdown-menu-2" rel="dropdownContent">
			další <i class="icon icon-arrow-down"></i>
		</a>
		<ul id="dropdown-menu-2" class="dropdown-content">
			<li class="tab-nav-item active">
				<a class="tab-link" href="/kino/?period=today&amp;district=1">
					Program kin
				</a>
			</li>
			<li class="tab-nav-item">
				<a class="tab-link" href="/kino/premiery/">
					Kino premiéry
				</a>
			</li>
			<li class="tab-nav-item">
				<a class="tab-link" href="/kino/prehled/?year=2024">
					Roční přehled premiér
				</a>
			</li>
		</ul>
	</div>
</nav>


<div class="tab-content">
		<div class="vod-selection-header">
			<h3>Dnes nejžhavější v kinech</h3>
		</div>

		<div class="vod-selection">
			<div class="vod-selection-item">
				<a href="/film/1002404-chudacci/" title="Chudáčci" class="vod-selection-a">
					<figure>
						<img class="img" src="//image.pmgstatic.com/cache/resized/w140/files/images/film/posters/168/416/168416248_99popv.jpg" loading="lazy" width="140" height="198" srcset="//image.pmgstatic.com/cache/resized/w140/files/images/film/posters/168/416/168416248_99popv.jpg 1x, //image.pmgstatic.com/cache/resized/w280/files/images/film/posters/168/416/168416248_99popv.jpg 2x, //image.pmgstatic.com/cache/resized/w420/files/images/film/posters/168/416/168416248_99popv.jpg 3x" alt="Chudáčci">
					</figure>
				</a>
				<div class="vod-button"><a href="/kino/?films%5B0%5D=1002404&amp;period=all&amp;district=1" class="button button-white red-text">V kinech</a></div>
			</div>
			<div class="vod-selection-item">
				<a href="/film/1246937-to-se-mi-snad-zda/" title="To se mi snad zdá" class="vod-selection-a">
					<figure>
						<img class="img" src="//image.pmgstatic.com/cache/resized/w140/files/images/film/posters/168/411/168411588_pcvi74.jpg" loading="lazy" width="140" height="198" srcset="//image.pmgstatic.com/cache/resized/w140/files/images/film/posters/168/411/168411588_pcvi74.jpg 1x, //image.pmgstatic.com/cache/resized/w280/files/images/film/posters/168/411/168411588_pcvi74.jpg 2x, //image.pmgstatic.com/cache/resized/w420/files/images/film/posters/168/411/168411588_pcvi74.jpg 3x" alt="To se mi snad zdá">
					</figure>
				</a>
				<div class="vod-button"><a href="/kino/?films%5B0%5D=1246937&amp;period=all&amp;district=1" class="button button-white red-text">V kinech</a></div>
			</div>
			<div class="vod-selection-item">
				<a href="/film/925732-napoleon/" title="Napoleon" class="vod-selection-a">
					<figure>
						<img class="img" src="//image.pmgstatic.com/cache/resized/w140/files/images/film/posters/168/299/168299859_vsvgns.png" loading="lazy" width="140" height="198" srcset="//image.pmgstatic.com/cache/resized/w140/files/images/film/posters/168/299/168299859_vsvgns.png 1x, //image.pmgstatic.com/cache/resized/w280/files/images/film/posters/168/299/168299859_vsvgns.png 2x, //image.pmgstatic.com/cache/resized/w420/files/images/film/posters/168/299/168299859_vsvgns.png 3x" alt="Napoleon">
					</figure>
				</a>
				<div class="vod-button"><a href="/kino/?films%5B0%5D=925732&amp;period=all&amp;district=1" class="button button-white red-text">V kinech</a></div>
			</div>
			<div class="vod-selection-item">
				<a href="/film/1238190-bastard/" title="Bastard" class="vod-selection-a">
					<figure>
						<img class="img" src="//image.pmgstatic.com/cache/resized/w140/files/images/film/posters/168/417/168417717_q7p2px.jpg" loading="lazy" width="140" height="198" srcset="//image.pmgstatic.com/cache/resized/w140/files/images/film/posters/168/417/168417717_q7p2px.jpg 1x, //image.pmgstatic.com/cache/resized/w280/files/images/film/posters/168/417/168417717_q7p2px.jpg 2x, //image.pmgstatic.com/cache/resized/w420/files/images/film/posters/168/417/168417717_q7p2px.jpg 3x" alt="Bastard">
					</figure>
				</a>
				<div class="vod-button"><a href="/kino/?films%5B0%5D=1238190&amp;period=all&amp;district=1" class="button button-white red-text">V kinech</a></div>
			</div>
			<div class="vod-selection-item">
				<a href="/film/594507-zabijaci-rozkvetleho-mesice/" title="Zabijáci rozkvetlého měsíce" class="vod-selection-a">
					<figure>
						<img class="img" src="//image.pmgstatic.com/cache/resized/w140/files/images/film/posters/168/049/168049057_c71n7s.jpg" loading="lazy" width="140" height="198" srcset="//image.pmgstatic.com/cache/resized/w140/files/images/film/posters/168/049/168049057_c71n7s.jpg 1x, //image.pmgstatic.com/cache/resized/w280/files/images/film/posters/168/049/168049057_c71n7s.jpg 2x, //image.pmgstatic.com/cache/resized/w420/files/images/film/posters/168/049/168049057_c71n7s.jpg 3x" alt="Zabijáci rozkvetlého měsíce">
					</figure>
				</a>
				<div class="vod-button"><a href="/kino/?films%5B0%5D=594507&amp;period=all&amp;district=1" class="button button-white red-text">V kinech</a></div>
			</div>
			<div class="vod-selection-item">
				<a href="/film/1000599-ferrari/" title="Ferrari" class="vod-selection-a">
					<figure>
						<img class="img" src="//image.pmgstatic.com/cache/resized/w140/files/images/film/posters/168/353/168353401_vaib38.jpg" loading="lazy" width="140" height="198" srcset="//image.pmgstatic.com/cache/resized/w140/files/images/film/posters/168/353/168353401_vaib38.jpg 1x, //image.pmgstatic.com/cache/resized/w280/files/images/film/posters/168/353/168353401_vaib38.jpg 2x, //image.pmgstatic.com/cache/resized/w420/files/images/film/posters/168/353/168353401_vaib38.jpg 3x" alt="Ferrari">
					</figure>
				</a>
				<div class="vod-button"><a href="/kino/?films%5B0%5D=1000599&amp;period=all&amp;district=1" class="button button-white red-text">V kinech</a></div>
			</div>
			<div class="vod-selection-item">
				<a href="/film/1358574-s-tebou-nikdy/" title="S tebou nikdy" class="vod-selection-a">
					<figure>
						<img class="img" src="//image.pmgstatic.com/cache/resized/w140/files/images/film/posters/168/300/168300843_lfjd5w.jpg" loading="lazy" width="140" height="198" srcset="//image.pmgstatic.com/cache/resized/w140/files/images/film/posters/168/300/168300843_lfjd5w.jpg 1x, //image.pmgstatic.com/cache/resized/w280/files/images/film/posters/168/300/168300843_lfjd5w.jpg 2x, //image.pmgstatic.com/cache/resized/w420/files/images/film/posters/168/300/168300843_lfjd5w.jpg 3x" alt="S tebou nikdy">
					</figure>
				</a>
				<div class="vod-button"><a href="/kino/?films%5B0%5D=1358574&amp;period=all&amp;district=1" class="button button-white red-text">V kinech</a></div>
			</div>
			<div class="vod-selection-item">
				<a href="/film/1242515-bod-obnovy/" title="Bod obnovy" class="vod-selection-a">
					<figure>
						<img class="img" src="//image.pmgstatic.com/cache/resized/w140/files/images/film/posters/167/880/167880876_s6ezx4.jpg" loading="lazy" width="140" height="198" srcset="//image.pmgstatic.com/cache/resized/w140/files/images/film/posters/167/880/167880876_s6ezx4.jpg 1x, //image.pmgstatic.com/cache/resized/w280/files/images/film/posters/167/880/167880876_s6ezx4.jpg 2x, //image.pmgstatic.com/cache/resized/w420/files/images/film/posters/167/880/167880876_s6ezx4.jpg 3x" alt="Bod obnovy">
					</figure>
				</a>
				<div class="vod-button"><a href="/kino/?films%5B0%5D=1242515&amp;period=all&amp;district=1" class="button button-white red-text">V kinech</a></div>
			</div>
			<div class="vod-selection-item">
				<a href="/film/1105802-krvavy-johann/" title="Krvavý Johann" class="vod-selection-a">
					<figure>
						<img class="img" src="//image.pmgstatic.com/cache/resized/w140/files/images/film/posters/167/683/167683837_ys93it.jpg" loading="lazy" width="140" height="198" srcset="//image.pmgstatic.com/cache/resized/w140/files/images/film/posters/167/683/167683837_ys93it.jpg 1x, //image.pmgstatic.com/cache/resized/w280/files/images/film/posters/167/683/167683837_ys93it.jpg 2x, //image.pmgstatic.com/cache/resized/w420/files/images/film/posters/167/683/167683837_ys93it.jpg 3x" alt="Krvavý Johann">
					</figure>
				</a>
				<div class="vod-button"><a href="/kino/?films%5B0%5D=1105802&amp;period=all&amp;district=1" class="button button-white red-text">V kinech</a></div>
			</div>
			<div class="vod-selection-item">
				<a href="/film/1091993-oppenheimer/" title="Oppenheimer" class="vod-selection-a">
					<figure>
						<img class="img" src="//image.pmgstatic.com/cache/resized/w140/files/images/film/posters/167/617/167617369_t19azl.jpg" loading="lazy" width="140" height="197" srcset="//image.pmgstatic.com/cache/resized/w140/files/images/film/posters/167/617/167617369_t19azl.jpg 1x, //image.pmgstatic.com/cache/resized/w280/files/images/film/posters/167/617/167617369_t19azl.jpg 2x, //image.pmgstatic.com/cache/resized/w420/files/images/film/posters/167/617/167617369_t19azl.jpg 3x" alt="Oppenheimer">
					</figure>
				</a>
				<div class="vod-button"><a href="/kino/?films%5B0%5D=1091993&amp;period=all&amp;district=1" class="button button-white red-text">V kinech</a></div>
			</div>
		</div>

	<div class="row">
		<div class="column column-20">

			<section class="control-panel-left control-panel-left-light">
				<div class="control-panel-cinema">
					<p>
						<a href="/kino/?period=today&amp;district=1" id="geolocation-link"
							data-loading="Hledám současnou polohu..."
							data-error-permission-denied="Povol prosím získání současné polohy ve tvém prohlížeči"
							data-error-position-unavailable="Nepodařilo se lokalizovat tvou polohu"
							data-error-timeout="Nepodařilo se lokalizovat vaši polohu"
							
 class="button"
						>Hledat kina v okolí</a>
					</p>
					<form action="" method="get" data-form="get">
						<div class="item-content">
							<select name="district" data-auto-submit-form="true" id="frm-placeFilterForm-placeFilterForm-district"><option value="4">Benešov</option><option value="5">Beroun</option><option value="54">Blansko</option><option value="55">Brno</option><option value="154">Brno-venkov</option><option value="69">Bruntál</option><option value="56">Břeclav</option><option value="36">Česká Lípa</option><option value="14">České Budějovice</option><option value="15">Český Krumlov</option><option value="29">Děčín</option><option value="21">Domažlice</option><option value="70">Frýdek-Místek</option><option value="49">Havlíčkův Brod</option><option value="57">Hodonín</option><option value="40">Hradec Králové</option><option value="26">Cheb</option><option value="30">Chomutov</option><option value="45">Chrudim</option><option value="37">Jablonec nad Nisou</option><option value="60">Jeseník</option><option value="41">Jičín</option><option value="50">Jihlava</option><option value="16">Jindřichův Hradec</option><option value="27">Karlovy Vary</option><option value="71">Karviná</option><option value="6">Kladno</option><option value="22">Klatovy</option><option value="7">Kolín</option><option value="65">Kroměříž</option><option value="8">Kutná Hora</option><option value="38">Liberec</option><option value="31">Litoměřice</option><option value="32">Louny</option><option value="9">Mělník</option><option value="10">Mladá Boleslav</option><option value="33">Most</option><option value="42">Náchod</option><option value="72">Nový Jičín</option><option value="11">Nymburk</option><option value="61">Olomouc</option><option value="73">Opava</option><option value="74">Ostrava</option><option value="46">Pardubice</option><option value="51">Pelhřimov</option><option value="17">Písek</option><option value="23">Plzeň</option><option value="1" selected>Praha</option><option value="3">Praha-východ</option><option value="2">Praha-západ</option><option value="18">Prachatice</option><option value="62">Prostějov</option><option value="63">Přerov</option><option value="12">Příbram</option><option value="43">Rychnov nad Kněžnou</option><option value="39">Semily</option><option value="28">Sokolov</option><option value="19">Strakonice</option><option value="47">Svitavy</option><option value="64">Šumperk</option><option value="20">Tábor</option><option value="25">Tachov</option><option value="34">Teplice</option><option value="44">Trutnov</option><option value="52">Třebíč</option><option value="66">Uherské Hradiště</option><option value="35">Ústí nad Labem</option><option value="48">Ústí nad Orlicí</option><option value="67">Vsetín</option><option value="58">Vyškov</option><option value="68">Zlín</option><option value="59">Znojmo</option><option value="53">Žďár nad Sázavou</option></select>
						</div>
					<input type="hidden" name="period" value="today"><input type="hidden" name="latitude" value=""><input type="hidden" name="longitude" value=""></form>
				</div>
					<div class="search-item-full">
						<div class="item-label">
							<h4>Praha</h4>
						</div>
						<div class="item-content">
							<ul>
								<li>
									<a rel="scroller" href="#cinema-110">
										CineStar Praha - Anděl
									</a>
								</li>
								<li>
									<a rel="scroller" href="#cinema-111">
										CineStar Praha - Černý Most
									</a>
								</li>
								<li>
									<a rel="scroller" href="#cinema-79">
										Bio Oko
									</a>
								</li>
								<li>
									<a rel="scroller" href="#cinema-81">
										Cinema City Flora
									</a>
								</li>
								<li>
									<a rel="scroller" href="#cinema-2443">
										Cinema City Chodov
									</a>
								</li>
								<li>
									<a rel="scroller" href="#cinema-100">
										Cinema City Letňany
									</a>
								</li>
								<li>
									<a rel="scroller" href="#cinema-101">
										Cinema City Nový Smíchov
									</a>
								</li>
								<li>
									<a rel="scroller" href="#cinema-103">
										Cinema City Slovanský dům
									</a>
								</li>
								<li>
									<a rel="scroller" href="#cinema-84">
										Cinema City Zličín
									</a>
								</li>
								<li>
									<a rel="scroller" href="#cinema-2751">
										Divadlo Za plotem
									</a>
								</li>
								<li>
									<a rel="scroller" href="#cinema-2123">
										Dlabačov
									</a>
								</li>
								<li>
									<a rel="scroller" href="#cinema-2655">
										Edison Filmhub
									</a>
								</li>
								<li>
									<a rel="scroller" href="#cinema-77">
										Kino Aero
									</a>
								</li>
								<li>
									<a rel="scroller" href="#cinema-78">
										Kino Atlas
									</a>
								</li>
								<li>
									<a rel="scroller" href="#cinema-94">
										Kino Lucerna
									</a>
								</li>
								<li>
									<a rel="scroller" href="#cinema-95">
										Kino MAT
									</a>
								</li>
								<li>
									<a rel="scroller" href="#cinema-2178">
										Kino Pilotů
									</a>
								</li>
								<li>
									<a rel="scroller" href="#cinema-105">
										Kino Ponrepo
									</a>
								</li>
								<li>
									<a rel="scroller" href="#cinema-106">
										Kino Radotín
									</a>
								</li>
								<li>
									<a rel="scroller" href="#cinema-109">
										Kino Světozor
									</a>
								</li>
								<li>
									<a rel="scroller" href="#cinema-243">
										Kino 35
									</a>
								</li>
								<li>
									<a rel="scroller" href="#cinema-86">
										Komorní kino Evald
									</a>
								</li>
								<li>
									<a rel="scroller" href="#cinema-205">
										Městská knihovna v Praze - Ústřední knihovna
									</a>
								</li>
								<li>
									<a rel="scroller" href="#cinema-97">
										Modřanský biograf
									</a>
								</li>
								<li>
									<a rel="scroller" href="#cinema-1303">
										Premiere Cinemas Praha Hostivař
									</a>
								</li>
								<li>
									<a rel="scroller" href="#cinema-2779">
										Přítomnost Boutique Cinema
									</a>
								</li>
							</ul>
						</div>
					</div>
			</section>
		</div>
		<div id="cinemas" class="column column-80">
			<div class="cinema-schedule-controls">
				<form action="" method="get" data-form="get">
					<select name="period" data-auto-submit-form="true" data-empty-value="today" id="frm-scheduleFilterForm-scheduleFilterForm-period" class="when"><option value="today" selected>dnes</option><option value="tomorrow">zítra</option><option value="weekend">nejbližší víkend</option><option value="week">nejbližších 7 dní</option><option value="month">měsíc dopředu</option><option value="all">vše dopředu</option></select>

					<span class="movie-select">
						<a href="#movieSelect" rel="contentInfoModal" class="button button-white border-red" data-selected="Vybráno:" data-select="Vybrat filmy">Vybrat filmy</a>
					</span>

					<div id="movieSelect" class="modal mfp-hide movie-select" role="dialog">
						<h2>Zadej hledané filmy</h2>

						<section class="box box-nomargin striped-articles clone-wrapper">
							<div class="box-header">
								<h2>Program kin</h2>
							</div>
							<div class="box-content box-content-padding">
								<label for="frm-scheduleFilterForm-scheduleFilterForm-films">
									<span class="single-line">Hledané filmy:</span>
									<input type="text" name="films" autocomplete="off" id="frm-scheduleFilterForm-scheduleFilterForm-films" data-data="[]" data-autocomplete-options='{"type":"text","url":"https:\/\/www.csfd.cz\/api\/autocomplete\/?s=film","maxItems":50,"rendered":true}' data-focus="10" class="fullwidth autocomplete">
								</label>
							</div>
						</section>

						<footer class="form-footer-controls">
							<button type="button" name="button" class="right">Potvrdit</button>
						</footer>
					</div>


				<input type="hidden" name="district" value="1"><input type="hidden" name="latitude" value=""><input type="hidden" name="longitude" value=""></form>
			</div>

			<div id="snippet--cinemas">



	<section id="cinema-110" class="box">
		<header class="box-header">
			<h2>Praha - CineStar Praha - Anděl</h2>

			<div class="cinema-logo hide-mobile">
				<a href="http://www.cinestar.cz/cz/praha5/domu">
					<img src=&#47;&#47;static.pmgstatic.com&#47;assets&#47;images&#47;76af1be24867e083347626550b6adef7&#47;cinestar-logo-black.svg width="56" height="26" alt="Cinestar" />
				</a>
			</div>

			<div class="box-header-action box-header-action-cinema">
				tel. 800 288 288, 
				Radlická 3179/1e, Praha
				<a href="https://maps.google.cz/maps?rls=cs&q=50.0711592,14.4015589">
					<img src=&#47;&#47;static.pmgstatic.com&#47;assets&#47;images&#47;76af1be24867e083347626550b6adef7&#47;google-map.png width="16" alt="Google Maps">
				</a>
				
			</div>
		</header>
			<div class="box-sub-header">
				sobota 13.01.2024
			</div>
<div class="box-content box-content-table-cinema">
	<div class="table-container">
		<table class="striped cinema-table">
			<tbody>
						<tr class="promo-hall">
							<td class="name with-icon">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/756201-bratri/" class="film-title-name">Bratři</a></h3>								<span class="cinema-icon tooltip cinema-icon-csfd" data-tippy-content="ČSFD Sál">ČSFD Sál</span>
							</td>
							<td class="td-title">
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									20:10
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr class="promo-hall">
							<td class="name with-icon">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/756198-tancuj-matyldo/" class="film-title-name">Tancuj Matyldo</a></h3>								<span class="cinema-icon tooltip cinema-icon-csfd" data-tippy-content="ČSFD Sál">ČSFD Sál</span>
							</td>
							<td class="td-title">
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									16:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr class="promo-hall">
							<td class="name with-icon">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1235907-zasah-stestim/" class="film-title-name">Zásah štěstím</a></h3>								<span class="cinema-icon tooltip cinema-icon-csfd" data-tippy-content="ČSFD Sál">ČSFD Sál</span>
							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									18:10
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name with-icon">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/702193-aquaman-a-ztracene-kralovstvi/" class="film-title-name">Aquaman a ztracené království</a></h3>								<span class="cinema-icon tooltip cinema-icon-gold-class" data-tippy-content="Gold Class">Gold Class</span>
							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									13:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name with-icon">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1000599-ferrari/" class="film-title-name">Ferrari</a></h3>								<span class="cinema-icon tooltip cinema-icon-gold-class" data-tippy-content="Gold Class">Gold Class</span>
							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									16:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									20:00
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name with-icon">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/925732-napoleon/" class="film-title-name">Napoleon</a></h3>								<span class="cinema-icon tooltip cinema-icon-gold-class" data-tippy-content="Gold Class">Gold Class</span>
							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									19:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name with-icon">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1246937-to-se-mi-snad-zda/" class="film-title-name">To se mi snad zdá</a></h3>								<span class="cinema-icon tooltip cinema-icon-gold-class" data-tippy-content="Gold Class">Gold Class</span>
							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									17:15
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name with-icon">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/972101-wonka/" class="film-title-name">Wonka</a></h3>								<span class="cinema-icon tooltip cinema-icon-gold-class" data-tippy-content="Gold Class">Gold Class</span>
							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									14:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/702193-aquaman-a-ztracene-kralovstvi/" class="film-title-name">Aquaman a ztracené království</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									10:10
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									15:20
							</td>
							<td>
							</td>
							<td class="td-time">
									17:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/702193-aquaman-a-ztracene-kralovstvi/" class="film-title-name">Aquaman a ztracené království</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td class="td-time">
									12:40
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									16:40
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									21:10
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1000599-ferrari/" class="film-title-name">Ferrari</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td class="td-time">
									10:10
							</td>
							<td class="td-time">
									12:00
							</td>
							<td>
							</td>
							<td class="td-time">
									14:40
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									17:20
							</td>
							<td class="td-time">
									18:30
							</td>
							<td>
							</td>
							<td class="td-time">
									20:00
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1108672-hunger-games-balada-o-ptacich-a-hadech/" class="film-title-name">Hunger Games: Balada o ptácích a hadech</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td class="td-time">
									12:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									20:20
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1419285-jedeme-na-teambuilding/" class="film-title-name">Jedeme na teambuilding</a></h3>							</td>
							<td class="td-title">
							</td>
							<td class="td-time">
									10:00
							</td>
							<td class="td-time">
									12:15
							</td>
							<td>
							</td>
							<td class="td-time">
									14:30
							</td>
							<td>
							</td>
							<td class="td-time">
									16:45
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									19:00
							</td>
							<td>
							</td>
							<td class="td-time">
									21:15
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1231789-jeji-telo/" class="film-title-name">Její tělo</a></h3>							</td>
							<td class="td-title">
							</td>
							<td class="td-time">
									10:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									17:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									21:50
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1105802-krvavy-johann/" class="film-title-name">Krvavý Johann</a></h3>							</td>
							<td class="td-title">
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									13:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									21:30
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/925732-napoleon/" class="film-title-name">Napoleon</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td class="td-time">
									10:20
							</td>
							<td>
							</td>
							<td class="td-time">
									13:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									19:10
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1303808-nocni-koupani/" class="film-title-name">Noční koupání</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td class="td-time">
									10:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									15:20
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1351006-pan-blake-k-vasim-sluzbam/" class="film-title-name">Pan Blake k vašim službám</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									19:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1147996-ptaci-stehovaci/" class="film-title-name">Ptáci stěhováci</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									10:10
							</td>
							<td class="td-time">
									12:30
							</td>
							<td>
							</td>
							<td class="td-time">
									14:30
							</td>
							<td>
							</td>
							<td class="td-time">
									16:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1246100-prani/" class="film-title-name">Přání</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									11:00
							</td>
							<td>
							</td>
							<td class="td-time">
									13:10
							</td>
							<td>
							</td>
							<td class="td-time">
									15:15
							</td>
							<td>
							</td>
							<td class="td-time">
									17:20
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1358574-s-tebou-nikdy/" class="film-title-name">S tebou nikdy</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td class="td-time">
									10:15
							</td>
							<td class="td-time">
									12:30
							</td>
							<td>
							</td>
							<td class="td-time">
									14:45
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									17:00
							</td>
							<td>
							</td>
							<td class="td-time">
									19:15
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/317371-tajemstvi-a-smysl-zivota/" class="film-title-name">Tajemství a smysl života</a></h3>							</td>
							<td class="td-title">
							</td>
							<td>
							</td>
							<td class="td-time">
									12:20
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									15:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									18:40
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1246937-to-se-mi-snad-zda/" class="film-title-name">To se mi snad zdá</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									19:30
							</td>
							<td>
							</td>
							<td class="td-time">
									21:45
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1115181-trollove-3/" class="film-title-name">Trollové 3</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									10:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/972101-wonka/" class="film-title-name">Wonka</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									10:00
							</td>
							<td class="td-time">
									12:10
							</td>
							<td>
							</td>
							<td class="td-time">
									14:40
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									17:10
							</td>
							<td>
							</td>
							<td class="td-time">
									19:40
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name with-icon">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/972101-wonka/" class="film-title-name">Wonka</a></h3>								<span class="cinema-icon tooltip cinema-icon-dolby-atmos" data-tippy-content="Dolby Atmos sál">Dolby Atmos sál</span>
							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td class="td-time">
									10:50
							</td>
							<td>
							</td>
							<td class="td-time">
									13:20
							</td>
							<td>
							</td>
							<td class="td-time">
									15:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									18:20
							</td>
							<td>
							</td>
							<td class="td-time">
									20:50
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
			</tbody>
		</table>
	</div>
</div>
	</section>
<div class="caroda-slot"></div>

	<section id="cinema-111" class="box">
		<header class="box-header">
			<h2>Praha - CineStar Praha - Černý Most</h2>

			<div class="cinema-logo hide-mobile">
				<a href="http://www.cinestar.cz/cz/praha9/domu">
					<img src=&#47;&#47;static.pmgstatic.com&#47;assets&#47;images&#47;76af1be24867e083347626550b6adef7&#47;cinestar-logo-black.svg width="56" height="26" alt="Cinestar" />
				</a>
			</div>

			<div class="box-header-action box-header-action-cinema">
				tel. 800 288 288, 
				Chlumecká 712/8, Praha
				<a href="https://maps.google.cz/maps?rls=cs&q=50.1061275,14.5864477">
					<img src=&#47;&#47;static.pmgstatic.com&#47;assets&#47;images&#47;76af1be24867e083347626550b6adef7&#47;google-map.png width="16" alt="Google Maps">
				</a>
				
			</div>
		</header>
			<div class="box-sub-header">
				sobota 13.01.2024
			</div>
<div class="box-content box-content-table-cinema">
	<div class="table-container">
		<table class="striped cinema-table">
			<tbody>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/702193-aquaman-a-ztracene-kralovstvi/" class="film-title-name">Aquaman a ztracené království</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									10:20
							</td>
							<td>
							</td>
							<td class="td-time">
									13:00
							</td>
							<td>
							</td>
							<td class="td-time">
									15:40
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									18:20
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1000599-ferrari/" class="film-title-name">Ferrari</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									15:15
							</td>
							<td>
							</td>
							<td class="td-time">
									17:20
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									20:20
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1108672-hunger-games-balada-o-ptacich-a-hadech/" class="film-title-name">Hunger Games: Balada o ptácích a hadech</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td class="td-time">
									12:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1419285-jedeme-na-teambuilding/" class="film-title-name">Jedeme na teambuilding</a></h3>							</td>
							<td class="td-title">
							</td>
							<td>
							</td>
							<td class="td-time">
									12:15
							</td>
							<td>
							</td>
							<td class="td-time">
									14:30
							</td>
							<td class="td-time">
									15:20
							</td>
							<td class="td-time">
									16:45
							</td>
							<td>
							</td>
							<td class="td-time">
									18:00
							</td>
							<td class="td-time">
									19:00
							</td>
							<td class="td-time">
									20:15
							</td>
							<td class="td-time">
									21:15
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1308259-lita-v-tom/" class="film-title-name">Lítá v tom</a></h3>							</td>
							<td class="td-title">
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									14:20
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1427154-mlsne-medvedi-pribehy-na-pol/" class="film-title-name">Mlsné medvědí příběhy: Na pól!</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									13:40
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1444179-masa-a-medved-2-dvojita-zabava/" class="film-title-name">Máša a medvěd 2 - Dvojitá zábava</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									10:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1234500-medovy-vanoce/" class="film-title-name">Méďovy vánoce</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									11:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/925732-napoleon/" class="film-title-name">Napoleon</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									19:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1303808-nocni-koupani/" class="film-title-name">Noční koupání</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									21:10
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1351006-pan-blake-k-vasim-sluzbam/" class="film-title-name">Pan Blake k vašim službám</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									20:00
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1147996-ptaci-stehovaci/" class="film-title-name">Ptáci stěhováci</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									11:30
							</td>
							<td>
							</td>
							<td class="td-time">
									13:40
							</td>
							<td>
							</td>
							<td class="td-time">
									15:50
							</td>
							<td>
							</td>
							<td class="td-time">
									17:40
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1246100-prani/" class="film-title-name">Přání</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									10:00<span class="br"></span>11:30
							</td>
							<td class="td-time">
									12:10
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									15:10
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1358574-s-tebou-nikdy/" class="film-title-name">S tebou nikdy</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									16:30
							</td>
							<td>
							</td>
							<td class="td-time">
									18:45
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									21:00
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1246937-to-se-mi-snad-zda/" class="film-title-name">To se mi snad zdá</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									18:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1115181-trollove-3/" class="film-title-name">Trollové 3</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									10:10<span class="br"></span>11:00
							</td>
							<td>
							</td>
							<td class="td-time">
									13:10
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/972101-wonka/" class="film-title-name">Wonka</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									13:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									16:00
							</td>
							<td>
							</td>
							<td class="td-time">
									18:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									21:00
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name with-icon">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/702193-aquaman-a-ztracene-kralovstvi/" class="film-title-name">Aquaman a ztracené království</a></h3>								<span class="cinema-icon tooltip cinema-icon-theatre-deluxe" data-tippy-content="Theatre Deluxe">Theatre Deluxe</span>
							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									17:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									20:10
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name with-icon">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/972101-wonka/" class="film-title-name">Wonka</a></h3>								<span class="cinema-icon tooltip cinema-icon-theatre-deluxe" data-tippy-content="Theatre Deluxe">Theatre Deluxe</span>
							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									10:00
							</td>
							<td class="td-time">
									12:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									15:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
			</tbody>
		</table>
	</div>
</div>
	</section>

	<section id="cinema-79" class="box">
		<header class="box-header">
			<h2>Praha - Bio Oko</h2>


			<div class="box-header-action box-header-action-cinema">
				tel. 233 382 606, 
				Františka Křížka 460/15, Praha
				<a href="https://maps.google.cz/maps?rls=cs&q=50.1000546,14.4301766">
					<img src=&#47;&#47;static.pmgstatic.com&#47;assets&#47;images&#47;76af1be24867e083347626550b6adef7&#47;google-map.png width="16" alt="Google Maps">
				</a>
				
			</div>
		</header>
			<div class="box-sub-header">
				sobota 13.01.2024
			</div>
<div class="box-content box-content-table-cinema">
	<div class="table-container">
		<table class="striped cinema-table">
			<tbody>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/42136-cesta-do-fantazie/" class="film-title-name">Cesta do fantazie</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									14:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1000599-ferrari/" class="film-title-name">Ferrari</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									18:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1324157-letani-pro-zacatecniky/" class="film-title-name">Létání pro začátečníky</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									21:30
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1246937-to-se-mi-snad-zda/" class="film-title-name">To se mi snad zdá</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									16:35
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/976647-tonda-slavka-a-kouzelne-svetlo/" class="film-title-name">Tonda, Slávka a kouzelné světlo</a></h3>							</td>
							<td class="td-title">
							</td>
							<td class="td-time">
									10:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
			</tbody>
		</table>
	</div>
</div>
	</section>

	<section id="cinema-81" class="box">
		<header class="box-header">
			<h2>Praha - Cinema City Flora</h2>


			<div class="box-header-action box-header-action-cinema">
				tel. 255 742 021, 
				Vinohradská 1612/149, Praha
				<a href="https://maps.google.cz/maps?rls=cs&q=50.0779486,14.4605098">
					<img src=&#47;&#47;static.pmgstatic.com&#47;assets&#47;images&#47;76af1be24867e083347626550b6adef7&#47;google-map.png width="16" alt="Google Maps">
				</a>
				
			</div>
		</header>
			<div class="box-sub-header">
				sobota 13.01.2024
			</div>
<div class="box-content box-content-table-cinema">
	<div class="table-container">
		<table class="striped cinema-table">
			<tbody>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/702193-aquaman-a-ztracene-kralovstvi/" class="film-title-name">Aquaman a ztracené království</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									10:00
							</td>
							<td class="td-time">
									12:40
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									15:20
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									18:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/702193-aquaman-a-ztracene-kralovstvi/" class="film-title-name">Aquaman a ztracené království</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									20:40
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1000599-ferrari/" class="film-title-name">Ferrari</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									13:10
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									19:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1419285-jedeme-na-teambuilding/" class="film-title-name">Jedeme na teambuilding</a></h3>							</td>
							<td class="td-title">
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									14:30
							</td>
							<td>
							</td>
							<td class="td-time">
									16:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									19:10
							</td>
							<td>
							</td>
							<td class="td-time">
									21:30
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/798754-jeden-gol/" class="film-title-name">Jeden gól</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td class="td-time">
									12:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1105802-krvavy-johann/" class="film-title-name">Krvavý Johann</a></h3>							</td>
							<td class="td-title">
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									17:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									21:50
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1303808-nocni-koupani/" class="film-title-name">Noční koupání</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td class="td-time">
									10:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									15:10
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									19:40
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1351006-pan-blake-k-vasim-sluzbam/" class="film-title-name">Pan Blake k vašim službám</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td class="td-time">
									10:45
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									15:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									18:20
							</td>
							<td>
							</td>
							<td class="td-time">
									20:50
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1147996-ptaci-stehovaci/" class="film-title-name">Ptáci stěhováci</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									10:10<span class="br"></span>11:10
							</td>
							<td>
							</td>
							<td class="td-time">
									13:20
							</td>
							<td>
							</td>
							<td class="td-time">
									15:30
							</td>
							<td>
							</td>
							<td class="td-time">
									17:40
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1246100-prani/" class="film-title-name">Přání</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									10:10
							</td>
							<td class="td-time">
									12:20
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1358574-s-tebou-nikdy/" class="film-title-name">S tebou nikdy</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td class="td-time">
									10:20
							</td>
							<td class="td-time">
									12:30
							</td>
							<td>
							</td>
							<td class="td-time">
									14:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									17:00
							</td>
							<td>
							</td>
							<td class="td-time">
									19:10
							</td>
							<td>
							</td>
							<td class="td-time">
									21:20
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1246937-to-se-mi-snad-zda/" class="film-title-name">To se mi snad zdá</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									14:20
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									18:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									21:10
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/972101-wonka/" class="film-title-name">Wonka</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									10:20
							</td>
							<td class="td-time">
									12:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									15:20
							</td>
							<td>
							</td>
							<td class="td-time">
									17:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/972101-wonka/" class="film-title-name">Wonka</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									20:20
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1235907-zasah-stestim/" class="film-title-name">Zásah štěstím</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td class="td-time">
									12:15
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									16:40
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name with-icon">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/702193-aquaman-a-ztracene-kralovstvi/" class="film-title-name">Aquaman a ztracené království</a></h3>								<span class="cinema-icon tooltip cinema-icon-imax" data-tippy-content="IMAX">IMAX</span>
							</td>
							<td class="td-title">
								<span title="Titulky">T, </span>
								<span title="3D projekce">3D</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									16:20
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									19:00
							</td>
							<td>
							</td>
							<td class="td-time">
									21:30
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name with-icon">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/972101-wonka/" class="film-title-name">Wonka</a></h3>								<span class="cinema-icon tooltip cinema-icon-imax" data-tippy-content="IMAX">IMAX</span>
							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td class="td-time">
									11:20
							</td>
							<td>
							</td>
							<td class="td-time">
									13:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
			</tbody>
		</table>
	</div>
</div>
	</section>

	<section id="cinema-2443" class="box">
		<header class="box-header">
			<h2>Praha - Cinema City Chodov</h2>


			<div class="box-header-action box-header-action-cinema">
				tel. 255 742 021, 
				Roztylská 2321/19, Praha
				<a href="https://maps.google.cz/maps?rls=cs&q=50.0320692,14.4909962">
					<img src=&#47;&#47;static.pmgstatic.com&#47;assets&#47;images&#47;76af1be24867e083347626550b6adef7&#47;google-map.png width="16" alt="Google Maps">
				</a>
				
			</div>
		</header>
			<div class="box-sub-header">
				sobota 13.01.2024
			</div>
<div class="box-content box-content-table-cinema">
	<div class="table-container">
		<table class="striped cinema-table">
			<tbody>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/702193-aquaman-a-ztracene-kralovstvi/" class="film-title-name">Aquaman a ztracené království</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									11:10
							</td>
							<td>
							</td>
							<td class="td-time">
									13:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									16:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									19:10
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/702193-aquaman-a-ztracene-kralovstvi/" class="film-title-name">Aquaman a ztracené království</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									18:15
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									21:00
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/931042-chlapec-a-volavka/" class="film-title-name">Chlapec a volavka</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									11:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/931042-chlapec-a-volavka/" class="film-title-name">Chlapec a volavka</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									14:10
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1350641-den-dikuvzdani/" class="film-title-name">Den díkůvzdání</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									21:50
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1000599-ferrari/" class="film-title-name">Ferrari</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td class="td-time">
									11:20
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									14:00
							</td>
							<td>
							</td>
							<td class="td-time">
									16:40
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									19:20
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									22:00
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1391397-godzilla-1-0/" class="film-title-name">Godzilla Minus One</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									19:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1108672-hunger-games-balada-o-ptacich-a-hadech/" class="film-title-name">Hunger Games: Balada o ptácích a hadech</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									16:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1419285-jedeme-na-teambuilding/" class="film-title-name">Jedeme na teambuilding</a></h3>							</td>
							<td class="td-title">
							</td>
							<td class="td-time">
									11:00
							</td>
							<td>
							</td>
							<td class="td-time">
									13:20
							</td>
							<td>
							</td>
							<td class="td-time">
									15:40
							</td>
							<td>
							</td>
							<td class="td-time">
									17:10
							</td>
							<td class="td-time">
									18:00
							</td>
							<td class="td-time">
									19:30
							</td>
							<td class="td-time">
									20:20
							</td>
							<td class="td-time">
									21:50
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/798754-jeden-gol/" class="film-title-name">Jeden gól</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									15:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									21:40
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1105802-krvavy-johann/" class="film-title-name">Krvavý Johann</a></h3>							</td>
							<td class="td-title">
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									19:50
							</td>
							<td>
							</td>
							<td class="td-time">
									21:50
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1308259-lita-v-tom/" class="film-title-name">Lítá v tom</a></h3>							</td>
							<td class="td-title">
							</td>
							<td>
							</td>
							<td class="td-time">
									12:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									15:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1427154-mlsne-medvedi-pribehy-na-pol/" class="film-title-name">Mlsné medvědí příběhy: Na pól!</a></h3>							</td>
							<td class="td-title">
							</td>
							<td class="td-time">
									10:20
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1234500-medovy-vanoce/" class="film-title-name">Méďovy vánoce</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									11:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/925732-napoleon/" class="film-title-name">Napoleon</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td class="td-time">
									12:20
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									20:30
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1303808-nocni-koupani/" class="film-title-name">Noční koupání</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									15:30
							</td>
							<td>
							</td>
							<td class="td-time">
									17:40
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									22:10
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1351006-pan-blake-k-vasim-sluzbam/" class="film-title-name">Pan Blake k vašim službám</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									15:20
							</td>
							<td>
							</td>
							<td class="td-time">
									17:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									20:20
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1147996-ptaci-stehovaci/" class="film-title-name">Ptáci stěhováci</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									10:00<span class="br"></span>11:00
							</td>
							<td class="td-time">
									12:00
							</td>
							<td class="td-time">
									13:10
							</td>
							<td class="td-time">
									14:00
							</td>
							<td>
							</td>
							<td class="td-time">
									16:10
							</td>
							<td class="td-time">
									17:20
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1246100-prani/" class="film-title-name">Přání</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									10:40<span class="br"></span>11:50
							</td>
							<td class="td-time">
									12:50
							</td>
							<td>
							</td>
							<td class="td-time">
									14:00
							</td>
							<td>
							</td>
							<td class="td-time">
									16:10
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1358574-s-tebou-nikdy/" class="film-title-name">S tebou nikdy</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td class="td-time">
									10:40
							</td>
							<td class="td-time">
									12:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									15:00
							</td>
							<td>
							</td>
							<td class="td-time">
									17:10
							</td>
							<td>
							</td>
							<td class="td-time">
									19:20
							</td>
							<td>
							</td>
							<td class="td-time">
									21:30
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1322907-tlapkova-patrola-ve-velkofilmu/" class="film-title-name">Tlapková patrola ve velkofilmu</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									10:20
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1246937-to-se-mi-snad-zda/" class="film-title-name">To se mi snad zdá</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td class="td-time">
									10:00
							</td>
							<td class="td-time">
									12:10
							</td>
							<td>
							</td>
							<td class="td-time">
									14:20
							</td>
							<td>
							</td>
							<td class="td-time">
									16:30
							</td>
							<td>
							</td>
							<td class="td-time">
									18:40
							</td>
							<td>
							</td>
							<td class="td-time">
									20:50
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/972101-wonka/" class="film-title-name">Wonka</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									10:00<span class="br"></span>11:40
							</td>
							<td class="td-time">
									12:30
							</td>
							<td>
							</td>
							<td class="td-time">
									14:10
							</td>
							<td>
							</td>
							<td class="td-time">
									16:40
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									19:10
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1235907-zasah-stestim/" class="film-title-name">Zásah štěstím</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									18:20
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name with-icon">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/702193-aquaman-a-ztracene-kralovstvi/" class="film-title-name">Aquaman a ztracené království</a></h3>								<span class="cinema-icon tooltip cinema-icon-vip" data-tippy-content="VIP">VIP</span>
							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									14:00
							</td>
							<td class="td-time">
									15:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name with-icon">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1000599-ferrari/" class="film-title-name">Ferrari</a></h3>								<span class="cinema-icon tooltip cinema-icon-vip" data-tippy-content="VIP">VIP</span>
							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									20:50
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name with-icon">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1419285-jedeme-na-teambuilding/" class="film-title-name">Jedeme na teambuilding</a></h3>								<span class="cinema-icon tooltip cinema-icon-vip" data-tippy-content="VIP">VIP</span>
							</td>
							<td class="td-title">
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									19:00
							</td>
							<td>
							</td>
							<td class="td-time">
									21:20
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name with-icon">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1303808-nocni-koupani/" class="film-title-name">Noční koupání</a></h3>								<span class="cinema-icon tooltip cinema-icon-vip" data-tippy-content="VIP">VIP</span>
							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									21:50
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name with-icon">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1351006-pan-blake-k-vasim-sluzbam/" class="film-title-name">Pan Blake k vašim službám</a></h3>								<span class="cinema-icon tooltip cinema-icon-vip" data-tippy-content="VIP">VIP</span>
							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									16:40
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name with-icon">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1358574-s-tebou-nikdy/" class="film-title-name">S tebou nikdy</a></h3>								<span class="cinema-icon tooltip cinema-icon-vip" data-tippy-content="VIP">VIP</span>
							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									18:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name with-icon">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1246937-to-se-mi-snad-zda/" class="film-title-name">To se mi snad zdá</a></h3>								<span class="cinema-icon tooltip cinema-icon-vip" data-tippy-content="VIP">VIP</span>
							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									19:40
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name with-icon">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/972101-wonka/" class="film-title-name">Wonka</a></h3>								<span class="cinema-icon tooltip cinema-icon-vip" data-tippy-content="VIP">VIP</span>
							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									14:40
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									17:10
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name with-icon">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/702193-aquaman-a-ztracene-kralovstvi/" class="film-title-name">Aquaman a ztracené království</a></h3>								<span class="cinema-icon tooltip cinema-icon-4dx" data-tippy-content="4DX sál">4DX sál</span>
							</td>
							<td class="td-title">
								<span title="Dabing">D, </span>
								<span title="3D projekce">3D</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									15:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									18:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name with-icon">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1303808-nocni-koupani/" class="film-title-name">Noční koupání</a></h3>								<span class="cinema-icon tooltip cinema-icon-4dx" data-tippy-content="4DX sál">4DX sál</span>
							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									21:10
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name with-icon">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1147996-ptaci-stehovaci/" class="film-title-name">Ptáci stěhováci</a></h3>								<span class="cinema-icon tooltip cinema-icon-4dx" data-tippy-content="4DX sál">4DX sál</span>
							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									11:10
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name with-icon">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/972101-wonka/" class="film-title-name">Wonka</a></h3>								<span class="cinema-icon tooltip cinema-icon-4dx" data-tippy-content="4DX sál">4DX sál</span>
							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									13:20
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name with-icon">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/972101-wonka/" class="film-title-name">Wonka</a></h3>								<span class="cinema-icon tooltip cinema-icon-dolby-atmos" data-tippy-content="Dolby Atmos sál">Dolby Atmos sál</span>
							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									15:00
							</td>
							<td>
							</td>
							<td class="td-time">
									17:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									20:00
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
			</tbody>
		</table>
	</div>
</div>
	</section>

	<section id="cinema-100" class="box">
		<header class="box-header">
			<h2>Praha - Cinema City Letňany</h2>


			<div class="box-header-action box-header-action-cinema">
				tel. 255 742 021, 
				Veselská 663, Praha
				<a href="https://maps.google.cz/maps?rls=cs&q=50.1350535,14.5012747">
					<img src=&#47;&#47;static.pmgstatic.com&#47;assets&#47;images&#47;76af1be24867e083347626550b6adef7&#47;google-map.png width="16" alt="Google Maps">
				</a>
				
			</div>
		</header>
			<div class="box-sub-header">
				sobota 13.01.2024
			</div>
<div class="box-content box-content-table-cinema">
	<div class="table-container">
		<table class="striped cinema-table">
			<tbody>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/702193-aquaman-a-ztracene-kralovstvi/" class="film-title-name">Aquaman a ztracené království</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D, </span>
								<span title="3D projekce">3D</span>
							</td>
							<td class="td-time">
									11:20
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									14:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/702193-aquaman-a-ztracene-kralovstvi/" class="film-title-name">Aquaman a ztracené království</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td>
							</td>
							<td class="td-time">
									12:00
							</td>
							<td>
							</td>
							<td class="td-time">
									14:40
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									17:20
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									20:00
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/702193-aquaman-a-ztracene-kralovstvi/" class="film-title-name">Aquaman a ztracené království</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									21:15
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/931042-chlapec-a-volavka/" class="film-title-name">Chlapec a volavka</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									13:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1000599-ferrari/" class="film-title-name">Ferrari</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									15:40
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									18:20
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									21:00
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1108672-hunger-games-balada-o-ptacich-a-hadech/" class="film-title-name">Hunger Games: Balada o ptácích a hadech</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									18:45
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1419285-jedeme-na-teambuilding/" class="film-title-name">Jedeme na teambuilding</a></h3>							</td>
							<td class="td-title">
							</td>
							<td>
							</td>
							<td class="td-time">
									12:10
							</td>
							<td>
							</td>
							<td class="td-time">
									14:30
							</td>
							<td>
							</td>
							<td class="td-time">
									16:50
							</td>
							<td class="td-time">
									17:40
							</td>
							<td>
							</td>
							<td class="td-time">
									19:10
							</td>
							<td class="td-time">
									20:00
							</td>
							<td class="td-time">
									21:30
							</td>
							<td class="td-time">
									22:15
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/798754-jeden-gol/" class="film-title-name">Jeden gól</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									16:45
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									21:50
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1105802-krvavy-johann/" class="film-title-name">Krvavý Johann</a></h3>							</td>
							<td class="td-title">
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									19:20
							</td>
							<td>
							</td>
							<td class="td-time">
									21:20
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1308259-lita-v-tom/" class="film-title-name">Lítá v tom</a></h3>							</td>
							<td class="td-title">
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									14:40
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1234500-medovy-vanoce/" class="film-title-name">Méďovy vánoce</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									11:10
							</td>
							<td class="td-time">
									12:40
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1303808-nocni-koupani/" class="film-title-name">Noční koupání</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									19:00
							</td>
							<td>
							</td>
							<td class="td-time">
									21:10
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1351006-pan-blake-k-vasim-sluzbam/" class="film-title-name">Pan Blake k vašim službám</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									15:40
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									18:00
							</td>
							<td>
							</td>
							<td class="td-time">
									20:20
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1147996-ptaci-stehovaci/" class="film-title-name">Ptáci stěhováci</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									11:10
							</td>
							<td class="td-time">
									12:10
							</td>
							<td class="td-time">
									13:20
							</td>
							<td class="td-time">
									14:20
							</td>
							<td class="td-time">
									15:30
							</td>
							<td class="td-time">
									16:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									19:10
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1246100-prani/" class="film-title-name">Přání</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									11:30
							</td>
							<td class="td-time">
									12:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									15:00
							</td>
							<td>
							</td>
							<td class="td-time">
									17:10
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1358574-s-tebou-nikdy/" class="film-title-name">S tebou nikdy</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td class="td-time">
									11:00
							</td>
							<td>
							</td>
							<td class="td-time">
									13:10
							</td>
							<td>
							</td>
							<td class="td-time">
									15:20
							</td>
							<td>
							</td>
							<td class="td-time">
									17:30
							</td>
							<td>
							</td>
							<td class="td-time">
									19:40
							</td>
							<td>
							</td>
							<td class="td-time">
									21:50
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1246937-to-se-mi-snad-zda/" class="film-title-name">To se mi snad zdá</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									13:40
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									16:00
							</td>
							<td>
							</td>
							<td class="td-time">
									18:20
							</td>
							<td>
							</td>
							<td class="td-time">
									20:40
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1115181-trollove-3/" class="film-title-name">Trollové 3</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									11:40
							</td>
							<td>
							</td>
							<td class="td-time">
									13:40
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/972101-wonka/" class="film-title-name">Wonka</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									11:00
							</td>
							<td>
							</td>
							<td class="td-time">
									13:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									16:00
							</td>
							<td>
							</td>
							<td class="td-time">
									18:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/972101-wonka/" class="film-title-name">Wonka</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									21:00
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1235907-zasah-stestim/" class="film-title-name">Zásah štěstím</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									16:40
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
			</tbody>
		</table>
	</div>
</div>
	</section>

	<section id="cinema-101" class="box">
		<header class="box-header">
			<h2>Praha - Cinema City Nový Smíchov</h2>


			<div class="box-header-action box-header-action-cinema">
				tel. 255 742 021, 
				Plzeňská 233/8, Praha
				<a href="https://maps.google.cz/maps?rls=cs&q=50.073805,14.402538">
					<img src=&#47;&#47;static.pmgstatic.com&#47;assets&#47;images&#47;76af1be24867e083347626550b6adef7&#47;google-map.png width="16" alt="Google Maps">
				</a>
				
			</div>
		</header>
			<div class="box-sub-header">
				sobota 13.01.2024
			</div>
<div class="box-content box-content-table-cinema">
	<div class="table-container">
		<table class="striped cinema-table">
			<tbody>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/702193-aquaman-a-ztracene-kralovstvi/" class="film-title-name">Aquaman a ztracené království</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td>
							</td>
							<td class="td-time">
									12:40
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									15:20
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									18:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/702193-aquaman-a-ztracene-kralovstvi/" class="film-title-name">Aquaman a ztracené království</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									14:40
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									21:30
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/1423871-dunki/" class="film-title-name">Dunki</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									16:10
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1000599-ferrari/" class="film-title-name">Ferrari</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									15:00
							</td>
							<td>
							</td>
							<td class="td-time">
									17:20
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									20:10
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1108672-hunger-games-balada-o-ptacich-a-hadech/" class="film-title-name">Hunger Games: Balada o ptácích a hadech</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									13:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									19:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1419285-jedeme-na-teambuilding/" class="film-title-name">Jedeme na teambuilding</a></h3>							</td>
							<td class="td-title">
							</td>
							<td class="td-time">
									11:10
							</td>
							<td>
							</td>
							<td class="td-time">
									13:30
							</td>
							<td>
							</td>
							<td class="td-time">
									15:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									18:10
							</td>
							<td>
							</td>
							<td class="td-time">
									20:30
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/798754-jeden-gol/" class="film-title-name">Jeden gól</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									17:40
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1105802-krvavy-johann/" class="film-title-name">Krvavý Johann</a></h3>							</td>
							<td class="td-title">
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									20:40
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1308259-lita-v-tom/" class="film-title-name">Lítá v tom</a></h3>							</td>
							<td class="td-title">
							</td>
							<td class="td-time">
									10:20
							</td>
							<td class="td-time">
									12:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1234500-medovy-vanoce/" class="film-title-name">Méďovy vánoce</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									10:10
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/925732-napoleon/" class="film-title-name">Napoleon</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									20:50
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1303808-nocni-koupani/" class="film-title-name">Noční koupání</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									19:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									22:00
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1351006-pan-blake-k-vasim-sluzbam/" class="film-title-name">Pan Blake k vašim službám</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td class="td-time">
									11:00
							</td>
							<td>
							</td>
							<td class="td-time">
									13:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									16:10
							</td>
							<td>
							</td>
							<td class="td-time">
									18:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									21:00
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1147996-ptaci-stehovaci/" class="film-title-name">Ptáci stěhováci</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									10:50
							</td>
							<td class="td-time">
									12:10
							</td>
							<td>
							</td>
							<td class="td-time">
									14:20
							</td>
							<td>
							</td>
							<td class="td-time">
									16:30
							</td>
							<td>
							</td>
							<td class="td-time">
									18:40
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1246100-prani/" class="film-title-name">Přání</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									10:10
							</td>
							<td class="td-time">
									12:15
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1358574-s-tebou-nikdy/" class="film-title-name">S tebou nikdy</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td class="td-time">
									10:20
							</td>
							<td class="td-time">
									12:30
							</td>
							<td>
							</td>
							<td class="td-time">
									14:40
							</td>
							<td>
							</td>
							<td class="td-time">
									16:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									19:00
							</td>
							<td>
							</td>
							<td class="td-time">
									21:10
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1322907-tlapkova-patrola-ve-velkofilmu/" class="film-title-name">Tlapková patrola ve velkofilmu</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									10:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1246937-to-se-mi-snad-zda/" class="film-title-name">To se mi snad zdá</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td class="td-time">
									10:40
							</td>
							<td class="td-time">
									12:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									15:00
							</td>
							<td>
							</td>
							<td class="td-time">
									17:10
							</td>
							<td>
							</td>
							<td class="td-time">
									19:20
							</td>
							<td>
							</td>
							<td class="td-time">
									21:30
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1115181-trollove-3/" class="film-title-name">Trollové 3</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									10:40
							</td>
							<td class="td-time">
									12:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/972101-wonka/" class="film-title-name">Wonka</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									11:20
							</td>
							<td>
							</td>
							<td class="td-time">
									13:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									16:20
							</td>
							<td>
							</td>
							<td class="td-time">
									18:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/972101-wonka/" class="film-title-name">Wonka</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									14:20
							</td>
							<td>
							</td>
							<td class="td-time">
									16:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									21:20
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1235907-zasah-stestim/" class="film-title-name">Zásah štěstím</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									19:20
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name with-icon">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/702193-aquaman-a-ztracene-kralovstvi/" class="film-title-name">Aquaman a ztracené království</a></h3>								<span class="cinema-icon tooltip cinema-icon-4dx" data-tippy-content="4DX sál">4DX sál</span>
							</td>
							<td class="td-title">
								<span title="Dabing">D, </span>
								<span title="3D projekce">3D</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									19:10
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name with-icon">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1303808-nocni-koupani/" class="film-title-name">Noční koupání</a></h3>								<span class="cinema-icon tooltip cinema-icon-4dx" data-tippy-content="4DX sál">4DX sál</span>
							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									21:50
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name with-icon">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1147996-ptaci-stehovaci/" class="film-title-name">Ptáci stěhováci</a></h3>								<span class="cinema-icon tooltip cinema-icon-4dx" data-tippy-content="4DX sál">4DX sál</span>
							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									10:00
							</td>
							<td class="td-time">
									12:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name with-icon">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/972101-wonka/" class="film-title-name">Wonka</a></h3>								<span class="cinema-icon tooltip cinema-icon-4dx" data-tippy-content="4DX sál">4DX sál</span>
							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									14:10
							</td>
							<td>
							</td>
							<td class="td-time">
									16:40
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
			</tbody>
		</table>
	</div>
</div>
	</section>

	<section id="cinema-103" class="box">
		<header class="box-header">
			<h2>Praha - Cinema City Slovanský dům</h2>


			<div class="box-header-action box-header-action-cinema">
				tel. 255 742 021, 
				Na Příkopě 859/22, Praha
				<a href="https://maps.google.cz/maps?rls=cs&q=50.0864296,14.4272804">
					<img src=&#47;&#47;static.pmgstatic.com&#47;assets&#47;images&#47;76af1be24867e083347626550b6adef7&#47;google-map.png width="16" alt="Google Maps">
				</a>
				
			</div>
		</header>
			<div class="box-sub-header">
				sobota 13.01.2024
			</div>
<div class="box-content box-content-table-cinema">
	<div class="table-container">
		<table class="striped cinema-table">
			<tbody>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/702193-aquaman-a-ztracene-kralovstvi/" class="film-title-name">Aquaman a ztracené království</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td>
							</td>
							<td class="td-time">
									12:10
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/702193-aquaman-a-ztracene-kralovstvi/" class="film-title-name">Aquaman a ztracené království</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									16:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									19:10
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/931042-chlapec-a-volavka/" class="film-title-name">Chlapec a volavka</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									16:40
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1000599-ferrari/" class="film-title-name">Ferrari</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td class="td-time">
									12:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									15:15
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									18:00
							</td>
							<td>
							</td>
							<td class="td-time">
									20:45
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1108672-hunger-games-balada-o-ptacich-a-hadech/" class="film-title-name">Hunger Games: Balada o ptácích a hadech</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td class="td-time">
									12:40
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1419285-jedeme-na-teambuilding/" class="film-title-name">Jedeme na teambuilding</a></h3>							</td>
							<td class="td-title">
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									15:30
							</td>
							<td>
							</td>
							<td class="td-time">
									17:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									20:10
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/798754-jeden-gol/" class="film-title-name">Jeden gól</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									17:20
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1105802-krvavy-johann/" class="film-title-name">Krvavý Johann</a></h3>							</td>
							<td class="td-title">
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									19:40
							</td>
							<td>
							</td>
							<td class="td-time">
									21:40
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1308259-lita-v-tom/" class="film-title-name">Lítá v tom</a></h3>							</td>
							<td class="td-title">
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									15:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1234500-medovy-vanoce/" class="film-title-name">Méďovy vánoce</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td>
							</td>
							<td class="td-time">
									12:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/925732-napoleon/" class="film-title-name">Napoleon</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									21:20
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1303808-nocni-koupani/" class="film-title-name">Noční koupání</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									14:20
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									21:50
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1351006-pan-blake-k-vasim-sluzbam/" class="film-title-name">Pan Blake k vašim službám</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									14:40
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									17:00
							</td>
							<td>
							</td>
							<td class="td-time">
									19:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									22:00
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1289556-prvni-den-meho-zivota/" class="film-title-name">První den mého života</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td class="td-time">
									12:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1147996-ptaci-stehovaci/" class="film-title-name">Ptáci stěhováci</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td>
							</td>
							<td class="td-time">
									12:20
							</td>
							<td>
							</td>
							<td class="td-time">
									14:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1246100-prani/" class="film-title-name">Přání</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td>
							</td>
							<td class="td-time">
									12:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1358574-s-tebou-nikdy/" class="film-title-name">S tebou nikdy</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td class="td-time">
									12:15
							</td>
							<td>
							</td>
							<td class="td-time">
									14:30
							</td>
							<td>
							</td>
							<td class="td-time">
									16:45
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									19:00
							</td>
							<td>
							</td>
							<td class="td-time">
									21:20
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1246937-to-se-mi-snad-zda/" class="film-title-name">To se mi snad zdá</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td class="td-time">
									12:00
							</td>
							<td>
							</td>
							<td class="td-time">
									14:10
							</td>
							<td>
							</td>
							<td class="td-time">
									16:30
							</td>
							<td>
							</td>
							<td class="td-time">
									18:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									21:10
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/972101-wonka/" class="film-title-name">Wonka</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									13:00
							</td>
							<td>
							</td>
							<td class="td-time">
									15:40
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									18:20
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									21:00
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/972101-wonka/" class="film-title-name">Wonka</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									14:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1235907-zasah-stestim/" class="film-title-name">Zásah štěstím</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									19:10
							</td>
							<td>
							</td>
							<td class="td-time">
									21:20
							</td>
							<td>
							</td>
						</tr>
			</tbody>
		</table>
	</div>
</div>
	</section>

	<section id="cinema-84" class="box">
		<header class="box-header">
			<h2>Praha - Cinema City Zličín</h2>


			<div class="box-header-action box-header-action-cinema">
				tel. 257 950 966, 
				Řevnická 121/1, Praha
				<a href="https://maps.google.cz/maps?rls=cs&q=50.053295,14.2875481">
					<img src=&#47;&#47;static.pmgstatic.com&#47;assets&#47;images&#47;76af1be24867e083347626550b6adef7&#47;google-map.png width="16" alt="Google Maps">
				</a>
				
			</div>
		</header>
			<div class="box-sub-header">
				sobota 13.01.2024
			</div>
<div class="box-content box-content-table-cinema">
	<div class="table-container">
		<table class="striped cinema-table">
			<tbody>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/702193-aquaman-a-ztracene-kralovstvi/" class="film-title-name">Aquaman a ztracené království</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									11:00
							</td>
							<td class="td-time">
									12:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									15:10
							</td>
							<td>
							</td>
							<td class="td-time">
									17:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									20:30
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1350641-den-dikuvzdani/" class="film-title-name">Den díkůvzdání</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									22:00
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1000599-ferrari/" class="film-title-name">Ferrari</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									20:00
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1108672-hunger-games-balada-o-ptacich-a-hadech/" class="film-title-name">Hunger Games: Balada o ptácích a hadech</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									13:40
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									16:10
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1419285-jedeme-na-teambuilding/" class="film-title-name">Jedeme na teambuilding</a></h3>							</td>
							<td class="td-title">
							</td>
							<td class="td-time">
									11:10
							</td>
							<td>
							</td>
							<td class="td-time">
									13:30
							</td>
							<td>
							</td>
							<td class="td-time">
									15:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									18:10
							</td>
							<td>
							</td>
							<td class="td-time">
									20:30
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/798754-jeden-gol/" class="film-title-name">Jeden gól</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									14:40
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1231789-jeji-telo/" class="film-title-name">Její tělo</a></h3>							</td>
							<td class="td-title">
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									20:40
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1105802-krvavy-johann/" class="film-title-name">Krvavý Johann</a></h3>							</td>
							<td class="td-title">
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									21:45
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1308259-lita-v-tom/" class="film-title-name">Lítá v tom</a></h3>							</td>
							<td class="td-title">
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									13:30
							</td>
							<td>
							</td>
							<td class="td-time">
									15:40
							</td>
							<td>
							</td>
							<td class="td-time">
									17:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1234500-medovy-vanoce/" class="film-title-name">Méďovy vánoce</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td>
							</td>
							<td class="td-time">
									12:40
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/925732-napoleon/" class="film-title-name">Napoleon</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									19:20
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1303808-nocni-koupani/" class="film-title-name">Noční koupání</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									18:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1351006-pan-blake-k-vasim-sluzbam/" class="film-title-name">Pan Blake k vašim službám</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									16:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									19:10
							</td>
							<td>
							</td>
							<td class="td-time">
									21:30
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1147996-ptaci-stehovaci/" class="film-title-name">Ptáci stěhováci</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									11:00
							</td>
							<td class="td-time">
									12:00
							</td>
							<td class="td-time">
									13:10
							</td>
							<td class="td-time">
									14:10
							</td>
							<td class="td-time">
									15:20
							</td>
							<td class="td-time">
									16:20
							</td>
							<td class="td-time">
									17:30
							</td>
							<td>
							</td>
							<td class="td-time">
									19:40
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1246100-prani/" class="film-title-name">Přání</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									11:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									14:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1358574-s-tebou-nikdy/" class="film-title-name">S tebou nikdy</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td class="td-time">
									12:00
							</td>
							<td>
							</td>
							<td class="td-time">
									14:15
							</td>
							<td>
							</td>
							<td class="td-time">
									16:30
							</td>
							<td>
							</td>
							<td class="td-time">
									18:45
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									21:00
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1246937-to-se-mi-snad-zda/" class="film-title-name">To se mi snad zdá</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									17:00
							</td>
							<td>
							</td>
							<td class="td-time">
									19:20
							</td>
							<td>
							</td>
							<td class="td-time">
									21:40
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/972101-wonka/" class="film-title-name">Wonka</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									11:00
							</td>
							<td class="td-time">
									12:00
							</td>
							<td>
							</td>
							<td class="td-time">
									14:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									17:00
							</td>
							<td>
							</td>
							<td class="td-time">
									19:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
			</tbody>
		</table>
	</div>
</div>
	</section>

	<section id="cinema-2751" class="box">
		<header class="box-header">
			<h2>Praha - Divadlo Za plotem</h2>


			<div class="box-header-action box-header-action-cinema">
				tel. 284 016 515, 
				Ústavní 249, Praha
				<a href="https://maps.google.cz/maps?rls=cs&q=50.134364901,14.4189922524">
					<img src=&#47;&#47;static.pmgstatic.com&#47;assets&#47;images&#47;76af1be24867e083347626550b6adef7&#47;google-map.png width="16" alt="Google Maps">
				</a>
				
			</div>
		</header>
			<div class="box-sub-header">
				sobota 13.01.2024
			</div>
<div class="box-content box-content-table-cinema">
	<div class="table-container">
		<table class="striped cinema-table">
			<tbody>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1351006-pan-blake-k-vasim-sluzbam/" class="film-title-name">Pan Blake k vašim službám</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									17:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1147996-ptaci-stehovaci/" class="film-title-name">Ptáci stěhováci</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									14:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1246937-to-se-mi-snad-zda/" class="film-title-name">To se mi snad zdá</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									19:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
			</tbody>
		</table>
	</div>
</div>
	</section>

	<section id="cinema-2123" class="box">
		<header class="box-header">
			<h2>Praha - Dlabačov</h2>


			<div class="box-header-action box-header-action-cinema">
				tel. 233 102 991, 
				Bělohorská 125/24, Praha
				<a href="https://maps.google.cz/maps?rls=cs&q=50.0856651,14.3802395">
					<img src=&#47;&#47;static.pmgstatic.com&#47;assets&#47;images&#47;76af1be24867e083347626550b6adef7&#47;google-map.png width="16" alt="Google Maps">
				</a>
				
			</div>
		</header>
			<div class="box-sub-header">
				sobota 13.01.2024
			</div>
<div class="box-content box-content-table-cinema">
	<div class="table-container">
		<table class="striped cinema-table">
			<tbody>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1000599-ferrari/" class="film-title-name">Ferrari</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									20:00
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1105802-krvavy-johann/" class="film-title-name">Krvavý Johann</a></h3>							</td>
							<td class="td-title">
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									18:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1147996-ptaci-stehovaci/" class="film-title-name">Ptáci stěhováci</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									14:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/972101-wonka/" class="film-title-name">Wonka</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									16:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
			</tbody>
		</table>
	</div>
</div>
	</section>

	<section id="cinema-2655" class="box">
		<header class="box-header">
			<h2>Praha - Edison Filmhub</h2>


			<div class="box-header-action box-header-action-cinema">
				
				Jeruzalémská 1321/2, Praha
				<a href="https://maps.google.cz/maps?rls=cs&q=50.084842,14.431292">
					<img src=&#47;&#47;static.pmgstatic.com&#47;assets&#47;images&#47;76af1be24867e083347626550b6adef7&#47;google-map.png width="16" alt="Google Maps">
				</a>
				
			</div>
		</header>
			<div class="box-sub-header">
				sobota 13.01.2024
			</div>
<div class="box-content box-content-table-cinema">
	<div class="table-container">
		<table class="striped cinema-table">
			<tbody>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/929532-caravaggiuv-stin/" class="film-title-name">Caravaggiův stín</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									14:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/931042-chlapec-a-volavka/" class="film-title-name">Chlapec a volavka</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									11:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1351006-pan-blake-k-vasim-sluzbam/" class="film-title-name">Pan Blake k vašim službám</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									19:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1289556-prvni-den-meho-zivota/" class="film-title-name">První den mého života</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									16:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1358574-s-tebou-nikdy/" class="film-title-name">S tebou nikdy</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									21:30
							</td>
							<td>
							</td>
						</tr>
			</tbody>
		</table>
	</div>
</div>
	</section>

	<section id="cinema-77" class="box">
		<header class="box-header">
			<h2>Praha - Kino Aero</h2>


			<div class="box-header-action box-header-action-cinema">
				tel. 271 771 349, 
				Biskupcova 1733/31, Praha
				<a href="https://maps.google.cz/maps?rls=cs&q=50.090172,14.4719146">
					<img src=&#47;&#47;static.pmgstatic.com&#47;assets&#47;images&#47;76af1be24867e083347626550b6adef7&#47;google-map.png width="16" alt="Google Maps">
				</a>
				
			</div>
		</header>
			<div class="box-sub-header">
				sobota 13.01.2024
			</div>
<div class="box-content box-content-table-cinema">
	<div class="table-container">
		<table class="striped cinema-table">
			<tbody>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/295849-jak-postavit-snehulaka/" class="film-title-name">Jak postavit sněhuláka</a></h3>							</td>
							<td class="td-title">
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									15:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/342004-jak-se-chtel-zajicek-klouzat/" class="film-title-name">Jak se chtěl zajíček klouzat</a></h3>							</td>
							<td class="td-title">
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									15:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/325176-kubula-a-kuba-kubikula-ve-vareckach-a-hrncich/" class="film-title-name">Kubula a Kuba Kubikula ve Vařečkách a Hrncích</a></h3>							</td>
							<td class="td-title">
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									15:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/925732-napoleon/" class="film-title-name">Napoleon</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									17:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1246937-to-se-mi-snad-zda/" class="film-title-name">To se mi snad zdá</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									20:30
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/202604-carovne-lyze/" class="film-title-name">Čarovné lyže</a></h3>							</td>
							<td class="td-title">
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									15:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
			</tbody>
		</table>
	</div>
</div>
	</section>

	<section id="cinema-78" class="box">
		<header class="box-header">
			<h2>Praha - Kino Atlas</h2>


			<div class="box-header-action box-header-action-cinema">
				tel. 774 500 025, 
				Sokolovská 371/1, Praha
				<a href="https://maps.google.cz/maps?rls=cs&q=50.0910846,14.4385275">
					<img src=&#47;&#47;static.pmgstatic.com&#47;assets&#47;images&#47;76af1be24867e083347626550b6adef7&#47;google-map.png width="16" alt="Google Maps">
				</a>
				
			</div>
		</header>
			<div class="box-sub-header">
				sobota 13.01.2024
			</div>
<div class="box-content box-content-table-cinema">
	<div class="table-container">
		<table class="striped cinema-table">
			<tbody>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/931042-chlapec-a-volavka/" class="film-title-name">Chlapec a volavka</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									13:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/91936-howluv-kracejici-hrad/" class="film-title-name">Zámek v oblacích</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									18:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1231789-jeji-telo/" class="film-title-name">Její tělo</a></h3>							</td>
							<td class="td-title">
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									19:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1259990-karaoke-blues/" class="film-title-name">Karaoke blues</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									20:30
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1194593-kouzelna-beruska-a-cerny-kocour-ve-filmu/" class="film-title-name">Kouzelná Beruška a Černý kocour ve filmu</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									13:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/28495-laputa-nebesky-zamek/" class="film-title-name">Laputa: Nebeský zámek</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									15:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/43677-laska-nebeska/" class="film-title-name">Láska nebeská</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									17:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1427154-mlsne-medvedi-pribehy-na-pol/" class="film-title-name">Mlsné medvědí příběhy: Na pól!</a></h3>							</td>
							<td class="td-title">
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									15:45
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
			</tbody>
		</table>
	</div>
</div>
	</section>

	<section id="cinema-94" class="box">
		<header class="box-header">
			<h2>Praha - Kino Lucerna</h2>


			<div class="box-header-action box-header-action-cinema">
				tel. 224 216 972, 
				Vodičkova 704/36, Praha
				<a href="https://maps.google.cz/maps?rls=cs&q=50.0813904,14.4252654">
					<img src=&#47;&#47;static.pmgstatic.com&#47;assets&#47;images&#47;76af1be24867e083347626550b6adef7&#47;google-map.png width="16" alt="Google Maps">
				</a>
				
			</div>
		</header>
			<div class="box-sub-header">
				sobota 13.01.2024
			</div>
<div class="box-content box-content-table-cinema">
	<div class="table-container">
		<table class="striped cinema-table">
			<tbody>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/929532-caravaggiuv-stin/" class="film-title-name">Caravaggiův stín</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									18:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1000599-ferrari/" class="film-title-name">Ferrari</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									13:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									20:15
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1289556-prvni-den-meho-zivota/" class="film-title-name">První den mého života</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									20:30
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/756198-tancuj-matyldo/" class="film-title-name">Tancuj Matyldo</a></h3>							</td>
							<td class="td-title">
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									15:45
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1246937-to-se-mi-snad-zda/" class="film-title-name">To se mi snad zdá</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									18:15
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/972101-wonka/" class="film-title-name">Wonka</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									13:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1235907-zasah-stestim/" class="film-title-name">Zásah štěstím</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									16:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
			</tbody>
		</table>
	</div>
</div>
	</section>

	<section id="cinema-95" class="box">
		<header class="box-header">
			<h2>Praha - Kino MAT</h2>


			<div class="box-header-action box-header-action-cinema">
				tel. 224 915 765, 
				Karlovo nám. 285/19, Praha
				<a href="https://maps.google.cz/maps?rls=cs&q=50.077838,14.4192923">
					<img src=&#47;&#47;static.pmgstatic.com&#47;assets&#47;images&#47;76af1be24867e083347626550b6adef7&#47;google-map.png width="16" alt="Google Maps">
				</a>
				
			</div>
		</header>
			<div class="box-sub-header">
				sobota 13.01.2024
			</div>
<div class="box-content box-content-table-cinema">
	<div class="table-container">
		<table class="striped cinema-table">
			<tbody>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1391397-godzilla-1-0/" class="film-title-name">Godzilla Minus One</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									20:30
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1184885-mikulasovy-patalie-jak-to-cele-zacalo/" class="film-title-name">Mikulášovy patálie: Jak to celé začalo</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									14:15
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1351006-pan-blake-k-vasim-sluzbam/" class="film-title-name">Pan Blake k vašim službám</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									18:15
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1235907-zasah-stestim/" class="film-title-name">Zásah štěstím</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									16:15
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
			</tbody>
		</table>
	</div>
</div>
	</section>

	<section id="cinema-2178" class="box">
		<header class="box-header">
			<h2>Praha - Kino Pilotů</h2>


			<div class="box-header-action box-header-action-cinema">
				tel. 723 985 986, 
				Donská 168/19, Praha 10
				<a href="https://maps.google.cz/maps?rls=cs&q=50.0714058,14.4468184">
					<img src=&#47;&#47;static.pmgstatic.com&#47;assets&#47;images&#47;76af1be24867e083347626550b6adef7&#47;google-map.png width="16" alt="Google Maps">
				</a>
				
			</div>
		</header>
			<div class="box-sub-header">
				sobota 13.01.2024
			</div>
<div class="box-content box-content-table-cinema">
	<div class="table-container">
		<table class="striped cinema-table">
			<tbody>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1191024-anatomie-padu/" class="film-title-name">Anatomie pádu</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									21:00
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1242515-bod-obnovy/" class="film-title-name">Bod obnovy</a></h3>							</td>
							<td class="td-title">
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									14:10
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/931042-chlapec-a-volavka/" class="film-title-name">Chlapec a volavka</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									10:20
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square lightgrey"></i><a href="/film/1424259-eos-klimt-polibek/" class="film-title-name">EOS: Klimt &amp; Polibek</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									18:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1176354-hotel-palace/" class="film-title-name">Hotel Palace</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									17:30
							</td>
							<td>
							</td>
							<td class="td-time">
									19:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1259990-karaoke-blues/" class="film-title-name">Karaoke blues</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td class="td-time">
									12:10
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1324157-letani-pro-zacatecniky/" class="film-title-name">Létání pro začátečníky</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									16:20
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1427154-mlsne-medvedi-pribehy-na-pol/" class="film-title-name">Mlsné medvědí příběhy: Na pól!</a></h3>							</td>
							<td class="td-title">
							</td>
							<td class="td-time">
									10:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/925732-napoleon/" class="film-title-name">Napoleon</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									14:40
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1351006-pan-blake-k-vasim-sluzbam/" class="film-title-name">Pan Blake k vašim službám</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td class="td-time">
									12:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1147996-ptaci-stehovaci/" class="film-title-name">Ptáci stěhováci</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									10:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1246937-to-se-mi-snad-zda/" class="film-title-name">To se mi snad zdá</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									21:30
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/976647-tonda-slavka-a-kouzelne-svetlo/" class="film-title-name">Tonda, Slávka a kouzelné světlo</a></h3>							</td>
							<td class="td-title">
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									14:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1359858-umeni-jist-a-milovat/" class="film-title-name">Umění jíst a milovat</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									18:20
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/972101-wonka/" class="film-title-name">Wonka</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									15:45
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/594507-zabijaci-rozkvetleho-mesice/" class="film-title-name">Zabijáci rozkvetlého měsíce</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									19:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1235907-zasah-stestim/" class="film-title-name">Zásah štěstím</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td class="td-time">
									12:45
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
			</tbody>
		</table>
	</div>
</div>
	</section>

	<section id="cinema-105" class="box">
		<header class="box-header">
			<h2>Praha - Kino Ponrepo</h2>


			<div class="box-header-action box-header-action-cinema">
				tel. 224 233 281, 778 522 708, 
				Bartolomějská 291/11, Praha
				<a href="https://maps.google.cz/maps?rls=cs&q=50.0830744,14.4175702">
					<img src=&#47;&#47;static.pmgstatic.com&#47;assets&#47;images&#47;76af1be24867e083347626550b6adef7&#47;google-map.png width="16" alt="Google Maps">
				</a>
				
			</div>
		</header>
			<div class="box-sub-header">
				sobota 13.01.2024
			</div>
<div class="box-content box-content-table-cinema">
	<div class="table-container">
		<table class="striped cinema-table">
			<tbody>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/136864-malomocna/" class="film-title-name">Malomocná</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									18:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/594783-synonyma/" class="film-title-name">Synonyma</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									20:30
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
			</tbody>
		</table>
	</div>
</div>
	</section>

	<section id="cinema-106" class="box">
		<header class="box-header">
			<h2>Praha - Kino Radotín</h2>


			<div class="box-header-action box-header-action-cinema">
				tel. 257 910 322, 
				Na Výšince 875/4, Praha
				<a href="https://maps.google.cz/maps?rls=cs&q=49.9842459,14.3563444">
					<img src=&#47;&#47;static.pmgstatic.com&#47;assets&#47;images&#47;76af1be24867e083347626550b6adef7&#47;google-map.png width="16" alt="Google Maps">
				</a>
				
			</div>
		</header>
			<div class="box-sub-header">
				sobota 13.01.2024
			</div>
<div class="box-content box-content-table-cinema">
	<div class="table-container">
		<table class="striped cinema-table">
			<tbody>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/702193-aquaman-a-ztracene-kralovstvi/" class="film-title-name">Aquaman a ztracené království</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									20:00
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/477945-perinbaba-a-dva-svety/" class="film-title-name">Perinbaba a dva světy</a></h3>							</td>
							<td class="td-title">
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									17:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
			</tbody>
		</table>
	</div>
</div>
	</section>

	<section id="cinema-109" class="box">
		<header class="box-header">
			<h2>Praha - Kino Světozor</h2>


			<div class="box-header-action box-header-action-cinema">
				tel. 224 946 824, 
				Vodičkova 791/41, Praha
				<a href="https://maps.google.cz/maps?rls=cs&q=50.0819748,14.4255488">
					<img src=&#47;&#47;static.pmgstatic.com&#47;assets&#47;images&#47;76af1be24867e083347626550b6adef7&#47;google-map.png width="16" alt="Google Maps">
				</a>
				
			</div>
		</header>
			<div class="box-sub-header">
				sobota 13.01.2024
			</div>
<div class="box-content box-content-table-cinema">
	<div class="table-container">
		<table class="striped cinema-table">
			<tbody>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1191024-anatomie-padu/" class="film-title-name">Anatomie pádu</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									20:15
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/931042-chlapec-a-volavka/" class="film-title-name">Chlapec a volavka</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									15:00
							</td>
							<td>
							</td>
							<td class="td-time">
									17:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1000599-ferrari/" class="film-title-name">Ferrari</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									16:45
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/798754-jeden-gol/" class="film-title-name">Jeden gól</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									15:15
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1259990-karaoke-blues/" class="film-title-name">Karaoke blues</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									14:45
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1324157-letani-pro-zacatecniky/" class="film-title-name">Létání pro začátečníky</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td class="td-time">
									12:45
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1091993-oppenheimer/" class="film-title-name">Oppenheimer</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									19:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1246937-to-se-mi-snad-zda/" class="film-title-name">To se mi snad zdá</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									20:30
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/976647-tonda-slavka-a-kouzelne-svetlo/" class="film-title-name">Tonda, Slávka a kouzelné světlo</a></h3>							</td>
							<td class="td-title">
							</td>
							<td>
							</td>
							<td class="td-time">
									12:45
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/972101-wonka/" class="film-title-name">Wonka</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td>
							</td>
							<td class="td-time">
									12:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/972101-wonka/" class="film-title-name">Wonka</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									18:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
			</tbody>
		</table>
	</div>
</div>
	</section>

	<section id="cinema-243" class="box">
		<header class="box-header">
			<h2>Praha - Kino 35</h2>


			<div class="box-header-action box-header-action-cinema">
				tel. 221 401 011, 
				Štěpánská 644/35, Praha
				<a href="https://maps.google.cz/maps?rls=cs&q=50.0788473,14.4251247">
					<img src=&#47;&#47;static.pmgstatic.com&#47;assets&#47;images&#47;76af1be24867e083347626550b6adef7&#47;google-map.png width="16" alt="Google Maps">
				</a>
				
			</div>
		</header>
			<div class="box-sub-header">
				sobota 13.01.2024
			</div>
<div class="box-content box-content-table-cinema">
	<div class="table-container">
		<table class="striped cinema-table">
			<tbody>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/931042-chlapec-a-volavka/" class="film-title-name">Chlapec a volavka</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									13:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1351006-pan-blake-k-vasim-sluzbam/" class="film-title-name">Pan Blake k vašim službám</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									18:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/765324-pat-a-mat-kutilske-trampoty/" class="film-title-name">Pat a Mat: Kutilské trampoty</a></h3>							</td>
							<td class="td-title">
							</td>
							<td>
							</td>
							<td class="td-time">
									12:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/972101-wonka/" class="film-title-name">Wonka</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									15:45
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1235907-zasah-stestim/" class="film-title-name">Zásah štěstím</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									20:00
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
			</tbody>
		</table>
	</div>
</div>
	</section>

	<section id="cinema-86" class="box">
		<header class="box-header">
			<h2>Praha - Komorní kino Evald</h2>


			<div class="box-header-action box-header-action-cinema">
				tel. 221 105 225, 
				Národní 60/28, Praha
				<a href="https://maps.google.cz/maps?rls=cs&q=50.0824324,14.4201128">
					<img src=&#47;&#47;static.pmgstatic.com&#47;assets&#47;images&#47;76af1be24867e083347626550b6adef7&#47;google-map.png width="16" alt="Google Maps">
				</a>
				
			</div>
		</header>
			<div class="box-sub-header">
				sobota 13.01.2024
			</div>
<div class="box-content box-content-table-cinema">
	<div class="table-container">
		<table class="striped cinema-table">
			<tbody>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1351006-pan-blake-k-vasim-sluzbam/" class="film-title-name">Pan Blake k vašim službám</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									20:00
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1246937-to-se-mi-snad-zda/" class="film-title-name">To se mi snad zdá</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									18:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/976647-tonda-slavka-a-kouzelne-svetlo/" class="film-title-name">Tonda, Slávka a kouzelné světlo</a></h3>							</td>
							<td class="td-title">
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									14:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1030754-tri-musketyri-milady/" class="film-title-name">Tři mušketýři: Milady</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									15:45
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
			</tbody>
		</table>
	</div>
</div>
	</section>

	<section id="cinema-205" class="box">
		<header class="box-header">
			<h2>Praha - Městská knihovna v Praze - Ústřední knihovna</h2>


			<div class="box-header-action box-header-action-cinema">
				tel. 222 113 555, 
				Mariánské nám. 98/1, Praha 1
				<a href="https://maps.google.cz/maps?rls=cs&q=50.0873831,14.4173879">
					<img src=&#47;&#47;static.pmgstatic.com&#47;assets&#47;images&#47;76af1be24867e083347626550b6adef7&#47;google-map.png width="16" alt="Google Maps">
				</a>
				
			</div>
		</header>
			<div class="box-sub-header">
				sobota 13.01.2024
			</div>
<div class="box-content box-content-table-cinema">
	<div class="table-container">
		<table class="striped cinema-table">
			<tbody>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/931042-chlapec-a-volavka/" class="film-title-name">Chlapec a volavka</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									17:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1142582-srdce-dubu/" class="film-title-name">Srdce dubu</a></h3>							</td>
							<td class="td-title">
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									15:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
			</tbody>
		</table>
	</div>
</div>
	</section>

	<section id="cinema-97" class="box">
		<header class="box-header">
			<h2>Praha - Modřanský biograf</h2>


			<div class="box-header-action box-header-action-cinema">
				tel. 245 008 034, 
				U Kina 44/1, Praha
				<a href="https://maps.google.cz/maps?rls=cs&q=50.0036529,14.4048057">
					<img src=&#47;&#47;static.pmgstatic.com&#47;assets&#47;images&#47;76af1be24867e083347626550b6adef7&#47;google-map.png width="16" alt="Google Maps">
				</a>
				
			</div>
		</header>
			<div class="box-sub-header">
				sobota 13.01.2024
			</div>
<div class="box-content box-content-table-cinema">
	<div class="table-container">
		<table class="striped cinema-table">
			<tbody>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/28495-laputa-nebesky-zamek/" class="film-title-name">Laputa: Nebeský zámek</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									16:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1351006-pan-blake-k-vasim-sluzbam/" class="film-title-name">Pan Blake k vašim službám</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									20:15
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1147996-ptaci-stehovaci/" class="film-title-name">Ptáci stěhováci</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									14:15
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1235907-zasah-stestim/" class="film-title-name">Zásah štěstím</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									18:25
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
			</tbody>
		</table>
	</div>
</div>
	</section>

	<section id="cinema-1303" class="box">
		<header class="box-header">
			<h2>Praha - Premiere Cinemas Praha Hostivař</h2>


			<div class="box-header-action box-header-action-cinema">
				tel. 728 682 909, 
				Švehlova 1391/32, Praha
				<a href="https://maps.google.cz/maps?rls=cs&q=50.0531579,14.5175216">
					<img src=&#47;&#47;static.pmgstatic.com&#47;assets&#47;images&#47;76af1be24867e083347626550b6adef7&#47;google-map.png width="16" alt="Google Maps">
				</a>
				
			</div>
		</header>
			<div class="box-sub-header">
				sobota 13.01.2024
			</div>
<div class="box-content box-content-table-cinema">
	<div class="table-container">
		<table class="striped cinema-table">
			<tbody>
						<tr>
							<td class="name with-icon">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/702193-aquaman-a-ztracene-kralovstvi/" class="film-title-name">Aquaman a ztracené království</a></h3>								<span class="cinema-icon tooltip cinema-icon-dolby-atmos" data-tippy-content="Dolby Atmos sál">Dolby Atmos sál</span>
							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									10:40
							</td>
							<td>
							</td>
							<td class="td-time">
									13:10
							</td>
							<td>
							</td>
							<td class="td-time">
									15:40
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									18:10
							</td>
							<td>
							</td>
							<td class="td-time">
									20:40
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1000599-ferrari/" class="film-title-name">Ferrari</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									15:25
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									20:00
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1419285-jedeme-na-teambuilding/" class="film-title-name">Jedeme na teambuilding</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									10:15
							</td>
							<td class="td-time">
									12:35
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									15:00
							</td>
							<td>
							</td>
							<td class="td-time">
									17:20
							</td>
							<td>
							</td>
							<td class="td-time">
									19:40
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1105802-krvavy-johann/" class="film-title-name">Krvavý Johann</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									21:10
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1303808-nocni-koupani/" class="film-title-name">Noční koupání</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									21:35
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1351006-pan-blake-k-vasim-sluzbam/" class="film-title-name">Pan Blake k vašim službám</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td class="td-time">
									10:20
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									14:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									19:20
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1147996-ptaci-stehovaci/" class="film-title-name">Ptáci stěhováci</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									10:50
							</td>
							<td class="td-time">
									12:50
							</td>
							<td>
							</td>
							<td class="td-time">
									14:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1246100-prani/" class="film-title-name">Přání</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									11:00
							</td>
							<td>
							</td>
							<td class="td-time">
									13:10
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1358574-s-tebou-nikdy/" class="film-title-name">S tebou nikdy</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td class="td-time">
									12:40
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									17:10
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1246937-to-se-mi-snad-zda/" class="film-title-name">To se mi snad zdá</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									16:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									19:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1115181-trollove-3/" class="film-title-name">Trollové 3</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									10:00
							</td>
							<td class="td-time">
									12:00
							</td>
							<td>
							</td>
							<td class="td-time">
									14:00
							</td>
							<td>
							</td>
							<td class="td-time">
									16:00
							</td>
							<td>
							</td>
							<td class="td-time">
									18:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/972101-wonka/" class="film-title-name">Wonka</a></h3>							</td>
							<td class="td-title">
								<span title="Dabing">D</span>
							</td>
							<td class="td-time">
									10:10
							</td>
							<td class="td-time">
									12:45
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									15:15
							</td>
							<td>
							</td>
							<td class="td-time">
									17:50
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									20:20
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1235907-zasah-stestim/" class="film-title-name">Zásah štěstím</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									18:00
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
			</tbody>
		</table>
	</div>
</div>
	</section>

	<section id="cinema-2779" class="box">
		<header class="box-header">
			<h2>Praha - Přítomnost Boutique Cinema</h2>


			<div class="box-header-action box-header-action-cinema">
				tel. 770 124 558, 
				Siwiecova 1, Praha 3
				<a href="https://maps.google.cz/maps?rls=cs&q=50.0844917,14.4431458">
					<img src=&#47;&#47;static.pmgstatic.com&#47;assets&#47;images&#47;76af1be24867e083347626550b6adef7&#47;google-map.png width="16" alt="Google Maps">
				</a>
				
			</div>
		</header>
			<div class="box-sub-header">
				sobota 13.01.2024
			</div>
<div class="box-content box-content-table-cinema">
	<div class="table-container">
		<table class="striped cinema-table">
			<tbody>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square blue"></i><a href="/film/1358574-s-tebou-nikdy/" class="film-title-name">S tebou nikdy</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									17:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/1246937-to-se-mi-snad-zda/" class="film-title-name">To se mi snad zdá</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									20:30
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="name">
<h3 class="film-title-nooverflow"><i class="icon icon-rounded-square red"></i><a href="/film/972101-wonka/" class="film-title-name">Wonka</a></h3>							</td>
							<td class="td-title">
								<span title="Titulky">T</span>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td class="td-time">
									14:30
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
			</tbody>
		</table>
	</div>
</div>
	</section>

			</div>
		</div>
	</div>
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
									<form action="/kino/?period=today&amp;district=1" method="post" id="frm-timezoneForm">
										<select name="timezone" data-auto-submit-form="true" id="frm-timezoneForm-timezone"><option value="Africa/Abidjan">Africa/Abidjan</option><option value="Africa/Accra">Africa/Accra</option><option value="Africa/Addis_Ababa">Africa/Addis Ababa</option><option value="Africa/Algiers">Africa/Algiers</option><option value="Africa/Asmara">Africa/Asmara</option><option value="Africa/Bamako">Africa/Bamako</option><option value="Africa/Bangui">Africa/Bangui</option><option value="Africa/Banjul">Africa/Banjul</option><option value="Africa/Bissau">Africa/Bissau</option><option value="Africa/Blantyre">Africa/Blantyre</option><option value="Africa/Brazzaville">Africa/Brazzaville</option><option value="Africa/Bujumbura">Africa/Bujumbura</option><option value="Africa/Cairo">Africa/Cairo</option><option value="Africa/Casablanca">Africa/Casablanca</option><option value="Africa/Ceuta">Africa/Ceuta</option><option value="Africa/Conakry">Africa/Conakry</option><option value="Africa/Dakar">Africa/Dakar</option><option value="Africa/Dar_es_Salaam">Africa/Dar es Salaam</option><option value="Africa/Djibouti">Africa/Djibouti</option><option value="Africa/Douala">Africa/Douala</option><option value="Africa/El_Aaiun">Africa/El Aaiun</option><option value="Africa/Freetown">Africa/Freetown</option><option value="Africa/Gaborone">Africa/Gaborone</option><option value="Africa/Harare">Africa/Harare</option><option value="Africa/Johannesburg">Africa/Johannesburg</option><option value="Africa/Juba">Africa/Juba</option><option value="Africa/Kampala">Africa/Kampala</option><option value="Africa/Khartoum">Africa/Khartoum</option><option value="Africa/Kigali">Africa/Kigali</option><option value="Africa/Kinshasa">Africa/Kinshasa</option><option value="Africa/Lagos">Africa/Lagos</option><option value="Africa/Libreville">Africa/Libreville</option><option value="Africa/Lome">Africa/Lome</option><option value="Africa/Luanda">Africa/Luanda</option><option value="Africa/Lubumbashi">Africa/Lubumbashi</option><option value="Africa/Lusaka">Africa/Lusaka</option><option value="Africa/Malabo">Africa/Malabo</option><option value="Africa/Maputo">Africa/Maputo</option><option value="Africa/Maseru">Africa/Maseru</option><option value="Africa/Mbabane">Africa/Mbabane</option><option value="Africa/Mogadishu">Africa/Mogadishu</option><option value="Africa/Monrovia">Africa/Monrovia</option><option value="Africa/Nairobi">Africa/Nairobi</option><option value="Africa/Ndjamena">Africa/Ndjamena</option><option value="Africa/Niamey">Africa/Niamey</option><option value="Africa/Nouakchott">Africa/Nouakchott</option><option value="Africa/Ouagadougou">Africa/Ouagadougou</option><option value="Africa/Porto-Novo">Africa/Porto-Novo</option><option value="Africa/Sao_Tome">Africa/Sao Tome</option><option value="Africa/Tripoli">Africa/Tripoli</option><option value="Africa/Tunis">Africa/Tunis</option><option value="Africa/Windhoek">Africa/Windhoek</option><option value="America/Adak">America/Adak</option><option value="America/Anchorage">America/Anchorage</option><option value="America/Anguilla">America/Anguilla</option><option value="America/Antigua">America/Antigua</option><option value="America/Araguaina">America/Araguaina</option><option value="America/Argentina/Buenos_Aires">America/Argentina/Buenos Aires</option><option value="America/Argentina/Catamarca">America/Argentina/Catamarca</option><option value="America/Argentina/Cordoba">America/Argentina/Cordoba</option><option value="America/Argentina/Jujuy">America/Argentina/Jujuy</option><option value="America/Argentina/La_Rioja">America/Argentina/La Rioja</option><option value="America/Argentina/Mendoza">America/Argentina/Mendoza</option><option value="America/Argentina/Rio_Gallegos">America/Argentina/Rio Gallegos</option><option value="America/Argentina/Salta">America/Argentina/Salta</option><option value="America/Argentina/San_Juan">America/Argentina/San Juan</option><option value="America/Argentina/San_Luis">America/Argentina/San Luis</option><option value="America/Argentina/Tucuman">America/Argentina/Tucuman</option><option value="America/Argentina/Ushuaia">America/Argentina/Ushuaia</option><option value="America/Aruba">America/Aruba</option><option value="America/Asuncion">America/Asuncion</option><option value="America/Atikokan">America/Atikokan</option><option value="America/Bahia">America/Bahia</option><option value="America/Bahia_Banderas">America/Bahia Banderas</option><option value="America/Barbados">America/Barbados</option><option value="America/Belem">America/Belem</option><option value="America/Belize">America/Belize</option><option value="America/Blanc-Sablon">America/Blanc-Sablon</option><option value="America/Boa_Vista">America/Boa Vista</option><option value="America/Bogota">America/Bogota</option><option value="America/Boise">America/Boise</option><option value="America/Cambridge_Bay">America/Cambridge Bay</option><option value="America/Campo_Grande">America/Campo Grande</option><option value="America/Cancun">America/Cancun</option><option value="America/Caracas">America/Caracas</option><option value="America/Cayenne">America/Cayenne</option><option value="America/Cayman">America/Cayman</option><option value="America/Chicago">America/Chicago</option><option value="America/Chihuahua">America/Chihuahua</option><option value="America/Costa_Rica">America/Costa Rica</option><option value="America/Creston">America/Creston</option><option value="America/Cuiaba">America/Cuiaba</option><option value="America/Curacao">America/Curacao</option><option value="America/Dawson">America/Dawson</option><option value="America/Dawson_Creek">America/Dawson Creek</option><option value="America/Denver">America/Denver</option><option value="America/Detroit">America/Detroit</option><option value="America/Dominica">America/Dominica</option><option value="America/Edmonton">America/Edmonton</option><option value="America/Eirunepe">America/Eirunepe</option><option value="America/El_Salvador">America/El Salvador</option><option value="America/Fort_Nelson">America/Fort Nelson</option><option value="America/Fortaleza">America/Fortaleza</option><option value="America/Glace_Bay">America/Glace Bay</option><option value="America/Goose_Bay">America/Goose Bay</option><option value="America/Grand_Turk">America/Grand Turk</option><option value="America/Grenada">America/Grenada</option><option value="America/Guadeloupe">America/Guadeloupe</option><option value="America/Guatemala">America/Guatemala</option><option value="America/Guayaquil">America/Guayaquil</option><option value="America/Guyana">America/Guyana</option><option value="America/Halifax">America/Halifax</option><option value="America/Havana">America/Havana</option><option value="America/Hermosillo">America/Hermosillo</option><option value="America/Indiana/Indianapolis">America/Indiana/Indianapolis</option><option value="America/Indiana/Knox">America/Indiana/Knox</option><option value="America/Indiana/Marengo">America/Indiana/Marengo</option><option value="America/Indiana/Petersburg">America/Indiana/Petersburg</option><option value="America/Indiana/Tell_City">America/Indiana/Tell City</option><option value="America/Indiana/Vevay">America/Indiana/Vevay</option><option value="America/Indiana/Vincennes">America/Indiana/Vincennes</option><option value="America/Indiana/Winamac">America/Indiana/Winamac</option><option value="America/Inuvik">America/Inuvik</option><option value="America/Iqaluit">America/Iqaluit</option><option value="America/Jamaica">America/Jamaica</option><option value="America/Juneau">America/Juneau</option><option value="America/Kentucky/Louisville">America/Kentucky/Louisville</option><option value="America/Kentucky/Monticello">America/Kentucky/Monticello</option><option value="America/Kralendijk">America/Kralendijk</option><option value="America/La_Paz">America/La Paz</option><option value="America/Lima">America/Lima</option><option value="America/Los_Angeles">America/Los Angeles</option><option value="America/Lower_Princes">America/Lower Princes</option><option value="America/Maceio">America/Maceio</option><option value="America/Managua">America/Managua</option><option value="America/Manaus">America/Manaus</option><option value="America/Marigot">America/Marigot</option><option value="America/Martinique">America/Martinique</option><option value="America/Matamoros">America/Matamoros</option><option value="America/Mazatlan">America/Mazatlan</option><option value="America/Menominee">America/Menominee</option><option value="America/Merida">America/Merida</option><option value="America/Metlakatla">America/Metlakatla</option><option value="America/Mexico_City">America/Mexico City</option><option value="America/Miquelon">America/Miquelon</option><option value="America/Moncton">America/Moncton</option><option value="America/Monterrey">America/Monterrey</option><option value="America/Montevideo">America/Montevideo</option><option value="America/Montserrat">America/Montserrat</option><option value="America/Nassau">America/Nassau</option><option value="America/New_York">America/New York</option><option value="America/Nipigon">America/Nipigon</option><option value="America/Nome">America/Nome</option><option value="America/North_Dakota/Beulah">America/North Dakota/Beulah</option><option value="America/North_Dakota/Center">America/North Dakota/Center</option><option value="America/North_Dakota/New_Salem">America/North Dakota/New Salem</option><option value="America/Nuuk">America/Nuuk</option><option value="America/Ojinaga">America/Ojinaga</option><option value="America/Panama">America/Panama</option><option value="America/Pangnirtung">America/Pangnirtung</option><option value="America/Paramaribo">America/Paramaribo</option><option value="America/Phoenix">America/Phoenix</option><option value="America/Port-au-Prince">America/Port-au-Prince</option><option value="America/Port_of_Spain">America/Port of_Spain</option><option value="America/Porto_Velho">America/Porto Velho</option><option value="America/Puerto_Rico">America/Puerto Rico</option><option value="America/Punta_Arenas">America/Punta Arenas</option><option value="America/Rainy_River">America/Rainy River</option><option value="America/Rankin_Inlet">America/Rankin Inlet</option><option value="America/Recife">America/Recife</option><option value="America/Regina">America/Regina</option><option value="America/Resolute">America/Resolute</option><option value="America/Rio_Branco">America/Rio Branco</option><option value="America/Santarem">America/Santarem</option><option value="America/Santiago">America/Santiago</option><option value="America/Santo_Domingo">America/Santo Domingo</option><option value="America/Sao_Paulo">America/Sao Paulo</option><option value="America/Scoresbysund">America/Scoresbysund</option><option value="America/Sitka">America/Sitka</option><option value="America/St_Barthelemy">America/St Barthelemy</option><option value="America/St_Johns">America/St. John's</option><option value="America/St_Kitts">America/St Kitts</option><option value="America/St_Lucia">America/St Lucia</option><option value="America/St_Thomas">America/St Thomas</option><option value="America/St_Vincent">America/St Vincent</option><option value="America/Swift_Current">America/Swift Current</option><option value="America/Tegucigalpa">America/Tegucigalpa</option><option value="America/Thule">America/Thule</option><option value="America/Thunder_Bay">America/Thunder Bay</option><option value="America/Tijuana">America/Tijuana</option><option value="America/Toronto">America/Toronto</option><option value="America/Tortola">America/Tortola</option><option value="America/Vancouver">America/Vancouver</option><option value="America/Whitehorse">America/Whitehorse</option><option value="America/Winnipeg">America/Winnipeg</option><option value="America/Yakutat">America/Yakutat</option><option value="America/Yellowknife">America/Yellowknife</option><option value="Antarctica/McMurdo">Antarctica/McMurdo</option><option value="Antarctica/Syowa">Antarctica/Syowa</option><option value="Arctic/Longyearbyen">Arctic/Longyearbyen</option><option value="Asia/Aden">Asia/Aden</option><option value="Asia/Almaty">Asia/Almaty</option><option value="Asia/Amman">Asia/Amman</option><option value="Asia/Anadyr">Asia/Anadyr</option><option value="Asia/Aqtau">Asia/Aqtau</option><option value="Asia/Aqtobe">Asia/Aqtobe</option><option value="Asia/Ashgabat">Asia/Ashgabat</option><option value="Asia/Atyrau">Asia/Atyrau</option><option value="Asia/Baghdad">Asia/Baghdad</option><option value="Asia/Bahrain">Asia/Bahrain</option><option value="Asia/Baku">Asia/Baku</option><option value="Asia/Bangkok">Asia/Bangkok</option><option value="Asia/Barnaul">Asia/Barnaul</option><option value="Asia/Beirut">Asia/Beirut</option><option value="Asia/Bishkek">Asia/Bishkek</option><option value="Asia/Brunei">Asia/Brunei</option><option value="Asia/Chita">Asia/Chita</option><option value="Asia/Choibalsan">Asia/Choibalsan</option><option value="Asia/Colombo">Asia/Colombo</option><option value="Asia/Damascus">Asia/Damascus</option><option value="Asia/Dhaka">Asia/Dhaka</option><option value="Asia/Dili">Asia/Dili</option><option value="Asia/Dubai">Asia/Dubai</option><option value="Asia/Dushanbe">Asia/Dushanbe</option><option value="Asia/Famagusta">Asia/Famagusta</option><option value="Asia/Gaza">Asia/Gaza</option><option value="Asia/Hebron">Asia/Hebron</option><option value="Asia/Ho_Chi_Minh">Asia/Ho Chi_Minh</option><option value="Asia/Hong_Kong">Asia/Hong_Kong</option><option value="Asia/Hovd">Asia/Hovd</option><option value="Asia/Irkutsk">Asia/Irkutsk</option><option value="Asia/Jakarta">Asia/Jakarta</option><option value="Asia/Jayapura">Asia/Jayapura</option><option value="Asia/Jerusalem">Asia/Jerusalem</option><option value="Asia/Kabul">Asia/Kabul</option><option value="Asia/Kamchatka">Asia/Kamchatka</option><option value="Asia/Karachi">Asia/Karachi</option><option value="Asia/Kathmandu">Asia/Kathmandu</option><option value="Asia/Kolkata">Asia/Kolkata</option><option value="Asia/Krasnoyarsk">Asia/Krasnoyarsk</option><option value="Asia/Kuala_Lumpur">Asia/Kuala_Lumpur</option><option value="Asia/Kuching">Asia/Kuching</option><option value="Asia/Kuwait">Asia/Kuwait</option><option value="Asia/Macau">Asia/Macau</option><option value="Asia/Magadan">Asia/Magadan</option><option value="Asia/Makassar">Asia/Makassar</option><option value="Asia/Manila">Asia/Manila</option><option value="Asia/Muscat">Asia/Muscat</option><option value="Asia/Nicosia">Asia/Nicosia</option><option value="Asia/Novokuznetsk">Asia/Novokuznetsk</option><option value="Asia/Novosibirsk">Asia/Novosibirsk</option><option value="Asia/Omsk">Asia/Omsk</option><option value="Asia/Oral">Asia/Oral</option><option value="Asia/Phnom_Penh">Asia/Phnom_Penh</option><option value="Asia/Pontianak">Asia/Pontianak</option><option value="Asia/Pyongyang">Asia/Pyongyang</option><option value="Asia/Qatar">Asia/Qatar</option><option value="Asia/Qostanay">Asia/Qostanay</option><option value="Asia/Qyzylorda">Asia/Qyzylorda</option><option value="Asia/Riyadh">Asia/Riyadh</option><option value="Asia/Sakhalin">Asia/Sakhalin</option><option value="Asia/Samarkand">Asia/Samarkand</option><option value="Asia/Seoul">Asia/Seoul</option><option value="Asia/Shanghai">Asia/Shanghai</option><option value="Asia/Singapore">Asia/Singapore</option><option value="Asia/Taipei">Asia/Taipei</option><option value="Asia/Tashkent">Asia/Tashkent</option><option value="Asia/Tbilisi">Asia/Tbilisi</option><option value="Asia/Tehran">Asia/Tehran</option><option value="Asia/Thimphu">Asia/Thimphu</option><option value="Asia/Tokyo">Asia/Tokyo</option><option value="Asia/Tomsk">Asia/Tomsk</option><option value="Asia/Ulaanbaatar">Asia/Ulaanbaatar</option><option value="Asia/Urumqi">Asia/Urumqi</option><option value="Asia/Vientiane">Asia/Vientiane</option><option value="Asia/Vladivostok">Asia/Vladivostok</option><option value="Asia/Yakutsk">Asia/Yakutsk</option><option value="Asia/Yangon">Asia/Yangon</option><option value="Asia/Yekaterinburg">Asia/Yekaterinburg</option><option value="Asia/Yerevan">Asia/Yerevan</option><option value="Atlantic/Azores">Atlantic/Azores</option><option value="Atlantic/Bermuda">Atlantic/Bermuda</option><option value="Atlantic/Canary">Atlantic/Canary</option><option value="Atlantic/Cape_Verde">Atlantic/Cape Verde</option><option value="Atlantic/Faroe">Atlantic/Faroe</option><option value="Atlantic/Madeira">Atlantic/Madeira</option><option value="Atlantic/Reykjavik">Atlantic/Reykjavik</option><option value="Atlantic/South_Georgia">Atlantic/South Georgia</option><option value="Atlantic/St_Helena">Atlantic/St Helena</option><option value="Atlantic/Stanley">Atlantic/Stanley</option><option value="Australia/Adelaide">Australia/Adelaide</option><option value="Australia/Brisbane">Australia/Brisbane</option><option value="Australia/Broken_Hill">Australia/Broken Hill</option><option value="Australia/Darwin">Australia/Darwin</option><option value="Australia/Eucla">Australia/Eucla</option><option value="Australia/Hobart">Australia/Hobart</option><option value="Australia/Lindeman">Australia/Lindeman</option><option value="Australia/Lord_Howe">Australia/Lord Howe</option><option value="Australia/Melbourne">Australia/Melbourne</option><option value="Australia/Perth">Australia/Perth</option><option value="Australia/Sydney">Australia/Sydney</option><option value="Europe/Amsterdam">Europe/Amsterdam</option><option value="Europe/Andorra">Europe/Andorra</option><option value="Europe/Astrakhan">Europe/Astrakhan</option><option value="Europe/Athens">Europe/Athens</option><option value="Europe/Belgrade">Europe/Belgrade</option><option value="Europe/Berlin">Europe/Berlin</option><option value="Europe/Bratislava">Europe/Bratislava</option><option value="Europe/Brussels">Europe/Brussels</option><option value="Europe/Bucharest">Europe/Bucharest</option><option value="Europe/Budapest">Europe/Budapest</option><option value="Europe/Chisinau">Europe/Chisinau</option><option value="Europe/Copenhagen">Europe/Copenhagen</option><option value="Europe/Dublin">Europe/Dublin</option><option value="Europe/Gibraltar">Europe/Gibraltar</option><option value="Europe/Guernsey">Europe/Guernsey</option><option value="Europe/Helsinki">Europe/Helsinki</option><option value="Europe/Isle_of_Man">Europe/Isle of Man</option><option value="Europe/Istanbul">Europe/Istanbul</option><option value="Europe/Jersey">Europe/Jersey</option><option value="Europe/Kaliningrad">Europe/Kaliningrad</option><option value="Europe/Kiev">Europe/Kiev</option><option value="Europe/Kirov">Europe/Kirov</option><option value="Europe/Lisbon">Europe/Lisbon</option><option value="Europe/Ljubljana">Europe/Ljubljana</option><option value="Europe/London">Europe/London</option><option value="Europe/Luxembourg">Europe/Luxembourg</option><option value="Europe/Madrid">Europe/Madrid</option><option value="Europe/Malta">Europe/Malta</option><option value="Europe/Mariehamn">Europe/Mariehamn</option><option value="Europe/Minsk">Europe/Minsk</option><option value="Europe/Monaco">Europe/Monaco</option><option value="Europe/Moscow">Europe/Moscow</option><option value="Europe/Oslo">Europe/Oslo</option><option value="Europe/Paris">Europe/Paris</option><option value="Europe/Podgorica">Europe/Podgorica</option><option value="Europe/Prague" selected>Europe/Prague</option><option value="Europe/Riga">Europe/Riga</option><option value="Europe/Rome">Europe/Rome</option><option value="Europe/Samara">Europe/Samara</option><option value="Europe/San_Marino">Europe/San Marino</option><option value="Europe/Sarajevo">Europe/Sarajevo</option><option value="Europe/Saratov">Europe/Saratov</option><option value="Europe/Simferopol">Europe/Simferopol</option><option value="Europe/Skopje">Europe/Skopje</option><option value="Europe/Sofia">Europe/Sofia</option><option value="Europe/Stockholm">Europe/Stockholm</option><option value="Europe/Tallinn">Europe/Tallinn</option><option value="Europe/Tirane">Europe/Tirane</option><option value="Europe/Ulyanovsk">Europe/Ulyanovsk</option><option value="Europe/Uzhgorod">Europe/Uzhgorod</option><option value="Europe/Vaduz">Europe/Vaduz</option><option value="Europe/Vatican">Europe/Vatican</option><option value="Europe/Vienna">Europe/Vienna</option><option value="Europe/Vilnius">Europe/Vilnius</option><option value="Europe/Volgograd">Europe/Volgograd</option><option value="Europe/Warsaw">Europe/Warsaw</option><option value="Europe/Zagreb">Europe/Zagreb</option><option value="Europe/Zaporozhye">Europe/Zaporozhye</option><option value="Europe/Zurich">Europe/Zurich</option><option value="Indian/Antananarivo">Indian/Antananarivo</option><option value="Indian/Chagos">Indian/Chagos</option><option value="Indian/Christmas">Indian/Christmas</option><option value="Indian/Cocos">Indian/Cocos</option><option value="Indian/Comoro">Indian/Comoro</option><option value="Indian/Kerguelen">Indian/Kerguelen</option><option value="Indian/Mahe">Indian/Mahe</option><option value="Indian/Maldives">Indian/Maldives</option><option value="Indian/Mauritius">Indian/Mauritius</option><option value="Indian/Mayotte">Indian/Mayotte</option><option value="Indian/Reunion">Indian/Reunion</option><option value="Pacific/Apia">Pacific/Apia</option><option value="Pacific/Auckland">Pacific/Auckland</option><option value="Pacific/Bougainville">Pacific/Bougainville</option><option value="Pacific/Chatham">Pacific/Chatham</option><option value="Pacific/Chuuk">Pacific/Chuuk</option><option value="Pacific/Easter">Pacific/Easter</option><option value="Pacific/Efate">Pacific/Efate</option><option value="Pacific/Fakaofo">Pacific/Fakaofo</option><option value="Pacific/Fiji">Pacific/Fiji</option><option value="Pacific/Funafuti">Pacific/Funafuti</option><option value="Pacific/Galapagos">Pacific/Galapagos</option><option value="Pacific/Gambier">Pacific/Gambier</option><option value="Pacific/Guadalcanal">Pacific/Guadalcanal</option><option value="Pacific/Guam">Pacific/Guam</option><option value="Pacific/Honolulu">Pacific/Honolulu</option><option value="Pacific/Kiritimati">Pacific/Kiritimati</option><option value="Pacific/Kosrae">Pacific/Kosrae</option><option value="Pacific/Kwajalein">Pacific/Kwajalein</option><option value="Pacific/Majuro">Pacific/Majuro</option><option value="Pacific/Marquesas">Pacific/Marquesas</option><option value="Pacific/Midway">Pacific/Midway</option><option value="Pacific/Nauru">Pacific/Nauru</option><option value="Pacific/Niue">Pacific/Niue</option><option value="Pacific/Norfolk">Pacific/Norfolk</option><option value="Pacific/Noumea">Pacific/Noumea</option><option value="Pacific/Pago_Pago">Pacific/Pago Pago</option><option value="Pacific/Palau">Pacific/Palau</option><option value="Pacific/Pitcairn">Pacific/Pitcairn</option><option value="Pacific/Pohnpei">Pacific/Pohnpei</option><option value="Pacific/Port_Moresby">Pacific/Port Moresby</option><option value="Pacific/Rarotonga">Pacific/Rarotonga</option><option value="Pacific/Saipan">Pacific/Saipan</option><option value="Pacific/Tahiti">Pacific/Tahiti</option><option value="Pacific/Tarawa">Pacific/Tarawa</option><option value="Pacific/Tongatapu">Pacific/Tongatapu</option><option value="Pacific/Wallis">Pacific/Wallis</option></select>
									<input type="hidden" name="_do" value="timezoneForm-submit"></form>
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
						</div>
						<div class="footer-app">
							<h3>Mobilní aplikace</h3>
							<a href="https://apps.apple.com/cz/app/csfd-web/id1552901865#?platform=iphone" class="btn-app-store" target="_blank"><img src=&#47;&#47;static.pmgstatic.com&#47;assets&#47;images&#47;76af1be24867e083347626550b6adef7&#47;appstore.svg alt="ČSFD Web | App Store"></a>
							<a href="https://play.google.com/store/apps/details?id=cz.csfd.lite" class="btn-google-play" target="_blank"><img src=&#47;&#47;static.pmgstatic.com&#47;assets&#47;images&#47;76af1be24867e083347626550b6adef7&#47;googleplay.svg alt="ČSFD Web | Google Play"></a>
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


<script type="text/json" id="js-common-config">{"country":1,"domain":"csfd.cz","host":"www.csfd.cz","userLanguageId":1,"translations":{"web.ajax.default.error.message":"Omlouváme se, ale nastala chyba při zpracování.","web.ajax.resend.button":"Odeslat znovu","web.autocomplete.creator.header":"Tvůrci","web.autocomplete.creator.more.link":"Všichni tvůrci","web.autocomplete.film.header":"Filmy","web.autocomplete.film.more.link":"Všechny filmy","web.autocomplete.noservice":"Služba vyhledávání není momentálně dostupná.","web.autocomplete.searching":"Vyhledávám...","web.autocomplete.search.select":"Vyplň název filmu / jméno tvůrce nebo uživatele","web.autocomplete.series.header":"Seriály","web.autocomplete.series.more.link":"Všechny seriály","web.autocomplete.user.header":"Uživatelé","web.autocomplete.user.more.link":"Všichni uživatelé","web.check.all":"zaškrtnout vše","web.fileupload.preloader":"Načítám knihovnu, prosím o strpení...","web.modal.confirm.close":"Opravdu chceš zavřít okno? Možná máš neuložené změny.","web.preloader.loading":"Načítání...","web.search.creator.notfound":"Nenalezeni žádní tvůrci","web.search.film.notfound":"Nenalezeny žádné filmy","web.search.series.notfound":"Nenalezeny žádné seriály","web.search.user.notfound":"Nenalezeni žádní uživatelé","web.selectize.plugin.remove.button.remove":"Odebrat","web.sortable.error.move":"Při přesunu pozic došlo k chybě. Stránka bude obnovena. Pokračovat?","web.cinema.top.link":"nahoru"},"route":":Web:Cinema:default","isLoggedIn":false,"userId":null,"hooks":["FormGet","AutoSubmitForm","Autocomplete","InfoModal","Confirm","Scroller","SecureHandle"]}</script>
<script src="//static.pmgstatic.com/assets/utils-js/f37b6f7c8099c7d011ac86e6d6a523c6/scripts.min.js"></script>
<script type="text/javascript">
	CSFDAds.setTServer("https://a.csfd.cz/csfd/tserver");
	CSFDAds.complete({"ball":{"site":"csfd.cz","page":6,"login":2,"viewId":63844850},"0":{"area":"leaderboard","size":"1000x210,2000x1400,1000x200,1000x210,970x210,998x200,750x200,750x100,970x90,728x90,branding_web"},"1":{"area":"billboard","size":"1000x310,970x310,560x315,480x300,750x300,970x250,970x90,728x90"},"2":{"area":"slide_up","size":"970x310,970x250,950x200,750x300,750x200,728x90,500x200,320x150,320x100,320x50,300x100,300x50,slide_up"},"3":{"area":"mobile_leaderboard","size":"320x100,320x50,300x100,300x50"},"4":{"area":"mobile_billboard","size":"300x300,300x250"}}, false, false);
</script>
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TM3S526" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
	</body>

	<a href="#top" title="Zpět nahoru" id="back-to-top"><i class="icon icon-arrow-up" aria-hidden="true"></i></a>
</html>
`;
