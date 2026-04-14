# Multi-Search Pro
It is recommended that someone doing an online search refers to more than one source. Thing is, nobody wants to run the same search process a second/third/fourth time. I wanted the ability to use every search engine simultaneously. Same search terms, multiple websites. I tried to find a browser extension that could do it, but they were all severely limited to the most popular websites (Google, Bing, Yahoo), and none of them were able to open all of the websites simultaneously. I got really close to what I was looking for with an extension called SearchSK, which had bookmark customization that made me realize how much further a tool like this could be taken.

Looking for the best prices? Check every shopping website all at the same time. Looking for the perfect photograph? Check all of the photography websites all at the same time. Trying to find the best recipe for a meal? Check every recipe website all at the same time.

This concept went beyond what I was even searching for. But, even with SearchSK, the most important detail that I could never seem to find in these tools was the "all at the same time" aspect. So I finally decided to make what I’ve always imagined, and kept working at it until it was exactly what I always wanted.

300+ websites, sorted into “groups” that categorize the scope of research you're looking in to (search engines, images, news, shopping, etc). Pretty much any website that translates your search terms somewhere within the URL, can be added to Multi-Search Pro.

Type what you want to search in the input field labeled “Type what you want to search here”. The “Launch” button will open a tab for every selected/checkboxed website within every selected/checkboxed group, and send your search terms to every single one of them. 

Use the “Expand” buttons for each group category to see what websites are available, and check their individual checkboxes to include them in the overall search. A handful websites are checked by default, and only the “General” search engine group is checked by default, to prevent a swarm of websites from overwhelming your browser.

While the goal was indeed to make such a massive search possible, I’ve realized that this may not be the ideal way to utilize this tool, so I’ve also included “Go” buttons for each category, that work similarly to the Launch button, but only function within their respective groups. This is my preferred method. You can also click a single website’s thumbnail in order to open a tab to search just that website.

The “Keep popup open” option prevents the extension from closing upon running any search. “Show unchecked” can be unchecked in order to only show the selected websites in the groups. “Throttle” helps prevent tabs from opening too fast, and “Max tabs” limits the number of websites that will open from running a search.

The extension default provides a compilation of websites that I have personally discovered, relating to numerous different paths to researching online. In regards to general search engines, I've chosen to prioritize websites that (claim to) respect privacy. (CAUTION: not every website I've included is recommended for regular use, some are well known to be overwhelmed with harmful propaganda). I’ve also given priority to websites that, while tending to simply scrape results straight from other popular search engines, propose to support charities and environmental causes should you choose to use their engine instead. Because of this, some of the more common/popular services tend to appear at the end of the list. If you want those websites at the top of the list, you have the ability to rearrange the order.

Click the “Settings” button located under the Launch button. You’ll be taken to a page that lists all of the websites and groups, allowing you to rewrite the labels, URLs, and add in new ones. To rearrange, drag the ☰ icon on the left of each website icon. You can also rearrange categories on the right-hand side of the page the same way. Rearrangements are implemented immediately, no need to save.

After arranging websites/groups and checking/unchecking boxes, you have the ability to save your list using the “Import/Export” feature. Click the Export button and save the compiled .json file to your computer. If you ever have to uninstall/reinstall Multi-Search Pro, click the Import button and locate the .json file to get your custom list back.

Not just any website will work simply because they have a search option. In order for a website to function on Multi-Search Pro, the words that you input into a search must translate somewhere within the URL of the website, for example: “search.brave.com/search?q=groceries”.
In order to customize Multi-Search Pro to include a new website:

• Determine that your search terms are visible within the URL 

• Replace only the search terms in the URL with %s, leave everything else as is 

• Copy the URL 

• Determine the group that the website belongs in (create a new one at the top) 

• Scroll to the bottom of the group, find the input fields labeled “Engine name” and “URL with %s”

• Name the website in the “Engine name” field, then paste the URL in the “URL with %s” field

• Click “Add” 

• Bonus: a lot of websites that give you the ability to specify your search perameters (ie. distance, location, hide AI) will place those specifications within the URL as well, so if you always want a search you send to a website to fit those perameters, first set those perameters for the search on the website, check the URL to see if it applied, and then use that URL with your search term replaced with %s and apply that URL in Settings. (sometimes the URL looks like a scrambled mess of random character, test it to see if that scrambled URL will load the search again with your perameters applied)

You may find that some websites complicate this process by unnecessarily re-writing URLs to keep them “clean”. Startpage is a glaring example, but thankfully there is a hidden way to utilize the %s process with Startpage to get it to work in Multi-Search Pro. Unfortunately, there are websites where, regardless of if the function is present, there may be a paywall or login requirement in order to run a search, which causes the %s process to rupture, and you will have to either be logged in/signed up in order to utilize it within Multi-Search Pro. I’ve skipped on these websites for the most part, but if you regularly utilize a website like this, I encourage you to add it in, just remember that you need to already be logged in to those websites on your browser in order for the searches to work.

Website icons load automatically, using a library of .ico files provided by DuckDuckGo. If DDG can’t find an icon for a website, it will try Google's icons instead. If Google fails, it will load MSP's icon.

You may notice a category called “Skip to Page 4”. One thing I have learned about search engines is that the websites with the most traffic (or purchasing power) tend to show up at the top of the list regardless of their relevance to the search, and going further down the long list will bring up the more obscure results that may or may not bring you the information you actually need. So with every search engine that separates searches into pages, I’ve created the ability to skip directly to page 4 in case you are looking to get past rigged results.

The extension package is available for any Chromium-based browser that allows the loading of packed extension files. Because Mozilla Firefox requires add-ons to be verified before they are allowed to be imported, Multi-Search Pro’s XPI file only works on Mozilla-based alternatives that do not have this requirement, like LibreWolf (which in my opinion is a much better browser).

If something isn’t working correctly, or you have recommendations to help improve Multi-Search Pro, please let me know with this feedback form, https://forms.gle/XdqeCRZMmc3BqsnX9 . I can’t promise to attend to every request, but consider me open to all feedback regardless. If you want to leave a tip as a thank you, my Ko-fi is https://ko-fi.com/amplyfyre , you certainly do not have to but it would be heavily appreciated.
