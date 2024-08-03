# DABubble

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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


Erklärung zu `BehaviorSubject` (zu deutsch `VerhaltenSubjekt`) in der global-js.service.ts

Die Verwendung von `BehaviorSubject` und der zugehörigen Methoden in diesem Code hat mehrere Vorteile gegenüber einer einfachen Variablen, besonders in einer Angular-Anwendung, die oft viele Komponenten und Services umfasst. Hier ist eine detaillierte Erklärung:

### 1. **Reaktivität und Observables**
In Angular wird oft ein reaktiver Ansatz verwendet, um Änderungen im Zustand zu handhaben. `BehaviorSubject` ist ein Teil der RxJS-Bibliothek, die für die Arbeit mit Observables in Angular verwendet wird.

### 2. **State Management**
Mit `BehaviorSubject` kannst du den Zustand der Anwendung verwalten und ihn über verschiedene Komponenten hinweg teilen. Dies ist besonders nützlich, wenn du viele Komponenten hast, die auf denselben Zustand reagieren müssen.

### 3. **Vorteile von `BehaviorSubject`**
- **Initialer Wert**: Ein `BehaviorSubject` benötigt einen initialen Wert. Dies ist nützlich, weil du immer einen aktuellen Wert hast, auf den du zugreifen kannst.
- **Subscription**: Andere Teile deiner Anwendung (z.B. Komponenten) können sich auf das Observable (`signUp$`) abonnieren und sofort den aktuellen Wert erhalten. Sie werden auch benachrichtigt, wenn sich der Wert ändert.
- **Mutationssicherheit**: Die Methode `next()` von `BehaviorSubject` erlaubt es dir, den Zustand sicher zu ändern, und sorgt dafür, dass alle Abonnenten über diese Änderung benachrichtigt werden.

### 4. **Beispiel im Detail**

#### Code

    TypeScript Code

    private signUpSubject = new BehaviorSubject<boolean>(false);
    signUp$ = this.signUpSubject.asObservable();

    toggleSignUp() {
    this.signUpSubject.next(!this.signUpSubject.value);
    }
    ```

#### Erklärung

1. **`private signUpSubject = new BehaviorSubject<boolean>(false);`**
   - Initialisiert ein neues `BehaviorSubject` mit dem Typ `boolean` und dem initialen Wert `false`. Dies bedeutet, dass der Standardzustand für `signUp` auf `false` gesetzt ist.

2. **`signUp$ = this.signUpSubject.asObservable();`**
   - Erstellt ein Observable aus dem `signUpSubject`. Dieses Observable kann von anderen Teilen der Anwendung abonniert werden, um Änderungen am Zustand zu verfolgen.

3. **`isGerman: boolean = false;`**
   - Eine einfache boolean-Variable, die den Sprachzustand speichert. Dieser Zustand wird nicht reaktiv verwaltet, daher wird `BehaviorSubject` hier nicht verwendet.

4. **`toggleSignUp()`**
   - Diese Methode invertiert den aktuellen Wert von `signUpSubject`. Wenn der aktuelle Wert `false` ist, wird er auf `true` gesetzt und umgekehrt. `this.signUpSubject.next(!this.signUpSubject.value);` ruft die `next` Methode des `BehaviorSubject` auf und übergibt den neuen Wert.
   - Alle Komponenten, die auf `signUp$` abonniert sind, werden automatisch benachrichtigt und können entsprechend reagieren.

### Warum nicht einfach eine Variable verwenden?
Eine einfache boolean-Variable könnte verwendet werden, aber sie hätte einige Nachteile:

- **Keine Reaktivität**: Andere Teile der Anwendung müssten aktiv den Zustand überprüfen, anstatt benachrichtigt zu werden, wenn sich der Zustand ändert.
- **Komplexere Kommunikation**: Wenn viele Komponenten den Zustand teilen müssen, wird die Verwaltung und Kommunikation zwischen Komponenten komplizierter und fehleranfälliger.
- **Weniger Skalierbarkeit**: Für größere Anwendungen und komplexere Zustandsverwaltung ist ein reaktiver Ansatz oft robuster und skalierbarer.

### Fazit
Die Verwendung von `BehaviorSubject` in Angular ermöglicht eine effiziente und skalierbare Zustandsverwaltung. Sie stellt sicher, dass alle interessierten Teile der Anwendung über Änderungen am Zustand benachrichtigt werden und entsprechend reagieren können. Dies führt zu einem saubereren, wartbaren und besser strukturierten Code.