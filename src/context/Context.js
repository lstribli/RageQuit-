import React from 'react'

const Context = React.createContext({
  mods: [
    {
      id: 1,
      title: "AbsolutSorter",
      description: "Opening an approved container like a Large Wooden Box will show options for sorting! Set it up right and never sort manually again. Paid Plugin!",
      screenshot: "https://i.imgur.com/5JtKdmC.png",
      hyperlink: "https://www.chaoscode.io/",
      command: "No command needed, it's automatic"
    },
    {
      id: 2,
      title: "AlphaLoot",
      description: "Loot tables for the server brought to you by this awesome loot plugin. Paid Plugin!",
      screenshot: "https://www.chaoscode.io/data/resource_icons/0/13.jpg",
      hyperlink: "https://www.chaoscode.io/resources/alphaloot.13/",
      command: "No command needed, it's automatic"
    },
    {
      id: 3,
      title: "AutoDoors",
      description: "Doors can be configured and  automatically close after 5 seconds if command is enabled.",
      screenshot: "https://assets.umod.org/images/icons/plugin/5c4d3c4f674bb.png",
      hyperlink: "https://umod.org/plugins/auto-doors",
      command: "Type /autodoor to enable or diable the autodoor feature."
    },
    {
      id: 4,
      title: "AutoFuel",
      description: "Automatically fuels lights and furnaces using fuel or wood from the tool cupboard's inventory, make sure to turn stuff off if you dont want to lose your wood!",
      screenshot: " https://assets.umod.org/images/icons/plugin/5b57e1d5674fa.png",
      hyperlink: "https://umod.org/plugins/auto-fuel",
      command: "No command needed, it's automatic"
    },
    {
      id: 5,
      title: "ClansREBORN",
      description: "The improved version of the Clans plugin allows many upgrades to the original like integrated friendly fire. Paid Plugin!",
      screenshot: "https://www.chaoscode.io/data/resource_icons/0/14.jpg",
      hyperlink: "https://www.chaoscode.io/resources/clans-reborn.14/",
      command: "type /clanhelp to set up your clan. Remember MAXIMUM of 3 people per clan! This is punishable!"
    },
    {
      id: 6,
      title: "CraftingController",
      description: "Increased crafting time, cut in half from what is standard in vanilla.",
      screenshot: "https://assets.umod.org/images/icons/plugin/5b6772171d3dc.jpg",
      hyperlink: "https://umod.org/plugins/crafting-controller",
      command: "No command needed, it's automatic"
    },
    {
      id: 7,
      title: "CustomDecay",
      description: "Decay reduced to only require 20 percent of the normal amount of resources, very relaxed!",
      screenshot: "https://assets.umod.org/images/icons/plugin/5b67764b324d5.jpg",
      hyperlink: "https://umod.org/plugins/custom-decay",
      command: "No command needed, it's automatic"
    },
    {
      id: 8,
      title: "DynamicCupShare",
      description: "Full dynamic sharing system for Cups|Doors|Boxes|Turrets for Clans",
      screenshot: "https://www.chaoscode.io/data/resource_icons/0/20.jpg",
      hyperlink: "https://www.chaoscode.io/resources/dynamiccupshare.20/",
      command: "/share to configure your share settings! Clan will have auto authorization and be able to automatically open any of your codelocks and your turrets and TC. Be Careful who you tRust to be in your clan..."
    },
    {
      id: 9,
      title: "FurnaceSplitter",
      description: "Splits up ores into equal stacks when you put them into furnaces",
      screenshot: "https://assets.umod.org/images/icons/plugin/5d60230520052.png",
      hyperlink: "https://umod.org/plugins/furnace-splitter",
      command: "No command needed, it's automatic"
    },
    {
      id: 10,
      title: "HitIcon",
      description: "Grants ability toggle on and off hit markers",
      screenshot: "https://assets.umod.org/images/icons/plugin/5ed86fe9d5432.png",
      hyperlink: "https://umod.org/plugins/hit-icon",
      command: "type /hit to disable or enable hit markers."
    },
    {
      id: 11,
      title: "MyMiniCoptor",
      description: "A simple plugin to spawn a mini copter for yourself. Limits to one mini copter per player with cooldown.",
      screenshot: "https://remod.org/sites/default/files/inline-images/mincopter.jpg",
      hyperlink: "https://remod.org/myminicopter",
      command: "type /mymini to spawn yourself a Minicopter with .25 fuel drain and no decay!"
    },
    {
      id: 12,
      title: "Pets",
      description: "Gives players the ability to tame and have pets. They will follow you and you can even use them to fight.",
      screenshot: "https://assets.umod.org/images/icons/plugin/5b63be4e0e80e.jpg",
      hyperlink: "https://umod.org/plugins/pets",
      command: "type /pet help for all the pet commands. Wolves, Boars, and Chickens can be pets."
    },
    {
      id: 13,
      title: "PlayerChallenges",
      description: "Allows titles to be set when certain criteria are met, with a UI Leader board.",
      screenshot: "https://assets.umod.org/images/icons/plugin/5b63be6b063f3.jpg",
      hyperlink: "https://umod.org/plugins/player-challenges",
      command: "type /pc to open up the leaderboard and see where you fall amongst other Ragers! Awards titles on highscore and resets monthly."
    },
    {
      id: 14,
      title: "PlayerSkins",
      description: "PlayerSkins allows players to get tons of crazy workshop skins for items. They can then apply those skins to their items using the 'Reskin' menu. Paid Plugin!",
      screenshot: "https://secure.gravatar.com/avatar/8b5a0a4bea3cfe13a10670b0e1a7717a?s=300&d=retro",
      hyperlink: "https://www.chaoscode.io/resources/playerskins.33/",
      command: "type /skin shop to open up the awesome skin shop GUI. Bask in its greatness as you pick skins for any and every item a skin is available for. You are evrn free to reskin any item  whenever you want. Simply old the item and type /skin to apply!"
    },
    {
      id: 15,
      title: "SignArtist",
      description: "Load custom images to signs from a remote URL. Imgur works best and is free!",
      screenshot: "https://assets.umod.org/images/icons/plugin/5b6774e6e22df.jpg",
      hyperlink: "https://umod.org/plugins/sign-artist",
      command: "type /sil URL where URL should be the link to an image. The free image hosting site Imgur works great. Just be sure to right click the image and open it in its own tab before you copy its URL"
    },
    {
      id: 16,
      title: "SpotSystem",
      description: "Spot enemies while holding a gun and pressing E, will mark their location to you and your team mates!",
      screenshot: "https://www.chaoscode.io/data/resource_icons/0/141.jpg",
      hyperlink: "https://www.chaoscode.io/resources/spot-system.141/",
      command: "Hold any weapon that can aim and aim at an enemy player or NPC and mark them from long distance. A red GUI X will appear on the players location at that time and will show it to your teammates as well. Very useful for coordination and tactics."
    },
    {
      id: 17,
      title: "Trade",
      description: "Allows players to trade items safely at a distance",
      screenshot: "https://assets.umod.org/images/icons/plugin/5c2ea1c3b10c2.png",
      hyperlink: "https://umod.org/plugins/trade",
      command: "type /trade playername to initiate a trade with that player. Make sure both players stay still and dont move while doing a trade or it will be canceled!"
    },
    {
      id: 18,
      title: "Trains",
      description: "Trains run the distance of the map, ready to take you where you need to go. Paid Plugin!",
      screenshot: "https://www.chaoscode.io/data/resource_icons/0/162.jpg",
      hyperlink: "https://www.chaoscode.io/resources/trains.162/",
      command: "No command needed, it's automatic"
    },
    {
      id: 15,
      title: "TrophySigns",
      description: "Collect human skulls and mount them to signs and spears in your base.",
      screenshot: "https://www.chaoscode.io/data/resource_icons/0/91.jpg",
      hyperlink: "https://www.chaoscode.io/resources/trophysigns.91/",
      command: "No command needed, it's automatic"
    },
    {
      id: 16,
      title: "ZLevelsRemastered",
      description: "Allows player to level up 5 different skills | Mining, Woodcutting, Crafting, Skinning, Aquire |",
      screenshot: "https://assets.umod.org/images/icons/plugin/5b676c4495365.jpg",
      hyperlink: "https://umod.org/plugins/zlevels-remastered",
      command: "No command needed, it's automatic"
    }
  ]
})


export default Context;