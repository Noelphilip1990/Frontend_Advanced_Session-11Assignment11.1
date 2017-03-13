import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector:'select-app',
	template:`
	<h1>Angular 2 select demo app</h1>
	<h4>Assignment 10.4</h4>
<form style="padding:18px;max-width:800px;"
    [formGroup]="form">
	
    <div style="margin:5px 0;font-weight:600;">Single select example</div>
    <ng-select
		  [options]="options0"
		  
		  placeholder="Select one"
      formControlName="selectSingle"
		  [allowClear]="true"
      (opened)="onSingleOpened()"
      (closed)="onSingleClosed()"
      (selected)="onSingleSelected($event)"
      (deselected)="onSingleDeselected($event)">
	</ng-select>
    
    <div style="margin:10px 0 20px 0;color:#666;font-size:11pt;font-style:italic;">
	    Selected option id: {{form.value['selectSingle']}}
    </div>

    <div>Events:</div>
    <pre #preSingle>{{logSingleString}}</pre>

    <hr style="margin: 18px 0;">

    
</form>`

	//directives: [ChildComponent]
})
export class SelectComponent implements OnInit
{
	form: FormGroup;

	
	options0: Array<any> = [];
	
	selection: Array<string>;

	@ViewChild('preSingle') preSingle;


	logSingleString: string = '';
	

	constructor() {

		let numOptions = 100;
		let opts = new Array(numOptions);
		let chrs:Array<any>=['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
    'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
    'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin',
    'Düsseldorf', 'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg',
    'Hamburg', 'Hannover', 'Helsinki', 'Kraków', 'Leeds', 'Leipzig', 'Lisbon',
    'London', 'Madrid', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Málaga',
    'Naples', 'Palermo', 'Paris', 'Poznań', 'Prague', 'Riga', 'Rome',
    'Rotterdam', 'Seville', 'Sheffield', 'Sofia', 'Stockholm', 'Stuttgart',
    'The Hague', 'Turin', 'Valencia', 'Vienna', 'Vilnius', 'Warsaw', 'Wrocław',
    'Zagreb', 'Zaragoza', 'Łódź'];
		for (let i = 0; i < chrs.length; i++) {
			opts[i] = {
				value: chrs[i],
				label: chrs[i]
			};
		}

		this.options0 = opts.slice(0);
		
	}

	ngOnInit() {
		this.form = new FormGroup({});
		this.form.addControl('selectSingle', new FormControl(''));
	}

	onSingleOpened() {
		this.logSingle('- opened');
	}

	onSingleClosed() {
		this.logSingle('- closed');
	}

	onSingleSelected(item) {
		this.logSingle('- selected (value: ' + item.value + ', label:' +
			item.label + ')');
	}

	onSingleDeselected(item) {
		this.logSingle('- deselected (value: ' + item.value + ', label:' +
			item.label + ')');
	}

	private logSingle(msg: string) {
		this.logSingleString += msg + '\n';

		// Let change detection do its work before scrolling to div bottom.
		setTimeout(() => {
			this.scrollToBottom(this.preSingle.nativeElement);
		});
	}

	

	private scrollToBottom(elem) {
		elem.scrollTop = elem.scrollHeight;
	}
}