module.exports = [
    {
      "blob": { 
          "list": [
            1,
            2,
            3
          ]
        },
      "item": 33,
      "code": ".list[2].toString() + obj.list[2]",
      "methods": [
        "toString"
      ]
    },
    {
      "blob": {
        "synonyms": [
          "model",
          "exemplar",
          "good example",
          "deterrent example"
        ]
      },
      "item": "good",
      "code": ".synonyms[2].slice(0,4)",
      "methods": [
        "slice"
      ]
    },
    {
      "blob": {
        "translations": {
            "de": "Kolumbien",
            "es": "Colombia"
        }
      },
      "item": 1,
      "code": ".translations.de.length - obj.translations.es.length",
      "methods": [
        "length"
      ]
    },
    {
      "blob": {
        "popln": 48759958,
      },
      "item": 55,
      "code": ".popln.toString().split('').reduce((a,i) => { return a + +i }, 0)",
      "methods": [
        "toString",
        "split",
        "reduce"
      ]
    },
    {
      "blob": {
        "Bat man": "Bruce Wayne"
      },
      "item": "Bruce",
      "code": "['Bat man'].split(' ')[0]",
      "methods": [
        'split'
      ]
    },
    {
      "blob": {
        "1": "abc"
      },
      "item": "B",
      "code": "[1][1].toUpperCase()",
      "methods": [
        "toUpperCase"
      ]
    },
    {
      "blob": {
        "0": "one"
      },
      "item": "1",
      "code": "[0].indexOf('n')",
      "methods": [
        "indexOf"
      ]
    },
    {
      "blob": {
        "foo": 21,
        "bar": 13
      },
      "item": 8,
      "code": ".foo - obj.bar",
      "methods": []
    },
    {
      "blob": {
        "fun": 4,
        "day": 4
      },
      "item": true,
      "code": ".fun == obj.day",
      "methods": []
    },
    {
      "blob": {
        "list": [1,2,4]
      },
      "item": 12,
      "code": ".list.length * list[2]",
      "methods": [
        "length"
      ]
    },
    {
      "blob": {
        "left": [3,2,1],
        "right": [1,2,3]
      },
      "item": "12233",
      "code": ".left.slice(0,2).concat(obj.right).sort().join('')",
      "methods": [
        "slice",
        "concat",
        "sort",
        "join"
      ]
    },
    {
      "blob": {
        "bond": [0,0,14]
      },
      "item": "007",
      "code": ".bond.map(i => i / 2).join('')",
      "methods": [
        "map",
        "join"
      ]
    },
]