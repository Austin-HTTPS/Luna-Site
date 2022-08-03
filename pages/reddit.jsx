import React from 'react';
import style from '../styles/Error.module.css';
import Head from 'next/head';

function Reddit() {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width" />
                <title>Austin - Reddit</title>
                <meta httpEquiv="refresh" content="0; url=https://reddit.com/user/notmraustin" />
            </Head>
        </div>
    );
}

export default Reddit;