/*
  Quiz 4: Cisco CCST Networking
  Edit this file to change questions, answers, or explanations.

  Question types:
    single      options[], answer = index of the correct option
    multi       options[], pick = how many to choose, answer = [indexes]
    yesno       rows[{ text, answer: true|false }]
    match       terms[], pairs[{ definition, answer: "term text" }]
                (terms may outnumber pairs: extra terms are distractors)
    dropdown    items[{ label, options[], answer: "option text" }]
    cloze       parts[] (text around the blanks), blanks[{ options[], answer }]
    categorize  categories[], items[{ text, answer: "category" }]
  Optional on any question: code = terminal-style block,
                            image = { src, alt }.
*/
const QUIZ = {
  title: "Quiz 4",
  subtitle: "Cisco CCST networking practice",
  questions: [
    // 1
    {
      type: "match",
      prompt: "Using drag and drop, match each help desk concept with its definition.",
      terms: ["Time management", "Queue management", "Ticketing systems"],
      pairs: [
        { definition: "Prioritizes calls and gives customers an estimate of when an issue will be addressed.", answer: "Queue management" },
        { definition: "Uses calendars and schedules to determine support staff needs.", answer: "Time management" },
        { definition: "Manages calls and is used as a knowledge base for future calls.", answer: "Ticketing systems" }
      ],
      explanation: [
        "Queue management prioritizes calls and gives customers an estimate of when an issue will be addressed.",
        "Time management uses calendars and schedules to determine how to staff a support team optimally.",
        "Ticketing systems manage calls and provide help desk staff with information on how to solve problems similar to those they encounter."
      ]
    },
    // 2
    {
      type: "single",
      prompt: "An employee calls a help desk stating that an app keeps crashing on their computer. As a support agent, what should you do next?",
      options: [
        "Gather detailed information on the app and the crash.",
        "Define the problem.",
        "Consider probable cause for the app crashing.",
        "Devise a plan to solve the app crashing problem."
      ],
      answer: 0,
      explanation: [
        "Defining the problem is the first step in the problem-solving process. The employee has defined the problem.",
        "The second step in the problem-solving process is to gather detailed information.",
        "The third step in the process is to consider probable cause for the failure.",
        "The fourth step in the process is to devise a plan to solve the problem."
      ]
    },
    // 3
    {
      type: "single",
      prompt: "As part of personal safety when working on the inside of computers, what should a support agent wear to protect themselves from injury from electrostatic discharge (ESD)?",
      options: ["Protective gloves", "Protective wrist strap", "Protective goggles", "Fire-retardant jacket"],
      answer: 1,
      explanation: [
        "To prevent injury from electrostatic discharge, a person should wear an ESD wrist strap while working on the inside of a computer.",
        "Goggles protect the eyes but do not stop ESD.",
        "Gloves protect hands but do not stop ESD.",
        "A fire-retardant jacket is not necessary for working on computers, nor does it protect a person from ESD."
      ]
    },
    // 4
    {
      type: "match",
      prompt: "Using drag and drop, match each Windows tool with a result the tool provides.",
      terms: ["Task Manager", "Event Viewer", "ipconfig", "System Information"],
      pairs: [
        { definition: "Stop a running process.", answer: "Task Manager" },
        { definition: "Shows the amount of RAM available on a device.", answer: "System Information" },
        { definition: "Shows failed attempts at signing into a device.", answer: "Event Viewer" },
        { definition: "Shows the DNS server information for a device.", answer: "ipconfig" }
      ],
      explanation: [
        "Task Manager is used to view and, if needed, stop a running process.",
        "System Information will show how much RAM is on a device.",
        "Event Viewer shows successful and failed sign-in attempts on a device.",
        "ipconfig displays the IP address and related information, such as a DNS server a device is pointing to, so long as ipconfig is run with the /all attribute."
      ]
    },
    // 5
    {
      type: "single",
      prompt: "A person needs to find the hostname, processor, memory, disk space, and operating system version information for their Windows device. What tool provides those details?",
      options: ["Winver", "ipconfig", "Windows Explorer", "System Information"],
      answer: 3,
      explanation: [
        "System Information provides the hostname, processor, memory, disk space, and operating system version details on a Windows device.",
        "Windows Explorer provides disk space information.",
        "The winver command provides the version of Windows running on a device.",
        "The ipconfig command provides the IP address for each network adapter on a device."
      ]
    },
    // 6  NOTE: the source PDF showed only the question and its dropdown choices, with no answer key or explanation.
    //          The answers and explanation below were written for this quiz. Please confirm them.
    {
      type: "cloze",
      prompt: "Using the dropdown arrows, complete the statement on USB ports and their usage on mobile devices.",
      parts: ["", " was developed to support the small amount of port space mobile devices have. However, most mobile devices have switched to using ", " ports."],
      blanks: [
        { options: ["USB-C", "USB-A", "USB-B", "Micro USB"], answer: "Micro USB" },
        { options: ["USB-C", "USB-A", "USB-B", "Micro USB"], answer: "USB-C" }
      ],
      explanation: [
        "Micro USB was developed to fit the small amount of port space on mobile devices.",
        "Most mobile devices have since switched to USB-C ports.",
        "USB-A and USB-B are larger connectors, typically found on computers and peripherals such as printers."
      ]
    },
    // 7
    {
      type: "match",
      prompt: "Using drag and drop, match each type of power cable with the device most commonly associated with it.",
      terms: ["Laptop", "Desktop", "Mobile"],
      pairs: [
        { definition: "Standard power cord", answer: "Desktop" },
        { definition: "Power cord with brick", answer: "Laptop" },
        { definition: "USB-C", answer: "Mobile" }
      ],
      explanation: [
        "Desktops most often use standard power cords.",
        "Laptops most often use power cords with bricks.",
        "Mobile devices use smaller power cords, most notably USB-C cables."
      ]
    },
    // 8  NOTE: the source PDF showed no explanation for this question; the lines below were written for this quiz.
    {
      type: "match",
      prompt: "Using drag and drop, and the image, match each component to where it is located on the motherboard.",
      image: { src: "images/motherboard.jpg", alt: "Close-up of a motherboard with three numbered areas: 1 marks the processor socket with a processor installed, 2 marks the memory slots, and 3 marks a long expansion slot at the left edge." },
      terms: ["Processor", "RAM", "Expansion card"],
      pairs: [
        { definition: "1", answer: "Processor" },
        { definition: "2", answer: "RAM" },
        { definition: "3", answer: "Expansion card" }
      ],
      explanation: [
        "Label 1 marks the processor (CPU) socket.",
        "Label 2 marks the RAM (memory) slots.",
        "Label 3 marks an expansion card slot."
      ]
    },
    // 9
    {
      type: "single",
      prompt: "The company you work for needs to dispose of several old computers and monitors. What is the correct way to go about this disposal?",
      options: [
        "Throw them in a local dumpster.",
        "Take them to an e-waste site.",
        "Follow local and state regulations.",
        "Throw them in the business’s dumpster."
      ],
      answer: 2,
      explanation: [
        "The correct way to dispose of electronic assets, such as old computers and monitors, is to follow local and state regulations regarding said disposals.",
        "It is usually illegal to dispose of these assets in a business’s dumpster or a local dumpster.",
        "Though most jurisdictions have e-waste sites, again, regulations dictate how to handle electronic asset disposal."
      ]
    },
    // 10
    {
      type: "single",
      prompt: "Which Windows tool is used to troubleshoot hardware and offers a way to update drivers on hardware?",
      options: ["System Information", "System Profiler", "Device Manager", "Task Manager"],
      answer: 2,
      explanation: [
        "Device Manager is the Windows tool used to troubleshoot hardware and offers a way to update drivers on hardware.",
        "System Profiler is a macOS tool that provides detailed information on hardware and software.",
        "System Information provides hardware and software information but does not troubleshoot hardware.",
        "Task Manager allows one to troubleshoot processes, CPU, RAM, disk usage, and network usage."
      ]
    },
    // 11
    {
      type: "categorize",
      prompt: "Categorize each directory service as either a cloud or on-premises directory service.",
      categories: ["Cloud", "On-premises"],
      items: [
        { text: "Entra ID", answer: "Cloud" },
        { text: "AWS IAM", answer: "Cloud" },
        { text: "Active Directory", answer: "On-premises" }
      ],
      explanation: [
        "Active Directory is an on-premises directory service.",
        "Amazon Web Services Identity and Access Management (AWS IAM) is a cloud directory service.",
        "Entra ID (from Microsoft) is a cloud directory service."
      ]
    },
    // 12
    {
      type: "multi",
      pick: 4,
      prompt: "Which services provide installable apps to synchronize device files to the host’s cloud drives? (Choose four)",
      options: ["S3 Bucket", "Box", "Google Drive", "OneDrive", "Dropbox", "SMB"],
      answer: [1, 2, 3, 4],
      explanation: [
        "OneDrive, Google Drive, Dropbox, and Box all provide installable apps to synchronize device files with the host’s cloud drives.",
        "S3 Bucket requires a third-party app or code to run synchronizations.",
        "Server Message Block (SMB) is a protocol used for mapping to on-premises network drives."
      ]
    },
    // 13
    {
      type: "single",
      prompt: "What would a help desk agent select to check whether a group named Sales has Modify permissions applied to the following folder?",
      image: { src: "images/folder-properties.jpg", alt: "The legal Properties window for a Windows folder, showing the General tab with the tabs Sharing, Security, Previous Versions, and Customize, and an Advanced button under Attributes." },
      options: ["Customize tab", "Advanced button", "Sharing tab", "Security tab"],
      answer: 3,
      explanation: [
        "The help desk agent should select the Security tab, which will show if the Sales group is a member of the folder and has Modify permissions.",
        "The Sharing tab does not allow one to assign Modify permissions to a group.",
        "The Customize tab contains nothing on groups or permissions.",
        "The Advanced button allows one to see whether a folder is compressed or encrypted."
      ]
    },
    // 14
    {
      type: "yesno",
      prompt: "For each statement regarding the installation of peripherals in a device, select Yes if the statement is true and No if the statement is false.",
      rows: [
        { text: "A SATA drive installation requires a SATA cable.", answer: true },
        { text: "An SSD installation requires an SSD cable.", answer: false },
        { text: "RAM chips in a device must all come from the same manufacturer.", answer: false }
      ],
      explanation: [
        "True statement:",
        "A SATA drive requires a SATA cable for it to be installed.",
        "False statements:",
        "An SSD drive requires a cable for it to be installed.",
        "All RAM chips in a device must come from the same manufacturer.",
        "Explanation:",
        "Solid State Drives (SSD) often plug directly into an expansion slot on a motherboard.",
        "RAM chips in a device should come from the same manufacturer, but that is not a requirement for installation."
      ]
    },
    // 15
    {
      type: "yesno",
      prompt: "For each statement regarding display settings on a Windows device, indicate Yes if the statement is true and No if the statement is false.",
      rows: [
        { text: "In a multiple monitor display, the display setting can be set to only display one monitor.", answer: true },
        { text: "A display can be scaled to a higher or lower percentage.", answer: true },
        { text: "The brightness setting can be adjusted both on a desktop and a laptop.", answer: false },
        { text: "Night light puts Windows in a dark-colored theme mode.", answer: false }
      ],
      explanation: [
        "True statements:",
        "In a multiple-monitor display, the display setting can be set to only display one monitor.",
        "A display can be scaled to a higher or lower percentage.",
        "False statements:",
        "The brightness setting can be adjusted both on a desktop and a laptop.",
        "Night light puts Windows in a dark-colored theme mode.",
        "Explanation:",
        "On a desktop, the brightness setting is adjusted directly on a monitor.",
        "Night light helps block blue light, which can ease eye strain for some."
      ]
    },
    // 16
    {
      type: "single",
      prompt: "An employee needs to use a conferencing app to host a meeting. The headphones and microphone the person has been using work fine in a video editing app but do not work in the conferencing app. What should a support agent do first to attempt to get the two devices working in the conferencing app?",
      options: [
        "Check the conferencing app’s audio device settings.",
        "Ensure Bluetooth is working on the devices and in the app.",
        "Reset the microphone and headphones on the device.",
        "Find a different conferencing app."
      ],
      answer: 0,
      explanation: [
        "The support agent should check the conferencing app’s audio settings for devices.",
        "Bluetooth works on devices, not apps.",
        "Resetting the microphone and headphones is not likely to solve the issue.",
        "Finding a different conferencing app might not be possible and should not be a go-to solution in this case."
      ]
    },
    // 17
    {
      type: "multi",
      pick: 2,
      prompt: "A person cannot get the internal camera on the laptop to work in any meeting app. What should a technician check for first when troubleshooting the webcam? (Choose two)",
      options: [
        "Ensure a switch to block camera access is not enabled.",
        "Plug in an external camera.",
        "Ensure camera access is enabled on each app that needs to use the camera.",
        "Ensure camera access is enabled on the device."
      ],
      answer: [0, 3],
      explanation: [
        "The first two steps a support person should take to troubleshoot an internal camera are to ensure that camera access is enabled on the device, and that there is not a switch on the side of the laptop that is enabled to block camera access. There could also be a slide cover protecting the camera lens from dirt and damage, and for privacy concerns.",
        "Checking each app for camera settings would be the next step to take.",
        "Plugging in an external camera is a last resort in this instance."
      ]
    },
    // 18
    {
      type: "single",
      prompt: "An employee with a tablet is reporting they have to tap slightly lower and to the left of a spot on the screen to get the tap to work. What should a technician do first to solve the problem?",
      options: [
        "Send the device back to the manufacturer for a screen repair.",
        "Use a calibration app on the device.",
        "Reset the device.",
        "Restart the device."
      ],
      answer: 1,
      explanation: [
        "When someone needs to tap a spot that is not directly on a hotspot on a tablet screen, the screen needs to be recalibrated, which is usually done through an app that can be installed on the tablet.",
        "Restarting the device rarely solves the problem.",
        "Resetting the device also does not often solve the problem.",
        "This problem is rarely severe enough to warrant sending a tablet back to its manufacturer for repair."
      ]
    },
    // 19
    {
      type: "single",
      prompt: "What is the main purpose of DNS on a company network?",
      options: [
        "Process outgoing email from devices on a network.",
        "Map people to network shares.",
        "Assign IP addresses to devices.",
        "Resolve hostnames to IP addresses."
      ],
      answer: 3,
      explanation: [
        "Domain Name Server (DNS) has many purposes, but its main purpose is to resolve hostnames to IP addresses.",
        "Dynamic Host Configuration Protocol (DHCP) assigns IP addresses to devices.",
        "Server Message Block (SMB) is used for network shares.",
        "Simple Mail Transfer Protocol (SMTP) is used for outgoing email."
      ]
    },
    // 20
    {
      type: "yesno",
      prompt: "For each statement regarding IPv6 addressing, indicate Yes if the statement is true and No if the statement is false.",
      rows: [
        { text: "DHCPv6 is used to assign IPv6 addresses to devices.", answer: true },
        { text: "An IPv6 address that starts with 2000 is a global address.", answer: true },
        { text: "An IPv6 address that starts with FE80 is a link-local address.", answer: true },
        { text: "An IPv6 address that starts with 3000 is a link-local address.", answer: false }
      ],
      explanation: [
        "True Statements:",
        "DHCPv6 is used to assign IPv6 addresses to devices.",
        "An IPv6 address that starts with 2000 is a global address.",
        "An IPv6 address that starts with FE80 is a link-local address.",
        "False Statement:",
        "An IPv6 address that starts with 3000 is a link-local address.",
        "Explanation:",
        "An IPv6 address that starts with 3000 is a global address."
      ]
    },
    // 21
    {
      type: "match",
      prompt: "Using drag and drop, match each command to its use in finding IP address-related information. Not every option will be used.",
      terms: ["tracert", "traceroute", "ping", "ifconfig", "ipconfig", "ping6"],
      pairs: [
        { definition: "A Windows command used to obtain IP address information on a device.", answer: "ipconfig" },
        { definition: "A Linux command used to obtain IP address information on a device.", answer: "ifconfig" },
        { definition: "A Linux command used to see how a network packet gets from a source to a destination.", answer: "traceroute" },
        { definition: "A Windows command used to see how a network packet gets from a source to a destination.", answer: "tracert" }
      ],
      explanation: [
        "ipconfig is a Windows command used to obtain IP address information on a device.",
        "ifconfig is a Linux command used to obtain IP address information on a device.",
        "traceroute is a Linux command used to see how a network packet gets from a source to a destination.",
        "tracert is a Windows command used to see how a network packet gets from a source to a destination.",
        "ping and ping6 are commands used to see if an IPv4 or IPv6 destination is reachable."
      ]
    },
    // 22
    {
      type: "single",
      prompt: "An IT team suspects that some ports that should not be open are on some devices. Which command should support agents use to see which ports on a device are open?",
      options: ["netstat", "ping", "nslookup", "net"],
      answer: 0,
      explanation: [
        "netstat has many uses, one of which is that it returns open ports (active and listening by default) on a device.",
        "nslookup is used to find DNS server addresses.",
        "ping is used to test connectivity from one device to another.",
        "net is used to analyze and configure account and network settings on a device."
      ]
    },
    // 23
    {
      type: "yesno",
      prompt: "For each statement regarding iproute2, indicate Yes if the statement is true and No if the statement is false.",
      rows: [
        { text: "iproute2 is a collection of utilities used on Linux devices.", answer: true },
        { text: "The ip command allows one to add an IP address to a network interface.", answer: true },
        { text: "The ss command is used to configure SSL on a device.", answer: false }
      ],
      explanation: [
        "True statements:",
        "iproute2 is a collection of utilities used on Linux devices.",
        "The ip command allows one to add an IP address to a network interface.",
        "False statements:",
        "The ss command is used to configure SSL on a device.",
        "Explanation:",
        "The ss command is used to display socket information."
      ]
    },
    // 24
    {
      type: "single",
      prompt: "An employee using an app obtained from the Microsoft Store reports that the app is continually freezing. What should a support agent do first to resolve the problem?",
      options: [
        "Wait for an automatic app update.",
        "Check the Store for a possible app update.",
        "Restart the device.",
        "Uninstall and reinstall the app."
      ],
      answer: 1,
      explanation: [
        "When an app continually freezes, a support agent should first check for a possible app update.",
        "Not all apps from the Microsoft Store update automatically.",
        "Restarting the device is unlikely to solve the problem.",
        "Uninstalling and reinstalling the app will put a new version of the app on the device, but this step takes longer than just looking for an app update."
      ]
    },
    // 25
    {
      type: "match",
      prompt: "Using drag and drop, match each macOS utility or feature with its main purpose.",
      terms: ["Siri", "AirDrop", "Time Machine", "VoiceOver"],
      pairs: [
        { definition: "Used to back up data to a network drive or external drive.", answer: "Time Machine" },
        { definition: "Allows devices to share files directly with each other.", answer: "AirDrop" },
        { definition: "Accessibility feature that is a screen reader.", answer: "VoiceOver" },
        { definition: "An accessibility tool that performs tasks based on voice commands.", answer: "Siri" }
      ],
      explanation: [
        "AirDrop is used to allow devices to share files without the need for a wired or wireless access point connection.",
        "Time Machine is used to back up data to an external or network drive.",
        "VoiceOver provides spoken descriptions of text displayed on a screen.",
        "Siri performs activities based on a person’s voice commands."
      ]
    },
    // 26
    {
      type: "single",
      prompt: "An employee with partial vision impairment needs to use a magnifier on occasion to read text on a computer screen. Which Windows setting should one access to turn on and configure the Magnifier feature?",
      options: ["Accessibility", "Accounts", "System", "Personalization"],
      answer: 0,
      explanation: [
        "In Windows settings, the Magnifier is located in the Accessibility settings.",
        "The System area contains system information.",
        "The Personalization area controls the overall colors, themes, fonts, and taskbar behaviors within Windows.",
        "The Accounts area controls user accounts but not their customized settings, such as accessibility settings."
      ]
    },
    // 27
    {
      type: "single",
      prompt: "A customer using a Mac plugs in a USB drive, but it is not showing in Finder. What needs to be done to get the drive to appear?",
      options: [
        "Obtain a driver for the external drive.",
        "Mount the drive using Disk Utilities.",
        "Run the Rescan Disks task.",
        "Mount the drive using System Settings."
      ],
      answer: 1,
      explanation: [
        "For an external drive to show on a Mac, it needs to be mounted. Mounting a disk is done with the Disk Utilities feature under Utilities within Applications inside Finder.",
        "A driver for the external drive is not needed.",
        "The Rescan Disks feature is a Windows feature.",
        "The mount process is not located within System Settings."
      ]
    },
    // 28
    {
      type: "single",
      prompt: "Which Mac utility is used to terminate a process?",
      options: ["Time Machine", "Task Manager", "Kill", "Activity Monitor"],
      answer: 3,
      explanation: [
        "Activity Monitor is used to terminate processes on a Mac.",
        "Task Manager is used to terminate processes in Windows.",
        "The Kill command is used to terminate processes in Linux.",
        "Time Machine is a backup utility on a Mac."
      ]
    },
    // 29
    {
      type: "multi",
      pick: 2,
      prompt: "An employee claims a mobile phone is not charging despite having the charging cable plugged into the phone for an adequate amount of time. What should a technician do first to try to solve the problem? (Choose two)",
      options: [
        "Check to make sure the charging cable is not faulty.",
        "Check to ensure the charging port is not cracked.",
        "Check to see if many apps are running on the device.",
        "Check to see if the device’s operating system has recently been updated."
      ],
      answer: [0, 1],
      explanation: [
        "If a mobile phone is not charging, the two most common problems are a faulty cable or a crack or break in the port that holds a charging cable.",
        "Having a lot of apps run on a device will make its battery drain faster but rarely causes a device not to charge.",
        "A device update rarely will cause that device not to charge."
      ]
    },
    // 30
    {
      type: "single",
      prompt: "An employee states that a mobile app on their device is freezing frequently. What should a support agent do first to attempt to resolve the issue?",
      options: [
        "Check for high memory or storage usage on the device.",
        "Uninstall and reinstall the app.",
        "Check for an available app update.",
        "Restart the device."
      ],
      answer: 2,
      explanation: [
        "If a mobile app is freezing frequently, a support agent should check to see if the app has been updated in the device’s app store, as a bug may have been addressed.",
        "If an update is unavailable, uninstalling and reinstalling the app may fix the problem.",
        "Restarting a device is not likely to stop an app from freezing.",
        "High memory or storage usage could cause an app to freeze. However, it should not be the first troubleshooting step to solve this problem."
      ]
    },
    // 31
    {
      type: "categorize",
      prompt: "Categorize each mobile operating system trait as either iOS or Android.",
      categories: ["iOS", "Android"],
      items: [
        { text: "Is an open-source operating system.", answer: "Android" },
        { text: "Uses the Play Store to distribute apps safely.", answer: "Android" },
        { text: "Is a closed-source operating system.", answer: "iOS" },
        { text: "Uses the App Store to distribute apps safely.", answer: "iOS" }
      ],
      explanation: [
        "The Play Store is home to apps for Android devices.",
        "The App Store is home to apps for iOS devices.",
        "Android is an open-source operating system, and thus variations of the OS exist on different brands and types of mobile devices.",
        "iOS is a closed-source operating system."
      ]
    },
    // 32
    {
      type: "match",
      prompt: "Using drag and drop, match each type of cloud infrastructure to a feature of that infrastructure.",
      terms: ["Virtual machines", "A web-based help desk app", "Container-based apps"],
      pairs: [
        { definition: "IaaS", answer: "Virtual machines" },
        { definition: "PaaS", answer: "Container-based apps" },
        { definition: "SaaS", answer: "A web-based help desk app" }
      ],
      explanation: [
        "Virtual machines are a part of Infrastructure as a Service (IaaS).",
        "A container-based app is part of Platform as a Service (PaaS).",
        "A web-based help desk app is part of Software as a Service (SaaS)."
      ]
    },
    // 33
    {
      type: "match",
      prompt: "Using drag and drop, match each threat with a characteristic of that threat.",
      terms: ["Spam", "Phishing", "Spoofing", "Malware"],
      pairs: [
        { definition: "An email soliciting username and password information.", answer: "Phishing" },
        { definition: "An email claiming to have deep discounts for computers.", answer: "Spam" },
        { definition: "A device set up with an IP address that falsely represents a server.", answer: "Spoofing" },
        { definition: "A virus that renames system folders on a computer’s hard drive.", answer: "Malware" }
      ],
      explanation: [
        "Phishing involves soliciting information, usually via email, such as trying to acquire username and password information.",
        "Malware is malicious software, which includes viruses, worms, and trojan horses.",
        "Spam is an email that mostly consists of unwanted advertisements.",
        "Spoofing involves a malicious actor impersonating a legitimate entity, such as a device set up with what appears to be a valid network IP address while it is stealing data."
      ]
    },
    // 34
    {
      type: "multi",
      pick: 2,
      prompt: "What activities make help desk technicians vulnerable to social engineering attacks? (Choose two)",
      options: [
        "Help desk agents could fall victim to spam.",
        "Help desk agents may be solicited for PII.",
        "Help desk agents could be asked for employee account information.",
        "Help desk agents might receive a phishing email asking for money."
      ],
      answer: [1, 2],
      explanation: [
        "Social engineering attacks on help desk agents include asking for employee information, such as usernames and passwords.",
        "Help desk agents are often asked for Personally Identifiable Information (PII) from threat actors.",
        "A solicitation for money does not make help desk agents more vulnerable than others who see the same invitation.",
        "Spam is not always a phishing attempt, so help desk agents are no more vulnerable to spam than other employees."
      ]
    },
    // 35
    {
      type: "categorize",
      prompt: "Categorize each remote access tool as working on Windows, MacOS, or both.",
      categories: ["Windows", "MacOS", "Windows and macOS"],
      items: [
        { text: "Virtual Network Computing (VNC)", answer: "Windows and macOS" },
        { text: "Remote Desktop", answer: "Windows" },
        { text: "Screen Sharing", answer: "MacOS" }
      ],
      explanation: [
        "Remote Desktop is a Windows tool used to control Windows devices remotely.",
        "Screen Sharing is a macOS tool used to control Macs remotely.",
        "Virtual Network Computing (VNC) is an open-source tool used to control devices with different operating systems, including Windows, Macs, and Linux devices."
      ]
    },
    // 36
    {
      type: "single",
      prompt: "A company is starting to use AI to become more efficient in IT-related processes. What is a known limitation of using AI for troubleshooting purposes?",
      options: [
        "AI does not provide opportunities for follow-up questions on topics.",
        "AI often is not up-to-date with the latest information on devices.",
        "AI does not provide specifications on devices.",
        "AI does not provide suggestions for troubleshooting issues."
      ],
      answer: 1,
      explanation: [
        "Artificial Intelligence (AI) is often used to help troubleshoot IT-related problems as an AI chat engine may offer suggestions for problems.",
        "However, date-sensitive information is often not up to date. Thus a help desk agent may not be seeing the latest updates to technology pieces being searched from a troubleshooting standpoint.",
        "AI chat engines often provide opportunities for follow-up questions on topics.",
        "AI chat engines often provide the latest specifications on hardware devices."
      ]
    },
    // 37
    {
      type: "single",
      prompt: "A person using a photo editing tool cannot produce the desired contrast on an image. As a support agent, you are tasked to help find a solution. What is the advantage of using search engine results to troubleshoot an IT-related problem with an industry-recognized software app?",
      options: [
        "Results allow for follow-up questions.",
        "Results allow for people to ask specific users about comments made about the issue.",
        "Results come directly from the company hosting the app.",
        "Results are generated from multiple sources."
      ],
      answer: 3,
      explanation: [
        "Search engines provide results from multiple sources, which can be helpful when trying to troubleshoot an app-related issue.",
        "AI chat engines provide one set of results but do allow for follow-up questions.",
        "Technical forums allow people to ask questions to other users on the app.",
        "Knowledge-based articles are helpful but are single-source-based as they are usually hosted by the company producing the app."
      ]
    }
  ]
};
