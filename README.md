# rxjs-spinner-min-duration

Show spinner with minimum duration using rxjs combineLatest operator

## [Demo (StackBlitz)](https://changhuixu.github.io/rxjs-spinner-min-duration/)

### Story ([Medium Post](https://codeburst.io/rxjs-show-spinner-for-a-minimum-amount-of-time-807ac6b23227))

Typically, a loading spinner is used to indicate a long-running (> 0.5 second, or maybe > 1 second) process (web API request or background computing). Many creative spinners have been created to comfort/entertain users during waiting periods, so that people won't think the website is crashed or irresponsible.

However, sometimes you will find that some web requests are relatively fast (< 0.5 second). In this case, the spinner will become a flash in the webpage and users don't have enough time to understand what is happening.

In order to avoid drastic webpage DOM change and to reduce users' confusion, it would be better to display the spinner for a minimum amount of time (eg, 0.5 seconds) no matter how much time it takes for loading data.

In this repository, I utilize RxJS operator `combineLatest` to create a new observable so that the minimum duration timer is factored in the loading process.

> `combineLatest`
>
> Combines multiple Observables to create an Observable whose values are calculated from the latest values of each of its input Observables.

First, we can combine two observables. The first one is `timer(dueTime: number): Observable<number>` observable, which emits a number after `dueTime`. The second one is the actual service doing API call, which returns whatever data you want.

```typescript
combineLatest(timer(1000), this.svc.apiCall());
```

The above operator returns a combined value only when both observables emit values. The final combined value is of type `Observable<[number, any]>`. So that you can get the data you want by mapping the combined value to only take the second element in array.

```typescript
combineLatest(timer(1000), this.svc.apiCall()).pipe(map(x => x[1]));
```

In the end, you can subscribe the observable as usual. The final code is like below. Note that you can place the combined observable in service if needed.

```typescript
  load(miliseconds: number) {
    this.loading = true;
    combineLatest(timer(1000), this.svc.apiCall(miliseconds))
      .pipe(map(x => x[1]))
      .subscribe(x => {
        console.log(x);
        this.loading = false;
      });
  }
```

### Final result

If an API request takes less than 1 second, then the spinner will display for 1 second then disappear.

If an API request takes more than 1 second, then the spinner will display until the API request returns value.
