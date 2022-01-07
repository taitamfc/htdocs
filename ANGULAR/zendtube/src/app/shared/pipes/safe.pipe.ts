import {Pipe,PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
	name: 'safe'
})
export class SafePipe implements PipeTransform{
	constructor(protected _sanitizer: DomSanitizer) {

	}
	public transform(value: any) :any {
		return this._sanitizer.bypassSecurityTrustResourceUrl(value);
	}
}