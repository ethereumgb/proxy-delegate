# ProxyDelegate
Following the steps to complete this exercise:
1. clone this project
1. update packages: ```npm ci```
2. run the test: ```npm test```
3. make sure only 1 test case fails, the one that set version
4. fix the failed test case by modifying the ProxyDelegate.sol contract, e.g. add a version state variable in ProxyDelegate.sol
5. add a new Proxy contract which will use .call() instead of .delegatecall()
6. write test cases for the new Proxy contract to test getMsgSender() and setVersion(). Do you notice any differences between .call() and .delegatecall()?
7. commit your changes to github and submit your github url
