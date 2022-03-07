import { Component, OnInit } from '@angular/core';

// services
import { GlossaryService } from '@wh/core-data';
import { AppService } from '@wh/core-utils';

// schema
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
    private appService: AppService,
    private glossaryService: GlossaryService,
  ) { 
    this.definitions = new Map()
  }

  ngOnInit(): void {
    this.appService.breadcrumb = ['While Hungry', 'Glossary']
    this.glossaryService.getGlossary().subscribe((glossary: Definition[]) => {
      if (glossary) this.glossary = glossary;
      this.organizeGlossary(this.glossary);
    })
  }

  /**
   *  organize all definitions by letter section
   * @param glossary 
   */
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
  }

  /**
   * scroll to the chosen letter section on click
   * @param el 
   */
  scroll(el: string) {
    const element = document.getElementById(el);

    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  }

}
