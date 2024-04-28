import { Component } from '@angular/core';
import { useBemm } from 'bemm';
import { IconComponent } from '../icon/icon.component';
import { Icons } from 'open-icon';


@Component({
  selector: 'logo',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent {
  bemm = useBemm('logo')
  Icons = Icons;
}
