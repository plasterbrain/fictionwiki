# Infoboxes
Want to show a wiki-like infobox on your character page? It's easy with the infobox shortcode. Just put this at the top of your character `.md` file: `{{< infobox "character" >}}`.

Infobox pulls data from the page's frontmatter. Fields missing info will show "?" after the label. You can see what fields are shown for each infobox type in the respective archetype files (e.g. `archetype/character.md`).

- `image`: Page image. This can also be an image from Unsplash (e.g. `"https://unsplash.com/photos/jNQZCfwsJ8M"`) which will be resized, downloaded and cached for you. *Note: if the Unsplash image is not loading in your browser, try turning off ad-blocking extensions such as uBlock.*
- `gender` (characters): The values "cismale", "transmale", "cisfemale", "transfemale", and "nonbinary" will show little unicode icons next to the values.

The fields and sections shown in each type of infobox are specified in `data/infobox`. To make a new infobox of your own, create `data/infobox/whatever.toml` with your custom settings, and then call the infobox on your page using `{{< infobox "whatever" >}}`. You can also overwrite the existing setting by copying the appropriate data file into `yourwiki/data/infobox` and making changes. See `archetypes/infobox.toml` for an example of how these data files should look.

In general, you can specify sections of fields using `[[section]]`. Section has two elements:
- `title`* - optional name to show for this section, e.g. "Physical Appearance"
- `fields` - a list of fields in the order you want them to appear. Each field looks like this: `{id="label", n=1}`
    - `id` - The translation key for this element; usually a singular noun.
    - `n` - Whether the label should be singular (1) or plural (2). The translation file has single and plural versions of common nouns (e.g. "City" vs "Cities").

Remember: for each infobox field, the data `id`, translation key, and page frontmatter key must be the same value. For example, to show a country's climate in its infobox:

1. Inside `data/infobox/country.toml` there is a field with the `id` "climate". The `n` value is 1.
1. Inside `i18n/en.toml` there is a `[climate]` key with singular and plural English translations underneath. Because `n = 1`, we will use singular "Climate."
1. At the top of your `{country}.md` page you might put something like `climate: Desert/Savanna`.

If you wanted to change the label to plural "Climates" instead, you would just change `n` to 2.