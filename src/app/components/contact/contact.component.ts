import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ReCaptcha2Component} from 'ngx-captcha';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, AfterViewInit {

  public readonly siteKey = '6Le7mNcaAAAAAJ_ECxHSSvrJBex0b9spWNAIMevK';

  public captchaIsLoaded = false;
  public captchaSuccess = false;
  public captchaIsExpired = false;
  public captchaResponse?: string;

  public theme: 'light' | 'dark' = 'light';
  public size: 'compact' | 'normal' = 'normal';
  public lang = 'en';
  public type: 'image' | 'audio';
  public useGlobalDomain = false;

  @ViewChild('captchaElem', {static: false}) captchaElem: ReCaptcha2Component;
  @ViewChild('langInput', {static: false}) langInput: ElementRef;
  @ViewChild('contactForm', { read: ElementRef }) contactForm: ElementRef;

  public success: boolean;
  public error: boolean;
  public aFormGroup: FormGroup;

  lat = 38.81326876117266;
  lng = -121.22274450431374;

  constructor(private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private cdr: ChangeDetectorRef,
              private http: HttpClient) {
    this.activatedRoute.queryParams.subscribe(params => {
      const success = params[`success`];
      if (success === 'true') {
        this.success = true;
      } else if (success === 'false') {
        this.error = true;
      }
    });
  }

  ngOnInit(): void {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required],
      name: ['', Validators.required],
      apn: ['', Validators.required],
      contact: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  handleReset(): void {
    this.captchaSuccess = false;
    this.captchaResponse = undefined;
    this.captchaIsExpired = false;
    this.cdr.detectChanges();
  }

  handleSuccess(captchaResponse: string): void {
    this.captchaSuccess = true;
    this.captchaResponse = captchaResponse;
    this.captchaIsExpired = false;
    this.cdr.detectChanges();
  }

  handleLoad(): void {
    this.captchaIsLoaded = true;
    this.captchaIsExpired = false;
    this.cdr.detectChanges();
  }

  handleExpire(): void {
    this.captchaSuccess = false;
    this.captchaIsExpired = true;
    this.cdr.detectChanges();
  }

  changeTheme(theme: 'light' | 'dark'): void {
    this.theme = theme;
  }

  changeSize(size: 'compact' | 'normal'): void {
    this.size = size;
  }

  changeType(type: 'image' | 'audio'): void {
    this.type = type;
  }

  setLanguage(): void {
    this.lang = this.langInput.nativeElement.value;
  }

  setUseGlobalDomain(use: boolean): void {
    this.useGlobalDomain = use;
  }

  getCurrentResponse(): void {
    const currentResponse = this.captchaElem.getCurrentResponse();
    if (!currentResponse) {
      alert('There is no current response - have you submitted captcha?');
    } else {
      alert(currentResponse);
    }
  }

  getResponse(): void {
    const response = this.captchaElem.getResponse();
    if (!response) {
      alert('There is no response - have you submitted captcha?');
    } else {
      alert(response);
    }
  }

  reload(): void {
    this.captchaElem.reloadCaptcha();
  }

  getCaptchaId(): void {
    alert(this.captchaElem.getCaptchaId());
  }

  reset(): void {
    this.captchaElem.resetCaptcha();
  }

  ngAfterViewInit(): void {
  }

  submit(): void {
    console.warn(this.aFormGroup.value);
    // this.http.post<any>('http://localhost/php_backend/contact.php', this.aFormGroup.value).subscribe(data => {
    //   alert(data);
    // });
    if (this.aFormGroup.valid) {
      this.contactForm.nativeElement.submit();
    }
  }

}
