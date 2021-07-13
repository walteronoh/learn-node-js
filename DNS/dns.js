//DNS module contains methods to get information of given hostname.
//DNS module does not always use DNS protocal for lookups.

//For more dns, visit: https://nodejs.org/api/dns.html#dns_dns_lookupservice_address_port_callback

const dns=require("dns");
const url="www.google.com";

//dns.lookup resolves a hostname into into ipv4 or ipv6 address
dns.lookup(url,(err,address,family)=>{
    console.log("Addresses using lookup",address);
    console.log("Family",family);
    console.log(err);
});

//dns.resolve4 uses the DNS protocol to resolve ipv4 addresses
dns.resolve4(url,(err,addresses)=>{
    console.log("Address using resolve4",addresses);
    console.log(err);
});

//dns.resolve6 uses the DNS protocol to resolve ipv6 addresses
dns.resolve6(url,(err,addresses)=>{
    console.log("Address using resolve6",addresses);
    console.log(err);
});

//dns.reverse performs a reverse DNS query that resolves an ipv4 or ipv6
dns.reverse('216.58.223.68',(err,hostnames)=>{
    console.log("Reverse DNS query for '216.58.223.68': ", hostnames);
    console.log(err);
});

//dns.lookupService resolves the given address and port into a hostname and service.
dns.lookupService('127.0.0.1',22,(err,hostname,service)=>{
    console.log("LookupService :", hostname,);
    console.log("Service :", service);
})