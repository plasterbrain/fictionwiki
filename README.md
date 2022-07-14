# Fictionwiki v0.0.0 &mdash; Worldbuilding Journal Tool

This is **Fictionwiki**, a starter kit for the free static web generator Hugo, loaded with tools to keep track of your fictional universe!

If you already use a markdown- or txt-based writing program but find yourself in need of more complex tools (or just struggling to organize 80k+ words of worldbuilding notes) Fictionwiki is for you!

## Features
- **Everything in one place, but better** &mdash;
No more switching between three different programs for different kinds of documents. Turn your existing notes into interactive timelines. Link a character page to other characters, locations, events, and magic abilities. Embed tables and photo-galleries.
- **It's like so fast you guys** &mdash; Yeah I see you with your lagging 400-page Google Doc.
- **Game design tools** &mdash; Syntax-highlighting and charts via Mermaid.js make plotting out game concepts a snap.
- **Totally private and offline** &mdash; Though you view the wiki using your browser, everything is stored on your computer. No monthly payment, no account sign-up required to download, and nothing is shared unless you export and send your wiki to friends.
- **Track edits with git** &mdash; Your notes and wiki are already file- and folder-based, making Git integration seamless.
- **Host your wiki online** &mdash; While it's meant to be a personal multimedia notebook, you can export your wiki with a single command to host on Neocities or share with friends.

## Anti-Features
- **Challenging** &mdash; You will probably have to learn some new computer things like using a command line. Hugo-based errors are sometimes tricky to troubleshoot.
- **No <abbr title="What You See Is What You Get (editor)">WYSIWYG</abbr>** &mdash; You may need to learn some CSS/HTML if you're used to writing notes in a word-processor that has a toolbar for fancy colors, sizes, and fonts. 
- **Not Mediawiki** &mdash; While this does essentially create a wiki, if you publish this notebook online or share with friends, people can't "sign up" and edit it. (However, you can always replicate edit history, talk pages, edit locking, and other collaboration tools using git.)

## How it works
Fictionwiki is a theme for Hugo. Hugo is a free website generator that runs on your computer. To make a site with Hugo, you need a collection of HTML-based templates (that's Fictionwiki) and a folder of content (that's your notes). Then you just run the Hugo server command in your site folder.

Content files are a combination of **Markdown** and **TOML/YAML**.
- Markdown is a very simple text formatting language that a lot of sites and programs use. If you've ever `*styled* ~~text~~` in Discord or posted `[a link](http://zombo.com/)` on Reddit, you've used Markdown!
- TOML/YAML are basically languages for setting options. They're used at the top of your pages for things like `title: My Cool Page`.

### Basic installation instructions
1. Download this starter kit and install Hugo.
1. Open Command Prompt/Terminal.
    - Run `hugo new site yourcoolwiki` to create a project folder to hold fictionwiki and your content.
    - Run `hugo server` to start Hugo.
1. Visit `localhost:1313` in your browser.
1. Start creating content files. The wiki will update live in your browser every time you save.

## Resources
- Markdown docs
- [Rules for writing TOML](https://toml.io/en/v1.0.0#array-of-tables)
- [Making flowcharts in Mermaid](https://mermaid-js.github.io/mermaid/#/flowchart)
- Hugo docs
- Bulma docs
- https://code.visualstudio.com/docs/editor/command-line#_opening-vs-code-with-urls

## Credits/License
Fictionwiki is powered by Bulma, Prism, Mermaid, clipboard.js, Hugo, and playing League of Legends every three hours.

It's available under the MIT license. No public attribution is required even if you decide to host your wiki online -- but feel free to give a shoutout to pretty girl plasterbrain when your fantasy novel becomes a bestseller (or your homespun tabletop Twitch channel hits 30 views... you do you).