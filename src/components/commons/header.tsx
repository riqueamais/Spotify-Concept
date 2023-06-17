import Link from "next/link"

export const Header = () => {
    return (
      <>
        <header>
          <div className="flex items-center">
            <Link href="/">
              <img src="/favicon.ico" alt="icon" className="logo" />
            </Link>
            <h1 className="text-green-400">Spotify🅡 | Concept</h1>
          </div>
          <nav className="navegation">
            <ul>    
              <li><Link href="/">Home</Link></li>
              <li><Link href="/">Perfil</Link></li>
              <li><Link href="/">Settings</Link></li>
            </ul>
          </nav>
        </header>
      </>
    );
  };
  