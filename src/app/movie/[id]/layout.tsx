export const metadata = {
    title: "Movie from IMDB",
    description: "Movie from IMDB",
};

export default function MovieLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
