import { Component, OnInit } from '@angular/core';
import { GlossaryService } from '@wh/core-data';

import { Definition } from '@prisma/client';
@Component({
  selector: 'wh-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.scss']
})
export class GlossaryComponent implements OnInit {
  glossary: Definition[];
  definitions: Map<string, any[]>;
  alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  constructor(
    private glossaryService: GlossaryService,
  ) { 
    this.definitions = new Map()
  }

  ngOnInit(): void {
    this.glossaryService.getGlossary().subscribe((glossary: Definition[]) => {
      if (glossary) this.glossary = glossary;
      this.organizeGlossary(this.glossary);
    })
  }

  organizeGlossary(glossary: Definition[]) {
    for (const letter of this.alphabet) {
      const section = [];
      for (const def of glossary) {
        if (def.label.toLowerCase().startsWith(letter)) {
          section.push(def);
        }
      }

      this.definitions.set(letter, section)
    }

    console.log(this.definitions)
  }

}
