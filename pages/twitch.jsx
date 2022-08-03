import React from 'react';
import style from '../styles/Error.module.css';
import Head from 'next/head';

function Twitch() {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width" />
                <title>Austin - Twitch</title>
                <meta httpEquiv="refresh" content="0; url=https://twitch.tv/notmraustin" />
            </Head>
        </div>
    );
}

export default Twitch;