import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-carousel',
    standalone: true,
    imports: [NgbCarouselModule],
    templateUrl: './carousel.component.html',
    styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
    carouselItems = [
        { image: 'https://placehold.co/400x600', alt: 'Imagen 1' },
        { image: 'https://placehold.co/400x600', alt: 'Imagen 2' },
        { image: 'https://placehold.co/400x600', alt: 'Imagen 3' },
        { image: 'https://placehold.co/400x600', alt: 'Imagen 4' },
    ];
}
