import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  constructor() {}

  public isSmallScreen(): boolean {
    return window.innerWidth < 960;
  }
}
