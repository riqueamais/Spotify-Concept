import Link from "next/link"

export const Header = () => {
    return (
        <>
        <header>
            <Link href="/">
                <img src="/favicon.ico" alt="icon" className="logo" />
            </Link>
                <h1 className="h1-clone">Spotify🅡 | Concept</h1>
            <nav className="navegation">
                <ul>    
                <li><Link href="/">Home</Link></li>
                <li><Link href="/">Perfil</Link></li>
                <li><Link href="/">Settings</Link></li>
                </ul>
            </nav>
        </header>
        </>
    )
}