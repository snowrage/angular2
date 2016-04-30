import { Component }          from 'angular2/core';
import { MitarbeiterService } from './mitarbeiter.service';

@Component({
    selector: 'mitarbeiter',
    templateUrl: 'app/ts/mitarbeiter/mitarbeiter.component.html',
    providers: [MitarbeiterService]
})
export class MitarbeiterComponent { }