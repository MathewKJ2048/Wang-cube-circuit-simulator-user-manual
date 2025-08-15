# Introduction

This is the user manual for the [Wang cube circuit simulator web-app](https://mathewkj2048.github.io/Wang-cube-circuit-simulator), which is an [open source](https://github.com/MathewKJ2048/Wang-cube-circuit-simulator) tool that enables one to design Wang cubes and simulate tiling R<sup>3</sup> plane-by-plane.

The tool is designed under the assumption that movement along the z-axis corresponds to moving backward and forward in discrete time, and that the tiles that make up a tiling in a plane are always finite in number.

## Vocabulary

- "front" and "back" refer to the positive and negative z-axis respectively. 
- "up" refers to the positive y-axis and "left" refers to the positive x-axis.
- A "tile" is an object of a particular "tile-type", with a unique "position" (in the x-y plane). 

Multiple tiles may have the same tile-type, and no two tiles (regardless of tile-type) can share a position.

- A "tiling" is a collection of tiles.
- The "main tiling" is the tiling that the user works on. 
- "sub-tilings" refer to parts of the "main tiling" that the user saves for reuse.
- The "Wang file" refers to an object containing the main tiling, the sub-tilings and the set of all possible tile-types, among other things.

The UI is divided into three panes - left, right and centre.

- "picker" refers to the left pane and all its UI elements
- "tile editor" refers to the right pane and its UI elements
- "preview" refers to the window in the top-right
- "editor" refers to the main window in the centre of the centre pane

