import Link from "next/link";
import { Group }from "@mantine/core";
export default function NavBar(){
    return (
        // <nav>
        //     <ul>           
        //         <Link href={"/"}>
        //         <li>home</li>
        //         </Link>
        //         <Link href={"/inquiry"}>
        //         <li>inquiry</li>
        //         </Link>
        //         <Link href={"/contact"}>
        //             <li>fab</li>
        //         </Link>           
        //     </ul>
        // </nav>
        <Group gap="lg">
            <Link href={"/"}>Home/ the problem?</Link>
            <Link href={"/inquiry"}>
               form that sends to google sheets
            </Link>
        </Group>
    )
}