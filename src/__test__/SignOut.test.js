import {render, screen} from "@testing-library/react"
import SignOut from "../components/SignOut"

describe(SignOut, () => {

    it("renders only one button", async() => {
        render(<SignOut />);
        const buttonList = await screen.findAllByRole("button");
        expect(buttonList).toHaveLength(1);

    })
})