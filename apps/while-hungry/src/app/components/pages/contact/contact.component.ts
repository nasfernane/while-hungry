import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// services
import { AppService } from '@wh/core-utils';
import { ContactService } from '@wh/core-data';
import { UiService } from '@wh/ui';

@Component({
  selector: 'wh-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactGroup: FormGroup;
  subjects = [
    'Just wanted to say hi !', 
    'I have a question about a recipe',
    'I have a question about the use of the website',
    'I have concerns about privacy policy',
    'I want to contribute to this project',
    'Other'
  ];

  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService,
    private contactService: ContactService,
    private uiService: UiService,
  ) { }

  ngOnInit(): void {
    this.appService.breadcrumb = ['While Hungry', 'Contact'];
    
    this.initForm()
  }

  initForm() {
    this.contactGroup = this.formBuilder.group({
      nickname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]]
    })

    if (this.appService.userLogged) {
      const user = this.appService.getUser();
      this.contactGroup.patchValue({
        nickname: user['nickname'],
        email: user['email'],
      })
    }
  }

  sendMessage() {
    if (this.contactGroup.valid) {
      const body = {
        nickname: this.contactGroup.controls['nickname'].value,
        email: this.contactGroup.controls['email'].value,
        subject: this.contactGroup.controls['subject'].value,
        message: this.contactGroup.controls['message'].value,
      }

      this.contactService.sendMessage(body).subscribe((res) => {

        if (res) {
          this.initForm();
          this.uiService.openAlert('Message sent !');
        } else {
          this.uiService.openAlert('Message not sent, please try again');
        }
      })
    } else {
      this.uiService.openAlert('Invalid inputs, please check your form and try again');
    }
    
  }

}
