'use client'
import React, { useState, useEffect } from 'react';
import styles from "./card.module.css";

export default function Card({hero}) {
    return (
        <div id={styles.heroes}>
            <article>
                <img src={hero.image.url} />
                <h1> {hero.name} </h1>
                <p>intelligence:                     
                    <span
                        style={{
                            width: `${hero.powerstats.intelligence}%`,
                            backgroundColor: "#F9B32F",
                        }}
                    ></span> 
                </p>
                <p>strength:                    
                    <span
                        style={{
                            width: `${hero.powerstats.strength}%`,
                            backgroundColor: "#FF7C6C",
                        }}
                    ></span> 
                </p>
            </article>
        </div>
    )
}
