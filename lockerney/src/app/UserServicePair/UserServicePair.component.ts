import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserServicePairService } from './UserServicePair.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-UserServicePair',
	templateUrl: './UserServicePair.component.html',
	styleUrls: ['./UserServicePair.component.css'],
  providers: [UserServicePairService]
})
export class UserServicePairComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          userServiceId = new FormControl("", Validators.required);
        
  
      
          userId = new FormControl("", Validators.required);
        
  
      
          serviceId = new FormControl("", Validators.required);
        
  
      
          serviceAccess = new FormControl("", Validators.required);
        
  


  constructor(private serviceUserServicePair:UserServicePairService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          userServiceId:this.userServiceId,
        
    
        
          userId:this.userId,
        
    
        
          serviceId:this.serviceId,
        
    
        
          serviceAccess:this.serviceAccess
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceUserServicePair.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the asset field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addAsset(form: any): Promise<any> {
    this.asset = {
      $class: "org.lockerney.main.UserServicePair",
      
        
          "userServiceId":this.userServiceId.value,
        
      
        
          "userId":this.userId.value,
        
      
        
          "serviceId":this.serviceId.value,
        
      
        
          "serviceAccess":this.serviceAccess.value
        
      
    };

    this.myForm.setValue({
      
        
          "userServiceId":null,
        
      
        
          "userId":null,
        
      
        
          "serviceId":null,
        
      
        
          "serviceAccess":null
        
      
    });

    return this.serviceUserServicePair.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "userServiceId":null,
        
      
        
          "userId":null,
        
      
        
          "serviceId":null,
        
      
        
          "serviceAccess":null 
        
      
      });
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else{
            this.errorMessage = error;
        }
    });
  }


   updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: "org.lockerney.main.UserServicePair",
      
        
          
        
    
        
          
            "userId":this.userId.value,
          
        
    
        
          
            "serviceId":this.serviceId.value,
          
        
    
        
          
            "serviceAccess":this.serviceAccess.value
          
        
    
    };

    return this.serviceUserServicePair.updateAsset(form.get("userServiceId").value,this.asset)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
            else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }


  deleteAsset(): Promise<any> {

    return this.serviceUserServicePair.deleteAsset(this.currentId)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
			else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }

  setId(id: any): void{
    this.currentId = id;
  }

  getForm(id: any): Promise<any>{

    return this.serviceUserServicePair.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "userServiceId":null,
          
        
          
            "userId":null,
          
        
          
            "serviceId":null,
          
        
          
            "serviceAccess":null 
          
        
      };



      
        if(result.userServiceId){
          
            formObject.userServiceId = result.userServiceId;
          
        }else{
          formObject.userServiceId = null;
        }
      
        if(result.userId){
          
            formObject.userId = result.userId;
          
        }else{
          formObject.userId = null;
        }
      
        if(result.serviceId){
          
            formObject.serviceId = result.serviceId;
          
        }else{
          formObject.serviceId = null;
        }
      
        if(result.serviceAccess){
          
            formObject.serviceAccess = result.serviceAccess;
          
        }else{
          formObject.serviceAccess = null;
        }
      

      this.myForm.setValue(formObject);

    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });

  }

  resetForm(): void{
    this.myForm.setValue({
      
        
          "userServiceId":null,
        
      
        
          "userId":null,
        
      
        
          "serviceId":null,
        
      
        
          "serviceAccess":null 
        
      
      });
  }

}
