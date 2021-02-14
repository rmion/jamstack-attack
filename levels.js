module.exports = [
  {
    "setup": [
      {
        "property": "width",
        "value": "100px"
      },
      {
        "property": "height",
        "value": "50px"
      }
    ],
    "steps": [
      {
        "task": "Make #BOXJR as tall as it is wide",
        "test": {
          "property": "height",
          "value": "100px"
        }
      },
      {
        "task": "Make #BOXJR a circle",
        "test": {
          "property": "border-radius",
          "value": "50%"
        }
      },
    ]
  },
  {
    "setup": [
      {
        "property": "width",
        "value": "80px"
      },
      {
        "property": "height",
        "value": "100px"
      }
    ],
    "steps": [
      {
        "task": "Offset #BOXJR 30px from top edge of #BOXSR",
        "test": {
          "property": "margin-top",
          "value": "30px"
        }
      },
      {
        "task": "Italicize the text inside #BOXJR",
        "test": {
          "property": "font-style",
          "value": "italic"
        }
      },
      {
        "task": "Give #BOXJR a blue background",
        "test": {
          "property": "background-color",
          "value": "blue"
        }
      },
    ]
  }
]