import { Component } from '@angular/core';
import { useBemm } from "bemm";

@Component({
  selector: 'navigation',
  standalone: true,
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  bemm = useBemm('navigation')
}
