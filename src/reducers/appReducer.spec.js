import * as ActionTypes from '../constants/actionTypes';
import reducer from './appReducer';
import {getFormattedDateTime} from '../utils/dateHelper';

describe('Reducers::FuelSavings', () => {
  const getInitialState = () => {
    return {
      newMpg: '',
      tradeMpg: '',
      newPpg: '',
      tradePpg: '',
      milesDriven: '',
      milesDrivenTimeframe: 'week',
      displayResults: false,
      dateModified: null,
      necessaryDataIsProvidedToCalculateSavings: false,
      savings: {
        monthly: 0,
        annual: 0,
        threeYear: 0
      }
    };
  };

  const getAppState = () => {
    return {
      newMpg: 20,
      tradeMpg: 10,
      newPpg: 1.50,
      tradePpg: 1.50,
      milesDriven: 100,
      milesDrivenTimeframe: 'week',
      displayResults: false,
      dateModified: null,
      necessaryDataIsProvidedToCalculateSavings: false,
      savings: {
        monthly: 0,
        annual: 0,
        threeYear: 0
      }
    };
  };
  const dateModified = getFormattedDateTime();

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle LIST_SONGS', () => {
    const action = { type: ActionTypes.LOOKUP_SONGS, dateModified, settings: getAppState() };
    const expected = Object.assign(getAppState(), { dateModified });

    expect(reducer(getAppState(), action)).toEqual(expected);
  });

  it('should handle SEARCH_SONGS', () => {
    const action = { type: ActionTypes.SEARCH_SONGS, dateModified, settings: getAppState(), fieldName: 'newMpg', value: 30 };

    const expectedMpg = 30;
    const expectedSavings = { monthly: '$43.33', annual: '$519.96', threeYear: '$1,559.88' };

    expect(reducer(getAppState(), action).newMpg).toEqual(expectedMpg);
    expect(reducer(getAppState(), action).savings).toEqual(expectedSavings);
  });
});
