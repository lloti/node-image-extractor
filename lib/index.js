const { name, version } = require('../package.json');
const { load } = require('cheerio');
const { parse } = require('url');
const fetch = require('./fetch');
const find = require('./find');

/**
 * Get image source URL
 * @param {string} url Link
 * @returns {Promise<string>} Source URL
 */

module.exports = async url => {
  const { host, pathname } = parse(url);
  const path = pathname.replace(/^\//, '');
	const method = find(host);
	if (!method) return;
  if (method.selector || method.selectors) {
    const html = await fetch(url, { 'User-Agent': `${name}/${version}` });
    const $ = load(html);
    if (method.selector) return $(method.selector).attr(method.attribute || 'src');
    for (const selector of method.selectors) {
      const src = $(selector).attr(method.attribute || 'src');
      if (src) return src;
    }
  } else {
    return path.replace(method.regex, method.source);
  }
};