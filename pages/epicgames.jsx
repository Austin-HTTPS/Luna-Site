import React from 'react';
import style from '../styles/Error.module.css';
import Head from 'next/head';

function EpicGames() {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width" />
                <title>Austin IS Pog</title>
            </Head>
              <div className={style.align}>
                    <div className={style.container}>
                        <strong style={{ fontSize: 32, color: '#ddd9e6' }}>Epic Games</strong><text style={{ color: 'rgb(65, 59, 74)', fontSize: 24 }}>Hey! Since Epic Games doesn't have a profile link, I can't redirect you anywhere :(; however, I can give you my username. My Epic Games username is NotMrAustin .</text> <br />
                    </div>
              </div>
        </div>
    );
}

export default EpicGames;