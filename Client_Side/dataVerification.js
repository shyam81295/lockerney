// get User & Service Digi Sign from Composer query.
var userDigiSign = '';
var serviceDigiSign = '';
var userServiceId = '';
var flag = true;

// get proper User and its Service by double-querying the transactions.
// var userId & serviceId & userDigiSign & serviceDigiSign & userServiceAccess & serviceUserAccess milega.
$.get("http://34.217.37.251:3000/api/grantAccess?filter[where][userServiceId]=userServiceId",
                    function (data, status) {
                        //$("#content").text(JSON.stringify(data));
                        var jsonArr = JSON.stringify(data);
                        console.log(jsonArr);
                        var parsed_data = JSON.parse(jsonArr);
                        for (var i = 0; i < parsed_data.length; i++) {
                            var counter = parsed_data[i];
                            $("#content").append("<p> User Id  : " + counter.userId +  ", Service Id : " + counter.serviceId + ", User - Service Id  : " + counter.userServiceId +" </p>");
                                 /*+ ", Name  : " + counter.name
                                 + ", Date of Birth  : " + counter.dob
                                 + ", Social Security No  : " + counter.ssno
                                 + ", Member ID  : " + counter.memid
                                 + ", email  : " + counter.email
                                 + ", Mailing Address  : " + counter.address
                                 + ", Telephone No  : " + counter.mobno
                                 + ", Bank Acc No  : " + counter.accno
                                 + ", Clinical Info  : " + counter.clinical_info
                                 + ", Claims Info  : " + counter.claims_info +
                                 " </p>");
                                 */
                            //$("#content").append("<p> Service Id  : " + counter.serviceId + " </p>");
                            //$("#content").append("<p> User - Service Id  : " + counter.userServiceId + " </p>");
                            console.log(counter.userId);
                        }
                        //console.log(parsed_data);
                        //var data = JSON.parse(result);
                        //alert("Data: " + JSON.stringify(data) + "\nStatus: " + status);
                    });

//  apply verification of DigiSign on its ServiceAccess.
//  queryUserDigiSign : after applying DigiSign on User's serviceAccess
//  queryServiceDigiSign : after applying DigiSign on Service's serviceAccess
if(userDigiSign == queryUserDigiSign)
{
    if(serviceDigiSign == queryServiceDigiSign)
    {
        // Permisision of service is subset of Permission of User.
        if( (serviceName == true) && (userName == false) )
        {
            console.log("permission restricted");
            flag = false;
        }
        else if( (serviceDateOfBirth == true) && (userDateOfBirth == false) )
        {
            console.log("permission restricted");
            flag = false;
        }
        else if( (serviceSocialSecurityNo == true) && (userSocialSecurityNo == false) )
        {
            console.log("permission restricted");
            flag = false;
        }
        else if( (serviceMemberIdNo == true) && (userMemberIdNo == false) )
        {
            console.log("permission restricted");
            flag = false;
        }
        else if( (serviceEmailAddress == true) && (userEmailAddress == false) )
        {
            console.log("permission restricted");
            flag = false;
        }
        else if( (serviceMailingAddress == true) && (userMailingAddress == false) )
        {
            console.log("permission restricted");
            flag = false;
        }
        else if( (serviceTelephoneNo == true) && (userTelephoneNo == false) )
        {
            console.log("permission restricted");
            flag = false;
        }
        else if( (serviceBankAccNo == true) && (userBankAccNo == false) )
        {
            console.log("permission restricted");
            flag = false;
        }
        else if( (serviceClinicalInfo == true) && (userClinicalInfo == false) )
        {
            console.log("permission restricted");
            flag = false;
        }
        else if( (serviceClaimsInfo == true) && (userClaimsInfo == false) )
        {
            console.log("permission restricted");
            flag = false;
        }
        else
        {
            console.log("permissions are proper");
        }
    }
    else
    {
        console.log("Given Service Digital Signature does not matches with Actual Service Digital Signature");
        flag = false;
    }

    //iske baad idhar DB se servicePermissions ka data json format me bhej do!
    var AWS = require('aws-sdk');
    awsConfig = {                                                                                                             
        "region": "us-west-2",                                                                                                
        "endpoint": "http://dynamodb.us-west-2.amazonaws.com",                                                                
        "accessKeyId": "AKIAINIO42W5PVBWMGXQ", "secretAccessKey": "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"
    };
    AWS.config.update(awsConfig);
    // Create the DynamoDB service object
    var docClient = new AWS.DynamoDB.DocumentClient()

    var table = "Movies";

    var year = 2015;
    var title = "The Big New Movie";

    var params = {
        TableName: table,
        Key:{
            "year": year,
            "title": title
        }
    };

    docClient.get(params, function(err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
        }
    });
}

else
{
    console.log("Given User Digital Signature does not matches with Actual User Digital Signature");
    flag = false;
}

