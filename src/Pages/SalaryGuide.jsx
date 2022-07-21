import React from "react";
import "../App.css";
const salaryGuide = () => {
  return (
    <div>
      <div className="salmdiv">
        <div className="salfdiv">
          <h1>Find a career you'll love</h1>
          <span>
            Explore which careers have the highest job satisfaction, best
            salaries, and more
          </span>

          <div className="saldisdiv">
            <div>
              <h1
                style={{
                  textAlign: "left",
                  fontWeight: "600",
                  marginBottom: "5px",
                }}
              >
                What
              </h1>

              <input
                placeholder="Job Title"
                style={{
                  height: "40px",
                  borderRadius: "10px",
                  padding: "10px",
                  width: "250px",
                }}
              />
            </div>

            <div>
              <h1
                style={{
                  textAlign: "left",
                  fontWeight: "600",
                  marginBottom: "5px",
                }}
              >
                Where
              </h1>
              <input
                placeholder="India"
                style={{
                  width: "250px",
                  height: "40px",
                  borderRadius: "10px",
                  padding: "10px",
                }}
              />
            </div>
            <div>
              <button className="salbut">Search</button>
            </div>
          </div>
        </div>
        <img
          style={{ height: "326px", width: "42%" }}
          src="https://d3hbwax96mbv6t.cloudfront.net/title-webapp/_next/static/images/salaries-8d20dc14bdeae8889387e0fb40e0d546.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default salaryGuide;
