const http = require('http');
const https = require('https');
const { parse } = require('url');

module.exports = (url, headers) => {
	const fetch = url.startsWith('https') ? https.get : http.get;
	const { hostname, path, port } = parse(url, true);
	return new Promise((resolve, reject) => {
		fetch({ hostname, path, port, headers }, res => {
			let data = '';
			res.on('data', chunk => data += chunk);
			res.once('end', () => {
				if (res.statusCode !== 200) reject(new Error(res.statusMessage));
				resolve(data);
			});
		});
	});
};