import { Observable, Observer, from, map, of, filter } from "rxjs"

const observable$ = new Observable<string>((subscriber) => {
  subscriber.next("Hi");
  subscriber.error("err");
  subscriber.complete();
});

const observer: Observer<unknown> = {
  next: (val: unknown) => {
    console.log(val);
  },
  error: (err: any) => {
    console.log(err);
  },
  complete: () => {
    console.log("complete");
  }
};

observable$.subscribe(observer);

of('a', 'b', 'c').subscribe(observer);

from(['d', 'e', 'f']).subscribe(observer);


const promise = new Promise((resolve) => {
  resolve("Resolve");
});

// not showing resolved promise
console.log(promise);

const promiseObservable$ = from(promise);
// showing resolved promise
promiseObservable$.subscribe(observer);

// chain operator in pipe
const observablePipe$ = from([1, 2, 3]).pipe(
  map((val: any) => val * 2),
  filter((val: any) => val > 2)
);

observablePipe$.subscribe(observer);