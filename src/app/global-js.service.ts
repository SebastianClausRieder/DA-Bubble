import { HostListener, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalJSService {

  isGerman: boolean = true;

  signUp: boolean = false;
}