import { Observable, Observer, of } from 'rxjs';

const observer: Observer<string> = {
  next: (val: string): void => {
    console.log(val);
  },
  error: (err: string): void => {
    console.log(err)
  },
  complete: (): void => {
    console.log("complete");
  }
}

const observable$ = new Observable<string>((subscriber) => {
  try {
    subscriber.next("Hi");
  } catch {
    subscriber.error("err");
  };
  subscriber.complete();
});

observable$.subscribe(observer);

of("a", "b", "c").subscribe(observer);