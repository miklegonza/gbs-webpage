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
        { image: 'carousel1.jpg', alt: 'Imagen 1' },
        { image: 'carousel2.jpg', alt: 'Imagen 2' },
        { image: 'carousel3.jpg', alt: 'Imagen 3' },
    ];
}
