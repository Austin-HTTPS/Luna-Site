import '../styles/globals.css';
import '../styles/layout.css';
import Head from 'next/head';
import Layout from '../components/layout';
import config from '../config';

import { AiFillHeart } from 'react-icons/ai';

export default function render({ Component, pageProps }) {

    return (
        <>
            <Head>
                <meta charSet='utf-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />

                <meta property='title' content={config.metadata.title} />
                <meta property='description' content={config.metadata.description} />
                <meta name='keywords' content={config.metadata.keywords?.join(`, `)?.toLowerCase()} />

                <meta name="twitter:site" content={config.metadata.domainName} />
                <meta name="twitter:title" content={config.metadata.title} />
                <meta name="twitter:description" content={config.metadata.description} />
                <meta name="twitter:image" content={config.metadata.image} />

                <meta property='og:title' content={config.metadata.title} />
                <meta property='og:description' content={config.metadata.description} />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={config.metadata.image} />

                <meta name='theme-color' content={config.metadata.color} />
                <title>{config.metadata.title}</title>
                <link rel='shortcut icon' type='image/x-icon' href={config.metadata.image} />
            </Head>
            <body>
                <Layout />
                
                <Component {...pageProps} />
            </body>
        </>
    );
};
