# Page Types
Fictionwiki includes templates for characters, events, abilities, and locations. You can create any one of these pages from a template using the `hugo new` command.

## Characters
Character pages live in the `characters` folder. To make a character page, use the command:

```
hugo new characters/character-name/index.md
```

...where "character-name" is the name of your new character. (It will be converted to title case on the actual page for you.)

@TODO if I figure out how to swapsies the name with regex, add it as a tip

## Plot Pages
By default, pages about your actual stories and plot live under the **timeline** folder.

The major sections under Timeline are your **Stories**. These might be books, games, seasons, or whatever else depending on your medium.

The easiest way to create a new story is like this:

```hugo new --kind story timeline/story-name```

...where "story-name" is your title. This will set up a story with an example Subplot, Event, and Chapter.

Stories also have a `tabs` folder for storing notes. When you put a file in here, it'll show up on your main story page as an extra tab, making it a great way to separate different kinds of notes.

### Subplots & Events
**Subplots** are collections of causally related events. They're a good way to keep track of story logic even if your actual chapters omit details or show events out of order.

Subplot folders contain single pages called **Events**. Events describe characters doing a thing in a place, on a date, and at a certain time. Organizing them in Subplot folders keeps related events together in your folders and text editor.

#### Events In More than One Subplot
Depending on how you organize them, some Events in your story may be relevant to multiple subplots. If this is the case, keep the Event page in the folder of its primary Subplot -- the one you most want showing up in its page URL.

Then add the `subplots` field to its frontmatter with a list like this: `subplots: [subplot1, subplot2]`. This will ensure your event shows up in the timeline, event, and calendar views on all relevant subplot pages. @TODO decide on format for this ALSO GET IT WORKING IT'S BORKED

### Chapters
**Chapter** pages describe sets of narratively related events in your story. They're good places to put a storyboards, drabbles, or rough drafts. Because your Event pages live under Subplot sections, the events in a chapter won't be listed automatically. However, you can easily embed any Event pages you've made with the [event shortcode](/readme-shortcodes)! Use it to show important event details and summaries alongside your chapter synopsis.

If you add other pages under a Chapter folder, it will show up as a tab on the main chapter page. This is a good way to organize your chapter notes!

#### Renaming Chapters
By default the sidebar menus will refer to your story sections as "Chapters" by default, but you can easily change their name through the the`sectionName` field on your **Story** page. The value should be a [translation key](/readme-i18n) found in your language file, such as "episode," "book," "part," "section," or "season."


## Making Your Own Page Templates
Templates are set up in the `project-name/themes/fictionwiki/archetypes` folder. However, you'll want to use your site's root `project-name/archetypes` folder when making changes.

To edit a built-in Fictionwiki template, copy its `.md` file to your wiki's `archetypes` folder and then edit the copy.

Likewise, to create your own templates, make a new `.md` file in this same folder. When you're done, you can use it with a command like this:

```
hugo new template-name/page-name/index.md
```

`template-name/page-name.md` also works, but it's better to keep your pages in folders so you can easily add images and other media.

### Changing Section Names
If you want to rename the major sections (e.g. changing "timeline" to "plot"), you must copy over and rename the archetype files to match your new name so Hugo can select the right template. Remember, these names are case-sensitive.

Note: Unless you know what you're doing, **do not rename** any files called `_index.md` or `index.md` or change the underscore, as this will change how the page functions in Hugo. The easiest way to change a page's URL in the browser, if that's what you're looking to do, is by setting the `slug` property in the page's frontmatter. (See also: [URL management in Hugo](https://gohugo.io/content-management/urls/))