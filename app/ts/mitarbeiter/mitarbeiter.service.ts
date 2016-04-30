import {Injectable}  from 'angular2/core';
import {Mitarbeiter} from './mitarbeiter.model';

@Injectable()
export class MitarbeiterService {
    getFirma() {
        return new Mitarbeiter(
            1, 
            'Schmidt', 
            'Marcel'
        );
    }
}