# @TODO
- Decide which aspect of a page should be used to embed/link to it (title, link title, slug, file name, full path)
    - For event it's .File.TranslationBaseName, aka "filename without extension or optional language identifier (e.g., foo)"
- Make sure all shortcodes use titlecase params and accept either named or positional
- Edit button if you're not in vscode xd
- Implement real calendar stuff for normies who want to use the real calendar
- RTL language CSS auto thingy
- Recurring events
- Special events (birthdays/deathdays that have icons or register on char pages)
- Try not to import stuff, have use GetRemote failover for 

## mehhh
- Age by story calculator is a bit too complex rn especially with potential multiple calendar types
- If this gets popular either everybody has to use a normal calendar or I am about to accidentally shift the fictional calendar paradigm.
- Palette generator from images for char design https://lokeshdhakar.com/projects/color-thief/#getting-started

{{- $notThisPage := where .CurrentSection.Pages "Permalink" "ne" $page.Permalink -}}
{{- $otherChars := $notThisPage }}
{{- $otherChars = $otherChars | complement . -}}