import { Injectable } from '@angular/core';
import { IUser } from '../defines/user.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '@environments/environment';


@Injectable()
export class UserService {
	private apiUrl 	 = environment.apiUrl + '/users';

	httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};

	constructor(
		private _httpService: HttpClient
	) {
		
	}

	login(username:string, password:string) {
        return this._httpService.post<IUser>(`${environment.apiUrl}/angular/courses`, { username, password })
            .pipe(
				map(
					response => {
                		localStorage.setItem('user', JSON.stringify(response));
            		}
				)
			);
    }

	getItems(): Observable<IUser[]> {
		return this._httpService.get<IUser[]>(this.apiUrl)
			.pipe(
				map( response => response ),
				catchError(this.handleError<IUser[]>('getItems', []))
			);
	}
	getItem(id: number): Observable<IUser[]> {
		return this._httpService.get<IUser[]>(this.apiUrl+id)
			.pipe(
				map( this.extractData ),
				tap(_ => this.log(`fetched hero id=${id}`)),
				catchError(this.handleError<IUser[]>(`getHero id=${id}`)
			)
		);
	}
	
	addItem( course: IUser ): Observable<IUser[]> {
		return this._httpService.post<IUser[]>(this.apiUrl, course, this.httpOptions)
			.pipe(
				map( this.extractData ),
				tap( (course: any) => this.log(`added hero id=${course.id}`),
				catchError(this.handleError<IUser>('addHero'))
			)
		);
	}

	editItem( id: number, course: IUser ): Observable<IUser[]> {
		return this._httpService.put<IUser[]>(this.apiUrl+id, course, this.httpOptions)
			.pipe(
				map( this.extractData ),
				tap( (course: any) => this.log(`updated hero id=${course.id}`),
				catchError( this.handleError<IUser>('editItem') )
			)
		);
	}

	deleteHero(id: number): Observable<IUser[]> {
		return this._httpService.delete<IUser[]>(this.apiUrl+id)
			.pipe(
				map( this.extractData ),
				tap( _ => this.log(`deleted hero id=${id}`) ),
				catchError( this.handleError<IUser[]>(`deleteHero id=${id}`) )
			);
	}

	getItemsNonObservable() {
		return  this._httpService.get(this.apiUrl);
	}

	private extractData(response: any) {
		return response || { };
	}
	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
		  //console.error(error); // log to console instead
		  this.log(`${operation} failed: ${error.message}`);
		  //return error.message;
		  return of(result as T);
		};
	  }
	private log(message: string) {
		console.log(`CourseService: ${message}`);
	}
}