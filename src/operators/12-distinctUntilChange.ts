// import { distinct, distinctUntilChanged } from 'rxjs/operators'
// import { from, of } from 'rxjs';

// // const numbers$ = of(1, 1, 1, 3, 3, 2, 2, 4, 4, 5, 3, 1);
// const numbers$ = of(1, '1', 1, 3, 3, 2, 2, 4, 4, 5, 3, 1, '1');
// // numbers$.subscribe(console.log);

// numbers$.pipe(
//     distinctUntilChanged()
// ).subscribe(console.log);

// interface Actor {
//     name: string;
// }

// const actors: Actor[] = [
//     {
//         name: 'Megaman'
//     },
//     {
//         name: 'Megaman'
//     },
//     {
//         name: 'Zero'
//     },
//     {
//         name: 'Dr. Willy'
//     },
//     {
//         name: 'X'
//     },
//     {
//         name: 'X'
//     },
//     {
//         name: 'Zero'
//     },

// ];

// // from(actors).subscribe(console.log);

// from(actors).pipe(
//     distinctUntilChanged((prev, acc) => prev.name === acc.name)
// ).subscribe(console.log);