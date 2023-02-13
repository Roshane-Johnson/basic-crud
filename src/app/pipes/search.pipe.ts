import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], itemField: string, searchString: string): any[] {
    // Check if there's a list of data to search in
    if (!items) return [];

    // Check if the search string has a value
    if (!searchString) return items;

    // Make the search string all lowercase to make the search case-insensitive
    searchString = searchString.toLowerCase();

    // Return a new list with only the items that match the search string
    return [
      ...items.filter((item: any) => {
        // Check if each item has a field with the name "itemField",
        // and if the value of that field contains the search string keep it in the list
        return item[itemField].toLowerCase().includes(searchString.trim());
      }),
    ];
  }
}
