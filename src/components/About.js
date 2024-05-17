import UserClass from "./User";
import UserFC from "./UserFC";

const About = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">This is about page</h1>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Functional Component:</h2>
        <UserFC name={"Shrikant From Fn"} location={"Akola"} />
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2">Class Component:</h2>
        <UserClass name={"Shrikant From Class"} location={"Akola"} />
      </div>
    </div>
  );
};

export default About;
