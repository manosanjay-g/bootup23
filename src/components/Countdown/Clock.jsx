import React, { Fragment } from "react";

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return (
    <Fragment>
      <section className="timer-container">
        <section className="timer">
          <div className="clock">
            <section>
              <p>{timerDays}</p>
              <small>{timerDays === 1 ? "Day" : "Days"}</small>
            </section>
            <span>:</span>
            <section>
              <p>{timerHours}</p>
              <small>{timerHours === 1 ? "Hour" : "Hours"}</small>
            </section>{" "}
            <span>:</span>
            <section>
              <p>{timerMinutes}</p>
              <small>{timerMinutes === 1 ? "Minute" : "Minutes"}</small>
            </section>{" "}
            <span>:</span>
            <section>
              <p>{timerSeconds}</p>
              <small>{timerSeconds === 1 ? "Second" : "Seconds"}</small>
            </section>
          </div>
        </section>
      </section>
    </Fragment>
  );
};

Clock.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10,
};

export default Clock;