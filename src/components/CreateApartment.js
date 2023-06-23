import axios from "axios";
import { useState } from "react";
export function CreateApartment() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newApartment = {
      title: title,
      pricePerDay: price,
      img: image,
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}/apartments`, newApartment)
      .then((res) => {})
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <form>
      <div className="form-group">
        <label>
          Title:
          <input
            className="form-control"
            type="text"
            placeholder="Title"
            value={title}
            required={true}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Price per Day:
          <input
            className="form-control"
            type="number"
            placeholder="Price per Day"
            value={price}
            required={true}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Image:
          <input
            className="form-control"
            type="url"
            name="image"
            placeholder="Image Link"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary m-2">
        Submit
      </button>
    </form>
  );
}
