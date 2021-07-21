systemutil.Run("C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsGUI.exe")
wait 1
systemutil.Run("C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsGUI.exe")


WpfWindow("Micro Focus MyFlight Sample").Click 399,494 @@ hightlight id_;_1183804_;_script infofile_;_ZIP::ssf1.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set "recovery1" @@ hightlight id_;_2114283576_;_script infofile_;_ZIP::ssf4.xml_;_
 @@ hightlight id_;_1892111336_;_script infofile_;_ZIP::ssf6.xml_;_


RunAction "Action1 [Two Recoveries 2and1]", oneIteration
