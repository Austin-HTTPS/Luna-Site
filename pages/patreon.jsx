import React from 'react';
import Head from 'next/head';
import style from '../styles/Error.module.css';

function Patreon() {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width" />
                <title>Austin - Patreon</title>
                <meta httpEquiv="refresh" content="0; url=https://patreon.com/notmraustin" />
            </Head>
          <div className={style.align}>
                    <div className={style.container}>
                        <strong style={{ fontSize: 32, color: '#ddd9e6' }}>Patreon</strong><text style={{ color: 'rgb(65, 59, 74)', fontSize: 24 }}> ⌋ Hey! It looks like you have ran in an <strong>error</strong>! King <strong>Bob</strong> and his minions have luckily found the url that you were supposed to be redirected to. Please click on the following link to be directed to your destination: <strong><a href="https://patreon.com/notmraustin">https://patreon.com/notmraustin</a></strong></text> <br />
                    </div>
                </div>
        </div>
    );
}

export default Patreon;