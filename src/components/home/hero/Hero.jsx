import React, { useEffect, useState } from "react";
import { hero } from "../../../dummyData";
import "./hero.css";
import Card from "./Card";

const Hero = () => {
  const [items, setIems] = useState(hero);
  const [alreadyRead, setAlreadyRead] = useState([]);

  useEffect(() => {
    // const apiKey = import.meta.env.VITE_NEWS_KEY;
    // const url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${apiKey}`;
    // try {
    //   const fetchData = async () => {
    //     const response = await fetch(url);
    //     if (!response.ok) {
    //       throw new Error(`Error fetching data: ${response.status}`);
    //     }
    //     const data = await response.json();
    //     setIems(data.articles);
    //   };
    //   fetchData();
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  }, []);

  useEffect(() => {
    const item = localStorage.getItem("alreadyRead");
    setAlreadyRead(JSON.parse(item));
  }, [alreadyRead]);

  return (
    <>
      <section className="hero">
        <div className="container">
          {items.map((item, i) => {
            return (
              <Card
                key={i}
                item={item}
                read={alreadyRead}
                setAlreadyRead={setAlreadyRead}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Hero;
