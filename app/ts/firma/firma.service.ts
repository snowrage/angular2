import {Injectable} from 'angular2/core';
import {Firma}      from './firma.model';

@Injectable()
export class FirmaService {
    getFirma() {
        return new Firma(
            1, 
            'HUP AG', 
            'Moritzburger Straße', 
            '74', 
            '01640', 
            'Coswig');
    }
}