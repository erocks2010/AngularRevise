import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/do';

@Injectable()
export class HttpMiddleWareService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const reqClone = req.clone({ setHeaders: { 'Access-Control-Allow-Origin': '*' } });
    console.log('middleware', reqClone);
    const started = Date.now();
    return next.handle(reqClone)
      .do(() => {
        console.log('Time taken for response is ',Date.now() - started);
      });
  }
}
