'use strict';
var Item       = require('../models/home');

exports.itemslist = function(req, res) 
{
	Item.find({is_deleted:false}).sort({created_date:-1}).exec(function(err, result) 
	{
			if(err)
			{
			     throw err;
			}
			else 
			{
				 res.render('items/item.html',
					{
						data:{page_title:'TODO item listing home page'},
						itemData:result,
					});
			}	
	});		
}

exports.saveitem = function(req, res) 
{
	 var itemData = req.body.item;
   
			Item.create({'title':itemData,is_deleted:false,is_marked:false},
			 function(err, content) 
			{
				if(err)
				{
					var errroMessage;
					 if (err.name == 'ValidationError') 
					 {
					    for (var error in err.errors)
					     {
					    
					         errroMessage = err.errors[error].message; 
					    }
					  } 
					  res.json({message : errroMessage, resultData:'',status : 200, itemvalidationError : true});
				}
				else 
				{
					//console.log("content save");
					res.json({message : "Item Add Successfully", resultData:content,status : 200});
				}							
							 
			});  
}

exports.markitem = function(req, res) 
{

	var itemID = req.body.itemId;
	var itemMarkStatus = req.body.markstatus;
			Item.findByIdAndUpdate(itemID,{$set:{is_marked:itemMarkStatus}},
			 function(err, content) 
			{
				if(err)
				{
					 throw err;
				}
				else 
				{
					//console.log("content save");
					res.json({message : "Item Updated Successfully", status : 200});
				}							
							 
			});  
}

exports.deleteitem = function(req, res) 
{
	var itemID = req.body.itemId;
   
			Item.findByIdAndUpdate(itemID,{$set:{is_deleted:true}},
			 function(err, content) 
			{
				if(err)
				{
					 throw err;
				}
				else 
				{
					res.json({message : "Item Deleted Successfully", status : 200});
				}							
							 
			});  
}