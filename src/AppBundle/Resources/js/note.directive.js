(function(){
	angular.module('app')
		.directive('note', function()
		{
			return {
				templateUrl: "note.html",

				controller: NoteController
			};
			
			function NoteController($scope, NoteService)
			{
				$scope.del = del;
				$scope.edit = edit;

				function del()
				{
					window.alert('DELETE');
				}
				
				function edit()
				{
					window.alert('EDIT');
				}
				
				function done()
				{
					window.alert('DONE');
				}
			}
		})
	;
})();
