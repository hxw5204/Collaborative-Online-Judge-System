import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import {Observable, BehaviorSubject} from 'rxjs';
import 'rxjs/add/operator/toPromise';
import {Problem} from '../models/problem.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  // tslint:disable-next-line:variable-name
  private _problemService = new BehaviorSubject<Problem[]>([]);
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.body || error);
  }

  constructor(private httpClient: HttpClient) { }

  // @ts-ignore
  getProblems(): Observable<Problem[]> {
    this.httpClient.get('/api/v1/problems')
      .toPromise()
      .then((res: any) => {
        this._problemService.next(res);
      })
      .catch(this.handleError);
    return this._problemService.asObservable();
  }

  getProblem(id: number): Promise<Problem> {
    return this.httpClient.get(`api/v1/problems/${id}`)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }

  addProblem(problem: Problem): Promise<Problem> {
    const options = {headers: new HttpHeaders({'Content-type': 'application/json'})};
    return this.httpClient.post('api/v1/problems', problem, options)
      .toPromise()
      .then((res: any) => {
        this.getProblems();
        return res;
      })
      .catch(this.handleError);
  }
}
