import { fromEvent } from "rxjs";
import { map } from 'rxjs/operators'

const text = document.createElement('div');

text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac mollis diam, vel cursus ex. Donec tempor tincidunt purus. Morbi pellentesque leo vitae hendrerit lacinia. Cras diam elit, ornare ut ex eget, laoreet tincidunt dui. Quisque ac condimentum arcu. Donec non gravida libero. Nullam interdum vel arcu eget viverra. Nulla orci ipsum, tempus et libero a, vestibulum ultricies ex. Donec faucibus luctus scelerisque. Sed sit amet consequat erat, eu lobortis mauris. Sed aliquet ac nulla sit amet suscipit. Suspendisse mollis urna eros, in scelerisque leo pellentesque nec. Aenean posuere velit eget leo mollis ultrices. Quisque ac eros nec elit porta porttitor. Etiam volutpat fermentum ornare. Etiam ultricies posuere leo, in feugiat odio suscipit in.
<br/><br/>
Ut id laoreet magna, sed interdum velit. Suspendisse quis felis justo. Donec eget magna ac nulla euismod vehicula id quis dolor. Donec pharetra, quam in faucibus luctus, augue ipsum hendrerit felis, sed scelerisque felis risus volutpat metus. Nulla lorem tortor, commodo id blandit tincidunt, vulputate ut velit. Suspendisse tincidunt, nisl sed iaculis tristique, felis est auctor sapien, quis hendrerit tellus felis in lorem. Nam in diam blandit, dictum ex vitae, feugiat turpis. Vestibulum molestie aliquam euismod. Fusce sagittis odio et risus cursus malesuada. Nam a purus a felis dictum facilisis quis quis risus. Vivamus sed suscipit eros.
<br/><br/>
Fusce non lectus imperdiet, porttitor libero vitae, pulvinar arcu. Maecenas id accumsan tortor. Etiam facilisis turpis quis dolor accumsan sagittis. Integer id velit id lacus blandit sagittis ut a dui. Vestibulum viverra sed neque quis ultrices. Ut viverra elit ac aliquam interdum. Praesent sed feugiat arcu, a posuere quam.
<br/><br/>
Aenean quis sapien eget lacus blandit tincidunt at in enim. In id mauris eget ante pretium vestibulum. Vestibulum id cursus quam. Vivamus ultrices neque eu sem placerat viverra. Nullam at varius neque. Duis consequat nunc nec fermentum cursus. Maecenas in justo nulla. Proin et enim posuere, luctus dolor ut, fringilla arcu. Integer sed vehicula mauris. Maecenas lobortis metus non elit semper egestas.
<br/><br/>
Sed tincidunt dui vel felis malesuada egestas. Mauris in lorem nec velit consectetur malesuada vitae eget sem. Etiam finibus augue at dolor sagittis ultrices vitae vitae ante. Quisque sit amet convallis magna, a congue diam. Mauris eu neque lobortis, eleifend lorem at, dapibus ex. Aliquam fermentum justo et ipsum ullamcorper vulputate. Vestibulum ante leo, elementum nec magna ut, fermentum varius mi. Nam justo felis, gravida vel ipsum faucibus, auctor tristique ex. Donec varius mollis mi, sit amet dignissim ex sodales et.
`

const body = document.querySelector('body');
body.append(text);

const progressBar = document.createElement('div');

progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// function create a calculation
function calculatePercentageScroll(event: any) {
    console.log(event);

    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    // console.log({scrollTop, scrollHeight, clientHeight});

    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}
//Streams

const scroll$ = fromEvent(document, 'scroll');

// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
    map(event => calculatePercentageScroll(event))
    // map(calculatePercentageScroll)
);

progress$.subscribe(percentage => {
    progressBar.style.width = `${percentage}%`;
});