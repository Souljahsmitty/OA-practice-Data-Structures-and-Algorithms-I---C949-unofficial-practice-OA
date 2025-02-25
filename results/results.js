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
        question: "1. Which term refers to a template for creating an object?", 
        correct: "B", 
        explanation: "A class is a blueprint for creating objects in object-oriented programming." 
    },
		"2": { 
        question: "2. Which characteristic of an algorithm is independent in nature?", 
        correct: "D", 
        explanation: "An algorithm is independent if it does not depend on specific platforms or tools, making an agnostic code repository a valid answer." 
    },
    "3": { 
        question: "3. What is referred to as a data structure that stores subitems?", 
        correct: "B", 
        explanation: "A record is a data structure that stores subitems, each with an associated name." 
    },
    "4": { 
        question: "4. Which factor takes the ability to easily update an algorithm into consideration?", 
        correct: "A", 
        explanation: "Maintainability ensures an algorithm is easy to modify, update, or enhance without significant rework." 
    },
    "5": { 
        question: "5. What is a component of an algorithm that specifies a stopping point?", 
        correct: "D", 
        explanation: "Finiteness ensures an algorithm has a defined stopping point and does not run indefinitely." 
    },
    "6": { 
        question: "6. Which term refers to a type of search algorithm?", 
        correct: "A", 
        explanation: "Linear search is a basic search algorithm that checks elements sequentially." 
    },
    "7": { 
        question: "7. What is a high-level consideration in an algorithm's design?", 
        correct: "A", 
        explanation: "Simplicity ensures that an algorithm is easy to understand, maintain, and implement." 
    },
    "8": { 
        question: "8. What is a high-level consideration in an algorithm's design?", 
        correct: "B", 
        explanation: "A priori analysis evaluates an algorithm's efficiency before execution, without empirical testing." 
    },
    "9": { 
        question: "9. Which review of an algorithm happens after implementation?", 
        correct: "A", 
        explanation: "A posteriori analysis evaluates an algorithm's performance based on actual execution results." 
    },
    "10": { 
        question: "10. Which review of an algorithm happens after implementation?", 
        correct: "C", 
        explanation: "A posteriori analysis measures an algorithm's performance after it has been executed." 
    },
	 "11": { 
        question: "11. Which factor helps measure the reusability of an algorithm?", 
        correct: "B", 
        explanation: "Extensibility determines how easily an algorithm can be modified and reused." 
    },
    "12": { 
        question: "12. Which algorithm requires data sorting as a first step?", 
        correct: "C", 
        explanation: "Binary search requires the dataset to be sorted before performing the search operation." 
    },
    "13": { 
        question: "13. What does a time complexity analysis of an algorithm include?", 
        correct: "D", 
        explanation: "Worst-case analysis measures the maximum number of operations an algorithm performs." 
    },
    "14": { 
        question: "14. Which data type do heap sorts work with?", 
        correct: "A", 
        explanation: "Heap sort works with a tree-based data structure that follows the heap property." 
    },
    "15": { 
        question: "15. Which function is used in conjunction with a merge sort algorithm?", 
        correct: "D", 
        explanation: "Merge Sort uses recursion to divide and conquer subarrays before merging them." 
    },
    "16": { 
        question: "16. Which attribute of a recursive function makes it unique?", 
        correct: "A", 
        explanation: "A recursive function is unique because it calls itself within its definition." 
    },
    "17": { 
        question: "17. What is x in the following block of logic?\n x = 28 \n If x >= 10 and x < 20\n x = 20 \n elif x <= 30 \n x = 25 \n elif x >= 50\n x = 100 \n else x = 500", 
        correct: "B", 
        explanation: "Since x=28 falls within the elif x <= 30 condition, x is assigned the value 25." 
    },
    "18": { 
        question: "18. What is an if statement inside of an if statement referred to as?", 
        correct: "A", 
        explanation: "An if statement inside another if statement is called a nested if statement." 
    },
    "19": { 
        question: "19. Which search algorithm functions by continually dividing the dataset in half until the sought item is found or the dataset is exhausted?", 
        correct: "B", 
        explanation: "Binary search repeatedly divides the dataset in half, making it efficient for sorted data." 
    },
    "20": { 
        question: "20. Which search algorithm has the best performance when the dataset is sorted?", 
        correct: "C", 
        explanation: "Interval search methods like binary search perform best when the dataset is sorted." 
    },
	"21": { 
        question: "21. Which term describes a way of organizing, storing, and performing operations on data?", 
        correct: "A", 
        explanation: "A data structure organizes and stores data, enabling efficient operations." 
    },
    "22": { 
        question: "22. Which data structure is used to implement a dictionary data type?", 
        correct: "B", 
        explanation: "A hash table is used to implement dictionaries, providing efficient key-value lookups." 
    },
    "23": { 
        question: "23. Which element refers to the numeric positions in a list abstract data type (ADT)?", 
        correct: "D", 
        explanation: "Indexes refer to the numeric positions of elements in a list ADT." 
    },
    "24": { 
        question: "24. Which characteristic of a class allows it to be used as an abstract data type (ADT)?", 
        correct: "C", 
        explanation: "A class is an ADT because it consists of variables and methods that define behavior." 
    },
    "25": { 
        question: "25. What is the result when 6 is enqueued to the queue 7,9,8 (with 7 as the front)?", 
        correct: "B", 
        explanation: "Enqueuing 6 adds it to the back of the queue, making the order 7,9,8,6." 
    },
    "26": { 
        question: "26. Which value would be returned from executing the dequeue operation on the queue 7,9,8 (with 7 as the front)?", 
        correct: "B", 
        explanation: "Dequeue removes the front element (7), leaving 9,8." 
    },
    "27": { 
        question: "27. Which queue results from executing the following queue operations on the queue 7,9,8 (with 7 as the front)? Dequeue() Enqueue(6) Enqueue(5) Dequeue()", 
        correct: "C", 
        explanation: "After operations, 8 remains at the front, followed by 6 and 5." 
    },
    "28": { 
        question: "28. What will be the new state of the queue 7,9,8 (with 7 as the front) after the enqueue (3) operation?", 
        correct: "A", 
        explanation: "Enqueuing 3 adds it to the back, making the order 7,9,8,3." 
    },
    "29": { 
        question: "29. Which format is used to store data in a hash table?", 
        correct: "B", 
        explanation: "A hash table stores data in an array using key-value pairs for efficient lookup." 
    },
    "30": { 
        question: "30. Which term refers to a data structure that groups related items of data together?", 
        correct: "C", 
        explanation: "A record groups related items together as a structured data type." 
    },
    "31": { 
        question: "31. Which data structure is used to store unordered items by mapping each item to a location in an array?", 
        correct: "D", 
        explanation: "A hash table maps each item to a location in an array using a hash function." 
    },
    "32": { 
        question: "32. What is the advantage that a linked list has over an array?", 
        correct: "A", 
        explanation: "A linked list grows and shrinks dynamically, while an array has a fixed size." 
    },
    "33": { 
        question: "33. What would be the best data structure for a hash table with simple chaining?", 
        correct: "B", 
        explanation: "A linked list is used in hash tables to handle collisions using chaining." 
    },
    "34": { 
        question: "34. How many objects are shown in the image?", 
        correct: "B", 
        explanation: "The image contains three distinct objects, based on the provided visual." 
    },
    "35": { 
        question: "35. What is the root node for this tree?", 
        correct: "A", 
        explanation: "The root node is the topmost node in a tree structure, which is Anne (1)." 
    },
    "36": { 
        question: "36. What is the height of this tree?", 
        correct: "C", 
        explanation: "The height of a tree is the longest path from the root node to a leaf, which is three." 
    },
    "37": { 
        question: "37. Which data structure is the most dynamic in storing data items of varying lengths?", 
        correct: "B", 
        explanation: "A list in Python allows dynamic resizing and can store elements of varying sizes." 
    },
    "38": { 
        question: "38. What is the resulting stack when the push(1) function is implemented on this stack yield? 8,9,3,5 (top is 8)", 
        correct: "A", 
        explanation: "Pushing 1 onto the stack places it on top, resulting in 8,9,3,5,1." 
    },
    "39": { 
        question: "39. What will the peek() operation from this stack return? 8,9,3,5 (top is 8)", 
        correct: "C", 
        explanation: "Peek() returns the top element without removing it, which is 8." 
    },
    "40": { 
        question: "40. What is the set that results from set1 intersection set2, given these sets? set1 = (69,82,47) set2 = (11,82)", 
        correct: "A", 
        explanation: "The intersection of two sets includes only common elements, which is (82)." 
    },
	"41": { 
        question: "41. What is the time complexity of appending an item to an array when resizing is required?", 
        correct: "B", 
        explanation: "Resizing an array requires copying all elements to a new array, making it O(n)." 
    },
    "42": { 
        question: "42. What is an Abstract Data Type (ADT)?", 
        correct: "B", 
        explanation: "An ADT describes operations without specifying how they are implemented." 
    },
    "43": { 
        question: "43. What is the output of the following operations on an empty list? Append(list, 11) Append(list, 4) Append(list, 7) Print(list)", 
        correct: "C", 
        explanation: "Appending items in sequence results in [11, 4, 7]." 
    },
    "44": { 
        question: "44. What is the order of these functions by growth rate? 2/N, 37, 2N, N log(N2), N2?", 
        correct: "A", 
        explanation: "Sorting functions by growth rate follows the standard complexity order." 
    },
    "45": { 
        question: "45. What is the first element visited in this list when binary searching for the number 7? [6,7,8,9,11,15,20]?", 
        correct: "A", 
        explanation: "Binary search starts at the middle element, which is 9." 
    },
    "46": { 
        question: "46. How many elements in a list of size 64 would be visited when using a binary search for a number that is larger than all the values in the list?", 
        correct: "B", 
        explanation: "Binary search repeatedly halves the list, so it visits log2(64) = 6 elements." 
    },
    "47": { 
        question: "47. What is the runtime complexity of the algorithm O(N^N + 1)?", 
        correct: "D", 
        explanation: "The dominant term O(N^N) determines the complexity, which is exponential." 
    },
    "48": { 
        question: "48. How many elements in a list of size 64 would be visited when using a binary search for a number that is smaller than all the values in the list?", 
        correct: "D", 
        explanation: "Binary search halves the list log2(64) = 6 times, visiting 6 elements." 
    },
    "49": { 
        question: "49. What is the runtime complexity for the expression 305 + O(325N)?", 
        correct: "D", 
        explanation: "The constant term 305 is ignored, making the complexity O(N)." 
    },
    "50": { 
        question: "50. What is the runtime complexity for this code? for x in range(N): for y in range(N): for z in range(N): tot = tot + z print tot?", 
        correct: "D", 
        explanation: "Three nested loops result in O(N^3) complexity." 
    },
	"51": { 
        question: "51. Which term describes an abstract data type (ADT) that Python uses?", 
        correct: "A", 
        explanation: "An array is an ADT used in Python to store ordered elements in contiguous memory locations." 
    },
    "52": { 
        question: "52. Which abstract data type (ADT) is characterized by the LIFO (Last In, First Out) principle?", 
        correct: "B", 
        explanation: "A stack follows the LIFO principle, meaning the most recently added item is removed first." 
    },
    "53": { 
        question: "53. Which queue operation removes an item from the front of the queue?", 
        correct: "A", 
        explanation: "'dequeue()' removes an item from the front of the queue following FIFO (First In, First Out) order." 
    },
    "54": { 
        question: "54. Which function in Python returns the number of times the desired value is found in a tuple?", 
        correct: "C", 
        explanation: "The 'count()' function returns the number of occurrences of a specific value in a tuple." 
    },
    "55": { 
        question: "55. Which function in Python is used to find a specific value in a tuple?", 
        correct: "A", 
        explanation: "The 'index()' function finds the first occurrence of a specific value in a tuple." 
    },
    "56": { 
        question: "56. Which Python list function will remove all items from a list?", 
        correct: "A", 
        explanation: "The 'clear()' function removes all elements from a list, making it empty." 
    },
    "57": { 
        question: "57. Which abstract data type (ADT) allows operations at one end only?", 
        correct: "A", 
        explanation: "A stack allows insertion and removal only from one end (LIFO behavior)." 
    },
    "58": { 
        question: "58. Which Python list function removes the first instance of the specified element?", 
        correct: "C", 
        explanation: "The 'remove()' function deletes the first occurrence of a specified element in a list." 
    },
    "59": { 
        question: "59. How does the insertion sort algorithm sort through a list?", 
        correct: "A", 
        explanation: "Insertion sort iterates through a list, placing each value into its correct sorted position." 
    },
    "60": { 
        question: "60. What is the average runtime complexity of the merge sort algorithm?", 
        correct: "D", 
        explanation: "Merge Sort has an average time complexity of O(N log N) due to its divide-and-conquer approach." 
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
