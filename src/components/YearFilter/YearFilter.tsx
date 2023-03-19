"use client";

import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDropdown, IoIosClose } from "react-icons/io";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
    ButtonWrapper,
    DropdownIcon,
    YearFilterWrapper,
} from "./YearFilter.styled";
import useClickOutside from "@/hooks/useClickOutside";
import { FieldValues } from "react-hook-form";
import YearFilterForm from "@/components/YearFilterForm";

const YearFilter = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [status, setStatus] = useState<"active" | "open" | "closed">(
        searchParams.get("years") !== null ? "active" : "closed"
    );

    const wrapperRef = useRef<HTMLDivElement | null>(null);
    useClickOutside(wrapperRef, () => {
        if (status === "open") setStatus("closed");
    });

    const toggleDropdown = () => {
        if (status === "closed") setStatus("open");
        else if (status === "open") setStatus("closed");
    };

    useEffect(() => {
        setStatus(searchParams.get("years") !== null ? "active" : "closed");
    }, [searchParams]);

    const handleFilterSubmit = ({ fromYear, toYear }: FieldValues) => {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set("years", `${fromYear}-${toYear}`);
        router.push(`${pathname}?${newSearchParams.toString()}`);
    };

    const handleClearClick = () => {
        if (status === "active") {
            const newSearchParams = new URLSearchParams(searchParams);
            newSearchParams.delete("years");
            router.push(`${pathname}?${newSearchParams.toString()}`);
        } else if (status === "open") {
            setStatus("closed");
        }
    };

    return (
        <YearFilterWrapper status={status} ref={wrapperRef}>
            <ButtonWrapper
                onClick={
                    status === "active" ? handleClearClick : toggleDropdown
                }
            >
                <div>Filter by year</div>
                <DropdownIcon>
                    {status === "closed" ? (
                        <IoIosArrowDropdown />
                    ) : (
                        <IoIosClose />
                    )}
                </DropdownIcon>
            </ButtonWrapper>
            {status === "open" && (
                <YearFilterForm onSubmit={handleFilterSubmit} />
            )}
        </YearFilterWrapper>
    );
};

export default YearFilter;
