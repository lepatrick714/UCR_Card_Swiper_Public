import * as React from "react";
import { Button } from "semantic-ui-react";

export interface IRGearButtonOwnProps {
  style?: any;
  name: string;
  isConfirm: boolean;
  onClick: () => void;
}

const ConfirmButtonColor = "green";
const RejectButtonColor = "red";


export const RGearButton = (props: IRGearButtonOwnProps) => {
  return (
    <Button
      color={(props.isConfirm) ? ConfirmButtonColor : RejectButtonColor}
      type="submit"
      style={{ "display": "inline-block" }}
      onClick={props.onClick}>
      {props.name}
    </Button>
  );
};
