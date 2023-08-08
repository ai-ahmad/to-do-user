// style
import "./Form.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const Form = ({ addItem }) => {
  const [user, setUser] = useState({
    id: uuidv4(),
    image: "",
    firstName: "",
    lastName: "",
    age: "",
    from: "",
    job: "",
    gender: "",
  });


  return (
    <div className="modal-wrapper">
      <div className="overlay">
        <div className="modal">
          <h2>Create New User</h2>
          <form>
            <label>
              <span>Image URL:</span>
              <input
                type="url"
                required
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, image: e.target.value };
                  });
                }}
              />
            </label>
            <label>
              <span>First Name</span>
              <input
                type="text"
                required
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, firstName: e.target.value };
                  });
                }}
              />
            </label>
            <label>
              <span>Last Name</span>
              <input
                type="text"
                required
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, lastName: e.target.value };
                  });
                }}
              />
            </label>
            <label>
              <span>Age</span>
              <input
                type="number"
                required
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, age: e.target.value };
                  });
                }}
              />
            </label>
            <label>
              <span>From:</span>
              <input
                type="text"
                required
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, from: e.target.value };
                  });
                }}
              />
            </label>
            <label>
              <span>Job</span>
              <input
                type="text"
                required
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, job: e.target.value };
                  });
                }}
              />
            </label>
            <div className="gender">
              <span>Gender:</span>
              <label>
                <small>Male</small>
                <input
                  type="radio"
                  required
                  name="gender"
                  value="male"
                  onChange={(e) => {
                    setUser((prev) => {
                      return { ...prev, gender: e.target.value };
                    });
                  }}
                />
              </label>
              <label>
                <small>Female</small>
                <input
                  type="radio"
                  required
                  name="gender"
                  value="female"
                  onChange={(e) => {
                    setUser((prev) => {
                      return { ...prev, gender: e.target.value };
                    });
                  }}
                />
              </label>
            </div>
            <button className="modal-btn" onClick={() => addItem(user)}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
