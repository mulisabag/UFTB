
num =  Num_of_seats ("Frankfurt")





SystemUtil.Run "C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsGUI.exe"

WpfWindow("Micro Focus MyFlight Sample").Move 451,330 @@ hightlight id_;_459782_;_script infofile_;_ZIP::ssf1.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set parameter("username") @@ hightlight id_;_1988774016_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure parameter("password") @@ hightlight id_;_1883970560_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_1883975456_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Select "Denver" @@ hightlight id_;_1988771088_;_script infofile_;_ZIP::ssf6.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Select num @@ hightlight id_;_1988785632_;_script infofile_;_ZIP::ssf8.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfImage("WpfImage").Click 2,9 @@ hightlight id_;_1988786352_;_script infofile_;_ZIP::ssf9.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("Su").SetDate parameter("date") @@ hightlight id_;_2121700168_;_script infofile_;_ZIP::ssf10.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("Class").Select "First" @@ hightlight id_;_2121701128_;_script infofile_;_ZIP::ssf12.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_1988788272_;_script infofile_;_ZIP::ssf13.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("BACK").Click @@ hightlight id_;_1988792544_;_script infofile_;_ZIP::ssf14.xml_;_
WpfWindow("Micro Focus MyFlight Sample").Close @@ hightlight id_;_197680_;_script infofile_;_ZIP::ssf15.xml_;_
