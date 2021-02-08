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
      "code": ".list[2] + String(obj.list[2])"
    },
    {
      "blob": {
        "word": "example",
        "synonyms": [
          "model",
          "exemplar",
          "good example",
          "deterrent example"
        ]
      },
      "item": "good",
      "code": ".synonyms[2].slice(0,4)"
    },
    {
      "blob": {
        "languages": {
            "iso639_1": "es",
            "iso639_2": "spa",
            "name": "Spanish",
            "nativeName": "Español"
        },
        "translations": {
            "de": "Kolumbien",
            "es": "Colombia",
            "fr": "Colombie"
        }
      },
      "item": "Colombie",
      "code": ".translations.fr"
    },
    {
      "blob": {
        "capital": "Bogotá",
        "altSpellings": [
          "CO", 
          "Republic of Colombia", 
          "República de Colombia"
        ],
        "region": "Americas",
        "subregion": "South America",
        "population": 48759958,
        "latlng": [4.0, -72.0],
      },
      "item": -72.0,
      "code": ".latlng[1]"
    },
    {
      "blob": {
        "Two-face": "Joker",
        "Bat man": "Bruce Wayne"
      },
      "item": "Joker",
      "code": "['Two-face']"
    },
    {
      "blob": {
        "1": "abc"
      },
      "item": "B",
      "code": "[1][1].toUpperCase()"
    },
    {
      "blob": {
        "0": "one"
      },
      "item": "1",
      "code": "[0].indexOf('n')"
    },
    {
      "blob": {
        "foo": 21,
        "bar": 13
      },
      "item": 8,
      "code": ".foo - obj.bar"
    },
    {
      "blob": {
        "fun": 4,
        "day": 4
      },
      "item": true,
      "code": ".fun == obj.day"
    },
    {
      "blob": {
        "list": [1,2,4]
      },
      "item": 3,
      "code": ".list.length"
    },
    {
      "blob": {
        "left": [3,2,0],
        "right": [1,2,3]
      },
      "item": "3,2,1,2,3",
      "code": ".left.slice(0,2).concat(obj.right).toString()"
    },
    {
      "blob": {
        "bond": [0,0,14]
      },
      "item": "[0,0,7]",
      "code": ".bond.map(i => i / 2)"
    },
]