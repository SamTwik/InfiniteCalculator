# InfiniteCalculator
A simple way to do infinite calculations in a quick way.

# Addition

This way can be faster than adding using Value1+Value2

![](http://i.imgur.com/pmeBr28.png)  

Code Used:

```js
import { InfiniteCalculator  } from "../src/class/calc.js";

export function basicTest() {
    let timeAtual = Date.now()
    console.log(9999123231999+1133999992932)
    let timeDepois = Date.now()

    let timeAtual2 = Date.now()
    console.log(InfiniteCalculator.add("999912323199999999999999999999999999999999999999999999999999999999+99999999999999999999999999999999999999999999991133999992932"))
    let timeDepois2 = Date.now()

    console.log("Normal Time:")
    console.log(timeDepois-timeAtual)

    console.log("InfiniteCalculator Time:")
    console.log(timeDepois2-timeAtual2)
}
```

