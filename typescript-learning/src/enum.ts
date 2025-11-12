enum UserRoles {
  Admin = "admin",
  User = "user",
  Modaretor = "modaretor",
}

const permissionFunction = (role: UserRoles) => {
  if (role === UserRoles.Admin) {
    return `You are a ${UserRoles.Admin}`;
  } else if (role === UserRoles.Modaretor) {
    return `You are a ${UserRoles.Modaretor}`;
  } else {
    return `You are a ${UserRoles.User}`;
  }
};
console.log(permissionFunction(UserRoles.Admin));
