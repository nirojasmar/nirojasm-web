---
title: "Neural Network Visualizer"
description: "A tool that renders network weights dynamically without freezing the browser thread."
challenge: "Understanding backpropagation is intuitive for humans but difficult to visualize in real-time. The goal was to create a tool that renders network weights dynamically without freezing the browser thread."
process: "I utilized WebGL for rendering the node connections, allowing for 10,000+ interactive elements at 60fps. The state management logic was offloaded to a Web Worker to ensure UI responsiveness. I also implemented a custom shader pipeline to handle the glowing connections efficiently."
techStack: ["TypeScript", "WebGL", "Rust (WASM)"]
repoLink: "https://github.com/example/neural-vis"
order: 1
homepage: true
---
