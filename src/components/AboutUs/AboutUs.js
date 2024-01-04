import React, { useState, useEffect } from "react";
import classes from "./AboutUs.module.css";

export default function AboutUs() {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = () => {
    return fetch("https://randomuser.me/api/0.8/?results=4&nat=us")
      .then((response) => {
        return response.json();
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  useEffect(() => {
    fetchEmployees().then((response) => {
      const filteredEmployeeData = response.results.map((employee) => {
        return {
          fullName: `${employee.user.name.first} ${employee.user.name.last}`,
          image: employee.user.picture.large,
          email: employee.user.email,
          cell: employee.user.cell,
        };
      });
      setEmployees(filteredEmployeeData);
    });
  }, []);

  return (
    <div className={classes.aboutUsContainer}>
      <p className={classes.title}>About Us</p>
      <div className={classes.listContainer}>
        {employees.map((employee) => {
          return (
            <div
              className={classes.individualEmployeeContainer}
              key={employee.email}
            >
              <img
                className={classes.employeeImage}
                src={`${employee.image}`}
                alt="Employee"
              />
              <p className={classes.employeeText}>{employee.fullName}</p>
              <p
                className={classes.employeeText}
                style={{ fontWeight: "400", fontSize: "0.75rem" }}
              >
                {employee.email}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
