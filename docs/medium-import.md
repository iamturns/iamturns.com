# Medium Import

Chrome DevTools > Sources > Snippets

```javascript
function removeElements(selector) {
	[...document.querySelectorAll(selector)].map(e => e.remove());
}

// Remove some elements completely
removeElements(".section-inner div");
removeElements(".section-inner figcaption");
removeElements(".section-inner pre br");

// Remove mostattributes from children
[...document.querySelectorAll(".section-inner *")].map(e => {
	[...e.attributes].filter(attr => attr.name !== "href").map(attr => e.removeAttribute(attr.name));
});

// Fix a href
[...document.querySelectorAll(".section-inner a")].map(e => {
	e.href = decodeURIComponent(e.href.replace("https://medium.com/r/?url=", ""));
});

const result = document
	.querySelector(".section-inner")
	.innerHTML // Not sure why, but sometimes Medium encodes spaces randomly
	.replace(/&nbsp;/g, " ")
	// JSX friendly <br /> tags
	.replace(/<br>/g, "<br />")
	// Change <a> to <Link>
	.replace(/<a href=/g, "<Link to=")
	.replace(/<\/a>/g, "</Link>")
	// Change <pre> to <CodeBlock>
	.replace(/<pre>/g, '<CodeBlock language="bash" code={`')
	.replace(/<\/pre>/g, "`} />")
	// Encode <code> snippets
	.replace(/<code>/g, "<code>{`")
	.replace(/<\/code>/g, "`}</code>")
	// Change <figure> to <ImgbBlock> placeholder
	.replace(/<figure>/g, '{/* <ImgBlock image="" alt="" /> */}')
	.replace(/<\/figure>/g, "")
	// Change headings
	.replace(/<h3>/g, "<h2>")
	.replace(/<\/h3>/g, "</h2>")
	.replace(/<h4>/g, "<h3>")
	.replace(/<\/h4>/g, "</h3>")
	// Fix <strong> within headers
	.replace(/<h2><strong>/g, "<h2>")
	.replace(/<\/strong><\/h2>/g, "</h2>")
	.replace(/<h3><strong>/g, "<h3>")
	.replace(/<\/strong><\/h3>/g, "</h3>")
	// Add new lines, instead of one huge string.
	// Make it easier to find syntax errors.
	// Run last
	.replace(/<\//g, "\n</");

copy(result);
console.log(result);
console.log("☝️ COPIED TO CLIPBOARD");
```
