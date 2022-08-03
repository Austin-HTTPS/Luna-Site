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
                <meta httpEquiv="refresh" content="0; url=https://steamcommunity.com/id/notmraustin/" />
            </Head>
        </div>
    );
}

export default Steam;