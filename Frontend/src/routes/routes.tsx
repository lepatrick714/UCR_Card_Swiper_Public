import * as React from "react";
import { CardSwiper, LandingPage } from "src/containers";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export class Routes extends React.Component<{}, {}> {
  public render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={"/"} exact={true} component={LandingPage} />
          <Route path={"/swiper2019"} exact={true} component={CardSwiper} />
        </Switch>
      </BrowserRouter>
    )
  }
}
