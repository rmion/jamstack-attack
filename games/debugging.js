module.exports = [
    {
        language: 'js',
        difficulty: 'easy',
        code:   "function double(n) {\n  return n  n;\n}",
        answer: "function double(n) {\n  return n + n;\n}",
        test:   "Expect double(1) to return 2",
        hints: [
            'Read between the n\'s',
            'To double, must add',
            'Missing plus operator'
        ],
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "function double() {\n  return n + n;\n}",
        answer: "function double(n) {\n  return n + n;\n}",
        test:   "Expect double(1) to return 2",
        hints: [
            'Where\'s it getting n from?',
            'Those parentheses look empty',
            'Missing parameter, n'
        ],
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "function double(n) {\n  n + n;\n}",
        answer: "function double(n) {\n  return n + n;\n}",
        test:   "Expect double(3) to return 6",
        hints: [
            'To come back',
            'It adds, then throws away',
            'Missing return keyword'
        ],
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "define double(n) {\n  return n + n;\n}",
        answer: "function double(n) {\n  return n + n;\n}",
        test:   "Expect double(4) to return 8",
        hints: [
            'What is double?',
            'double isn\'t a function',
            'Replace define with function keyword'
        ],
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "function double(n) \n  return n + n;\n}",
        answer: "function double(n) {\n  return n + n;\n}",
        test:   "Expect double(5) to return 10",
        hints: [
            'Where is the start?',
            'Function body missing a matching set',
            'Missing open curly brace'
        ],
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "function today() {\n  return Date();\n}",
        answer: "function today() {\n  return new Date();\n}",
        test:   "Expect today() to return Date object",
        hints: [
            "Shiny and...",
            "Return...just Date?",
            "Missing new keyword"
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "function today() {\n  return new Date;\n}",
        answer: "function today() {\n  return new Date();\n}",
        test:   "Expect today() to return Date object",
        hints: [
            "Calling all Dates!",
            "Return...a function?",
            "Missing parentheses after Date"
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "function today() {\n  return new date();\n}",
        answer: "function today() {\n  return new Date();\n}",
        test:   "Expect today() to return Date object",
        hints: [
            "Case sensitive",
            "Upper! Not lower!",
            "Date is incorrectly lowercase"
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "function 2day() {\n  return new Date();\n}",
        answer: "function today() {\n  return new Date();\n}",
        test:   "Expect today() to return Date object",
        hints: [
            "You kids and your hip language",
            "Too? To? Two?",
            "Function is misspelled 2day"
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "function today() {\n  returns new Date();\n}",
        answer: "function today() {\n  return new Date();\n}",
        test:   "Expect today() to return Date object",
        hints: [
            "False pluralization",
            "That's a department, not a keyword!",
            "Incorrect 's' after return"
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "function bigger(ab) {\n  return Math.max(a,b);\n}",
        answer: "function bigger(a,b) {\n  return Math.max(a,b);\n}",
        test:   "Expect bigger(1,2) to return 2",
        hints: [
            "Practice your A, B, C's",
            "It separates two things",
            "Missing comma to denote two parameters"
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "function bigger(a,b) {\n  return Math.max(ab);\n}",
        answer: "function bigger(a,b) {\n  return Math.max(a,b);\n}",
        test:   "Expect bigger(2,4) to return 4",
        hints: [
            "Practice your A, B, C's",
            "It separates two things",
            "Missing comma to denote two parameters"
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "function bigger(a,b) {\n  return Math.maximum(a,b);\n}",
        answer: "function bigger(a,b) {\n  return Math.max(a,b);\n}",
        test:   "Expect bigger(5,3) to return 5",
        hints: [
            "Abbreviate it, instead",
            "Mad Max",
            "Method name is max, not maximum"
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "function bigger(a,b) {\n  return math.max(a,b);\n}",
        answer: "function bigger(a,b) {\n  return Math.max(a,b);\n}",
        test:   "Expect bigger(5,8) to return 8",
        hints: [
            "It's kind of a Big Deal",
            "Capitalize it, instead",
            "Must capitalize Math to use it"
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "function bigger(a,b) {\n  Math.max(a,b);\n}",
        answer: "function bigger(a,b) {\n  return Math.max(a,b);\n}",
        test:   "Expect bigger(2,12) to return 12",
        hints: [
            'To come back',
            'It compares, then throws away',
            'Missing return keyword'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "function sayHello() {\n  return \"Hello\';\n}",
        answer: "function sayHello() {\n  return \"Hello\";\n}",
        test:   "Expect sayHello() to return \"Hello\"",
        hints: [
            'The ending is always the same!',
            'Mismatch detected',
            'Incorrect closing quotation after Hello'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "function sayHello() {\n  return Hello\";\n}",
        answer: "function sayHello() {\n  return \"Hello\";\n}",
        test:   "Expect sayHello() to return \"Hello\"",
        hints: [
            'Someone famous once said...',
            'What\'s Hello?',
            'Missing double-quotation mark before Hello'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "function sayHe11o() {\n  return \"Hello\";\n}",
        answer: "function sayHello() {\n  return \"Hello\";\n}",
        test:   "Expect sayHello() to return \"Hello\"",
        hints: [
            'H-E- double hockey stick',
            'We\'re not saying the same thing',
            'function name should use l\'s not 1\'s'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "function sayHello {\n  return \"Hello\";\n}",
        answer: "function sayHello() {\n  return \"Hello\";\n}",
        test:   "Expect sayHello() to return \"Hello\"",
        hints: [
            'How would I call you?!',
            'Every function must have these',
            'Missing parentheses after function name'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "fnuction sayHello() {\n  return \"Hello\";\n}",
        answer: "function sayHello() {\n  return \"Hello\";\n}",
        test:   "Expect sayHello() to return \"Hello\"",
        hints: [
            'Fun times...',
            'First things, first',
            'u and n in function are swapped'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "function loopy(list) {\n  for (i=0; i<list.length; i++) {\n    console.log(list[i))\n  }\n}",
        answer: "function loopy(list) {\n  for (i=0; i<list.length; i++) {\n    console.log(list[i])\n  }\n}",
        test:   "Expect loopy([1,2,3]) to return 1 2 3",
        hints: [
            'Mismatch detected',
            'Start from the end and work backwards',
            'Incorrectly using parentheses, not brackets, to right of i'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "function loopy(list) {\n  for (i==0; i<list.length; i++) {\n    console.log(list[i])\n  }\n}",
        answer: "function loopy(list) {\n  for (i=0; i<list.length; i++) {\n    console.log(list[i])\n  }\n}",
        test:   "Expect loopy([1,2,3]) to return 1 2 3",
        hints: [
            'Under what condition?',
            'Eye on the first i',
            'Use comparison instead of assignment for i'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "function loopy(list) {\n  for (i=0; i<list.length; i++) {\n    console.log([i])\n  }\n}",
        answer: "function loopy(list) {\n  for (i=0; i<list.length; i++) {\n    console.log(list[i])\n  }\n}",
        test:   "Expect loopy([1,2,3]) to return 1 2 3",
        hints: [
            '1, 2, 3...not [0][1][2]!',
            'i is in a cage, all alone',
            'Missing list array before [i]'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "function loopy(list) {\n  for (i=0; i<list.length; i++) {\n    console.log(loopy[i])\n  }\n}",
        answer: "function loopy(list) {\n  for (i=0; i<list.length; i++) {\n    console.log(list[i])\n  }\n}",
        test:   "Expect loopy([1,2,3]) to return 1 2 3",
        hints: [
            'That\'s not an array!',
            'Functions don\'t have i\'s',
            'Access [i] of list, not loopy.'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "function loopy(list) {\n  for (i=1; i<list.length; i++) {\n    console.log(list[i])\n  }\n}",
        answer: "function loopy(list) {\n  for (i=0; i<list.length; i++) {\n    console.log(list[i])\n  }\n}",
        test:   "Expect loopy([1,2,3]) to return 1 2 3",
        hints: [
            'No i left behind',
            'Watch where you start',
            'Initial value of i should be 0, not 1'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "function sum(a,b,c) {\n  return a + b  c;\n}",
        answer: "function sum(a,b,c) {\n  return a + b + c;\n}",
        test:   "Expect sum(1,1,1) to return 3",
        hints: [
            'Fill the gap',
            'Stopped short of c',
            'Missing + between b and c'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "function sum(a,b,c) {\n  return a + b + C;\n}",
        answer: "function sum(a,b,c) {\n  return a + b + c;\n}",
        test:   "Expect sum(2,2,2) to return 6",
        hints: [
            'Can you C it?',
            'Looked for C. Came up empty.',
            'Incorrectly capitalized c'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "function sum(a,b,b) {\n  return a + b + c;\n}",
        answer: "function sum(a,b,c) {\n  return a + b + c;\n}",
        test:   "Expect sum(1,2,3) to return 6",
        hints: [
            'Comes after b',
            'b extra careful',
            'Duplicate b in parameter list'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "function sum(a,b,c) {\n  retrun a + b + c;\n}",
        answer: "function sum(a,b,c) {\n  return a + b + c;\n}",
        test:   "Expect sum(3,1,1) to return 5",
        hints: [
            'rut-ro!',
            'Stopped short of returning',
            'return is misspelled'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "function sum(a,b,c) {\n  return a + b + c;\n  ",
        answer: "function sum(a,b,c) {\n  return a + b + c;\n}",
        test:   "Expect sum(3,2,1) to return 6",
        hints: [
            'It never ends!',
            'What starts, must end',
            'Missing closing function curly brace'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "function each(list) {\n  return list.forEach(i > i);\n}",
        answer: "function each(list) {\n  return list.forEach(i => i);\n}",
        test:   "Expect each(3,2,1) to return 3 2 1",
        hints: [
            'Where\'s the arrow?',
            'Greater than?',
            'Arrow function is missing equal sign'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "function each(list) {\n  return list.fourEach(i => i);\n}",
        answer: "function each(list) {\n  return list.forEach(i => i);\n}",
        test:   "Expect each(1,2,3) to return 1 2 3",
        hints: [
            'Oh, you',
            '4...Each?',
            'Delete u in four'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "function each(list) {\n  return list.foreach(i => i);\n}",
        answer: "function each(list) {\n  return list.forEach(i => i);\n}",
        test:   "Expect each(2,4,6) to return 2 4 6",
        hints: [
            'Camel case',
            'Every second word',
            'e in each must be capital'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "function each(1ist) {\n  return list.forEach(i => i);\n}",
        answer: "function each(list) {\n  return list.forEach(i => i);\n}",
        test:   "Expect each(1,2,3) to return 1 2 3",
        hints: [
            'Sneaky one',
            'Check parameter list',
            'Parameter list should be list, not 1ist'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "function each(list) {\n  return list.Each(i => i);\n}",
        answer: "function each(list) {\n  return list.forEach(i => i);\n}",
        test:   "Expect each(4,4,4) to return 4 4 4",
        hints: [
            'Method, man',
            'After the dot',
            'Method name is forEach, not each'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "function equals(num) {\n  return num === String(num);\n}",
        answer: "function equals(num) {\n  return num == String(num);\n}",
        test:   "Expect equals(3) to return true",
        hints: [
            'One too many',
            'Make triplicates duplicates',
            'Use double-equals instead of triple-equals sign'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "function equals(num) {\n  return num == String(num);\n}",
        answer: "function equals(num) {\n  return num === String(num);\n}",
        test:   "Expect equals(4) to return false",
        hints: [
            'One too few',
            'Make duplicates triplicates',
            'Use triple-equals instead of double-equals sign'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "function equals(num) {\n  return num == 'num;\n}",
        answer: "function equals(num) {\n  return num == num;\n}",
        test:   "Expect equals(5) to return true",
        hints: [
            'Both num should be naked',
            'Kill the stray apostrophe!',
            'Remove the single-quote before the second num'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "function equals(num) {\n  return num === Sting(num);\n}",
        answer: "function equals(num) {\n  return num === String(num);\n}",
        test:   "Expect equals(6) to return true",
        hints: [
            'Call The Police',
            'Grrrrrr',
            'Missing r in String'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "function equals(num) {\n  return num = String(num);\n}",
        answer: "function equals(num) {\n  return num == String(num);\n}",
        test:   "Expect equals(7) to return true",
        hints: [
            'Wrong assignment',
            'Is equal to?',
            'Use double-equals instead of single-equal sign'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "function dataType(data) {\n  return typeof dada;\n}",
        answer: "function dataType(data) {\n  return typeof data;\n}",
        test:   "Expect dataType({}) to return 'object'",
        hints: [
            'Art history',
            'Father, forgive me',
            'Not dada, silly...data!'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "function dataType(data) {\n  return typeof data\';\n}",
        answer: "function dataType(data) {\n  return typeof data;\n}",
        test:   "Expect dataType({}) to return 'object'",
        hints: [
            'Stringing you along',
            'Stop returning strings!',
            'Remove single-quote after data'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "function dataType(data) {\n  return typeof data;\n}",
        answer: "function dataType(data) {\n  return typeof +data;\n}",
        test:   "Expect dataType('5') to return 'number'",
        hints: [
            'One symbol to rule them all',
            'Who\'s your plus-one?',
            'Add a plus sign just left of data'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "function dataType(data) {\n  return typeof data();\n}",
        answer: "function dataType(data) {\n  return typeof new data();\n}",
        test:   "Expect dataType(Date) to return 'object'",
        hints: [
            'Something borrowed, blue, and...',
            'What\'s new?',
            'Missing keyword, new, before data()'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "function dataType(data) {\n  return typ of data;\n}",
        answer: "function dataType(data) {\n  return typeof data;\n}",
        test:   "Expect dataType({}) to return 'object'",
        hints: [
            'Mind the gap',
            'all to get her now',
            'Insert e between typ and of'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "function formalName(f,l) {\n  return `${f}, ${f}`;\n}",
        answer: "function formalName(f,l) {\n  return `${l}, ${f}`;\n}",
        test:   "Expect formalName('Kanye','West') to return 'West, Kanye'",
        hints: [
            'Use all the pieces',
            'Don\'t double the f\'s',
            'First interpolated value should be l, not f'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "function formalName(f,l) {\n  return `${l}, $(f}`;\n}",
        answer: "function formalName(f,l) {\n  return `${l}, ${f}`;\n}",
        test:   "Expect formalName('George','Bush') to return 'Bush, George'",
        hints: [
            'The wall of f',
            'Mismatch detected',
            'Replace parenthesis before f with a curly bracket'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "function formalName(f,l) {\n  return `${l} ${f}`;\n}",
        answer: "function formalName(f,l) {\n  return `${l}, ${f}`;\n}",
        test:   "Expect formalName('Bob','Dole') to return 'Dole, Bob'",
        hints: [
            'Poor grammar',
            'It separates two things',
            'Missing comma between l and f'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "function formalName(f,l) {\n  return '${l}, ${f}`;\n}",
        answer: "function formalName(f,l) {\n  return `${l}, ${f}`;\n}",
        test:   "Expect formalName('Jack','Ryan') to return 'Ryan, Jack'",
        hints: [
            'Wrong tick',
            'Must use correct quote mark',
            'Use two back ticks ` instead of mixture'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "function formalName(f,l) {\n  return `{l}, ${f}`;\n}",
        answer: "function formalName(f,l) {\n  return `${l}, ${f}`;\n}",
        test:   "Expect formalName('Robert','Mion') to return 'Mion, Robert'",
        hints: [
            'Money money money!',
            'One is not like the other',
            'Add a $ to the first interpolation'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "function ternary(bool) {\n  return bowl ? 'this' : 'that';\n}",
        answer: "function ternary(bool) {\n  return bool ? 'this' : 'that';\n}",
        test:   "Expect ternary(false) to return 'that'",
        hints: [
            'Don\'t strike out',
            'Spare me another pun',
            'Not bowl, bool'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "function ternary(bool) {\n  return bool ? 'this' : 'that';\n}",
        answer: "function ternary(bool) {\n  return bool ? this : 'that';\n}",
        test:   "Expect ternary(true) to return Window",
        hints: [
            'Magic keyword',
            'this part shoudn\'t be a string',
            'Remove single-quotes around this'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "function ternary(bool) {\n  return bool ? 'this : 'that';\n}",
        answer: "function ternary(bool) {\n  return bool ? 'this' : 'that';\n}",
        test:   "Expect ternary(true) to return 'this'",
        hints: [
            'this is the hint',
            'this is the next hint',
            'Add single-quote after this'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "function ternary(bool) {\n  return bool ? 'this' ; 'that';\n}",
        answer: "function ternary(bool) {\n  return bool ? 'this' : 'that';\n}",
        test:   "Expect ternary(false) to return 'that'",
        hints: [
            'Look: hint.',
            'Dot over dot, not dot over comma',
            'Wrong colon between this and that'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "function ternary(bool) {\n  return bool : 'this' : 'that';\n}",
        answer: "function ternary(bool) {\n  return bool ? 'this' : 'that';\n}",
        test:   "Expect ternary(true) to return 'this'",
        hints: [
            'Question...everything',
            'First part is a question',
            'First colon should be a question mark'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "function makeArrayFrom(a,b,c) {\n  return [a,b,c};\n}",
        answer: "function makeArrayFrom(a,b,c) {\n  return [a,b,c];\n}",
        test:   "Expect makeArrayFrom(1,2,3) to return [1,2,3]",
        hints: [
            'Not now, curly',
            'Do you c it yet?',
            'Change curly brace after c to square bracket'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "function makeArrayFrom(a,b,c) {\n  return (a,b,c);\n}",
        answer: "function makeArrayFrom(a,b,c) {\n  return Array(a,b,c);\n}",
        test:   "Expect makeArrayFrom(3,2,1) to return [3,2,1]",
        hints: [
            'Use a constructor function',
            'Want array, getting group',
            'Insert the keyword, Array, before (a,b,c)'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "function newArrayFrom(a,b,c) {\n  return [a,b,c];\n}",
        answer: "function makeArrayFrom(a,b,c) {\n  return [a,b,c];\n}",
        test:   "Expect makeArrayFrom(2,2,2) to return [2,2,2]",
        hints: [
            'Happens all the time',
            'Naming things is hard',
            'Function name is incorrect'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "function makeArrayFrom(a,b,c) {\n  return [a.b,c];\n}",
        answer: "function makeArrayFrom(a,b,c) {\n  return [a,b,c];\n}",
        test:   "Expect makeArrayFrom(1,3,5) to return [1,3,5]",
        hints: [
            'Grammatical error',
            'Stopping at a',
            'Change period after a to comma'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "function makeArrayFrom(a,b,c) {\n  return; [a,b,c];\n}",
        answer: "function makeArrayFrom(a,b,c) {\n  return [a,b,c];\n}",
        test:   "Expect makeArrayFrom(2,4,6) to return [2,4,6]",
        hints: [
            'Remove the hurdle',
            'Two semi-colons?',
            'Delete semi-colon after return'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "function greet(name) {\n  return 'Hi, ${name}!`;\n}",
        answer: "function greet(name) {\n  return `Hi, ${name}!`;\n}",
        test:   "Expect greet('John') to return 'Hi, John!'",
        hints: [
            'Mismatch detected',
            'Don\'t quote me on that',
            'Change first quote to a backtick'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "function greet(name) {\n  return `Hi, $(name}!`;\n}",
        answer: "function greet(name) {\n  return `Hi, ${name}!`;\n}",
        test:   "Expect greet('Charles') to return 'Hi, Charles!'",
        hints: [
            'Mismatch',
            'One of them needs the spike',
            'Change parenthesis before name to curly brace'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "function great(name) {\n  return `Hi, ${name}!`;\n}",
        answer: "function greet(name) {\n  return `Hi, ${name}!`;\n}",
        test:   "Expect greet('Jack') to return 'Hi, Jack!'",
        hints: [
            'Good. Swell. Fine!',
            'One letter off',
            'Incorrect function name'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "function greet(name) {\n  return `Hi, ${name}`;\n}",
        answer: "function greet(name) {\n  return `Hi, ${name}!`;\n}",
        test:   "Expect greet('Robert') to return 'Hi, Robert!'",
        hints: [
            'Not excited enough',
            'I can\'t hear you!',
            'Missing exclamation mark'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "function greet() {\n  return `Hi, ${name}!`;\n}",
        answer: "function greet(name) {\n  return `Hi, ${name}!`;\n}",
        test:   "Expect greet('Kate') to return 'Hi, Kate!'",
        hints: [
            'Where\'s name coming from?',
            'Functions need inputs',
            'Missing parameter, name'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "function noteToSelf() {\n  / Some comment\n}",
        answer: "function noteToSelf() {\n  // Some comment\n}",
        test:   "Expect noteToSelf() to return undefined",
        hints: [
            'Divide by?',
            'This is no time for math',
            'Comments start with two slashes, not one'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "function noteToSelf() {\n  \\\\ Some comment\n}",
        answer: "function noteToSelf() {\n  // Some comment\n}",
        test:   "Expect noteToSelf() to return undefined",
        hints: [
            'Wrong way',
            'Up and to the right',
            'Comments start with two forward slashes, not back slashes'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "function noteToSelf() {\n   Some comment\n}",
        answer: "function noteToSelf() {\n  // Some comment\n}",
        test:   "Expect noteToSelf() to return undefined",
        hints: [
            'Forgetting something?',
            'Error: no idea what Some is',
            'Comments start with two forward slashes'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "function notetoSelf() {\n  // Some comment\n}",
        answer: "function noteToSelf() {\n  // Some comment\n}",
        test:   "Expect noteToSelf() to return undefined",
        hints: [
            'Middle child',
            'Camel case',
            'Function name needs capital T'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "function noteToSelf() {\n  */ Some comment\n}",
        answer: "function noteToSelf() {\n  // Some comment\n}",
        test:   "Expect noteToSelf() to return undefined",
        hints: [
            'Wish upon a star',
            'Single-line comment, not multi-line',
            'Change asterisk to forward slash'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "function parrot(number) {\n  return () > number;\n}",
        answer: "function parrot(number) {\n  return () => number;\n}",
        test:   "Expect parrot(1)() to return 1",
        hints: [
            'Greater than?',
            'That\'s not quite an arrow',
            'Missing equals sign before greater-than sign'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "function parrot(number) {\n  return {} => number;\n}",
        answer: "function parrot(number) {\n  return () => number;\n}",
        test:   "Expect parrot(2)() to return 2",
        hints: [
            'Wrong container',
            'Looks like you\'re returning an object?',
            'Replace curly braces with parentheses'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "function parrot(number) {\n  return () <= number;\n}",
        answer: "function parrot(number) {\n  return () => number;\n}",
        test:   "Expect parrot(3)() to return 3",
        hints: [
            'Wrong direction',
            'Left-to-right',
            'Arrow function points the wrong way'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "function parrot(number) {\n  return (number) => number;\n}",
        answer: "function parrot(number) {\n  return () => number;\n}",
        test:   "Expect parrot(4)() to return 4",
        hints: [
            'Closure, baby!',
            'It already has number',
            'Remove number from second parentheses'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "function parrot(number) {\n  return  => number;\n}",
        answer: "function parrot(number) {\n  return () => number;\n}",
        test:   "Expect parrot(5)() to return 5",
        hints: [
            'Left of the arrow',
            'Key ingredient in an arrow function',
            'Add a pair of parentheses after return'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "function IdPlease(id) {\n  return document.getElementByID(id);\n}",
        answer: "function IdPlease(id) {\n  return document.getElementById(id);\n}",
        test:   "Expect IdPlease('neo') to return HTMLElement",
        hints: [
            'Big D little d',
            'First letter capital, second lowercase',
            'd in Id should be lowercase'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "function IdPlease(id) {\n  return document.getElementsById(id);\n}",
        answer: "function IdPlease(id) {\n  return document.getElementById(id);\n}",
        test:   "Expect IdPlease('cher') to return HTMLElement",
        hints: [
            'More than we were expecting',
            'We only want one',
            'Element should be singular'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "function IdPlease(id) {\n  return document.getElementById('id);\n}",
        answer: "function IdPlease(id) {\n  return document.getElementById(id);\n}",
        test:   "Expect IdPlease('prince') to return HTMLElement",
        hints: [
            'Stringing you along',
            'Literally...id',
            'Remove single quote before id'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "function IdPlease(id) {\n  return document.getElementFromId(id);\n}",
        answer: "function IdPlease(id) {\n  return document.getElementById(id);\n}",
        test:   "Expect IdPlease('bono') to return HTMLElement",
        hints: [
            'Opposite of Hello',
            'Four words. Third word. Two letters.',
            'Change FromId to ById'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "function IdPlease(id) {\n  return window.getElementById(id);\n}",
        answer: "function IdPlease(id) {\n  return document.getElementById(id);\n}",
        test:   "Expect IdPlease('sting') to return HTMLElement",
        hints: [
            'Look deeper into the window',
            'Synonymous with page',
            'Change window to document'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "function newTail(list,item) {\n  return list.pass(item);\n}",
        answer: "function newTail(list,item) {\n  return list.push(item);\n}",
        test:   "Expect newTail([1,2],3) to return 3",
        hints: [
            'Bad pass',
            'Wrong method name',
            'Change pass to push'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "function newTail(list,item) {\n  retun list.push(item);\n}",
        answer: "function newTail(list,item) {\n  return list.push(item);\n}",
        test:   "Expect newTail([2,4],6) to return 3",
        hints: [
            'That\'s not a word, silly',
            'Send it back',
            'Change rExpect etun to return'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "function newTail(list,item) {\n  return list.tail(item);\n}",
        answer: "function newTail(list,item) {\n  return list.push(item);\n}",
        test:   "Expect newTail([3,4],5) to return 3",
        hints: [
            'Use your head',
            'Wrong method name',
            'Change tail to push'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "function newTail(list,item) {\n  return list.push(item]);\n}",
        answer: "function newTail(list,item) {\n  return list.push(item);\n}",
        test:   "Expect newTail([3,5],7) to return 3",
        hints: [
            'Hard right wall',
            'Start at the end',
            'Remove square bracket after item'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "function newTai(list,item) {\n  return list.push(item);\n}",
        answer: "function newTail(list,item) {\n  return list.push(item);\n}",
        test:   "Expect newTail([3,2],1) to return 3",
        hints: [
            'Use your head',
            'Naming is important',
            'Add an l to Tail'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "function chopTail(list) {\n  return list.poop();\n}",
        answer: "function chopTail(list) {\n  return list.pop();\n}",
        test:   "Expect chopTail([1,2,3]) to return 3",
        hints: [
            'Toilet humor',
            'Potty mouth',
            'Change poop to pop'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "function chopTail(list) {\n  return list.pop;\n}",
        answer: "function chopTail(list) {\n  return list.pop();\n}",
        test:   "Expect chopTail([3,2,1]) to return 1",
        hints: [
            'Don\'t return the function',
            'Work your way backwards',
            'Add parentheses after pop'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "function chopTail(list) {\n  return list,pop();\n}",
        answer: "function chopTail(list) {\n  return list.pop();\n}",
        test:   "Expect chopTail([2,4,6]) to return 6",
        hints: [
            'list and pop?',
            'Dot...dot...dot',
            'Change comma after list to period'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "function chopTail() {\n  return list.pop();\n}",
        answer: "function chopTail(list) {\n  return list.pop();\n}",
        test:   "Expect chopTail([6,6,6]) to return 6",
        hints: [
            'Beware the void',
            'Nothing in...but something out?',
            'Missing parameter, list'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "function chopTail(list) {\n  return list.pop(1);\n}",
        answer: "function chopTail(list) {\n  return list.pop();\n}",
        test:   "Expect chopTail([9,1,1]) to return 1",
        hints: [
            'Does it need the argument?',
            'Read between the curved lines',
            'Remove 1 from parentheses'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "function chopHead(list) {\n  return list.shift(1);\n}",
        answer: "function chopHead(list) {\n  return list.shift();\n}",
        test:   "Expect chopHead([1,2,3]) to return 1",
        hints: [
            'Does it need the argument?',
            'Read between the curved lines',
            'Remove 1 from parentheses'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "function chopHead(list) {\n  return list.shit();\n}",
        answer: "function chopHead(list) {\n  return list.shift();\n}",
        test:   "Expect chopHead([2,2,2]) to return 2",
        hints: [
            'Toilet humor',
            'Potty mouth',
            'Change shit to shift'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "function chopHead(list) {\n  return list.pop();\n}",
        answer: "function chopHead(list) {\n  return list.shift();\n}",
        test:   "Expect chopHead([2,3,4]) to return 2",
        hints: [
            'Other end',
            'Wrong method',
            'Change pop to shift'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "function chopHead(list) {\n  return list.unshift();\n}",
        answer: "function chopHead(list) {\n  return list.shift();\n}",
        test:   "Expect chopHead([3,2,1]) to return 3",
        hints: [
            'Other end',
            'Wrong method',
            'Change unshift to shift'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "function chopHead(list) {\n  return list.shift;\n}",
        answer: "function chopHead(list) {\n  return list.shift();\n}",
        test:   "Expect chopHead([9,1,1]) to return 9",
        hints: [
            'Why won\'t you call?',
            'Return the action, not the function',
            'Missing parentheses after shift'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "function newHead(list,item) {\n  return list.unshift();\n}",
        answer: "function newHead(list,item) {\n  return list.unshift(item);\n}",
        test:   "Expect newHead([1,2],3) to return 3",
        hints: [
            'Fill the void',
            'Someone stole an item',
            'Missing argument, item, inside method call'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "function newHead(list,item) {\n  return list.unshift(list);\n}",
        answer: "function newHead(list,item) {\n  return list.unshift(item);\n}",
        test:   "Expect newHead([3,2],1) to return 3",
        hints: [
            'Add list to list?',
            'Read between the curly lines',
            'Pass item to unshift, not list'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "function newHead(list,item) {\n  return list.shift(item);\n}",
        answer: "function newHead(list,item) {\n  return list.unshift(item);\n}",
        test:   "Expect newHead([7,3],7) to return 3",
        hints: [
            'Shift, left',
            'un-acceptable',
            'Change method name to unshift'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "function newHead(list,item) {\n  return lift.unshift(item);\n}",
        answer: "function newHead(list,item) {\n  return list.unshift(item);\n}",
        test:   "Expect newHead([4,1],4) to return 3",
        hints: [
            'Minor spelling error',
            'For f\'s sake',
            'Change lift to list'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "function manMade(sex) {\n  return {\n    gender= sex\n  }\n}",
        answer: "function manMade(sex) {\n  return {\n    gender: sex\n  }\n}",
        test:   "Expect manMade('male') to return Object",
        hints: [
            'Wrong assignment',
            'No place for equality',
            'Change equal sign to colon'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "function coercion(bool) {\n  return bool;\n}",
        answer: "function coercion(bool) {\n  return +bool;\n}",
        test:   "Expect coercion(true) to return 1",
        hints: [
            'Unary, baby!',
            'Need number, not boolean',
            'Insert plus sign before bool'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "function coercion(name) {\n  return name;\n}",
        answer: "function coercion(name) {\n  return !name;\n}",
        test:   "Expect coercion('Robert') to return false",
        hints: [
            'Bang bang!',
            'Convert to truthy/falsey',
            'Insert exclamation mark before name'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "function blockScope(num) {\n  for (var i = 0; i < num; i++) {\n    setTimeout(() => console.log(i), 1);\n  }\n}",
        answer: "function blockScope(num) {\n  for (let i = 0; i < num; i++) {\n    setTimeout(() => console.log(i), 1);\n  }\n}",
        test:   "Expect blockScope(3) to return 0 1 2",
        hints: [
            'Right now it logs 3 3 3',
            'Wrong variable scoping',
            'Change var to let'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "function prefix(num) {\n  return ++num++;\n}",
        answer: "function prefix(num) {\n  return ++num;\n}",
        test:   "Expect prefix(3) to return 4",
        hints: [
            'Asymmetry',
            'Front-loaded',
            'Delete both pluses after num'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "function postfix(num) {\n  return ++num++;\n}",
        answer: "function postfix(num) {\n  return num++;\n}",
        test:   "Expect postfix(5) to return 5",
        hints: [
            'Asymmetry',
            'Back-loaded',
            'Delete both pluses before num'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "function rest(args) {\n  return typeof args;\n}",
        answer: "function rest(...args) {\n  return typeof args;\n}",
        test:   "Expect rest(1,2,3) to return 'object'",
        hints: [
            '...',
            'Spread out. Rest up.',
            'Insert three dots before args parameter'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "function tooSoon(max) {\n  for (let i=0;i<max;i++) {\n    if (i === 3) break;\n    console.log(i);\n  }\n}",
        answer: "function tooSoon(max) {\n  for (let i=0;i<max;i++) {\n    if (i === 3) continue;\n    console.log(i);\n  }\n}",
        test:   "Expect tooSoon(5) to return 1 2 4",
        hints: [
            'Don\'t exit, skip',
            'Synonym: keep going',
            'Change break to continue'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "function iife(num) {\n  return (() => num));\n}",
        answer: "function iife(num) {\n  return (() => num)();\n}",
        test:   "Expect iife(5) to return 'number'",
        hints: [
            'Feeling iffy?',
            'Missing parenthesis, but where?',
            'Insert opening parenthesis before last closing parenthesis'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "function spread(name) {\n  return [name];\n}",
        answer: "function spread(name) {\n  return [...name];\n}",
        test:   "Expect spread('Robert') to return ['R','o','b','e','r','t']",
        hints: [
            '...',
            'Roger that. Spread out.',
            'Insert three dots before second occurrence of name'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "function factorial(x) {\n  return x <= 0 ? 1 : x * factorial(x + 1);\n}",
        answer: "function factorial(x) {\n  return x <= 0 ? 1 : x * factorial(x - 1);\n}",
        test:   "Expect factorial(5) to return 120",
        hints: [
            'Memory leak detected',
            'Smaller each time, not larger',
            'Change plus sign to minus sign'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "function factorial(x) {\n  return x <= 0 ? 0 : x * factorial(x - 1);\n}",
        answer: "function factorial(x) {\n  return x <= 0 ? 1 : x * factorial(x - 1);\n}",
        test:   "Expect factorial(4) to return 24",
        hints: [
            'Check the condition',
            'Always gonna be 0',
            'Change 0 after question mark to 1'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "function factorial(x) {\n  return x <= 0 ? 1 : x + factorial(x - 1);\n}",
        answer: "function factorial(x) {\n  return x <= 0 ? 1 : x * factorial(x - 1);\n}",
        test:   "Expect factorial(6) to return 720",
        hints: [
            'Wrong operator',
            'Incorrect addition',
            'Change plus sign to multiply'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "function factorial(x) {\n  return x <= 0 ? 1 : x * function(x - 1);\n}",
        answer: "function factorial(x) {\n  return x <= 0 ? 1 : x * factorial(x - 1);\n}",
        test:   "Expect factorial(3) to return 6",
        hints: [
            'Check the label',
            'Wrong name',
            'Change second function to factorial'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "function factorial(x) {\n  return x < 0 ? 1 : x * factorial(x - 1);\n}",
        answer: "function factorial(x) {\n  return x <= 0 ? 1 : x * factorial(x - 1);\n}",
        test:   "Expect factorial(3) to return 6",
        hints: [
            'The smallest detail',
            'Check the condition',
            'Change less-than sign to less-than-or-equal-to sign'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "function doubleNegative(value) {\n  return !value;\n}",
        answer: "function doubleNegative(value) {\n  return !!value;\n}",
        test:   "Expect doubleNegative('Robert') to return true",
        hints: [
            'True or false',
            'Negate the negation',
            'Insert one more exclamation mark before value'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "function charAt(str, index) {\n  return str index];\n}",
        answer: "function charAt(str, index) {\n  return str[index];\n}",
        test:   "Expect charAt('Bus',1) to return 'u'",
        hints: [
            'Fill the gap',
            'Be the match-maker',
            'Insert open square bracket between str and index'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "function charAt(str, index) {\n  return str[];\n}",
        answer: "function charAt(str, index) {\n  return str[index];\n}",
        test:   "Expect charAt('Car',1) to return 'a'",
        hints: [
            'Fill the cage',
            'One of two inputs not used',
            'Add parameter index between the square brackets'
        ]
    },
    {
        language: 'html',
        difficulty: 'easy',
        code:   "<p>Hello, world!<p>",
        answer: "<p>Hello, world!</p>",
        test:   "One paragraph element",
        hints: [
            'Closing time',
            'Open, then open again?',
            'Insert / before second p'
        ]
    },
    {
        language: 'html',
        difficulty: 'easy',
        code:   "<h1>Hello, world!</p>",
        answer: "<h1>Hello, world!</h1>",
        test:   "One level-1 heading element",
        hints: [
            'Closing time',
            'Mismatch detected',
            'Change closing p tag to h1 tag'
        ]
    },
    {
        language: 'html',
        difficulty: 'easy',
        code:   "<p>Hello, world!/p>",
        answer: "<p>Hello, world!</p>",
        test:   "One paragraph element",
        hints: [
            'Less than',
            'Start from the end',
            'Insert less-than sign to left of closing p tag'
        ]
    },
    {
        language: 'html',
        difficulty: 'easy',
        code:   "<p<Hello, world!</p>",
        answer: "<p>Hello, world!</p>",
        test:   "One paragraph element",
        hints: [
            'Wonky error',
            'The opening tag never ends!',
            'Fix opening p tag so it ends with >'
        ]
    },
    {
        language: 'html',
        difficulty: 'easy',
        code:   "</p>Hello, world!</p>",
        answer: "<p>Hello, world!</p>",
        test:   "One paragraph element",
        hints: [
            'One slash is enough',
            'Two closing tags?',
            'Remove / from open p tag'
        ]
    },
    {
        language: 'html',
        difficulty: 'hard',
        code:   "<img src='fun.jpg' alt='' >",
        answer: "<img src='fun.jpg' alt='' />",
        test:   "Valid image element",
        hints: [
            'Self-closing tag',
            'Start from the end',
            'Add / just before the closing >'
        ]
    },
    {
        language: 'html',
        difficulty: 'hard',
        code:   "<img src='horse.jpg' title='Horse' >",
        answer: "<img src='horse.jpg' alt='Horse' />",
        test:   "Valid image element with alternative text",
        hints: [
            'Second attribute name',
            'Use the \'alt\'ernative',
            'Change title attribute to alt'
        ]
    },
    {
        language: 'html',
        difficulty: 'normal',
        code:   "<p><copy>Copyright 2020</small></p>",
        answer: "<p><small>Copyright 2020</small></p>",
        test:   "Paragraph with valid legal copy markup",
        hints: [
            'The small things in life',
            'Copy that',
            'Change copy to match small'
        ]
    },
    {
        language: 'html',
        difficulty: 'normal',
        code:   "<ul>\n  <li>List item<il\\>\n</ul>",
        answer: "<ul>\n  <li>List item</li>\n</ul>",
        test:   "Unordered list with one list item",
        hints: [
            'Wrong way, partner',
            'Flip-flop',
            'Change il to li'
        ]
    },
    {
        language: 'html',
        difficulty: 'normal',
        code:   "<ul>\n  <li>List item</li>\n</ol>",
        answer: "<ul>\n  <li>List item</li>\n</ul>",
        test:   "Unordered list with one list item",
        hints: [
            'A E I O or U',
            'Unexpected ending',
            'Change ol to ul'
        ]
    },
    {
        language: 'html',
        difficulty: 'hard',
        code:   "<dl>\n  <dt>Term</dt>\n  <dd>Description</dt>\n</dl>",
        answer: "<dl>\n  <dt>Term</dt>\n  <dd>Description</dd>\n</dl>",
        test:   "Definition list with one Term-Description pair",
        hints: [
            'Inspect the d\'s',
            'Find the mismatch',
            'Change third dt to dd'
        ]
    },
    {
        language: 'html',
        difficulty: 'hard',
        code:   "<dl>\n  <dt/>Term</dt>\n  <dd>Description</dd>\n</dl>",
        answer: "<dl>\n  <dt>Term</dt>\n  <dd>Description</dt>\n</dl>",
        test:   "Definition list with one Term-Description pair",
        hints: [
            'Inspect the d\'s',
            'Odd-looking opening tag',
            'Delete / after first dt'
        ]
    },
    {
        language: 'html',
        difficulty: 'normal',
        code:   "<h1>\n  Heading text here\n</hl>",
        answer: "<h1>\n  Heading text here\n</h1>",
        test:   "Level-1 heading",
        hints: [
            'That\'s not a list',
            'Start at the end',
            'Change l in closing tag to 1'
        ]
    },
    {
        language: 'html',
        difficulty: 'hard',
        code:   "<img src='fun.jpg' alt='decoration' />",
        answer: "<img src='fun.jpg' alt='' />",
        test:   "Valid decorative image element",
        hints: [
            'This one is about accessibility',
            'Fix the alt attribute',
            'Remove decoration from between the quotes'
        ]
    },
    {
        language: 'html',
        difficulty: 'normal',
        code:   "<a link='http://google.com'>Google</a>",
        answer: "<a href='http://google.com'>Google</a>",
        test:   "Hyperlink to Google",
        hints: [
            'Missing link',
            'Wrong attribute name',
            'Change link to href'
        ]
    },
    {
        language: 'html',
        difficulty: 'normal',
        code:   "<img src='fun.jpg' with='200' />",
        answer: "<img src='fun.jpg' width='200' />",
        test:   "200 pixel wide image",
        hints: [
            'Misspelling',
            'with and hite?',
            'Add d to change with to width'
        ]
    },
    {
        language: 'html',
        difficulty: 'normal',
        code:   "<a href='about'>About us</a>\n  ...\n<h2 id='about'>About us</h2>",
        answer: "<a href='#about'>About us</a>\n  ...\n<h2 id='about'>About us</h2>",
        test:   "Link to same-page element",
        hints: [
            'Think ID in CSS',
            'Hashtag',
            'Add # before about'
        ]
    },
    {
        language: 'html',
        difficulty: 'easy',
        code:   "<input kind='text' />",
        answer: "<input type='text' />",
        test:   "Text input field",
        hints: [
            'Need thesaurus',
            'Another 4-letter word',
            'Change kind to type'
        ]
    },
    {
        language: 'html',
        difficulty: 'hard',
        code:   "<label for='name'>Name</label>\n<input name='name' />",
        answer: "<label for='name'>Name</label>\n<input id='name' />",
        test:   "Label and it\'s associated input",
        hints: [
            '3 of 4',
            'One name is wrong',
            'Change name attribute to id'
        ]
    },
    {
        language: 'html',
        difficulty: 'normal',
        code:   "<button id='primary'>Refresh</button>",
        answer: "<button class='primary'>Refresh</button>",
        test:   "One of several primary buttons",
        hints: [
            'Hmm...one of several?',
            'An id is unique',
            'Change id attribute to class'
        ]
    },
    {
        language: 'html',
        difficulty: 'easy',
        code:   "<head>\n  <title>Fix a function!</title>\n</body>",
        answer: "<head>\n  <title>Fix a function!</title>\n</head>",
        test:   "Add a title to the document",
        hints: [
            'Start and stop',
            'Use your head',
            'Change closing tag to head'
        ]
    },
    {
        language: 'html',
        difficulty: 'easy',
        code:   "<br/>",
        answer: "<hr/>",
        test:   "Add a thematic break between paragraph-level elements.",
        hints: [
            'A.k.a. horizontal rule',
            'Make it an acronym',
            'Change br to hr'
        ]
    },
    {
        language: 'html',
        difficulty: 'easy',
        code:   "<span lang='en'>\n  Hello, world!\n</swan>",
        answer: "<span lang='en'>\n  Hello, world!\n</span>",
        test:   "Add a generic inline container for phrasing content",
        hints: [
            'Swan song',
            'Matching pairs required',
            'Change closing tag to span'
        ]
    },
    {
        language: 'html',
        difficulty: 'easy',
        code:   "<p>\n  E=MC<sup>2</sub>\n</p>",
        answer: "<p>\n  E=MC<sup>2</sup>\n</p>",
        test:   "Specify inline text which is to be displayed as superscript",
        hints: [
            'Sub, dogg?',
            'Retire the sub',
            'Change closing sub to sup'
        ]
    },
    {
        language: 'html',
        difficulty: 'easy',
        code:   "<h1>Hello<h1>",
        answer: "<h1>Hello</h1>",
        test:   "Level-1 heading element with text, Hello",
        hints: [
            'Slash',
            'Start from the right',
            'Insert / before second h1 to properly close tag'
        ]
    },
    {
        language: 'html',
        difficulty: 'easy',
        code:   "<h2>Section title</h1>",
        answer: "<h2>Section title</h2>",
        test:   "Level-2 heading element",
        hints: [
            'Mismatch detected',
            'Open and closed case',
            'Change h1 to h2'
        ]
    },
    {
        language: 'html',
        difficulty: 'easy',
        code:   "<para>Informative text</p>",
        answer: "<p>Informative text</p>",
        test:   "Paragraph element with text",
        hints: [
            'Mismatch detected',
            'Wrong tag name',
            'Change para to p'
        ]
    },
    {
        language: 'html',
        difficulty: 'easy',
        code:   "<|--\n  <p>Won't appear</p>\n-->",
        answer: "<!--\n  <p>Won't appear</p>\n-->",
        test:   "Commented code",
        hints: [
            'Misplaced pipe',
            'Upside-down i',
            'Change pipe | character to exclamation mark !'
        ]
    },
    {
        language: 'html',
        difficulty: 'normal',
        code:   "<div>\n  <h1>Page title</h1>\n  <p>Informative text</p>\n</main>",
        answer: "<main>\n  <h1>Page title</h1>\n  <p>Informative text</p>\n</main>",
        test:   "An h1 and p inside a semantic structuring element: main",
        hints: [
            'No generic tags allowed',
            'Mismatch detected',
            'Change div to main'
        ]
    },
    {
        language: 'html',
        difficulty: 'normal',
        code:   "<img href='cat.jpg' alt='cat' />",
        answer: "<img src='cat.jpg' alt='cat' />",
        test:   "A photo of a cat",
        hints: [
            'That attribute is for links, silly',
            'Broken image detected',
            'Change href to src'
        ]
    },
    {
        language: 'html',
        difficulty: 'normal',
        code:   "<a href='#about'>About us</a>\n  ...\n<h2 title='about'>About us</h2>",
        answer: "<a href='#about'>About us</a>\n  ...\n<h2 id='about'>About us</h2>",
        test:   "Link to same-page element",
        hints: [
            'Incorrect attribute',
            'Unique...',
            'Change name from title to id'
        ]
    },
    {
        language: 'html',
        difficulty: 'hard',
        code:   "<p>\n  <a target='blank' href='https://rmion.com'>Portfolio</a>\n</p>",
        answer: "<p>\n  <a target='_blank' href='https://rmion.com'>Portfolio</a>\n</p>",
        test:   "Link opens in new tab",
        hints: [
            'blank check',
            'We\'re flatlining!',
            'Insert an underscore before blank'
        ]
    },
    {
        language: 'html',
        difficulty: 'easy',
        code:   "<ol>\n  <li>milk</li>\n  <li>cheese</li>\n</ul>",
        answer: "<ul>\n  <li>milk</li>\n  <li>cheese</li>\n</ul>",
        test:   "Bullet-point style list of groceries",
        hints: [
            'What kind of list?',
            'Just groceries, not instructions',
            'Change ol to ul'
        ]
    },
    {
        language: 'html',
        difficulty: 'easy',
        code:   "<ol>\n  <li>Do this first</li>\n  <li>And this second</li>\n</ohl>",
        answer: "<ol>\n  <li>Do this first</li>\n  <li>And this second</li>\n</ol>",
        test:   "Numbered list of instructions",
        hints: [
            'What kind of list?',
            'Instructions must be followed in order',
            'Change ohl to ol'
        ]
    },
    {
        language: 'html',
        difficulty: 'easy',
        code:   "<input type='text' >",
        answer: "<input type='text' />",
        test:   "Text input field",
        hints: [
            'These are self-closing',
            'Fill the space at the end',
            'Insert / just before close of tag'
        ]
    },
    {
        language: 'html',
        difficulty: 'easy',
        code:   "<imput type='text' />",
        answer: "<input type='text' />",
        test:   "Text input field",
        hints: [
            'That\'s not a valid tag, silly',
            'Spelling error',
            'Change m to n in input'
        ]
    },
    {
        language: 'html',
        difficulty: 'hard',
        code:   "<form submit='/process.php'>\n  <input type='text'/>\n</form>",
        answer: "<form action='/process.php'>\n  <input type='text'/>\n</form>",
        test:   "Form element that submits data",
        hints: [
            'Think Hollywood',
            'Lights...camera...!',
            'Change submit to action'
        ]
    },
    {
        language: 'html',
        difficulty: 'hard',
        code:   "<form action='/process.php'>\n  <input type='text'/>\n  <button type='button'>Submit</button>\n</form>",
        answer: "<form action='/process.php'>\n  <input type='text'/>\n  <button type='submit'>Submit</button>\n</form>",
        test:   "Form element with button that submits data",
        hints: [
            'Wrong type',
            'Match the button label with it\'s type',
            'Change button\'s type attribute from button to submit'
        ]
    },
    {
        language: 'html',
        difficulty: 'normal',
        code:   "<input type='email' retired />",
        answer: "<input type='email' required />",
        test:   "Required form field of type email",
        hints: [
            'Seems odd for a form field to be retired',
            'What rhymes with retired?',
            'Change retired to required'
        ]
    },
    {
        language: 'html',
        difficulty: 'hard',
        code:   "<label for='red'>\n  <input type='radio' id='red' title='color'>Red\n</label>",
        answer: "<label for='red'>\n  <input type='radio' id='red' name='color'>Red\n</label>",
        test:   "Radio button that's part of related color group",
        hints: [
            'Fourth of four attribute names',
            'Incorrect attribute title',
            'Change title to name'
        ]
    },
    {
        language: 'html',
        difficulty: 'hard',
        code:   "<label for='yes'>\n  <input type='radio' id='yes' name='on-or-off'>Yes\n</label>",
        answer: "<label for='yes'>\n  <input type='checkbox' id='yes' name='on-or-off'>Yes\n</label>",
        test:   "Checkbox that's part of related choose group",
        hints: [
            'Wrong type',
            'Can select many',
            'Change radio type to checkbox'
        ]
    },
    {
        language: 'html',
        difficulty: 'hard',
        code:   "<input type='radio' id='happy' name='mood' clicked />",
        answer: "<input type='radio' id='happy' name='mood' checked />",
        test:   "Radio button that is checked by default",
        hints: [
            '...lick...heck...',
            'Start from the end',
            'Change clicked to checked'
        ]
    },
    {
        language: 'html',
        difficulty: 'easy',
        code:   "<|doctype html>\n  <html>\n  <h1>This page is valid!</h1>\n</html>",
        answer: "<!doctype html>\n  <html>\n  <h1>This page is valid!</h1>\n</html>",
        test:   "Valid HTML5 document",
        hints: [
            'Plumber called: lose the pipe',
            'Second character',
            'Change pipe | to exclamation mark !'
        ]
    },
    {
        language: 'html',
        difficulty: 'hard',
        code:   "<link href='https://fonts.googleapis.com/css2?family-Roboto' rel='stylesheet'>",
        answer: "<link href='https://fonts.googleapis.com/css2?family=Roboto' rel='stylesheet'>",
        test:   "Import Google Font family Roboto",
        hints: [
            'Ditch the dash',
            'Need symbol with stacked horizontal bars',
            'Change dash after family to equal sign'
        ]
    },
    {
        language: 'html',
        difficulty: 'hard',
        code:   "<link href='https://fonts.googleapis.com/css2/family=Roboto' rel='stylesheet'>",
        answer: "<link href='https://fonts.googleapis.com/css2?family=Roboto' rel='stylesheet'>",
        test:   "Import Google Font family Roboto",
        hints: [
            'Question everything',
            'family isn\'t a folder. It\'s a query',
            'Change / after css2 two ?'
        ]
    },
    {
        language: 'html',
        difficulty: 'normal',
        code:   "<meta href='https://fonts.googleapis.com/css2?family=Roboto' rel='stylesheet'>",
        answer: "<link href='https://fonts.googleapis.com/css2?family=Roboto' rel='stylesheet'>",
        test:   "Import Google Font family Roboto",
        hints: [
            'Missing link',
            'That\'s so meta',
            'Change meta to link'
        ]
    },
    {
        language: 'html',
        difficulty: 'normal',
        code:   "<link src='https://fonts.googleapis.com/css2?family=Roboto' rel='stylesheet'>",
        answer: "<link href='https://fonts.googleapis.com/css2?family=Roboto' rel='stylesheet'>",
        test:   "Import Google Font family Roboto",
        hints: [
            'Not at image, but a link',
            'Hypertext Reference, not Source',
            'Change src to href'
        ]
    },
    {
        language: 'css',
        difficulty: 'easy',
        code:   "p {\n  font-size: 1em;\n}",
        answer: "p {\n  font-size: 2em;\n}",
        test:   "Make all paragraphs two times the size of the current font",
        hints: [
            'Double it!',
            '1 + 1 = ...',
            'Change 1 to 2'
        ]
    },
    {
        language: 'css',
        difficulty: 'easy',
        code:   "img {\n  max-width: 100vh;\n}",
        answer: "img {\n  max-width: 100vw;\n}",
        test:   "All images cannot exceed 100% of the viewport width",
        hints: [
            'Wrong unit',
            'Start from the end',
            'Change vh to vw'
        ]
    },
    {
        language: 'css',
        difficulty: 'normal',
        code:   "h1 > p {\n  color: black;\n}",
        answer: "h1 + p {\n  color: black;\n}",
        test:   "Make all paragraphs placed immediately after a level-1 heading black",
        hints: [
            'Greater than?',
            'More like...addition',
            'Change > to +'
        ]
    },
    {
        language: 'css',
        difficulty: 'easy',
        code:   ".unique {\n  color: #987789;\n}",
        answer: "#unique {\n  color: #987789;\n}",
        test:   "Make the element with id 'unique' warm gray",
        hints: [
            'No class',
            'Hashtag',
            'Change . before unique to #'
        ]
    },
    {
        language: 'css',
        difficulty: 'easy',
        code:   "h2 {\n  font-weight: normal;\n}",
        answer: "h3 {\n  font-weight: normal;\n}",
        test:   "Make all level-3 headings normal font weight",
        hints: [
            'Find the number',
            'Level up!',
            'Change h2 to h3'
        ]
    },
    {
        language: 'css',
        difficulty: 'hard',
        code:   "ul  {\n  margin-left: 0;\n}",
        answer: "ul li {\n  margin-left: 0;\n}",
        test:   "Remove left margin from all list items inside all unordered lists",
        hints: [
            'Currently selecting the parent',
            'Missing portion of selector',
            'Insert li after ul'
        ]
    },
    {
        language: 'css',
        difficulty: 'easy',
        code:   "dt  {\n  margin-left: 0;\n}",
        answer: "dd {\n  margin-left: 0;\n}",
        test:   "Remove left margin from all definition descriptors",
        hints: [
            'Wrong selector',
            'Not the term, the other part',
            'Change dt to dd'
        ]
    },
    {
        language: 'css',
        difficulty: 'hard',
        code:   "a[href^='.pdf']::after {\n  content: '[PDF]';\n}",
        answer: "a[href$='.pdf']::after {\n  content: '[PDF]';\n}",
        test:   "Insert content after every link that ends with .pdf",
        hints: [
            'Look inside the first brackets',
            'Look right after href',
            'Change ^ to $'
        ]
    },
    {
        language: 'css',
        difficulty: 'hard',
        code:   "p + ul {\n  border-top: 2px solid black;\n}",
        answer: "p ~ ul {\n  border-top: 2px solid black;\n}",
        test:   "Give each unordered list preceded by a paragraph a thin black border",
        hints: [
            'Wrong selector',
            'Wrong symbol',
            'Change + to ~'
        ]
    },
    {
        language: 'css',
        difficulty: 'normal',
        code:   "div p {\n  margin-top: 10px;\n}",
        answer: "div,p {\n  margin-top: 10px;\n}",
        test:   "Add 10px margin to the top of all div and paragraph elements",
        hints: [
            'Wrong selector',
            'Missing symbol',
            'Insert comma between div and p'
        ]
    },
    {
        language: 'css',
        difficulty: 'easy',
        code:   "p,intro {\n  margin-top: 10px;\n}",
        answer: "p.intro {\n  margin-top: 10px;\n}",
        test:   "Add 10px margin to the top of all paragraph elements with class intro",
        hints: [
            'Select one type of thing, not two',
            'intro isn\'t an element',
            'Change comma after p to dot'
        ]
    },
    {
        language: 'css',
        difficulty: 'normal',
        code:   "h3 {\n  margin-bottom: 10px;\n}",
        answer: "h3 {\n  margin-top: 10px;\n}",
        test:   "Add 10px margin to the top of level-3 headings",
        hints: [
            'margin-what?',
            'Other parallel side',
            'Change bottom to top'
        ]
    },
    {
        language: 'css',
        difficulty: 'normal',
        code:   "p:last-child {\n  margin-top: 10px;\n}",
        answer: "p:first-child {\n  margin-top: 10px;\n}",
        test:   "Add 10px margin to the top of every paragraph that is the first child of its parent",
        hints: [
            'Oh sweet child',
            'Last out, first in',
            'Change last to first'
        ]
    },
    {
        language: 'css',
        difficulty: 'normal',
        code:   "a:active {\n  color: purple;\n}",
        answer: "a:visited {\n  color: purple;\n}",
        test:   "Set the color of all visited links to purple",
        hints: [
            'Wrong pseudo-selector',
            'Refer to the test',
            'Change active to visited'
        ]
    },
    {
        language: 'css',
        difficulty: 'easy',
        code:   "a {\n  color: 0000ff;\n}",
        answer: "a {\n  color: #0000ff;\n}",
        test:   "Set the color of all links to blue",
        hints: [
            'Think twitter',
            'Hashtag',
            'Add a hashtag before the first 0'
        ]
    },
    {
        language: 'css',
        difficulty: 'normal',
        code:   "a {\n  color: rbga(0,0,255,1);\n}",
        answer: "a {\n  color: rgba(0,0,255,1);\n}",
        test:   "Set the color of all links to opaque blue",
        hints: [
            'Between the bookends',
            'Out of order',
            'Swap b ang g so its rgba'
        ]
    },
    {
        language: 'css',
        difficulty: 'normal',
        code:   "a {\n  color: hsl(120, 100, 50%);\n}",
        answer: "a {\n  color: hsl(120, 100%, 50%);\n}",
        test:   "Set the color of all links to green",
        hints: [
            'Incorrectly unitless',
            '100 what?',
            'Insert percent symbol after 100'
        ]
    },
    {
        language: 'css',
        difficulty: 'easy',
        code:   "a {\n  color: rad;\n}",
        answer: "a {\n  color: red;\n}",
        test:   "Set the color of all links to red",
        hints: [
            'Killer, broh',
            'radrum?',
            'Change rad to red'
        ]
    },
    {
        language: 'css',
        difficulty: 'easy',
        code:   ".lego {\n  display: black;\n}",
        answer: ".lego {\n  display: block;\n}",
        test:   "Each element with class lego should start on a new line and take up the whole width",
        hints: [
            'That\'s a color, silly',
            'Different vowel',
            'Change black to block'
        ]
    },
    {
        language: 'css',
        difficulty: 'normal',
        code:   ".two-dimensional {\n  display: flex;\n}",
        answer: ".two-dimensional {\n  display: grid;\n}",
        test:   "Each element with class two-dimensional should be a block-level grid container",
        hints: [
            'Think perpendicular lines',
            'Think graph paper',
            'Change flex to grid'
        ]
    },
    {
        language: 'css',
        difficulty: 'normal',
        code:   ".heavier {\n  font-wait: bold;\n}",
        answer: ".heavier {\n  font-weight: bold;\n}",
        test:   "Each element with class heavier should have bold text",
        hints: [
            'Wait right there!',
            'Word play. Get it?',
            'Change wait to weight'
        ]
    },
    {
        language: 'css',
        difficulty: 'easy',
        code:   ".push-down {\n  margin-up: 10px;\n}",
        answer: ".push-down {\n  margin-top: 10px;\n}",
        test:   "Each element with class push-down should have 10px margin above it",
        hints: [
            'What\'s up?',
            'Up top!',
            'Change up to top'
        ]
    },
    {
        language: 'css',
        difficulty: 'normal',
        code:   "li < a {\n  text-decoration: none;\n}",
        answer: "li > a {\n  text-decoration: none;\n}",
        test:   "Each link whose parent is a list item should have no underline",
        hints: [
            'Use its reflection',
            'Which one is \'greater\'?',
            'Change less-than sign to greater-than'
        ]
    },
    {
        language: 'css',
        difficulty: 'hard',
        code:   "a[href$='.pdf'].after {\n  content: \"[PDF]\"\n}",
        answer: "a[href$='.pdf']:after {\n  content: \"[PDF]\"\n}",
        test:   "Insert the text [PDF] after each link that opens a PDF",
        hints: [
            'One dot two dot',
            'Before after',
            'Change the dot before after to a colon'
        ]
    },
    {
        language: 'css',
        difficulty: 'normal',
        code:   "p:first-of-kind {\n  border-left: 2px solid black;\n}",
        answer: "p:first-of-type {\n  border-left: 2px solid black;\n}",
        test:   "Add a left-hand border to every paragraph that is the first one of its parent",
        hints: [
            'You\'re too kind',
            'Not the right type',
            'Change kind to type'
        ]
    },
    {
        language: 'css',
        difficulty: 'normal',
        code:   "input:valid {\n  border: 2px solid red;\n}",
        answer: "input:invalid {\n  border: 2px solid red;\n}",
        test:   "Add a border to every input that is not valid",
        hints: [
            'Do you validate?',
            'Invalid entry is what we want!',
            'Change valid to invalid'
        ]
    },
    {
        language: 'css',
        difficulty: 'easy',
        code:   "img.see-through {\n  opacity: 0.5%;\n}",
        answer: "img.see-through {\n  opacity: 0.5;\n}",
        test:   "Make all images with class see-through 50% transparent",
        hints: [
            'Are you 100% sure?',
            'Decimals and percentages don\'t mesh',
            'Delete the percentage sign'
        ]
    },
    {
        language: 'css',
        difficulty: 'hard',
        code:   "* {\n  box-sizing: content-box;\n}",
        answer: "* {\n  box-sizing: border-box;\n}",
        test:   "The width and height properties of all elements should include content, padding and border",
        hints: [
            'Live on the edge',
            'Each region is surrounded by this',
            'Change content to border'
        ]
    },
    {
        language: 'css',
        difficulty: 'normal',
        code:   "* {\n  box-size: border-box;\n}",
        answer: "* {\n  box-sizing: border-box;\n}",
        test:   "The width and height properties of all elements should include content, padding and border",
        hints: [
            'Seeing is believing',
            'Modify the property name',
            'Change size to sizing'
        ]
    },
    {
        language: 'css',
        difficulty: 'normal',
        code:   "@ {\n  box-sizing: border-box;\n}",
        answer: "* {\n  box-sizing: border-box;\n}",
        test:   "The width and height properties of all elements should include content, padding and border",
        hints: [
            'Wildcard!',
            'Don\'t \'at\' me, broh',
            'Change @ to *'
        ]
    },
    {
        language: 'css',
        difficulty: 'normal',
        code:   ".placeholder {\n  background-image: href('fpo.jpg');\n}",
        answer: ".placeholder {\n  background-image: url('fpo.jpg');\n}",
        test:   "Set the background image for elements with class placeholder as fpo.jpg",
        hints: [
            'Four letter word',
            'That keyword is for links, not CSS',
            'Change href to url'
        ]
    },
    {
        language: 'css',
        difficulty: 'hard',
        code:   ".all-in-view {\n  background-size: cover;\n}",
        answer: ".all-in-view {\n  background-size: contain;\n}",
        test:   "Resize the background image to make sure the image is fully visible",
        hints: [
            'Cover your eyes',
            'Contain yourself',
            'Change cover to contain'
        ]
    },
    {
        language: 'css',
        difficulty: 'easy',
        code:   "h2 {\n  colour: #333;\n}",
        answer: "h2 {\n  color: #333;\n}",
        test:   "Make all level-2 headings dark gray",
        hints: [
            'CSS uses United States spelling',
            'Extra vowel',
            'Remove u in colour'
        ]
    },
    {
        language: 'css',
        difficulty: 'normal',
        code:   "p {\n  text-size: 1em;\n}",
        answer: "p {\n  text-size: 1em;\n}",
        test:   "Make all paragraphs the same size as the current font",
        hints: [
            'What?-size',
            'Another four-letter word for text',
            'Change text to font'
        ]
    },
    {
        language: 'css',
        difficulty: 'easy',
        code:   "body {\n  font-family: sans serif;\n}",
        answer: "body {\n  font-family: sans-serif;\n}",
        test:   "Make all text on the page sans serif",
        hints: [
            'Short horizontal bar',
            'Hop, skip and a dash',
            'Add dash between sans and serif'
        ]
    },
    {
        language: 'css',
        difficulty: 'easy',
        code:   "body {\n  font family: sans-serif;\n}",
        answer: "body {\n  font-family: sans-serif;\n}",
        test:   "Make all text on the page sans serif",
        hints: [
            'Short horizontal bar',
            'Hop, skip and a dash',
            'Add dash between font and family'
        ]
    },
    {
        language: 'css',
        difficulty: 'easy',
        code:   "body {\n  font-family: Verdana sans-serif;\n}",
        answer: "body {\n  font-family: Verdana, sans-serif;\n}",
        test:   "Make all text on the page Verdana. Fallback to sans serif.",
        hints: [
            'A space ain\'t enough',
            'What separates two parts of a sentence?',
            'Add comma after Verdana'
        ]
    },
    {
        language: 'css',
        difficulty: 'easy',
        code:   "body {\n  font-family: Open Sans', sans-serif;\n}",
        answer: "body {\n  font-family: 'Open Sans', sans-serif;\n}",
        test:   "Make all text on the page Open Sans. Fallback to sans serif.",
        hints: [
            'Mismatch detected',
            'Must group multiple words',
            'Add single quote before Open Sans'
        ]
    },
    {
        language: 'css',
        difficulty: 'normal',
        code:   ".thin-red-border {\n  border: 1px red liquid;\n}",
        answer: ".thin-red-border {\n  border: 1px red solid;\n}",
        test:   "Add a 1px red line around elements with class thin-red-border",
        hints: [
            'Use your chemistry',
            'Think water',
            'Change liquid to solid'
        ]
    },
    {
        language: 'css',
        difficulty: 'hard',
        code:   ".thick-red-border {\n  border-color: red;\n  border-weight: 5px;\n  border-style: solid;\n}",
        answer: ".thick-red-border {\n  border-color: red;\n  border-width: 5px;\n  border-style: solid;\n}",
        test:   "Add a 5px red line around elements with class thick-red-border",
        hints: [
            'Watch your calories',
            'Think height\'s counterpart',
            'Change weight to width'
        ]
    },
    {
        language: 'css',
        difficulty: 'hard',
        code:   ".rounded {\n  corner-radius: 10px;\n}",
        answer: ".rounded {\n  border-radius: 10px;\n}",
        test:   "Round the corners of elements with class rounded",
        hints: [
            'Wrong radius',
            'What do all countries have?',
            'Change corner to border'
        ]
    },
    {
        language: 'css',
        difficulty: 'easy',
        code:   ".circular {\n  border-radius: 50;\n}",
        answer: ".circular {\n  border-radius: 50%;\n}",
        test:   "Make elements with class circular look like circles",
        hints: [
            'Unitless: bad',
            'Odds of getting heads in a coin toss',
            'Add percent sign after 50'
        ]
    },
    {
        language: 'css',
        difficulty: 'easy',
        code:   ".red-bg {\n  background color: red;\n}",
        answer: ".red-bg {\n  background-color: red;\n}",
        test:   "Give elements with class red-bg a red background",
        hints: [
            'One too many spaces',
            'Add a dash of something',
            'Insert dash between background and color'
        ]
    },
    {
        language: 'css',
        difficulty: 'easy',
        code:   ".fluffy {\n  pudding: 10px;\n}",
        answer: ".fluffy {\n  padding: 10px;\n}",
        test:   "Give elements with class fluffy extra space around the content",
        hints: [
            'CSS shouldn\'t be this delicious',
            'Wrong vowel',
            'Change pudding to padding'
        ]
    },
    {
        language: 'css',
        difficulty: 'easy',
        code:   ".marginal {\n  margin: 20px, 40px;\n}",
        answer: ".marginal {\n  margin: 20px 40px;\n}",
        test:   "Give elements with class marginal 20px margin top and bottom, 40px margin left and right",
        hints: [
            'Space is enough',
            'One too many punctuation marks',
            'Delete comma after 20px'
        ]
    },
    {
        language: 'css',
        difficulty: 'easy',
        code:   ".clockwise {\n  margin: 5px 15px 25px 35px;\n}",
        answer: ".clockwise {\n  margin: 5px 15px 5px 35px;\n}",
        test:   "Give elements with class clockwise 5px bottom margin",
        hints: [
            'How to remember: TROUBLE',
            'Top-Right-Bottom-Left',
            'Change 25px to 5px'
        ]
    },
    {
        language: 'css',
        difficulty: 'easy',
        code:   "[type='test'] {\n  border: 1px solid #333;\n}",
        answer: "[type='text'] {\n  border: 1px solid #333;\n}",
        test:   "Set the border for all text input fields",
        hints: [
            'This is only a test',
            'Not a valid attribute value',
            'Change test to text'
        ]
    },
    {
        language: 'css',
        difficulty: 'normal',
        code:   "a {\n  color: #000;\n}",
        answer: "a {\n  color: #00F;\n}",
        test:   "All links should be blue",
        hints: [
            'Seek a Failing grade',
            'R G B',
            'Change third 0 to capital F'
        ]
    },
    {
        language: 'css',
        difficulty: 'normal',
        code:   "li {\n  color: #BADASS;\n}",
        answer: "li {\n  color: #BADA55;\n}",
        test:   "All list items should be lime green",
        hints: [
            'S is not valid Hex character',
            'What number looks like an S?',
            'Change both S\'s to 5\'s'
        ]
    },
    {
        language: 'css',
        difficulty: 'easy',
        code:   "li {\n  margin: var(-extra-space);\n}",
        answer: "li {\n  margin: var(--extra-space);\n}",
        test:   "All list items should have margin set to custom variable extra-space",
        hints: [
            'Needs another dash',
            'Double the dashes',
            'Insert one more dash before extra'
        ]
    },
    {
        language: 'css',
        difficulty: 'easy',
        code:   "root {\n  --special-color: purple;\n}",
        answer: ":root {\n  --special-color: purple;\n}",
        test:   "Create global custom variable special-color",
        hints: [
            'Find the root cause',
            'That\'s not a valid HTML element',
            'Insert colon before root to make it a pseudo-selector'
        ]
    },
    {
        language: 'css',
        difficulty: 'hard',
        code:   ":root {\n  dead-center: 50%;\n}",
        answer: ":root {\n  --dead-center: 50%;\n}",
        test:   "Create global custom variable dead-center",
        hints: [
            'Double-dose o\' dashes',
            'That\'s not a valid CSS property',
            'Insert two dashes before dead'
        ]
    },
    {
        language: 'css',
        difficulty: 'easy',
        code:   "a {\n  color: var(--important-link blue);\n}",
        answer: "a {\n  color: var(--important-link, blue);\n}",
        test:   "All links should have color set to custom variable extra-space or fallback to blue",
        hints: [
            'It separates two parts of a sentence',
            'It is a period with a tail',
            'Insert comma between custom variable name and blue'
        ]
    },
    {
        language: 'css',
        difficulty: 'hard',
        code:   "@media just screen and (min-width: 768px) {\n  .wrapper {\n    margin: 0 auto;\n  }\n}",
        answer: "@media only screen and (min-width: 768px) {\n  .wrapper {\n    margin: 0 auto;\n  }\n}",
        test:   "At screen sizes wider than 768px, horizontally-center elements with class wrapper",
        hints: [
            'Consult a thesaurus',
            'Four-letter word for unique',
            'Change just to only'
        ]
    },
    {
        language: 'css',
        difficulty: 'easy',
        code:   "media (min-width: 768px) {\n  .wrapper {\n    margin: 0 auto;\n  }\n}",
        answer: "@media (min-width: 768px) {\n  .wrapper {\n    margin: 0 auto;\n  }\n}",
        test:   "At screen sizes wider than 768px, horizontally-center elements with class wrapper",
        hints: [
            'Think email addresses',
            'Think twitter handles',
            'Insert @ symbol before media'
        ]
    },
    {
        language: 'css',
        difficulty: 'easy',
        code:   "@media (min-width=768px) {\n  .wrapper {\n    margin: 0 auto;\n  }\n}",
        answer: "@media (min-width: 768px) {\n  .wrapper {\n    margin: 0 auto;\n  }\n}",
        test:   "At screen sizes wider than 768px, horizontally-center elements with class wrapper",
        hints: [
            'Wrong syntax in query',
            'CSS doesn\'t use equal signs',
            'Change equal sign to colon'
        ]
    },
    {
        language: 'css',
        difficulty: 'hard',
        code:   "@media screen (min-width: 768px) {\n  .wrapper {\n    margin: 0 auto;\n  }\n}",
        answer: "@media screen and (min-width: 768px) {\n  .wrapper {\n    margin: 0 auto;\n  }\n}",
        test:   "At screen sizes wider than 768px, horizontally-center elements with class wrapper",
        hints: [
            'Word that joins two parts of a sentence',
            'Synonym is also',
            'Add the word \'and\' after screen'
        ]
    },
    {
        language: 'css',
        difficulty: 'easy',
        code:   "p {\n  text-aline: center;\n}",
        answer: "p {\n  text-align: center;\n}",
        test:   "All paragraphs should have their text aligment centered",
        hints: [
            'Too literal',
            'Wrong property name',
            'Change aline to align'
        ]
    },
    {
        language: 'css',
        difficulty: 'normal',
        code:   "p {\n  text-align: right;\n}",
        answer: "p {\n  text-align: left;\n}",
        test:   "All paragraphs should have their text aligned left",
        hints: [
            'Wrong direction',
            'What\'s right is wrong',
            'Change right to left'
        ]
    },
    {
        language: 'css',
        difficulty: 'normal',
        code:   "p {\n  type-align: left;\n}",
        answer: "p {\n  text-align: left;\n}",
        test:   "All paragraphs should have their text aligned left",
        hints: [
            'Not your type',
            'Wrong 4-letter t-word',
            'Change type to text'
        ]
    },
    {
        language: 'css',
        difficulty: 'easy',
        code:   "strong {\n  font-weight: boulder;\n}",
        answer: "strong {\n  font-weight: bolder;\n}",
        test:   "All strong elements should be thicker than all other surrounding text",
        hints: [
            'u rock',
            'It\'s not me. It\'s u.',
            'Delete u in boulder'
        ]
    },
    {
        language: 'css',
        difficulty: 'normal',
        code:   "h1 {\n  font-wait: bold;\n}",
        answer: "h1 {\n  font-weight: bold;\n}",
        test:   "All level-1 headings should be bold",
        hints: [
            'Too literal',
            'Wait for it',
            'Change wait to weight'
        ]
    },
    {
        language: 'css',
        difficulty: 'easy',
        code:   "em {\n  font-style: italics;\n}",
        answer: "em {\n  font-style: italic;\n}",
        test:   "All em elements should feature properly slanted text",
        hints: [
            'Start at the end',
            'De-pluralize',
            'Delete s in italics'
        ]
    },
    {
        language: 'css',
        difficulty: 'easy',
        code:   "nav {\n  background-color: rgba(255,-255,255,0.8);\n}",
        answer: "nav {\n  background-color: rgba(255,255,255,0.8);\n}",
        test:   "All nav elements should have a slightly transparent white background",
        hints: [
            'Color can\'t be negative',
            'An unwanted dash',
            'Remove negative sign before second 255'
        ]
    },
    {
        language: 'css',
        difficulty: 'hard',
        code:   ".card {\n  box-shadow: 0 10px 10px  10px rgba(0,0,0,0.5);\n}",
        answer: ".card {\n  box-shadow: 0 10px 10px -10px rgba(0,0,0,0.5);\n}",
        test:   "Elements with class card should have a shadow that spreads 10px inward",
        hints: [
            'One number should be negative',
            'Find the extra space...and fill it',
            'Insert a negative sign before the second 10px'
        ]
    },
    {
        language: 'css',
        difficulty: 'normal',
        code:   ".card {\n  box-shadow: 0 10px 10px gray 0 20px 10px blue;\n}",
        answer: ".card {\n  box-shadow: 0 10px 10px gray, 0 20px 10px blue;\n}",
        test:   "Elements with class card should have two shadows: one gray, the other blue",
        hints: [
            'A single puzzle piece is missing',
            'Separate the similar parts with a comma',
            'Insert a comma after gray'
        ]
    },
    {
        language: 'css',
        difficulty: 'easy',
        code:   ".see-thru {\n  opacity: 1;\n}",
        answer: ".see-thru {\n  opacity: 0;\n}",
        test:   "Elements with class see-thru should be fully transparent",
        hints: [
            'Fully transparent means lacking in...?',
            'Count down from 1, by 1',
            'Change 1 to 0'
        ]
    },
    {
        language: 'css',
        difficulty: 'normal',
        code:   ".all-caps {\n  text-transform: lowercase;\n}",
        answer: ".all-caps {\n  text-transform: uppercase;\n}",
        test:   "Elements with class all-caps should be all capital letters",
        hints: [
            'Wrong case',
            'Not upper, but...',
            'Change lower to upper'
        ]
    },
    {
        language: 'css',
        difficulty: 'normal',
        code:   ".title-case {\n  text-transform: capitalies;\n}",
        answer: ".title-case {\n  text-transform: capitalize;\n}",
        test:   "Elements with class title-case should be Title Cased",
        hints: [
            'Misspelling',
            'Capital lies?',
            'Change lies to lize'
        ]
    },
    {
        language: 'css',
        difficulty: 'normal',
        code:   ".small-letters {\n  text-transformers: lowercase;\n}",
        answer: ".small-letters {\n  text-transform: lowercase;\n}",
        test:   "Elements with class small-letters should be lowercase",
        hints: [
            'Verb, not franchise',
            'Optimus Prime?',
            'Delete \'ers\' after transform'
        ]
    },
    {
        language: 'css',
        difficulty: 'easy',
        code:   "p {\n  lime-height: 24px;\n}",
        answer: "p {\n  line-height: 24px;\n}",
        test:   "Each line in all paragraphs should be 24px tall",
        hints: [
            'Wait...limes?',
            'Anyone got a line?',
            'Change lime to line'
        ]
    },
]