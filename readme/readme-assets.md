@TODO
- All content is hidden by default. This causes a flash when you click a new tab.
- ESLint away Mermaid's logging pl0x :)
- Allow non-JS version that just slaps tab content at the end of the page?
- Unsplash should just be a few pictures I think so we only have to do one request

## Customzing
To customize third-party libraries included in Fictionwiki, you will need to download and install what's called a package manager.

I'm using pnpm, but if you're new to all this you might want to try npm first since it's more widely supported. Once you've downloaded and installed (p)npm and it's on your path, open a commandline window inside the `project-name/themes/fictionwiki` folder and run:

```
npm install
```

### Bulma
<!-- Compiling Bulma with Hugo is slow n shit
	{{- with resources.Get "scss/bulma.scss" -}}
	{{ $style := . | resources.ExecuteAsTemplate "bulma.scss" $site | resources.ToCSS (dict "outputStyle" $outputStyle "includePaths" (slice "themes/fictionwiki/node_modules")) }}
	<link rel="stylesheet" href="{{ $style.Permalink }}">
{{- end -}}-->

### PrismJS
Prism supports tons of languages, plug-ins, and themes. Fictionwiki uses the Okaidia theme and includes support for Ren'Py, Markdown, and GameMaker language by default (see [configured Prism download link](https://prismjs.com/download.html#themes=prism-okaidia&languages=markup+clike+javascript+gml+javadoclike+jsdoc+markdown+properties+renpy+toml+typescript&plugins=highlight-keywords)).

If you want to [configure and download Prism](https://prismjs.com/download.html) using their website, you will have to manually check which options you want, download the files, and replace the theme's outdated `assets/js/prism.js` and `assets/css/prism.css`.

However, Fictionwiki also supports building a customized version using ESBuild and the PrismJS Babel plug-in. This allows you to update Prism just by specifying a list of plug-ins/languages and running a command. To do so, install the dependencies as described above (using "npm install"), and then edit `fictionwiki/babel.config.json` with the plug-ins and languages you want.

See the [babel-plugin-prismjs page](https://github.com/mAAdhaTTah/babel-plugin-prismjs#configuring-the-plugin) for an example.

#### Adding Outside Themes
Do not install the CSS. Check out [these additional PrismJS themes](https://github.com/PrismJS/prism-themes#available-themes).