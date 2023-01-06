import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
	next: (value) => console.log('[next]:', value),
	error: (error) => console.warn('error:', error),
	complete: () => console.info('Complete'),
};

const interval$ = new Observable<number>((subs) => {
	const intevalID = setInterval(() => subs.next(Math.random()), 1000);

	return () => {
		clearInterval(intevalID);
		console.log('Destroy interval');
	};
});

/**
 * 1- Multiple cast
 * 2- It is an observer
 * 3- Next, error and complete
 */

const subject$ = new Subject();
const subscription = interval$.subscribe(subject$);

// const subs1 = interval$.subscribe((rnd) => console.log('Subs 1 ', rnd));
// const subs2 = interval$.subscribe((rnd) => console.log('Subs 2 ', rnd));

// const subs1 = subject$.subscribe((rnd) => console.log('Subs 1 ', rnd));
// const subs2 = subject$.subscribe((rnd) => console.log('Subs 2 ', rnd));

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
	subject$.next(10);
	subject$.complete();

	subscription.unsubscribe();
}, 3500);
