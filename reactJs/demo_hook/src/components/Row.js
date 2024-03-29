import React, { useEffect, useState } from "react";
import axios from "../core/axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: "390px",
        width: "100%",
        playerVars: {
            // https://developers.google.com/youtube/payer_parameters
            autoplay: 1,
        },
    };

    console.log(movies);

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.name || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

    return (
        <div className="row">
            <h2 className="row__title">{title}</h2>
            <div className="row__posters">
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        onClick={() => {
                            handleClick(movie);
                        }}
                        className={`row__poster ${
                            isLargeRow && "row__posterLarge"
                        }`}
                        src={`${base_url}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`}
                        alt={movie.name}
                    />
                ))}
            </div>
            {trailerUrl && <Youtube videoID={trailerUrl} opts={opts} />}
        </div>
    );
}

export default Row;
