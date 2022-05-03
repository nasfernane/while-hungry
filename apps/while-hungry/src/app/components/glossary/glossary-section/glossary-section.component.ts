import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wh-glossary-section',
  templateUrl: './glossary-section.component.html',
  styleUrls: ['./glossary-section.component.scss'],
})
export class GlossarySectionComponent implements OnInit {
  @Input() section: any;
  letter: string;
  definitions: any[];

  // constructor() { }

  ngOnInit(): void {
    if (this.section) {
      this.letter = this.section.key;
      this.definitions = this.section.value;
    }
  }
}
