import React from 'react';
import style from '../styles/Error.module.css';
import Head from 'next/head';

function Steam() {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width" />
                <title>Austin - Steam</title>
            </Head>
              <div className={style.align}>
                    <div className={style.container}>
                        <strong style={{ fontSize: 32, color: '#ddd9e6' }}>Steam</strong><text style={{ color: 'rgb(221, 217, 230)', fontSize: 24 }}> ⌋ Hey! It looks like an error occured and we can't redirect you anywhere, please click the following link to go to your destination: https://steamcommunity.com/id/notmraustin/</text> <br />
                    </div>
              </div>
        </div>
    );
}

export default Steam;