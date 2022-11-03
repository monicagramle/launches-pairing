import React from 'react';

const Card = ({ flightData }) => {

  return (
    <>
      <section className="main-card--cointainer">
        {flightData.map((curElem) => {
          const {
            flight_number,
            launch_date_utc,
            mission_name,
            rocket,
            links,
            launch_success,
            launch_failure_details,
          } = curElem;

          return (
            <>
              <div className="card-container" key={flight_number}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-author subtle"> {launch_date_utc}</span>
                    <h2 className="card-title"> {mission_name} </h2>
                    <span className="card-author subtle"> {rocket.first_stage.cores[0].core_serial}</span>
                    <span className="card-author subtle"> {rocket.second_stage.payloads[0].payload_id}</span>
                    <span className="card-author subtle"> {rocket.second_stage.payloads[0].payload_type}</span>
                  </div>
                  <img src={links.mission_patch_small} alt="images" className="card-media" />

                  <span className="card-tag subtle">
                    {' '}
                    {launch_success == true ? 'Success' : 'Failed'}
                    <span className="tooltip">{launch_failure_details ? launch_failure_details.reason : null}</span>
                  </span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default Card;
