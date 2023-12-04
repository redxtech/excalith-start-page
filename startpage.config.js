const defaultConfig = {
	username: "gabe",
	theme: {
		backgroundColor: "#1e212b",
		windowColor: "#282a36",
		glowColor: "#bd93f945",
		white: "#bfbfbf",
		gray: "#97989d",
		black: "#000000",
		red: "#ff5555",
		green: "#50fa7b",
		yellow: "#f1fa8c",
		blue: "#bd93f9",
		magenta: "#ff79c6",
		cyan: "#8be9fd",
		violet: "#bd93f9",
		orange: "#ffb86c"
	},
	wallpaper: {
		url: "https://i.imgur.com/OnxcMEM.jpg",
		easing: "ease-in-out",
		fadeIn: true,
		blur: true
	},
	terminal: {
		fixedHeight: true,
		windowGlow: true,
		textGlow: false
	},
	prompt: {
		ctrlC: true,
		placeholder: "query...",
		placeholderColor: "gray",
		userColor: "green",
		atColor: "gray",
		hostColor: "magenta",
		promptColor: "magenta",
		promptSymbol: "❯",
		caretColor: "green",
		selectionBg: "yellow",
		selectionFg: "black"
	},
	fetch: {
		timeFormat: "HH:mm",
		dateFormat: "DD/MM/YYYY",
		titleColor: "yellow",
		image: "icon.svg",
		data: [
			"Time: {time}",
			"Date: {date}",
			"{seperator}",
			"OS: {osName} {osVersion}",
			"Browser: {browser} {browserVersion}",
			"Engine: {engineName}",
			"{seperator}",
			"{colors}"
		]
	},
	urlLaunch: {
		target: "_self",
		defaultColor: "white",
		hoverColor: "violet"
	},
	search: {
		default: "https://kagi.com/search?q=",
		target: "_self",
		shortcutRegex: "([A-Za-z0-9]+) (.*)",
		shortcuts: [
			{
				alias: "k",
				name: "Kagi Search",
				url: "https://kagi.com/search?q={}"
			},
			{
				alias: "g",
				name: "Google Search",
				url: "https://google.com/search?q={}"
			},
			{
				alias: "d",
				name: "DuckDuckGo Search",
				url: "https://duckduckgo.com/?q={}"
			},
			{
				alias: "b",
				name: "Brave Search",
				url: "https://search.brave.com/search?q={}"
			},
			{
				alias: "gh",
				name: "Github Search",
				url: "https://github.com/search?q={}"
			},
			{
				alias: "s",
				name: "Stack Overflow Search",
				url: "https://stackoverflow.com/search?q={}"
			},
			{
				alias: "r",
				name: "Subreddit Search",
				url: "https://reddit.com/r/{}"
			},
			{
				alias: "w",
				name: "Wikipedia Search",
				url: "https://en.wikipedia.org/wiki/{}"
			}
		]
	},
	sections: {
		list: [
			{
				title: "general",
				color: "green",
				align: "left",
				links: [
					{
						name: "inbox",
						url: "https://betaapp.fastmail.com/mail/Inbox?domain=sent.at",
						icon: "mdi:email-outline"
					},
					{
						name: "youtube",
						url: "https://www.youtube.com",
						icon: "mdi:youtube"
					},
					{
						name: "chatgpt",
						url: "https://chat.openai.com/?model=gpt-4",
						icon: "simple-icons:openai"
					},
					{
						name: "photos",
						url: "https://photos.google.com/",
						icon: "mdi:google-lens"
					}
				]
			},
			{
				title: "dev",
				color: "magenta",
				align: "left",
				links: [
					{
						name: "github",
						url: "https://github.com",
						icon: "mdi:github"
					},
					{
						name: "dev.to",
						url: "https://dev.to",
						icon: "material-symbols:logo-dev"
					},
					{
						name: "stack overflow",
						url: "https://stackoverflow.com/",
						icon: "mdi:stack-overflow"
					},
					{
						name: "hoppscotch",
						url: "https://hoppscotch.io/",
						icon: "material-symbols:web-traffic-rounded"
					}
				]
			},
			{
				title: "social",
				color: "violet",
				align: "left",
				links: [
					{
						name: "reddit",
						url: "https://dd.reddit.com",
						icon: "mdi:reddit"
					},
					{
						name: "hackernews",
						url: "https://news.ycombinator.com/news",
						icon: "fa-brands:hacker-news"
					},
					{
						name: "twitter",
						url: "https://twitter.com",
						icon: "mdi:twitter"
					},
					{
						name: "mastodon",
						url: "https://tilde.zone/",
						icon: "ri:mastodon-fill"
					}
				]
			},
			{
				title: "stats",
				color: "cyan",
				align: "left",
				links: [
					{
						name: "last.fm",
						url: "https://last.fm",
						icon: "cib:last-fm"
					},
					{
						name: "trakt",
						url: "https://trakt.tv",
						icon: "simple-icons:trakt"
					},
					{
						name: "stats.fm",
						url: "https://stats.fm/",
						icon: "mdi:spotify"
					}
				]
			},
			{
				title: "nas",
				color: "blue",
				align: "left",
				links: [
					{
						name: "dashboard",
						url: "http://10.0.0.191:4000",
						icon: "material-symbols:dashboard-rounded"
					},
					{
						name: "sonarr",
						url: "http://10.0.0.191:8989",
						icon: "material-symbols:live-tv-outline"
					},
					{
						name: "radarr",
						url: "http://10.0.0.191:7878",
						icon: "material-symbols:movie-outline"
					},
					{
						name: "overseerr",
						url: "http://10.0.0.191:5055",
						icon: "material-symbols:person"
					}
				]
			},
			{
				title: "misc",
				color: "yellow",
				align: "left",
				links: [
					{
						name: "super.fish",
						url: "https://super.fish",
						icon: "mdi:fish"
					},
					{
						name: "steam",
						url: "https://store.steampowered.com/",
						icon: "mdi:steam"
					},
					{
						name: "monkeytype",
						url: "https://monkeytype.com/",
						icon: "mdi:keyboard"
					},
					{
						name: "speedtest",
						url: "https://speedtest.net",
						icon: "material-symbols:speed-outline"
					}
				]
			}
		]
	}
}

export default defaultConfig
