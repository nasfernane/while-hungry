import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  editPostId: number;

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
    private postService: BlogService,
    private uiService: UiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.postGroup = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
      description: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(150)]],
    });
  }

  ngOnInit(): void {
    if (this.route?.snapshot?.url[1]?.path === 'edit' && this.route?.snapshot?.params['id']) {
      this.editMode = true;
      this.blogService.find(this.route?.snapshot?.params['id']).subscribe((res) => {
        // check if we found the correct post
        if (res && res.id == this.route?.snapshot?.params['id']) {
          if (this.appService.getUserId() === res.authorId) {
            this.editPostId = res.id;
            this.setPostOldValues(res);
          } else {
            this.router.navigate(['blog'])
          }
        } else {
          this.router.navigate(['blog'])
        }
      })
    }

    this.appService.breadcrumb = ['While Hungry', 'Blog', 'New Post']
  }

  setPostOldValues(post: any) {
    this.postGroup.controls['title'].setValue(post.title);
    this.postGroup.controls['description'].setValue(post.description);
    this.markdown = post.content;
   
    this.oldPicturePath = post.picture;
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
   * This function formats the post object to be sent to the server
   * @returns The post object.
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

            if (editMode) {
              this.blogService.update(this.post, this.editPostId).subscribe((res: any) => {
                if (res) {
                  this.uiService.openAlert('Post successfully updated');
                  this.router.navigate(['blog/post', res.id]);
                }
              });
            } else {
              this.blogService.create(this.post).subscribe((res: any) => {
                if (res) {
                  this.uiService.openAlert('Post successfully updated');
                    this.router.navigate(['blog/post', res.id]);
                }
              })
            }
            
          }
        })
      } else if (!this.previewPicturePath && editMode) {
        this.pictureName = this.oldPicturePath;
        this.formatPost(markdown);
        this.blogService.update(this.post, this.editPostId).subscribe((res: any) => {
          if (res) {
            this.uiService.openAlert('Post successfully updated');
            this.router.navigate(['blog/post', res.id]);
          }
        });
      }
    }
  }
}

