# pisstools.js

A way to piss off other developers by making it exceptionally annoying to open developer tools on your website.

### TODO

- [ ] More detection methods? Deal with false positives?
  - Find out a clever way other than common to bypass anti scripts
- [ ] Only spam network tab on open
- [ ] Obfuscate CSS?
- [ ] Fuck around and shuffle HTML?
- [ ] Configuration would be nice o7

## Usage

As npm package,

```bash
npm install pisstools
```

```javascript
import "pisstools"; // that's all!
```

CDN somewhere,

```html
<script src="cdn.../pisstools.min.js"></script>
```

## Local

Latest version of Node.js is recommended.

```bash
npm install
npm build
npx serve .
```

Navigate to the `test/` directory.
