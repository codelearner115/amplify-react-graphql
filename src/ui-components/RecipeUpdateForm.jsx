/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Recipe } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function RecipeUpdateForm(props) {
  const {
    id,
    recipe,
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
    recipeName: undefined,
    servings: undefined,
    lastCost: undefined,
    newCost: undefined,
  };
  const [recipeName, setRecipeName] = React.useState(initialValues.recipeName);
  const [servings, setServings] = React.useState(initialValues.servings);
  const [lastCost, setLastCost] = React.useState(initialValues.lastCost);
  const [newCost, setNewCost] = React.useState(initialValues.newCost);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...recipeRecord };
    setRecipeName(cleanValues.recipeName);
    setServings(cleanValues.servings);
    setLastCost(cleanValues.lastCost);
    setNewCost(cleanValues.newCost);
    setErrors({});
  };
  const [recipeRecord, setRecipeRecord] = React.useState(recipe);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Recipe, id) : recipe;
      setRecipeRecord(record);
    };
    queryData();
  }, [id, recipe]);
  React.useEffect(resetStateValues, [recipeRecord]);
  const validations = {
    recipeName: [],
    servings: [],
    lastCost: [],
    newCost: [],
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
          recipeName,
          servings,
          lastCost,
          newCost,
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
          const original = await DataStore.query(Recipe, id);
          await DataStore.save(
            Recipe.copyOf(original, (updated) => {
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
      {...getOverrideProps(overrides, "RecipeUpdateForm")}
    >
      <TextField
        label="Recipe name"
        isRequired={false}
        isReadOnly={false}
        defaultValue={recipeName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              recipeName: value,
              servings,
              lastCost,
              newCost,
            };
            const result = onChange(modelFields);
            value = result?.recipeName ?? value;
          }
          if (errors.recipeName?.hasError) {
            runValidationTasks("recipeName", value);
          }
          setRecipeName(value);
        }}
        onBlur={() => runValidationTasks("recipeName", recipeName)}
        errorMessage={errors.recipeName?.errorMessage}
        hasError={errors.recipeName?.hasError}
        {...getOverrideProps(overrides, "recipeName")}
      ></TextField>
      <TextField
        label="Servings"
        isRequired={false}
        isReadOnly={false}
        defaultValue={servings}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              recipeName,
              servings: value,
              lastCost,
              newCost,
            };
            const result = onChange(modelFields);
            value = result?.servings ?? value;
          }
          if (errors.servings?.hasError) {
            runValidationTasks("servings", value);
          }
          setServings(value);
        }}
        onBlur={() => runValidationTasks("servings", servings)}
        errorMessage={errors.servings?.errorMessage}
        hasError={errors.servings?.hasError}
        {...getOverrideProps(overrides, "servings")}
      ></TextField>
      <TextField
        label="Last cost"
        isRequired={false}
        isReadOnly={false}
        defaultValue={lastCost}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              recipeName,
              servings,
              lastCost: value,
              newCost,
            };
            const result = onChange(modelFields);
            value = result?.lastCost ?? value;
          }
          if (errors.lastCost?.hasError) {
            runValidationTasks("lastCost", value);
          }
          setLastCost(value);
        }}
        onBlur={() => runValidationTasks("lastCost", lastCost)}
        errorMessage={errors.lastCost?.errorMessage}
        hasError={errors.lastCost?.hasError}
        {...getOverrideProps(overrides, "lastCost")}
      ></TextField>
      <TextField
        label="New cost"
        isRequired={false}
        isReadOnly={false}
        defaultValue={newCost}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              recipeName,
              servings,
              lastCost,
              newCost: value,
            };
            const result = onChange(modelFields);
            value = result?.newCost ?? value;
          }
          if (errors.newCost?.hasError) {
            runValidationTasks("newCost", value);
          }
          setNewCost(value);
        }}
        onBlur={() => runValidationTasks("newCost", newCost)}
        errorMessage={errors.newCost?.errorMessage}
        hasError={errors.newCost?.hasError}
        {...getOverrideProps(overrides, "newCost")}
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
