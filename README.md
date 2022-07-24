# Fictionwiki v0.0.0 &mdash; Worldbuilding Journal Tool

This is **Fictionwiki**, a starter kit for the free static web generator Hugo loaded with tools to boost your creative writing and game design notes.

Fictionwiki was born because I needed a way to link 100k words of notes together and keep track of events on a fictional calendar system. If you have a lot of Markdown-based notes you want to integrate in one place with tables, calendars, or moodboards, it may be just what you're looking for!

## Features
- **Organized** - Keep all kinds of notes in one place
- **Fast** - Yeah I see you with your lagging 400-page Google Doc
- **Free** - No monthly payment, no sign-up
- **Tools** - Enhance your notes with:
    - Syntax-highlighting (including for Ren'Py! YEAH!)
    - Flowcharts/diagrams from simple markup
    - Embedded media
    - Calendar/timeline views
    - Site search
    - Broken link/stub tracker
    - Word count goals
- **Track edits with git** &mdash; Your notes and wiki are already file- and folder-based, making Git integration seamless.
- **Host your wiki online** &mdash; While it's meant to be a personal multimedia notebook, you can export your wiki with a single command to host on Neocities or share with friends.

## Anti-Features
- **Challenging** &mdash; You will probably have to learn some new computer things like using a command line. Hugo-based errors are sometimes tricky to troubleshoot.
- **No <abbr title="What You See Is What You Get (editor)">WYSIWYG</abbr>** &mdash; You may need to learn some CSS/HTML if you're used to writing notes in a word-processor that has a toolbar for fancy colors, sizes, and fonts. 
- **Not Mediawiki** &mdash; While this does essentially create a wiki, if you publish this notebook online or share with friends, people can't "sign up" and edit it. (However, you can always replicate edit history, talk pages, edit locking, and other collaboration tools using git.)

## How does it work?
Fictionwiki is built as a theme for [Hugo](https://gohugo.io/). Hugo is a free and very fast website generator.

You're probably thinking, "a website? Ew! I don't want to put all my notes on the Internet.com" But wait! Did you know you can build and run websites *locally*, offline, solely to be viewed on your computer? It's true!

Though you *can* export and put it online if you like, Fictionwiki basically takes a folder of specially-formatted notes and turns them into lovely, clickable, HTML files you view in your browser &mdash; offline.

## Installation
1. Download and install Hugo.
1. Open Command Prompt/Terminal.
    - Run `hugo new site project-name` to create a project folder to hold fictionwiki and your content.
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