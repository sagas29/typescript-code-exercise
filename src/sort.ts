import { Person } from './person';

export function sortArray(persons: Person[], sortBy: keyof Person): Person[] {
  return persons.sort((a, b) => {
    const propertyA = a[sortBy];
    const propertyB = b[sortBy];
    if (typeof propertyA === 'string' && typeof propertyB === 'string') {
      if (propertyA < propertyB) return -1
      if (propertyA > propertyB) return 1;
      return 0;
    }
    return 0;
  });
}
