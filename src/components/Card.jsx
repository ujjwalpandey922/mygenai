import { useState } from "react";
import "./card.css";
import Model from "./Model";

const Card = ({ individualInfo }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="card-content card">
        <h1>{individualInfo.heading}</h1>
        <h4>{individualInfo.subheading}</h4>

        <hr />
        <button className="btn read" onClick={() => setOpen(true)}>
          Read More
        </button>
      </div>
      {open && <Model setOpen={setOpen}  />}
    </>
  );
};

export default Card;
