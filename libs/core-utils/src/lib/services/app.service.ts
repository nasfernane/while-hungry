import { Injectable } from '@angular/core';

// libraries
import moment from 'moment';
import { RecipeReview } from '@prisma/client';

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
    return this.currentUser || null;
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

  public getUserAvatar() {
    if (this.currentUser && this.currentUser.nickname) {
      return this.currentUser.avatar;
    } else {
      return false;
    }
  }

  public getUserToken() {
    if (this.currentUser && this.currentUser.accessToken) {
      return this.currentUser.accessToken;
    } else {
      return false;
    }
  }

  /**
   * checks if current user is admin
   * @param role 
   * @returns boolean
   */
  public isAdmin(role: string = this.getUserRole()) {
    return ['Creator', 'Admin'].includes(role);
  }

 /**
  * checks if user is logged
  * @returns A boolean value.
  */
  public isLogged() {
    if (this.currentUser && this.currentUser.accessToken) {
      return true;
    } else {
      return false;
    }
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
    return moment(date).format('MM/DD/YYYY @ hh:mm A');
  }

  public formatTimer(timer: number) {
    if (timer >= 60) {
      const hours = Math.floor(timer / 60);          
      const mins = timer % 60;

      return `${hours} H ${mins !== 0 ? mins + ' mins.' : ''}`;
    } else {
      return `${timer} mins`;
    }
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

  // round to two decimals
  public round2decimals(value: number) {
    return Math.round((value + Number.EPSILON) * 100) / 100;
  }

  // round to two decimals
  public round1decimal(value: number) {
    return Math.round((value + Number.EPSILON) * 10) / 10;
  }

  // calculate average rating of review then round to one decimal
  getAvgReview(reviews: RecipeReview[]) {
    return Math.round((reviews.reduce((a, { review }) => a + review, 0) / reviews.length) * 10) / 10;
  }

  /**
   * 
   * @param items: Array
   * @param prop: String
   * @returns Int
   * ex: const avgRating = this.sum(recipe.recipeReviews, 'review')
   */
  // return sum of propertiers inside objets in an array
  propSum(items: Array<any>, prop: string) {
    return items.reduce( function(a, b){
        return a + b[prop];
    }, 0);
  }

  // deep copy an object;
  // deepCopy(obj: any) {
  //   let copy;

  //   if (null == obj || "object" != typeof obj) return obj;

  //   // Gestion des dates
  //   // if (obj instanceof Date) {
  //   //   copy = new Date();
  //   //   copy.setTime(obj.getTime());
  //   //   return copy;
  //   // }

  //   // Gestion des tableaux
  //   // if (obj instanceof Array) {
  //   //   copy = [];
  //   //   for (let i = 0, len = obj.length; i < len; i++) {
  //   //       copy[i] = this.deepCopy(obj[i]);
  //   //   }
  //   //   return copy;
  //   // }

  //   // Gestion des objets
  //   if (obj instanceof Object) {
  //     copy: Object = {};

  //     for (const attr in obj) {
  //         if (Object.prototype.hasOwnProperty.call(obj, attr)) copy[attr as keyof typeOf copy] = this.deepCopy(obj[attr]);
  //         // if (obj.hasOwnProperty(attr)) copy[attr] = this.deepCopy(obj[attr]);
  //     }
  //     return copy;
  //   }

  //   throw new Error("Impossible de copier l'objet. Son type n'est pas supporté.");
  // }
}
