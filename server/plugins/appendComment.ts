export default defineNitroPlugin((nitroApp) => {
	nitroApp.hooks.hook('render:html', (html, { event }) => {
		html.head.unshift(`\n<!-- Just inject some random HTML comment from server-side -->\n`);
	});
});
