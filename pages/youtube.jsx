import React from 'react';
import style from '../styles/Error.module.css';
import Head from 'next/head';

function YouTube() {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width" />
                <title>Austin - YouTube</title>
                <meta httpEquiv="refresh" content="0; url=https://youtube.com/notmraustin" />
            </Head>
        </div>
    );
}

export default YouTube;