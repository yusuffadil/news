import React from "react";
import dayjs from "dayjs";

const Card = ({ item, read }) => {
  const { source, url, urlToImage, title, author, publishedAt } = item;
  const readArticle = (id, title) => {
    const alreadyRead = localStorage.getItem("alreadyRead");

    let obj;

    if (alreadyRead) {
      try {
        obj = JSON.parse(alreadyRead);
      } catch (error) {
        console.error("Error parsing localStorage:", error);
        obj = [];
      }
    } else {
      obj = [];
    }

    const existingItem = obj.find((item) => item.id === id);

    if (!existingItem) {
      obj.push({
        id,
        title,
      });
    }

    const stringifiedObj = JSON.stringify(obj);

    localStorage.setItem("alreadyRead", stringifiedObj);
    setAlreadyRead(stringifiedObj);
  };

  return (
    <div className="box">
      <div className="img">
        <img src={urlToImage} alt="" />
      </div>

      {read && read.find((e) => e.id === source.id && e.title === title) ? (
        <div className={`${urlToImage ?? `titleBg`} text`}>
          <a
            href={url}
            target="_blank"
            onClick={() => readArticle(source.id, title)}
          >
            <h1>{title}</h1>
          </a>
        </div>
      ) : (
        <div className={`${urlToImage ?? `titleBg`} text`}>
          <a
            href={url}
            target="_blank"
            onClick={() => readArticle(source.id, title)}
          >
            <span>{source.name}</span>
            <h1>{title}</h1>
          </a>
          <div className="author flex">
            <span>by {author}</span>
            <span>
              {dayjs(publishedAt).format("dd") +
                ", " +
                dayjs().format("DD") +
                " " +
                dayjs().format("MMMM") +
                " " +
                dayjs().format("HH:mm")}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
