var namn = "TypeScript demo 1";
var belopp = 100;
var ok = true;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
var myColor = Color.Blue;
function TestaDej(namn, age, address) {
}
function testaDej(namn, age, address) {
}
console.log(namn);
