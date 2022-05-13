---
title: "BEM CSS Tip: Dealing with grandchild elements"
date: "2021-05-13"
category: "CSS"
canonical: "https://andrew-barnes.medium.com/bem-css-tip-dealing-with-grandchild-elements-d7378b51e722"
featuredImage: "bem-css-tip.jpg"
author: "andy"
---

If you asked most grandparents how to deal with grandchildren, they would probably suggest letting them do whatever they want, and then filling them with sugar about 20 minutes before bedtime. Whilst as their child, you sit there thinking how unjust this is, since all they offered you as a child was vegetables and discipline.

In contrast, when looking at [**B**lock **E**lement **M**odifier](https://en.bem.info/methodology/) (BEM), the blocks treat their grandchildren (and deeper nested elements) in exactly the same way they treat their children.

## The problem

Easily the most common question I’m asked with BEM, is how to name deeply nested (2+ levels) elements in the blocks. So taking the example block below, once we get to the `<li>` and the `<a>` elements, how do we assign selectors to those?

```html
<nav class="navigation">
  <ul class="navigation__list">
    <li>
      <a href="">One</a>
    </li>
    <li>
      <a href="">two</a>
    </li>
    <li>
      <a href="">three</a>
    </li>
  </ul>
</nav>
```

## The wrong way

A common wrong approach to this, is to keep adding double underscores the deeper you go. Something like the following:

```html
<nav class="navigation">
  <ul class="navigation__list">
    <li class="navigation__list__item">
      <a class="navigation__list__item__link" href="">One</a>
    </li>
    <li class="navigation__list__item">
      <a class="navigation__list__item__link" href="">two</a>
    </li>
    <li class="navigation__list__item">
      <a class="navigation__list__item__link" href="">three</a>
    </li>
  </ul>
</nav>
```

BEM gets a lot of bad press for looking messy. I think you’ll agree that this approach chucks a fair bit of fuel on those flames! Things start to get messy quicker than usual with this approach, and readability drops significantly.

I want to be quickly identifying the block I’m in (**navigation**`__`list), and the element I’m looking at (navigation`__`**list**). This approach slows down identification and adds bloat to your code.

It’s also inflexible. Say we wanted to add a new element in the tree, you’d need to rewrite all its child selector names to accommodate for the new namespace.

## The right way

The common misconception - that we need to chain our element names like this - is probably born from how we would traditionally think about their relationships to the elements directly above them. However, to get on the right track we need to start making sure that our elements only ever have two underscores in them (`__`), and that the naming shouldn’t care about how deeply nested you are in a block.

Let’s take a look at what the navigation block will look like with the correct approach:

```html
<nav class="navigation">
  <ul class="navigation__list">
    <li class="navigation__item">
      <a class="navigation__link" href="">One</a>
    </li>
    <li class="navigation__item">
      <a class="navigation__link" href="">two</a>
    </li>
    <li class="navigation__item">
      <a class="navigation__link" href="">three</a>
    </li>
  </ul>
</nav>
```

This immediately cleans things up, and it becomes a lot easier to identify what the elements are. A couple of benefits from this approach:

- You can move elements around within the block, assuming it keeps it semantic.
- You start consistently naming things, which speeds up implementation. And this becomes powerful when working in a team.

## Duplicated element types

If you code long enough, at some point you will run into a situation where you will have common elements that you want to style differently. So if your block has two `<ul>` in, how do you differentiate them?

Ideally, there will be some sort of unique factor that you could use to add to one of the elements. So in the example below, we are treating the second list as a “secondary” list. Which allows us to prefix the element name with the word "secondary" and then cascade that through the child elements.

```html
<div class="navigation">
  <ul class="navigation__list">
    <li class="navigation__item">
      <a class="navigation__link" href="">One</a>
    </li>
    <li class="navigation__item">
      <a class="navigation__link" href="">two</a>
    </li>
    <li class="navigation__item">
      <a class="navigation__link" href="">three</a>
    </li>
  </ul>
  <ul class="navigation__secondary-list">
    <li class="navigation__secondary-item">
      <a class="navigation__secondary-link" href="">A</a>
    </li>
    <li class="navigation__secondary-item">
      <a class="navigation__secondary-link" href="">B</a>
    </li>
    <li class="navigation__secondary-item">
      <a class="navigation__secondary-link" href="">C</a>
    </li>
  </ul>
</div>
```

At some point, you will need to determine whether it actually makes sense to split deeply nested elements out in to their own blocks. This very much depends on context and whether it will be reused. And as such, means that there’s no blanket rule to go by.

## Summary

When creating your blocks, always avoid chaining your selector names, and stick to a flat structure.

- Good: `nav__link`
- Bad: `nav__list__item__link`

Your future self will thank you!
