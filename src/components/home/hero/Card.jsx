import React from "react";
import dayjs from "dayjs";

const Card = ({ item, read, setAlreadyRead }) => {
  const { source, url, urlToImage, title, author, publishedAt } = item;

  const readArticle = (id, title) => {
    const alreadyRead = localStorage.getItem("alreadyRead");
    let obj = JSON.parse(alreadyRead) ?? [];

    obj.push({
      id,
      title,
    });

    const stringifiedObj = JSON.stringify(obj);

    localStorage.setItem("alreadyRead", stringifiedObj);
    setAlreadyRead();
  };

  const strLong = (str, long) => {
    if (str.length < long) {
      return str
    } else {
      return str.slice(0, long) + "..."
    }
  }

  return (
    <div className="box">
      <div className="img">
        <img src={urlToImage} alt="" />
      </div>

      {read && Array.isArray(read) && read?.find((e) => e.id === source.id && e.title === title) ? (
        <div className={`${urlToImage ?? `titleBg`} text`}>
          <a
            href={url}
            target="_blank"
          >
            <h1>{title && strLong(title, 30)}</h1>
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
            <h1>{title && strLong(title, 30)}</h1>
          </a>
          <div className="author flex">
            <span>by {author && strLong(author, 10)}</span>
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
