import React from "react";
import { render, act, fireEvent, getByText} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const {getByText} = render(<CheckoutForm/>);
    const formHeader = getByText("Checkout Form");
    expect(formHeader).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    const {getByTestId, getByLabelText, getByText} = render(<CheckoutForm/>);
    const Firstname = getByLabelText("First Name:");
    const Lastname = getByLabelText("Last Name:");
    const Address = getByLabelText("Address:");
    const City = getByLabelText("City:");
    const State = getByLabelText("State:");
    const Zip = getByLabelText("Zip:");
    const CheckoutButton = getByText("Checkout");

    act(()=>{
        fireEvent.change(Firstname, {target: {value: "Jacob"}});
        fireEvent.change(Lastname, {target: {value: "Ekegren"}});
        fireEvent.change(Address, {target: {value: "321 Round Ln"}});
        fireEvent.change(City, {target:{value: "Somewhere"}});
        fireEvent.change(State, {target:{value: "NV"}});
        fireEvent.change(Zip, {target:{value: "98765"}});

        fireEvent.click(CheckoutButton);
    });

    const successMessage = getByTestId("successMessage");

    expect(successMessage).toBeInTheDocument();
    expect(successMessage).toHaveTextContent(/Woo-hoo/g);

    console.log(Firstname.value, Lastname.value)
});