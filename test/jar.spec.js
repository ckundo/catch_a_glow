import React from "react/addons";
import Jar from "components/jar";
var TestUtils = React.addons.TestUtils;

describe("Jar", () => {
  it("renders successfully", () => {
    var jar = TestUtils.renderIntoDocument(
        <Jar />
        );

    var renderedRow = TestUtils.scryRenderedComponentsWithType(
        jar, Jar
        );

    expect(jar.length).toBe(1);
  });
});
