// import { asyncScheduler, fromEvent } from 'rxjs';
// import { distinctUntilChanged, pluck, throttleTime } from 'rxjs/operators';

// const click$ = fromEvent(document, 'click');

// click$.pipe(
//     throttleTime(3000)
// );

// const input = document.createElement('input');
// document.querySelector('body').append(input);

// const input$ = fromEvent(input, 'keyup');

// input$.pipe(
//     throttleTime(1000, asyncScheduler, {
//         leading: true,
//         trailing: true,
//     }),
//     pluck('target', 'value'),
//     distinctUntilChanged()
// ).subscribe(console.log);