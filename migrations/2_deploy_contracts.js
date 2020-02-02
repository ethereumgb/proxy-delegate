const ProxyDelegate = artifacts.require('ProxyDelegate');
const SomeLibrary = artifacts.require('SomeLibrary');

module.exports = function(deployer) {
    deployer.deploy(SomeLibrary)
    .then(() => deployer.deploy(ProxyDelegate, SomeLibrary.address));
}