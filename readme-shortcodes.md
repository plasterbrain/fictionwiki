# Shortcodes
If you include the option name in the shortcode, your options can be specified in any order, like `{{ healthy Veggie2="Peas" Veggie1="Carrots" }}`.

However, if you don't use the option names (maybe you're a busy lady idunno), options must be given in the order shown in the descriptions below (e.g. `{{ healthy "Carrots" "Peas" }}`).

An asterisk after the name indicates a parameter is optional.

Page-embedding shortcodes have a Name parameter. To help Hugo find the right page, use the page's filename (or last folder name if it's an `index.md`) without the extension or any translation identifiers (e.g. for "birthday-party.ja.md", use "birthday-party").

## Link
An easy way to link to other pages on your wiki. If you try to link to a page that doesn't exist, it will be added to the list of missing pages on the Maintenance Hub page.

- `Name`: File path of the page to 

## Infobox
See: readme-infoboxes.md

## Event
- `Name`: Event page filename

## Skill
Show some data about a character's ability.

- `Name`: Skill page name
- `Level`*: Skill level as a whole number. Shows a number of stars based on the value (e.g. `Level=1` shows one star). If omitted, the box will show "N/A" instead.
- `Weakness`*: Info about the weaknesses of this skill. Omit to hide this field.
- `Specialty`*: Info about any particular specialties or sub-skills. Omit to hide this field.

## Embed: Airtable
- `ID`: Base/View ID (e.g. "shr1234asdf") from the public share or embed link of your table.
- `Full`*: Actual Airtable base URL; will add a link above the embed view so you can access the real table quickly.
- `Card`*: Boolean; whether to use the mobile/card layout for the desktop version of the embed
- `Color`*: Background color to use for your embed, default "grayLight" (boring)
- `Controls`*: Boolean; Whether to show controls on view embeds.

## Embed: Unsplash Photo
Why draw your characters and places when you can steal images from Unsplash? Your wiki makes it easy, too -- just add a shortcode with the Unsplash link like this:

```
{{< embed/unsplash "https://unsplash.com/photos/jNQZCfwsJ8M" >}}
```

...and it will automatically be downloaded and displayed on your page.

- `Src`: Unsplash photo page link. (Don't use the actual direct image URL -- the shortcode will find it for you.)
- `Align`: Image alignment; accepts "left", "right", or "center".
- `Width`*: Width of the image as a unitless number (e.g. `150`). This is capped at 300px if your image is left- or right-aligned.
- `Height`*: Height of the image as a unitless number (e.g. `150`).
- `Link`*: Whether or not to link the image to the original Unsplash page. Default `true`.

## Embed: Unsplash Collection
Unsplash images are perfect for worldbuilding inspo. Show a gallery of images on your wiki page with this shortcode.

You will need to [register an "app" for the Unsplash API](https://unsplash.com/developers) to use this shortcode. Once you've done this, locate the value of "Access Key" on the Unsplash developer dashboard page. Set site Param `unsplashAccessKey` to this value.

In API "demo" mode, you're limited to 50 hourly requests which are then cached. That means you can only add max 50 of these shortcodes on your wiki within a single hour.

- `ID`: ID of a public gallery, a series of numbers in the Unsplash URL.