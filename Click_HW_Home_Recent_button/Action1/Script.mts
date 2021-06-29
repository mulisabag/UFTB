'The propose of the test is to check the HardWare 'Home' button isworking

'1. UFT will open VNC with AOS application open
'2. Verify AOS is open by clicking the application
'3. Click home button
'4 Verify the application is not in foeground


'Device("Device").App("Advantage Shopping").MobileObject("MobileObject").Tap

If Device("Device").App("Advantage Shopping").MobileObject("MobileObject").Exist(30) Then
	reporter.ReportEvent micPass, "Verify AOS is opened", "AOS application is opened"
Else
	reporter.ReportEvent, micFail, "Verify AOS is opened", "AOS application is NOT opened"
	existtest
End If

'Device("Device").Home

Device("Device").App("Advantage Shopping").MobileObject("imageViewCategory").Tap




