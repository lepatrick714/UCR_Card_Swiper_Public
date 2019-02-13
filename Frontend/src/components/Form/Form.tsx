import * as React from "react";
import { Form as SemanticForm, Button } from "semantic-ui-react";

export interface IFormOwnProps {
  formLabel: string;
  placeholder: string;
  style?: any;
  currentSid: string;
  onChange: (event: any) => void;
  onSubmit: () => void;
}

export const Form = (props: IFormOwnProps) => {
  return (
    <SemanticForm {...props.style}>
      <SemanticForm.Field>
        <label>{props.formLabel}</label>
        <input
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.currentSid}
        />
      </SemanticForm.Field>
      <Button type="submit" onClick={props.onSubmit}>
        Submit
      </Button>
    </SemanticForm>
  );
};
