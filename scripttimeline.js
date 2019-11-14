let period = [
    {"name":"ราชวงศ์เซี่ย","start":"-2100"},
    {"name":"ราชวงศ์ซาง","start":"-1600"},
    {"name":"ราชวงศ์โจว","start":"-1045"},
    {"name":"ยุคเลียดก๊ก","start":"-256"},
    {"name":"ราชวงศ์ฉิน","start":"-221"},
    {"name":"ราชวงศ์ฮั่นตะวันตก","start":"-206"},
    {"name":"ราชวงศ์ซิน","start":"9"},
    {"name":"ราชวงศ์ฮั่นตะวันออก","start":"23"},
    {"name":"ยุคสามก๊ก","start":"220"},
    {"name":"ราชวงศ์จิ้นตะวันตก","start":"265"},
    {"name":"ราชวงศ์จิ้นตะวันออก","start":"317"},
    {"name":"ราชวงศ์เหนือใต้","start":"420"},
    {"name":"ราชวงศ์สุย","start":"581"},
    {"name":"ราชวงศ์ถัง","start":"618"},
    {"name":"ยุคสิบห้าราชวงศ์ สิบอาณาจักร","start":"907"},
    {"name":"ราชวงศ์ซ่ง","start":"960"},
    {"name":"ราชวงศ์หยวน","start":"1279"},
    {"name":"ราชวงศ์หมิง","start":"1368"},
    {"name":"ราชวงศ์ชิง","start":"1644"},
    {"name":"ยุคสาธารณรัฐจีน","start":"1912"},
    {"name":"ยุคสาธารณรัฐประชาชนจีน","start":"1949"}
];

let lastpos = 5;
for (let i = 1; i <= period.length; i++) {
    if (i == 1) {
        document.getElementById("period"+i).style.top = lastpos+"vh";
    } 
    else {
        let bigger = parseInt(period[i-1].start);
        let smaller = parseInt(period[i-2].start);
        let distance = (bigger-smaller)/8;
        let newDiv = document.createElement("div");
        let newId = document.createAttribute("id");
        let newStyle = document.createAttribute("style");
        newId.value = "timeline"+(i-1);
        newStyle.value = "position:absolute;top:"+lastpos+"vh;height:"+distance+"vh;width:100%;transition:1s";
        newDiv.setAttributeNode(newId);
        newDiv.setAttributeNode(newStyle);
        document.getElementById("timeline").appendChild(newDiv);

        lastpos = lastpos+distance;
        document.getElementById("period"+i).style.top = lastpos+"vh";
        
    }
}
        let newDiv = document.createElement("div");
        let newId = document.createAttribute("id");
        let newStyle = document.createAttribute("style");
        newId.value = "timeline21";
        newStyle.value = "position:absolute;top:"+lastpos+"vh;height:"+40+"vh;width:100%;transition:1s";
        newDiv.setAttributeNode(newId);
        newDiv.setAttributeNode(newStyle);
        document.getElementById("timeline").appendChild(newDiv);

let isOpen = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
function openDescription(n) {
    if (isOpen[n-1] == 0) {
        document.getElementById("description"+n).style.height = "30vh";
        if (screen.width <= 768){
            document.getElementById("description"+n).style.fontSize = "1.8vh";
            document.getElementById("desbutton"+n).style.fontSize = "2vh";
            document.getElementById("desbutton"+n).style.paddingTop = "6%";
        }
        else{
            document.getElementById("description"+n).style.fontSize = "2.5vh";
            document.getElementById("desbutton"+n).style.fontSize = "3vh";
            document.getElementById("desbutton"+n).style.paddingTop = "1%";
        }
        document.getElementById("description"+n).style.border = "3px solid rgb(253, 176, 10)";
        document.getElementById("description"+n).style.zIndex = "3";
        document.getElementById("timeline"+n).style.backgroundColor = "rgb(255, 8, 0, 0.7)";
        document.getElementById("topic"+n).style.backgroundColor = "rgb(255, 243, 176)";
        if (n%2==1) {
            document.getElementById("topic"+n).style.boxShadow = "5px 5px 5px rgb(253, 176, 10)";
        }
        else{
            document.getElementById("topic"+n).style.boxShadow = "-5px 5px 5px rgb(253, 176, 10)";
        }
        isOpen[n-1] = 1;
    } else {
        document.getElementById("description"+n).style.height = "0";
        document.getElementById("description"+n).style.fontSize = "0";
        document.getElementById("description"+n).style.padding = "0";
        document.getElementById("description"+n).style.border = "0px solid rgb(253, 176, 10)";
        document.getElementById("description"+n).style.zIndex = "2";
        document.getElementById("desbutton"+n).style.fontSize = "0vh";
        document.getElementById("desbutton"+n).style.paddingTop = "0%";
        document.getElementById("timeline"+n).style.backgroundColor = "transparent";
        document.getElementById("topic"+n).removeAttribute("style");
        isOpen[n-1] = 0;
    }
}