"use strict";
//Turn your if-else chain from Exercise 5-4 into an if-else chain.
let alein_color = "green";
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// version 1:
if (alein_color === "green") {
    console.log("version 1: player earned 5 points!");
}
else if (alein_color === "yellow") {
    console.log("player earned 10 points!");
}
else if (alein_color === "red") {
    console.log("player earned 15 points!");
}
else {
    console.log("Please select correct color.");
}
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// version 2:
alein_color = "yellow";
if (alein_color === "green") {
    console.log("player earned 5 points!");
}
else if (alein_color === "yellow") {
    console.log("version 2: player earned 10 points!");
}
else if (alein_color === "red") {
    console.log("player earned 15 points!");
}
else {
    console.log("Please select correct color.");
}
// version 3:
alein_color = "red";
if (alein_color === "green") {
    console.log("player earned 5 points!");
}
else if (alein_color === "yellow") {
    console.log("player earned 10 points!");
}
else if (alein_color === "red") {
    console.log("version 3: player earned 15 points!");
}
else {
    console.log("Please select correct color.");
}
