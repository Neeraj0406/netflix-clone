import React, { useEffect, useState } from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";

import "./home.scss";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    const getRandomLists = async () => {
      try {
        let res = await axios.get(
          `/lists/${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          } `,
          {
            headers: {
              token:
                "Bearer " +
                JSON.parse(localStorage.getItem("user")).accessToken,
            },
          },
          { signal: abortCont.signal }
        );

        setLists(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomLists();
    return () => {
      abortCont.abort();
    };
  }, [genre, type]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list) => (
        <List key={list._id} list={list} />
      ))}
    </div>
  );
};

export default Home;