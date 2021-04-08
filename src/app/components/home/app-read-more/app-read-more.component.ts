import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-app-read-more',
  templateUrl: './app-read-more.component.html',
  styleUrls: ['./app-read-more.component.css']
})
export class AppReadMoreComponent implements OnInit {

  constructor() {
  }

  @Input() content: string;
  @Input() limit: number;
  @Input() completeWords: boolean;

  isContentToggled = false;
  nonEditedContent: string;

  ngOnInit(): void {
    console.log(this.content);
    this.nonEditedContent = this.content;
    this.content = this.formatContent(this.content);
  }

  toggleContent(): any {
    this.isContentToggled = !this.isContentToggled;
    this.content = this.isContentToggled ? this.nonEditedContent : this.formatContent(this.content);
  }

  formatContent(content: string): any {
    if (this.completeWords) {
      this.limit = content.substr(0, this.limit).lastIndexOf(' ');
    }
    return `${content.substr(0, this.limit)}...`;
  }

}
