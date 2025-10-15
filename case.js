const school = 'Pilot Bajitpur Kishoreganj';
console.log(school);
console.log(school.toUpperCase());


console.log(school.toLowerCase());



// Uppercase: ABCD EFG
// lowercase:abcd efg

// const subject = 'Chemistry';
// const book = 'chemIstrY';
// if(subject.toLowerCase() === book.toLowerCase()){
//     // console.log('tomi pass');

// }
// else{
//     // console.log('tomi to miya parla na');

// }

const drink = 'water ';
const liqued = ' water';
if (drink.trim() === liqued.trim()) {
    console.log('khawa jabe');

}
else {
    console.log('valo na');

}



const subject = ' BanGla';
const bisoy = 'bangla ';
if (subject.toLowerCase().trim() === bisoy.toLowerCase().trim()) {
    console.log('pass');

}
else {
    console.log('fail');

}