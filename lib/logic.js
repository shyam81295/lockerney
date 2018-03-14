/**
* @param {org.lockerney.main.userDataPackageTransfer} tx
* @transaction
*/
function dataPackageTransfer(tx){
    /* dataPackage variable contains instance of asset DataPackage */
    var userDataPackage = tx.userDataPackage;

    console.log(userDataPackage.name);
    console.log(userDataPackage.dateOfBirth);
    console.log(userDataPackage.socialSecurityNo);
    console.log(userDataPackage.memberIdNo);
    console.log(userDataPackage.emailAddress);
    console.log(userDataPackage.mailingAddress);
    console.log(userDataPackage.telephoneNo);
    console.log(userDataPackage.bankAccNo);
    console.log(userDataPackage.clinicalInfo);
    console.log(userDataPackage.claimsInfo);
    console.log(userDataPackage.dataPackageStatus);

    return getAssetRegistry('org.lockerney.main.UserDataPackage')
        .then(function(asetRegistry){
            return asetRegistry.update(userDataPackage);
        });
}

/**
 * @param {org.lockerney.main.grantAccess} tx
 * @transaction
 */
function grantsAccess(tx) {
    var service = tx.service;
    var user = tx.user;
    var userServicePair = tx.userServicePair;
    var serviceAccess = tx.userServicePair.serviceAccess;

    console.log("User Id: "+user.userId);
    console.log("Service Id: "+service.serviceId);
    console.log("Name access: "+serviceAccess.name);
    console.log("DOB access: "+serviceAccess.dateOfBirth);
    console.log("Social Security No access: "+serviceAccess.socialSecurityNo);
    console.log("Member Id access: "+serviceAccess.memberIdNo);
    console.log("Email address access: "+serviceAccess.emailAddress);
    console.log("Mailing address access: "+serviceAccess.mailingAddress);
    console.log("Telephone No access: "+serviceAccess.telephoneNo);
    console.log("Bank Account No access: "+serviceAccess.bankAccNo);
    console.log("Clinical Info access: "+serviceAccess.clinicalInfo);
    console.log("Claims Info access: "+serviceAccess.claimsInfo);

    return getAssetRegistry('org.lockerney.main.UserServicePair')
        .then(function(asetRegistry){
            return asetRegistry.update(userServicePair);
        });
}

/**
* @param {org.lockerney.main.userDataVerification} tx
* @transaction
*/
function dataVerification(tx){
    /**
    authorize service 
    authorize user?
    check whether service has access to that datatype
    if yes, then check whether data provided by service is actual user data it specified
    */

    var userServicePair = tx.userServicePair;
    var verificationDataTypePair = tx.verificationDataTypePair;

    console.log(userServicePair.userId);
    console.log(userServicePair.userServiceId);
    console.log(userServicePair.serviceId);
    console.log(userServicePair.serviceAccess.name);

    //authorize service
    /*if(serviceAccess.userId == user.userId){

    }
    else{
        console.error("")
    }*/

}



