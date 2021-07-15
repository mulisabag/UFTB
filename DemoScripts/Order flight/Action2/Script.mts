Wait 2
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Select "Frankfurt"
WpfWindow("Micro Focus MyFlight Sample").WpfImage("WpfImage_2").Click 8,3
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTickets").Select parameter("numOfTickets")
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("Class").Select "Business"
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click

