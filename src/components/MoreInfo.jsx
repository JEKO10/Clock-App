import React from "react";

function moreInfo({ timezone }) {
  return (
    <section className="moreInfo">
      <div>
        <div>
          <h3>Current timezone</h3>
          <h1>{timezone.timezone}</h1>
        </div>
        <div>
          <h3>Day of the week</h3>
          <h1>{timezone.day_of_week}</h1>
        </div>
        <div>
          <h3>Day of the year</h3>
          <h1>{timezone.day_of_year}</h1>
        </div>
        <div>
          <h3>Week number</h3>
          <h1>{timezone.week_number}</h1>
        </div>
      </div>
    </section>
  );
}

export default moreInfo;
