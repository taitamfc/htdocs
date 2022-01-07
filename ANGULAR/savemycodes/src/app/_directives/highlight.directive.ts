import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '.jstree-anchor'
})

export class HighlightDirective {
    constructor(private el: ElementRef) { }
    @Input() defaultColor: string;
    @Input('myHighlight') highlightColor: string;

    @HostListener('click')
    onClick() {
        this.highlight('red');
        console.log('click');
    }
    
    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.highlightColor || this.defaultColor || 'red');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}