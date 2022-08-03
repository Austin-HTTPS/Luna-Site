import React from 'react';
import Head from 'next/head';

function EpicGames() {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width" />
                <title>Austin IS Pog</title>
            </Head>
            <body>
              <div className={style.align}>
                    <div className={style.container}>
                        <strong style={{ fontSize: 32, color: '#ddd9e6' }}>Epic Games</strong><text style={{ color: 'rgb(65, 59, 74)', fontSize: 24 }}></text> <br />
                        <p>Hey! Since Epic Games doesn't have a profile link, I can't redirect you anywhere :(; however, I can give you my username. My Epic Games username is NotMrAustin .</p>
                    </div>
              </div>
            </body>
        </div>
    );
}

export default EpicGames;