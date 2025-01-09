import { Component, Input, inject } from '@angular/core';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { PieService } from '../services/pie.service';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [SideMenuComponent, MatExpansionModule, RouterOutlet],
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css'],
})
export class ProductsViewComponent {
  @Input() set categoryId(val: string) {
    this.pieService.setSelectedCategory(val);
  }

  private readonly pieService = inject(PieService);
}
