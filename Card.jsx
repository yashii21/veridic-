import React from "react";

const Card = ({ data }) => {
  let {
    date,
    link,
    title: { rendered: titlerender },
    excerpt: { rendered: excerptrender },
  } = data;
  return (
    <div className="card">
      <a href={data.canonical_url}>
        <img
          className="thumbnail"
          src={data.jetpack_featured_media_url}
          alt="thumbnail"
        />
        <p>{date.substring(0, 10)}</p>
        <p>{data.primary_category.description}</p>
      </a>
    </div>
  );
};

export default Card;
