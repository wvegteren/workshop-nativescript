import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular';

@Component({
  selector: 'my-blue',
  moduleId: module.id,
  templateUrl: './blue.component.html',
  styleUrls: ['./color.component.css']
})
export class BlueComponent{
  private pink: string = '#ff0088';

  constructor(private router: RouterExtensions, private route: ActivatedRoute) {
  }

  goRed() {
    this.router.navigate(['/color/red']);
  }

  goPink() {
    this.router.navigate(['/color/rgb', this.pink]);
  }

  goBack() {
    this.router.back();
  }

  goHome() {
    this.router.navigate(['/color'], { clearHistory: true });
  }
}
