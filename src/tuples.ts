type ThreeDCoordinate = [x: number, y: number, z: number];

function add3DCoordinate(c1: ThreeDCoordinate, c2: ThreeDCoordinate): ThreeDCoordinate {
    return [
        c1[0] + c2[0],
        c1[1] + c2[1],
        c1[2] + c2[2]
    ]
}

console.log(add3DCoordinate([2, 4, 6], [12, 36, 36]));

function simpleStringState(initial: string): [() => string, (v: string) => void] {
    let str: string = initial;
    return [
        () => str,
        (v: string) => {
            str = v;
        }
    ]
}

const [str1, setStr1] = simpleStringState("hello");
console.log(str1());
setStr1("goodbye");
console.log(str1());