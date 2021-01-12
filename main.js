"use strict"

/*let str = "";
document.body.onclick = function (e) {
	str+=Math.round(e.clientX)+","+Math.round(e.clientY)+" ";
	console.log(str);
}*/

let info = {
	A3: "basically a motorway, direct to Ella, all the way into London, very few speed cameras and they are clearly marked",
	M3: "nice services, large part is not smart with no cameras",
	M2: "short stretch of the A2 that is non-smart motorway",
	M26: "connects M25 to M20 but is better than them both, only 2 lanes, no cameras, feels like an A road",
	M275: "short 'motorway' through Portsmouth for taking ferries etc. 60 limit but has a nice feel to it",
	A23: "basically a motorway, not many speed cameras, fastest route to the south cost",
	A27: "very fast road along the south coast",
	A20: "short, connects M20 to Dover, really nice view of the cliffs",
	A2: "continution of M2 on both sides, London side its basically a motorway with less cameras, Dover side its fast",
	A31: "not very useful, nice views, fun and fast",
	A299: "connects M2 to Margate, very fast, not many cameras",
	A249: "only way onto the Isle of Sheppey, fast, cool bridge, necessary, goes to a 'cool'? place",
	A256: "fast road connecting Dover to Margate",
	A2070: "very fast road connecting the M20 to the south coast avoiding Folkestone",
	A331: "fairly short, connects M3 to A31, very fast",
	M23: "basically the most average motorway possible, smart so it has too many speed cameras",
	M25: "smart motorway with way too many cameras, however it is very useful",
	A21: "fast road to Hastings but kinda useless destination",
	A24: "easy to get to, feels like a nice A road, not really useful but kinda fun",
	M20: "used to be a good motorway but since Operation Brock it is now a 50 with only 2 lanes and no hard shoulder",
	A217: "useful but 40 with averge speed check",
	A240: "slightly less useful than A217, also 40 with averge speed check",
	A243: "kinda nice but useless since it just cuts a small corner between M25 and A3 so I never use it",
	A22: "kinda nice but useless becuse its faster to take the A23 or A21",
	A272: "quite a cool road like a central version of the A27 however it is too slow",
	M271: "completely pointless motoway that you could walk",
	A2011: "alterntive to M23, therfore pointless but its not a bad road",
	A264: "connects M23 to A24 and A22, nothing really good about it but it gets you to Horsham... if you wanna get to Horsham...?",
	A29: "2 digit A road that's not a primary route... just why?, kinda fun and an alterntive route to Ella's but its quite slow",
	A28: "pointless because A299 is faster but it's not a bad road",
	A259: "continuation of A27 from Eastbourne to Dover, not as good as A27",
	A283: "pointless, cuts a corner from the A24 towards Brighton... not that that is something necessary",
	A280: "even more pointless than B283, cuts an even smaller corner from the A24 towards Portsmouth... idk why...?",
	A228: "pointless bypass of the A26, nicer than the A26 but makes no sense and is unnecessary",
	A229: "slow random road in the middle of nowhere",
	A26: "feels very Londony even though its not in London, not easy to get to, would never use it",
	A25: "completely pointless, much slower and more stressful version of the M25",
	M27: "upgrading to smart motorway, its a 50 the whole way, even when that's done it will be a smart motorway",
	A232: "Sutton to Croydon, city road, stressful, no",
	A201: "very short stretch of road connecting A2 and A3, Central London so obviously not nice but at least it's short",
	A205: "South Circular, Central London road, very slow and extremely stressful, just no",
	A214: "weird road just outside the South Circular only between the A3 and A23, absoloutely no need for it, not even a good road",
	A202: "inside the South Circular, very central London, extreme stress and slow, never use this road.",
}

let roads = document.getElementsByTagName("polyline");
for (let i = 0; i < roads.length; i++) {
	roads[i].onclick = function () {
		document.getElementById("header").innerHTML = "<br>"+roads[i].id;
		document.getElementById("text").innerHTML = "<br>"+info[roads[i].id];
	}
}

document.getElementById("ranked").onclick = function () {
	let arr = Object.keys(info);
	let r = 0;
	let g = 255;
	for (let i = 0; i < arr.length; i++) {
		document.getElementById(arr[i]).style.stroke = "rgb("+r+","+g+", 0)"
		if (i <= 21) {
			r += 13;
		}
		else {
			g -= 13;
		}
	}
}
