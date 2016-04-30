import {Component}              from 'angular2/core'
import {MitarbeiterComponent}   from './mitarbeiter/mitarbeiter.component'
import {FirmaComponent}         from './firma/firma.component';

@Component({
    selector: 'root',
    template: `
        <firma></firma>
        <mitarbeiter></mitarbeiter>
    `,
    directives: [FirmaComponent, MitarbeiterComponent]
})
export class RootComponent { }