import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService, RecipeService } from '@wh/core-data';
import { AppService } from '@wh/core-utils';

// env file
import { environment } from '@wh/env';
import { UiService } from '@wh/ui';

import { ToolbarItemName } from '@mdefy/ngx-markdown-editor';
import { MarkdownEditorComponent } from '@mdefy/ngx-markdown-editor';

@Component({
  selector: 'wh-blog-new-post',
  templateUrl: './blog-new-post.component.html',
  styleUrls: ['./blog-new-post.component.scss'],
})
export class BlogNewPostComponent implements OnInit {
  @ViewChild(MarkdownEditorComponent) ngxMde: MarkdownEditorComponent;
  environment = environment; // get env file pour picture requests
  markdown = "";
  post: Record<string, unknown> = {};
  postGroup: FormGroup;
  editMode = false;

  pictureFile: File;
  pictureName: string;
  previewPicturePath: string;
  oldPicturePath: string;

  tipsExpanded = false;
  public toolbar: ToolbarItemName[] = ['increaseHeadingLevel',  'decreaseHeadingLevel', 'toggleBold', 'toggleItalic', 'toggleStrikethrough', 'toggleQuote', '|', 'insertLink', 'insertImageLink', 'insertTable', '|', 'toggleUnorderedList', 'toggleOrderedList', 'toggleCheckList', '|', 'togglePreview', 'toggleSideBySidePreview', '|', 'openMarkdownGuide' ];

  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService,
    private blogService: BlogService,
    private recipeService: RecipeService,
    private uiService: UiService,
    private router: Router,
  ) {
    this.postGroup = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
      description: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(150)]],
    });
  }

  ngOnInit(): void {
    this.appService.breadcrumb = ['While Hungry', 'Blog', 'New Post']
  }

  /**
   * It sets the pictureFile property to the file selected by the user and setup file preview.
   * @param {any} event - any
   */
   setPicture(event: any) {
    this.pictureFile = event.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      this.previewPicturePath = reader.result as string;
    };

    reader.readAsDataURL(this.pictureFile);
  }

   // on picture add
   formatPicture() {
    const formData = new FormData();
    formData.append('picture', this.pictureFile, this.pictureFile.name);

    return formData;
  }

  /**
   * This function formats the recipe object to be sent to the server
   * @returns The recipe object.
   */
   formatPost(markdown: string) {
    if (markdown) {
      this.post['title'] = this.postGroup.controls['title'].value;
      this.post['description'] = this.postGroup.controls['description'].value;
      this.post['content'] = markdown;
      this.post['authorId'] = this.appService.getUserId();
      this.post['picture'] =  this.pictureName;

      return this.post;
    } else {
      return null
    }
  }

  createOrUpdatePost(editMode = this.editMode) {
    const markdown = this.ngxMde.mde.getContent(); 
    if (this.postGroup.valid && this.post && markdown.length > 20) {
      if (this.previewPicturePath) {
        this.recipeService
        .storePicture(this.formatPicture())
        .subscribe((picture: any) => {
          if (picture) {
            this.pictureName = picture.filename;
            this.formatPost(markdown);
            this.blogService.create(this.post).subscribe((res: any) => {
              if (res) {
                this.uiService.openAlert('Post successfully updated');
                  this.router.navigate(['blog/post', res.id]);
              }
            })
          }
        })
      }
    }
  }
}

