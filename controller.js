(function(){
  function controller() {
    var vm = this;
    vm.word1 = "ONE";
    vm.word2 = "TWO";
  };
  angular
    .module("module")
    .controller("controller", controller)
})();
