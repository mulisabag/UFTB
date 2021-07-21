systemutil.Run("C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsGUI.exe")
wait 1
systemutil.Run("C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsGUI.exe")


Window("Window").Click 1005,202 @@ hightlight id_;_65842_;_script infofile_;_ZIP::ssf1.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set "Recovery 2" @@ hightlight id_;_1894793448_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure "60f807ebf32d92239ea52b214362" @@ hightlight id_;_2025466488_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_2059646816_;_script infofile_;_ZIP::ssf4.xml_;_



