import React from 'react';
import Head from 'next/head';
import style from '../styles/Error.module.css';

function Example() {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width" />
                <title>Austin - Github</title>
                <meta httpEquiv="refresh" content="0; url=https://github.com/Austin-HTTPS" />
            </Head>
          <div className={style.align}>
                    <div className={style.container}>
                        <strong style={{ fontSize: 32, color: '#ddd9e6' }}>Error</strong><text style={{ color: 'rgb(65, 59, 74)', fontSize: 24 }}> ⌋ Hey! It looks like you have ran in an <strong>error</strong>! King <strong>Bob</strong> and his minions have luckily found the url that you were supposed to be redirected to. Please click on the following link to be directed to your destination: <strong><a href="https://github.com/Austin-HTTPS">https://github.com/Austin-HTTPS</a></strong></text> <br />
                    </div>
                </div>
        </div>
    );
}

export default Github;