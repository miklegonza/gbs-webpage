import { Component } from '@angular/core';
import { CarouselComponent } from "../../components/carousel/carousel.component";

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss'
})
export class PresentationComponent {

}
