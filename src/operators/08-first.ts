// import { first, map, take, tap } from 'rxjs/operators';

// import { fromEvent } from 'rxjs';

// const click$ = fromEvent<MouseEvent>(document, 'click');

// click$.pipe(
//     tap<MouseEvent>(console.log),
    
//     map(  ({ clientX, clientY }) => ({ clientX, clientY}) ),

//     first(event => event.clientY >= 150)
// ).subscribe({
//     next: val => console.log('next:', val),
//     complete: () => console.log('complete')
// });