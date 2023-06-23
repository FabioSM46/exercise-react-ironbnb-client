export function CreateApartment() {
  const handleSubmit = () => {};

  return (
    <form className="container CreateApartment" onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          placeholder="enter the title"
          value=""
          required={true}
          onChange={() => {}}
        />
      </label>

      <label>
        Price per Day:
        <input
          type="number"
          name="price"
          placeholder="enter the price per day"
          value=""
          required={true}
          onChange={() => {}}
        />
      </label>

      <label>
        Image:
        <input
          type="text"
          name="image"
          placeholder="enter image link"
          value=""
          required={true}
          onChange={() => {}}
        />
      </label>
      <button className="btn" type="submit">
        Create
      </button>
    </form>
  );
}
