import{Injectable} from '@angular/core'
@Injectable()
export class ListServices
{
	public list:any={};
	constructor(){}
public setList(name:string,dob:string,email:string,status :string,enroll :string)
{
	console.log("name:"+name);
	this.list={
		name:name,
		dob:dob,
		email:email,
		status:status,
		enroll:enroll
	};
	
	//this.list.push(obj);
}
public getList()
{
	return this.list;
}
}