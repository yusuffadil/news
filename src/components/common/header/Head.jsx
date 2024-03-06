import React from "react";

function Head() {
  const myImage = import.meta.env.BASE_URL + "news.png";
  const headerb = import.meta.env.BASE_URL + "headerb.png";

  return (
    <>
      <section className="head">
        <div className="container flexSB paddingTB">
          <div className="logo">
            <img src={myImage} alt="" />
          </div>
          <div className="ad">
            <img src={headerb} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Head;
