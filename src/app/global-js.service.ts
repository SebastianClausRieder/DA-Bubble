import { HostListener, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalJSService {
  private signUpSubject = new BehaviorSubject<boolean>(false);
  signUp$ = this.signUpSubject.asObservable();

  isGerman: boolean = false;

  toggleSignUp() {
    this.signUpSubject.next(!this.signUpSubject.value);
  }
}