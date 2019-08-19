/*
 * OwO Bot for Discord
 * Copyright (C) 2019 Christopher Thai
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */

const PageClass = require('./../PageClass.js');

const rings = require('../../../../json/rings.json');

module.exports = class RingPage extends PageClass {

    constructor(p){
		super(p);
		this.id = 1;
	}

	async totalPages(){
		return 1;
	}

	async getPage(page,embed){
		let result = "";
		for(let i in rings){
			let ring = rings[i];
			let price = this.p.global.toShortNum(ring.price);
			let cLength = this.charLen-ring.name.length+(4-(""+price).length);
			if(cLength<0) cLength = 0;
			result += "`"+ring.id+"` "+ring.emoji+" **`"+ring.name+" `**`"+("-".repeat(cLength))+" "+price+"` <:cowoncy:416043450337853441>\n";
		}

		embed.description =  "Purchase a ring to propose to someone!\nAll rings are the same. Different tiers are available to show off your love!\n- **`owo buy {id}`** to buy an item\n- **`owo sell {id}`** to sell an item for 75% of its original price\n- **`owo marry @user {id}`** to use the ring\n"+('═'.repeat(this.charLen+2))+"\n"+result;
		embed.author.name = "OwO Shop: Rings";

		return embed;
	}
}
