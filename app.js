let input = prompt("Hey, say something!")

while (true) {
    input = prompt(input);
    if (input.toLowerCase() === "stop copying me") break;
}
console.log("OK, YOU WIN!")


// for (let i = 0; i < 1000; i++) {
//     console.log(i);
//     if (i === 100) break;
// }

