export const getCountry = async (value: string): Promise<string[]> => {
  return await fetch("/data/countries/countries.json")
    .then((res) => res.json())
    .then((res) => {
      return res.countries
        .filter((country: any) =>
          country.en.toLowerCase().includes(value.toLowerCase())
        )
        .map((country: any) => country.en);
    });
};
