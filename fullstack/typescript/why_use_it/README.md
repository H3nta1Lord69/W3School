### What is Typescript and why would i use it in place of Javascript?

**Typescript** is a superset of Javascript which primarily provides optional static typing, classes and interfaces. One of the big benefits is to enable IDEs to provide a richer environment for spotting common error as _you type the code_. For a large Javascript project, adopting Typescript might result in more robust software, while still being deployable where a regular Javascript application would run.

In details:

- Typescript supports new ECMAscript standards and compiles them to (older) ECMAscript targets of your choosing. This means that you can use features of ES2015 and beyond, like modules, lambda functions, classes, the spread operator, destructuring, today.
- Javascript is valid Typescript code; Typescript is a superset of Javascript.
- Typescript adds type support to Javascript. The type system of Typescript is relatively rich and includes: interfaces, enums, hybrid types, generics, union and intersection types, access modifiers and much more. Typescript makes typing a bit easier and a lot less explicit by the usage of type inference.
- The development experience with Typescript is a great improvement over Javascript. The IDE is informed in real-time by the Typescript compiler on its rich type information.
- With strict null checks enabled(`--strictNullChecks` compiler flag) the Typescript compiler will not allow undefined to be assigned to a variable unless you explicitly declare it to be of nullable type.
- Yo use Typescript you need a build process to compile to Javascript code. The Typescript compiler can inline source map information in the generated .js files or create separate .map file. This makes it possible for you to set breakpoints and inspect variables during runtime directly on your Typescript coded.
- Typescript is open source (Apace 2 licensed) and backed by Microsoft. _Anders Hejlsber_, the lead architect of C# is spearheading the project.
