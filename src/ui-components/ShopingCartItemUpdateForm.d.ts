/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ShopingCartItem } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ShopingCartItemUpdateFormInputValues = {
    lastPrice?: number;
    newPrice?: number;
    quantity?: number;
    name?: string;
    alternative?: number;
    measurement?: string;
};
export declare type ShopingCartItemUpdateFormValidationValues = {
    lastPrice?: ValidationFunction<number>;
    newPrice?: ValidationFunction<number>;
    quantity?: ValidationFunction<number>;
    name?: ValidationFunction<string>;
    alternative?: ValidationFunction<number>;
    measurement?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ShopingCartItemUpdateFormOverridesProps = {
    ShopingCartItemUpdateFormGrid?: FormProps<GridProps>;
    lastPrice?: FormProps<TextFieldProps>;
    newPrice?: FormProps<TextFieldProps>;
    quantity?: FormProps<TextFieldProps>;
    name?: FormProps<TextFieldProps>;
    alternative?: FormProps<TextFieldProps>;
    measurement?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ShopingCartItemUpdateFormProps = React.PropsWithChildren<{
    overrides?: ShopingCartItemUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    shopingCartItem?: ShopingCartItem;
    onSubmit?: (fields: ShopingCartItemUpdateFormInputValues) => ShopingCartItemUpdateFormInputValues;
    onSuccess?: (fields: ShopingCartItemUpdateFormInputValues) => void;
    onError?: (fields: ShopingCartItemUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ShopingCartItemUpdateFormInputValues) => ShopingCartItemUpdateFormInputValues;
    onValidate?: ShopingCartItemUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ShopingCartItemUpdateForm(props: ShopingCartItemUpdateFormProps): React.ReactElement;
