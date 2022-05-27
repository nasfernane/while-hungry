import { Component, Input } from '@angular/core';

@Component({
  selector: 'wh-glossary-section-definition',
  templateUrl: './glossary-section-definition.component.html',
  styleUrls: ['./glossary-section-definition.component.scss'],
})
export class GlossarySectionDefinitionComponent {
  @Input() definition: any;
}
