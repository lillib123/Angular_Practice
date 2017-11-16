(function(){
  function testDirective() {
    return {
      controller: "controller as ctrl",
      restrict: "A",
      link: function($scope, $element, $attrs) {
        $element.on("click", function() {
          $scope.$apply(function() {
            $scope.ctrl.word1 = "send";
          });
        });
        $element.on("mouseenter", function() {
          $scope.$apply(function() {
            $element.css("background-color", "black");
            $element.css("width", "100px");
            $element.css("transition", "0.3s ease");
          });
        });
        $element.on("mouseleave", function() {
          $scope.$apply(function() {
            $element.css("background-color", "white");
            $element.css("width", "100px");
              $element.css("transition", "5s ease");
          });
        });
      }
    }
  }
  angular
    .module("module")
    .directive("testDirective", testDirective);
})();
