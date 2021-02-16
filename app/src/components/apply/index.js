import React, { useState } from "react";
import { useHistory } from "react-router";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import "./index.scss";
import validateApplication from "./validateApplication"

import { publicFetch } from '../../util/fetch';

export default function Application() {
  // const form = useRef(null)
  const defaultState = {
  state: "",
  street: "",
  city: "",
  image_url: "",
  };

  // const notify = () =>
  //   toast.success(
  //     "Thank you for applying. kindly check your email for confirmation"
  //   );

  const [state, setState] = useState(defaultState);
  const [errors, setErrors] = useState(defaultState);
  const [loading, setLoading] = useState(false);
   //const [selectedFile, setSelectedFile] = useState('');
  const history = useHistory();
  const userInfo = localStorage.getItem('userInfo');
const userData = JSON.parse(userInfo)

  const handleChange = (name, value) => {
    // const { name, value } = target;
    setState({ ...state, [name]: value});

    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

// console.log(state, 'the state of the form');


  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      //  const errorsFields = validateApplication(state);
      //       if (errorsFields) {
        //         return setErrors({ ...errors, ...errorsFields });
        //       }
        setLoading(true)


      const inputData = {
        image_url: state.image_url,
        geo_details: {
            state: state.state,
            street: state.city,
            city: state.city
        },
        user_details: {
          name:userData.data.name,
          email:userData.data.email
        }
      }
// console.log(inputData);
    //console.log(inputData);
      const datas = new FormData();
      datas.append('image_url', inputData.image_url);
      datas.append('geo_details', inputData.geo_details);
      datas.append('user_details', inputData.user_details);

      // console.log(datas);
      const { data } = await publicFetch.post(
      `createProduct`,
      datas
      );

      console.log(data, 'i got back from the backend')

      setState({ ...state, ...defaultState });
      //notify();
      history.push("/success",{
        message:"You have Successfully applied to Decagon! Kindly check your email for confirmation"
      })
    } catch (error) {
      setState({ ...state, ...defaultState });
      setErrors({ ...errors, ...error })
      setLoading(false);
    }
  };

  return (
      <main className="apply-main">
        <div className="hero"></div>
        <div className="content application-form">

          <form onSubmit={handleSubmit}>
            <h1 className="form-title">Create Product Form</h1>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="street">Street</label>
                <input
                  type="text"
                  name="street"
                  value={state.street}
                  onChange={e => handleChange('street', e.currentTarget.value)}
                  style={{ border: errors.street && "1px solid #d07d7d" }}
                />
                {errors.first_name && (
                  <p className="form-edescription: invalid input, object invalidrror">{errors.street}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  name="city"
                  value={state.city}
                  onChange={e => handleChange('city', e.currentTarget.value)}
                  style={{ border: errors.city && "1px solid #d07d7d" }}
                />
                {errors.city && (
                  <p className="form-error">{errors.city}</p>
                )}
              </div>
            </div>
            <div className="form-row">

              <div className="form-group">
                <label htmlFor="image_url">Image</label>
                <input
                  type="file"
                  name="image_url"
                  onChange={e => handleChange('image_url', e.currentTarget.value)}
                />
              </div>
            </div>

              <div className="form-group">
                <label htmlFor="state">Current Location</label>
                <select
                  name="state"
                  value={state.state}
                  onChange={e => handleChange('state', e.currentTarget.value)}
                  style={{
                    border: errors.state && "1px solid #d07d7d",
                  }}>
                  {NIGERIAN_STATE.map((state) => (
                    <option key={state} value={state.toLowerCase()}>
                      {state}
                    </option>
                  ))}
                </select>
                {errors.state && (
                  <p className="form-error">{errors.state}</p>
                )}
              </div>
            <div className="form-group form-submit-actions">
              <button
                type="submit"
                className="submit-button"
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {loading ? (
                  <div className="lds-roller">
                    {[...Array(6)].map((_, index) => (
                      <div
                        key={index.toString()}
                        className="lds-roller-dot"
                      ></div>
                    ))}
                  </div>
                ) : (
                    <p>Submit</p>
                  )}
              </button>
            </div>
          </form>
        </div>
      </main>
  );
}

const NIGERIAN_STATE = [
  "Select a state",
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "FCT - Abuja",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
];
