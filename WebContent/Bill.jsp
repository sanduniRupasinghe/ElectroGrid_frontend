<%@page import="model.Bill"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>ElectroGrid Online System</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/bill.js"></script>
<style type="text/css">
.hide{  
	visibility: hidden;
  	border: none;
  	}
  	.header{
	font-weight: bold;
} 
</style>
</head>
<body>


<div class="container">
<br>
<div class="row">
	<div class="col-lg-12">
	<div class="card m-b-32">
	<div class="card-body">
	<center><h2 class="header">Bill Management</h2></center>
	<form id="formBill" name="formBill" method="post" action="AddBill.jsp">
	
		<label>User ID</label> <input id="userId"
			name="userId" type="text"
		    class="form-control form-control-sm">
			<br>
			
		<label>Customer Name</label> <input id="customername"
			name="customername" type="text"
		    class="form-control form-control-sm">
			<br>
			
		<label>Month</label> <input id="month"
			name="month" type="text"
		    class="form-control form-control-sm">
			<br>
			
		<label>Bill Type</label> <input id="billType"
			name="billType" type="text"
		    class="form-control form-control-sm">
			<br>
			
		<label>Bill Amount</label> <input id="billamount"
			name="billamount" type="text"
		    class="form-control form-control-sm">
			<br>
			
			
		<input id="btnSave" name="btnSave" type="button" value="Save"
			class="btn btn-primary"> <input type="hidden"
				id="idbill" name="idbill" value="">		
	</form>
	<br>
	
	
	<div id="alertSuccess" class="alert alert-success"></div>
					<div id="alertError" class="alert alert-danger"></div>
					<br> <br>
										<div id="divUserGrid">
						<%
						Bill billObj = new Bill();
											out.print(billObj.readBills());
						%>
					</div>
	</div>
	</div>
	</div>
</div>
<br>
</div>

</body>
</html>