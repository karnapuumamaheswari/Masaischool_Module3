export const PI = 3.14;
export function getCircumference(radius){ //named export
    return 2 * PI * radius;
}

export function getArea(radius){
    return PI * radius * radius;
}

export function getDiameter(radius){
    return 2 * radius;
}