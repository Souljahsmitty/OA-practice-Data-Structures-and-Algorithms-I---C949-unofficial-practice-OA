document.addEventListener("DOMContentLoaded", function () {
    const resultsContainer = document.getElementById("resultsContainer");
    const scoreContainer = document.getElementById("score");
    let totalQuestions = 70;
    let correctAnswers = 0;

    // Check if localStorage is empty
    if (!localStorage.length) {
        resultsContainer.innerHTML = "<p>No quiz data found. Please complete the quiz first.</p>";
        return;
    }

    // Questions and correct answers
    const quizData = {
        "1": { 
        question: "1. Which data structure allows inserting and deleting elements at both the front and the rear?", 
        correct: "C", 
        explanation: "A deque (double-ended queue) allows insertion and deletion at both ends." 
    },
		"2": { 
        question: "2. What is the time complexity of searching for an element in a balanced binary search tree (BST)?", 
        correct: "B", 
        explanation: "In a balanced BST, each comparison allows the operations to skip about half of the tree, leading to logarithmic time complexity." 
    },
    "3": { 
        question: "3. In a hash table, what is the purpose of a hash function?", 
        correct: "B", 
        explanation: "A hash function computes an index into an array of buckets or slots, from which the desired value can be found." 
    },
    "4": { 
        question: "4. Which sorting algorithm has the best average-case time complexity?", 
        correct: "C", 
        explanation: "Merge Sort has an average-case time complexity of O(n log n), which is more efficient than the quadratic time complexities of Bubble Sort, Insertion Sort, and Selection Sort." 
    },
    "5": { 
        question: "5. What is the primary characteristic of a stack data structure?", 
        correct: "B", 
        explanation: "A stack is a collection of elements that follows the LIFO principle, where the last element added is the first one to be removed." 
    },
    "6": { 
        question: "6. In Big O notation, what does O(n^2) represent?", 
        correct: "C", 
        explanation: "The correct answer is C: O(n^2) denotes an algorithm whose performance is directly proportional to the square of the size of the input data set." 
    },
    "7": { 
        question: "7. Which data structure is most efficient for implementing a priority queue?", 
        correct: "C", 
        explanation: "A heap is a specialized tree-based data structure that satisfies the heap property, making it efficient for implementing priority queues." 
    },
    "8": { 
        question: "8. What is the result of adding an element to the end of an array that is already full?", 
        correct: "C", 
        explanation: "In static arrays with fixed size, attempting to add an element beyond its capacity results in an overflow error." 
    },
    "9": { 
        question: "9. In a linked list, what does each node typically contain?", 
        correct: "B", 
        explanation: "In a singly linked list, each node contains data and a reference (or pointer) to the next node in the sequence." 
    },
    "10": { 
        question: "10. Which tree traversal method visits the root node first, then the left subtree, and finally the right subtree?", 
        correct: "B", 
        explanation: "Pre-order traversal processes the root node before its child nodes, following the order: root, left subtree, right subtree." 
    },
	 "11": { 
        question: "11. What is the main advantage of using a linked list over an array?", 
        correct: "B", 
        explanation: "Linked lists do not have a fixed size, meaning they can dynamically grow or shrink as elements are added or removed." 
    },
    "12": { 
        question: "12. In garbage collection, what is the process of identifying and reclaiming memory that is no longer in use?", 
        correct: "D", 
        explanation: "Memory sweeping is part of garbage collection that reclaims memory no longer in use by identifying objects no longer accessible." 
    },
    "13": { 
        question: "13. Which data structure uses the First-In-First-Out (FIFO) principle?", 
        correct: "B", 
        explanation: "A queue follows the FIFO principle, meaning elements are inserted at one end (rear) and removed from the other end (front)." 
    },
    "14": { 
        question: "14. What is the time complexity of inserting an element at the beginning of a singly linked list?", 
        correct: "A", 
        explanation: "Since a singly linked list has a reference to the head node, inserting a new node at the beginning only requires changing one pointer." 
    },
    "15": { 
        question: "15. In a binary search algorithm, what must be true about the array being searched?", 
        correct: "B", 
        explanation: "Binary search divides the array into halves, so it only works efficiently when the array is sorted." 
    },
    "16": { 
        question: "16. What is the purpose of a sentinel node in a linked list?", 
        correct: "A", 
        explanation: "A sentinel node is used to avoid special cases when inserting or deleting nodes at the head or tail." 
    },
    "17": { 
        question: "17. Which sorting algorithm is the most efficient for a nearly sorted", 
        correct: "B", 
        explanation: "Insertion Sort is highly efficient for nearly sorted arrays with a best-case time complexity of O(n)." 
    },
    "18": { 
        question: "18. Which data structure is most efficient for implementing an undo feature in an application?", 
        correct: "A", 
        explanation: "A stack follows the Last-In-First-Out (LIFO) principle, making it ideal for tracking the most recent operations for undo functionality." 
    },
    "19": { 
        question: "19. What is the worst-case time complexity of QuickSort?", 
        correct: "B", 
        explanation: "The worst-case occurs when the pivot always selects the smallest or largest element, leading to an unbalanced partition." 
    },
    "20": { 
        question: "20. What is the advantage of using a hash table over a binary search tree (BST)?", 
        correct: "A", 
        explanation: "Hash tables typically provide O(1) lookup time, while BSTs provide O(log n) lookup time. Faster lookups on average." 
    },
	"21": { 
        question: "21. What is the primary disadvantage of using an array over a linked list?", 
        correct: "A", 
        explanation: "The primary disadvantage of an array over a linked list is that it has a fixed size." 
    },
    "22": { 
        question: "22. How does a circular queue differ from a standard queue?", 
        correct: "B", 
        explanation: "A circular queue efficiently reuses empty spaces left by removed elements, unlike a standard queue." 
    },
    "23": { 
        question: "23. What is the key characteristic of a doubly linked list that distinguishes it from a singly linked list?", 
        correct: "B", 
        explanation: "Doubly linked lists store references to both the next and previous nodes, allowing for bidirectional traversal." 
    },
    "24": { 
        question: "24. What is the main advantage of garbage collection in memory management?", 
        correct: "A", 
        explanation: "Garbage collection automatically frees up memory occupied by objects that are no longer in use, reducing manual memory management errors." 
    },
    "25": { 
        question: "25. In tree traversal, which algorithm visits all nodes at the current level before moving to the next level?", 
        correct: "A", 
        explanation: "BFS explores all nodes at the present depth level before traversing nodes at the next level, making it useful for shortest path problems." 
    },
    "26": { 
        question: "26. What is the primary difference between a singly linked list and a doubly linked list?", 
        correct: "C", 
        explanation: "A singly linked list stores a reference to the next node only, whereas a doubly linked list stores references to both the next and previous nodes, allowing for traversal in both directions." 
    },
    "27": { 
        question: "27. Which of the following operations is performed in O(1) time in a stack?", 
        correct: "B", 
        explanation: "Push and pop operations in a stack occur in O(1) time, as they only involve adding or removing the topmost element." 
    },
    "28": { 
        question: "28. Which searching algorithm works best for sorted arrays?", 
        correct: "A", 
        explanation: "Binary search is optimal for sorted arrays, reducing search time complexity to O(log n)." 
    },
    "29": { 
        question: "29. Which sorting algorithm repeatedly selects the smallest element and swaps it with the current index?", 
        correct: "B", 
        explanation: "Selection Sort finds the smallest element in each iteration and swaps it with the current position." 
    },
    "30": { 
        question: "30. What is the space complexity of an in-place sorting algorithm?", 
        correct: "D", 
        explanation: "In-place sorting algorithms sort the array without using additional memory, resulting in O(1) space complexity." 
    },
    "31": { 
        question: "31. Which data structure is used for implementing recursion?", 
        correct: "B", 
        explanation: "Recursion uses the call stack to store function calls, making stacks the ideal data structure." 
    },
    "32": { 
        question: "32. What is the advantage of using a heap over an array in a priority queue?", 
        correct: "A", 
        explanation: "Heaps provide efficient O(log n) insertions and deletions, making them ideal for priority queues." 
    },
    "33": { 
        question: "33. What is the time complexity of inserting an element in an unsorted linked list?", 
        correct: "B", 
        explanation: "Insertion in an unsorted linked list takes O(1) time, as the new node can be added at the head." 
    },
    "34": { 
        question: "34. Which data structure efficiently supports LRU (Least Recently Used) cache?", 
        correct: "B", 
        explanation: "An LRU cache efficiently maintains recently used elements using a hash table for fast lookups and a doubly linked list for tracking order." 
    },
    "35": { 
        question: "35. Which tree traversal method is used in depth-first search?", 
        correct: "B", 
        explanation: "Depth-first search (DFS) uses in-order, pre-order, or post-order traversal methods." 
    },
    "36": { 
        question: "36. Which of the following data structures is most suitable for implementing a dictionary?", 
        correct: "B", 
        explanation: "A hash table stores key-value pairs and allows O(1) average-time lookups." 
    },
    "37": { 
        question: "37. What happens when two different keys map to the same index in a hash table?", 
        correct: "B", 
        explanation: "Collisions in hash tables occur when multiple keys hash to the same index, requiring resolution techniques such as chaining or open addressing." 
    },
    "38": { 
        question: "38. Which of the following data structures is best for fast lookup operations?", 
        correct: "A", 
        explanation: "Hash tables provide average-case O(1) lookup time, making them efficient for searching." 
    },
    "39": { 
        question: "39. Which data structure is commonly used for implementing graphs?", 
        correct: "A", 
        explanation: "Graphs are represented using adjacency lists (space-efficient) or adjacency matrices (faster lookups)." 
    },
    "40": { 
        question: "40. Which algorithm is used to find the shortest path in a weighted graph?", 
        correct: "A", 
        explanation: "Dijkstra’s algorithm efficiently finds the shortest path in graphs with positive edge weights." 
    },
	"41": { 
        question: "41. Which of the following is NOT an abstract data type (ADT)?", 
        correct: "B", 
        explanation: "Arrays are a concrete data structure, while ADTs describe behavior rather than implementation." 
    },
    "42": { 
        question: "42. Which data structure is used for implementing function calls?", 
        correct: "A", 
        explanation: "Function calls use a stack (call stack) to store return addresses and local variables." 
    },
    "43": { 
        question: "43. What is the time complexity of deleting a node from a doubly linked list?", 
        correct: "A", 
        explanation: "If a pointer to the node is available, deletion in a doubly linked list is O(1).." 
    },
    "44": { 
        question: "44. Which of the following sorting algorithms is NOT based on comparisons?", 
        correct: "C", 
        explanation: "Radix Sort sorts numbers digit by digit and does not rely on comparisons." 
    },
    "45": { 
        question: "45. Which data structure is best for a breadth-first search traversal?", 
        correct: "B", 
        explanation: "BFS uses a queue to explore nodes level by level." 
    },
    "46": { 
        question: "46. What is the time complexity of accessing an element in an array using an index?", 
        correct: "B", 
        explanation: "Array indexing provides direct access to elements in O(1) time." 
    },
    "47": { 
        question: "47. In a max heap, what is the largest element?", 
        correct: "B", 
        explanation: "In a max heap, the root node contains the largest element." 
    },
    "48": { 
        question: "48. Which of the following statements is true for a queue?", 
        correct: "B", 
        explanation: "Queues follow FIFO, where elements are inserted at the rear and removed from the front." 
    },
    "49": { 
        question: "49. What is the purpose of dynamic memory allocation?", 
        correct: "A", 
        explanation: "Dynamic memory allocation allows programs to request memory during execution rather than at compile time." 
    },
    "50": { 
        question: "50. Which data structure is best for representing a hierarchical structure?", 
        correct: "A", 
        explanation: "Trees naturally represent hierarchical relationships, such as file systems or XML data." 
    },
	"51": { 
        question: "51. What is the time complexity of inserting an element at the beginning of an array?", 
        correct: "A", 
        explanation: "To insert at the beginning of an array, all elements must be shifted one position, resulting in O(n) time complexity." 
    },
    "52": { 
        question: "52. Which data structure is most efficient for implementing an Undo/Redo feature in an application?", 
        correct: "B", 
        explanation: "Stacks follow Last-In-First-Out (LIFO), making them ideal for tracking actions that need to be undone/redone." 
    },
    "53": { 
        question: "53. What is the main advantage of using a binary search over linear search?", 
        correct: "A", 
        explanation: "Binary search has a time complexity of O(log n), whereas linear search takes O(n). However, binary search requires the data to be sorted." 
    },
    "54": { 
        question: "54. Which of the following is a self-balancing binary search tree?", 
        correct: "B", 
        explanation: "AVL trees automatically balance themselves after insertions or deletions, maintaining O(log n) operations." 
    },
    "55": { 
        question: "55. What is the purpose of a sentinel node in a linked list?", 
        correct: "C", 
        explanation: "Sentinel nodes help simplify insertions and deletions at the head or tail, reducing edge cases in code." 
    },
    "56": { 
        question: "56. Which sorting algorithm has the worst-case time complexity of O(n²)?", 
        correct: "B", 
        explanation: "Bubble Sort repeatedly swaps adjacent elements, making it inefficient with O(n²) worst-case complexity." 
    },
    "57": { 
        question: "57. What is the key characteristic of a stable sorting algorithm?", 
        correct: "B", 
        explanation: "Stable sorting algorithms keep elements with equal values in their original relative order." 
    },
    "58": { 
        question: "58. What is the primary advantage of a doubly linked list over a singly linked list?", 
        correct: "B", 
        explanation: "Doubly linked lists maintain pointers to both the next and previous nodes, enabling bidirectional traversal.Reset Back Next" 
    },
    "59": { 
        question: "59. Which data structure is best suited for implementing a cache?", 
        correct: "A", 
        explanation: "Hash tables provide O(1) average-case lookup time, making them efficient for caching." 
    },
    "60": { 
        question: "60. Which type of tree is commonly used in database indexing?", 
        correct: "B", 
        explanation: "B-Trees are balanced multi-way search trees, optimized for disk-based storage in databases." 
    },
		"61": { 
        question: "61. What is the midpoint given the quicksort on this list? Consider the lowindex = 5 and highindex = 9. (43,3,72,18,2,28,51,111,66,71)?", 
        correct: "D", 
        explanation: "The midpoint in quicksort is calculated as (lowindex + highindex) / 2, which results in index 7." 
    },
    "62": { 
        question: "62. What is the pivot point given the quicksort on this list? Consider the lowindex = 5 and highindex = 9. (43,3,72,18,2,28,51,111,66,71)?", 
        correct: "A", 
        explanation: "The pivot is usually the last element or a median value in the partitioned list. Here, 111 is the pivot." 
    },
    "63": { 
        question: "63. Which tool in Python is used to implement a deque ADT?", 
        correct: "C", 
        explanation: "The 'collections' module in Python provides the 'deque' class, which efficiently implements a double-ended queue." 
    },
    "64": { 
        question: "64. Which function in Python is used to delete one item on the right side of the deque?", 
        correct: "B", 
        explanation: "The 'pop()' function removes and returns an item from the right end of a deque." 
    },
    "65": { 
        question: "65. Which function determines that a linked list contains no data?", 
        correct: "A", 
        explanation: "'IsEmpty()' checks whether a linked list contains any elements or is empty." 
    },
    "66": { 
        question: "66. What are classes composed of that perform the actions of an application?", 
        correct: "C", 
        explanation: "Methods define the behavior of a class and perform actions within an application." 
    },
    "67": { 
        question: "67. Which loop type will always be done at least once?", 
        correct: "B", 
        explanation: "A 'do-while' loop guarantees execution at least once before checking the condition." 
    },
    "68": { 
        question: "68. How would a strongly typed language create an integer variable?", 
        correct: "B", 
        explanation: "Strongly typed languages require explicit type declarations, e.g., 'int myVar'." 
    },
    "69": { 
        question: "69. Which component of a case statement would be considered a fallback in case no other parameters are met?", 
        correct: "B", 
        explanation: "The 'default' statement acts as a fallback when no other case matches." 
    },
    "70": { 
        question: "70. Which operator is a type of assignment operator?", 
        correct: "B", 
        explanation: "The '+= ' operator assigns a new value by adding to the existing one." 
    }
    };

    
    

    // Loop through all questions and check answers
    for (let i = 1; i <= totalQuestions; i++) {
        let userAnswer = localStorage.getItem(`question${i}_answer`);
        let questionData = quizData[i.toString()];
        
        if (!questionData) {
            console.error(`Missing question data for question ${i}`);
            continue;
        }

        let correctAnswer = questionData.correct;
        let questionText = questionData.question;
        let explanationText = questionData.explanation;

        let resultText = `<strong>${questionText}</strong><br>`;
        if (userAnswer === correctAnswer) {
            correctAnswers++;
            resultText += `✔ <span style="color:green;">Correct</span>`;
        } else {
            resultText += `✘ <span style="color:red;">Incorrect</span> (Your Answer: ${userAnswer || "No Answer"}, Correct: ${correctAnswer})<br>
            <strong>Explanation:</strong> ${explanationText}`;
        }

        let resultElement = document.createElement("p");
        resultElement.innerHTML = resultText;
        resultsContainer.appendChild(resultElement);
    }

    // Display Final Score
    scoreContainer.innerHTML = `<h2>Final Score: ${correctAnswers} / ${totalQuestions}</h2>`;

    // Restart Quiz Button
    document.getElementById("restartQuiz").addEventListener("click", function () {
        localStorage.clear();
        window.location.href = "../index.html";
    });

    console.log("Results page loaded successfully.");
});
