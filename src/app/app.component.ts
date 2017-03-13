import { Component } from '@angular/core';

import { ListServices } from './app.listServices';
@Component({
    selector: 'modal-demo',
	template: `
	
	<br>
	<h2>Assignment 11.1</h2>
	<p myHighlight="'red'">Name{{Name}}</p><br>
	<p [myHighlight]=colors>DOB:{{DOB}}</p><br>
	<p [myHighlight]='colors'>Email:{{Email}}</p><br>
	<p [myHighlight]="'colors'">Status:{{Status }}</p><br>
	<p myHighlight=colors>Enroll:{{Enroll}}</p><br>
	`
	
	 ,
	
})

export class AppComponent{
	public colors:string='red';
	text: string = "Modal Sample Text";
	obj:any={};
	Name:string;
	DOB:string;
	Email:string;
	Status :string;
	Enroll :string; 
	constructor(li:ListServices)
	{
		li.setList("Noel","31.03.1990","noel@gmail.com","Active","www.google.com");
		
		this.obj=li.getList();
	console.log("List:"+this.obj.names);
	this.Name=this.obj.name;
	this.DOB=this.obj.dob;
	this.Email=this.obj.email;
	this.Status=this.obj.status;
	this.Enroll=this.obj.enroll;
	}
}
