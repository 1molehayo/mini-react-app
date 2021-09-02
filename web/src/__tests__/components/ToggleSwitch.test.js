import { cleanup, fireEvent, render } from "@testing-library/react";
import ToggleSwitch from "components/ToggleSwitch";

afterEach(cleanup);

describe("ToggleSwitch", () => {
  it("should render same values passed into title prop", () => {
    const { getByTestId } = render(<ToggleSwitch />);
    const checkbox = getByTestId("switch-id");
    expect(checkbox.checked).toEqual(false);

    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);

    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(false);
  });
});
