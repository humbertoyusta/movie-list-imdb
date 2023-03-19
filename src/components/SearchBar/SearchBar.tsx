import {
    SearchBarFormStyled,
    SearchBarInputStyled,
    SearchBarSubmitStyled,
} from "./SearchBar.styled";
import { useForm } from "react-hook-form";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchBar() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();
    const { register, handleSubmit } = useForm<{ search: string }>();
    const active = searchParams.get("search") !== null;

    function handleSearchSubmit({ search }: { search?: string }) {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.delete("search");
        if (search && search !== "") newSearchParams.set("search", search);
        router.push(`${pathname}?${newSearchParams.toString()}`);
    }

    return (
        <SearchBarFormStyled onSubmit={handleSubmit(handleSearchSubmit)}>
            <SearchBarInputStyled
                type="text"
                placeholder="Search for amazing movies..."
                {...register("search", { required: false })}
            />
            <SearchBarSubmitStyled
                type={active ? "button" : "submit"}
                // submit the form without the search parameter if active is true
                onClick={
                    active
                        ? () => handleSearchSubmit({})
                        : handleSubmit(handleSearchSubmit)
                }
                active={active}
            />
        </SearchBarFormStyled>
    );
}
