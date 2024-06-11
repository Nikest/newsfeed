import { v4 as uuidv4 } from 'uuid';

export function randomId() {
    return uuidv4();
}

export function randomInArray<T>(arr: T[]) {
    return arr[Math.floor(Math.random() * arr.length)];
}