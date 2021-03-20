import React from "react";
import Title from "../Title";


function Contact() {
  return (
    <div>
   <Title>contact</Title>

        <div className="row-auto">
          <div className="col">
            <form>
              <div className="form-group">
                <label for="formGroupExampleInput">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                ></input>
              </div>

              <div className="form-group">
                <label for="exampleInputEmail1">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                ></input>
              </div>

              <div className="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea
                  className="form-control"
                  placeholder="Message"
                  rows="5"
                ></textarea>
              </div>

              <button type="submit" className="btn" style={{background:"orange", color: "white"}}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
  );
}

export default Contact;
