import React from 'react';
import style from '../styles/Error.module.css';
import Head from 'next/head';

function Instagram() {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width" />
                <title>Austin - Instagram</title>
                <meta httpEquiv="refresh" content="0; url=https://instagram.com/notmraustin" />
            </Head>
        </div>
    );
}

export default Instagram;