You made a function to convert temperatures in the previous chapter. Now for a challenge! Put it to use converting a long list of temperatures by using a `for` loop.

Lets say for example you have this temperature data in Fahrenheit:

```
123
32
42
94
34
0
-10
30
63
84
56
94
87
43
26
75
90
-43
-23
153
41
74
54
24
85
80
56
35
23
45
87
-90
87
56
23
56
71
37
56
34
```

Its a long list. Would you assign each item to a variable?

```javascript
let temp1 = 123;
let temp2 = 32;
let temp3 = 42;
let temp4 = 94;
```

That would take a lot of repetitive typing, definately something that you should _always_ avoid as a programmer.

Better to put it into an array! Open un Visual Studio Code or any text editor. Copy the data above and convert it into a comma separated list at <a href="https://convert.town/column-to-comma-separated-list" target="_blank">this website</a> and then make it into an array in your document:

```javascript
let listOfTempsInF = [
  /*PASTE YOUR COMMA SEPARATED LIST HERE*/
];
```

Now build a for loop that each iteration, references a new item in the array:

```javascript
for (let i = 0; i < listOfTempsInF.length; i++) {
  const element = listOfTempsInF[i];
  // Convert temperature
}
```

Make use of the function defined in the last chapter to implement this for loop.

Copy and paste the code into the browser console as you go, testing each section. Once you have the whole thing, copy and paste it all into the browser. You are aiming for your script to log a new array with all the temperatures converted to Celsius.

<div class="alert alert-info" role="alert">
  <strong>Info: </strong>refresh the page in the browser if you need to reset the console.
</div>

If you get stuck, first try and identify exactly where you are getting stuck. Remember <a href="https://en.wikipedia.org/wiki/Rubber_duck_debugging" target="_blank">the rubber duck</a>. This state of stuck-ness is something you will become intimately familiar with throughout your career. Veteran programmers get stuck too, what makes them good is their ability to become unstuck, and rubber ducking is a great way to do that. Reading documentation is also a sure fire way to understand the problem.

If you get irrevocably stuck and are starting to feel frustration kick in, take a small break. If after a few breaks, you feel you are making _no_ progress, try starting the video and only watching until you come across a step that you didn't do or did wrong, then stop the video and see if that solves you issue and you can solve it yourself. Though if you are starting to suffer, and you feel that you are going down rabbit holes that are both uninteresting and probably in the wrong direction, post in the forums or reach out to your tutor or another student!

There are also a few extra tips and tricks in the video, so once you have solved it, be sure to watch it to the end for some extra nuggets of wisdom.

<div class="alert alert-warning" role="alert">
  <strong>Note: </strong>video coming soon!
</div>
