import { render, screen } from "@testing-library/react";
import Devices from "pages/Devices";

describe("DeviceList", () => {
  it("should render device card", async () => {
    beforeEach(() => {
      // console.log("RUNS BEFORE EACH TEST")
      jest.mock("../../__mocks__/devices");
    });

    render(<Devices />);
    const deviceDivElement = await screen.findByTestId("devices-item-0");
    expect(deviceDivElement).toBeInTheDocument();
  });
});
