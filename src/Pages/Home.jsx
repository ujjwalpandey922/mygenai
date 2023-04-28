import Card from "../components/Card";
import "./home.css";

const Home = () => {
  const info = {
    heading: "Welcome to Our Website",
    subheading: "Learn more about our company and services",
  };
  return (
    <div className="home">
      <div className="cardInfo">
        <Card individualInfo={info} />
      </div>
    </div>
  );
};

export default Home;
