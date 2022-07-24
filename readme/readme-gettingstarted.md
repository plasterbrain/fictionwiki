# Getting Started
Your new world-building notebook runs on three ingredients:
1. A folder of content (AKA your notes)
1. A collection of scripts and templates to show interactive content (that's Fictionwiki)
1. An engine to plug your notes into the templates (that's Hugo)

Hopefully Hugo is installed on your computer already and you've followed the installation instructions to make a project folder. I'll use the term `project-name` to refer to your main world-building folder.

Right now it probably looks something like this:

- 📁 archetypes
- 📁 assets
- **📁 content** &larr; Your notes live here
- 📁 layouts
- 📁 static
- 📁 themes
    - 📁 fictionwiki
        - 📁 **exampleSite**
- **config.toml** &larr; Important site settings

I've bolded the most important ones for now, including the folder called `exampleSite`. You can copy the contents of this folder directly to the root `project-name` folder and it'll give you some examples of how various files should be set up to get the most out of Fictionwiki's features.

Let's start in the `content` folder.

## Creating Wiki Content
Pages and notes on your wiki live in `content` and are written as *Markdown* files (ending in "`.md`").

What is Markdown? Markdown is a very simple and easy to read text-formatting language. You can use simple grammar to `[create links](http://zombo.com/)`, `***style text***`, or `# Add Headings`. If you use Reddit or Discord, you might be familiar with some of it!

Are your notes sitting in Word or Google Docs? Don't worry! There are plenty of online tools to [convert doc or docx to Markdown](https://word2md.com/).

### Note Titles, Tags, and Metadata
In Hugo, content/note files also contain settings at the top called *front matter*. Front matter can be written in YAML or TOML, which are two platform-agnostic languages used for configuration data. They're separated by three dashes or three plus signs, respectively.

A note file with YAML frontmatter will look something like this:

```
---
title: Penguin Blade
description: A legendary blade said to bring swift, icy death.
categories: [Swords, Very Strong, Weapons Wielded by Birds]
---
The **penguin blade** is a legendary weapon...
```

Read more: [Hugo Front Matter](https://gohugo.io/content-management/front-matter/)

### How to Organize Content
Fictionwiki has layouts for a few different categories out of the box, such as character bios or plot events. In general, the kind of layout applied to a page is determined by the section it's in.

- _index.md &larr; Home
- 📁 characters
    - _index.md &larr; Character List
    - 📁 [character-1]
        - index.md &larr; Character 1
        - 🏞 [character1.jpg]
    - [character-2].md &larr; Character 2

As you can see, single pages can be named files or named folders with "index.md" inside. (I recommend using folders so you can keep a page with all its media.)

There are two kinds of "index" files, one with an underscore and one without.

## Setting Up Fictionwiki
Fictionwiki works without internet connection, but you'll still need a modern browser. Make sure Javascript is enabled or else page tabs, calendars, highlighting, and diagrams will not function.

## Working with Hugo
Let's go over the default settings of the starter configuration file.

By default, the site will ignore any page files that end in "-deleted.md". These files will not show up on your wiki or be included in page or word counts. You can configure the ignored files setting in this line:

```toml
ignoreFiles = ['\-deleted.md$']
```