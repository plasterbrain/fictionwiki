# Editing Pages
Pages on your wiki are defined using Markdown files with two parts.

## Page Settings
At the top of every page file is its *frontmatter*, or page settings. You can see what these look like in the `.md` files in the `exampleSite` folder.

Different page types in Fictionwiki have specific fields, but all pages use the same basic ones:

- `title`: Title of the page.
- `linkTitle`: Title shown when this page appears in menus or lists on your wiki. You might want to use it if your actual page title is really long.
- `slug`: The last part of the page's URL, e.g. "jim" in "localhost:1313/characters/jim". If not set, Hugo will use your title with hyphens instead of spaces. 
- `aliases`: List of other slugs/URLs that should point to this page. For example, if a character goes by two different names, you might add their less common one as an alias.
- `description`: Page subheading or short description.
- `categories`: @TODO no real use for these yet.
- `tags`: These are similar to categories. In Fictionwiki, they are used for wiki-like [maintenance categories](https://en.wikipedia.org/wiki/Wikipedia:Maintenance#Maintenance_and_collaboration_resources). For example, the Wiki Maintenance Hub page will keep a list of anything you mark with the tag `ncleanup` ("needs cleanup").
- `layout`: see Page Layout

To avoid having to copy/paste frontmatter fields or type them all from scratch, you can use the `hugo new` command to create your new pages from a template. See [Page Types]() for different kinds of pages you can make.

The actual content of your page goes underneath the frontmatter and is written in Markdown format.

## Page Layout
Different page types (e.g. characters vs locations) each have their own layouts and show different menus in the sidebar. You can override a page's layout by creating HTML files in the `projectname/layouts/` folder.

To apply a custom layout to *one specific page*, create a file like `projectname/layouts/_default/custom-single-page.html`. Then set the page's `layout` frontmatter to "custom-single-page".

(Of course "custom-single-page" can be whatever name, you want so long as it doesn't conflict with any of the names in the _default folder.)

### Creating a Layout

Learning [Hugo's HTML templating language](https://gohugo.io/templates/introduction/) will let you get the most out of custom layouts, but you can also use basic HTML.

The easiest way to modify a page layout is by overriding predefined content "blocks" that control different parts of the page, such as the sidebar. This allows you to make changes without rewriting the whole HTML page from scratch.

See `custom-single-page.html` in the `exampleSite` folder for a list of the blocks you can override.

## Advanced
Fictionwiki uses the `.Description` parameter over `.Summary`.

You can specify Frontmatter in YAML, TOML, or JSON. Use [Hugo's `convert` commands](https://gohugo.io/commands/hugo_convert/) to convert existing files if you want to switch.