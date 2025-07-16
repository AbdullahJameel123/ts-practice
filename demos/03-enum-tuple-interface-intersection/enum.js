var Status;
(function (Status) {
    Status[Status["Active"] = 0] = "Active";
    Status[Status["Inactive"] = 1] = "Inactive";
    Status[Status["Suspended"] = 2] = "Suspended";
})(Status || (Status = {}));
var userStatus = Status.Active;
console.log(userStatus);
