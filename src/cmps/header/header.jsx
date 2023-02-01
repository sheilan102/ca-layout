import { NavBar } from "./navbar";

export function Header() {
    const logoUrl = 'logo.svg'
    return (
        <header className="header flex align-center justify-center">
            <div className="logo flex">
                <img width="160px" height="40px" src={require(`../../assets/img/${logoUrl}`)} />
            </div>
            <NavBar />
        </header>
    )
}