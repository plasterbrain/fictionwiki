# @TODO
- Decide which aspect of a page should be used to embed/link to it (title, link title, slug, file name, full path)
    - For event it's .File.TranslationBaseName, aka "filename without extension or optional language identifier (e.g., foo)"
- Make sure all shortcodes use titlecase params and accept either named or positional
- Add a note on changing case for translated stuff using Hugo functions?
- Theme param/alternatives for edit button if you're not in vscode xd
- Add theme params defaults to the THEME's config not just site's
- Assumes years are 12 months and weeks are 7 days, though you can give these any name you like. Default calendar gives months 30 days. There's no way to implement a custom version of this rn if you aren't using a calendar but this is the setup my universe uses so I've kept it in there. If this gets popular either everybody has to use a normal calendar or I am about to accidentally shift the fictional calendar paradigm.
- @TODO Implement real calendar stuff for normies who want to use the real calendar
- RTL language CSS auto thingy
- Recurring events
- Special events (birthdays/deathdays that have icons or register on char pages)

## mehhh
- Age by story calculator is a bit too complex rn especially with potential multiple calendar types