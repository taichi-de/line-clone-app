import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import SendMessage from "../components/SendMessage"

describe(SendMessage, () => {

    it("should be able to submit the form", () => {
        render(<SendMessage />);
        const input = screen.getByPlaceholderText("text");
        const send = screen.getByTestId("SendIcon");

        userEvent.type(input, "test text test text test text.");
        userEvent.click(send);
    })
})