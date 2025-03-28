import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuranimService {
  A3ServiceSuranim(imageId: any, filename: string) {
      document.getElementById(imageId)?.setAttribute('src', filename);
  }
}
