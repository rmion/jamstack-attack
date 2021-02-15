module.exports = [
  {
    "target": "boxjr",
    "setup": [
      {
        "el": "boxjr",
        "property": "width",
        "value": "100px"
      },
      {
        "el": "boxjr",
        "property": "height",
        "value": "50px"
      }
    ],
    "steps": [
      {
        "task": "Make #BOXJR as tall as it is wide",
        "test": {
          "el": "boxjr",
          "property": "height",
          "value": "100px"
        }
      },
      {
        "el": "boxjr",
        "task": "Make #BOXJR a circle",
        "test": {
          "el": "boxjr",
          "property": "border-radius",
          "value": "50%"
        }
      },
    ]
  },
  {
    "target": "boxjr",
    "setup": [
      {
        "el": "boxjr",
        "property": "width",
        "value": "80px"
      },
      {
        "el": "boxjr",
        "property": "height",
        "value": "100px"
      }
    ],
    "steps": [
      {
        "task": "Offset #BOXJR 30px from top edge of #BOXSR",
        "test": {
          "el": "boxjr",
          "property": "margin-top",
          "value": "30px"
        }
      },
      {
        "task": "Italicize the text inside #BOXJR",
        "test": {
          "el": "boxjr",
          "property": "font-style",
          "value": "italic"
        }
      },
      {
        "task": "Give #BOXJR a blue background",
        "test": {
          "el": "boxjr",
          "property": "background-color",
          "value": "blue"
        }
      },
    ]
  },
  {
    "target": "boxsr",
    "setup": [
      {
        "el": "boxsr",
        "property": "display",
        "value": "flex"
      },
      {
        "el": "boxjr",
        "property": "width",
        "value": "100px"
      },
      {
        "el": "boxjr",
        "property": "height",
        "value": "50px"
      }
    ],
    "steps": [
      {
        "task": "Position #BOXJR horizontally-centered within #BOXSR",
        "test": {
          "el": "boxsr",
          "property": "justify-content",
          "value": "center"
        }
      },
      {
        "task": "Position #BOXJR vertically-centered within #BOXSR",
        "test": {
          "el": "boxsr",
          "property": "align-items",
          "value": "center"
        }
      }
    ]
  }
]