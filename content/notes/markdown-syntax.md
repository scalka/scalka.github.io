---
title: 'Markdown Syntax Guide'
draft: false
date: '2025-02-02'
tags: ['markdown', 'css', 'html']
categories: ['themes', 'syntax']
---

This article is a cheat-sheet for me to see how markdown is rendered with my custom Hugo theme called Oakley (after my dog).

<!--more-->

## Headings

The following HTML `<h1>`—`<h6>` elements represent six levels of section headings. `<h1>` is the highest section level while `<h6>` is the lowest.

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

## Paragraph

Wlazł kotek na płotek i mruga.
Piękna to piosenka, niedługa.
Niedługa, nie krótka, lecz w sam raz,
Zaśpiewaj, koteczku, jeszcze raz.

~~Strikethrough~~

## Blockquotes

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

#### Blockquote without attribution

> If a shortcut, was a shortcut it would have been called a route.
> **Note** that you can use _Markdown syntax_ within a blockquote.

#### Blockquote with attribution

> "Life is really simple, but we insist on making it complicated."<br>
> — <cite>Confucius[^1]</cite>

[^1]: This quote is often attributed to Confucius. For more context, see [Wikipedia](https://en.wikipedia.org/wiki/Confucius) or related philosophy references.

## Tables

Tables aren't part of the core Markdown spec, but Hugo supports supports them out-of-the-box.

| Name           | Age |
| -------------- | --- |
| Bob the Spider | 2   |
| Bob Big Spider | 8   |

#### Inline Markdown within tables

| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |

## Code Blocks

#### Code block with backticks

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

#### Code block indented with four spaces

    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Example HTML5 Document</title>
    </head>
    <body>
      <p>Test</p>
    </body>
    </html>

#### Code block with Hugo's internal highlight shortcode

{{< highlight html >}}

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
{{< /highlight >}}

## List Types

#### Ordered List

1. First item
2. Second item
3. Third item

#### Unordered List

- List item
- Another item
- And another item

#### Nested list

- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese

## Other Elements — abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.

## Linking notes

To link another note use [See my Output post]({{< relref "notes/output.md" >}}) for using relative URLs. You can also link to specifiv URL [See my Output post](/notes/output/).

## Images

{{< image-gallery-markdown class="content-gallery" >}}
  {{< image-markdown src="images/notes/jesmonite-example.jpg" alt="Examples Jesmonite color combinations and marbling effect" width="600x" >}}
  {{< image-markdown src="images/notes/jesmonite-result.jpeg" alt="Eight finished Jesmonite creations, each showing our unique personalities" width="600x" >}}
{{< /image-gallery-markdown >}}

{{< image-markdown src="images/notes/jesmonite-example.jpg" alt="Examples Jesmonite color combinations and marbling effect" class="featured-image" >}}
