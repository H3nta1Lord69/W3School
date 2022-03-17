## What is a module, and what does it contain? ⭐

An Angular module is set of **Angular** basic building blocks like component, directives, services, etc. An app can have more than one module.

A module can be created using `@NgModule` decorator

```
@NgModule({
    imports:        [ExampleModule],
    declarations:   [AppComponent],
    bootstrap:      [AppComponent],
})

export class AppModule{}
```
