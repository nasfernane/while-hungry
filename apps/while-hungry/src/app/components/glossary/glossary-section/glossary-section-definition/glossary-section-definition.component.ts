import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wh-glossary-section-definition',
  templateUrl: './glossary-section-definition.component.html',
  styleUrls: ['./glossary-section-definition.component.scss']
})
export class GlossarySectionDefinitionComponent implements OnInit {
  @Input() definition: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.definition);
  }

}
