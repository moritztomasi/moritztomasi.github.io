---
title: Favourite Tools of 2020
showDate: true
date: 2021-01-07
---

Here are some short notes on my favourite tools this year.

## [TailwindCSS](https://tailwindcss.com/)

TailwindCSS is an un-opinionated CSS framework that provides utility-classes like `flex`, `space-y-2`, `text-center`, `bg-gray-200` etc. to use directly in HTML markup. While I've been using it at work for quite some time now, I started utilising it in personal projects this year. It has straightforward setup options, is extendable, is great when it comes to responsiveness and gets super small when building for production. I have to admit that I've always struggled a bit with CSS, which is why I never really enjoyed frontend work. TailwindCSS changed that for me and has made me a better frontend developer.

## [ObjectionJS](https://vincit.github.io/objection.js/) & [KnexJS](http://knexjs.org/)

I've used Sequelize a lot in the past, and I quite like it. But I always found it a bit too abstract for my taste, and once queries got more complex, there were always some issues and lots of googling. Then I discovered KnexJS. I started using it for personal and work projects, and it's always been a joy. The documentation is quite extensive with lots of examples, and in my opinion, it improves the readability of queries by a lot in comparison to other ORM's. Just as a standalone library, I find it extremely useful. And then there is ObjectionJS. ObjectionJS is an ORM, but it is more of a wrapper built around KnexJS, making it a query builder with relational functionality, that is simple to use and extremely helpful when managing database schemas.

## [Shopify](https://www.shopify.com/)

I've always been interested in e-commerce. I had been looking around the Shopify ecosystem to see how it works for a while. This year I had the opportunity to help someone set up their own Shopify store. Initially, I advised them to get one of the many themes that Shopify offers for purchase. Still, since their designers had created a custom web design, we decided to implement a custom theme.

The whole experience was pretty fun and exciting, though I have to say that Shopify's development ecosystem has some shortcomings. Setting up both a production and development environment is not that straightforward, and a bit hacky, and the documentation can sometimes be sparse with information.

## [Eleventy](https://www.11ty.dev/)

A few years ago, I set up a personal website using WordPress, which I had worked before building small business websites. I thought it might be the simplest solution, but I never got excited about it, and the project got abandoned. This year, I came across eleventy, a simple static site generator written in JavaScript, that transforms a directory of templates into HTML. Eleventy supports many template types, including Markdown, which seemed perfect for the personal website project, since I didn't want to work with a CMS and keep the general workflow simple. It also allowed me to try out [AlpineJS](https://github.com/alpinejs/alpine), a library that offers the reactive and declarative nature of big frameworks like Vue or React at a much lower cost.

The setup and implementation were pretty straightforward. After I decided which content I wanted to have on the site, planned the structure and put together a minimal design, I began implementing it. My idea of adding a simple light/dark mode switcher turned into a multi-theme mode switcher after discovering [Happy Hues](https://www.happyhues.co/). The last thing I did was implement an automated process for building my CV from a JSON file, using [JSON Resume](https://jsonresume.org/).

Building this personal website was my favourite experience this year. The workflow is simple. I edit the files, build, commit and push. The hosting on GitHub pages is free, and the domain costs 2€ per month. But most importantly, it allowed me to play around with minimal design ideas and tools that otherwise, I would not have a big chance to use.
