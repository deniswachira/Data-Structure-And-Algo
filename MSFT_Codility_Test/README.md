## Quiz One: 
There are two wooden sticks of lengths A and B respectively. Each of them can be cut into shorter sticks of integer lengths. Our goal is to construct the largest possible square. In order to do this, we want to cut the sticks in such a way as to achieve four sticks of the same length (note that there can be some leftover pieces). What is the longest side of square that we can achieve?

Write a function:

function solution(A, B):

that, given two integers A, B, returns the side length of the largest square that we can obtain. If it is not possible to create any square. the function should return 0.

Examples:

1. Given A= 10, B = 21, the function should return 7. We can split the second stick into three sticks of length 7 and shorten the first stick by 3

Test Output

2. Given A-13, B=11, the function should return 5. We can cut two sticks of length 5 from each of the given sticks.

3. Given A2, B = 1, the function should return 0. It is not possible to make any square from the given sticks.

4. Given A = 1, B = 8, the function should return 2. We can cut stick B into four parts.

Write an efficient algorithm for the following assumptions:
 A and B are integers within the range (1..1,000,000,000).

## Quiz two:
You are given two arrays, A and B, each made of N integers. They represent a grid with N columns and 2 rows, where A is the upper row and B is the lower row.

Your task is to go from the upper-left cell (represented by A[0]) to the bottom-right cell (represented by B[N-1]) moving only right and down, so that the maximum value over which you pass is as small as possible.

Write a function:

function solution (A, B):

that, given two arrays of integers, A and B, of length N, returns the maximum value on the optimal path.

Examples:

1. Given A = [3, 4, 6], B = [6, 5, 4], the function should return 5. The optimal path is 3-4-5-4.

Test changes saved

34  6 
65  4 

2. Given A = [1, 2, 1, 1, 1, 4], B = 11, 1, 1, 3, 1, 11, the function should return 2. The optimal path is shown in the image below.

1 2 1 1 1 4
1 1 1 3 1 1

3. Given A=[-5,-1,-3], B=[1-5, 5, -2], the function should return -1. The optimal path is (-5)-(-1)-(-3)(-2).

-5 -1 -3
-5  5 -2

Write an efficient algorithm for the following assumptions:
N is an integer within the range [1..100,000]: 
each element of arrays A and B is an integer within the range -1,000,000,000..[1,000,000,000].

