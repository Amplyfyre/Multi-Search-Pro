// This is the list of websites inside the code of background.js, it is not the full code.
// This is to keep up with the updated list of websites in case I have added new ones since you last downloaded it.
// This list relates to the Chromium version, but the only difference with the Mozilla version is their respective browser extension search pages.
// { id: "m1",  name: "Mozilla Add-ons",              url: "https://addons.mozilla.org/en-US/firefox/search/?q=%s" },


const DEFAULTS = (function () {
  const general = [
    { id: "g1",  name: "DuckDuckGo",            url: "https://duckduckgo.com/?q=%s" },
    { id: "g2",  name: "Brave",                 url: "https://search.brave.com/search?q=%s" },
    { id: "g3",  name: "Startpage",             url: "https://www.startpage.com/do/search?query=%s" },
    { id: "g4",  name: "Swisscows",             url: "https://swisscows.com/web?query=%s" },
    { id: "g5",  name: "Yep",                   url: "https://yep.com/web?q=%s" },
    { id: "g6",  name: "Mojeek",                url: "https://www.mojeek.com/search?q=%s" },
    { id: "g7",  name: "Norton Safe Search",    url: "https://nortonsafe.search.ask.com/web?q=%s" },

    { id: "g8",  name: "Yahoo Goodsearch",      url: "https://search.yahoo.com/yhs/search?hspart=goodsearch&hsimp=yhst-goodsearch_yhs&p=%s" },
    { id: "g9",  name: "OceanHero",             url: "https://oceanhero.today/web?q=%s" },
    { id: "g10", name: "Ecosia",                url: "https://www.ecosia.org/search?q=%s" },
    { id: "g11", name: "Lilo",                  url: "https://search.lilo.org/?q=%s" },
    { id: "g12", name: "Lukol",                 url: "https://www.lukol.com/s.php?q=%s" },
    { id: "g13", name: "Gibiru",                url: "https://gibiru.com/results.html?q=%s" },
    { id: "g14", name: "Becovi",                url: "https://search.becovi.com/serp.php?q=%s&i=" },

    { id: "g15", name: "YouCare.World",         url: "https://youcare.world/all?q=%s" },
    { id: "g16", name: "Ekoru",                 url: "https://www.ekoru.org/?q=%s" },
    { id: "g17", name: "Rapusia",               url: "https://rapusia.org/?q=%s" },
    { id: "g18", name: "GiveWater",             url: "https://search.givewater.com/serp?q=%s" },
    { id: "g19", name: "Entireweb",             url: "https://search.entireweb.com/search?q=%s" },
    { id: "g20", name: "Excite",                url: "https://results.excite.com/serp?q=%s" },
    { id: "g21", name: "Dogpile",               url: "https://www.dogpile.com/serp?q=%s" },
 
    { id: "g22", name: "Google",                url: "https://www.google.com/search?q=%s" },
    { id: "g23", name: "Bing",                  url: "https://www.bing.com/search?q=%s" },
    { id: "g24", name: "Ask",                   url: "https://www.ask.com/web?q=%s" },
    { id: "g25", name: "Lycos",                 url: "https://search.lycos.com/web/?q=%s" },
    { id: "g26", name: "WebCrawler",            url: "https://www.webcrawler.com/serp?q=%s" },
    { id: "g27", name: "Qwant",                 url: "https://www.qwant.com/?q=%s" },
    { id: "g28", name: "Yandex",                url: "https://www.yandex.com/search/?text=%s" }
  ];

  const images = [
    { id: "im1", name: "Pinterest",              url: "https://www.pinterest.com/search/pins/?q=%s" },
    { id: "im2", name: "Imgur",                  url: "https://imgur.com/search?q=%s" },
    { id: "im3", name: "Wikimedia Images",       url: "https://commons.wikimedia.org/w/index.php?search=%s&title=Special%3AMediaSearch&type=image" },
    { id: "im4", name: "Tumblr Images",          url: "https://www.tumblr.com/search/%s?postTypes=gif%2Cphoto&src=typed_query" },
    { id: "im5", name: "Giphy",                  url: "https://giphy.com/search/%s" },
	{ id: "im6", name: "Tenor",                  url: "https://tenor.com/en-GB/search/%s-gifs" },
    { id: "im7", name: "Scrolller",              url: "https://scrolller.com/r/%s" },

    { id: "im8",  name: "DuckDuckGo Img",        url: "https://duckduckgo.com/?q=%s&iax=images&ia=images" },
    { id: "im9",  name: "Brave Img",             url: "https://search.brave.com/images?q=%s" },
    { id: "im10", name: "Startpage Img",         url: "https://www.startpage.com/do/search?query=%s&cat=pics" },
    { id: "im11", name: "Swisscows Img",         url: "https://swisscows.com/image?query=%s" },
    { id: "im12", name: "Yep Img",               url: "https://yep.com/images?q=%s" },
    { id: "im13", name: "Fotki",                 url: "https://search.fotki.com/?q=%s" },
    { id: "im14", name: "Pholder",               url: "https://pholder.com/%s" },

    { id: "im15", name: "Yahoo GoodSearch Img",  url: "https://images.search.yahoo.com/yhs/search?hspart=goodsearch&hsimp=yhs-goodsearch_yhs&p=%s" },
    { id: "im16", name: "OceanHero Img",         url: "https://oceanhero.today/images?q=%s" },
    { id: "im17", name: "Ecosia Img",            url: "https://www.ecosia.org/images?q=%s" },
    { id: "im18", name: "Sogou Img",             url: "https://pic.sogou.com/pics?query=%s" },
    { id: "im19", name: "Lukol Img",             url: "https://www.lukol.com/i.php?q=%s" },
    { id: "im20", name: "Fireball Img",          url: "https://fireball.com/search?q=%s&f=images" },
    { id: "im21", name: "Dogpile Img",           url: "https://www.dogpile.com/serp?qc=images&q=%s" },

    { id: "im22", name: "YouCare Img",           url: "https://youcare.world/images?q=%s" },
    { id: "im23", name: "Lilo Img",              url: "https://search.lilo.org/?t=images&q=%s" },
    { id: "im24", name: "GiveWater Img",         url: "https://search.givewater.com/serp?qc=images&q=%s" },
    { id: "im25", name: "Baidu Img",             url: "https://image.baidu.com/search/index?tn=baiduimage&word=%s" },
    { id: "im26", name: "Qwant Img",             url: "https://www.qwant.com/?q=%s&t=images" },
    { id: "im27", name: "Yandex Img",            url: "https://yandex.com/images/search?text=%s" },
    { id: "im28", name: "Bing Img",              url: "https://www.bing.com/images/search?q=%s" },

    { id: "im29", name: "Google Img",            url: "https://www.google.com/search?tbm=isch&q=%s" },
  ];

  const videos = [
    { id: "v1",  name: "YouTube",               url: "https://www.youtube.com/results?search_query=%s" },
    { id: "v2",  name: "Odysee",                url: "https://odysee.com/$/search?q=%s" },
    { id: "v3",  name: "DailyMotion",           url: "https://www.dailymotion.com/search/%s/videos" },
    { id: "v4",  name: "Vimeo",                 url: "https://vimeo.com/search?q=%s" },
    { id: "v5",  name: "Nebula",                url: "https://nebula.tv/search?q=%s" },   
    { id: "v6",  name: "TikTok",                url: "https://www.tiktok.com/search/video?q=%s" },
    { id: "v7",  name: "Snapchat",              url: "https://www.snapchat.com/explore/%s" },

    { id: "v8",  name: "Wikimedia Videos",      url: "https://commons.wikimedia.org/w/index.php?search=%s&title=Special%3AMediaSearch&type=video" },
    { id: "v9",  name: "Sepia Search",          url: "https://sepiasearch.org/search?search=%s" },
    { id: "v10", name: "FC2 Video",             url: "https://video.fc2.com/search/video/?keyword=%s" },
    { id: "v11", name: "ItemFix",               url: "https://www.itemfix.com/list?q=%s" },
    { id: "v12", name: "VideoSift",             url: "https://videosift.com/search?q=%s" },
    { id: "v13", name: "Bitchute",              url: "https://www.bitchute.com/search?query=%s" },
    { id: "v14", name: "Rumble",                url: "https://rumble.com/search/all?q=%s" },

    { id: "v15", name: "DuckDuckGo Vid",        url: "https://duckduckgo.com/?q=%s&iax=videos&ia=videos" },
    { id: "v16", name: "Brave Vid",             url: "https://search.brave.com/videos?q=%s&source=web" },
    { id: "v17", name: "Startpage Vid",         url: "https://www.startpage.com/do/search?query=%s&cat=video" },
    { id: "v18", name: "Swisscows Vid",         url: "https://swisscows.com/en/video?query=%s" },
    { id: "v19", name: "Fireball Vid",          url: "https://fireball.com/search/?f=videos&q=%s" },
    { id: "v20", name: "WebCrawler Vid",        url: "https://www.webcrawler.com/serp?qc=video&q=%s" },
    { id: "v21", name: "Dogpile Vid",           url: "https://www.dogpile.com/serp?qc=video&q=%s" },

    { id: "v22", name: "Yahoo GoodSearch Vid",  url: "https://video.search.yahoo.com/yhs/search?hspart=goodsearch&hsimp=yhs-goodsearch_yhs&p=%s" },
    { id: "v23", name: "OceanHero Vid",         url: "https://oceanhero.today/videos?q=%s" },
    { id: "v24", name: "Ecosia Vid",            url: "https://www.ecosia.org/videos?q=%s" },
    { id: "v25", name: "Lilo Vid",              url: "https://search.lilo.org/?t=videos&q=%s" },
    { id: "v26", name: "GiveWater Vid",         url: "https://search.givewater.com/serp?qc=video&q=%s" },
    { id: "v27", name: "Qwant Vid",             url: "https://www.qwant.com/?q=%s&t=videos" },
    { id: "v28", name: "Yandex Vid",            url: "https://yandex.com/video/search?text=%s" },

    { id: "v29", name: "Bing Vid",              url: "https://www.bing.com/videos/search?q=%s" },
    { id: "v30", name: "Metatube",              url: "https://www.metatube.com/search/?q=%s" }
  ];

  const information = [
    { id: "in1", name: "Wikipedia",            url: "https://en.wikipedia.org/w/index.php?search=%s" },
    { id: "in2", name: "Britannica",           url: "https://www.britannica.com/search?query=%s" },
    { id: "in3", name: "Encyclopedia.com",     url: "https://www.encyclopedia.com/gsearch?q=%s" },
    { id: "in4", name: "Everybodywiki",        url: "https://en.everybodywiki.com/index.php?search=%s" },
    { id: "in5", name: "Answers.com",          url: "https://www.answers.com/search?q=%s" },
    { id: "in6", name: "Quora",                url: "https://www.quora.com/search?q=%s" },
    { id: "in7", name: "Wolfram|Alpha",        url: "https://www.wolframalpha.com/input/?i=%s" },

    { id: "in8", name: "Slashdot",             url: "https://slashdot.org/index2.pl?fhfilter=%s" },
    { id: "in9", name: "Boardreader",          url: "https://boardreader.com/s/%s.html" }
  ];

  const howto = [
    { id: "h1", name: "WikiHow",              url: "https://www.wikihow.com/wikiHowTo?search=%s" },
    { id: "h2", name: "Instructables",        url: "https://www.instructables.com/search/?q=%s" },
    { id: "h3", name: "Lifehacker",           url: "https://lifehacker.com/search/?q=%s" },
    { id: "h4", name: "WonderHowTo",          url: "https://www.wonderhowto.com/search/?query=%s" },
    { id: "h5", name: "eHow",                 url: "https://www.ehow.com/search?q=%s" },
    { id: "h6", name: "LoveToKnow",           url: "https://www.lovetoknow.com/search/results?q=%s" },
    { id: "h7", name: "Makezine",             url: "https://makezine.com/?s=%s" }
  ];

  const books = [
    { id: "b1",  name: "OpenLibrary",             url: "https://openlibrary.org/search?q=%s" },
    { id: "b2",  name: "Manybooks",               url: "https://manybooks.net/search-book?search=%s" },
    { id: "b3",  name: "Z-Library",               url: "https://z-library.co/s/%s" },
    { id: "b4",  name: "ReadAnyBook",             url: "https://www.readanybook.com/search?q=%s" },
	{ id: "b5",  name: "Internet Archive Texts",  url: "https://archive.org/details/texts?query=%s" },
    { id: "b6",  name: "Anna’s Archive",          url: "https://annas-archive.gl/search?q=%s" },
    { id: "b7",  name: "WeLib",                   url: "https://welib.org/search?q=%s" },

	{ id: "b8",  name: "AnyFlip",                 url: "https://anyflip.com/explore?q=%s" },
	{ id: "b9",  name: "Project Gutenberg",       url: "https://www.gutenberg.org/ebooks/search/?query=%s" },
    { id: "b10", name: "Scribd",                  url: "https://www.scribd.com/search?query=%s" },
	{ id: "b11", name: "OneMoreLibrary",          url: "https://onemorelibrary.com/index.php/en/search-results?se=1&search=%s" },
	{ id: "b12", name: "Chest of Books",          url: "https://chestofbooks.com/search.html?cx=000348145676127462126%3Anjhvjbiv4do&q=%s" },
	{ id: "b13", name: "OceanofPDF",              url: "https://oceanofpdf.com/?s=%s" },
    { id: "b14", name: "PDF Drive",               url: "https://www.pdfdrive.com/?s=%s" },

    { id: "b15", name: "Google Books",            url: "https://www.google.com/search?udm=36&q=%s" },
	{ id: "b16", name: "PublicLiterature.org",    url: "https://publicliterature.org/?s=%s" },
    { id: "b17", name: "RefSeek",                 url: "https://www.refseek.com/documents?q=%s" },
    { id: "b18", name: "Manuals Directory",       url: "https://www.manualsdir.com/search.html?q=%s" },
    { id: "b19", name: "Manualzz",                url: "https://manualzz.com/search/?q=%s" },
    { id: "b20", name: "Manua.ls",                url: "https://www.manua.ls/?q=%s" }
  ];

  const news = [
    { id: "n1",  name: "NPR",                    url: "https://www.npr.org/search?query=%s" },
	{ id: "n2",  name: "Yahoo GoodSearch News",  url: "https://news.search.yahoo.com/yhs/search?hspart=goodsearch&hsimp=yhs-goodsearch_yhs&p=%s" },
    { id: "n3",  name: "Ecosia News",            url: "https://www.ecosia.org/news?q=%s" },
    { id: "n4",  name: "Lilo News",              url: "https://search.lilo.org/?t=news&q=%s&drawer=settings&locale=en_US" },
    { id: "n5",  name: "OceanHero News",         url: "https://oceanhero.today/news?q=%s" },
    { id: "n6",  name: "Dogpile News",           url: "https://www.dogpile.com/serp?qc=news&q=%s" },
	{ id: "n7",  name: "NewsLibrary",            url: "https://www.newslibrary.com/newspapers?alltext=%s&sort=dsc" },

    { id: "n8",  name: "DuckDuckGo News",        url: "https://duckduckgo.com/?q=%s&ia=news&iar=news" },
	{ id: "n9",  name: "Google News",            url: "https://news.google.com/search?q=%s" },
    { id: "n10", name: "Associated Press",       url: "https://apnews.com/search?q=%s" },
    { id: "n11", name: "Reuters",                url: "https://www.reuters.com/site-search/?query=%s" },
    { id: "n12", name: "Flipboard",              url: "https://flipboard.com/topic/%s" }
  ];

  const shopping = [
    { id: "s1",  name: "Amazon",                 url: "https://www.amazon.com/s?k=%s" },
    { id: "s2",  name: "eBay",                   url: "https://www.ebay.com/sch/i.html?_nkw=%s" },
    { id: "s3",  name: "Slickdeals",             url: "https://slickdeals.net/search?q=%s" },
    { id: "s4",  name: "Etsy",                   url: "https://www.etsy.com/search?q=%s" },
    { id: "s5",  name: "Target",                 url: "https://www.target.com/s?searchTerm=%s" },
    { id: "s6",  name: "Walmart",                url: "https://www.walmart.com/search/?query=%s" },
    { id: "s7",  name: "Newegg",                 url: "https://www.newegg.com/p/pl?d=%s" },

    { id: "s8",  name: "YouCare Shopping",       url: "https://youcare.world/shopping?q=%s" },
    { id: "s9",  name: "Overstock",              url: "https://www.overstock.com/%s,/k,/results.html" },
    { id: "s10", name: "PriceRunner",            url: "https://www.pricerunner.com/results?q=%s" },
    { id: "s11", name: "OfferUp",                url: "https://offerup.com/search?q=%s" },
    { id: "s12", name: "Price.com",              url: "https://price.com/search?query=%s" },
    { id: "s13", name: "Shopping.com",           url: "https://www.shopping.com/search.html?keyword=%s" },
    { id: "s14", name: "Banggood",               url: "https://www.banggood.com/search/%s.html" },

    { id: "s15", name: "Become.com",             url: "https://www.become.com/%s/search" },
    { id: "s16", name: "Price Pirates",          url: "https://www.pricepirates.com/?q=%s" },
    { id: "s17", name: "Google Shopping",        url: "https://www.google.com/search?tbm=shop&q=%s" },
    { id: "s18", name: "Bing Shopping",          url: "https://www.bing.com/shop?q=%s" },
    { id: "s19", name: "Yahoo Shopping",         url: "https://shopping.yahoo.com/search/?p=%s" },
    { id: "s20", name: "Monoprice",              url: "https://www.monoprice.com/search/index?keyword=%s" },
    { id: "s21", name: "Harbor Freight Tools",   url: "https://www.harborfreight.com/search?q=%s" }
    
  ];

  const dictionaries = [
    { id: "d1", name: "OneLook Dict",         url: "https://onelook.com/?w=%s" },
    { id: "d2", name: "Wolfram|Alpha",        url: "https://www.wolframalpha.com/input/?i=%s" },
    { id: "d3", name: "Merriam-Webster",      url: "https://www.merriam-webster.com/dictionary/%s" },
    { id: "d4", name: "Wiktionary",           url: "https://en.wiktionary.org/wiki/%s" },
    { id: "d5", name: "Urban Dictionary",     url: "https://www.urbandictionary.com/define.php?term=%s" },
    { id: "d6", name: "Tradukka",             url: "https://tradukka.com/dictionary/en/%s" },
    { id: "d7", name: "WordHippo Dict",       url: "https://www.wordhippo.com/what-is/the-meaning-of-the-word/%s.html" }
  ];

  const thesauruses = [
    { id: "t1", name: "OneLook Thesaurus",     url: "https://www.onelook.com/thesaurus/?s=%s" },
    { id: "t2", name: "Reverse Dictionary",    url: "https://reversedictionary.org/wordsfor/%s" },
    { id: "t3", name: "Thesaurus.com",         url: "https://www.thesaurus.com/browse/%s" },
    { id: "t4", name: "Power Thesaurus",       url: "https://www.powerthesaurus.org/%s" },
    { id: "t5", name: "WordHippo Thesaurus",   url: "https://www.wordhippo.com/what-is/another-word-for/%s.html" }
  ];

  const translators = [
    { id: "tr1",  name: "Forvo Translator",         url: "https://forvo.com/search-translation/%s/en-es/" },
    { id: "tr2",  name: "Forvo Pronounciation",     url: "https://forvo.com/search/%s" },
    { id: "tr3",  name: "Google Translate",         url: "https://translate.google.com/?hl=en&tab=TT&sl=en&tl=es&text=%s&op=translate" },
    { id: "tr4",  name: "Bing Translate",           url: "https://www.bing.com/translator/?text=%s&to=es" },
    { id: "tr5",  name: "Yandex Translate",         url: "https://translate.yandex.com/?lang=en-es&text=%s" },
    { id: "tr6",  name: "HowToSay",                 url: "https://howtosay.org/en_es/%s" },
    { id: "tr7",  name: "MyMemory",                 url: "https://mymemory.translated.net/en/English/Spanish/%s" },

    { id: "tr8",  name: "InDifferentLanguages",     url: "https://www.indifferentlanguages.com/words/%s/spanish" },
    { id: "tr9",  name: "Sensagent",                url: "https://translation.sensagent.com/%s/en-es/" },
    { id: "tr10", name: "WordHippo Translator",     url: "https://www.wordhippo.com/what-is/the/spanish-word-for-%s.html" },
    { id: "tr11", name: "DeepL",                    url: "https://www.deepl.com/translator#en/es/%s" },
    { id: "tr12", name: "Translatero",              url: "https://www.translatero.com/english-spanish/translate/%s" },
    { id: "tr13", name: "Reverso",                  url: "https://dictionary.reverso.net/english-spanish/%s" },
    { id: "tr14", name: "Glosbe",                   url: "https://glosbe.com/en/es/%s" },

    { id: "tr15", name: "Glosbe 2",                 url: "https://translate.glosbe.com/en-es/%s" },
    { id: "tr16", name: "WordReference",            url: "https://www.wordreference.com/enes/%s" },
    { id: "tr17", name: "Leo",                      url: "https://dict.leo.org/spanish-english/%s" },
    { id: "tr18", name: "Cambridge Translator",     url: "https://dictionary.cambridge.org/dictionary/english-spanish/%s" },
    { id: "tr19", name: "Interglot",                url: "https://www.interglot.com/dictionary/en/es/search?q=%s" },
    { id: "tr20", name: "bab.la",                   url: "https://en.bab.la/dictionary/english-spanish/%s" },
    { id: "tr21", name: "dict.cc",                  url: "https://enes.dict.cc/?s=%s" },

    { id: "tr22", name: "DuckDuckGo Translation",   url: "https://duckduckgo.com/?q=translate+%s+to+spanish&ia=web" },
    { id: "tr23", name: "Startpage Translation",    url: "https://www.startpage.com/do/search?query=translate%20%22%s%22%20to%20spanish" },
    { id: "tr24", name: "Definitions.net",          url: "https://www.definitions.net/translate/%s/es" },
    { id: "tr25", name: "Translate.com",            url: "https://www.translate.com/machine-translation#en/es/%s" },
    { id: "tr26", name: "PONS",                     url: "https://en.pons.com/translate/english-spanish/%s" },
    { id: "tr27", name: "SpanishDictionary",        url: "https://www.spanishdict.com/translate/%s" }
  ];

  const photography = [
    { id: "p1",  name: "Everypixel",             url: "https://www.everypixel.com/search?q=%s&stocks_type=free" },
    { id: "p2",  name: "Openverse",              url: "https://openverse.org/search/image?q=%s&license=pdm%2Ccc0&category=photograph&extension=jpg%2Cpng" },
    { id: "p3",  name: "Flickr",                 url: "https://www.flickr.com/search/?text=%s&license=1%2C2%2C3%2C4%2C5%2C6%2C9%2C11%2C12%2C13%2C14%2C15%2C16&content_types=0" },
    { id: "p4",  name: "FreeImages",             url: "https://www.freeimages.com/search/%s?ai_gen=exclude&license=free" },
    { id: "p5",  name: "Pexels",                 url: "https://www.pexels.com/search/%s/" },
    { id: "p6",  name: "Pixabay",                url: "https://pixabay.com/photos/search/%s/?content_type=authentic" },
    { id: "p7",  name: "Unsplash",               url: "https://unsplash.com/s/photos/%s" },

    { id: "p8",  name: "Skitterphoto",           url: "https://skitterphoto.com/photos/search/%s" },
    { id: "p9",  name: "PikWizard",              url: "https://pikwizard.com/s/photo/%s" },
    { id: "p10", name: "Freepik",                url: "https://www.freepik.com/search?ai=excluded&format=search&last_filter=query&last_value=%s&query=eggs&selection=1&type=photo" },
    { id: "p11", name: "Vecteezy",               url: "https://www.vecteezy.com/free-photos/%s?license-free=true&is_ai_generated-not_ai_generated=true" },
    { id: "p12", name: "LibreShot",              url: "https://libreshot.com/?s=%s" },
    { id: "p13", name: "Rawpixel",               url: "https://www.rawpixel.com/search/%s?page=1&path=1522%7C%23notaigenerated%7C%24publicdomain%7Csearch_tl-34&sort=curated&tab=filters" },
    { id: "p14", name: "Public Domain Pictures", url: "https://www.publicdomainpictures.net/en/hledej.php?hleda=%s&origin=people" },

    { id: "p15", name: "FocaStock",              url: "https://www.focastock.com/search?q=%s&type=photos" },
    { id: "p16", name: "StockFreeImages",        url: "https://www.stockfreeimages.com/p1/%s.html" }
  ];

  const cooking = [
    { id: "c1", name: "AllRecipes",         url: "https://www.allrecipes.com/search?q=%s" },
    { id: "c2", name: "Food Network",       url: "https://www.foodnetwork.com/search/%s-" },
    { id: "c3", name: "Tasty",              url: "https://tasty.co/search?q=%s&sort=popular" },
    { id: "c4", name: "Simply Recipes",     url: "https://www.simplyrecipes.com/search?q=%s" },
    { id: "c5", name: "Taste of Home",      url: "https://www.tasteofhome.com/?s=%s" },
    { id: "c6", name: "Delish",             url: "https://www.delish.com/search/?q=%s" },
    { id: "c7", name: "Epicurious",         url: "https://www.epicurious.com/search?q=%s" }
  ];

  const socialmedia = [
    { id: "sm1",  name: "Reddit",              url: "https://www.reddit.com/search/?q=%s" },
    { id: "sm2",  name: "Bluesky",             url: "https://bsky.app/search?q=%s" },
    { id: "sm3",  name: "XCancel",             url: "https://xcancel.com/search?f=tweets&q=%s" },
    { id: "sm4",  name: "Twitter",             url: "https://x.com/search?f=tweets&q=%s" },
    { id: "sm5",  name: "Mastodon",            url: "https://mastodon.social/search?q=%25s&type=statuses" },
    { id: "sm6",  name: "Minds",               url: "https://www.minds.com/search?q=%s&f=top&t=all" },
    { id: "sm7",  name: "Substack",            url: "https://substack.com/search/%s" },

    { id: "sm8",  name: "Tumblr",              url: "https://www.tumblr.com/search/%s" },
    { id: "sm9",  name: "Facebook",            url: "https://www.facebook.com/search/top/?q=%s" },
    { id: "sm10", name: "Instagram",           url: "https://www.instagram.com/explore/search/keyword/?q=%s" },
    { id: "sm11", name: "Threads",             url: "https://www.threads.com/search?q=%s" },
    { id: "sm12", name: "TikTok",              url: "https://www.tiktok.com/search/video?q=%s" },
    { id: "sm13", name: "Lemon8",              url: "https://www.lemon8-app.com/discover/%s" },
    { id: "sm14", name: "Snapchat",            url: "https://www.snapchat.com/explore/%s" },

    { id: "sm15", name: "Twitch",              url: "https://www.twitch.tv/search?term=%s" },
    { id: "sm16", name: "Kick",                url: "https://kick.com/search?query=%s" },
    { id: "sm17", name: "Hive.Blog",           url: "https://hive.blog/search?q=%s" },
    { id: "sm18", name: "Lemmy.World",         url: "https://lemmy.world/search?q=%s&type=Posts&listingType=All&page=1&sort=TopAll&titleOnly=false" }
  ];

  const ai = [
    { id: "ai1",   name: "ChatGPT",        url: "https://chatgpt.com/?q=%s" },
    { id: "ai2",   name: "Grok",           url: "https://grok.com/?q=%s" },
    { id: "ai3",   name: "Brave AI",       url: "https://search.brave.com/ask?q=%s" },
    { id: "ai4",   name: "Perplexity",     url: "https://www.perplexity.ai/search?q=%s" },
    { id: "ai5",   name: "Yep AI",         url: "https://yep.com/chat/?q=%s" },
    { id: "ai6",   name: "Mistral",        url: "https://chat.mistral.ai/chat?q=%s" },
    { id: "ai7",   name: "HotBot",         url: "https://www.hotbot.com/web?q=%s" },

    { id: "ai8",   name: "Claude.ai",      url: "https://claude.ai/new?q=%s" },
    { id: "ai9",   name: "You.com",        url: "https://you.com/search?q=%s" },
    { id: "ai10",  name: "Felo",           url: "https://felo.ai/search?q=%s" },
    { id: "ai11",  name: "ThinkAny",       url: "https://thinkany.ai/search?q=%s" },
    { id: "ai12",  name: "Andi",           url: "https://andisearch.com/?q=%s" },
    { id: "ai13",  name: "Exa",            url: "https://exa.ai/search?q=%s" },
    { id: "ai14",  name: "Consensus",      url: "https://consensus.app/results/?q=%s" }
  ];

  const jobs = [
    { id: "j1",  name: "Indeed",            url: "https://www.indeed.com/jobs?q=%s" },
    { id: "j2",  name: "LinkedIn",          url: "https://www.linkedin.com/jobs/search/?keywords=%s" },
    { id: "j3",  name: "Monster",           url: "https://www.monster.com/jobs/search?q=%s" },
    { id: "j4",  name: "SimplyHired",       url: "https://www.simplyhired.com/search?q=%s" },
    { id: "j5",  name: "Bandana",           url: "https://bandana.com/search?q=%s" },
    { id: "j6",  name: "ZipRecruiter",      url: "https://www.ziprecruiter.com/jobs-search?search=%s" },
    { id: "j7",  name: "GlassDoor",         url: "https://www.glassdoor.com/Job/jobs.htm?sc.keyword=%s" },

    { id: "j8",  name: "Snagajob",          url: "https://www.snagajob.com/search?q=%s" },
    { id: "j9",  name: "Jobcase",           url: "https://www.jobcase.com/jobs/results?q=%s" },
    { id: "j10", name: "CareerBuilder",     url: "https://www.careerbuilder.com/job-listings/search?q=%s" },
    { id: "j11", name: "Idealist",          url: "https://www.idealist.org/en/jobs?q=%s" },
    { id: "j12", name: "Ladders",           url: "https://www.theladders.com/jobs/searchresults-jobs?keywords=%s" },
    { id: "j13", name: "Adzuna",            url: "https://www.adzuna.com/search?q=%s" },
    { id: "j14", name: "JobRapido",         url: "https://us.jobrapido.com/%s-jobs" },

    { id: "j15", name: "Nexxt",             url: "https://www.nexxt.com/jobs/search?soid=1&k=%s" },
    { id: "j16", name: "CareerJet",         url: "https://www.careerjet.com/jobs?s=%s" },
    { id: "j17", name: "Jobted",            url: "https://www.jobted.com/?j=%s" },
    { id: "j18", name: "Getwork",           url: "https://www.getwork.com/search?q=%s&w=" },
    { id: "j19", name: "Recruit.net",       url: "https://www.recruit.net/search.html?query=%s&location=" },
    { id: "j20", name: "Robert Half",       url: "https://www.roberthalf.com/us/en/jobs/all/%s" },
    { id: "j21", name: "Dice",              url: "https://www.dice.com/jobs?q=%s" },

    { id: "j22", name: "Google Careers",    url: "https://www.google.com/about/careers/applications/jobs/results?q=%s" },
    { id: "j23", name: "Lensa",             url: "https://lensa.com/talent/job-opportunities?job-title=%s" },
    { id: "j24", name: "Workable",          url: "https://jobs.workable.com/search?query=%s" },
    { id: "j25", name: "Jobot",             url: "https://jobot.com/search?q=%s" },
    { id: "j26", name: "ReadySetHire",      url: "https://jobs.readysethire.com/search/results?q=%s" },
    { id: "j27", name: "WeWorkRemotely",    url: "https://weworkremotely.com/remote-jobs/search?term=%s" }
  ];

  const misc = [
    { id: "m1",  name: "Chrome Web Store",             url: "https://chromewebstore.google.com/search/%s" },
    { id: "m2",  name: "Google Maps",                  url: "https://maps.google.com/?q=%s" },
    { id: "m3",  name: "DDG Maps",                     url: "https://duckduckgo.com/?t=ffcm&q=%s&ia=web&iaxm=maps" },
    { id: "m4",  name: "Internet Archive Search",      url: "https://archive.org/search.php?query=%s" },
    { id: "m5",  name: "Wayback Machine",              url: "https://web.archive.org/web/20260000000000*/%s" },
    { id: "m6",  name: "GoFundMe",                     url: "https://www.gofundme.com/s?q=%s" },
    { id: "m7",  name: "Kickstarter",                  url: "https://www.kickstarter.com/discover/advanced?term=%s" },

    { id: "m8",  name: "Yelp",                         url: "https://www.yelp.com/search?find_desc=%s" },
    { id: "m9",  name: "JustWatch",                    url: "https://www.justwatch.com/us/search?q=%s" },
    { id: "m10", name: "IMDb",                         url: "https://www.imdb.com/find/?q=%s" },
    { id: "m11", name: "The Movie Database (TMDb)",    url: "https://www.themoviedb.org/search/movie?query=%s" },
    { id: "m12", name: "Rotten Tomatoes",              url: "https://www.rottentomatoes.com/search?search=%s" },
    { id: "m13", name: "MetaCritic",                   url: "https://www.metacritic.com/search/%s" },
    { id: "m14", name: "Letterboxd",                   url: "https://letterboxd.com/search/%s" },

    { id: "m15", name: "TripAdvisor",                  url: "https://www.tripadvisor.com/Search?q=%s" },
    { id: "m16", name: "GitHub",                       url: "https://github.com/search?q=%s" },
    { id: "m17", name: "GreasyFork",                   url: "https://greasyfork.org/en/scripts?q=%s" },
    { id: "m18", name: "Shodan.io",                    url: "https://www.shodan.io/search?query=%s" },
    { id: "m19", name: "Stack Overflow",               url: "https://stackoverflow.com/search?q=%s" },
    { id: "m20", name: "Stack Exchange",               url: "https://stackexchange.com/search?q=%s" },
    { id: "m21", name: "Stack Exchange (Math)",        url: "https://math.stackexchange.com/search?q=%s" },

    { id: "m22", name: "Discogs",                      url: "https://www.discogs.com/search?q=%s" },
    { id: "m23", name: "Metal Archives",               url: "http://metal-archives.com/search?searchString=%s&type=band_name" },
    { id: "m24", name: "Spotify",                      url: "https://open.spotify.com/search/%s" },
    { id: "m25", name: "iHeartRadio",                  url: "https://www.iheart.com/search?q=%s&a=1" },
    { id: "m26", name: "SoundCloud",                   url: "https://soundcloud.com/search?q=%s" },
    { id: "m27", name: "Last.fm",                      url: "https://www.last.fm/search?q=%s" },
    { id: "m28", name: "Bandcamp",                     url: "https://bandcamp.com/search?q=%s" },

    { id: "m29", name: "RhymeZone",                    url: "https://www.rhymezone.com/r/rhyme.cgi?Word=%s" },
    { id: "m30", name: "Jisho",                        url: "https://jisho.org/search/%s" },
    { id: "m31", name: "DeviantArt",                   url: "https://www.deviantart.com/search?q=%s" },
    { id: "m32", name: "ArtStation",                   url: "https://www.artstation.com/search?sort_by=relevance&query=%s" }
  ];

  const page4 = [
    { id: "pf1",  name: "Brave",                 url: "https://search.brave.com/search?q=%s&offset=3" },
    { id: "pf2",  name: "Swisscows",             url: "https://swisscows.com/en/web?query=%s&offset=30" },
    { id: "pf3",  name: "Mojeek",                url: "https://www.mojeek.com/search?q=%s&s=31" },
    { id: "pf4",  name: "Norton Safe Search",    url: "https://nortonsafe.search.ask.com/web?page=4&q=%s" },
    { id: "pf5",  name: "Lukol",                 url: "https://www.lukol.com/s.php?q=%s#gsc.tab=0&gsc.q=lol&gsc.page=4" },
    { id: "pf6",  name: "Ask",                   url: "https://www.ask.com/web?page=4&q=%s" },
    { id: "pf7",  name: "Dogpile",               url: "https://www.dogpile.com/serp?q=%s&page=4" },

    { id: "pf8",  name: "Google",                url: "https://www.google.com/search?q=%s&start=30" },
    { id: "pf9",  name: "Yahoo Goodsearch",      url: "https://search.yahoo.com/yhs/search?hspart=goodsearch&hsimp=yhs-goodsearch_yhs&p=%s&b=22" },
    { id: "pf10", name: "Ecosia",                url: "https://www.ecosia.org/search?q=%s&p=3" },
    { id: "pf11", name: "GiveWater",             url: "https://search.givewater.com/serp?q=%s&page=4" },
    { id: "pf12", name: "Excite",                url: "https://results.excite.com/serp?q=%s&page=4" },
    { id: "pf13", name: "WebCrawler",            url: "https://www.webcrawler.com/serp?q=%s&page=4" },
    { id: "pf14", name: "Yandex",                url: "https://yandex.com/search?text=%s&p=3" },

    { id: "pf15", name: "Bing",                  url: "https://www.bing.com/search?q=%s&lq=0&first=40" }
  ];

  return {
    general: { name: "General", engines: general },
    images: { name: "Images", engines: images },
    videos: { name: "Videos", engines: videos },
    information: { name: "Information", engines: information },
    howto: { name: "HowTo", engines: howto },
    books: { name: "Books, PDFs, Manuals", engines: books },
    news: { name: "News", engines: news },
    shopping: { name: "Shopping", engines: shopping },
    dictionaries: { name: "Dictionaries", engines: dictionaries },
    thesauruses: { name: "Thesauruses", engines: thesauruses },
    translators: { name: "Translators", engines: translators },
    photography: { name: "Photography (Free)", engines: photography },
    cooking: { name: "Cooking", engines: cooking },
    socialmedia: { name: "Social Media & Blogs", engines: socialmedia },
    ai: { name: "AI Chatbots", engines: ai },
    jobs: { name: "Jobs", engines: jobs },
    misc: { name: "Media, Miscellaneous", engines: misc },
    page4: { name: "Skip to Page 4", engines: page4 }
  };
})();

const DEFAULT_ENABLED_IDS = new Set([
  "g1","g2","g3","g8","g9","g10",
  "im1","im2","im3","im8","im9","im10","im15","im16","im17",
  "v1","v2","v3","v4",
  "in1","in2","in3","in4","in5",
  "h1","h2","h3","h4","h5",
  "b1","b2","b3","b4","b5",
  "n1","n2","n3","n4","n5",
  "s1","s2","s3","s4",
  "d1","d2","d3","d4",
  "t1","t2","t3","t4","t5",
  "tr1","tr3","tr4","tr6","tr7",
  "p1","p2","p3","p4","p5",
  "c1","c2","c3","c4","c5","c6","c7",
  "sm1","sm2","sm3","sm5","sm6","sm7",
  "ai1","ai2","ai3","ai4","ai5",
  "j1","j2","j3","j4","j5",
  "pf1","pf2","pf3","pf9","pf10","pf11",
]);
