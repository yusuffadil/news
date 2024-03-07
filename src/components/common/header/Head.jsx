import React from "react";

function Head() {
  const headera = import.meta.env.BASE_URL + "headera.png";

  return (
    <>
      <section className="head">
        <div className="container flexSB paddingTB">
          <div className="logo">
            <img src={headera} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Head;
