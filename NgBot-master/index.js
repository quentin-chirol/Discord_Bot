const Discord = require('discord.js');
const client = new Discord.Client();
const { start } = require('repl');
const prefix = process.env.PREFIX

client.on('ready',() =>{

   client.user.setActivity('ng.help | Creat by Heatcliff and TheKing');
   var textchanelle = client.channels.cache.find(channel => channel.id === '413030124288606218');

    setInterval(function(){
        var date = new Date();
        var jour = date.getDay();
        var heure = date.getHours();
        var minutes = date.getMinutes();   

        //CARTE
        if(jour === 1){//tous les lundi a 8h Carte
            if(heure === 7){
                if(minutes === 59 ){
                    textchanelle.send("ng.carte")            
                }
            } 
        }
        //CARTE

        //ONU
        if(jour === 6){//tous les Samedis 17h samedi Onu
            if(heure === 13){
                if(minutes === 59){
                    textchanelle.send("ng.onu")            
                }
            } 
        }
        if(jour === 6){//tous les Samedis 17h samedi Onu
            if(heure === 14){
                if(minutes === 44){
                    textchanelle.send("ng.onu-tirage")            
                }
            } 
        }
        //ONU

        //OMC
        if(jour === 0){//tous les Dimanches 16h Dimanche OMC
            if(heure === 13){
                if(minutes === 59){
                    textchanelle.send("ng.omc-role")            
                }
            } 
        }
        if(jour === 0){//tous les Dimanches 17h Dimanche OMC
            if(heure === 14){
                if(minutes === 59){
                    textchanelle.send("ng.omc-rapelle")            
                }
            } 
        }
        //OMC

        //Candidature
        if(jour === 1){//tous les jour 17h Candidature (lundi)
            if(heure === 14){
                if(minutes === 59){
                    textchanelle.send("ng.candidature")            
                }
            } 
        }
        if(jour === 2){//tous les jour 17h Candidature (mardi)
            if(heure === 14){
                if(minutes === 59){
                    textchanelle.send("ng.candidature")            
                }
            } 
        }
        if(jour === 3){//tous les jour 17h Candidature (mercredi)
            if(heure === 14){
                if(minutes === 59){
                    textchanelle.send("ng.candidature")            
                }
            } 
        }
        if(jour === 4){//tous les jour 17h Candidature (jeudi)
            if(heure === 14){
                if(minutes === 59){
                    textchanelle.send("ng.candidature")            
                }
            } 
        }
        if(jour === 5){//tous les jour 17h Candidature (vendredi)
            if(heure === 14){
                if(minutes === 59){
                    textchanelle.send("ng.candidature")            
                }
            } 
        }
        if(jour === 6){//tous les jour 17h Candidature (samedie)
            if(heure === 14){
                if(minutes === 59){
                    textchanelle.send("ng.candidature")            
                }
            } 
        }
        if(jour === 0){ //tous les jour 17h Candidature (dimanche)
            if(heure === 14){
                if(minutes === 59){
                    textchanelle.send("ng.candidature")            
                }
            } 
        }
        //Candidature

        //PVPBOX
        if(jour === 1){ //tous les 17h sauf PvpBox (lundi)
            if(heure === 15){
                if(minutes === 59){
                    textchanelle.send("ng.pvp")            
                }
            } 
        }

        if(jour === 2){//tous les 17h sauf PvpBox (mardi)
            if(heure === 15){
                if(minutes === 59){
                    textchanelle.send("ng.pvp")            
                }
            } 
        }

        if(jour === 3){//tous les 17h sauf PvpBox (mecredi)
            if(heure === 14){
                if(minutes === 59){
                    textchanelle.send("ng.pvp")            
                }
            } 
        }

        if(jour === 4){//tous les 17h sauf PvpBox (jeudi)
            if(heure === 15){
                if(minutes === 59){
                    textchanelle.send("ng.pvp")            
                }
            } 
        }

        if(jour === 5){//tous les 17h sauf PvpBox (vendredi)
            if(heure === 15){
                if(minutes === 59){
                    textchanelle.send("ng.pvp")            
                }
            } 
        }

        if(jour === 0){//tous les 17h sauf PvpBox (vendredi)
            if(heure === 21){
                if(minutes === 59){
                    textchanelle.send("ng.reset.event")            
                }
            } 
        }
        //PVPBOX

    }, 60000);   
}); 

   //EVENT
   var kth = 0
   var epervier = 0
   var anvilfall = 0  
   var getdown = 0
   var ploof = 0
   var spleef = 0
   var hotblock = 0
   var pingpong = 0    
   var dancefloor = 0  
   var loupgarou = 0
   //EVENT 

var ticketg = 0
var ticketvalidation = 0

//MAISON
var jedi = 0
var sith = 0
var Mandalorien = 0
//MAISON

//LOTO
var myArray = []
//LOTO

