# Adminpro

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Observables y Promesas

## Promesas

Trabajan con un único flujo de datos
Se usan con una única data asíncrona de respuesta
No es muy simple de cancelar

## Observable

Trabajan con un flujo continuo de datos
Al fallar puedes ejecutar comandos y reintentar continuar con el observer
Se pueden encadenar operadores adicionales como el map, forEach, reduce, filter y más
Existen otros operadores potentes como el retry() o el replay()
Pueden ser creados desde otras fuentes, como los eventos
Son funciones a las cuales podemos suscribirnos en múltiples lugares
