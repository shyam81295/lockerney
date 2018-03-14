import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.lockerney.main{
   export enum TransferStatus {
      RETAINED,
      TRANSFERED,
   }
   export class Address {
      addressLine1: string;
      addressLine2: string;
      city: string;
      state: string;
      country: string;
      zipcode: string;
   }
   export class User extends Participant {
      userId: string;
   }
   export class Service extends Participant {
      serviceId: string;
   }
   export class UserDataPackage extends Asset {
      userId: string;
      name: string;
      dataPackageStatus: TransferStatus;
      dateOfBirth: string;
      socialSecurityNo: string;
      memberIdNo: string;
      emailAddress: string;
      mailingAddress: Address;
      telephoneNo: string;
      bankAccNo: string;
      clinicalInfo: string;
      claimsInfo: string;
   }
   export class ServiceAccess {
      name: boolean;
      dateOfBirth: boolean;
      socialSecurityNo: boolean;
      memberIdNo: boolean;
      emailAddress: boolean;
      mailingAddress: boolean;
      telephoneNo: boolean;
      bankAccNo: boolean;
      clinicalInfo: boolean;
      claimsInfo: boolean;
   }
   export class UserServicePair extends Asset {
      userServiceId: string;
      userId: string;
      serviceId: string;
      serviceAccess: ServiceAccess;
   }
   export class VerificationTypeDataPair {
      verificationType: string;
      verificationData: string;
   }
   export class transferAddress extends Transaction {
      address: Address;
   }
   export class userDataPackageTransfer extends Transaction {
      userDataPackage: UserDataPackage;
      details: string;
   }
   export class grantAccess extends Transaction {
      userServicePair: UserServicePair;
      detail: string;
   }
   export class userDataVerification extends Transaction {
      userServicePair: UserServicePair;
      verificationTypeDataPair: VerificationTypeDataPair[];
      details: string;
   }
   export class permission extends Transaction {
      details: string;
   }
// }
