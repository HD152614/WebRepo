<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Insert title here</title>
</head>
<body>
<%-- JSP주석 --%>
<%!private static final String DEFAULT_NAME="Guest"; %>
<%
String name=request.getParameter("name");
if(name==null)name=DEFAULT_NAME;
%>
<h1>Hello,<%=name %></h1>
</body>
</html>