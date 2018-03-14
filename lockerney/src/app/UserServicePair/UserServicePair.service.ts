import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { UserServicePair } from '../org.lockerney.main';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class UserServicePairService {

	
		private NAMESPACE: string = 'UserServicePair';
	



    constructor(private dataService: DataService<UserServicePair>) {
    };

    public getAll(): Observable<UserServicePair[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<UserServicePair> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<UserServicePair> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<UserServicePair> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<UserServicePair> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
