# API Load Test

This project will help developers do a simple load test against their APIs

## How to install?

* git clone https://github.com/splogamurugan/apiloadtest
* cd apiloadtest
* npm install

## How to run?
* node run.js





## How the result looks like?
node run.js
Request Id  stime          etime          Start Time               End Time                 Body                     Time Taken
----------  -------------  -------------  -----------------------  -----------------------  -----------------------  ----------
1           1542878723256  1542878723803  14:55:23 GMT+0530 (IST)  14:55:23 GMT+0530 (IST)  {"modules":{"Login":...  547
2           1542878723261  1542878724142  14:55:23 GMT+0530 (IST)  14:55:24 GMT+0530 (IST)  {"modules":{"Login":...  881
3           1542878723262  1542878723758  14:55:23 GMT+0530 (IST)  14:55:23 GMT+0530 (IST)  {"modules":{"Login":...  496
4           1542878723262  1542878723772  14:55:23 GMT+0530 (IST)  14:55:23 GMT+0530 (IST)  {"modules":{"Login":...  510
5           1542878723262  1542878724106  14:55:23 GMT+0530 (IST)  14:55:24 GMT+0530 (IST)  {"modules":{"Login":...  844
6           1542878723262  1542878724175  14:55:23 GMT+0530 (IST)  14:55:24 GMT+0530 (IST)  {"modules":{"Login":...  913
7           1542878723262  1542878724056  14:55:23 GMT+0530 (IST)  14:55:24 GMT+0530 (IST)  {"modules":{"Login":...  794
8           1542878723262  1542878724213  14:55:23 GMT+0530 (IST)  14:55:24 GMT+0530 (IST)  {"modules":{"Login":...  951
9           1542878723262  1542878724028  14:55:23 GMT+0530 (IST)  14:55:24 GMT+0530 (IST)  {"modules":{"Login":...  766
10          1542878723262  1542878724003  14:55:23 GMT+0530 (IST)  14:55:24 GMT+0530 (IST)  {"modules":{"Login":...  741

avg time taken per request (sec)  total time taken for all request (sec)
--------------------------------  --------------------------------------
0.7443                            0.957
