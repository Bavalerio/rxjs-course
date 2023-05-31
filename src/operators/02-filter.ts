import {filter, map} from 'rxjs/operators'
import { from, fromEvent, range } from 'rxjs';

// range(1,10).pipe(
//     filter((val, i) => {
//         console.log('index', i);
//         return val % 2 === 1;
//     })
// ).subscribe(console.log);

range(20,30).pipe(
    filter( (val, i) => {
        console.log('index', i);
        return val % 2 === 1;
    })
)//.subscribe( console.log );

interface character {
    type: string;
    name: string;
}

const characters: character[] = [
    {
        type: 'Hero',
        name: 'Batman',
    },
    {
        type: 'Hero',
        name: 'Robin',
    },
    {
        type: 'Villain',
        name:  'Joker'
    }
];

from(characters).pipe(
    filter(p => p.type === 'Hero')
).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.code), //KeyboardEvent, string
    filter(key => key === 'Enter')
);

keyup$.subscribe(console.log);