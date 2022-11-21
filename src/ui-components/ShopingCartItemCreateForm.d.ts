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
export declare type ShopingCartItemCreateFormInputValues = {
    lastPrice?: number;
    newPrice?: number;
    quantity?: number;
    name?: string;
    alternative?: number;
    measurement?: string;
};
export declare type ShopingCartItemCreateFormValidationValues = {
    lastPrice?: ValidationFunction<number>;
    newPrice?: ValidationFunction<number>;
    quantity?: ValidationFunction<number>;
    name?: ValidationFunction<string>;
    alternative?: ValidationFunction<number>;
    measurement?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ShopingCartItemCreateFormOverridesProps = {
    ShopingCartItemCreateFormGrid?: FormProps<GridProps>;
    lastPrice?: FormProps<TextFieldProps>;
    newPrice?: FormProps<TextFieldProps>;
    quantity?: FormProps<TextFieldProps>;
    name?: FormProps<TextFieldProps>;
    alternative?: FormProps<TextFieldProps>;
    measurement?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ShopingCartItemCreateFormProps = React.PropsWithChildren<{
    overrides?: ShopingCartItemCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ShopingCartItemCreateFormInputValues) => ShopingCartItemCreateFormInputValues;
    onSuccess?: (fields: ShopingCartItemCreateFormInputValues) => void;
    onError?: (fields: ShopingCartItemCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ShopingCartItemCreateFormInputValues) => ShopingCartItemCreateFormInputValues;
    onValidate?: ShopingCartItemCreateFormValidationValues;
} & React.CSSProperties>;
export default function ShopingCartItemCreateForm(props: ShopingCartItemCreateFormProps): React.ReactElement;
