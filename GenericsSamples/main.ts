
import  { ISort}  from './ISort';  
import { SelectionSort }  from './SelectionSort';

let arraySorter: ISort  = new SelectionSort();  
arraySorter.Sort<number>([]);

