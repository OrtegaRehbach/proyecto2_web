import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slide-content',
  templateUrl: './slide-content.component.html',
  styleUrls: ['./slide-content.component.scss']
})
export class SlideContentComponent {
  @Input('title') slideTitle = "Title";
  @Input('description') slideDesc = "Slide description";
  @Input('src') imgSrc = "assets/img/placeholder.jpg";
}
