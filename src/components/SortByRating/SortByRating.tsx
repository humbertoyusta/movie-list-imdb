"use client";

import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDropdown, IoIosClose } from "react-icons/io";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
    DropdownIcon,
    DropdownOption,
    DropdownWrapper,
    SortByRatingWrapper,
} from "./SortByRating.styled";
import useClickOutside from "@/hooks/useClickOutside";

export default function SortByRating() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [status, setStatus] = useState<"open" | "closed" | "active">(
        searchParams.get("sort") !== null ? "active" : "closed"
    );

    useEffect(() => {
        setStatus(searchParams.get("sort") !== null ? "active" : "closed");
    }, [searchParams]);

    const wrapperRef = useRef<HTMLDivElement | null>(null);
    useClickOutside(wrapperRef, () => {
        if (status === "open") setStatus("closed");
    });

    const toggleDropdown = () => {
        if (status === "closed") setStatus("open");
        else if (status === "open") setStatus("closed");
    };

    const handleOptionClick = (option: string) => {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set("sort", option);
        router.push(`${pathname}?${newSearchParams.toString()}`);
        setStatus("active");
    };

    const handleClearClick = () => {
        if (status === "active") {
            //setStatus("closed");
            const newSearchParams = new URLSearchParams(searchParams);
            newSearchParams.delete("sort");
            router.push(`${pathname}?${newSearchParams.toString()}`);
        } else if (status === "open") {
            setStatus("closed");
        }
    };

    return (
        <SortByRatingWrapper
            status={status}
            onClick={status === "active" ? handleClearClick : toggleDropdown}
            ref={wrapperRef}
        >
            <div>Sort by rating</div>
            {status === "closed" ? (
                <DropdownIcon>
                    <IoIosArrowDropdown />
                </DropdownIcon>
            ) : (
                <DropdownIcon>
                    <IoIosClose />
                </DropdownIcon>
            )}
            {status === "open" && (
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
}
