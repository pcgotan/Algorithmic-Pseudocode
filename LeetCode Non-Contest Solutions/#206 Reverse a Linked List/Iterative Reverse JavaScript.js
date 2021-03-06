/* Reverses the linked list iteratively */
var reverseList = function(head)
{
    // Pointers to keep track of 3 consecutive nodes
    var previous = null;
    var current = head;
    var temp;
    
    // Traverse the list and keep reversing the elements as you encounter them
    while(current)
    {
        // Store the location of the next element
        temp = current.next;
        
        // Link the current element to the previous one
        current.next = previous;
        
        // Update the previous to current
        previous = current;
        
        // Update current to the original next element
        current = temp;
    }
    
    // Remember to return previous as current would be null
    return previous;
};
