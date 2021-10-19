import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "./Request";
import axios from "./axios";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);
  console.log(movie);
  function truncate(string, n) {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
        <div className="banner__buttons">
          <button className="banner__playerButton">
            <PlayArrowIcon className="banner__playerButtonIcon" />
            <span className="banner__playerButtonPlay">Play</span>
          </button>
          <button className="banner__moreButton">
            <InfoOutlinedIcon className="banner__moreButtonIcon" />
            <span className="banner__moreButtonText">More information</span>
          </button>
        </div>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
