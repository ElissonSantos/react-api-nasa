import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Row, Col } from "antd";

import Home from "./pages/home";
import EditPost from "./pages/edit-post";
import Mars from "./pages/mars";
import Asteroids from "./pages/asteroids";
import AsteroidsDetails from "./pages/asteroids-details";
import Projects from "./pages/projects";
import ProjectDetails from "./pages/projects-details";
import Header from "./components/header";
import NotFound from "./pages/not-found";
import Footer from "./components/footer";

const Routes = () => {
  return (
    <BrowserRouter>
      <Row>
        <Col span={24}>
          <Header />
        </Col>
      </Row>
      <Row justify="center">
        <Col span={17} style>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/editpost/:id" component={EditPost} />
            <Route exact path="/newpost" component={EditPost} />
            <Route exact path="/asteroides" component={Asteroids} />
            <Route exact path="/asteroides/:id" component={AsteroidsDetails} />
            <Route exact path="/marte" component={Mars} />
            <Route exact path="/projetos" component={Projects} />
            <Route exact path="/projetos/:id" component={ProjectDetails} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Footer />
        </Col>
      </Row>
    </BrowserRouter>
  );
};

export default Routes;
