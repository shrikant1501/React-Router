import react from "react";

class UserClass extends react.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Name: {this.props.name}</h2> // class comp- data received
        <h3>Akola</h3>
        <h4>shrikant15@gmail.com</h4>
      </div>
    );
  }
}
export default UserClass;
