import { Component }          from 'angular2/core';
import { FirmaService }       from './firma.service';

@Component({
    selector: 'firma',
    templateUrl: 'app/ts/firma/firma.component.html',
    providers: [FirmaService]
})
export class FirmaComponent { }