'use client'
import styles from "./page.module.css";
import React, { useState, useEffect } from 'react';
import Card from "./components/card";

export default function Home() {
  const [heroes, setHeroes] = useState([]);

  const getHeroes = async (id) => {
    try {
      const url = `https://superheroapi.com/api.php/c20cda739a199e069a30b889d7aa2b1f/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      setHeroes((prev) => [...prev, data]);
    } catch (error) {
      console.log("Erro ao carregar os dados da API");
    }
  };

  useEffect(() => {
    getHeroes(200);
    getHeroes(465);
  }, []);

  useEffect(() => {
    console.log("API atualizada:", heroes);
  }, [heroes]);

  return (
    <main className={styles.corpo}>
      {heroes.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        heroes.map((hero, index) => (
          <Card key={index} hero={hero} />
        ))
      )}
    </main>
  );
  
}
