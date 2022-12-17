import React from 'react';
import style from '../styles/Error.module.css';
import Head from 'next/head';

function Experiences() {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width" />
                <title>Austin - Experiences</title>
            </Head>
              <div className={style.align}>
                    <div className={style.container}>
                        <strong style={{ fontSize: 32, color: '#ddd9e6' }}>Experiences</strong><text style={{ color: 'rgb(221, 217, 230)', fontSize: 24 }}> ⌋ </text> <br />
                    </div>
              </div>
        </div>
    );
}

export default Experiences;