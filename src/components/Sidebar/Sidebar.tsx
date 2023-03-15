import Logo from "../Logo";
import Navbar from "../Navbar";
import { SidebarWrapper, WhiteBar } from "./Sidebar.styled";

export default function Sidebar() {
    return (
        <SidebarWrapper>
            <Logo />
            <WhiteBar />
            <Navbar />
        </SidebarWrapper>
    );
}
