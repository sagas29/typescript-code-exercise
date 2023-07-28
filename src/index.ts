/**
 * Author: Jesus Sagastume
 * Date: 07/27/2023
 * Description: Code Exercise with TypeScript
 */

import { persons } from './data';
import * as dayjs from 'dayjs';
import { sortArray } from './sort';

/**
 * Iterate through the array of objects and add date
 */
persons.map((person)=> {
  person.Date = dayjs().toDate();
})

/** 
  * Filter array by Status property
  * Sort by Name property
  * Display the sorted array
  * If no active records, show "No Active Records" message
 */
const activeRecords = persons.filter((person) => person.Status === 'Active');

if (activeRecords.length > 0) {
  const sortedArray = sortArray(activeRecords, 'Name');
  sortedArray.map((person) => {
    console.log(`Name: ${person.Name} - Date: ${dayjs(person.Date).format()} - Favorite Movie: ${person['Favorite Food']}`);
  })
} else {
  console.log('No Active Records');
}