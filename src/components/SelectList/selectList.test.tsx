import { render, screen, fireEvent } from "@testing-library/react-native"

import { SelectList } from '@components/SelectList'
import { CityProps } from "@services/getCityByNameService"

describe("Component: SelectList", () =>{
  it('should be return city details selected', async() => {
    const data = [
      { id: '1', name: 'Campinas', latitude: 123, longitude: 456 },
      { id: '2', name: 'Campo grande', latitude: 123, longitude: 456 }
    ]

    const onPress = jest.fn();

    render(
      <SelectList 
        data={data}
        onChange={() =>{}}
        onPress={onPress}
      />
    )

    const selectedCity = screen.getByText(/campo/i)
    fireEvent.press(selectedCity)

    expect(onPress).toBeCalledTimes(1)
  })
})