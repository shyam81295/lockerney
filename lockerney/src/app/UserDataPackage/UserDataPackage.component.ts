import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserDataPackageService } from './UserDataPackage.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-UserDataPackage',
	templateUrl: './UserDataPackage.component.html',
	styleUrls: ['./UserDataPackage.component.css'],
  providers: [UserDataPackageService]
})
export class UserDataPackageComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          userId = new FormControl("", Validators.required);
        
  
      
          name = new FormControl("", Validators.required);
        
  
      
          dataPackageStatus = new FormControl("", Validators.required);
        
  
      
          dateOfBirth = new FormControl("", Validators.required);
        
  
      
          socialSecurityNo = new FormControl("", Validators.required);
        
  
      
          memberIdNo = new FormControl("", Validators.required);
        
  
      
          emailAddress = new FormControl("", Validators.required);
        
  
      
          mailingAddress = new FormControl("", Validators.required);
        
  
      
          telephoneNo = new FormControl("", Validators.required);
        
  
      
          bankAccNo = new FormControl("", Validators.required);
        
  
      
          clinicalInfo = new FormControl("", Validators.required);
        
  
      
          claimsInfo = new FormControl("", Validators.required);
        
  


  constructor(private serviceUserDataPackage:UserDataPackageService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          userId:this.userId,
        
    
        
          name:this.name,
        
    
        
          dataPackageStatus:this.dataPackageStatus,
        
    
        
          dateOfBirth:this.dateOfBirth,
        
    
        
          socialSecurityNo:this.socialSecurityNo,
        
    
        
          memberIdNo:this.memberIdNo,
        
    
        
          emailAddress:this.emailAddress,
        
    
        
          mailingAddress:this.mailingAddress,
        
    
        
          telephoneNo:this.telephoneNo,
        
    
        
          bankAccNo:this.bankAccNo,
        
    
        
          clinicalInfo:this.clinicalInfo,
        
    
        
          claimsInfo:this.claimsInfo
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceUserDataPackage.getAll()
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
      $class: "org.lockerney.main.UserDataPackage",
      
        
          "userId":this.userId.value,
        
      
        
          "name":this.name.value,
        
      
        
          "dataPackageStatus":this.dataPackageStatus.value,
        
      
        
          "dateOfBirth":this.dateOfBirth.value,
        
      
        
          "socialSecurityNo":this.socialSecurityNo.value,
        
      
        
          "memberIdNo":this.memberIdNo.value,
        
      
        
          "emailAddress":this.emailAddress.value,
        
      
        
          "mailingAddress":this.mailingAddress.value,
        
      
        
          "telephoneNo":this.telephoneNo.value,
        
      
        
          "bankAccNo":this.bankAccNo.value,
        
      
        
          "clinicalInfo":this.clinicalInfo.value,
        
      
        
          "claimsInfo":this.claimsInfo.value
        
      
    };

    this.myForm.setValue({
      
        
          "userId":null,
        
      
        
          "name":null,
        
      
        
          "dataPackageStatus":null,
        
      
        
          "dateOfBirth":null,
        
      
        
          "socialSecurityNo":null,
        
      
        
          "memberIdNo":null,
        
      
        
          "emailAddress":null,
        
      
        
          "mailingAddress":null,
        
      
        
          "telephoneNo":null,
        
      
        
          "bankAccNo":null,
        
      
        
          "clinicalInfo":null,
        
      
        
          "claimsInfo":null
        
      
    });

    return this.serviceUserDataPackage.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "userId":null,
        
      
        
          "name":null,
        
      
        
          "dataPackageStatus":null,
        
      
        
          "dateOfBirth":null,
        
      
        
          "socialSecurityNo":null,
        
      
        
          "memberIdNo":null,
        
      
        
          "emailAddress":null,
        
      
        
          "mailingAddress":null,
        
      
        
          "telephoneNo":null,
        
      
        
          "bankAccNo":null,
        
      
        
          "clinicalInfo":null,
        
      
        
          "claimsInfo":null 
        
      
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
      $class: "org.lockerney.main.UserDataPackage",
      
        
          
        
    
        
          
            "name":this.name.value,
          
        
    
        
          
            "dataPackageStatus":this.dataPackageStatus.value,
          
        
    
        
          
            "dateOfBirth":this.dateOfBirth.value,
          
        
    
        
          
            "socialSecurityNo":this.socialSecurityNo.value,
          
        
    
        
          
            "memberIdNo":this.memberIdNo.value,
          
        
    
        
          
            "emailAddress":this.emailAddress.value,
          
        
    
        
          
            "mailingAddress":this.mailingAddress.value,
          
        
    
        
          
            "telephoneNo":this.telephoneNo.value,
          
        
    
        
          
            "bankAccNo":this.bankAccNo.value,
          
        
    
        
          
            "clinicalInfo":this.clinicalInfo.value,
          
        
    
        
          
            "claimsInfo":this.claimsInfo.value
          
        
    
    };

    return this.serviceUserDataPackage.updateAsset(form.get("userId").value,this.asset)
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

    return this.serviceUserDataPackage.deleteAsset(this.currentId)
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

    return this.serviceUserDataPackage.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "userId":null,
          
        
          
            "name":null,
          
        
          
            "dataPackageStatus":null,
          
        
          
            "dateOfBirth":null,
          
        
          
            "socialSecurityNo":null,
          
        
          
            "memberIdNo":null,
          
        
          
            "emailAddress":null,
          
        
          
            "mailingAddress":null,
          
        
          
            "telephoneNo":null,
          
        
          
            "bankAccNo":null,
          
        
          
            "clinicalInfo":null,
          
        
          
            "claimsInfo":null 
          
        
      };



      
        if(result.userId){
          
            formObject.userId = result.userId;
          
        }else{
          formObject.userId = null;
        }
      
        if(result.name){
          
            formObject.name = result.name;
          
        }else{
          formObject.name = null;
        }
      
        if(result.dataPackageStatus){
          
            formObject.dataPackageStatus = result.dataPackageStatus;
          
        }else{
          formObject.dataPackageStatus = null;
        }
      
        if(result.dateOfBirth){
          
            formObject.dateOfBirth = result.dateOfBirth;
          
        }else{
          formObject.dateOfBirth = null;
        }
      
        if(result.socialSecurityNo){
          
            formObject.socialSecurityNo = result.socialSecurityNo;
          
        }else{
          formObject.socialSecurityNo = null;
        }
      
        if(result.memberIdNo){
          
            formObject.memberIdNo = result.memberIdNo;
          
        }else{
          formObject.memberIdNo = null;
        }
      
        if(result.emailAddress){
          
            formObject.emailAddress = result.emailAddress;
          
        }else{
          formObject.emailAddress = null;
        }
      
        if(result.mailingAddress){
          
            formObject.mailingAddress = result.mailingAddress;
          
        }else{
          formObject.mailingAddress = null;
        }
      
        if(result.telephoneNo){
          
            formObject.telephoneNo = result.telephoneNo;
          
        }else{
          formObject.telephoneNo = null;
        }
      
        if(result.bankAccNo){
          
            formObject.bankAccNo = result.bankAccNo;
          
        }else{
          formObject.bankAccNo = null;
        }
      
        if(result.clinicalInfo){
          
            formObject.clinicalInfo = result.clinicalInfo;
          
        }else{
          formObject.clinicalInfo = null;
        }
      
        if(result.claimsInfo){
          
            formObject.claimsInfo = result.claimsInfo;
          
        }else{
          formObject.claimsInfo = null;
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
      
        
          "userId":null,
        
      
        
          "name":null,
        
      
        
          "dataPackageStatus":null,
        
      
        
          "dateOfBirth":null,
        
      
        
          "socialSecurityNo":null,
        
      
        
          "memberIdNo":null,
        
      
        
          "emailAddress":null,
        
      
        
          "mailingAddress":null,
        
      
        
          "telephoneNo":null,
        
      
        
          "bankAccNo":null,
        
      
        
          "clinicalInfo":null,
        
      
        
          "claimsInfo":null 
        
      
      });
  }

}
