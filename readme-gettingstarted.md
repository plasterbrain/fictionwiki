# Getting Started

Fictionwiki works without internet connection, but you'll still need a modern browser. Make sure Javascript is enabled or else page tabs, calendars, highlighting, and diagrams will not function.

If you want to edit the site styles beyond basic color tweaks, you'll need Hugo extended.

The nice thing about Hugo is it runs its own local server without any configuration.

## Creating Wiki Content
All the pages on your site will live inside the `projectname/content` folder. Different kinds of pages you can make out of the box include character bios, plot events, stories with note tabs, magic powers/skills, and locations, but how do you start?

Basically, every kind of page should have a section folder.
- _index.md &larr; Home
- 📁 characters
    - _index.md &larr; Character List
    - 📁 [character-1]
        - index.md &larr; Character 1
        - 🏞 [character1.jpg] &larr; any page media
        - [...]
    - [character-2].md &larr; Character 2

As you can see, single pages can be named files or named folders with "index.md" inside. (I recommend using folders so you can keep a page with all its media.)

there are two kinds of "index" files, one with an underscore and one without.

Inside the Fictionwiki directory is a folder called `exampleSite`. It shows how your content should be organized to get the most use out of Fictionwiki's features. You can safely move the contents of this folder into your main project folder and edit the files to get started.