import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-html',
  templateUrl: './full-html.component.html',
  styleUrls: ['./full-html.component.css']
})
export class FullHtmlComponent implements OnInit {

  @Input() fullHtml: any;
  constructor() { }

  ngOnInit(): void {
  }

}
import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[innerHrefToFragment]'
})
export class InnerHrefToFragment {
    constructor(
        private element: ElementRef
    ) {
        setTimeout(() => {
            const links = this.element.nativeElement.querySelectorAll('a[href]');
            const fragmentLinks = this.findAnchors(links);
            fragmentLinks.forEach((el: HTMLAnchorElement): void => {
                const fragment = el.hash;
               
this.addLinkStyles(el);
                this.addListenerToScroll(el, fragment)
            });
        });
    }

    private addLinkStyles(element: HTMLAnchorElement): void {
        element.style.color = '-webkit-link';
        element.style.cursor = 'pointer';
        element.style.textDecoration = 'underline';
        element.removeAttribute('href');
    }

    private addListenerToScroll(element: HTMLAnchorElement, fragment: string): void {
        element.addEventListener('click', () => {
//  window.location.hash = fragment;
            const elementWithFragment = this.element.nativeElement.querySelectorAll(fragment)[0] as HTMLElement;
            elementWithFragment.scrollIntoView();
        });
    }

    private findAnchors(links: NodeList): Node[] {
        return Array.from(links).filter((el: HTMLAnchorElement): boolean => {
            const href = el.getAttribute('href');
            return href.includes('#');
        });
    }
}