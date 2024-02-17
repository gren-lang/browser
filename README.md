# Gren in the Browser!

This package allows you to create Gren programs that run in browsers.

## Learning Path

**I highly recommend working through [gren-lang.org/learn][guide] to learn how to use Gren.** It is built around a learning path that introduces concepts gradually.

[guide]: https://gren-lang.org/learn

You can see the outline of that learning path in the `Browser` module. It lets you create Gren programs with the following functions:

1. [`sandbox`](https://packages.gren-lang.org/package/gren-lang/browser/latest/module/Browser#sandbox) &mdash; react to user input, like buttons and checkboxes
2. [`element`](https://packages.gren-lang.org/package/gren-lang/browser/latest/module/Browser#element) &mdash; talk to the outside world, like HTTP and JS interop
3. [`document`](https://packages.gren-lang.org/package/gren-lang/browser/latest/module/Browser#document) &mdash; control the `<title>` and `<body>`
4. [`application`](https://packages.gren-lang.org/package/gren-lang/browser/latest/module/Browser#application) &mdash; create single-page apps

This order works well because important concepts and techniques are introduced at each stage. If you jump ahead, it is like building a house by starting with the roof!

This order also works well because it mirrors how most people introduce Gren at work. Start small. Try using Gren in a single element in an existing JavaScript project. If that goes well, try doing a bit more. Etc.
