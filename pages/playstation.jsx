import React from 'react';
import style from '../styles/Error.module.css';
import Head from 'next/head';

function PlayStation() {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width" />
                <title>Austin - Playstation</title>
            </Head>
              <div className={style.align}>
                    <div className={style.container}>
                        <strong style={{ fontSize: 32, color: '#ddd9e6' }}>PlayStation</strong><text style={{ color: 'rgb(221, 217, 230)', fontSize: 24 }}> ⌋ Hey! Since Playstation doesn't have a profile link, I can't redirect you anywhere :(; however, I can give you my username. My PlayStation username is <strong>NotMrAustin</strong>.</text> <br />
                    </div>
              </div>
        </div>
    );
}

export default PlayStation;