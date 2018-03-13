import { HttpHeaders } from '@angular/common/http';

export class AppSetting {
  static Apihost = "http://localhost:59844/api/values/";
  static httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: true
  };
}
