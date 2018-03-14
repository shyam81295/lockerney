import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { UserDataPackage } from '../org.lockerney.main';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class UserDataPackageService {

	
		private NAMESPACE: string = 'UserDataPackage';
	



    constructor(private dataService: DataService<UserDataPackage>) {
    };

    public getAll(): Observable<UserDataPackage[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<UserDataPackage> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<UserDataPackage> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<UserDataPackage> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<UserDataPackage> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
