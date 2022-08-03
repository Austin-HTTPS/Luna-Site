import React from 'react';
import style from '../styles/Error.module.css';
import Head from 'next/head';

function Discord() {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width" />
                <title>Austin - Discord</title>
            </Head>
            <meta httpEquiv="refresh" content="0; url=https://example.com" />
              <div className={style.align}>
                    <div className={style.container}>
                        <strong style={{ fontSize: 32, color: '#ddd9e6' }}>Xbox</strong><text style={{ color: 'rgb(221, 217, 230)', fontSize: 24 }}> ⌋ Hey! Since Xbox doesn't have a profile link, I can't redirect you anywhere :(; however, I can give you my username. My Xbox gamertag is <strong>NotMrAustin</strong>.</text> <br />
                    </div>
              </div>
        </div>
    );
}

export default Xbox;