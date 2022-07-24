# Translations (+ Month/Weekday Names)
Do you prefer your wiki in a different language? Don't worry! Hugo's built-in localization feature lets you translate theme text without having to dig through the actual template files.

English text shown on Fictionwiki is taken from `i18n/en.toml`. You can add or revise English translations by copying this file into your main project's `i18n` folder. This is also where you can add in your own fantasy month and weekday names under the keys `month1` and `weekday1`, respectively (where "1" is the month/weekday number).

## Translating to Your Own Language
Hugo can create sites with content in [multiple languages at once](https://gohugo.io/content-management/multilingual/), separated by directory. Switching between multiple languages on one site is beyond the scope of this article, but for now you can create `i18n/ja.toml` (where "ja" is your lowercase language code) in your main project folder. Then edit your sit'es config file and set:

```
defaultContentLanguage = "ja"
```

If you only plan on your site being in one language and you're lazy, you can even just copy and edit the `en.toml` file with your own translations.