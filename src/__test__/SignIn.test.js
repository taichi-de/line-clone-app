import {render, screen} from "@testing-library/react"
import SignIn from "../components/SignIn"

describe(SignIn, () => {

    it("renders two buttons", async() => {
        render(<SignIn />);
        const buttonList = await screen.findAllByRole("button");
        expect(buttonList).toHaveLength(2);
    })
})