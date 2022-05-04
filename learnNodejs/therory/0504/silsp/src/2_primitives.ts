/**
 * primitive types
 */
const num = 1;
const str = "string";
const bool = true;

const arr1: Array<number> = [1, 2, 3];
const arr2: number[] = [1, 2, 3];

const addOne: (value: number) => number 
= (value: number) => value + 1;

 // 번외 Tuple 정해진 만큼만 받음
const tuple: [number, number, number] = [1, 2, 3];