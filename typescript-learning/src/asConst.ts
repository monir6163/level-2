const UserRoles = {
  Admin: "Admin",
  User: "User",
  Modaretor: "Modaretor",
} as const;

const permissionFunction = (role: keyof typeof UserRoles) => {
  if (role === UserRoles.Admin) {
    return `You are a ${UserRoles.Admin}`;
  } else if (role === UserRoles.Modaretor) {
    return `You are a ${UserRoles.Modaretor}`;
  } else {
    return `You are a ${UserRoles.User}`;
  }
};
const result = permissionFunction(UserRoles.Admin);
console.log(result);
