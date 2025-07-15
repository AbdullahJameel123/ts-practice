let x: number = 10
// x = "hello"

let y = 20 // type inference
// y = true

function clacArea(length: number, breadth: number): number {
    let area: number = length * breadth
    return area
}

let rectArea: number = clacArea(4, 5)
console.log(rectArea);

// rectArea = clacArea(10, "20m")

// rectArea = clacArea(20)
