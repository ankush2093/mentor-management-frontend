import { Container } from "mdbreact";
import React from "react";

const ViewAssingment = () => {
  return (
    <>
      <form>
        <div>
          <center>
            <h1>Download Your Assignment 1</h1>
          </center>
        </div>
        <center>
          <button type="button" className="btn btn-primary">
            Download
          </button>
        </center>
        <label class="form-label" for="customFile">
          Upload Here Your Files
        </label>
        <input type="file" class="form-control" id="customFile" />
        <br />
       
          <input
            style={{
              color: "white",
              border: "2.5px solid yellow",
              borderRadius: "20px",
              lineHeight: 1.2,
              backgroundColor: "black",
              padding: 5,
            }}
            type="submit"
          ></input>
     
      </form>

      <br />

      <form>
        <div>
          <center>
            <h1>Download Your Assignment 2</h1>
          </center>
        </div>
        <center>
          <button type="button" className="btn btn-primary">
            Download
          </button>
        </center>
        <label class="form-label" for="customFile">
          Upload Here Your Files
        </label>
        <input type="file" class="form-control" id="customFile" />
        <br />
       
          <input
            style={{
              color: "white",
              border: "2.5px solid yellow",
              borderRadius: "20px",
              lineHeight: 1.2,
              backgroundColor: "black",
              padding: 5,
            }}
            type="submit"
          ></input>
     
      </form>
      <br />

      <form>
        <div>
          <center>
            <h1>Download Your Assignment 3</h1>
          </center>
        </div>
        <center>
          <button type="button" className="btn btn-primary">
            Download
          </button>
        </center>
        <label class="form-label" for="customFile">
          Upload Here Your Files
        </label>
        <input type="file" class="form-control" id="customFile" />
        <br />
       
          <input
            style={{
              color: "white",
              border: "2.5px solid yellow",
              borderRadius: "20px",
              lineHeight: 1.2,
              backgroundColor: "black",
              padding: 5,
            }}
            type="submit"
          ></input>
     
      </form>
    </>
  );
};

export default ViewAssingment;
