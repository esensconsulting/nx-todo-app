import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  public isSmallScreen(): boolean {
    return window.innerWidth < 960;
  }
}
