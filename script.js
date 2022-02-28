    // 1a
const mcuShows = [
    `Loki`,
    `Moon Knight`
];
// 1b
const starWarsShows = [
    `The Mandolorian`,
    `The Book of Boba Fett`,
];
// 1c
const disneyPlusShows = [
    ...mcuShows,
    ...starWarsShows,
    `The Beatles: Get Back`
];
// 1d
console.log(disneyPlusShows);


    // 2a
const netflixMovies = {
    action: `Extraction`,
    crime: `The Irishman`
};
// 2b 
const amazonPrimeMovies = {
    action: `The Tomorrow War`,
    drama: `One Night In Miami`
};
// 2c 
const streamingMovies = {
    ...amazonPrimeMovies,
    ...netflixMovies,
    musical: `Hamilton`
};
console.log(streamingMovies);


    // 3a
const disneyJunior = [
    `Mickey Mouse Club House`,
    `Spidey and His Amazing Friends`
];
// 3b
const [mickey, spidey] = disneyJunior;
console.log(mickey + `, ` + spidey);
// console.log(mickey, spidey);


    // 4a
const avengers = {
    warMachine: `James Rhodes`,
    theHulk: `Bruce Banner`
};
const {warMachine, theHulk} = avengers;

const moreAvengers = {
    blackWidow: `Natasha Romanoff`,
    hawkeye: `Clint Barton`,
    ironMan: `Tony Stark`
};
// 4e
const {blackWidow: nat, ...others} = moreAvengers;
// 4f
console.log(nat, others);


    // BONUS
const bonus = {
    first: [1, 2, 3],
    second: [4, 5, 6],
    third: [7, 8, 9]
};
//5a
const all = [
    ...bonus.first,
    ...bonus.second,
    ...bonus.third
];
console.log(all); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
//5b
const [one, two, three] = bonus.first;
const [four, five, six] = bonus.second;
const [seven, eight, nine] = bonus.third;
// OR
// const {first, second, third} = bonus;
// const [one, two, three] = first;
// const [four, five, six] = second;
// const [seven, eight, nine] = third;
// OR
// const [one, two, three, four, five, six, seven, eight, nine] = all;
console.log(one, two, three, four, five, six, seven, eight, nine); // 1 2 3 4 5 6 7 8 9