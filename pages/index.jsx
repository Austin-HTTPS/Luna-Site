import config from '../config';
import style from '../styles/Home.module.css';
import { useState, useEffect } from 'react';

import { HiOutlineNewspaper, HiOutlineLink, HiX, HiOutlineExclamation, HiOutlineFolder, HiOutlineMenuAlt2, HiCode, HiClock, HiVideoCamera, HiOutlineShieldCheck, HiOutlineCode } from 'react-icons/hi';
export default function Homepage({ user, cards, error }) {
    const [width, setWidth] = useState()
    useEffect(() => {
        setInterval(() => {
            if (window.innerWidth == width) return;
            setWidth(window.innerWidth);
        }, 400)
    });
    return (
        <>
            <div className={style.align}>
                <div className={style.container}>
                    <div className={style.align}>
                        <div alt='banner' className={style.banner} style={{ background: `url('${user?.banner}') no-repeat left top`, backgroundSize: 'cover' }}></div>
                        <div className={style.on_banner} style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0) 68%, rgb(30, 26, 34) 100%)', display: user?.banner ? '' : 'none' }} />
                    </div>
                    <div className={style.me}>
                        <div className={style.profilepicture} style={{ backgroundColor: (user?.status?.state?.color || `#747F8D`) }}>
                            <img src={user?.avatar} alt='profile picture' draggable={false} style={{ width: 138, borderRadius: 10 }} />
                        </div>
                        <div style={{ marginLeft: 176, marginTop: (user?.status?.emote || user?.status?.text) ? 14 : 35 }} className={style.name}>
                            <text style={(user?.status?.emote || user?.status?.text) ? { fontSize: 44, color: '#fff' } : { fontSize: 48, position: 'relative', top: 4, color: '#fff' }}>{user?.nickname}</text>
                            {(user?.status?.emote || user?.status?.text) ?
                                <div style={{ display: 'felx' }}>
                                    {user?.status?.emote ? <img src={user?.status?.emote} style={{ width: 24, borderRadius: 3, marginTop: 4, marginRight: 3 }} draggable={false} /> : <></>}
                                    <text style={{ position: 'relative', top: -5, left: 4, color: '#CCCCCC', fontSize: 20 }}>{user?.status?.text ? user?.status?.text : ``}</text>
                                </div>
                                : <></>
                            }
                        </div>
                        <div className={style.badges} style={(user?.status?.emote || user?.status?.text) ? { marginTop: 8 } : { marginTop: width > 540 ? 14 : 4 }}>
                            <button className={style.badge} title='https://github.com/Austin-HTTPS' onClick={() => window.open('https://github.com/Austin-HTTPS')}> <HiCode style={{ height: 22, width: 22, marginRight: 4 }} /> Developer </button>
                            <button className={style.badge} title='https://discord.gg/a3av4pZMx2' onClick={() => window.open('https://discord.gg/a3av4pZMx2')}> <HiOutlineShieldCheck style={{ height: 22, width: 22, marginRight: 4 }} /> Moderator </button>
                        </div>
                    </div>
                    <div className={style.content}>
                        <div className={style.readme}>
                            <strong style={{ fontSize: 27 }}>👋 About me</strong> <br />
                            <div style={{ marginTop: 8, marginLeft: 12 }}>
                                Hey there! My name is <strong>Austin</strong> and I'm a small content creator and moderator on Discord living in California (GMT-8).
                              <br /><br />
                                I've taught myself a ton about moderation, Minecraft, and much more! I joined Discord on <strong>July 12, 2019</strong>, and Minecraft on <strong>March 16, 2020</strong>. You may see me moderating some support servers and other community servers on Discord! 
                                <br /><br />
                               My current goals are to get the <strong>partner badge</strong> on Discord and to be a <strong>well-rounded</strong> Minecraft player! My favorite color is <strong>green</strong> and I love to play with my dog.
                              <br /><br />
                              I would like to thank everyone who helped me get to where I am today and all of my friends! Because of Minecraft and Discord, I've met a lot of very awesome people! Also, I would like to thank  <button className='link' style={{ fontSize: '1.1rem' }} onClick={() => window.open('https://twitter.com/funnydusto')}>@funnydusto</button> for making my awesome profile picture and <button className='link' style={{ fontSize: '1.1rem' }} onClick={() => window.open('https://discord.gg/7fkKE4BBnd')}>@MrStefan</button> for making my amazing banner.
                              <br /><br />
                              I only friend people on Discord who I know or work with. "I could say hmm and mean 69 different things"
                              <br /><br />
                            </div>
                            <br />
                            <strong style={{ fontSize: 27 }}>🐦 Social Medias</strong><br />
                            <div style={{ marginTop: 8, marginLeft: 12 }}>
                                <button className='link' style={{ fontSize: '1.1rem' }} onClick={() => window.open('https://discord.gg/a3av4pZMx2')}><img src="/discord.png" style={{ width: 18, height: 19 }} /> MrAustin#3915</button>&nbsp; &nbsp; &nbsp;&nbsp;
                                <button className='link' style={{ fontSize: '1.1rem' }} onClick={() => window.open('https://www.youtube.com/NotMrAustin')}><img src="/youtube.png" style={{ width: 18, height: 19 }} /> /notmraustin</button> <br />
                                <button className='link' style={{ fontSize: '1.1rem' }} onClick={() => window.open('https://www.instagram.com/notmraustin/')}><img src="/instagram.png" style={{ width: 18, height: 19 }} /> @NotMrAustin</button>&nbsp; &nbsp; &nbsp; &nbsp;
                                <button className='link' style={{ fontSize: '1.1rem' }} onClick={() => window.open('https://github.com/Austin-HTTPS')}><img src="/github.png" style={{ width: 18, height: 19 }} /> Austin-HTTPS</button> <br />
                                <button className='link' style={{ fontSize: '1.1rem' }} onClick={() => window.open('https://twitter.com/NotMrAustin')}><img src="/twitter.png" style={{ width: 18, height: 19 }} /> @NotMrAustin</button>&nbsp; &nbsp; &nbsp; &nbsp;
                                <button className='link' style={{ fontSize: '1.1rem' }} onClick={() => window.open('https://www.twitch.tv/notmraustin')}><img src="/twitch.png" style={{ width: 18, height: 19 }} /> NotMrAustin</button> <br />
                                <button className='link' style={{ fontSize: '1.1rem' }} onClick={() => window.open('https://www.tiktok.com/@notmraustin')}><img src="/tiktok.png" style={{ width: 18, height: 19 }} /> @NotMrAustin</button>&nbsp; &nbsp; &nbsp; &nbsp;
                              <button className='link' style={{ fontSize: '1.1rem' }} onClick={() => window.open('https://open.spotify.com/user/5xs3jjay7vb1yau2yzklzt9cm')}><img src="/spotify.png" style={{ width: 18, height: 19 }} /> notmraustin</button> <br />
                              <button className='link' style={{ fontSize: '1.1rem' }} onClick={() => window.open('https://www.reddit.com/user/NotMrAustin')}><img src="/reddit.png" style={{ width: 18, height: 19 }} /> u/NotMrAustin</button>&nbsp; &nbsp; &nbsp; &nbsp;
                              <button className='link' style={{ fontSize: '1.1rem' }} onClick={() => window.open('https://www.patreon.com/notmraustin')}><img src="/patreon.png" style={{ width: 18, height: 19 }} /> notmraustin</button> <br />
                            </div>
                            <br />
                            <strong style={{ fontSize: 27 }}>🍧 Contact</strong><br />
                            <div style={{ marginTop: 8, marginLeft: 12 }}>
                                You want to collaborate with me or just talk? <br />
                                Join my <button className='link' style={{ fontSize: '1.1rem' }} onClick={() => window.open('https://discord.gg/a3av4pZMx2')}>Discord server</button> and shoot me a ping or email me at <button className='link' style={{ fontSize: '1.1rem' }} onClick={() => window.open('mailto:hi@austinispog.tk')}>hi@austinispog.tk</button>!
                            </div>
                        </div>
                        <div className={user?.activities.length > 0 ? style.section : ''}>
                            {user?.activities.map((activity) => (
                                <div className={style.readme} style={{ paddingLeft: 14 }} key={activity.applicationId}>
                                    <strong style={{ fontSize: 24, color: '#ddd9e6' }}>{activity.name}</strong><text style={{ color: 'rgb(99, 90, 112)' }}> ⌋ {activity.name.toLowerCase().includes(`music`) ? 'Listening' : (activity.name.toLowerCase().includes(`youtube`) ? 'Watching' : (activity.name.toLowerCase().includes(`code`) ? 'Developing' : (activity.name.toLowerCase().includes(`github`) ? 'Browsing' : 'Playing')))}</text>
                                    <div style={{ display: 'flex' }}>
                                        <div style={{ position: 'relative', marginTop: 6 }}>
                                            {activity.assets.large.image ?
                                                <img src={activity.assets.large.image} style={{ height: 80, borderRadius: 4 }} draggable={false} alt={`${activity.name}'s big icon`} title={activity.assets.large.text} />
                                                : <></>
                                            }
                                            {activity.assets.small.image ?
                                                <img src={activity.assets.small.image} style={{ height: 27, position: 'absolute', top: 62, left: 66, backgroundColor: '#201d24', borderRadius: 10, outline: '#201d24 solid 0.2rem' }} draggable={false} alt={`${activity.name}`} title={activity.assets.small.text} />
                                                : <></>
                                            }
                                        </div>
                                        <div style={{ marginTop: 24, marginLeft: 8 }}>
                                            <div style={{ display: 'flex', marginBottom: 2 }}>
                                                <HiOutlineFolder style={{ minHeight: 21, minWidth: 21 }} />
                                                <div style={{ marginLeft: 4, marginTop: 3, fontSize: '1.1rem', position: 'relative', bottom: 2 }}>{activity.details?.length >= 70 ? `${activity.details.slice(0, -(activity.details?.length - 70 + 3))}...` : activity.details}</div>
                                            </div>
                                            <div style={{ display: 'flex', marginTop: 2 }}>
                                                <HiOutlineMenuAlt2 style={{ minHeight: 21, minWidth: 21 }} />
                                                <div style={{ marginLeft: 4, marginTop: 3, fontSize: '1.1rem', position: 'relative', bottom: 2 }}>{activity.state?.length >= 70 ? `${activity.state.slice(0, -(activity.state?.length - 70 + 3))}...` : activity.state}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={cards?.length > 0 ? style.section : ''} style={{ marginBottom: width > 540 ? 20 : 60 }}>
                            {cards?.map((card) => (
                                <div className={style.readme} style={{ paddingLeft: 14 }} key={card.name}>
                                    <strong style={{ fontSize: 24, color: '#ddd9e6' }}>{card.name}</strong>
                                    {card?.bot > 0 ?
                                        <badge style={{ backgroundColor: `#5865f2`, fontWeight: 600, fontFamily: 'Open Sans, sans-serif', fontSize: 13, padding: 2, paddingRight: 6, paddingLeft: (card?.bot > 1 ? 19 : 6), borderRadius: 4, color: '#fff', position: 'relative', marginLeft: 4 }}>
                                            {card?.bot > 1 ? <svg style={{ position: 'absolute', top: 4, left: 2.5 }}>
                                                <path d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z" fill="#fff"></path>
                                            </svg> : <></>}
                                            BOT
                                        </badge>
                                        : <></>
                                    }
                                    {card.position ? <text style={{ color: 'rgb(99, 90, 112)' }}> ⌋ {card.position}</text> : <></>}
                                    <div style={{ marginTop: 4, display: 'flex' }}>
                                        <HiOutlineNewspaper style={{ minHeight: 22, minWidth: 22 }} />
                                        <div style={{ marginTop: 2 }}>&nbsp;{card.description}</div>
                                    </div>
                                    <button style={{ marginTop: 4, display: 'flex', color: 'currentColor', cursor: 'pointer' }} onClick={() => window.open(card.url)}>
                                        <HiOutlineLink style={{ minHeight: 21, minWidth: 21 }} />
                                        <div className='link' style={{ marginTop: 2, fontSize: '1.1rem', position: 'relative', bottom: 3 }}>&nbsp;{card.url.replace(/https:\/\//, ``)}</div>
                                    </button>
                                    <img src={card.icon} className={style.icon} draggable={false} alt={`${card.name}'s icon`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {error === true ?
                    <div className={style.error} id='error'>
                        <strong><HiOutlineExclamation style={{ minHeight: 23, minWidth: 23, position: 'relative', top: 5 }} /> ERROR:</strong>
                        <div style={{ fontFamily: 'Roboto Mono, monospace' }}>
                            Failed to fetch user data; <br />
                            Using preconfigured data;
                        </div>
                        <button style={{ position: 'absolute', top: 8, right: 8, display: 'flex' }} onClick={() => { document.getElementById('error').className += ' Home_fadeout__2jQec'; setTimeout(() => { document.getElementById('error').style.display = 'none' }, 900) }} >
                            <HiX /> <div style={{ position: 'relative', bottom: 2 }}>CLOSE</div>
                        </button>
                    </div>
                    : <></>
                }
            </div>
        </>
    );
};

Homepage.getInitialProps = async () => {
    let user = {};
    let error = false;
    if (config.api.url && config.api.path) try {
        user = await fetch(`${config.api.url}${config.api.path.startsWith(`/`) ? `${config.api.path}` : `/${config.api.path}`}`).then(res => res.json()).catch(() => { return; });
    } catch (e) { error = e }
    if (user?.status !== 200 || !user?.content?.id) {
        if (config.api.url && config.api.path) error = true;
        user = { content: config.user };
    };

    return { user: user?.content, cards: config?.cards, error: error };
};
