import { Component, inject, Input } from '@angular/core';
import { PieService } from '../../services/pie.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PRODUCT_ROUTER_TOKENS } from '../products.routes';

@Component({
  standalone: true,
  imports: [NgFor, AsyncPipe, RouterLink, RouterLinkActive],
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent {
  @Input() customize = false;

  public readonly pies$ = inject(PieService).filteredPies$;
  public readonly customizeLink = `./${PRODUCT_ROUTER_TOKENS.CUSTOMIZE}`;
  public readonly detailLink = `./${PRODUCT_ROUTER_TOKENS.DETAIL}`;
}
