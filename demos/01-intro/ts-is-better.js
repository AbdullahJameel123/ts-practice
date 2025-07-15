var x = 10;
// x = "hello"
var y = 20; // type inference
// y = true
function clacArea(length, breadth) {
    var area = length * breadth;
    return area;
}
var rectArea = clacArea(4, 5);
console.log(rectArea);
rectArea = clacArea(10, "20m");
rectArea = clacArea(20);
