import * as migration_20260201_204122 from './20260201_204122';

export const migrations = [
  {
    up: migration_20260201_204122.up,
    down: migration_20260201_204122.down,
    name: '20260201_204122'
  },
];
