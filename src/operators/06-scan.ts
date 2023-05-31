// import { from } from 'rxjs';
// import { map, reduce, scan } from 'rxjs/operators'


// const numbers = [1, 2, 3, 4, 5];

// function totalAcc(acc: number, curr: number) {
//     return acc + curr;
// }

// //reduce
// // from(numbers).pipe(
// //     reduce(totalAcc, 0)
// // ).subscribe(console.log);

// //scan
// from(numbers).pipe(
//     scan(totalAcc, 0)
// ).subscribe(console.log);

// //Redux
// interface UserInterface {
//     id?: string;
//     auth?: boolean;
//     token?: string
//     age?: number;
// }


// const user: UserInterface[] = [
//     {id:'bva', auth: false, token: null},
//     {id:'bva', auth: true, token: 'ABC'},
//     {id:'bva', auth: false, token: 'ABC123'}
// ];


// const state$ = from(user).pipe(
//     scan<UserInterface>((acc, cur) => {
//         return {...acc, ...cur}
//     })
// );

// const id$ = state$.pipe(
//     map(state => state)
// )

// id$.subscribe(console.log);