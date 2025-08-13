import React from "react";
import "../csssection/FeaturesSection.css";
import payrollImg from "../assets/payroll.png";
import schoolImg from "../assets/school.png";
import outsourcingImg from "../assets/outsourcing.png";

const features = [
  {
    title: "ERP System",
    description:
      "A powerful ERP solution designed to streamline school management, automate processes, and enhance productivity.",
    image: schoolImg,
    points: [
      "Student information management",
      "Attendance tracking",
      "Timetable automation",
    ],
  },
  {
    title: "Payroll Management",
    description:
      "Manage salaries, benefits, and attendance effortlessly with our secure and user-friendly payroll system.",
    image: payrollImg,
    points: [
      "Salary calculation",
      "Tax & compliance",
      "Employee self-service",
    ],
  },
  {
    title: "Outsourcing Services",
    description:
      "Comprehensive outsourcing services for educational institutions to save time and reduce operational costs.",
    image: outsourcingImg,
    points: [
      "Payroll outsourcing",
      "Administrative support",
      "Financial reporting",
    ],
  },
];

export default function Features() {
  return (
    <section className="features-section">
      <h2>Features</h2>
      {features.map((feature, index) => (
        <div
          className={`feature-box ${index % 2 !== 0 ? "reverse" : ""}`}
          key={index}
        >
          <div className="feature-text">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <div className="feature-points">
              {feature.points.map((point, i) => (
                <div className="point-box" key={i}>
                  {point}
                </div>
              ))}
            </div>
          </div>
          <div className="feature-image">
            <img src={feature.image} alt={feature.title} />
          </div>
        </div>
      ))}
    </section>
  );
}
