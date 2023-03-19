import { useForm } from "react-hook-form";
import {
    DropdownForm,
    DropdownInputWrapper,
    FilterButton,
    FilterError,
    FilterInput,
} from "./YearFilterForm.styled";
import React from "react";

interface IFormValues {
    fromYear: number;
    toYear: number;
}

export default function YearFilterForm({
    onSubmit,
}: {
    onSubmit: (data: IFormValues) => void;
}) {
    const { register, handleSubmit, formState, getValues } =
        useForm<IFormValues>();

    return (
        <DropdownForm onSubmit={handleSubmit(onSubmit)}>
            <DropdownInputWrapper>
                <FilterInput
                    hasErrors={formState.errors.fromYear !== undefined}
                    type="number"
                    placeholder={"From"}
                    {...register("fromYear", {
                        required: true,
                        validate: () =>
                            getValues("fromYear") <= getValues("toYear"),
                    })}
                />
                <FilterInput
                    hasErrors={formState.errors.toYear !== undefined}
                    placeholder={"To"}
                    type="number"
                    {...register("toYear", {
                        required: true,
                        validate: () =>
                            getValues("fromYear") <= getValues("toYear"),
                    })}
                />
            </DropdownInputWrapper>
            {formState.errors.fromYear?.type === "validate" && (
                <FilterError>
                    From year must not be later than to year
                </FilterError>
            )}
            <FilterButton type="submit">Filter</FilterButton>
        </DropdownForm>
    );
}
