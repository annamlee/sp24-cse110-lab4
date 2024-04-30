1. `values added: 20`

2. `final result: 20`

3. `values added: 20`

4. The code returns an error because `result` has a block scope, so it can only be accessed within the block it was defined in. Because the print statement referencing `result` is outside of the if block, where `result` was declared, running it reuslts in an error.

5. The code returns an error because `result` is declared with the const keyword, meaning it cannot be reassigned. Line 7 attempts to reassign `result`, which would result in an error.

6. The code returns an error because of the same reason listed in question 5, trying to reassign a const variable. Furthermore, `result` has block scope and line 13 is outside of the block `result` was first declared in, so this reference in line 13 will also error.  