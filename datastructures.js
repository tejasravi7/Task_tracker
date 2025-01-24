/* Build in data strucures are 
 1. array
 2. objects
 3. sets 
 4. maps

 custom data structures
 1. stack
 2. queue
 3. circular queue
 4. linked list
 5. hash tables
 5. trees
 6. graphs

 */

 // sets
 const set = new Set([1,2,3]);
 for(const item of set){
     console.log(item);
 } 


 // stack LIFO
 /* QUEUE FIFO we do enque from rear and deque from front and peek to view the queue 
  and isEmpty() to checkweather queue is empty or not and 
  size() to check the number of elements queue
  */

  /* CIRCULAR QUEUE enque, deque, isFull() to check its full, isEmpty , peek(), size(),
  print(),