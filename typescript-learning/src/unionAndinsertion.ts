// union |
type UserRole = "admin" | "user";

function getUserRole(role: UserRole) {
  if (role === "admin") {
    return "Admin Dashboard";
  } else if (role === "user") {
    return "User Dashboard";
  } else {
    return "Guest Dashboard";
  }
}
getUserRole("admin");

// insertion &
type Employee = {
  id: number;
  name: string;
  phone: string;
};
type Manager = {
  designation: string;
  teamSize: number;
};

type EmployeeAndManager = Employee & Manager;
const employeeAndManager: EmployeeAndManager = {
  id: 1,
  name: "Monir",
  phone: "0147",
  designation: "Manager",
  teamSize: 20,
};
console.log(employeeAndManager);
