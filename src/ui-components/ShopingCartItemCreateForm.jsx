/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { ShopingCartItem } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function ShopingCartItemCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    lastPrice: undefined,
    newPrice: undefined,
    quantity: undefined,
    name: undefined,
    alternative: undefined,
    measurement: undefined,
  };
  const [lastPrice, setLastPrice] = React.useState(initialValues.lastPrice);
  const [newPrice, setNewPrice] = React.useState(initialValues.newPrice);
  const [quantity, setQuantity] = React.useState(initialValues.quantity);
  const [name, setName] = React.useState(initialValues.name);
  const [alternative, setAlternative] = React.useState(
    initialValues.alternative
  );
  const [measurement, setMeasurement] = React.useState(
    initialValues.measurement
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setLastPrice(initialValues.lastPrice);
    setNewPrice(initialValues.newPrice);
    setQuantity(initialValues.quantity);
    setName(initialValues.name);
    setAlternative(initialValues.alternative);
    setMeasurement(initialValues.measurement);
    setErrors({});
  };
  const validations = {
    lastPrice: [],
    newPrice: [],
    quantity: [],
    name: [],
    alternative: [],
    measurement: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          lastPrice,
          newPrice,
          quantity,
          name,
          alternative,
          measurement,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(new ShopingCartItem(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "ShopingCartItemCreateForm")}
    >
      <TextField
        label="Last price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = Number(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              lastPrice: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              lastPrice: value,
              newPrice,
              quantity,
              name,
              alternative,
              measurement,
            };
            const result = onChange(modelFields);
            value = result?.lastPrice ?? value;
          }
          if (errors.lastPrice?.hasError) {
            runValidationTasks("lastPrice", value);
          }
          setLastPrice(value);
        }}
        onBlur={() => runValidationTasks("lastPrice", lastPrice)}
        errorMessage={errors.lastPrice?.errorMessage}
        hasError={errors.lastPrice?.hasError}
        {...getOverrideProps(overrides, "lastPrice")}
      ></TextField>
      <TextField
        label="New price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = Number(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              newPrice: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              lastPrice,
              newPrice: value,
              quantity,
              name,
              alternative,
              measurement,
            };
            const result = onChange(modelFields);
            value = result?.newPrice ?? value;
          }
          if (errors.newPrice?.hasError) {
            runValidationTasks("newPrice", value);
          }
          setNewPrice(value);
        }}
        onBlur={() => runValidationTasks("newPrice", newPrice)}
        errorMessage={errors.newPrice?.errorMessage}
        hasError={errors.newPrice?.hasError}
        {...getOverrideProps(overrides, "newPrice")}
      ></TextField>
      <TextField
        label="Quantity"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              quantity: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              lastPrice,
              newPrice,
              quantity: value,
              name,
              alternative,
              measurement,
            };
            const result = onChange(modelFields);
            value = result?.quantity ?? value;
          }
          if (errors.quantity?.hasError) {
            runValidationTasks("quantity", value);
          }
          setQuantity(value);
        }}
        onBlur={() => runValidationTasks("quantity", quantity)}
        errorMessage={errors.quantity?.errorMessage}
        hasError={errors.quantity?.hasError}
        {...getOverrideProps(overrides, "quantity")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              lastPrice,
              newPrice,
              quantity,
              name: value,
              alternative,
              measurement,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Alternative"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              alternative: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              lastPrice,
              newPrice,
              quantity,
              name,
              alternative: value,
              measurement,
            };
            const result = onChange(modelFields);
            value = result?.alternative ?? value;
          }
          if (errors.alternative?.hasError) {
            runValidationTasks("alternative", value);
          }
          setAlternative(value);
        }}
        onBlur={() => runValidationTasks("alternative", alternative)}
        errorMessage={errors.alternative?.errorMessage}
        hasError={errors.alternative?.hasError}
        {...getOverrideProps(overrides, "alternative")}
      ></TextField>
      <TextField
        label="Measurement"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              lastPrice,
              newPrice,
              quantity,
              name,
              alternative,
              measurement: value,
            };
            const result = onChange(modelFields);
            value = result?.measurement ?? value;
          }
          if (errors.measurement?.hasError) {
            runValidationTasks("measurement", value);
          }
          setMeasurement(value);
        }}
        onBlur={() => runValidationTasks("measurement", measurement)}
        errorMessage={errors.measurement?.errorMessage}
        hasError={errors.measurement?.hasError}
        {...getOverrideProps(overrides, "measurement")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex {...getOverrideProps(overrides, "RightAlignCTASubFlex")}>
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
