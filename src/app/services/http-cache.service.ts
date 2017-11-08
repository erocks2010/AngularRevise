import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable()
export class HttpCacheService  {

  constructor(private cache) { }

}
