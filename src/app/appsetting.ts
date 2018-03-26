import { HttpHeaders } from '@angular/common/http';

export class AppSetting {
  static Apihost = 'http://localhost:50705/api/values/';
  static httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: true
  };
}
