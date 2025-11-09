// speared operator

const friends = ["Rahim", "karim"];
const collegeFriends = ["kabir", "farhad"];

friends.push(...collegeFriends);

const user = { name: "Monir", age: 24 };

const userDetails = { address: "Dhaka", height: "5.6 inc" };

const userInfo = { ...user, ...userDetails };

// rest operator
const sendInvitation = (...friends: string[]) => {
  friends.forEach((friend: string) =>
    console.log(`Sent Invitation to ${friend}`)
  );
};
sendInvitation("Rahim", "karim", "kabir", "farhad");
