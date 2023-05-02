import {DEC, INC} from "./base.action";

export const decrement = () => {
    return {type: DEC,playload: 3}
}
export const increment = () => {
    return {type: INC,playload: 2}
}