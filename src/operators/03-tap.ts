// import { map, tap } from 'rxjs/operators'

// import { range } from 'rxjs';

// const numbers$ = range(1,5);

// numbers$.pipe(
//     tap(x => {
//         console.log('before', x);
//         return 100;
//     }),
//     map( val => val * 10),
//     tap({
//         next: value => console.log('after', value),
//         complete: () => console.log('It is done' )
//     })
//     // tap( x => console.log('after', x)) 
// ).subscribe(val => console.log('subs', val));