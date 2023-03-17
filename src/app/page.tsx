import dynamic from "next/dynamic";
import SearchHeader from "@/components/SearchHeader";

const Sidebar = dynamic(() => import("../components/Sidebar"));

export default function Home() {
    return (
        <>
            <Sidebar />
            <SearchHeader />
        </>
    );
}
