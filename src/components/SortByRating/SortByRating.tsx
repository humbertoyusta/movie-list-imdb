"use client";

import React, { useRef, useState } from "react";
import { IoIosArrowDropdown, IoIosClose } from "react-icons/io";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
    DropdownIcon,
    DropdownOption,
    DropdownWrapper,
    SortByRatingWrapper,
} from "./SortByRating.styled";
import useClickOutside from "@/hooks/useClickOutside";

const SortByRating = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [active, setActive] = useState(false);

    const wrapperRef = useRef<HTMLDivElement | null>(null);
    useClickOutside(wrapperRef, () => {
        if (active) setActive(false);
    });

    const toggleDropdown = () => {
        setActive(!active);
    };

    const handleOptionClick = (option: string) => {
        setActive(false);
        router.push(pathname);
    };

    const handleClearClick = () => {
        setActive(false);
    };

    return (
        <SortByRatingWrapper
            active={active}
            onClick={toggleDropdown}
            ref={wrapperRef}
        >
            <div>Sort by rating</div>
            {active ? (
                <DropdownIcon onClick={handleClearClick}>
                    <IoIosClose />
                </DropdownIcon>
            ) : (
                <DropdownIcon>
                    <IoIosArrowDropdown />
                </DropdownIcon>
            )}
            {active && (
                <DropdownWrapper>
                    <DropdownOption
                        key={"ASC"}
                        onClick={() => handleOptionClick("ASC")}
                    >
                        Ascending
                    </DropdownOption>
                    <DropdownOption
                        key={"DESC"}
                        onClick={() => handleOptionClick("DESC")}
                    >
                        Descending
                    </DropdownOption>
                </DropdownWrapper>
            )}
        </SortByRatingWrapper>
    );
};

export default SortByRating;
