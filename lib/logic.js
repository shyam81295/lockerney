/**
* @param {org.lockerney.main.userDataPackageTransfer} tx
* @transaction
*/

function dataPackageTransfer(tx)
{
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


