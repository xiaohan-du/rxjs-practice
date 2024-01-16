import { Observable, of } from 'rxjs';

of('Teddy', 'is', 'cool').subscribe({
  next: v => console.log(v),
  error: e => console.log(e),
  complete: () => console.log("complete")
});

const handmadeOf = (...args: any) => {
  return new Observable(subscriber => {
    for (let i = 0; i < args.length; i++) {
      subscriber.next(args[i])
    }
    subscriber.complete();
  })
}

handmadeOf('Teddy', 'is', 'cool').subscribe(v => console.log(v));