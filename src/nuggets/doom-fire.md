---
layout: base.njk
title: "Doom fire"
description: "The classic Doom fire effect"
date: 2026-10-24
show_date: true
tags: nuggets
math: true
---

I was doom scrolling the other day and my algorithm turned up with the old doom fire and I thought I'd give it a go and see if I could replicate it using plain javascript. Turned out it was fairly straight forward. The trick was to consider it generatively (in the old computer science meaning of the word). Each pixel is determined by the colour of the pixel below it. We'll color the bottom row white for "hot" and construct a colour palette from "hot" -> "cold", which roughly is a gradient from white -> red -> yellow -> black.

The task is then really just a matter of defining the base case (the hot white bottom row), and adding some randomness to how colors propogate upwards. It can rougly be defined by:


$$
\mathrm{pixel}(y, x) =
    \begin{cases}
        \mathrm{white} & \text{if } y = 36 \\\\
        \mathrm{pixel}(y{+}1,\ x{+}\delta) - d & \text{otherwise}
    \end{cases}
$$

where $\delta$ decides how far the flame drifts sideways and $d$ how much it cools — both sampled from `{0,1,2}`, independently for every pixel on every frame. Note, in my implementation the coordinates are swapped, and coordinate `(0,0)` is in the top right corner, and `(36,36)` is the bottom right corner. Thus, `y = 36` refers to the bottom row. 

<iframe class="demo-frame" src="/assets/demos/doomfire/index.html" title="Doom fire demo"></iframe>

Voila! I think it turned out pretty cool. Check out the source code if you're curious: [code](/assets/demos/doomfire/main.js)