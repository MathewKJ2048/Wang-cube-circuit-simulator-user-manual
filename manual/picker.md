# Picker

- The search bar at the top is used to look for tile types and sub-tilings by matching with their fully qualified names.

- The `regex toggle` button at the top left is used to enable/disable regular expressions for searching.

- A specific token (tile type or sub-tiling) is picked by selecting the associated radio button in the results shown below the search bar.

- The picked token shows up on the editor to the right.

## Picker buttons

The three buttons in the bottom left group (in order from left to right) are:

- `add` button - creates a new tile type and picks it
- `delete` button - removes the currently selected tile type from the Wang file
- `copy` button - creates a copy of the picked token (if it is a tile type) and picks the copy

The three buttons in the bottom right group (in order from left to right) are:

- `rotate clockwise` button - permutes the values assigned to the adjacency strings of the picked tile type in a way that is equivalent to a clockwise rotation
- `rotate counter-clockwise` button - performs a similar action as above, but counter-clockwise
- `flip` button - performs a similar action as above, but mirrors horizontally

::: warning
The actions performed by these buttons are permanent and irreversible.
:::