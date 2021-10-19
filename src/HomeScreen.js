import React from "react";
import Banner from "./Banner";
import "./HomeScreen.css";
import Nav from "./Nav";
import requests from "./Request";
import Row from "./Row";
function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchTrending}
        isLargeRow
      />
      <Row title="TOP RATED" fetchURL={requests.fetchTopRated} />
      <Row title="ACTION MOVIES" fetchURL={requests.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchURL={requests.fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchURL={requests.fetchHorrorMovies} />
      <Row title="ROMANCE MOVIES" fetchURL={requests.fetchRomanceMovies} />
      <Row title="DOCUMENTARIES" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;
