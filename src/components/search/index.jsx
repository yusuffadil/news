import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import Card from "../home/hero/Card";

const Search = () => {
    const location = useLocation();
    const item = localStorage.getItem("alreadyRead");

    const [items, setIems] = useState([]);
    const [alreadyRead, setAlreadyRead] = useState(JSON.parse(item));

    useEffect(() => {
        const setSearchParams = () => {
            const slag = location.pathname.split('/');

            if (slag[2] !== '') {
                const apiKey = import.meta.env.VITE_NEWS_KEY;
                const url = `https://newsapi.org/v2/everything?q=${slag[2]}&pageSize=10&sortBy=popularity&apiKey=${apiKey}`;
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
            }
        }

        setIems([])
        setSearchParams()
    }, [location])

    const changeRead = () => {
        const item = localStorage.getItem("alreadyRead");
        setAlreadyRead(JSON.parse(item))
    }

    return (
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
    );
};

export default Search;
