//Returns the card styling for a card depending on the bee name
export function updateCardBackground(beeName){
    //Check if the given name is in bees
    beeName = beeName.toLowerCase()
    beeName = beeName.split(" ")[0];
    let styleString = "";
    let isvalidBeeName = false;
    for(let key in bees){
      if(key === beeName){
        isvalidBeeName = true;
      }
    }
    if(isvalidBeeName){
      const rarities = ["common", "rare", "epic", "legendary", "mythic", "event"];
      const rarityColor = ["", "#ffffff", "#FCDB09", "#00EAFF", "#a8a4ec", "#77e278"];
      let gradientColor1 = "";
      for(let i = 0; i < rarities.length;i++){
        if(rarities[i] === bees[beeName].rarity){
          gradientColor1 = rarityColor[i];
        }
      }
      if(gradientColor1 !== ""){
        styleString = "linear-gradient(" + gradientColor1 + "," + bees[beeName].color + ")";
      }
    }
    return styleString;
  };
//Keeper Title style fucntion like the cardBG
export function updateBearBackground(bear){
    //Check if the given name is in bees
    if(bear === "assets/bears/01.png"){
        return "linear-gradient(" + "#3D4144" + "," + "#555D64" + ");color:white";
    }
    else if(bear === "assets/bears/02.png"){
        return "linear-gradient(" + "#AC7D45" + "," + "#977042" + ")";
    }
    else if(bear === "assets/bears/03.png"){
        return "linear-gradient(" + "#E2A4F9" + "," + "#1EFFA8" + ")";
    }
    else if(bear === "assets/bears/04.png"){
        return "linear-gradient(to bottom, #EFEEEA 30%, #2E2E2F);";
    }
    else if(bear === "assets/bears/05.png"){
        return "linear-gradient(" + "#EFEEEA" + "," + "#D9D9D7" + ")";
    }
    else if(bear === "assets/bears/06.png"){
        return "linear-gradient(" + "#D5921E" + "," + "#AC8238" + ")";
    }
    else if(bear === "assets/bears/07.png"){
        return "linear-gradient(" + "#CAC8B9" + "," + "#E4CEE8" + ")";
    }
    else{
        return "";
    }
};
export function updateSubmissionBackground(hiveteam){
    //Check if the given name is in bees
    if(hiveteam == "Red"){
        return "background-image: radial-gradient( #ffffffff, #e73232ff);";
    }
    else if(hiveteam == "Blue"){
        return "background-image: radial-gradient( #ffffffff, #3268e7ff);";
    }
    else if(hiveteam == "White"){
        return "background-image: radial-gradient( #ffffffff, #cdcdcdff );";
    }
    else if(hiveteam == "Mixed"){
        return "background-image: radial-gradient( #ffffffff, #cc5d01 );";
    }
    else{
        return "";
    }
};
//OBJECT CREATION
const bees = {
    baby:{rarity:"legendary", color:"blue"},
    basic:{rarity: "common", color:"white"},
    bear:{rarity:"event", color:"white"},
    bomber:{rarity:"rare", color:"white"},
    brave:{rarity:"rare", color:"white"},
    bubble:{rarity:"epic", color:"blue"},
    bucko:{rarity:"epic", color:"blue"},
    bumble:{rarity:"rare", color:"blue"},
    buoyant:{rarity:"mythic", color:"blue"},
    carpenter:{rarity:"legendary", color:"white"},
    cobalt:{rarity:"event", color:"blue"},
    commander:{rarity:"epic", color:"white"},
    cool:{rarity:"rare", color:"blue"},
    crimson:{rarity:"event", color:"red"},
    demo:{rarity:"epic", color:"white"},
    demon:{rarity:"legendary", color:"red"},
    diamond:{rarity:"legendary", color:"blue"},
    digital:{rarity:"event", color:"white"},
    exhausted:{rarity:"epic", color:"white"},
    festive:{rarity:"event", color:"red"},
    fire:{rarity:"epic", color:"red"},
    frosty:{rarity:"epic", color:"blue"},
    fuzzy:{rarity:"mythic", color:"white"},
    gummy:{rarity:"event", color:"white"},
    hasty:{rarity:"rare", color:"white"},
    honey:{rarity:"epic", color:"white"},
    lion:{rarity:"legendary", color:"white"},
    looker:{rarity:"rare", color:"white"},
    music:{rarity:"legendary", color:"white"},
    ninja:{rarity:"legendary", color:"blue"},
    photon:{rarity:"event", color:"white"},
    precise:{rarity:"mythic", color:"red"},
    puppy:{rarity:"event", color:"white"},
    rad:{rarity:"rare", color:"red"},
    rage:{rarity:"epic", color:"red"},
    rascal:{rarity:"rare", color:"red"},
    riley:{rarity:"epic", color:"red"},
    shocked:{rarity:"epic", color:"white"},
    shy:{rarity:"legendary", color:"red"},
    spicy:{rarity:"mythic", color:"red"},
    stubborn:{rarity:"rare", color:"white"},
    tabby:{rarity:"event", color:"white"},
    tadpole:{rarity:"mythic", color:"blue"},
    vector:{rarity:"mythic", color:"white"},
    vicious:{rarity:"event", color:"blue"},
    windy:{rarity:"event", color:"white"},
};