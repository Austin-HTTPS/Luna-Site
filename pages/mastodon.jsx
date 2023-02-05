import React from 'react';
import Head from 'next/head';

function Mastodon() {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width" />
                <title>Austin - Mastodon</title>
                <meta httpEquiv="refresh" content="0; url=https://mastodon.social/@mraustin" />
            </Head>
        </div>
    );
}

export default Mastodon; 