// match all
const regex = /\b(Apple)+\b/g;
const fruit = 'Apple, banana, Apple, kiwi, pepino, banana, Apple';

for (const match of fruit.matchAll(regex)) {
    console.log(match);
}