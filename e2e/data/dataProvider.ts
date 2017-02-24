'use strict';

import { $$, ElementFinder } from 'protractor';

export class DataProvider {
  public static allPagesScreenShots: any = {
    'Google': {url: 'http://google.com'},
    'Facebook': {url: 'http://facebook.com'},
    'Valor': {url: 'http://valor-software.com'}
  };

  public static mapPageCountry: any = {
    'CountryBangladesh': {
      element: (): ElementFinder => $$('span[class*="country-name"]').get(0),
      actualResult: 'Bangladesh'
    },
    'CountryColombia': {
      element: (): ElementFinder => $$('span[class*="country-name"]').get(6),
      actualResult: 'Colombia'
    },
    'CountryIndonesia': {
      element: (): ElementFinder => $$('span[class*="country-name"]').get(11),
      actualResult: 'Indonesia'
    },
    'CountryLithuania': {
      element: (): ElementFinder => $$('span[class*="country-name"]').get(15),
      actualResult: 'Liberia'
    },
    'CountryRwanda': {
      element: (): ElementFinder => $$('span[class*="country-name"]').get(29),
      actualResult: 'Rwanda'
    }
  };

  public static countryPageId: any = {
    'Bangladesh': {countryId: '55ef338d0d2b3c82037884d0', numberOfCell: '1'},
    'Cambodia': {countryId: '55ef338d0d2b3c82037884d3', numberOfCell: '2'},
    'France': {countryId: '55ef338d0d2b3c8203788441', numberOfCell: '3'},
    'Indonesia': {countryId: '55ef338d0d2b3c82037884d9', numberOfCell: '4'},
    'Latvia': {countryId: '55ef338d0d2b3c8203788448', numberOfCell: '5'},
    'Mexico': {countryId: '55ef338d0d2b3c8203788479', numberOfCell: '6'},
    'Nigeria': {countryId: '55ef338d0d2b3c82037884b7', numberOfCell: '7'},
    'Philippines': {countryId: '55ef338d0d2b3c82037884ed', numberOfCell: '8'},
    'Rwanda': {countryId: '55ef338d0d2b3c82037884b9', numberOfCell: '9'},
    'Tunisia': {countryId: '55ef338d0d2b3c82037884c5', numberOfCell: '10'},
    'Bolivia': {countryId: '55ef338d0d2b3c8203788469', numberOfCell: '11'},
    'Burkina Faso': {countryId: '55ef338d0d2b3c8203788493', numberOfCell: '12'},
    'Burundi': {countryId: '55ef338d0d2b3c8203788494', numberOfCell: '13'},
    'China': {countryId: '55ef338d0d2b3c82037884d4', numberOfCell: '14'},
    'Colombia': {countryId: '55ef338d0d2b3c820378846c', numberOfCell: '15'},
    'Cote d\'Ivoire': {countryId: '55ef338d0d2b3c820378849a', numberOfCell: '16'},
    'Haiti': {countryId: '55ef338d0d2b3c8203788477', numberOfCell: '17'},
    'India': {countryId: '55ef338d0d2b3c82037884d8', numberOfCell: '18'},
    'Jordan': {countryId: '55ef338d0d2b3c82037884dd', numberOfCell: '19'},
    'Kenya': {countryId: '55ef338d0d2b3c82037884a9', numberOfCell: '20'}
  };
}
