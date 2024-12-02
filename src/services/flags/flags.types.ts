export type Flag = {
  name: string;
  flagUrl: string;
  iso2: string;
  iso3: string;
};

export type FlagApiResponse = {
  data: {
    name: string;
    flag: string;
    iso2: string;
    iso3: string;
  }[];
};
