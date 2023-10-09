import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef, AfterViewInit, ContentChild, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, AfterViewInit, AfterContentInit {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;
  constructor() { }
ngOnInit(): void {
  console.log('text content' + this.header.nativeElement.textContent);
  console.log('text PARAcontent' + this.paragraph.nativeElement.textContent);
}

ngAfterViewInit(): void {
  console.log('text content' + this.header.nativeElement.textContent);
}
ngAfterContentInit(): void {
  console.log('text PARAcontent' + this.paragraph.nativeElement.textContent);
}

}
