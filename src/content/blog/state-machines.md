---
title: "State Management vs. State Machines"
description: "Why thinking in finite states eliminates 90% of your frontend bugs. A practical guide to XState with React."
pubDate: 2025-11-15
author: "Nicolás Rojas Marín"
tags: ["React", "Architecture"]
featured: true
---

We often confuse "state management" (holding data) with "state machines" (logic flows). Most frontend bugs come from *impossible states*—boolean flags that shouldn't both be true at the same time.

## The Boolean Trap

Consider a typical fetch component:

```typescript
const [isLoading, setIsLoading] = useState(false);
const [isError, setIsError] = useState(false);
const [data, setData] = useState(null);
```

What happens if `isLoading` is true AND `isError` is true? This shouldn't happen, but nothing prevents it.

## Enter Finite State Machines

A state machine can only be in one state at a time. `idle` | `loading` | `success` | `failure`.

By modeling your UI this way, you eliminate entire classes of bugs before writing a single line of render logic.