client.on("message", message =>{

    //DATE
    var date = new Date();
    var jour = date.getDay();
    var heure = date.getHours();
    var minutes = date.getMinutes();
    var author = message.author
    //DATE

    if(!message.content.startsWith(prefix)) return;// Ne pas toucher

    let args = message.content// Ne pas toucher
    .slice(prefix.length)// Ne pas toucher
    .trim()// Ne pas toucher
    .split(/ +/g);// Ne pas toucher
    let command = args[0].toLowerCase();// Ne pas toucher
    args.shift();// Ne pas touche
   
   //Star Wars
    if(command === "point-war"){
        var list = new Discord.MessageEmbed()
        .setTitle("⚔️Guerre des étoiles⚔️")
        .setDescription(`
        <:babyyoda:754662101120712735>[<@&753356902959677610>]<:babyyoda:754662101120712735> possède ${jedi} points !
        <:darth_vader:754662510027866173>[<@&753356835720790147>]<:darth_vader:754662510027866173> possède ${sith} points !
        <:854772_boba_456x512:754665705961553962>[<@&753354756595908659>]<:854772_boba_456x512:754665705961553962> possède ${Mandalorien} points !
        `)
        .setColor("#0000FF")
        message.channel.send(list)
    }
    if( command === "j-add" ){
        if ((!message.member.roles.cache.find(r => r.name === "🤖 NG BLUE BOT 🤖")) && (!message.member.roles.cache.find(r => r.name === "👑 Administrateur 👑")) && (!message.member.roles.cache.find(r => r.name === "🔱 SuperModérateur 🔱"))) return message.channel.send("Vous n'avez pas les permissions d'effectuer les commandes");
        let [point, raison, joueur] = args;
        let = pointInt = Number.parseInt(point)
        jedi = pointInt + jedi
        var list = new Discord.MessageEmbed()
        .setTitle("<:babyyoda:754662101120712735> ***Give des Points*** <:babyyoda:754662101120712735>") 
        .setDescription(`
        ***<@&753356902959677610> vient de remporté +${point}!***
        raison: ${raison} 
        joueur: ${joueur} 
        ⚠️ L'attribition a été fait par ${author} ⚠️
        `)
        .setColor("#0000FF")
        message.channel.send(list)
        message.delete();
         
    }
    if( command === "j-remove" ){
        if ((!message.member.roles.cache.find(r => r.name === "🤖 NG BLUE BOT 🤖")) && (!message.member.roles.cache.find(r => r.name === "👑 Administrateur 👑")) && (!message.member.roles.cache.find(r => r.name === "🔱 SuperModérateur 🔱"))) return message.channel.send("Vous n'avez pas les permissions d'effectuer les commandes");
        let [point, raison, joueur] = args;
        let = pointInt = Number.parseInt(point)
        jedi =  jedi - pointInt 
        var list = new Discord.MessageEmbed()
        .setTitle("<:babyyoda:754662101120712735> ***Give des Points*** <:babyyoda:754662101120712735>") 
        .setDescription(`
        ***<@&753356902959677610> vient de remporté -${point}!***
        raison: ${raison} 
        joueur: ${joueur} 
        ⚠️ L'attribition a été fait par ${author} ⚠️
        `)
        .setColor("#0000FF")
        message.channel.send(list)
        message.delete();
         
    }
    if( command === "s-add" ){
        if ((!message.member.roles.cache.find(r => r.name === "🤖 NG BLUE BOT 🤖")) && (!message.member.roles.cache.find(r => r.name === "👑 Administrateur 👑")) && (!message.member.roles.cache.find(r => r.name === "🔱 SuperModérateur 🔱"))) return message.channel.send("Vous n'avez pas les permissions d'effectuer les commandes");
        let [point, raison, joueur] = args;
        let = pointInt = Number.parseInt(point)
        sith = pointInt + sith 
        var list = new Discord.MessageEmbed()
        .setTitle("<:darth_vader:754662510027866173> ***Give des Points*** <:darth_vader:754662510027866173>") 
        .setDescription(`
        ***<@&753356835720790147> vient de remporté +${point}!***
        raison: ${raison} 
        joueur: ${joueur} 
        ⚠️ L'attribition a été fait par ${author} ⚠️
        `)
        .setColor("#0000FF")
        message.channel.send(list)
        message.delete();
         
    }
    if( command === "s-remove" ){
        if ((!message.member.roles.cache.find(r => r.name === "🤖 NG BLUE BOT 🤖")) && (!message.member.roles.cache.find(r => r.name === "👑 Administrateur 👑")) && (!message.member.roles.cache.find(r => r.name === "🔱 SuperModérateur 🔱"))) return message.channel.send("Vous n'avez pas les permissions d'effectuer les commandes");
        let [point, raison, joueur] = args;
        let = pointInt = Number.parseInt(point)
        sith =  sith - pointInt 
        var list = new Discord.MessageEmbed()
        .setTitle("<:darth_vader:754662510027866173> ***Give des Points*** <:darth_vader:754662510027866173>") 
        .setDescription(`
        ***<@&753356835720790147> vient de remporté -${point}!***
        raison: ${raison} 
        joueur: ${joueur} 
        ⚠️ L'attribition a été fait par ${author} ⚠️
        `)
        .setColor("#0000FF")
        message.channel.send(list)
        message.delete();
         
    }
    if( command === "m-add" ){
        if ((!message.member.roles.cache.find(r => r.name === "🤖 NG BLUE BOT 🤖")) && (!message.member.roles.cache.find(r => r.name === "👑 Administrateur 👑")) && (!message.member.roles.cache.find(r => r.name === "🔱 SuperModérateur 🔱"))) return message.channel.send("Vous n'avez pas les permissions d'effectuer les commandes");
        let [point, raison, joueur] = args;
        let = pointInt = Number.parseInt(point)
        Mandalorien = pointInt + Mandalorien
        var list = new Discord.MessageEmbed()
        .setTitle("<:854772_boba_456x512:754665705961553962> ***Give des Points*** <:854772_boba_456x512:754665705961553962>") 
        .setDescription(`
        ***<@&753354756595908659> vient de remporté +${point}!***
        raison: ${raison} 
        joueur: ${joueur} 
        ⚠️ L'attribition a été fait par ${author} ⚠️
        `)
        .setColor("#0000FF")
        message.channel.send(list)
        message.delete();
         
    }
    if( command === "m-remove" ){
        if ((!message.member.roles.cache.find(r => r.name === "🤖 NG BLUE BOT 🤖")) && (!message.member.roles.cache.find(r => r.name === "👑 Administrateur 👑")) && (!message.member.roles.cache.find(r => r.name === "🔱 SuperModérateur 🔱"))) return message.channel.send("Vous n'avez pas les permissions d'effectuer les commandes");
        let [point, raison, joueur] = args;
        let = pointInt = Number.parseInt(point)
        Mandalorien =  Mandalorien - pointInt
        var list = new Discord.MessageEmbed()
        .setTitle("<:854772_boba_456x512:754665705961553962> ***Give des Points*** <:854772_boba_456x512:754665705961553962>") 
        .setDescription(`
        ***<@&753354756595908659> vient de remporté -${point}!***
        raison: ${raison} 
        joueur: ${joueur} 
        ⚠️ L'attribition a été fait par ${author} ⚠️
        `)
        .setColor("#0000FF")
        message.channel.send(list)
        message.delete();
         
    }
    if( command === "reset-point"){
       if ((!message.member.roles.cache.find(r => r.name === "🤖 NG BLUE BOT 🤖")) && (!message.member.roles.cache.find(r => r.name === "👑 Administrateur 👑"))) return message.channel.send("Vous n'avez pas les permissions d'effectuer les commandes");
        jedi = jedi - jedi
        Mandalorien = Mandalorien - Mandalorien
        sith = sith - sith
        message.channel.send(`Les points viennent d'étre reset`)
    }
    //Star Wars
   
   //ONU
    if( command === "onu" ){
        message.channel.send("<@&360095412775944193><@&360095608083578880>")
        if ((!message.member.roles.cache.find(r => r.name === "🤖 NG BLUE BOT 🤖")) && (!message.member.roles.cache.find(r => r.name === "👑 Administrateur 👑")) && (!message.member.roles.cache.find(r => r.name === "🔱 SuperModérateur 🔱") && (!message.member.roles.cache.find(r => r.name === "🌍 Modérateur+ 🌍")))) return message.channel.send("Vous n'avez pas les permissions d'effectuer les commandes");
        var list = new Discord.MessageEmbed()
        .setTitle("ONU")
        .setDescription(`
        Clique sur la reaction si tu veux tirée au sort pour l'onu
        ⛔Merci au guide de ne pas cliqué sur la raction⛔
        `)
        .setColor("#0000FF")
        message.channel.send(list).then(async msg =>{
            await msg.react("🏳️");
        });
        message.delete();  
    }
    if( command === "onu-tirage" ){
        const random = Math.floor(Math.random() * myArray.length);
        message.channel.send(`tu viens d'être selectionner pour fair modo assitant pour l'onu ${myArray[random]}`);
        myArray = myArray - myArray
        message.delete();  
    }
    //ONU

    //EVENT

    if( command === "event.loupgarou" ){
        if ((!message.member.roles.cache.find(r => r.name === "🤖 NG BLUE BOT 🤖")) && (!message.member.roles.cache.find(r => r.name === "👑 Administrateur 👑")) && (!message.member.roles.cache.find(r => r.name === "🔱 SuperModérateur 🔱") && (!message.member.roles.cache.find(r => r.name === "🌍 Modérateur+ 🌍")))) return message.channel.send("Vous n'avez pas les permissions d'effectuer les commandes");
        if ((loupgarou == 2)) return message.channel.send("L'événement est déja etait utilisé deux fois fait ng.event.list pour voir si il en reste !" ); {
        var list = new Discord.MessageEmbed()
        .setTitle("Event loupgarou")
        .setDescription(`
        ${author} vient de commencer un event loupgarou à ${heure + 2} heure ${minutes} minutes 
        `)
        .setColor("#0000FF")
        message.channel.send(list)
        loupgarou ++;
        message.delete();
        }   
    }

    if( command === "event.dancefloor" ){
        if ((!message.member.roles.cache.find(r => r.name === "🤖 NG BLUE BOT 🤖")) && (!message.member.roles.cache.find(r => r.name === "👑 Administrateur 👑")) && (!message.member.roles.cache.find(r => r.name === "🔱 SuperModérateur 🔱") && (!message.member.roles.cache.find(r => r.name === "🌍 Modérateur+ 🌍")))) return message.channel.send("Vous n'avez pas les permissions d'effectuer les commandes");
        if ((dancefloor == 2)) return message.channel.send("L'événement est déja etait utilisé deux fois fait ng.event.list pour voir si il en reste !" ); {
        var list = new Discord.MessageEmbed()
        .setTitle("Event dancefloor")
        .setDescription(`
        ${author} vient de commencer un event dancefloor à ${heure + 2} heure ${minutes} minutes 
        `)
        .setColor("#0000FF")
        message.channel.send(list)
        dancefloor ++;
        message.delete();
        }   
    }

    if( command === "event.kth" ){
        if ((!message.member.roles.cache.find(r => r.name === "🤖 NG BLUE BOT 🤖")) && (!message.member.roles.cache.find(r => r.name === "👑 Administrateur 👑")) && (!message.member.roles.cache.find(r => r.name === "🔱 SuperModérateur 🔱") && (!message.member.roles.cache.find(r => r.name === "🌍 Modérateur+ 🌍")))) return message.channel.send("Vous n'avez pas les permissions d'effectuer les commandes");
        if ((kth == 2)) return message.channel.send("L'événement est déja etait utilisé deux fois fait ng.event.list pour voir si il en reste !" ); {
        var list = new Discord.MessageEmbed()
        .setTitle("Event KTH")
        .setDescription(`
        ${author} vient de commencer un event KTH à ${heure + 2} heure ${minutes} minutes 
        `)
        .setColor("#0000FF")
        message.channel.send(list)
        kth ++;
        message.delete();
        }   
    } 
    
    if( command === "event.hotblock" ){
        if ((!message.member.roles.cache.find(r => r.name === "🤖 NG BLUE BOT 🤖")) && (!message.member.roles.cache.find(r => r.name === "👑 Administrateur 👑")) && (!message.member.roles.cache.find(r => r.name === "🔱 SuperModérateur 🔱") && (!message.member.roles.cache.find(r => r.name === "🌍 Modérateur+ 🌍")))) return message.channel.send("Vous n'avez pas les permissions d'effectuer les commandes");
        if ((spleef == 2)) return message.channel.send("L'événement est déja etait utilisé deux fois fait ng.event.list pour voir si il en reste !" ); {
        var list = new Discord.MessageEmbed()
        .setTitle("Event hotblock")
        .setDescription(`
        ${author} vient de commencer un event hotblock à ${heure + 2} heure ${minutes} minutes 
        `)
        .setColor("#0000FF")
        message.channel.send(list)
        hotblock ++;
        message.delete();
        }   
    } 

    if( command === "event.pingpong" ){
        if ((!message.member.roles.cache.find(r => r.name === "🤖 NG BLUE BOT 🤖")) && (!message.member.roles.cache.find(r => r.name === "👑 Administrateur 👑")) && (!message.member.roles.cache.find(r => r.name === "🔱 SuperModérateur 🔱") && (!message.member.roles.cache.find(r => r.name === "🌍 Modérateur+ 🌍")))) return message.channel.send("Vous n'avez pas les permissions d'effectuer les commandes");
        if ((pingpong == 2)) return message.channel.send("L'événement est déja etait utilisé deux fois fait ng.event.list pour voir si il en reste !" ); {
        var list = new Discord.MessageEmbed()
        .setTitle("Event pingpong")
        .setDescription(`
        ${author} vient de commencer un event pingpong à ${heure + 2} heure ${minutes} minutes 
        `)
        .setColor("#0000FF")
        message.channel.send(list)
        pingpong ++;
        message.delete();
        }   
    } 

    if( command === "event.spleef" ){
        if ((!message.member.roles.cache.find(r => r.name === "🤖 NG BLUE BOT 🤖")) && (!message.member.roles.cache.find(r => r.name === "👑 Administrateur 👑")) && (!message.member.roles.cache.find(r => r.name === "🔱 SuperModérateur 🔱") && (!message.member.roles.cache.find(r => r.name === "🌍 Modérateur+ 🌍")))) return message.channel.send("Vous n'avez pas les permissions d'effectuer les commandes");
        if ((spleef == 2)) return message.channel.send("L'événement est déja etait utilisé deux fois fait ng.event.list pour voir si il en reste !" ); {
        var list = new Discord.MessageEmbed()
        .setTitle("Event spleef")
        .setDescription(`
        ${author} vient de commencer un event spleef à ${heure + 2} heure ${minutes} minutes 
        `)
        .setColor("#0000FF")
        message.channel.send(list)
        spleef ++;
        message.delete();
        }   
    }

    if( command === "event.ploof" ){
        if ((!message.member.roles.cache.find(r => r.name === "🤖 NG BLUE BOT 🤖")) && (!message.member.roles.cache.find(r => r.name === "👑 Administrateur 👑")) && (!message.member.roles.cache.find(r => r.name === "🔱 SuperModérateur 🔱") && (!message.member.roles.cache.find(r => r.name === "🌍 Modérateur+ 🌍")))) return message.channel.send("Vous n'avez pas les permissions d'effectuer les commandes");
        if ((ploof == 2)) return message.channel.send("L'événement est déja etait utilisé deux fois fait ng.event.list pour voir si il en reste !" ); {
        var list = new Discord.MessageEmbed()
        .setTitle("Event ploof")
        .setDescription(`
        ${author} vient de commencer un event ploof à ${heure + 2} heure ${minutes} minutes 
        `)
        .setColor("#0000FF")
        message.channel.send(list)
        ploof ++;
        message.delete();
        }   
    }

    if( command === "event.getdown" ){
        if ((!message.member.roles.cache.find(r => r.name === "🤖 NG BLUE BOT 🤖")) && (!message.member.roles.cache.find(r => r.name === "👑 Administrateur 👑")) && (!message.member.roles.cache.find(r => r.name === "🔱 SuperModérateur 🔱") && (!message.member.roles.cache.find(r => r.name === "🌍 Modérateur+ 🌍")))) return message.channel.send("Vous n'avez pas les permissions d'effectuer les commandes");
        if ((getdown == 2)) return message.channel.send("L'événement est déja etait utilisé deux fois fait ng.event.list pour voir si il en reste !" ); {
        var list = new Discord.MessageEmbed()
        .setTitle("Event getdown")
        .setDescription(`
        ${author} vient de commencer un event getdown à ${heure + 2} heure ${minutes} minutes 
        `)
        .setColor("#0000FF")
        message.channel.send(list)
        getdown ++;
        message.delete();
        }   
    }

    if( command === "event.anvilfall" ){
        if ((!message.member.roles.cache.find(r => r.name === "🤖 NG BLUE BOT 🤖")) && (!message.member.roles.cache.find(r => r.name === "👑 Administrateur 👑")) && (!message.member.roles.cache.find(r => r.name === "🔱 SuperModérateur 🔱") && (!message.member.roles.cache.find(r => r.name === "🌍 Modérateur+ 🌍")))) return message.channel.send("Vous n'avez pas les permissions d'effectuer les commandes");
        if ((anvilfall == 2)) return message.channel.send("L'événement est déja etait utilisé deux fois fait ng.event.list pour voir si il en reste !" ); {
        var list = new Discord.MessageEmbed()
        .setTitle("Event anvilfall")
        .setDescription(`
        ${author} vient de commencer un event anvilfall à ${heure + 2} heure ${minutes} minutes 
        `)
        .setColor("#0000FF")
        message.channel.send(list)
        anvilfall ++;
        message.delete();
        }   
    } 

    if( command === "event.epervier" ){
        if ((!message.member.roles.cache.find(r => r.name === "🤖 NG BLUE BOT 🤖")) && (!message.member.roles.cache.find(r => r.name === "👑 Administrateur 👑")) && (!message.member.roles.cache.find(r => r.name === "🔱 SuperModérateur 🔱") && (!message.member.roles.cache.find(r => r.name === "🌍 Modérateur+ 🌍")))) return message.channel.send("Vous n'avez pas les permissions d'effectuer les commandes");
        if ((epervier == 2)) return message.channel.send("L'événement est déja etait utulisé deux fois fait ng.event.list pour voir si il en reste !" ); {
        var list = new Discord.MessageEmbed()
        .setTitle("Event epervier")
        .setDescription(`
        ${author} vient de commencer un event epervier à ${heure + 2} heure ${minutes} minutes 
        `)
        .setColor("#0000FF")
        message.channel.send(list)
        epervier ++;
        message.delete();
        }   
    }

    if (command === "event.list") {
    if ((!message.member.roles.cache.find(r => r.name === "🤖 NG BLUE BOT 🤖")) && (!message.member.roles.cache.find(r => r.name === "👑 Administrateur 👑")) && (!message.member.roles.cache.find(r => r.name === "🔱 SuperModérateur 🔱") && (!message.member.roles.cache.find(r => r.name === "🌍 Modérateur+ 🌍")))) return message.channel.send("Vous n'avez pas les permissions d'effectuer les commandes");
    message.channel.send("<@&360095412775944193>")
    var list = new Discord.MessageEmbed()
    .setTitle("⚠️ ***Voici la liste des events qui peuvent commencé*** ⚠️")
    .setDescription(`
    Pour l'instant les events peuvent etre clear à 0 a cause de nouvelle commande
    -ng.event.kth  -${kth}/2 Utilisations restantes
    -ng.event.anvilfall -${anvilfall}/2 Utilisations restantes  
    -ng.event.getdown -${getdown}/2 Utilisations restantes
    -ng.event.ploof -${ploof}/2 Utilisations restantes
    -ng.event.spleef -${spleef}/2 Utilisations restantes
    -ng.event.hotblock -${hotblock}/2 Utilisations restantes
    -ng.event.pingpong -${pingpong}/2 Utilisations restantes
    -ng.event.epervier -${epervier}/2 Utilisations restantes
    -ng.event.dancefloor -${dancefloor}/2 Utilisations restantes
    -ng.event.loupgarou  -${loupgarou}/2 Utilisations restantes
    *** Les events sont restart toute les semaines, le lundi minuit ***
    ⚠️ ***Merci d'entrer cette commande pour designier un vainqueur*** ⚠️
    ng.event.gagnant {pseudo} {somme}
    `)
    .setColor("#0000FF")
    message.channel.send(list)
    message.delete();
    }

    if( command === "event.gagnant" ){
        if ((!message.member.roles.cache.find(r => r.name === "🤖 NG BLUE BOT 🤖")) && (!message.member.roles.cache.find(r => r.name === "👑 Administrateur 👑")) && (!message.member.roles.cache.find(r => r.name === "🔱 SuperModérateur 🔱") && (!message.member.roles.cache.find(r => r.name === "🌍 Modérateur+ 🌍")))) return message.channel.send("Vous n'avez pas les permissions d'effectuer les commandes");
        let [pseudog, bluecoin, somme] = args;
        ticketg ++;
        message.channel.send("<@&360094866757124096><@&360094559704842244>")
        var list = new Discord.MessageEmbed()
        .setTitle("***Gagnant***") 
        .setDescription(`
        [***${pseudog}***]  vient de remporter ***${bluecoin}*** BC et ***${somme}*** $ lors d'un event.
        ⚠️ Merci de mettre cette reaction ☑️ pour attribuer les lots || Numéro ticket ${ticketg} ⚠️
        `)
        .setColor("#0000FF")
        message.channel.send(list).then(async msg =>{
            await msg.react("☑️"); 
        });
    }

    if( command === "event.reset"){
        if ((!message.member.roles.cache.find(r => r.name === "🤖 NG BLUE BOT 🤖")) && (!message.member.roles.cache.find(r => r.name === "👑 Administrateur 👑"))) return message.channel.send("Vous n'avez pas les permissions d'effectuer les commandes")
        kth = kth - kth
        anvilfall = anvilfall - anvilfall
        getdown = getdown - getdown
        ploof = ploof - ploof
        spleef = spleef - spleef
        hotblock = hotblock - hotblock
        pingpong = pingpong - pingpong
        epervier = epervier - epervier
        dancefloor = dancefloor - dancefloor
        loupgarou = loupgarou - loupgarou
        message.channel.send(`les points ont été ajouté ${Serdaigle}`);
        message.delete();
         
    }
    //EVENT
    
    //LOTO
    //if( command === "loto-add" ){
        //if ((!message.member.roles.cache.find(r => r.name === "🤖 NG BLUE BOT 🤖")) && (!message.member.roles.cache.find(r => r.name === "👑 Administrateur 👑")) && (!message.member.roles.cache.find(r => r.name === "🔱 SuperModérateur 🔱"))) return message.channel.send("Vous n'avez pas les permissions d'effectuer les commandes"); {
           //let [lotoadd] = args;
           //myArray.push(`${lotoadd}`);
           //message.channel.send("la modifacation sur la tableau a été faite")
        //}
    //}

    //if( command === "loto-draw" ){
        //if ((!message.member.roles.cache.find(r => r.name === "🤖 NG BLUE BOT 🤖")) && (!message.member.roles.cache.find(r => r.name === "👑 Administrateur 👑")) && (!message.member.roles.cache.find(r => r.name === "🔱 SuperModérateur 🔱"))) return message.channel.send("Vous n'avez pas les permissions d'effectuer les commandes"); {
           // let = pointarrayInt = Number.parseInt(myArray)
            //message.channel.send(`${pointarrayInt}`);
           // message.channel.send(`${myArray[1]}`);
        //}
   // }

   // if( command === "loto-info" ){
       // if ((!message.member.roles.cache.find(r => r.name === "🤖 NG BLUE BOT 🤖")) && (!message.member.roles.cache.find(r => r.name === "👑 Administrateur 👑")) && (!message.member.roles.cache.find(r => r.name === "🔱 SuperModérateur 🔱"))) return message.channel.send("Vous n'avez pas les permissions d'effectuer les commandes"); {
           // message.channel.send(myArray); 
       // }
    //}

    //if( command === "loto-reset" ){
       // if ((!message.member.roles.cache.find(r => r.name === "🤖 NG BLUE BOT 🤖")) && (!message.member.roles.cache.find(r => r.name === "👑 Administrateur 👑")) && (!message.member.roles.cache.find(r => r.name === "🔱 SuperModérateur 🔱"))) return message.channel.send("Vous n'avez pas les permissions d'effectuer les commandes"); {
          //  myArray = myArray - myArray
       // }
   // }
    //LOTO

    //RAPPELS
    if (command === "pvp") { //Comande qui permet d'afficher !Le message PVPBOX!
    if ((!message.member.roles.cache.find(r => r.name === "🤖 NG BLUE BOT 🤖")) && (!message.member.roles.cache.find(r => r.name === "👑 Administrateur 👑")) && (!message.member.roles.cache.find(r => r.name === "🔱 SuperModérateur 🔱"))) return message.channel.send("Vous n'avez pas les permissions d'effectuer les commandes");
        message.delete()
        message.channel.send("<@&360095412775944193><@&360094866757124096>")
        var list = new Discord.MessageEmbed()
        .setTitle("Pvp Box")
        .setDescription(`
        Il faut ouvrir la Pvp Box !
        Merci de mettre cette reaction ✅ pour indiquer l'ouverture
        `)
        .setColor("#0000FF")
        message.channel.send(list).then(async msg =>{
            await msg.react("✅"); 
        });   
    };

    if (command === "omc-role") { //Comande qui permet d'afficher !Le message OMC!
        let pseudo = message.author
        if ((!message.member.roles.cache.find(r => r.name === "🤖 NG BLUE BOT 🤖")) && (!message.member.roles.cache.find(r => r.name === "👑 Administrateur 👑")) && (!message.member.roles.cache.find(r => r.name === "🔱 SuperModérateur 🔱"))) return message.channel.send("Vous n'avez pas les permissions d'effectuer les commandes");
        message.delete()
        message.channel.send("<@&413381492010516500>")
        var list = new Discord.MessageEmbed()
        .setTitle("Attribution des roles OMC") 
        .setDescription(`
        Cet emoji permet faire le Porte-Parole de l'OMC 🗣️
        Cet emoji permet faire le Doc de l'OMC 📝
        Cet emoji permet faire les TP de l'OMC 👥
        Cet emoji permet faire les OMCA de l'OMC 📄
        `)
        .setColor("#0000FF")
        message.channel.send(list).then(async msg =>{
            await msg.react("🗣️");
            await msg.react("📝");
            await msg.react("👥");
            await msg.react("📄");
        }); 

    };
    
    if (command === "candidature") { //Comande qui permet d'afficher !Le message Candidature!
        let pseudo = message.author
        if ((!message.member.roles.cache.find(r => r.name === "🤖 NG BLUE BOT 🤖")) && (!message.member.roles.cache.find(r => r.name === "👑 Administrateur 👑")) && (!message.member.roles.cache.find(r => r.name === "🔱 SuperModérateur 🔱"))) return message.channel.send("Vous n'avez pas les permissions d'effectuer les commandes");
        message.delete()
        message.channel.send("<@&413381492010516500>")
        var list = new Discord.MessageEmbed()
        .setTitle("Merci de répondre aux candidatures sur le Forum !") 
        .setDescription(`
        ⚠️ STAFF ⚠️
        Modérateur : https://glor.cc/recrutementmoderateursblue
        Builder : https://glor.cc/recrutementbuilderblue 
        Guide : https://glor.cc/recrutementguidesblue

        🔵 Grades RP 🔵 
        Avocats : https://glor.cc/recrutementsavocatblue
        Gendarme : https://glor.cc/recrutementgendarmeblue
        Mafieux : https://glor.cc/recrutementmafieuxblue
        Journaliste : https://glor.cc/recrutementjournalisteblue
        `)
        .setColor("#0000FF")
        message.channel.send(list)
    }

    if (command === "omc-rapelle") { //Comande qui permet d'afficher !Le message ONU!
    if ((!message.member.roles.cache.find(r => r.name === "🤖 NG BLUE BOT 🤖")) && (!message.member.roles.cache.find(r => r.name === "👑 Administrateur 👑")) && (!message.member.roles.cache.find(r => r.name === "🔱 SuperModérateur 🔱"))) return message.channel.send("Vous n'avez pas les permissions d'effectuer les commandes");
        message.delete()
        message.channel.send("<@&413381492010516500>")
        var list = new Discord.MessageEmbed()
        .setTitle("Omc")
        .setDescription("C'est bientot l'heure de L'OMC !")
        .setColor("#0000FF")
        message.channel.send(list)
        
    } 

    if (command === "carte") { //Comande qui permet d'afficher !Le message Carte!
    if ((!message.member.roles.cache.find(r => r.name === "🤖 NG BLUE BOT 🤖")) && (!message.member.roles.cache.find(r => r.name === "👑 Administrateur 👑")) && (!message.member.roles.cache.find(r => r.name === "🔱 SuperModérateur 🔱"))) return message.channel.send("Vous n'avez pas les permissions d'effectuer les commandes");
        message.delete()
        message.channel.send("<@&360095412775944193>")
        var list = new Discord.MessageEmbed()
        .setTitle("Carte")
        .setDescription(`
        Il faut faire les cartes !
        ⚠️ Vous devez obligatoirement les terminer avant ce soir ⚠️ 
        `)
        .setColor("#0000FF")
        message.channel.send(list)
    } 
    //RAPPELS

    //Utilitaire
    if (command === "clear") { //Comande qui permet d'afficher !Le message Carte!
    if ((!message.member.roles.cache.find(r => r.name === "🤖 NG BLUE BOT 🤖")) && (!message.member.roles.cache.find(r => r.name === "👑 Administrateur 👑")) && (!message.member.roles.cache.find(r => r.name === "🔱 SuperModérateur 🔱"))) return message.channel.send("Vous n'avez pas les permissions d'effectuer les commandes");
        message.delete()
        message.channel.bulkDelete(args[0]).then(() => {
        message.channel
       .send(`J'ai supprimé ***${args[0]} message*** pour vous !`)
       .then(msg => msg.delete(5000)); 
    })
    }

    if( command === "date" ){
        if ((!message.member.roles.cache.find(r => r.name === "🤖 NG BLUE BOT 🤖")) && (!message.member.roles.cache.find(r => r.name === "👑 Administrateur 👑")) && (!message.member.roles.cache.find(r => r.name === "🔱 SuperModérateur 🔱"))) return message.channel.send("Vous n'avez pas les permissions d'effectuer les commandes"); {
            message.delete();
            message.channel.send("jours " + jour +", "+ heure + "heure" +" "+ minutes +" "+ "minute");
        }
    }

    if(command === "help" ){
        var listhelp1 = new Discord.MessageEmbed()
        .setTitle("***❓LISTE DES COMMANDES DU NG BLUE BOT❓***") 
        .setColor("#0000FF")
        message.author.send(listhelp1)

        var listhelp2 = new Discord.MessageEmbed()
        .setTitle("***<:admin:727625241764823123>Administrateur<:admin:727625241764823123> :***") 
        .setDescription(`
        ***-ng.point-reset*** "Restart les points de famille"
        ***-ng.event.reset*** "Restart les points d'event"
        `)
        .setColor("#0000FF")
        message.author.send(listhelp2)

        var listhelp3 = new Discord.MessageEmbed()
        .setTitle("***<:supermodo:727625452855754902>SuperModo<:supermodo:727625452855754902> :***") 
        .setDescription(`
        ***-ng.clear*** {nombre de message} "Permet la supression des messages"
        ***-ng.carte*** "Fait un rappel de la Carte"
        ***-ng.onu*** "Fait un rappel de l'Onu"
        ***-ng.omc-rapelle*** "Permet d'attribué les roles pour l'Omc"
        ***-ng.omc-role*** "Fait un rappel de la Omc"
        ***-ng.candidature*** "Fait un rappel de la Candidature"
        ***-ng.pvp*** "Fait un rappel de la Pvp Box"
        ***-ng.point-list*** "Permet de visualiser les points de famille"
        ***-ng.point-{remove}or{add}.serdaigle {nombre de point}*** 
        "Rajoute ou enlève des points de la famille serdaigle"
        ***-ng.point-{remove}or{add}.serpentard {nombre de point}*** 
        "Rajoute ou enlève des points de la famille serpentard"
        ***-ng.point-{remove}or{add}.pousoulfle {nombre de point}*** 
        "Rajoute ou enlève des points de la famille pousoufle"
        ***-ng.point-{remove}or{add}.gryffondor {nombre de point}*** 
        "Rajoute ou enlève des points de la famille gryffondor"
        ***-ng.point-{remove}or{add}.beauxbaton {nombre de point}*** 
        "Rajoute ou enlève des points de la famille beauxbaton"
        `)
        .setColor("#0000FF")
        message.author.send(listhelp3)

        var listhelp4 = new Discord.MessageEmbed()
        .setTitle("***<:modo:727630630287835226>Modérateur+<:modo:727630630287835226> :***") 
        .setDescription(`
        ***-ng.event.list*** "Permet de visualisé le nombre d'event restant"
        ***-ng.event.kth*** "Lance l'event KTH"
        ***-ng.event.anvilfall*** "Lance l'event Anvilfall"
        ***-ng.event.getdown*** "Lance l'event Getdown"
        ***-ng.event.ploof*** "Lance l'event Ploof"
        ***-ng.event.spleef*** "Lance l'event Spleef"
        ***-ng.event.hotblock*** "Lance l'event Hotblock"
        ***-ng.event.pingpong*** "Lance l'event Pingpong"
        ***-ng.event.epervier***"Lance l'event Epervier"
        ***-ng.event.dancefloor*** "Lance l'event Dancefloor"
        ***-ng.event.loupgarou*** "Lance l'event Loupgaron"
        ***-ng.event.gagnant {Pseudo} {nombre de bluecoin gagné} {somme d'argent remporté}*** 
        "Permet de désigné un vainqueur"
        `)
        .setColor("#0000FF")
        message.author.send(listhelp4)
        message.delete();  
    }
    //Utilitaire

     

    

});
client.on ('messageReactionAdd', (reaction, user) => { 
        if(user.bot) return;

        var textchanelle2 = client.channels.cache.find(channel => channel.id === '413030124288606218'); //"413030124288606218"
        var textchanelle3 = client.channels.cache.find(channel => channel.id === '544626880381321226'); // 544626880381321226
   
        if (reaction.emoji.name === "🏳️" && user.id !== client.user.id) {
            if (myArray.indexOf(`${user}`) === -1){
               myArray.push(`${user}`) 
            }
        }

        if (reaction.emoji.name === "✅" && user.id !== client.user.id) {
            reaction.remove();
            var list = new Discord.MessageEmbed()
            .setTitle("Ouverture PvpBox") 
            .setDescription(`
            ${user} viens d'ouvrir la pvp box !
            Merci de mettre cette reaction ❌ pour indiquer la fermeture
            `)
            .setColor("#0000FF")
            textchanelle2.send(list).then(async msg =>{
                await msg.react("❌");
            }); 
        } 
        
        if (reaction.emoji.name === "🗣️" && user.id !== client.user.id) {
            reaction.remove();
            var list = new Discord.MessageEmbed()
            .setTitle("Porte-Parol") 
            .setDescription(`${user} s'occupe de faire le Porte-Parole de l'OMC lors de cette session !`) 
            .setColor("#0000FF")
            textchanelle2.send(list)
        }

        if (reaction.emoji.name === "☑️" && user.id !== client.user.id) {
            ticketvalidation ++;
            reaction.remove();
            var list = new Discord.MessageEmbed()
            .setTitle("Gagnant") 
            .setDescription(`${user} viens de s'occuper du joueur || Numéro de ticket ${ticketvalidation} !`) 
            .setColor("#0000FF")
            textchanelle3.send(list)
        }

        if (reaction.emoji.name === "📝" && user.id !== client.user.id) {
            reaction.remove();
            var list = new Discord.MessageEmbed()
            .setTitle("Doc de l'OMC") 
            .setDescription(`${user} s'occupe de faire le Doc de l'OMC lors de cette session !`)
            .setColor("#0000FF")
            textchanelle2.send(list)
        } 

        if (reaction.emoji.name === "👥" && user.id !== client.user.id) {
            reaction.remove();
            var list = new Discord.MessageEmbed()
            .setTitle("TP de l'OMC") 
            .setDescription(`${user} s'occupe de faire les TP de l'OMC lors de cette session !`) 
            .setColor("#0000FF")
            textchanelle2.send(list)
        }

        if (reaction.emoji.name === "📄" && user.id !== client.user.id) {
            reaction.remove();
            var list = new Discord.MessageEmbed()
            .setTitle("OMCA de l'OMC") 
            .setDescription(`${user} s'occupe de faire l'OMCA de l'OMC lors de cette session !`) 
            .setColor("#0000FF")
            textchanelle2.send(list)
        }

        if (reaction.emoji.name === "❌" && user.id !== client.user.id) {
            var list = new Discord.MessageEmbed()
            .setTitle("Fermeture PvpBox") 
            .setDescription(`${user} viens de fermer la pvp box !`)
            .setColor("#0000FF")
            textchanelle2.send(list)
            reaction.remove();
        }
});

client.login(process.env.TOKEN);


