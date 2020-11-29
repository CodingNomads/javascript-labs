Remember how you put the temperature converter functions to use when converting a list of values. Well, now you will get to do the same for a large object.

Your challenge:

<div class="alert alert-warning" role="alert">
  <strong>Note: </strong>do these steps one at a time. Complete the step completely <i>before</i> moving onto the next step. These are basic operations, however, since you will need to chain a lot of what you have learnt so far together, its easy to make errors that will give you unexpected results. You will definitely need to do some serious debugging.
</div>

1. You'll find a huge JSON file [here](https://www.dropbox.com/s/78jiqnlf5ig9wo8/weather.json?raw=1). Copy this into a new file and write a script below it that does the following.
2. Output to the console all the temperatures in Vancouver in Celsius.
3. Output to the console all the temperatures in Jerusalem in Fahrenheit.
4. Get the average temperatures for Vancouver and Jerusalem in both Celsius and Fahrenheit and output them to the console.
5. Write a function that will return a chosen city's average temperature in either fahrenheit or celsius defined by two parameters:

```javascript
let avgTempInCity = getAvgTemp("Vancouver", "C");
console.log(avgTempInCity); // should output the avg temp in Celsius.
```
