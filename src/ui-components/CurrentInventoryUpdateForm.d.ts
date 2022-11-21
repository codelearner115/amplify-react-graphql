/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { CurrentInventory } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CurrentInventoryUpdateFormInputValues = {
    price?: number;
    quantity?: number;
    name?: string;
    alternative?: string;
    measurement?: string;
    onHand?: number;
    expiration?: string;
};
export declare type CurrentInventoryUpdateFormValidationValues = {
    price?: ValidationFunction<number>;
    quantity?: ValidationFunction<number>;
    name?: ValidationFunction<string>;
    alternative?: ValidationFunction<string>;
    measurement?: ValidationFunction<string>;
    onHand?: ValidationFunction<number>;
    expiration?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CurrentInventoryUpdateFormOverridesProps = {
    CurrentInventoryUpdateFormGrid?: FormProps<GridProps>;
    price?: FormProps<TextFieldProps>;
    quantity?: FormProps<TextFieldProps>;
    name?: FormProps<TextFieldProps>;
    alternative?: FormProps<TextFieldProps>;
    measurement?: FormProps<TextFieldProps>;
    onHand?: FormProps<TextFieldProps>;
    expiration?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CurrentInventoryUpdateFormProps = React.PropsWithChildren<{
    overrides?: CurrentInventoryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    currentInventory?: CurrentInventory;
    onSubmit?: (fields: CurrentInventoryUpdateFormInputValues) => CurrentInventoryUpdateFormInputValues;
    onSuccess?: (fields: CurrentInventoryUpdateFormInputValues) => void;
    onError?: (fields: CurrentInventoryUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: CurrentInventoryUpdateFormInputValues) => CurrentInventoryUpdateFormInputValues;
    onValidate?: CurrentInventoryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CurrentInventoryUpdateForm(props: CurrentInventoryUpdateFormProps): React.ReactElement;
