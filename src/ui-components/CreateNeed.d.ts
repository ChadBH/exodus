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
export declare type CreateNeedInputValues = {
    description?: string;
};
export declare type CreateNeedValidationValues = {
    description?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateNeedOverridesProps = {
    CreateNeedGrid?: FormProps<GridProps>;
    description?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreateNeedProps = React.PropsWithChildren<{
    overrides?: CreateNeedOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CreateNeedInputValues) => CreateNeedInputValues;
    onSuccess?: (fields: CreateNeedInputValues) => void;
    onError?: (fields: CreateNeedInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: CreateNeedInputValues) => CreateNeedInputValues;
    onValidate?: CreateNeedValidationValues;
}>;
export default function CreateNeed(props: CreateNeedProps): React.ReactElement;
