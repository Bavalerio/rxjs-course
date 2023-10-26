// import { distinct, from, of } from 'rxjs';

// const numbers$ = of(1, 1, 1, 3, 3, 2, 2, 4, 4, 5, 3, 1);
// // numbers$.subscribe(console.log);

// numbers$.pipe(
//     distinct()
// ).subscribe(console.log);

// interface Actor {
//     name: string;
// }

// const actors: Actor[] = [
//     {
//         name: 'Megaman'
//     },
//     {
//         name: 'X'
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
//         name: 'Megaman'
//     },
//     {
//         name: 'Zero'
//     },

// ];

// // from(actors).subscribe(console.log);

// from(actors).pipe(
//     distinct(actor => actor.name)
// ).subscribe(console.log);