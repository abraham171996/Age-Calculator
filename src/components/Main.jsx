import styles from "./main.module.css";
import arrow from "../assets/image/icon-arrow.svg";

import { useState } from "react";

const Main = () => {
  const [days, setDays] = useState("--");
  const [months, setMonths] = useState("--");
  const [years, setYears] = useState("--");

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() ;
  const currentDay = currentDate.getDate();
  
  const handleButtonClick = () => {
    const inputDay = parseInt(document.getElementById("day").value);
    const inputMonth = parseInt(document.getElementById("month").value);
    const inputYear = parseInt(document.getElementById("year").value);
    const isDayValid = inputDay >= 1 && inputDay <= 31;
    const isMonthValid = inputMonth >= 1 && inputMonth <= 12;
    const isYearValid = inputYear <= currentYear;
    const isDateValid = isDayValid && isMonthValid && isYearValid;

    if (isDateValid) {
      setDays(Math.abs(currentDay - inputDay));
      setMonths(Math.abs(currentMonth - inputMonth));
      setYears(currentYear - inputYear);
    } else {
      setDays("--");
      setMonths("--");
      setYears("--");
    }
    document.getElementById("day").value = "";
    document.getElementById("month").value = "";
    document.getElementById("year").value = "";
    
  };

  return (
    <main>
      <section className={styles.first}>
        <div className={styles.card}>
          <ul className={styles.inptLists}>
            <li className={styles.list}>
              <label className={styles.label} htmlFor="day">
                Day
              </label>
              <input
                type="number"
                className={styles.input}
                name="day"
                id="day"
                placeholder="DD"
                min="1"
                max="31"
                defaultValue={days}
              />
            </li>
            <li className={styles.list}>
              <label className={styles.label} htmlFor="month">
                Month
              </label>
              <input
                className={styles.input}
                type="number"
                name="month"
                id="month"
                placeholder="MM"
                min="1"
                max="12"
                defaultValue={months}
              />
            </li>
            <li className={styles.list}>
              <label className={styles.label} htmlFor="year">
                Year
              </label>
              <input
                className={styles.input}
                type="number"
                name="year"
                id="year"
                placeholder="YYYY"
                max="2023"
                defaultValue={years}
              />
            </li>
          </ul>
          <div className={styles.update}>
            <hr />
            <button onClick={handleButtonClick}>
              <img src={arrow} alt="" />
            </button>
          </div>
          <div className={styles.result}>
            <div className={styles.resultRow}>
              <p>{years}</p>
              <h1>years</h1>
            </div>
            <div className={styles.resultRow}>
              <p>{months}</p>
              <h1>months</h1>
            </div>
            <div className={styles.resultRow}>
              <p>{days}</p>
              <h1>days</h1>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;

 