import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
	next: (value) => console.log('[next]:', value),
	error: (error) => console.warn('error [obs]:', error),
	complete: () => console.info('Complete [obs]'),
};

const obs$ = new Observable<String>((subs) => {
	subs.next('Hello');
	subs.next('World');

	// Forze an error

	// const a = undefined;
	// a.name = 'Brayan';

	subs.complete();

	subs.next('Hello');
	subs.next('World');
});

// obs$.subscribe(console.log);
// obs$.subscribe(
// 	(resp) => console.log('next', resp),
// 	(error) => console.warn('next', error),
// 	() => console.info('completed')
// );

obs$.subscribe(observer);
