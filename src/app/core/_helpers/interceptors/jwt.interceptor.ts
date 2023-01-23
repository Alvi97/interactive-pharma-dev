import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from "../../services/auth.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authservice:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let currentUser = this.authservice.currentUserValue;
    console.log(currentUser)

    if (currentUser || currentUser?.token) {
      console.log("currentUser.token" , currentUser)
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`
        }
      });
    }
    return next.handle(request);
  }

}
