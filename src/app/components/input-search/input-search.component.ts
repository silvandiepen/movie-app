import { Component } from '@angular/core';
import { useBemm } from "bemm";

@Component({
  selector: 'input-search',
  standalone: true,
  imports: [],
  templateUrl: './input-search.component.html',
  styleUrl: './input-search.component.scss'
})
export class InputSearchComponent {
   bemm = useBemm('input-search');
}
