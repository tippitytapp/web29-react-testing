import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AnimalForm from './AnimalForm';

test(`current animal test species header is appearing`, () => {
    const {getByText} = render(<AnimalForm />);
    const headerText = getByText(/current ANIMALS test SPECIES/i);
    expect (headerText).toBeVisible();
})

test('inputs are visible', () => {
    // ARRANGE - set up the testing environment
    const {getByLabelText} = render(<AnimalForm />)
    //ACT
    //NONE. Tapped Out.

    //ASSERT
    const speciesInput = getByLabelText(/species/i);
    const ageInput = getByLabelText(/age/i)
    const notesInput = getByLabelText(/notes/i)
    expect (speciesInput).toBeVisible();
    expect (ageInput).toBeVisible();
    expect (notesInput).toBeVisible();
});

test ('form submit adds new animals to list', () => {
    const {getByLabelText, getByText, getByTestId} = render(<AnimalForm />);
    const speciesInput = getByLabelText(/species/i);
    const ageInput = getByLabelText(/age/i)
    const notesInput = getByLabelText(/notes/i)

    //ACT// use change event to add text
    fireEvent.change(speciesInput, { target: {value: "hippo"}});
    fireEvent.change(ageInput, { target: {value: "32"}});
    fireEvent.change(notesInput, { target: {value: "takes really large dumps"}});

    //ASSERT
    expect(speciesInput.value).toBe('hippo')
    expect(ageInput.value).toBe('32')
    expect(notesInput.value).toBe('takes really large dumps')

    //ACT
    fireEvent.click(getByText(/submit/i))

    //ASSERT
    const animalText = getByTestId('hippo');
    expect (animalText).toBeInTheDocument();

});