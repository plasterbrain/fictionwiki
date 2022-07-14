---
title: {{ replace .Name "-" " " | title }}
#linkTitle: ""
#slug: ""       # Last part of the URL
description: "" # Page subtitle
categories: []
tags: []        # Use tags for "wiki maintenance" categories
#--- GENERAL INFO
age: ""
birthday: {{ .Site.Params.freezeDate | default 2020-01-01 }}
gender: ""    # e.g. cisfemale, transfemale, cismale, transmale, nonbinary
appearsIn: [] # Use linkTitle values
status: ""    # e.g. alive, dead, alivedet, deaddet, unknown
#--- PHYSICAL TRAITS
height: ""
hair: ""
eye: ""
species: ""   # Name of a page under Species, ideally
ethnicity: ""
#--- RELATIONSHIPS
relationship: # Each line item is e.g. ["Character Name", "friend, lover"]
  - ["", ""]
#--- FAVORITES
hobby: ""
animal: ""
color: ""
food: ""
sport: ""
---
{{< infobox/character >}}
<!-- KEEP THIS EMPTY LINE -->
**{{ replace .Name "-" " " | title }}**

## Appearance

## Personality

## Abilities

## Relationships

## Background

## Trivia

## Development

## Footnotes
<!-- Any markdown footnotes you've added will appear after this heading. -->