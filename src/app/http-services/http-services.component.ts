import { Component, OnInit } from '@angular/core';
import { HttpHandler, HttpRequest, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

interface userStructure {
  "userId": number,
  "id": number,
  "title": string,
  "body": string
}

@Component({
  selector: 'http-services',
  templateUrl: './http-services.component.html',
  styleUrls: ['./http-services.component.css']
})
export class HttpServicesComponent {
  allUsers: userStructure;

  constructor(private http: HttpClient) {
  }

  getAllUsers() {
    this.http.get<userStructure>('https://jsonplaceholder.typicode.com/posts', { observe: 'response' }).subscribe((response) => {
      this.allUsers = response.body;
    },
      (err: HttpErrorResponse) => {
        if (err instanceof Error) {
          alert('Application Error =>Network Error');
        }
        else {
          alert('Network Error =>' + err.message);
        }
      })
  }

}
