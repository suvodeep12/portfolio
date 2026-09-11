---
title: GW2 Optimal Lister
slug: gw2-optimal-lister
status: Shipped
summary: A desktop tool that compares Guild Wars 2 Trading Post prices to suggest profitable listings.
order: 4
placement: featured
presentation: evidence
preview: image
sourceUrl: https://github.com/suvodeep12/gw2-optimal-lister
fallbackImage: https://raw.githubusercontent.com/suvodeep12/gw2-optimal-lister/main/screenshot.png
fallbackAlt: GW2 Optimal Lister desktop interface showing item lookup and listing analysis.
related: []
---

GW2 Optimal Lister helps compare Trading Post prices before listing an item for profit.

## What it does

- Looks up items by name or ID through the official Guild Wars 2 API.
- Caches item data locally for faster later searches.
- Compares the lowest listing with the highest buy order.
- Suggests a listing price, quantity, and estimated after-tax profit.

## Engineering notes

The project keeps the market lookup workflow local and uses caching to avoid repeating the slowest part of the data lookup.
