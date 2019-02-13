import * as React from "react";
import { Divider } from "semantic-ui-react";
import {StudentDetailsTitleStyled, StudentDetailsContentStyled} from "./styles";

export interface IStudentDetailsOwnProps {
  studentName: string;
  studentYear: string;
}

const CurrentStudentTitle = "Current Student";
const NameTitle = "Student Name: ";
const YearTitle = "Student Year: ";

export const StudentDetails = (props: IStudentDetailsOwnProps) => {
  return (
    <div>
      <h2>{CurrentStudentTitle}</h2>
      <Divider />
      <div>
        <StudentDetailsTitleStyled>{NameTitle}</StudentDetailsTitleStyled>
        <StudentDetailsContentStyled>{props.studentName}</StudentDetailsContentStyled>
      </div>
      <div>
        <StudentDetailsTitleStyled>{YearTitle}</StudentDetailsTitleStyled>
        <StudentDetailsContentStyled>{props.studentYear}</StudentDetailsContentStyled>
      </div>
    </div>
  );
};
