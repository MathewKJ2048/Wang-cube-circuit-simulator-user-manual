# Tile Types

## Adjacency strings

- Each tile type's adjacency rules are determined solely by 6 strings associated with it - `up`, `down`, `left`, `right`, `front` and `back`. 
 
- Of the possible values these strings can take, the value `anything` is a reserved value for surfaces that are not in contact with any tile.

- Tiles can be adjacent only if the corresponding strings' values are equal (even if the value is `anything`).

## Color mappings:

- For visual representation, there exists a color map associated with the possible values these strings can take.
- The colors themselves have no effect on the adjacency rules.
- If a particular value is mapped to a color, all tiles whose tile type's associated strings with that value, are rendered with that color.
- When an unseen value is assigned, the default color associated with the value is white.
- The color associated with `anything` is black.

::: tip
Whenever a new value is used, it is recommended to change the associated color to something other than white or black. This way, the presence of white serves as a warning that the string has an unexpected value.
:::

## Name

The name of the tile type consists of two parts:

- the `core` - a string determines the color of the body, used in the color mapping
- `classes` - a string used to describe the tile type, for identification

The `classes` string is of the form `class1-class2-class3`. The fully qualified name of the tile type is of the form `core-class1-class2-class3`.

::: tip
It is not necessary (though recommended) that tile types have unique fully qualified names.
:::
