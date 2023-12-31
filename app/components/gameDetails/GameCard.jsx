"use client";
import React from 'react';
import styles from './GameCard.module.css';
import { BsTrashFill } from 'react-icons/bs';
import { BiSolidEditAlt } from 'react-icons/bi';
import Link from 'next/link';

function GameCard({ game, removeGame, editGame }) {

  const FormatDatePTBR = (date) => {
    const dateFormated = new Date(date);
    const day = dateFormated.getDate() + 1; 
    const month = dateFormated.getMonth();
    const year = dateFormated.getFullYear();
    return `${day}/${month}/${year}`;
  }

  return (
    <div className={styles.card}>
      <div className={styles.imgcards}>
        <img className={styles.gameThumb} src={game.background_image ? game.background_image : game.background_image} alt={game.name} />
        {game.rating ? <Link className={styles.seeMore} href={`../../games/${game.id}`} target='blank'>Veja Mais</Link> : null}
      </div>
      <div className={styles.cardInfo}>
        <h2 className={styles.title}>{game.name}</h2>
        <p className={styles.rating}>
          {game.rating ? game.rating : "Sem avaliação"}
        </p>
        <p className={styles.released}>
          {game.released ? FormatDatePTBR(game.released) : "Sem data de lançamento"}
        </p>
        <p className={styles.genres}>
          {Array.isArray(game.genres) ? game.genres.join(", ") : game.genres}
        </p>
        <p className={styles.stores}>
          {Array.isArray(game.stores) ? game.stores.join(", ") : game.stores}
        </p>
        <p className={styles.platforms}>
          {Array.isArray(game.platforms) ? game.platforms.join(", ") : game.platforms}
        </p>
      </div>
      <div className={styles.contaierbuttons}>
          <BsTrashFill className={styles.icon} onClick={() => removeGame(game.id)} />
          <BiSolidEditAlt className={styles.icon2} onClick={() => editGame(game.id)} />
        
      </div>
    </div>
  );
}

export default GameCard;
