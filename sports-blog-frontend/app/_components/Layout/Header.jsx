import Link from "next/link"

import { FaSearch } from "react-icons/fa";
function Header() {
    const navItems=[
        {
            display:"Home",
            slug:"/",
        },
        {
            display:"Trending News",
            slug:"news",
        },
        {
            display:"Category",
            slug:"category",
        },
        {
            display:"Recent News",
            slug:"recent-news",
        },
        {
            display:"Contact Us",
            slug:"contact",
        },
        {
            display:"About Us",
            slug:"about",
        },
    ]
  return (
    <header className="header">
      <Link href="/">
        <img className="header__logo" src="/assets/logo.svg" />
      </Link>
      <ul style={{paddingLeft:"95px"}} className="header__nav">
        {navItems.map((item) => (
          <li key={item.slug}>
            <Link href={`/${item.slug}`}>
                <h4>{item.display}</h4>
            </Link>
          </li>
        ))}
      </ul>
      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-input" />
        <button className="search-button">
          <FaSearch />
        </button>
      </div>
    </header>
  );
}

export default Header;