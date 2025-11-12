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

// key value not same approch
const UserRoles1 = {
  Admin: "admin",
  User: "user",
  Modaretor: "modaretor",
} as const;

const permissionFunction1 = (
  role: (typeof UserRoles1)[keyof typeof UserRoles1]
) => {
  if (role === UserRoles1.Admin) {
    return `You are a ${UserRoles1.Admin}`;
  } else if (role === UserRoles1.Modaretor) {
    return `You are a ${UserRoles1.Modaretor}`;
  } else {
    return `You are a ${UserRoles1.User}`;
  }
};
const result1 = permissionFunction1(UserRoles1.Admin);
console.log(result1);
