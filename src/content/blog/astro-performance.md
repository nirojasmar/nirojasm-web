---
title: "Performance Patterns in Astro"
description: "How the islands architecture changes the way we think about shipping JavaScript. My experience migrating a large Next.js app."
pubDate: 2025-10-02
author: "Nicolás Rojas Marín"
tags: ["Astro", "Performance"]
featured: true
---

Astro's "Islands Architecture" is a game changer because it defaults to zero JavaScript. This is the opposite of the Single Page Application (SPA) hydration model.

## Partial Hydration

Instead of hydrating the entire page (re-running all JS to attach event listeners), Astro allows you to wake up just the interactive bits.

- The header is static? No JS.
- The blog content is static? No JS.
- The generic "Buy Now" button? Hydrate on visible.

## The Result

We saw a **40% reduction** in TTI (Time to Interactive) simply by switching to Astro for our marketing pages. It forces you to be intentional about what scripts you send to the user.
