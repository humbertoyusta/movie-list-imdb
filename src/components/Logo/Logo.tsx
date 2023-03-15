import { LogoStyled } from "./Logo.styled";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href={"/"}>
            <LogoStyled src="/logo.png" alt="Logo" />
        </Link>
    );
}
