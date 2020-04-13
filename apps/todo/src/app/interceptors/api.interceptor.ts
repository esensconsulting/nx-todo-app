import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    try {
      if (request.url.startsWith('/')) {
        const url = `${environment.apiUrl}${request.url}`;
        request = request.clone({ url });
      }
    } catch (e) {}

    return next.handle(request);
  }
}
