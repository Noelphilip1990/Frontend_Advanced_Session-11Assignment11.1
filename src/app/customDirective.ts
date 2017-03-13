import {Directive,ElementRef,Input} from '@angular/core';
@Directive({
	selector:'[myHighlight]'
})
export class CustomDirectives
{
	@Input('myHighlight') colors:string="blue";
	constructor(private el:ElementRef)
	{
		el.nativeElement.style.color=this.colors;
	}
}