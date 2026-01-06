export type Address = {
  line1: string;
  line2?: string;
  town: string;
  county: string;
};

export type FormState = {
  postcode: string | null;
  address: Address | null;
  details: {
    title: string | null;
    firstname: string | null;
    surname: string | null;
    dob: {
      day: number | null;
      month: number | null;
      year: number | null;
    };
  };
  contact: {
    phone: string | null;
    email: string | null;
  };
  signature: string | null;
};

export type Option = {
  label: string | number;
  value: string | number;
};

export type Agreement = {
  model: string;
  financier: string;
  date: number;
};
