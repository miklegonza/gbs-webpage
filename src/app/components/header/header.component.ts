import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    navbarItems = [
        { title: 'Inicio', name: 'home', path: '#top' },
        { title: 'Nosotros', name: 'about', path: '#' },
        /* { title: 'Servicios', name: 'services', path: '#' },
        { title: 'Portafolio', name: 'Portfolio', path: '#' },
        { title: 'Contacto', name: 'contact', path: '#' }, */
    ];
}
