function getUserServicePair(){
    var propID = $('#propertyID').val(); 
    $.get("http://localhost:3000/api/UserServicePair/" + propID,
    function (data, status) {
        //$("#content").text(JSON.stringify(data));
        var jsonObj = JSON.stringify(data);
        console.log(jsonArr);
        var parsed_data = JSON.parse(jsonArr);

        

        for (var i = 0; i < parsed_data.length; i++) {
            if()
            var serviceAccessCount = 


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
}