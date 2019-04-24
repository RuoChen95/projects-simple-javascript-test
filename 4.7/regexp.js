let regexp = new RegExp('xyz', 'i');



// match
let paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
regexp = /[A-Z]/g;
let found = paragraph.match(regexp);

console.log(found);

paragraph = '价格为: 123,123.1元'
regexp = /[0-9.]/g;
found = paragraph.match(regexp);

console.log(found);

// replace
p = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

regexp = /dog/gi;

console.log(p.replace(regexp, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"

console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"

paragraph = '价格为: 123,123.1元'
regexp = /[^0-9.]/g;
found = paragraph.replace(regexp, '');

console.log(found);

paragraph = '你好,谢谢';
regexp = /([\u4e00-\u9fa5]+),([\u4e00-\u9fa5]+)/g;
found = paragraph.replace(regexp, "$2,$1")
console.log(found);


//search
paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

// any character that is not a word character or whitespace
regexp = /[^\w\s]/g;

console.log(paragraph.search(regexp));
// expected output: 43

console.log(paragraph[paragraph.search(regexp)]);
// expected output: "."

var names = 'Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ';

console.log(names);


// split
var re = /\s*;\s*/;
var nameList = names.trim().split(re);

console.log(nameList);