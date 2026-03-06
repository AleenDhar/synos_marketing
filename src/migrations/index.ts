import * as migration_20260304_191610_init from './20260304_191610_init';

export const migrations = [
  {
    up: migration_20260304_191610_init.up,
    down: migration_20260304_191610_init.down,
    name: '20260304_191610_init'
  },
];
