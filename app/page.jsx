"use client";
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import fetchApi from '@/data/apiconsumer';
import GameList from './components/gameDetails/GameList';

function Home() {
    const [games, setGames] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedPlatform, setSelectedPlatform] = useState("all");
    const [selectedGenre, setSelectedGenre] = useState("all");
    const [selectedRating, setSelectedRating] = useState("all");

    useEffect(() => {
        const gamesFetch = async () => {
            try {
                const dados = await fetchApi();
                setGames(dados);
            } catch (error) {
                throw error;
            }
        };

        gamesFetch();
    }, []);

    const filterGames = games.filter((game) => {
        const platformName = game.platforms.map((platform) => platform.platform.name);
        const gameGenres = game.genres.map((genre) => genre.name);
        const platformFilter = selectedPlatform == "all" || platformName.includes(selectedPlatform);
        const genreFilter = selectedGenre == "all" || gameGenres.includes(selectedGenre);
        const ratingFilter = selectedRating == "all" || game.rating == selectedRating;
        return platformFilter && genreFilter && ratingFilter;
    });

    const clearFilters = () => {
        setSelectedPlatform("all");
        setSelectedGenre("all");
        setSelectedRating("all");
    }

    return (
        <main className={styles.main}>
      <h1>Games</h1>
      <h1>Filtre pela plataforma:</h1>
      <select value={selectedPlatform} onChange={(ev) => setSelectedPlatform(ev.target.value)}>
        <option value="all">Todas</option>
        {
          games.map((game) => game.platforms.map((platform) => <option value={platform.platform.name}>{platform.platform.name}</option>))
        }
      </select>

      <h1>Ordenar por gênero:</h1>
      <select value={selectedGenre} onChange={(ev) => setSelectedGenre(ev.target.value)}>
        <option value="all">Todas</option>
        {
          games.map((game) => game.genres.map((genre) => <option value={genre.name}>{genre.name}</option>))
        }
      </select>

      <h1>Ordenar por classificação:</h1>
      <select value={selectedRating} onChange={(ev) => setSelectedRating(ev.target.value)}>
        <option value="all">Todas</option>
        {
          games.map((game) => <option value={game.rating}>{game.rating}</option>)
        }
      </select>

      <button className={styles.button} onClick={clearFilters}>
        Redefinir Filtros
      </button>
      <div className={styles.container}>
        <GameList filterGames={filterGames} />
      </div>
    </main>
  );
}

export default Home;