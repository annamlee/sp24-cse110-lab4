1. The value of `i`,  3, will be printed at line 12. `i` is declared with var, so it has function scope, allowing it to be referenced in line 12 without error. `i` is incremented by 1 each time the loop runs, and the loop runs three times because the length of the array `prices` is 3.

2. The value of `discountedPrice`, 150, will be printed at line 13. `discountedPrice` is also declared with var, so it has function scope, allowing it to be referenced in line 13 without error. During the last iteration of the for loop, `discountedPrice` is calculated as 300 * (1 - 0.5) = 150.

3. The value of `finalPrice`, 150, will be printed at line 14. `finalPrice` is a var and line 14 is within the function `finalPrice` was declared in, so this would cause no errors. In the last iteration of the loop, `finalPrice` is calculated as (150 * 100) / 100 = 150.

4. This function returns the `discounted` array. `discounted` is declared as a var and gets one element pushed per iteration of the for loop, calculated based on `discount` and the elements in `prices`. After the loop is done running, `discounted` will be `[50, 100, 150]`.

5. Line 12 will result in an error because `i` is declared with let, so it has block scope and line 12 is outside of the for loop where `i` was declared.

6. Line 13 will result in an error because `discountedPrice` is declared with let, so it has block scope and line 13 is outside of the for loop where `discountedPrice` was declared.

7. The value of `finalPrice`, 150, will be printed at line 14. `finalPrice` is declared with let, and line 14 is within the block, in this case the function, where it was declared. During the last iteration of the for loop, `finalPrice` is calculated as (150 * 100) / 100 = 150.

8. This function returns the `discounted` array. `discounted` is declared with let, so it has a block scope and the return statement is within this block. `discounted` gets one element pushed per iteration of the for loop, calculated based on `discount` and the elements in `prices`. After the loop is done running, `discounted` will be `[50, 100, 150]`.
9. Line 11 results in an error because `i` is declared with let, so it has block scope and line 11 is outside of the for loop where `i` was declared.

10. The value of `length`, 3, at line 12. `length` is declared with const, so it has block scope and line 12 is still within this block. 

11. This function returns the `discounted` array. `discounted` is declared with const, so it has block scope and cannot be reassigned. The loop that updates the array assigned to `discount` is whithin this block and calculates the elements to be pushed based on the value of `discount` and the elements in `prices`. At the end of the loop, the final array returned will be `[50, 100, 150]`.

12. 
A. `student.name`

B. `student['Grad Year']`

C. `student.greeting()`

D. `student['Favorite Teacher'].name`

E. `student.courseLoad[0]`

13. 
A. `'32'` because `2` is converted to its string representation, then concatenated to `'3'`

B. `1` because `'3'` is converted to an integer, then subtracted by `2`

C. `3` because `null` is converted to `0`, then added to `3`

D. `'3null'` because `null` is converted to its string representation, then concatenated to `'3'`

E. `4` because `true` is converted to `1`, then added to `3`

F. `0` because `false` and `null` both converted to `0`, then are added to each other

G. `'3undefined'` because `undefined` is converted to its string representation, then concatenated to `'3'`

H. `NaN` because `'3'` is converted to an integer and `undefined` is `NaN`; doing arithmeic with an integer and `NaN` results in `NaN`

14. 
A. `true` because `'2'` is converted to an integer and `2` is greater than `1`

B. `false` because `2` is lexicographically after `12`

C. `true` because `'2'` is converted to an integer and `2` is equal to `2`

D. `false` because `===` considers operands of different types to be different, so `2` is not equal to `'2'`

E. `false` because `true` is converted to `1` and `1` is not equal to `2`

F. `true` because `Boolean(2)` has a truthy value and is equal to `true`

15. The `==` operator checks for equality using type conversions when necessary, whereas the `===` operator checks for strict equality, considering operands of different typs to be not equal.

16. [part2-question16.js](part2-question16.js)

17. The result is the array `[2, 4, 6]`. The function `doSomething` is passed into `modifyArray` as the `callback`. `modifyArray` initializes an empty array `newArr` which is then populated using a for loop that pushes the result of calling `doSomething` on each element in `[1, 2, 3]`, in this case multiplying it by 2, into `newArr`.

18. [part2-question18.js](part2-question18.js)

19. The code prints `1`, `4`, then `3`, and then finally `2` a second after. This is because `3` has a timeout of 0 and `2` has a timeout of 1000.