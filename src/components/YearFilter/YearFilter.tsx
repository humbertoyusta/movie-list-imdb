"use client";

import React, { useRef, useState } from "react";
import { IoIosArrowDropdown, IoIosClose } from "react-icons/io";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
    ButtonWrapper,
    DropdownIcon,
    DropdownInputWrapper,
    DropdownWrapper,
    FilterButton,
    FilterInput,
    YearFilterWrapper,
} from "./YearFilter.styled";
import useClickOutside from "@/hooks/useClickOutside";

const YearFilter = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [active, setActive] = useState(false);
    const [fromYear, setFromYear] = useState("");
    const [toYear, setToYear] = useState("");

    const wrapperRef = useRef<HTMLDivElement | null>(null);
    useClickOutside(wrapperRef, () => {
        if (active) setActive(false);
    });

    const toggleDropdown = () => {
        setActive(!active);
    };

    const handleOptionClick = () => {
        setActive(false);
        router.push(pathname);
    };

    const handleClearClick = () => {
        setActive(false);
    };

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        setter: React.Dispatch<React.SetStateAction<string>>
    ) => {
        setter(event.target.value);
    };

    return (
        <YearFilterWrapper active={active} ref={wrapperRef}>
            <ButtonWrapper onClick={toggleDropdown}>
                <div>Filter by year</div>
                {active ? (
                    <DropdownIcon onClick={handleClearClick}>
                        <IoIosClose />
                    </DropdownIcon>
                ) : (
                    <DropdownIcon>
                        <IoIosArrowDropdown />
                    </DropdownIcon>
                )}
            </ButtonWrapper>
            {active && (
                <DropdownWrapper>
                    <DropdownInputWrapper>
                        <FilterInput
                            type="number"
                            placeholder="From year"
                            value={fromYear}
                            onChange={(event) =>
                                handleInputChange(event, setFromYear)
                            }
                        />
                        <FilterInput
                            type="number"
                            placeholder="To year"
                            value={toYear}
                            onChange={(event) =>
                                handleInputChange(event, setToYear)
                            }
                        />
                    </DropdownInputWrapper>
                    <FilterButton onClick={handleOptionClick}>
                        Filter
                    </FilterButton>
                </DropdownWrapper>
            )}
        </YearFilterWrapper>
    );
};

export default YearFilter;
