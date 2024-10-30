import { add } from "./services/add.js";

import { basicTest } from "../../examples/basicAddition.js"; //test path

export class InfiniteCalculator {

    static add(valor) {

        return add(valor);
    }
}

basicTest();