import StyledComponentsRegistry from "./registry";

export const metadata = {
    title: "Movie List IMDB",
    description: "Movie List IMDB Top 250",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </body>
        </html>
    );
}
