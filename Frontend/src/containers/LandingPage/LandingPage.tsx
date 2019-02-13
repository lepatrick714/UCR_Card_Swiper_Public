import * as React from "react";
import Clock from "react-live-clock";
import { Header } from "../../components";
import scottyBackground from "../../assets/scottyBackground.jpg";
import { getNumberOfSweaters } from "src/actions";

export interface ILandingPageOwnState {
  numberOfSweaters: number;
}

export class LandingPage extends React.Component<{}, ILandingPageOwnState> {
  public constructor(props: any) {
    super(props);
    this.state = {
      numberOfSweaters: 0
    };
  }

  public parseNumberOfSweaterResponse = (response) => {
    return 4000 - response['COUNT(*)'];
  };

  public async componentDidMount() {
    const currentNumberOfSweaters = this.parseNumberOfSweaterResponse(
      await getNumberOfSweaters()
    );
    this.setState({numberOfSweaters: currentNumberOfSweaters});
  }

  public render() {
    return (
      <div>
        <Header
          backgroundImage={scottyBackground}
          subtitles={["RGear", "Counter"]}
        />
        <div
          style={{
            height: "100%",
            display: "grid",
            "alignItems": "center",
            "justifyContent": "center",
            "fontSize": "80px"
          }}
        >
          <Clock format={"HH:mm:ss"} ticking={true} timezone={"US/Pacific"} />

          <div style={{ marginTop: "32px" }}>
            <h1>Sweaters Leftover: {this.state.numberOfSweaters}</h1>
          </div>
        </div>
      </div>
    );
  }
}
