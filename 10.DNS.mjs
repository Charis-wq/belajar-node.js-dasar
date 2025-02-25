/*DNS merupakan standardt liberary yang bisa di gunakan untuk bekerja dengan DNS (domain name server) */

import dns from "dns/promises";
import { hostname } from "os";

const address = await dns.lookup("www.unsplash.com");

console.log(address);
console.log(address.address);
console.log(address.family);