// import { interval } from 'rxjs';
// import { reduce, take, tap } from 'rxjs/operators'
// const numbers = [1, 2, 3, 4, 5];

// function totalReducer (acc: number, curr: number) {
//     return acc + curr;
// }


// const total = numbers.reduce(totalReducer, 0);

// console.log('total arr', total);

// interval(500).pipe(
//     take(6),
//     tap(console.log),
//     reduce(totalReducer)
// ). subscribe({
//     next: val => console.log('next', val),
//     complete: () => console.log('complete')
// });