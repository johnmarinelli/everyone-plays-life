var lifePatterns = {
  'Still-Lives': {
    'single-cell': [ [1] ],
  },

  'Methuselahs': {
    'r-pentomino': [ [0, 1, 1],
                     [1, 1, 0],
                     [0, 1, 0] ],
  },

  'Spaceships': {
    'glider': [ [0, 0, 1],
                [1, 0, 1],
                [0, 1, 1] ],

    'heavy spaceship': [ [0, 0, 0, 1, 1, 0, 0],
                         [0, 1, 0, 0, 0, 0, 1],
                         [1, 0, 0, 0, 0, 0, 0],
                         [1, 0, 0, 0, 0, 0, 1],
                         [1, 1, 1, 1, 1, 1, 0] ],
  },

  'Oscillators': {
    'blinker': [ [1, 1, 1] ],

    'pulsar': [ [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
                [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
                [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0] ],

    'square': [ [1, 1, 1],
                [1, 1, 1],
                [1, 1, 1] ],
  }
};

var CAPredefinedShapes = (function(lifePatterns){
  // returns selected shape given a name.
  this.getCurrentSelected = function(category, name) {
    return lifePatterns[category][name];
  };

  // iterates over a given shape.
  // uses: drag & drop hover effect,
  //       drag & drop placement
  this.iterateOverShape = function(shape, cb) {
    var shapeHeight = shape.length,
        i = 0;

    for ( ; i < shapeHeight; ++i) {
      var shapeWidth = shape[i].length,
          j = 0;
      for ( ; j < shapeWidth; ++j) {
        // send the cell at index and its coordinates
        cb(shape[i][j], [i, j]);
      }
    }
  };

  return this;
})(lifePatterns);
