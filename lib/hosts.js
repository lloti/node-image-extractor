module.exports = [
	{
		host: 'imgur.com',
		regex: /^([A-Z0-9]{7})$/i,
		source: `https://i.imgur.com/$1.png`
	},
	{
		host: 'snag.gy',
		regex: /^([A-Za-z0-9]{6}\.[a-z]+)$/i,
		source: `https://i.snag.gy/$1`
	},
	{
		host: 'pasteboard.co',
		regex: /^([A-Z0-9]{6})/i,
		source: 'https://cdn.pbrd.co/images/$1'
	},
	{
		host: 'img42.com',
		regex: /^([-A-Z0-9]{5})$/i,
		source: 'https://img42.com/$1+'
	},
	{
		host: 'gyazo.com',
		selector: 'meta[property="og:image"]',
		attribute: 'content'
	},
	{
		host: ['prnt.sc', 'prntscr.com'],
		selector: '.image__pic'
	},
	{
		host: /([A-Za-z0-9-]+\.)?deviantart\.com/,
		selector: '.dev-view-deviation > img.dev-content-full'
	}
];