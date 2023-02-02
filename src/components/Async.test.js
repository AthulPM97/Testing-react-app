import { render, screen } from "@testing-library/react"
import Async from "./Async"

describe('Async component', () => {
    test('renders posts if fetch request succeeds', async () => {
        //Arrange
        render(<Async/>);

        //Act

        //Assert
        const listItemElements = await screen.findAllByRole('listitem');
        //expect listItemElements array to NOT have length 0;
        expect(listItemElements).not.toHaveLength(0);

    })
})