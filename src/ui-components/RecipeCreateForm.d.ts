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
export declare type RecipeCreateFormInputValues = {
    recipeName?: string;
    servings?: string;
    lastCost?: string;
    newCost?: string;
};
export declare type RecipeCreateFormValidationValues = {
    recipeName?: ValidationFunction<string>;
    servings?: ValidationFunction<string>;
    lastCost?: ValidationFunction<string>;
    newCost?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RecipeCreateFormOverridesProps = {
    RecipeCreateFormGrid?: FormProps<GridProps>;
    recipeName?: FormProps<TextFieldProps>;
    servings?: FormProps<TextFieldProps>;
    lastCost?: FormProps<TextFieldProps>;
    newCost?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RecipeCreateFormProps = React.PropsWithChildren<{
    overrides?: RecipeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RecipeCreateFormInputValues) => RecipeCreateFormInputValues;
    onSuccess?: (fields: RecipeCreateFormInputValues) => void;
    onError?: (fields: RecipeCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: RecipeCreateFormInputValues) => RecipeCreateFormInputValues;
    onValidate?: RecipeCreateFormValidationValues;
} & React.CSSProperties>;
export default function RecipeCreateForm(props: RecipeCreateFormProps): React.ReactElement;
