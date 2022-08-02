import React from 'react';
import Head from 'next/head';

function Reddit() {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width" />
                <title>Austin Is Pog</title>
                <p>Hey! It looks like you have ran in an <strong>error</strong>! King <strong>Bob</strong> and his minions have luckily found the url that you were supposed to be redirected to. Please click on the following link to be directed to your destination: <strong><a href="https://www.reddit.com/user/NotMrAustin">https://www.reddit.com/user/NotMrAustin</a></strong></p>
                <meta httpEquiv="refresh" content="0; url=https://www.reddit.com/user/NotMrAustin" />
            </Head>
        </div>
    );
}

export default Reddit;