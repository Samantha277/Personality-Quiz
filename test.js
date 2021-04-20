// let map = new Map();




// map.set('e', 1);
// map.set("e", map.get("e")+1);



// console.log("The map is" ,map.keys('e'));

const test = [
    //0
    {
        'letter' : 'e',
        'value' : 1
    },
    //1
    {
        'letter' : 'i',
        'value' : 9
    },
];


// test.sort((a, b) => (a.value < b.value) ? 1 : -1);
test.sort((a,b)=> b.value - a.value)

test[0].value = test[0].value+2
console.log(test[0].value)
// let str = "";

// str += (test.E+1)
// console.log(test.E);

// let tests = {'e' : 0, 'i' : 9};
// tests_sort = tests.sort((a, b) => (a.value < b.value) ? 1 : -1);
// let str = "";


// str += (test.letter['e'].value).toUpperCase()
// console.log(tests_sort);