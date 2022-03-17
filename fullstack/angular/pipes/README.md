## What are pipes? Give me an example. ⭐

A pipe takes in data as input and transforms it to a desired output. You can chain pipes together in potentially useful combination. You can write your own custom pipes. Angular comes with a stock of pipes such as `DatePipe`, `UpperCasePipe`, `LowerCasePipe`, `CurrencyPipe`, and `PercentPipe`.

Consider:

```
    <p>The hero's birthday is {{ birthday | date }}</p>
```

In this page, you'll use pipes to transform a component's birthday property into a human-friendly date.
