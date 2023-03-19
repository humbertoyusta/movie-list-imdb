import { ButtonWrapper } from "./FavoritesButton.styled";
import Image from "next/image";

interface IFavoritesButtonProps {
    kind: "add" | "remove";
    onToggleFavorite: () => void;
}

export default function FavoritesButton({
    kind,
    onToggleFavorite,
}: IFavoritesButtonProps) {
    return (
        <ButtonWrapper
            onClick={(e) => {
                e.preventDefault();
                onToggleFavorite();
            }}
        >
            {kind === "add" && (
                <Image
                    src={"/fav.svg"}
                    fill
                    sizes="100%"
                    alt="add-to-favorites"
                />
            )}
            {kind === "remove" && (
                <Image
                    src={"/fav-red.svg"}
                    fill
                    sizes="100%"
                    alt="remove-from-favorites"
                />
            )}
        </ButtonWrapper>
    );
}
