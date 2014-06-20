
var edge = require("edge");

exports.testEdge = function(test) {
	var helloWorld = edge.func(function(){
	/*
		async(input) => {
			return ".NET Welcomes " + input.ToString();
		}
	*/
	});

	helloWorld("JavaScript", function(error, result){
		if(error) throw error;
		console.log(result);
	});

	test.done();
};

exports.testDll = function(test) {
	var func = edge.func(function(){
		/*
			#r "E:\\source\\projects\\tnt\\UploadManager2\\bin\Debug\\UploadManager.exe"
			#r "E:\\source\\projects\\tnt\\UploadManager2\\bin\Debug\\Extensions\\UMTNTPlugin.dll"

			using UploadManager.Settings;
			using UMTNTPlugin.Utility;
			using UMTNTPlugin.Models;

			async (input) =>  {

				var accessPath = "E:\\implements\\TNT\\edoc.mdb";
				var connection = "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + accessPath;

				var setting = new AppSettings();
				var db = new DB(setting);
				db.SetConnectionString(connection);
				var rs = db.QueryByConAndDepot(454005846, "ABX");

				return rs;
			}

		*/
	});

	func("Hi", function(err, result) {
		test.equal(result.Depot , "ABX");
		test.equal(err, undefined);
		test.done();
	});
};
