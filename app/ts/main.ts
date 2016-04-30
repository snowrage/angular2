import {bootstrap}    from 'angular2/platform/browser';
import {RootComponent} from './root.component';
import {FirmaService} from './firma/firma.service';
import {MitarbeiterService} from './mitarbeiter/mitarbeiter.service';

bootstrap(RootComponent, [FirmaService, MitarbeiterService]);