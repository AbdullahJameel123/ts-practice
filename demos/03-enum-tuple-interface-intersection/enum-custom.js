var Role;
(function (Role) {
    Role["Asdmin"] = "ADMIN";
    Role["User"] = "USER";
    Role["Guest"] = "GUEST";
})(Role || (Role = {}));
var currentRole = Role.Asdmin;
console.log("Current role is: ".concat(currentRole)); // "ADMIN"
