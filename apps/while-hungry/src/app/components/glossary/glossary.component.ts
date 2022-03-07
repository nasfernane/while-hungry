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
  constructor(
    private glossaryService: GlossaryService,
  ) { }

  ngOnInit(): void {
    this.glossaryService.getGlossary().subscribe((glossary: Definition[]) => {
      console.log(glossary);
    })
  }

}
