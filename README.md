# InfiniteCalculator
A simple way to do infinite calculations in a quick way.

# Addition

This way can be faster than adding using Value1+Value2

![](http://i.imgur.com/KqTVKJM)  

Code Used:

```js
import { InfiniteCalculator  } from "../src/class/calc.js";

export function basicTest() {
    let startTime = Date.now()
    console.log(9999123231999+1133999992932)
    let laterTime = Date.now()

    let startTime2 = Date.now()
    console.log(InfiniteCalculator.add("999912323199999999999999999999999999999999999999999999999999999999+99999999999999999999999999999999999999999999991133999992932"))

    let laterTime2 = Date.now()

    console.log("Normal Time:")
    console.log(laterTime-startTime)

    console.log("InfiniteCalculator Time:")
    console.log(laterTime2-startTime2)
}
```

