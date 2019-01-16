export class DemoOfProblem {
    constructor(public argument_with_default = "this default value should be moved by @babel/plugin-transform-parameters into the body of the method") { }
}

// export class NoProblemHere {
//     constructor(
//         argument_with_default = "default_value"
//     ) { }
// }