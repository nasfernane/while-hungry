import { Injectable } from '@angular/core';

// libraries
import moment, { relativeTimeRounding } from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public currentUser: any = {};
  public userLogged = false;
  private _breadcrumb = "";


  /**
 * log out user, clear current user infos and local storage
 */
  public logout() {
    this.currentUser = null
    this.userLogged = false;
    localStorage.clear();
  }

  /**
   * set user data both in service and local storage
   * @param user 
   */
  public setUserData(user: any) {
    if (user) {
      this.setUser(user)
      this.setUserToLocalStorage(JSON.stringify(this.getUser()))
    }
  }

  /**
   * set current user informations in the service
   * @param user 
   */
  public setUser(user: any) {
    this.currentUser = user;
    this.userLogged = true;
  }

  /**<
   * set current user informations in local storage
   * @param user 
   */
  private setUserToLocalStorage(user: any) {
    if (user === null) {
      localStorage.removeItem('currentUser');
    } else {
      localStorage.setItem('currentUser', user);
    }
  }

  /**
   * get current user
   * @returns object
   */
  public getUser(): Record<string, unknown> {
    return this.currentUser;
  }

  /**
   * get current user id
   * @returns number
   */
  public getUserId(): number {
    return this.currentUser.id;
  }

  /**
   * get current user role
   * @returns string or boolean
   */
  public getUserRole() {
    if (this.currentUser && this.currentUser.role) {
      return this.currentUser.role;
    } else {
      return false;
    }
  }

  /**
   * Get current user nickname
   * @returns string or boolean
   */
  public getUserNickname() {
    if (this.currentUser && this.currentUser.nickname) {
      return this.currentUser.nickname;
    } else {
      return false;
    }
  }

  /**
   * check if current user is admin
   * @param role 
   * @returns boolean
   */
  public isAdmin(role: string = this.getUserRole()) {
    return ['Creator', 'Admin'].includes(role);
  }

  /**
   * check if user data available in local storage. If so, load data in service
   */
  public loadUserFromLocalStorage() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) this.setUser(JSON.parse(currentUser));
  }

  public getBreadcrumb(): string {
    return this._breadcrumb;
  }

  set breadcrumb(v: Array<string>) {
    setTimeout(() => (this._breadcrumb = v.map(v2 => "<span class='breadcrumb__chunk' routerLink='v2'>&nbsp;"+v2+"&nbsp;</span>").join("<span class='breadcrumb__divider'>&nbsp»&nbsp</span>")));
  }

  public formatDate(date: string) {
    return moment(date).format('MMMM Do YYYY');
  }

  public convertUnitLabel(convertToUnit: string, unit: string){
  
    const unitMapping = new Map<string, string>([
      ['grams', 'ounces'],
    ])

    if (convertToUnit === 'us') {
      if (unitMapping.get(unit)) {
        return unitMapping.get(unit)
      } else {
        return unit;
      }
    } else if (convertToUnit === 'metrics') {
      for (const [key, value] of unitMapping.entries()) {
        if (value === unit)
          return key;
      }
      return unit;
    }

    return unit;
  }

  public convertUnitAmount(unit: string) {
    const unitMapping = {
      'grams': 0.035,
    }

    for (const [key, value] of Object.entries(unitMapping)) {
      if (key === unit) {
        return value;
      }
    }
    
    return 1;
  }

  public round(value: number) {
    return Math.round((value + Number.EPSILON) * 100) / 100;
  }
}
