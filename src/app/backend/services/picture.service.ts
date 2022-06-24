import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PictureService {

  constructor(private http: HttpClient) { }
}
