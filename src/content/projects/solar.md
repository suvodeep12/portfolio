---
title: Solar
slug: solar
status: Shipped
summary: An interactive 3D solar system built with React Three Fiber and JPL-derived orbital mechanics.
order: 1
placement: featured
presentation: immersive
preview: live
liveUrl: https://suvodeep12.github.io/Solar/
sourceUrl: https://github.com/suvodeep12/Solar
fallbackImage: https://raw.githubusercontent.com/suvodeep12/Solar/main/docs/screenshot.png
fallbackAlt: Solar interactive 3D solar system showing planets and orbital paths.
related:
  - threejs-project
---

Solar is a real-time solar system that turns orbital data into an interactive browser experience.

## What I built

- Orbital motion based on JPL-derived Kepler elements.
- Time controls from paused simulation to accelerated time.
- Focused views for planets, moons, and other bodies.
- Procedural textures with an optional photo-texture mode.
- Orbit lines, asteroid belt, and a WebGL scene.

## Engineering notes

The repository keeps the orbital math separate from rendering and interface state. The pure orbital math has its own tests, so the simulation can be checked without running WebGL.
