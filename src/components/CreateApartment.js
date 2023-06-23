import axios from "axios";
import { useState } from "react";
export function CreateApartment() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = () => {
    const newApartment = {
      title: { title },
      pricePerDay: { price },
      img: { image },
    };
    axios
      .post(`${process.env.REACT_APP_API_URL}/apartments`, newApartment)
      .then((res) => {})
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <form
      className="container CreateApartment d-flex flex-column m-2"
      onSubmit={handleSubmit}
    >
      <label>
        Title:
        <input
          type="text"
          name="title"
          placeholder="enter the title"
          value={title}
          required={true}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </label>

      <label>
        Price per Day:
        <input
          type="number"
          name="price"
          placeholder="enter the price per day"
          value={price}
          required={true}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
      </label>

      <label>
        Image:
        <input
          type="url"
          name="image"
          placeholder="enter image link"
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
      </label>
      <button className="btn btn-primary w-25" type="submit">
        Create
      </button>
    </form>
  );
}
