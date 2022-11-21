/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CurrentInventoryCreateFormInputValues = {
    price?: number;
    quantity?: number;
    name?: string;
    alternative?: string;
    measurement?: string;
    onHand?: number;
    expiration?: string;
};
export declare type CurrentInventoryCreateFormValidationValues = {
    price?: ValidationFunction<number>;
    quantity?: ValidationFunction<number>;
    name?: ValidationFunction<string>;
    alternative?: ValidationFunction<string>;
    measurement?: ValidationFunction<string>;
    onHand?: ValidationFunction<number>;
    expiration?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CurrentInventoryCreateFormOverridesProps = {
    CurrentInventoryCreateFormGrid?: FormProps<GridProps>;
    price?: FormProps<TextFieldProps>;
    quantity?: FormProps<TextFieldProps>;
    name?: FormProps<TextFieldProps>;
    alternative?: FormProps<TextFieldProps>;
    measurement?: FormProps<TextFieldProps>;
    onHand?: FormProps<TextFieldProps>;
    expiration?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CurrentInventoryCreateFormProps = React.PropsWithChildren<{
    overrides?: CurrentInventoryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CurrentInventoryCreateFormInputValues) => CurrentInventoryCreateFormInputValues;
    onSuccess?: (fields: CurrentInventoryCreateFormInputValues) => void;
    onError?: (fields: CurrentInventoryCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: CurrentInventoryCreateFormInputValues) => CurrentInventoryCreateFormInputValues;
    onValidate?: CurrentInventoryCreateFormValidationValues;
} & React.CSSProperties>;
export default function CurrentInventoryCreateForm(props: CurrentInventoryCreateFormProps): React.ReactElement;
