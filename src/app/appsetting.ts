import { HttpHeaders } from '@angular/common/http';

export class AppSetting {
  static Apihost = "http://localhost:59845/api/values/";
  static httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
}
