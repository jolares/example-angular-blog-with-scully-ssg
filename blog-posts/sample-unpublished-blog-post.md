---
title: 'Sample Blog Title (from metadata)'
description: 'Sample blog description (from metadata)'
published: false
author: <author>
sampleMetadataTextField: 'sample blog-post metadata with text value'
sampleMetadataArrayField:
    - 'sample metadata array item-1'
    - 'sample metadata array item-2'
slugs:
    - ___UNPUBLISHED___kvfhrprl_wylCG6FTzE9cLbWY820ZXsC1aMHWp5H1
---

# Sample Heading-1: Text


Sample blog-post paragraph written in markdown file `sample-unpublished-blog-post.md`. All
blog post files can be found within directory path `<projectRoot>/blog-posts/`.

After building the static-site using Scully, if the post's metadata `published` 
is set to `false`, then the post markdown [source] file will be modified automatically
by adding a `slugs` metadata array field, which will have an item set to `___UNPUBLISHED___{page_id}`;
this item value is an anymous URL, and will be added post-build as long as the property
published is set to false. This generated anonymous URL can be shared with others
(i.e. within you organization, for feedback on the blog post) before it is officially
published to a production URL.

Note that after building the unpublished static-site using Scully, the markdown
blog-posts are converted to HTML and placed in the directory `dist/static/blog-posts/<anonymous slug value>/index.html.`



## Sample Heading-2: Code Blocks


Sample fenced code-block:

```
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```


Sample `JSON` fenced code-block with syntax-highlighting:

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```


### Sample Heading-3: Tables


Sample markdown table:

| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |



#### Sample Heading-4: Footnote references within post content

This is a sample footnote reference using short-hand notation `[^1]`[^1].
This is is another one using regular notation `[^footnote2-name]`[^footnote2-name].


#### Sample Heading-5: Footnotes references section


<!-- Footnotes -->

[^1]: This is the first footnote.

[^footnote2-name]: Sample footnote with more than just a link, including paragraphs and code-blocks.

    Indent paragraphs to include them within the footnote.

    `{ sample code-block, indented within footnote }`

    Add as many paragraphs as you like.