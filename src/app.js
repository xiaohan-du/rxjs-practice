"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var observable$ = new rxjs_1.Observable(function (subscriber) {
    subscriber.next("Hello world");
});
var observer = {
    next: function (value) {
        console.log(value);
    }
};
observable$.subscribe(observer);
