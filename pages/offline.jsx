import React from 'react';
import Head from 'next/head';
import { HiChartBar } from 'react-icons/hi';

function Offline() {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width" />
                <title>Austin - Offline</title>
            </Head>
              <div className={style.align}>
                    <div className={style.container}>
                        <strong style={{ fontSize: 32, color: '#ddd9e6' }}>Uh oh</strong><text style={{ color: 'rgb(221, 217, 230)', fontSize: 24 }}> ⌋ It looks like you are offline! Please click reload to reload the page, or check your internet connection.</text> <br />
                      <button onClick={() => window.location.reload = ``} className='button' style={{ marginTop: 10 }}>
                            <HiChartBar style={{ height: 22, width: 22, marginTop: 1.8, marginRight: 5 }} />
                            <div>Reload</div>
                      </button>
                    </div>
              </div>
        </div>
    );
}

export default Offline;