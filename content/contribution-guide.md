---
title: Contribution Guide
---

# Introduction

The UGRT docs are based around Quartz and Markdown. Quartz has very extensive [documentation](https://quartz.jzhao.xyz/) for any of the non standard syntax like math typesetting or inter-page linking.

# How to Edit

Markdown can either be written in a plain text editor or in a Markdown specialized editor.
If you are using a plain text editor or want to learn about markdown in general there are many great guides online but we recommend [this guide](https://www.markdownguide.org/cheat-sheet/) to get started. The setup we most recommend would be to open up the `content` folder as a vault in Obsidian to write any content and edit the file structure or any configuration files in VSCode. Obsidian has many of the functions that Quartz has and as such, many of the hotkeys accomplish things that are useful. Markdown extensions can be installed into VSCode if you want a unified setup. VSCode is also helpful for running a local instance of the docs for development.

# Essential Syntax

Quartz can automatically name a page based on its filename but this is almost never the best looking title. Each markdown file has a header that tells Quartz what the display name should be. An example can be found below. Obsidian will show you this header as a properties table.

```Markdown
---
title: Contribution Guide
---
```

Quartz can also automatically display inter-page links based on the filename but this is also rarely the best looking link. When making an inter-page link you can use the `|` character to split the file name from the display name. An example of this can be found below. Obsidian has built in support for editing this attribute.

```Markdown
[[/Firmware/arm-board|Arm Board]]
```

# Tips and Tricks

Be careful about file paths and naming. Quartz is very sensitive to the case of filenames and the exact path. Try to test any inter-document links you make locally before you push to the repository.

Try to make as many inter-document links as possible wherever appropriate. You want to make navigation easy and convenient. This also makes the graph that is built into Quartz look prettier. For example the `/electrical-home` page references the `/Electrical-Folder/drive-board` page.

Sort pages into subsection folders. This keeps proper hierarchy and flow of the UGRT docs. Major documents and subsection home pages are in the root of the `content` folder. Subsection pages go into a folder named after the corresponding subsection.
