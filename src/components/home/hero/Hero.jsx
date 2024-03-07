import React, { useEffect, useState } from "react";
import "./hero.css";
import Card from "./Card";

const Hero = () => {
  const item = localStorage.getItem("alreadyRead");

  const [items, setIems] = useState([]);
  const [alreadyRead, setAlreadyRead] = useState(JSON.parse(item));

  useEffect(() => {
    setIems([])
    const apiKey = import.meta.env.VITE_NEWS_KEY;
    const url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${apiKey}`;
    try {
      const fetchData = async () => {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.status}`);
        }
        const data = await response.json();
        setIems(data.articles);
      };
      fetchData();
    } catch (error) {
      console.error("Error:", error);
    }
  }, []);

  const changeRead = () => {
    const item = localStorage.getItem("alreadyRead");
    setAlreadyRead(JSON.parse(item))
  }

  return (
    <>
      <section className="hero">
        {
          items.length < 1 ? (
            <div className="skeleton-9dadmx2iesv"></div>
          ) :
            <div className="container">
              {items.map((item, i) => {
                return (
                  <Card
                    key={i}
                    item={item}
                    read={alreadyRead}
                    setAlreadyRead={() => changeRead()}
                  />
                );
              })}
            </div>
        }

      </section>
    </>
  );
};

export default Hero;
