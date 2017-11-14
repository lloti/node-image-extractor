const hosts = require('./hosts');

module.exports = query => {
	for (const host of hosts) {
		if (typeof host.host === 'string' && host.host === query) return host;
		if (Array.isArray(host.host) && host.host.includes(query)) return host;
		if (host.host instanceof RegExp && host.host.test(query)) return host;
	}
};