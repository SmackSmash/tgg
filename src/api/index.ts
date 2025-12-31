import type { Address } from '../types';

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
