import Link from "next/link";
export default function NavBar(){
    return (
        <nav>
            <ul>
                <Link href={"/"}>
                <li>home</li>
                </Link>
                <Link href={"/inquiry"}>
                <li>inquiry</li>
                </Link>
                <Link href={"/contact"}>
                    <li>fab</li>
                </Link>
            </ul>
        </nav>
    )
}