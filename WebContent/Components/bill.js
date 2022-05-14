$(document).ready(function()
{
if ($("#alertSuccess").text().trim() == "")
 {
 $("#alertSuccess").hide();
 }
 $("#alertError").hide();
});

//SAVE ============================================
$(document).on("click", "#btnSave", function(event)
{
// Clear alerts---------------------
 $("#alertSuccess").text("");
 $("#alertSuccess").hide();
 $("#alertError").text("");
 $("#alertError").hide();
 // Form validation-------------------
var status = validateBillForm();
if (status != true)
 {
 $("#alertError").text(status);
 $("#alertError").show();
 return;
 }

 var type = ($("#idbill").val() == "") ? "POST" : "PUT";
 
 $.ajax(
		{
		 url : "BillAPI",
		 type : type,
		data: $("#formBill").serialize(),
		 dataType : "text",
		 complete : function(response, status)
		 {
		 onBillSaveComplete(response.responseText, status);
		 }
		});

});

function onBillSaveComplete(response, status)
{
if (status == "success")
 {
	var resultSet = JSON.parse(response);
	if (resultSet.status.trim() == "success")
	{
		$("#alertSuccess").text("Successfully saved.");
		$("#alertSuccess").show();
		
		$("#divUserGrid").html(resultSet.data);
	} else if (resultSet.status.trim() == "error")
	{
		$("#alertError").text(resultSet.data);
		$("#alertError").show();
	}
 	} else if (status == "error")
 	{
 		$("#alertError").text("Error while saving.");
 		$("#alertError").show();
 	} else
 	{
 		$("#alertError").text("Unknown error while saving..");
 		$("#alertError").show();
 	}
		$("#idbill").val("");
		$("#formBill")[0].reset();
}


//UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
{
 $("#idbill").val($(this).closest("tr").find('#hididUpdate').val());
 $("#userId").val($(this).closest("tr").find('td:eq(0)').text());
 $("#customername").val($(this).closest("tr").find('td:eq(1)').text());
 $("#month").val($(this).closest("tr").find('td:eq(2)').text());
 $("#billType").val($(this).closest("tr").find('td:eq(3)').text());
 $("#billamount").val($(this).closest("tr").find('td:eq(4)').text());
});

$(document).on("click", ".btnRemove", function(event)
		{
		 $.ajax(
		 {
		 url : "BillAPI",
		 type : "DELETE",
		 data : "idbill=" + $(this).data("idbill"),
		 dataType : "text",
		 complete : function(response, status)
		 {
		 onBillDeleteComplete(response.responseText, status);
		 }
		 });
		});

function onBillDeleteComplete(response, status)
{
if (status == "success")
 {
 var resultSet = JSON.parse(response);
 if (resultSet.status.trim() == "success")
 {
 $("#alertSuccess").text("Successfully deleted.");
 $("#alertSuccess").show();
 $("#divUserGrid").html(resultSet.data);
 } else if (resultSet.status.trim() == "error")
 {
 $("#alertError").text(resultSet.data);
 $("#alertError").show();
 }
 } else if (status == "error")
 {
 $("#alertError").text("Error while deleting.");
 $("#alertError").show();
 } else
 {
 $("#alertError").text("Unknown error while deleting..");
 $("#alertError").show();
 }
}

//CLIENTMODEL=========================================================================
function validateBillForm()
{
	//cuserId
if ($("#userId").val().trim() == "")
{
return "Insert User ID.";
}

//customername
if ($("#customername").val().trim() == "")
{
return "Insert Customer Name.";
}

//month
if ($("#month").val().trim() == "")
{
return "Insert Month.";
}

//billType
if ($("#billType").val().trim() == "")
{
return "Insert Bill Type.";
}


//billamount
if ($("#billamount").val().trim() == "")
{
return "Insert Bill Amount.";
}

return true;
}

