enum Role {
    Asdmin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}

let currentRole: Role = Role.Asdmin;
console.log(`Current role is: ${currentRole}`); // "ADMIN"
