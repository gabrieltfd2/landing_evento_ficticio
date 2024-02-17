const e=new Date("May 02, 2024 19:00:00").getTime();setInterval(function(){let t=e-new Date().getTime();document.getElementById("contador").innerHTML=`${Math.floor(t/864e5)}d ${Math.floor(t%864e5/36e5)}h ${Math.floor(t%36e5/6e4)}m ${Math.floor(t%6e4/1e3)}s`},1e3);
//# sourceMappingURL=index.0785a326.js.map
