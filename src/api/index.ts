import type { Address, Agreement, FormState } from '../types';

export function getAddress(postcode: string): Promise<Address> {
  console.log(`Fetching address data for ${postcode}`);

  return new Promise(res => {
    setTimeout(
      () => {
        res({
          line1: '1, Newgate',
          line2: 'Lindow Common',
          town: 'Wilmslow',
          county: 'Cheshire'
        });
      },
      Math.ceil(Math.random() * 1000) + 500
    );
  });
}

export function submitClaim(form: FormState) {
  console.log(`Submitting claim...`);

  return new Promise(res => {
    setTimeout(
      () => {
        res(form);
      },
      Math.ceil(Math.random() * 1000) + 500
    );
  });
}

export function getAgreements(reg: string): Promise<Agreement[]> {
  console.log(`Fetching agreements for ${reg}`);

  return new Promise(res => {
    setTimeout(
      () => {
        res([
          { model: 'Ford Focus Zetec', financier: 'Black Horse Finance', date: 2011 },
          { model: 'Audi Quattro', financier: 'Santander Finance', date: 2020 }
        ]);
      },
      Math.ceil(Math.random() * 1000) + 500
    );
  });
}
