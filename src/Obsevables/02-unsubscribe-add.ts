import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
	next: (value) => console.log('[next]:', value),
	error: (error) => console.warn('error:', error),
	complete: () => console.info('Complete'),
};

const interval$ = new Observable<number>((subscriber) => {
	// create counter 1,2,3,4,5,6...
	let count = 0;

	const interval = setInterval(() => {
		// every second.
		count++;
		subscriber.next(count);
		console.log(count);
	}, 1000);

	setTimeout(() => {
		subscriber.complete();
	}, 2500);

	return () => {
		clearInterval(interval);
		console.log('It is destroyed');
	};
});

const sub1 = interval$.subscribe(observer);
const sub2 = interval$.subscribe(observer);
const sub3 = interval$.subscribe(observer);

sub1.add(sub2);
sub1.add(sub3);

setTimeout(() => {
	sub1.unsubscribe();
	// sub2.unsubscribe();
	// sub3.unsubscribe();

	console.log('Timeout was completed');
}, 6000);
