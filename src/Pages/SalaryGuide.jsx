import React, { useState } from "react";
import "../App.css";
import Byindustry from "../components/salaryguide/Byindustry";
import Bycompany from "../components/salaryguide/Bycompany";
import Salaryearning from "../components/salaryguide/Salaryearning";
import Secfooter from "../components/salaryguide/Secfooter";
import Salarymainfooter from "../components/salaryguide/Salarymainfooter";
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

const Companyarray = [
  {
    name: "Capgimini",
    rating: "8.8k reviews",
    compimg:
      "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/128x128/064eff7aab72cb84fbb7f92b82f6ac4a",
    ratimg:
      "https://d3hbwax96mbv6t.cloudfront.net/title-webapp/_next/static/images/filled-stars-6d670c620047f09d4cab57ee3ba90cc6.svg",
  },
  {
    name: "Tata Consultancy Services (TCS)",
    rating: "19.9k reviews",
    compimg:
      "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/128x128/13b693b4dcc055d2344351b4c9a148e9",
    ratimg:
      "https://d3hbwax96mbv6t.cloudfront.net/title-webapp/_next/static/images/filled-stars-6d670c620047f09d4cab57ee3ba90cc6.svg",
  },
  {
    name: "Accenture",
    rating: "22k reviews",
    compimg:
      "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/128x128/fff3cc32d7e908a657ea1da5a4a1732b",
    ratimg:
      "https://d3hbwax96mbv6t.cloudfront.net/title-webapp/_next/static/images/filled-stars-6d670c620047f09d4cab57ee3ba90cc6.svg",
  },
  {
    name: "Cognizant Technology Solutions",
    rating: "14.8k reviews",
    compimg:
      "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/128x128/ce43c82fedc38bf5739f8c90376c3b98",
    ratimg:
      "https://d3hbwax96mbv6t.cloudfront.net/title-webapp/_next/static/images/filled-stars-6d670c620047f09d4cab57ee3ba90cc6.svg",
  },
  {
    name: "Byju's",
    rating: "382 reviews",
    compimg:
      "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/128x128/349d1c5aed5c3943dadc47139a21b79d",
    ratimg:
      "https://d3hbwax96mbv6t.cloudfront.net/title-webapp/_next/static/images/filled-stars-6d670c620047f09d4cab57ee3ba90cc6.svg",
  },
  {
    name: "IBM",
    rating: "31.5k reviews",
    compimg:
      "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/128x128/e33d1816f29251d95814fd99eae809df",
    ratimg:
      "https://d3hbwax96mbv6t.cloudfront.net/title-webapp/_next/static/images/filled-stars-6d670c620047f09d4cab57ee3ba90cc6.svg",
  },
  {
    name: "Amazon.com",
    rating: "85.2k reviews",
    compimg:
      "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/128x128/3e9d43f5c277de169808abdcaf49ba2c",
    ratimg:
      "https://d3hbwax96mbv6t.cloudfront.net/title-webapp/_next/static/images/filled-stars-6d670c620047f09d4cab57ee3ba90cc6.svg",
  },
  {
    name: "Indigo Airlines",
    rating: "410 reviews",
    compimg:
      "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/128x128/5335229f1b22e90f1e5eafb892704339",
    ratimg:
      "https://d3hbwax96mbv6t.cloudfront.net/title-webapp/_next/static/images/filled-stars-6d670c620047f09d4cab57ee3ba90cc6.svg",
  },
];
const SalaryGuide = () => {
  const [Industry, setIndustry] = useState(Industryarray);
  const [Company, setCompany] = useState(Companyarray);
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
          style={{ height: "326px", width: "41%" }}
          src="https://d3hbwax96mbv6t.cloudfront.net/title-webapp/_next/static/images/salaries-8d20dc14bdeae8889387e0fb40e0d546.png"
          alt=""
        />
      </div>
      {/* // day-3 */}

      {/*  starting Browse top paying jobs by industry */}
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
                  href=" "
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
        {/* ending first mapping part */}

        {/* ending Browse top paying jobs by industry */}

        {/* starting Browse top paying Companies by industry */}

        <div style={{ marginTop: "20px" }}>
          <h1
            style={{
              fontSize: "30px",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            Browse top paying Companies by industry
          </h1>
          <div>
            <Bycompany />
          </div>
          {/* mapping part */}

          <div className="sacompddiv">
            {Company.map((item) => {
              return (
                <div
                  style={{
                    display: "flex",
                    gap: "20px",

                    lineHeight: "0.5",
                  }}
                >
                  <img
                    style={{ height: "60px", borderRadius: "5px" }}
                    src={item.compimg}
                    alt=""
                  />
                  <div style={{ marginTop: "10px" }}>
                    <p style={{ fontSize: "17px" }}>{item.name}</p>
                    <span style={{ marginLeft: "280px" }}>{">"}</span>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <img
                        style={{ height: "10px", marginTop: "8px" }}
                        src={item.ratimg}
                        alt=""
                      />
                      <p
                        style={{
                          marginTop: "8px",
                          color: "#6f6f6f",
                          fontSize: "12px",
                        }}
                      >
                        {item.rating}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ending Browse top paying companies by industry */}

        <Salaryearning />
      </div>
      <div>
        <Secfooter />
      </div>
      <Salarymainfooter />
      {/* <Salarymainfooter/> */}
    </>
  );
};

export default SalaryGuide;
