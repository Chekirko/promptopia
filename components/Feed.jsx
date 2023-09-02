"use client";

import { useState, useEffect } from "react";
import QuoteCard from "./QuoteCard";

const QuoteCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((quote) => (
        <QuoteCard
          key={quote._id}
          quote={quote}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [quotes, setQuotes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/quote", { next: { revalidate: 60 } });
      const data = await response.json();
      setQuotes(data);
    };

    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {
    e.preventDefault();
  };

  const handleTagClick = () => {};

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Пошук за тегом або ім`ям користувача"
          value={searchText}
          onChange={handleSearchChange}
          className="search_input peer"
          required
        />
      </form>

      <QuoteCardList data={quotes} handleTagClick={handleTagClick} />
    </section>
  );
};

export default Feed;
