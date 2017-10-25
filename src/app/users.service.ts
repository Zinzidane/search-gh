import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class UsersService {
	constructor(private http: Http) {}

	getUser(username: string): Observable<any> {
		return	this.http.get(`https://api.github.com/users/${username}?client_id=9a8aa92b89da770cacb2&client_secret=61da79c0dd029edf5020fc881c32a9fbaf3a45f9`)
			.map((response: Response) => response.json());
	}
}