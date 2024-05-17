import react from "react";

const UserFC = (info) => {
  const { name, location } = info;
  return (
    <div>
      <h2>Name: {name}</h2>
      <h3>City: {location}</h3>
      <h4>shrikant15@gmail.com</h4>
    </div>
  );
};
export default UserFC;
