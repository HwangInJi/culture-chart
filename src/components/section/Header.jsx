import React from 'react'

const Header = () => {
    return (
        <header id='header' role='banner'>
            <h1 className='header__logo'>
                <a href='/Home'>Cultuer Chart</a>
            </h1>

            <nav className='header__menu'>
                <ul className='menu'>
                    <li>Melon
                        <ul>
                            <li><a href='/melonconcert'>콘서트</a></li>
                            <li><a href='/melonexhibiton'>전시</a></li>
                            <li><a href='/melonmusical'>뮤지컬</a></li>
                        </ul>
                    </li>
                    <li>Ticket Link
                        <ul>
                            <li><a href='/ticketconcert'>콘서트</a></li>
                            <li><a href='/ticketexhibiton'>전시</a></li>
                            <li><a href='/ticketmusical'>뮤지컬</a></li>
                        </ul>
                    </li>
                    <li>Yes24
                        <ul>
                            <li><a href='/yes24concert'>콘서트</a></li>
                            <li><a href='/yes24exhibiton'>전시</a></li>
                            <li><a href='/yes24musical'>뮤지컬</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default Header