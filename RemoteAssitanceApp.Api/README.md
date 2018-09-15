# remoteassistance

Install nodeJs in linux server
    `sudo apt install nodejs`
Place the RemoteAssistanceApp.Api files in any linux folder. I used path /home/pi/code/nodeServer
Update linux IPTables to enable port 3000 using below command
    `iptables -A INPUT -p tcp --dport 300 -j ACCEPT`
    Verify firewall is updated using `iptables --list`

Run the node Web server
    `node hellonode.js`

In a separate command window, Now browse the page using IPAddress of the linux box under port 3000. For me it is http://192.168.1.4:3000
Send HTTPPOST request with a data, you will get success page in response, for any other request error page will be returned
    `curl http:/ -d "abc" -X POST http://127.0.0.1:3000`
