import {
    EmptyDiv,
    GrayLine,
    HeaderTitle,
    HeaderWrapper,
} from "@/components/Header/Header.styled";
import BackButton from "@/components/BackButton";

export default function Header({ title }: { title: string }) {
    return (
        <>
            <HeaderWrapper>
                <BackButton />
                <HeaderTitle>{title}</HeaderTitle>
                <EmptyDiv />
            </HeaderWrapper>
            <GrayLine />
        </>
    );
}
