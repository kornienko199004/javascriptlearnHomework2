import { Injectable, Inject } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL_TOKEN } from './config';

@Injectable()
export class InterceptorService implements HttpInterceptor{

  constructor(
    @Inject(BASE_URL_TOKEN) private baseUrl: string,
  ) { }

  public intercept<T>(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<T>> {
    const jsonRequest: HttpRequest<T> = req.clone({
      url: `${this.baseUrl}${req.url}`,
    });

    return next.handle(jsonRequest);
  }
}
