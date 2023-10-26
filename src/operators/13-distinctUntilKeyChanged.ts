// import { distinctUntilKeyChanged } from 'rxjs/operators'
// import { from } from 'rxjs';

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

// from(actors).pipe(
//     distinctUntilKeyChanged('name')
// ).subscribe(console.log);