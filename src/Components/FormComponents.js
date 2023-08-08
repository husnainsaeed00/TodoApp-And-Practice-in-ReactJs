function FormComponent(props) {
  return (
    <main>
      <form className="TodoList">
        <input
          name="firstName"
          value={props.data.firstName}
          onChange={props.handleChange}
          placeholder="firstName"
        />
        <br />
        <input
          name="lastName"
          value={props.data.lastName}
          onChange={props.handleChange}
          placeholder="lastName"
        />
        <br />
        <input
          name="age"
          value={props.data.age}
          onChange={props.handleChange}
          placeholder="Age"
        />
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={props.data.gender === "female"}
            onChange={props.handleChange}
          />
          FeMale
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={props.data.gender === "male"}
            onChange={props.handleChange}
          />
          Male
        </label>
        <br />
        <label>
          <select
            value={props.data.destination}
            onChange={props.handleChange}
            name="destination"
          >
            <option value="USA"> USA</option>
            <option value="UK"> Uk</option>
            <option value="Estonia"> Estonia</option>
            <option value="Japan">Japan</option>
          </select>
          Your Destination
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="isVegan"
            onChange={props.handleChange}
            checked={props.data.isVegan}
          />
          vegan
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="isLactosFree"
            onChange={props.handleChange}
            checked={props.data.isLactosFree}
          />
          Is LactosFree
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="isKoshar"
            onChange={props.handleChange}
            checked={props.data.isKoshar}
          />
          Koshar
        </label>
        <br />
        <button>Submit</button>
      </form>
      <hr />
      <h2>Entered Information:</h2>
      <p>
        Your Name: {props.data.firstName} {props.data.lastName}
      </p>
      <p>Your Age: {props.data.age}</p>
      <p>Your gender:{props.data.gender}</p>
      <p>Your destination:{props.data.destination}</p>
      <p>Your diet: Vegan:{props.data.isVegan ? "Yes" : "No"}</p>
      <p>Your diet: Koshar:{props.data.isKoshar ? "Yes" : "No"}</p>
      <p>Your diet: LactosFree:{props.data.isLactosFree ? "Yes" : "No"}</p>
    </main>
  );
}

export default FormComponent;
