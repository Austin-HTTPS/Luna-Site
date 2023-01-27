import config from '../config';

export default function Layout({ user }) {

    return (
        <>
            <header className='header'>
                <ul>
                    <li>
                        <button style={{ display: 'flex', backgroundColor: 'transparent', color: 'inherit' }} onClick={() => window.location.href = 'https://mraustin.net'}>
                            <img src={config.header.icon} alt='profile picture' style={{ height: 38.7, borderRadius: 2 }} draggable={false} />
                            <div className='lunaSeemann'>{config.header.name}</div>
                        </button>
                    </li>
                    
                </ul>
            </header>
        </>
    )
}