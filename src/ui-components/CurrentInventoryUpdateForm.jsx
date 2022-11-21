/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { CurrentInventory } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function CurrentInventoryUpdateForm(props) {
  const {
    id,
    currentInventory,
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
    price: undefined,
    quantity: undefined,
    name: undefined,
    alternative: undefined,
    measurement: undefined,
    onHand: undefined,
    expiration: undefined,
  };
  const [price, setPrice] = React.useState(initialValues.price);
  const [quantity, setQuantity] = React.useState(initialValues.quantity);
  const [name, setName] = React.useState(initialValues.name);
  const [alternative, setAlternative] = React.useState(
    initialValues.alternative
  );
  const [measurement, setMeasurement] = React.useState(
    initialValues.measurement
  );
  const [onHand, setOnHand] = React.useState(initialValues.onHand);
  const [expiration, setExpiration] = React.useState(initialValues.expiration);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...currentInventoryRecord };
    setPrice(cleanValues.price);
    setQuantity(cleanValues.quantity);
    setName(cleanValues.name);
    setAlternative(cleanValues.alternative);
    setMeasurement(cleanValues.measurement);
    setOnHand(cleanValues.onHand);
    setExpiration(cleanValues.expiration);
    setErrors({});
  };
  const [currentInventoryRecord, setCurrentInventoryRecord] =
    React.useState(currentInventory);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id
        ? await DataStore.query(CurrentInventory, id)
        : currentInventory;
      setCurrentInventoryRecord(record);
    };
    queryData();
  }, [id, currentInventory]);
  React.useEffect(resetStateValues, [currentInventoryRecord]);
  const validations = {
    price: [],
    quantity: [],
    name: [],
    alternative: [],
    measurement: [],
    onHand: [],
    expiration: [],
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
          price,
          quantity,
          name,
          alternative,
          measurement,
          onHand,
          expiration,
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
          const original = await DataStore.query(CurrentInventory, id);
          await DataStore.save(
            CurrentInventory.copyOf(original, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "CurrentInventoryUpdateForm")}
    >
      <TextField
        label="Price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={price}
        onChange={(e) => {
          let value = Number(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              price: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              price: value,
              quantity,
              name,
              alternative,
              measurement,
              onHand,
              expiration,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
      ></TextField>
      <TextField
        label="Quantity"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={quantity}
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
              price,
              quantity: value,
              name,
              alternative,
              measurement,
              onHand,
              expiration,
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
        defaultValue={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              price,
              quantity,
              name: value,
              alternative,
              measurement,
              onHand,
              expiration,
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
        defaultValue={alternative}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              price,
              quantity,
              name,
              alternative: value,
              measurement,
              onHand,
              expiration,
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
        defaultValue={measurement}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              price,
              quantity,
              name,
              alternative,
              measurement: value,
              onHand,
              expiration,
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
      <TextField
        label="On hand"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={onHand}
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              onHand: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              price,
              quantity,
              name,
              alternative,
              measurement,
              onHand: value,
              expiration,
            };
            const result = onChange(modelFields);
            value = result?.onHand ?? value;
          }
          if (errors.onHand?.hasError) {
            runValidationTasks("onHand", value);
          }
          setOnHand(value);
        }}
        onBlur={() => runValidationTasks("onHand", onHand)}
        errorMessage={errors.onHand?.errorMessage}
        hasError={errors.onHand?.hasError}
        {...getOverrideProps(overrides, "onHand")}
      ></TextField>
      <TextField
        label="Expiration"
        isRequired={false}
        isReadOnly={false}
        defaultValue={expiration}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              price,
              quantity,
              name,
              alternative,
              measurement,
              onHand,
              expiration: value,
            };
            const result = onChange(modelFields);
            value = result?.expiration ?? value;
          }
          if (errors.expiration?.hasError) {
            runValidationTasks("expiration", value);
          }
          setExpiration(value);
        }}
        onBlur={() => runValidationTasks("expiration", expiration)}
        errorMessage={errors.expiration?.errorMessage}
        hasError={errors.expiration?.hasError}
        {...getOverrideProps(overrides, "expiration")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
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
