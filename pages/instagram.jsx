import React from 'react';
import Head from 'next/head';

function Instagram() {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width" />
                <title>Austin IS Pog</title>
                <p>Hey! It looks like you have ran in an <strong>error</strong>! King <strong>Bob</strong> and his minions have luckily found the url that you were supposed to be redirected to. Please click on the following link to be directed to your destination: <strong><a href="https://instagram.com/notmraustin">https://instagram.com/notmraustin</a></strong></p>
                <meta httpEquiv="refresh" content="0; url=https://instagram.com/notmraustin" />
            </Head>
        </div>
    );
}

export default Instagram;