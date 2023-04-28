import "./model.css";

const Model = ({ setOpen }) => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="close" onClick={() => setOpen(false)}>
          X
        </div>
        <div className="model-content">
          <div className="smaller-info">
            <h1>Thank you for your interest in our company!</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
