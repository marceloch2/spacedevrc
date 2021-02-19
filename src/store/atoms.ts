import {atom} from 'recoil';

export const launchStore = atom({
  key: 'launchs',
  default: [],
});

export const agenciesStore = atom({
  key: 'agencies',
  default: [],
});

export const loading = atom({
  key: 'loading',
  default: false,
});
