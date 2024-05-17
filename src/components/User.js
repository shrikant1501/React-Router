import react from "react";

class UserClass extends react.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, location } = this.props;
    return (
      <div>
        <h2>Name: {name}</h2>
        <h3>City: {location}</h3>
        <h4>shrikant15@gmail.com</h4>
      </div>
    );
  }
}
export default UserClass;
