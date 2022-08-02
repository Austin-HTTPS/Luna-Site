import React from 'react';
import Head from 'next/head';

function Patreon() {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width" />
                <title>Austin Is Pog</title>
                <p>Hey! It looks like you have ran in an <strong>error</strong>! King <strong>Bob</strong> and his minions have luckily found the url that you were supposed to be redirected to. Please click on the following link to be directed to your destination: <strong><a href="https://www.patreon.com/notmraustin">https://www.patreon.com/notmraustin</a></strong></p>
                <meta httpEquiv="refresh" content="0; url=https://www.patreon.com/notmraustin" />
            </Head>
        </div>
    );
}

export default Patreon;