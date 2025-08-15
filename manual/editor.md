# Editor

All buttons that edit the main tiling are present in the upper left corner of the centre pane. The editor has five modes. The first four modes (in order of trigger buttons, left to right) are:

- `default` - used to move via dragging the mouse and picking tile-types of tiles in the main tiling
- `select` - used to select groups of tiles in the main tiling for other operations
- `erase` - used to remove tiles from the main tiling
- `place` - used to put down a tile or a sub-tiling

The fifth mode is `paste`, which functions similar to `place` but places the token in the clipboard instead of the picker. This mode is entered via the `paste` button.

## Select operations

A selection-rectangle is made by:

- entering `select` mode
- clicking at one corner of the rectangle
- moving the mouse to the second corner of the rectangle
- clicking again

The selection rectangle is reset by clicking anywhere else. Once the selection rectangle is made, the following operations (in order of trigger-buttons, left to right) are enabled:

- `save` - creates a sub-tiling that can be accessed from the picker and re-used elsewhere
- `delete` - removes all the tiles in the selected zone
- `copy` - sets the clipboard to the selected sub-tiling, for use in `paste` mode
- `cut` - combines `delete` and `copy`