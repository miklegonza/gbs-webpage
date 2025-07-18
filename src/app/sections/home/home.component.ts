import { Component } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { PresentationComponent } from "../presentation/presentation.component";
import { AboutComponent } from "../about/about.component";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CarouselComponent, PresentationComponent, AboutComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {}
