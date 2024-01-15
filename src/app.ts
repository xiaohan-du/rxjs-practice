import { Observable } from "rxjs";
let observable$ = new Observable((subscriber) => {
  subscriber.next("Hello world");
  subscriber.error();
  subscriber.complete();
})

let observer = {
  next: (value: any) => {
    console.log(value);
  },
  complete: () => {
    console.log("Completed");
    
  },
  error: () => {
    console.log("This is broken");
    
  }
}

observable$.subscribe(observer);