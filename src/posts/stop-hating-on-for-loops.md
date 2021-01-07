---
title: Stop Hating on For Loops
showDate: true
date: 2021-01-07
---

This Year, I got a lot of email recommendations from [Medium](https://medium.com/) and [dev.to](https://dev.to/) recommending articles on how we should stop using for-loops and instead replace them with array functions like `forEach`, `map`, `filter`, `reduce` and so on. I'm always up for learning something new, checking out best practices and evaluating my coding style, so the first time one of those articles popped up I read through it. About halfway down, I had decided that the author and I did not share the same opinion, so I closed the tab and moved on with my life. But those articles would keep showing up in my email recommendations, all with the same structure:

- A clickbaity title.
- An explanation of why `for` and `for...of` are bad.
- The claim, that `for` and `for...of` should be replaced with array functions.
- Examples using array functions.

The examples were sometimes quite good and helpful, but what bothers me are the clickbaity titles and absolute claims they make. In programming, there are no absolutes. There is an infinite amount of tools, best practices, and many instances of "it depends". As a developer, you need to learn how to properly use these tools, consider best practices, and weigh different options. Array functions, `for`, and `for...of` are different kinds of tools. Just like any other tool they have a purpose, some quirks and various types of features sets. So telling people to stop considering one of those tools is just bad advice.

The claim that the authors repeat most commonly and the one that personally bothers me the most is that array functions always improve readability. Don't get me wrong. They certainly can improve readability. But it depends on the situation. For example, given a simple small array of numbers `forEach` would be a good choice.

But if the array is more complex, e.g. if working with an array of objects, the disadvantages become clear:

- There is no break and continue. So if you have an array of objects, it will only work if those objects are well defined.
- No return or yield.
- No async/await.

There are some ways around those limitations, but they'll make the code unnecessarily complicated and less readable.

People are trying to build up some reputation and publish content. I get that! But this is not the way to do it. Articles like these aren't helping people they're targeting, like beginners or junior developers, who can be very insecure about their coding style and knowledge. They can make them adopt bad habits, just because they try to avoid using `for` and `for...of`. Instead, try to give readers a comprehensive overview of array functions and when it is appropriate to use them. There are lots of instances where a `map`, `forEach` or `filter` can make the code more readable, but it depends.
