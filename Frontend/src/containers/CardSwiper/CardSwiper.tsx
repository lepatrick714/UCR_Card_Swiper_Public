import * as React from "react";
import { Header, Form } from "../../components";
import scottyBackground from "../../assets/scottyBackground.jpg";
import {
  insertStudentId,
  validateStudent,
  checkDuplicateStudent
} from "src/actions";

export interface ICardSwiperState {
  currentSid: string;
}

export class CardSwiper extends React.Component<{}, ICardSwiperState> {
  public constructor(props: any) {
    super(props);
    this.state = {
      currentSid: ""
    };
  }

  public render() {
    return (
      <div>
        <Header
          backgroundImage={scottyBackground}
          subtitles={["Card Swiper", "Checker"]}
        />
        <div className={"CardSwiper"}>
          <Form
            formLabel={"Student ID / Card Swipe"}
            placeholder={"Enter SID or Swipe Student Card"}
            currentSid={this.state.currentSid}
            onChange={this.SIDOnChange}
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }

  private SIDOnChange = (event: any): void => {
    this.setState({ currentSid: event.target.value });
  };

  private resetStates = (): void => {
    this.setState({
      currentSid: ""
    });
  };

  // Filters out the 9 digit student id number from currentSid state
  private filterCurrentSid = (): number => {
    const indexStart = this.state.currentSid.indexOf("86");
    return Number(this.state.currentSid.substring(indexStart, indexStart + 9));
  };

  private validateIsStudent = response => {
    if (response === "Error" || Object.keys(response).length < 1) {
      alert("server down!");
      return;
    }
    return response[
      `EXISTS(SELECT * FROM student WHERE StudentId=${this.state.currentSid})`
    ] === 1
      ? true
      : false;
  };

  private validateDuplications = response => {
    if (response === "Error" || Object.keys(response).length < 1) {
      alert("server down!");
      return;
    }
    return response[
      `EXISTS(SELECT * FROM studentId where id=${this.state.currentSid})`
    ] === 1
      ? true
      : false;
  };

  private onSubmit = async () => {
    const isStudent = await this.validateIsStudent(
      await validateStudent(this.filterCurrentSid())
    );
    const isDup = await this.validateDuplications(
      await checkDuplicateStudent(this.filterCurrentSid())
    );
    if (!isStudent) {
      alert("Error: Invalid Student. Please reswipe");
    } else if (isDup) {
      alert(
        "Error: Duplication detected. This student has already received a sweater!"
      );
    } else {
      alert("Confirmed!");
      await insertStudentId(this.filterCurrentSid());
    }
    this.resetStates();
  };
}
