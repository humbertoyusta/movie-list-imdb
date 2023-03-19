import { ButtonWrapper } from "@/components/Button/Button.styled";
import Image from "next/image";

interface IButtonProps {
    kind: "back";
    onClick?: () => void;
}

export default function Button({ kind, onClick }: IButtonProps) {
    return (
        <ButtonWrapper onClick={onClick}>
            {kind === "back" && (
                <Image src={"/back.svg"} width={20} height={20} alt="go-back" />
            )}
        </ButtonWrapper>
    );
}
