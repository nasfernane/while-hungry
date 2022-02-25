import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(
    private matDialog: MatDialog,
  ) {}

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
      console.log(user);
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
      console.log('coucou');
    }
  
    /**
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
      setTimeout(() => (this._breadcrumb = v.map(v2 => "<span class='breadcrumb__chunk'>&nbsp;"+v2+"&nbsp;</span>").join("<span class='breadcrumb__divider'>&nbsp»&nbsp</span>")));
    }

}
