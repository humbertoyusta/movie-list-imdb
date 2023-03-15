import dynamic from "next/dynamic";

const Sidebar = dynamic(() => import("../components/Sidebar"));

export default function Home() {
    return (
        <>
            <Sidebar />
        </>
    );
}
