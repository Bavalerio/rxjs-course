// import { fromEvent, interval } from 'rxjs';
// import { skip, takeUntil, tap } from 'rxjs/operators';

// const button = document.createElement('button');
// button.innerHTML = 'Stop Timer';

// document.querySelector('body').append(button);

// const counter$ = interval(1000);
// const clickBtn$ = fromEvent(button, 'click').pipe(
//     tap(() => console.log('Tap before Skip')),
//     skip(1),
//     tap(() => console.log('Tap after the Skip'))
// );

// counter$.pipe(
//     takeUntil(clickBtn$),
// )
// .subscribe({
//     next: val => console.log('next', val),
//     complete: () => console.log('complete')
// });
