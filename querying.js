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
      "code": ".list[2] * obj.list.length",
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
    {
      "blob": {
        "devil": [4,5,6]
      },
      "item": "666",
      "code": ".devil.fill(6).join('')",
      "methods": [
        "fill",
        "length",
        "join"
      ]
    },
    {
      "blob": {
        "odds": [8,6,7,5,3,0,9]
      },
      "item": "3,5,7,9",
      "code": ".odds.filter(i => i % 2 == 1).sort()",
      "methods": [
        "filter",
        "sort"
      ]
    },
    {
      "blob": {
        "owned": null
      },
      "item": true,
      "code": ".hasOwnProperty('owned')",
      "methods": [
        "hasOwnProperty"
      ]
    },
    {
      "blob": {
        "where": "you@"
      },
      "item": "@",
      "code": ".where.charAt(obj.where.length - 1)",
      "methods": [
        "charAt",
        "length"
      ]
    },
    {
      "blob": {
        "fruit": "na",
        "times": 3
      },
      "item": "banana",
      "code": ".fruit.repeat(obj.times).replace('n','b')",
      "methods": [
        "repeat",
        "replace"
      ]
    },
    {
      "blob": {
        "go": "race"
      },
      "item": "racecar",
      "code": ".go.concat(obj.go.slice(0,3).split('').reverse().join(''))",
      "methods": [
        "concat",
        "slice",
        "split",
        "reverse",
        "join"
      ]
    },
    {
      "blob": {
        "haha": "color"
      },
      "item": "lol",
      "code": ".haha.substr(1,3).split('').sort().copyWithin(2,0).join('')",
      "methods": [
        "substr",
        "split",
        "sort",
        "copyWithin",
        "join"
      ]
    },
    {
      "blob": {
        "nested": [1,[2,[3,[4,[[5]]]]]],
        "i": 1
      },
      "item": "12345",
      "code": ".nested.flat(obj.nested[obj.i][obj.i][obj.i][obj.i]).join('')",
      "methods": [
        "flat",
        "join"
      ]
    },
    {
      "blob": {
        "list": [1,4,7]
      },
      "item": "123456789",
      "code": ".list.flatMap(x => [x, x + 1, x + 2]).join('')",
      "methods": [
        "flatMap",
        "join"
      ]
    },
    {
      "blob": {
        "trapped": [[[[[4]]]]]
      },
      "item": true,
      "code": ".trapped.flat(4).includes(4)",
      "methods": [
        "flat",
        "includes"
      ]
    },
    {
      "blob": {
        "song": {
          "do": null,
          "re": null,
          "mi": null
        },
        "start": ""
      },
      "item": "do-re-mi",
      "code": ".start + Object.keys(obj.song).join('-')",
      "methods": [
        "Object.keys",
        "join"
      ]
    },
]