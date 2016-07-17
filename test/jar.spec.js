import React from "react";
import TestUtils from "react-addons-test-utils";
import Jar from "../components/jar"

describe("Jar", () => {
  it("renders successfully", () => {
    var jar = TestUtils.renderIntoDocument(
        <Jar />
        );

    var renderedJar = TestUtils.scryRenderedComponentsWithType(
        jar, Jar
        );

    expect(renderedJar.length).toBe(1);
  });
});
