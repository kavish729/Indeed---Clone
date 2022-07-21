import React, { useState } from "react";
import "../App.css";
import Byindustry from "../components/salaryguide/Byindustry";

const Industryarray = [
  { name: "Elementary School Teacher", salary: "2,47,310 per year" },
  { name: "Human Resources Specialist", salary: "2,15,486 per year" },
  { name: "Accountant", salary: "2,72,468 per year" },
  { name: "Customer Care Specialist", salary: "2,23,262 per year" },
  { name: "Office Assistant", salary: "1,89,014 per year" },
  { name: "Back Office Executive", salary: "3,79,290 per year" },
  { name: "Data Entry Clerk", salary: "2,34,715 per year" },
  { name: "Graphic Designer", salary: "2,59,601 per year" },
];
const SalaryGuide = () => {
  const [Industry, setIndustry] = useState(Industryarray);
  return (
    <>
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
      {/* // day-3 */}
      <div style={{ marginLeft: "50px", marginTop: "20px" }}>
        <h1
          style={{ fontSize: "30px", fontWeight: "700", marginBottom: "20px" }}
        >
          Browse top paying jobs by industry
        </h1>
        <div>
          <Byindustry />
        </div>
        {/* mapping part */}

        <div className="salinddiv">
          {Industry.map((item) => {
            return (
              <div>
                <h2 style={{ fontWeight: "700" }}>{item.name}</h2>
                <div
                  style={{ display: "flex", gap: "20px", lineHeight: "3.02" }}
                >
                  {" "}
                  <p>Average Salary</p>
                  <p style={{ fontWeight: "700" }}> ₹{item.salary}</p>
                </div>
                <hr style={{ width: "100%", color: "black" }} />
                <a
                  style={{
                    textDecoration: "underline",
                    color: "teal",
                    lineHeight: "3.02",
                  }}
                >
                  Job Opening
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SalaryGuide;
