import { Component, Input, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { useBemm } from 'bemm';
// @ts-ignore
import { Icons, getSvgIcon } from 'open-icon/svg';

@Component({
  selector: 'icon',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class IconComponent {
  @Input() name!: Icons;


  constructor(private sanitizer: DomSanitizer) { }

  bemm = useBemm('icon')

  get iconData(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(getSvgIcon(this.name));
  }

}
