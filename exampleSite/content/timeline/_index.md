---
title: "Timeline"
#weight:                    # Position in the left sidebar menu
layout: _section-timeline   # Shows all your stories and full timeline
#-------------------------------------------------------------------------------
cascade:
- _target:
    kind: section # (story section)  Story
    path: /*/*/_index.md             # timeline/story/_index.md
  type: story
  layout: _section-story
- _target:
    kind: page #    (story page)     Chapter
    path: /*/*/*/index.md            # timeline/story/chapter/index.md
  type: story
  layout: _page-story
- _target:
    kind: section # (event section)  Subplot
    path: /*/*/*/_index.md           # timeline/story/subplot/_index.md
  type: event
  layout: _section-subplot
- _target:
    kind: page #    (event page)     Event
    path: /*/*/[!tabs]*/[!index]*.md # timeline/story/subplot/anything.md
  type: event
  layout: _page-event
---