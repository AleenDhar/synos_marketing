import * as migration_20260304_191610_init from './20260304_191610_init';
import * as migration_20260317_064940_waitlist_collection from './20260317_064940_waitlist_collection';

export const migrations = [
  {
    up: migration_20260304_191610_init.up,
    down: migration_20260304_191610_init.down,
    name: '20260304_191610_init',
  },
  {
    up: migration_20260317_064940_waitlist_collection.up,
    down: migration_20260317_064940_waitlist_collection.down,
    name: '20260317_064940_waitlist_collection'
  },
];
