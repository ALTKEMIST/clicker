var save_data = {};
var lps_aux;
var musicOn = false;
var mg_turns = 0;
var mg_finished = false;
var opponent = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
var board = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
var opponentCount = 0;
var opponentScore = 0;
var yourScore = 0;

function loadLista(){
    save_data = JSON.parse(localStorage.getItem('save_data'));

    if (save_data==null){
        save_data = {};
    }

    load();
}
function run(){
    save_data['lps'] = save_data['azufre'] * save_data['azufre_v'] + save_data['mercurio'] * save_data['mercurio_v'];
    save_data['lps'] += save_data['sal'] * save_data['sal_v'] + save_data['fire'] * save_data['fire_v'];
    save_data['lps'] += save_data['water'] * save_data['water_v'] + save_data['air'] * save_data['air_v'];
    save_data['lps'] += save_data['earth'] * save_data['earth_v'];
    lps_aux = setInterval(function(){
        save_data['counter'] += save_data['lps'];
        production.innerHTML = newNumber(save_data['counter'],2);
    },1000);
}

function stop(){
    clearInterval(lps_aux);
}

function load() {
    console.log('Game version: 1.3.0');

    try{
        switch(save_data['counter']){
            case undefined: 
                save_data['counter'] = 0;
                save_data['multiplier'] = 1;
                save_data['lps'] = 0;
                save_data['azufre'] = 0; //Cantidad inicial
                save_data['azufre_v'] = 1; //Produccion inicial
                save_data['azufreC'] = 10; //Costo inicial
                save_data['azufreSC'] = 1000; //Costo spirit inicial
                save_data['azufreSpirits'] = 0; //Cantidad de spirit inicial
                save_data['click_cost'] = 100;

                save_data['mercurio'] = 0;
                save_data['mercurio_v'] = 10;
                save_data['mercurioC'] = 120;
                save_data['mercurioSC'] = 2500;
                save_data['mercurioSpirits'] = 0;

                save_data['sal'] = 0;
                save_data['sal_v'] = 100;
                save_data['salC'] = 5400;
                save_data['salSC'] = 12000;
                save_data['salSpirits'] = 0;

                save_data['fire'] = 0;
                save_data['fire_v'] = 1000;
                save_data['fireC'] = 17666;
                save_data['fireSC'] = 64000;
                save_data['fireSpirits'] = 0;

                save_data['water'] = 0;
                save_data['water_v'] = 10000;
                save_data['waterC'] = 102000;
                save_data['waterSC'] = 421000;
                save_data['waterSpirits'] = 0;

                save_data['air'] = 0;
                save_data['air_v'] = 100000;
                save_data['airC'] = 2000000;
                save_data['airSC'] = 5000000;
                save_data['airSpirits'] = 0;

                save_data['earth'] = 0;
                save_data['earth_v'] = 1000000;
                save_data['earthC'] = 20000000;
                save_data['earthSC'] = 150000000;
                save_data['earthSpirits'] = 0;

                save_data['stone'] = 0;
                save_data['stoneSC'] = 376000000;

                save_data['quimera'] = false;
                save_data['homunculo'] = false;
                save_data['eterna_juventud'] = false;

                save_data['backgroundImage'] = "";
                save_data['backgroundMusic'] = "";
                save_data['cheats'] = false;

                save_data['minigameWin'] = false;
                save_data['minigame2Win'] = false;
                
                run();
                break;

            default:
                
                console.log('Game loaded successfully');

                run();

                break;

        }

        if(save_data['quimera']){
            btnChimera.disabled = true;
        }
        if(save_data['homunculo']){
            btnHomunculus.disabled = true;
        }
        if(save_data['eterna_juventud']){
            btnEternal.disabled = true;
        }


        production.innerHTML = newNumber(save_data['counter'],2);
        per_second.innerHTML = newNumber(save_data['lps'],2);
        azufre.innerHTML = newNumber(save_data['azufre'],2);
        azufreValue.innerHTML = newNumber(save_data['azufre_v'],2);
        azufre_cost.innerHTML = newNumber(save_data['azufreC'],2);
        azufreS_cost.innerHTML = newNumber(save_data['azufreSC'],2);

        clicks_cost.innerHTML = newNumber(save_data['click_cost'],2);

        mercurio.innerHTML = newNumber(save_data['mercurio'],2);
        mercurioValue.innerHTML = newNumber(save_data['mercurio_v'],2);
        mercurio_cost.innerHTML = newNumber(save_data['mercurioC'],2);
        mercurioS_cost.innerHTML = newNumber(save_data['mercurioSC'],2);

        sal.innerHTML = newNumber(save_data['sal'],2);
        salValue.innerHTML = newNumber(save_data['sal_v'],2);
        sal_cost.innerHTML = newNumber(save_data['salC'],2);
        salS_cost.innerHTML = newNumber(save_data['salSC'],2);

        fire.innerHTML = newNumber(save_data['fire'],2);
        fireValue.innerHTML = newNumber(save_data['fire_v'],2);
        fire_cost.innerHTML = newNumber(save_data['fireC'],2);
        fireS_cost.innerHTML = newNumber(save_data['fireSC'],2);

        water.innerHTML = newNumber(save_data['water'],2);
        waterValue.innerHTML = newNumber(save_data['water_v'],2);
        water_cost.innerHTML = newNumber(save_data['waterC'],2);
        waterS_cost.innerHTML = newNumber(save_data['waterSC'],2);

        air.innerHTML = newNumber(save_data['air'],2);
        airValue.innerHTML = newNumber(save_data['air_v'],2);
        air_cost.innerHTML = newNumber(save_data['airC'],2);
        airS_cost.innerHTML = newNumber(save_data['airSC'],2);

        earth.innerHTML = newNumber(save_data['earth'],2);
        earthValue.innerHTML = newNumber(save_data['earth_v'],2);
        earth_cost.innerHTML = newNumber(save_data['earthC'],2);
        earthS_cost.innerHTML = newNumber(save_data['earthSC'],2);

        stones.innerHTML = save_data['stone'];
        stoneS_cost.innerHTML = newNumber(save_data['stoneSC'],2);


        document.body.style.backgroundImage = "url('" + save_data['backgroundImage'] +"')";

        if (save_data['backgroundMusic'] !== ''){
            player.src = save_data['backgroundMusic'];
        }
    }
    catch (e){
        console.log ('Unexpected error: ' + e.message)
    }
    console.log('This is the GODMODE Console.');
}

function add(){
    save_data['counter'] += 1 * save_data['multiplier'] * save_data['lps']*0.005 + 1; 
    production.innerHTML = newNumber(save_data['counter'],2);
}

function upgrade(type){
    switch(type){
        case 1:
            if (save_data['counter']>=save_data['azufreC']){
                save_data['counter'] -= Math.round(save_data['azufreC']);
                save_data['azufreC'] = save_data['azufreC'] * Math.pow(1.04,(save_data['azufre']+1));
                save_data['azufre'] += 1;
                stop();
                run();
                azufre.innerHTML = newNumber(save_data['azufre'],2);
                azufre_cost.innerHTML = newNumber(save_data['azufreC'],2);
            }
            break;
        case 2:
            if (save_data['counter']>=save_data['mercurioC']){
                save_data['counter'] -= Math.round(save_data['mercurioC']);
                save_data['mercurioC'] = save_data['mercurioC'] * Math.pow(1.06,(save_data['mercurio']+1));
                save_data['mercurio'] += 1;
                stop();
                run();
                mercurio.innerHTML = newNumber(save_data['mercurio'],2);
                mercurio_cost.innerHTML = newNumber(save_data['mercurioC'],2);
            }
            break;
        case 3:
            if (save_data['counter']>=save_data['salC']){
                save_data['counter'] -= Math.round(save_data['salC']);
                save_data['salC'] = save_data['salC'] * Math.pow(1.08,(save_data['sal']+1));
                save_data['sal'] += 1;
                stop();
                run();
                sal.innerHTML = newNumber(save_data['sal'],2);
                sal_cost.innerHTML = newNumber(save_data['salC'],2);
            }
            break;
        case 4:
            if (save_data['counter']>=save_data['fireC']){
                save_data['counter'] -= Math.round(save_data['fireC']);
                save_data['fireC'] = save_data['fireC'] * Math.pow(1.10,(save_data['fire']+1));
                save_data['fire'] += 1;
                stop();
                run();
                fire.innerHTML = newNumber(save_data['fire'],2);
                fire_cost.innerHTML = newNumber(save_data['fireC'],2);
            }
            break;
        case 5:
            if (save_data['counter']>=save_data['waterC']){
                save_data['counter'] -= Math.round(save_data['waterC']);
                save_data['waterC'] = save_data['waterC'] * Math.pow(1.12,(save_data['water']+1));
                save_data['water'] += 1;
                stop();
                run();
                water.innerHTML = newNumber(save_data['water'],2);
                water_cost.innerHTML = newNumber(save_data['waterC'],2);
            }
            break;
        case 6:
            if (save_data['counter']>=save_data['airC']){
                save_data['counter'] -= Math.round(save_data['airC']);
                save_data['airC'] = save_data['airC'] * Math.pow(1.14,(save_data['air']+1));
                save_data['air'] += 1;
                stop();
                run();
                air.innerHTML = newNumber(save_data['air'],2);
                air_cost.innerHTML = newNumber(save_data['airC'],2);
            }
            break;
        case 7:
            if (save_data['counter']>=save_data['earthC']){
                save_data['counter'] -= Math.round(save_data['earthC']);
                save_data['earthC'] = save_data['earthC'] * Math.pow(1.16,(save_data['earth']+1));
                save_data['earth'] += 1;
                stop();
                run();
                earth.innerHTML = newNumber(save_data['earth'],2);
                earth_cost.innerHTML = newNumber(save_data['earthC'],2);
            }
            break;
    }
    production.innerHTML = newNumber(save_data['counter'],2);
    per_second.innerHTML = newNumber(save_data['lps'],2);
}

function upgradeSpirit(type){
    switch(type){
        case 0:
            if (save_data['counter']>=save_data['click_cost']){
                save_data['counter'] -= Math.round(save_data['click_cost']);
                save_data['click_cost'] = save_data['click_cost'] * Math.pow(1.02,(save_data['multiplier']+1));
                save_data['multiplier'] += 1;
                stop();
                run();
                clicks_cost.innerHTML = newNumber(save_data['click_cost'],2);
            }
            break;
        case 1:
            if (save_data['counter']>=save_data['azufreSC']){
                save_data['counter'] -= Math.round(save_data['azufreSC']);
                save_data['azufreSC'] = save_data['azufreSC'] * Math.pow(1.09,(save_data['azufreSpirits']+1));
                save_data['azufreSpirits'] += 1;
                save_data['azufre_v'] = save_data['azufre_v']*2;
                stop();
                run();
                azufreValue.innerHTML = newNumber(save_data['azufre_v'],2);
                azufreS_cost.innerHTML = newNumber(save_data['azufreSC'],2);
            }
            break;
        case 2:
            if (save_data['counter']>=save_data['mercurioSC']){
                save_data['counter'] -= Math.round(save_data['mercurioSC']);
                save_data['mercurioSC'] = save_data['mercurioSC'] * Math.pow(1.1,(save_data['mercurioSpirits']+1));
                save_data['mercurioSpirits'] += 1;
                save_data['mercurio_v'] = save_data['mercurio_v']*2;
                stop();
                run();
                mercurioValue.innerHTML = newNumber(save_data['mercurio_v'],2);
                mercurioS_cost.innerHTML = newNumber(save_data['mercurioSC'],2);
            }
            break;
        case 3:
            if (save_data['counter']>=save_data['salSC']){
                save_data['counter'] -= Math.round(save_data['salSC']);
                save_data['salSC'] = save_data['salSC'] * Math.pow(1.11,(save_data['salSpirits']+1));
                save_data['salSpirits'] += 1;
                save_data['sal_v'] = save_data['sal_v']*2;
                stop();
                run();
                salValue.innerHTML = newNumber(save_data['sal_v'],2);
                salS_cost.innerHTML = newNumber(save_data['salSC'],2);
            }
            break;
        case 4:
            if (save_data['counter']>=save_data['fireSC']){
                save_data['counter'] -= Math.round(save_data['fireSC']);
                save_data['fireSC'] = save_data['fireSC'] * Math.pow(1.12,(save_data['fireSpirits']+1));
                save_data['fireSpirits'] += 1;
                save_data['fire_v'] = save_data['fire_v']*2;
                stop();
                run();
                fireValue.innerHTML = newNumber(save_data['fire_v'],2);
                fireS_cost.innerHTML = newNumber(save_data['fireSC'],2);
            }
            break;
        case 5:
            if (save_data['counter']>=save_data['waterSC']){
                save_data['counter'] -= Math.round(save_data['waterSC']);
                save_data['waterSC'] = save_data['waterSC'] * Math.pow(1.13,(save_data['waterSpirits']+1));
                save_data['waterSpirits'] += 1;
                save_data['water_v'] = save_data['water_v']*2;
                stop();
                run();
                waterValue.innerHTML = newNumber(save_data['water_v'],2);
                waterS_cost.innerHTML = newNumber(save_data['waterSC'],2);
            }
            break;
        case 6:
            if (save_data['counter']>=save_data['airSC']){
                save_data['counter'] -= Math.round(save_data['airSC']);
                save_data['airSC'] = save_data['airSC'] * Math.pow(1.14,(save_data['airSpirits']+1));
                save_data['airSpirits'] += 1;
                save_data['air_v'] = save_data['air_v']*2;
                stop();
                run();
                airValue.innerHTML = newNumber(save_data['air_v'],2);
                airS_cost.innerHTML = newNumber(save_data['airSC'],2);
            }
            break;
        case 7:
            if (save_data['counter']>=save_data['earthSC']){
                save_data['counter'] -= Math.round(save_data['earthSC']);
                save_data['earthSC'] = save_data['earthSC'] * Math.pow(1.15,(save_data['earthSpirits']+1));
                save_data['earthSpirits'] += 1;
                save_data['earth_v'] = save_data['earth_v']*2;
                stop();
                run();
                earthValue.innerHTML = newNumber(save_data['earth_v'],2);
                earthS_cost.innerHTML = newNumber(save_data['earthSC'],2);
            }
            break;
        case 8:
            if (save_data['counter']>=save_data['stoneSC']){
                if(save_data['cheats']){
                    save_data['stone']-=7;
                }
                save_data['counter'] -= Math.round(save_data['stoneSC']);
                save_data['stoneSC'] = save_data['stoneSC'] * Math.pow(1.04,(save_data['stone']+1));
                save_data['stone'] += 1;
                stop();
                run();
                if(save_data['cheats']){
                    save_data['stone']+=7;
                }
                stones.innerHTML = save_data['stone'];
                stoneS_cost.innerHTML = newNumber(save_data['stoneSC'],2);
            }
            break;
        case 9:
            if (save_data['stone']>=10 && !save_data['quimera']){
                save_data['stone'] -= 10;
                stones.innerHTML = save_data['stone'];
                btnChimera.disabled = true;
                save_data['quimera']=true;
            }
            break;
        case 10:
            if (save_data['stone']>=15 && !save_data['homunculo']){
                save_data['stone'] -= 15;
                stones.innerHTML = save_data['stone'];
                btnHomunculus.disabled = true;
                save_data['homunculo']=true;
            }
            break;
        case 11:
            if (save_data['stone']>=20 && !save_data['eterna_juventud'] && save_data['quimera'] && save_data['homunculo']){
                save_data['stone'] -= 20;
                stones.innerHTML = save_data['stone'];
                btnEternal.disabled = true;
                save_data['eterna_juventud']=true;
                $("#cheatsMSG").html("Now you are <span class='font-weight-bold'>INMORTAL</span>!");
                $('#cheats').modal("show");
            }
            break;
    }
    production.innerHTML = newNumber(save_data['counter'],2);
    per_second.innerHTML = newNumber(save_data['lps'],2);    
    
}

// Options

function saveGame(){
    localStorage.setItem('save_data', JSON.stringify(save_data));
    gameState.innerHTML = "<small class='text-success'>Your game has been successfully saved.</small>";
}

function clearGame(){
    if (confirm("The game data will be deleted.")){
        
        localStorage.removeItem('save_data');
        gameState.innerHTML = "<small class='text-danger'>Your game has been successfully deleted.</small>";
    }
    
}

function loadBG(){
    try{
        document.body.style.backgroundImage = "url('" + backgroundImg.value +"')";
        save_data['backgroundImage'] = backgroundImg.value;
    }
    catch(e){
        alert('This image cannot be loaded: ' + e.message)
    }
}


//background music
function loadBGM(){
    try{
        var musicURL = backgroundM.value;
        save_data['backgroundMusic'] = musicURL;
        player.src = save_data['backgroundMusic'];
        musicOn =false;
        musicStart();
    }
    catch(e){
        alert('This audio cannot be loaded: ' + e.message)
    }
}

function musicStart(){
    var music = document.getElementById('player');
    if (!musicOn){
        music.play();
        musicOn = true;
        nested.style.opacity = '0';
    }
    else{
        music.pause();
        musicOn = false;
        nested.style.opacity = '100';
    }
}

//Easter eggs
function activateCheats() {
    //document.body.style.backgroundImage = "url('images/cheatBackground.png')";
    if(!save_data['cheats']){
        $("#cheatsMSG").html("You made a contract with Paracelsus.<br>You get +7 Philosopher's Stones");
        $('#cheats').modal("show");
        save_data['stone'] += 7;
        stones.innerHTML = save_data['stone'];
        save_data['cheats'] = true;
    }
    else{
        $("#cheatsMSG").html("You already have a contract.");
        $('#cheats').modal("show");
    }
    
}

function activateCheats2() {
    //document.body.style.backgroundImage = "url('images/cheatBackground.png')";
    if(!save_data['cheats'] && save_data['eterna_juventud']){
        $("#cheatsMSG").html("Now I have infinite knowledge.");
        $('#cheats').modal("show");
        save_data['stone'] = 1.618033988749895;
        stones.innerHTML = save_data['stone'];
        save_data['cheats'] = true;
        stop();
        gamebox.style.backgroundColor = '#FFD700';
        $('.card-body').css('background-color', '#C4A400');
        $('.card').css('border', '1px solid black');
        $('.btn').css('border', '1px solid black');
        $('.btn-outline-info').css('color', '#000000');

    }
    else if(!save_data['cheats']){
        $("#cheatsMSG").html("||𝙹⚍ ᒷリℸ ̣ ᒷ∷ᒷ↸ ᔑ !¡ꖎᔑᓵᒷ ʖᒷ||𝙹リ↸ ᔑꖎꖎ ⍑⚍ᒲᔑリ ᓵ𝙹ᒲ!¡∷ᒷ⍑ᒷリᓭ╎𝙹リ... ");
        $('#cheats').modal("show");
        save_data['stone'] = -42;
        stones.innerHTML = save_data['stone'];
        save_data['cheats'] = true;
        btnChimera.disabled = true;
        save_data['quimera']=true;
        btnHomunculus.disabled = true;
        save_data['homunculo']=true;
        btnEternal.disabled = true;
        save_data['eterna_juventud']=true;
        stop();
    }
    else{
        $("#cheatsMSG").html("...");
        $('#cheats').modal("show");
        save_data['stone'] = 0;
        stones.innerHTML = save_data['stone'];
        stop();
    }
    
}

// Formato de numeros
function newNumber(num, digits) {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "K" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "G" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "P" },
      { value: 1e18, symbol: "E" },
      { value: 1e21, symbol: "Z" },
      { value: 1e24, symbol: "Y" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function(item) {
      return num >= item.value;
    });
    return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
}

//minigames

function mg_roll(){
    try{
        var valid = false;
        var dice = 0;

        if (!mg_finished && !$('#mg_Select').find(':selected').prop('disabled') ){
            mg_turns += 1;
            mg_turn.innerHTML = mg_turns;

            // Opponent's move
            while(!valid){
                dice = Math.floor(Math.random() * 9);

                switch(dice){
                    case 0: if (opponent[dice] == -1){
                                opponent[dice] = Math.floor(Math.random() * 9) + 1;
                                oA1S.innerHTML = opponent[dice];
                                valid = true;
                                opponentCount += 1;
                            }
                            else{
                                valid = false;
                            }
                            break;
                    case 1: if (opponent[dice] == -1){
                                opponent[dice] = Math.floor(Math.random() * 9) + 1;
                                oA1D.innerHTML = opponent[dice];
                                valid = true;
                                opponentCount += 1;
                            }
                            else{
                                valid = false;
                            }
                            break;
                    case 2: if (opponent[dice] == -1){
                                opponent[dice] = Math.floor(Math.random() * 9) + 1;
                                oA1T.innerHTML = opponent[dice];
                                valid = true;
                                opponentCount += 1;
                            }
                            else{
                                valid = false;
                            }
                            break;  
                    case 3: if (opponent[dice] == -1){
                                opponent[dice] = Math.floor(Math.random() * 9) + 1;
                                oB1S.innerHTML = opponent[dice];
                                valid = true;
                                opponentCount += 1;
                            }
                            else{
                                valid = false;
                            }
                            break;    
                    case 4: if (opponent[dice] == -1){
                                opponent[dice] = Math.floor(Math.random() * 9) + 1;
                                oB1D.innerHTML = opponent[dice];
                                valid = true;
                                opponentCount += 1;
                            }
                            else{
                                valid = false;
                            }
                            break; 
                    case 5: if (opponent[dice] == -1){
                                opponent[dice] = Math.floor(Math.random() * 9) + 1;
                                oB1T.innerHTML = opponent[dice];
                                valid = true;
                                opponentCount += 1;
                            }
                            else{
                                valid = false;
                            }
                            break;
                    case 6: if (opponent[dice] == -1){
                                opponent[dice] = Math.floor(Math.random() * 9) + 1;
                                oC1S.innerHTML = opponent[dice];
                                valid = true;
                                opponentCount += 1;
                            }
                            else{
                                valid = false;
                            }
                            break;
                    case 7: if (opponent[dice] == -1){
                                opponent[dice] = Math.floor(Math.random() * 9) + 1;
                                oC1D.innerHTML = opponent[dice];
                                valid = true;
                                opponentCount += 1;
                            }
                            else{
                                valid = false;
                            }
                            break;
                    case 8: if (opponent[dice] == -1){
                                opponent[dice] = Math.floor(Math.random() * 9) + 1;
                                oC1T.innerHTML = opponent[dice];
                                valid = true;
                                opponentCount += 1;
                            }
                            else{
                                valid = false;
                            }
                            break;
                    
                }

                if (opponentCount >= 9){
                    valid = true;
                } 
            }

            // Your move
            dice = Math.floor(Math.random() * 9) + 1;
            switch(mg_Select.value){
                case 'A2S': yA2S.innerHTML = dice;
                            mgo1.disabled = true;
                            mgo1.hidden = true;
                            board[0]=dice;
                            break;
                case 'A2D': yA2D.innerHTML = dice;
                            mgo2.disabled = true;
                            mgo2.hidden = true;
                            board[1]=dice;
                            break;
                case 'A2T': yA2T.innerHTML = dice;
                            mgo3.disabled = true;
                            mgo3.hidden = true;
                            board[2]=dice;
                            break;
                case 'B2S': yB2S.innerHTML = dice;
                            mgo4.disabled = true;
                            mgo4.hidden = true;
                            board[3]=dice;
                            break;
                case 'B2D': yB2D.innerHTML = dice;
                            mgo5.disabled = true;
                            mgo5.hidden = true;
                            board[4]=dice;
                            break;
                case 'B2T': yB2T.innerHTML = dice;
                            mgo6.disabled = true;
                            mgo6.hidden = true;
                            board[5]=dice;
                            break;
                case 'C2S': yC2S.innerHTML = dice;
                            mgo7.disabled = true;
                            mgo7.hidden = true;
                            board[6]=dice;
                            break;
                case 'C2D': yC2D.innerHTML = dice;
                            mgo8.disabled = true;
                            mgo8.hidden = true;
                            board[7]=dice;
                            break;
                case 'C2T': yC2T.innerHTML = dice;
                            mgo9.disabled = true;
                            mgo9.hidden = true;
                            board[8]=dice;
                            break;
            }

            opponentScore = 0;
            yourScore = 0;

            for (var i=0; i<9; i++){
                
                if (opponent[i] != -1){
                    if ( (i==1 || i==4 || i==7)  && ( ( (opponent[1] == opponent[4]) && (opponent[1] !=-1))  || ((opponent[1] == opponent[7]) && (opponent[1] !=-1)) || ( (opponent[4] == opponent[7]) && (opponent[4] !=-1)) ) ){
                        opponentScore += opponent[i] * 2;
                    }
                    else if( (i==2 || i==5 || i==8)  && (  ((opponent[2] == opponent[5]) && (opponent[2] !=-1) ) || ( (opponent[2] == opponent[8]) && (opponent[2] !=-1 ) ) || ((opponent[5] == opponent[8]) && (opponent[5] !=-1) ) ) ){
                        opponentScore += opponent[i] * 3;
                    }
                    else{
                        opponentScore += opponent[i];
                    }
                }
            }

            for (var i=0; i<9; i++){
                
                if (board[i] != -1){
                    if ( (i==1 || i==4 || i==7)  && ( ( (board[1] == board[4]) && (board[1] !=-1))  || ((board[1] == board[7]) && (board[1] !=-1)) || ( (board[4] == board[7]) && (board[4] !=-1)) ) ){
                        yourScore += board[i] * 2;
                    }
                    else if( (i==2 || i==5 || i==8)  && (  ((board[2] == board[5]) && (board[2] !=-1) ) || ( (board[2] == board[8]) && (board[2] !=-1 ) ) || ((board[5] == board[8]) && (board[5] !=-1) ) ) ){
                        yourScore += board[i] * 3;
                    }
                    else{
                        yourScore += board[i];
                    }
                }
            }

            scoreO.innerHTML = opponentScore;
            scoreY.innerHTML = yourScore;
            
            
            if (mg_turns >= 9){
                if(opponentScore > yourScore){
                    mg_result.innerHTML = 'You lose.';
                }
                else if(opponentScore == yourScore){
                    mg_result.innerHTML = 'Draw.';
                }
                else{
                    if(!save_data['minigameWin']){
                        save_data['stone'] += 1;
                        save_data['minigameWin'] = true;
                        stones.innerHTML = save_data['stone'];
                        mg_result.innerHTML = "You win. <span style='color:rgb(221, 25, 113)'>You get a Philosopher's stone</span>";
                    }
                    else{
                        mg_result.innerHTML = "You win."
                    }
                }
                
                mg_finished = true;
            }
        }

    }
    catch (e){
        console.log ('Unexpected error: ' + e.message);
    }
    
}

function mg_reset(){
    if (confirm("Restart minigame?")){
        mg_result.innerHTML = "Roll a dice"
        mg_turns = 0;
        mg_finished = false;
        opponent = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
        board = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
        opponentCount = 0;
        opponentScore = 0;
        yourScore = 0;

        scoreO.innerHTML = opponentScore;
        scoreY.innerHTML = yourScore;
        mg_turn.innerHTML = mg_turns;

        oA1S.innerHTML = '#';
        oA1D.innerHTML = '#';
        oA1T.innerHTML = '#';

        oB1S.innerHTML = '#';
        oB1D.innerHTML = '#';
        oB1T.innerHTML = '#';

        oC1S.innerHTML = '#';
        oC1D.innerHTML = '#';
        oC1T.innerHTML = '#';

        yA2S.innerHTML = '#';
        yA2D.innerHTML = '#';
        yA2T.innerHTML = '#';

        yB2S.innerHTML = '#';
        yB2D.innerHTML = '#';
        yB2T.innerHTML = '#';

        yC2S.innerHTML = '#';
        yC2D.innerHTML = '#';
        yC2T.innerHTML = '#';

        mgo1.disabled = false;
        mgo1.hidden = false;

        mgo2.disabled = false;
        mgo2.hidden = false;

        mgo3.disabled = false;
        mgo3.hidden = false;

        mgo4.disabled = false;
        mgo4.hidden = false;

        mgo5.disabled = false;
        mgo5.hidden = false;

        mgo6.disabled = false;
        mgo6.hidden = false;

        mgo7.disabled = false;
        mgo7.hidden = false;

        mgo8.disabled = false;
        mgo8.hidden = false;

        mgo9.disabled = false;
        mgo9.hidden = false;

    }
}

// Minigame 2
function shuffle(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}

var matrix = [];
var e = {};
function playMemorize(){
    e = {
        '🜍' : 'Sulfur',
        '☿' : 'Mercury',
        '🜔' : 'Salt',
        '🜂' : 'Fire',
        '🜄' : 'Water',
        '🜁' : 'Air',
        '🜃' : 'Earth',
        '🜀' : 'Quintessence',
        '🜏' : 'Black Sulfur',
        '🜚' : 'Gold',
        '🜛' : 'Silver',
        '♃' : 'Tin',
        '☉' : 'Sun',
        '☽' : 'Moon',
        '🜲' : 'Regulus',
        '🜊': 'Vinegar',
        '🜕': 'Nitre',
        '🜜': 'Iron ore',
        '🜠': 'Copper ore',
        '🜺': 'Arsenic',
        '🝊': 'Wax'
    }

    var array = [], i=0;

    for (var item in e){
        array.push (item);
    }

    array = shuffle (array);

    matrix = [];
    for (i=0; i<21; i++){
        matrix.push([array[i],array[i+1], array[i+2]]);
        i += 2;
    }

    indication.innerHTML = 'In which column is the symbol you chose?'
    var result = "<table class='table table-bordered mt-2 text-center h2 table-info'><tbody>";
    for (i=0; i<7; i++){
        result += "<tr><td>"+matrix[i][0]+"</td><td>"+matrix[i][1]+"</td><td>"+matrix[i][2]+"</td></tr>";
    }
    
    result += "<tr><td><button class='btn btn-block btn-outline-dark' onclick='memRound2(0)'>LEFT</button></td>";
    result += "<td><button class='btn btn-block btn-outline-dark' onclick='memRound2(1)'>CENTER</button></td>";
    result += "<td><button class='btn btn-block btn-outline-dark' onclick='memRound2(2)'>RIGHT</button></td></tr>"
    result += "</tbody></table>";

    memorizeBoard.innerHTML = result;

}

function deckShuffle(array, selection){
    switch (selection){
        case 0:
            for (i=0; i<7; i++){
                array.push (matrix[i][1]);
            }

            for (i=0; i<7; i++){
                array.push (matrix[i][0]);
            }

            for (i=0; i<7; i++){
                array.push (matrix[i][2]);
            }
            break;
        case 1:
            for (i=0; i<7; i++){
                array.push (matrix[i][0]);
            }

            for (i=0; i<7; i++){
                array.push (matrix[i][1]);
            }

            for (i=0; i<7; i++){
                array.push (matrix[i][2]);
            }
            break;
        case 2:
            for (i=0; i<7; i++){
                array.push (matrix[i][0]);
            }

            for (i=0; i<7; i++){
                array.push (matrix[i][2]);
            }

            for (i=0; i<7; i++){
                array.push (matrix[i][1]);
            }
            break;
    }
    return array;
}

function memRound2(select){
    var array = [], i=0;
    array = deckShuffle(array, select);

    matrix = [];
    for (i=0; i<21; i++){
        matrix.push([array[i],array[i+1], array[i+2]]);
        i += 2;
    }

    indication.innerHTML = 'Now, in which column is the symbol you chose?'
    var result = "<table class='table table-bordered mt-2 text-center h2 table-primary'><tbody>";
    for (i=0; i<7; i++){
        result += "<tr><td>"+matrix[i][0]+"</td><td>"+matrix[i][1]+"</td><td>"+matrix[i][2]+"</td></tr>";
    }
    
    result += "<tr><td><button class='btn btn-block btn-outline-dark' onclick='memRound3(0)'>LEFT</button></td>";
    result += "<td><button class='btn btn-block btn-outline-dark' onclick='memRound3(1)'>CENTER</button></td>";
    result += "<td><button class='btn btn-block btn-outline-dark' onclick='memRound3(2)'>RIGHT</button></td></tr>"
    result += "</tbody></table>";

    memorizeBoard.innerHTML = result;
    
}

function memRound3(select){
    var array = [], i=0;
    array = deckShuffle(array, select);

    matrix = [];
    for (i=0; i<21; i++){
        matrix.push([array[i],array[i+1], array[i+2]]);
        i += 2;
    }

    indication.innerHTML = 'Finally, in which column is the symbol you chose?'
    var result = "<table class='table table-bordered mt-2 text-center h2 table-warning'><tbody>";
    for (i=0; i<7; i++){
        result += "<tr><td>"+matrix[i][0]+"</td><td>"+matrix[i][1]+"</td><td>"+matrix[i][2]+"</td></tr>";
    }
    
    result += "<tr><td><button class='btn btn-block btn-outline-dark' onclick='memRoundF(0)'>LEFT</button></td>";
    result += "<td><button class='btn btn-block btn-outline-dark' onclick='memRoundF(1)'>CENTER</button></td>";
    result += "<td><button class='btn btn-block btn-outline-dark' onclick='memRoundF(2)'>RIGHT</button></td></tr>"
    result += "</tbody></table>";

    memorizeBoard.innerHTML = result;
    
}

function memRoundF(select){
    var array = [], i=0;
    array = deckShuffle(array, select);

    matrix = [];

    indication.innerHTML = 'The alchemical symbol you chose was:'
    var result = "<table class='table table-bordered mt-2 text-center h1 table-light'><tbody>";
    result += "<tr><td style='font-size: 100px;'>"+array[10]+"</td></tr>";
    result += "<tr><td>"+e[array[10]]+"</td></tr>";
    result += "</tbody></table>";
    result += "<button class='btn btn-block btn-outline-dark' onclick='memRoundW(0)'>YES!</button>";
    result += "<button class='btn btn-block btn-outline-dark' onclick='memRoundW(1)'>NOPE</button>";

    memorizeBoard.innerHTML = result;
    
}

function memRoundW(select){
    var result = "";
    if (!save_data['minigame2Win']){
        switch(select){
            case 0:
                result = "<span class='text-center' style='color:rgb(221, 25, 113)'>Paracelsus gives you a Philosopher's stone</span>"
                save_data['stone'] += 1;
                save_data['minigame2Win'] = true;
                stones.innerHTML = save_data['stone'];
                break;
            case 1:
                result = "<span class='text-center' style='color:rgb(221, 25, 113)'>The chimeras watch you very carefully. Something went wrong, so you get nothing this time.</span>"
                break;
        }
    }
    else{
        result = "<span class='text-center' style='color:rgb(221, 25, 113)'>The chimeras watch you very carefully. They know you're just back.</span>"
    }

    indication.innerHTML = result;
    result = "";
    result = "Do you wanna play again?";
    result += "<button class='btn btn-block btn-outline-dark' onclick='memReset()'>YES!</button>";
    result += "<button class='btn btn-block btn-outline-dark' data-dismiss='modal'>NOPE</button>";

    memorizeBoard.innerHTML = result;
    
}

function memReset(){
    indication.innerHTML = "Memorize ONE of these alchemical symbols...";
    var result = "<table class='table table-bordered mt-2 text-center h2 table-info'><tbody>";
    
    var array = [], i=0;

    for (var item in e){
        array.push (item);
    }

    array.push (" ");array.push (" ");array.push (" ");

    matrix = [];
    for (i=0; i<24; i++){
        matrix.push([array[i],array[i+1], array[i+2], array[i+3], array[i+4], array[i+5]]);
        i += 5;
    }
    for (i=0; i<4; i++){
        result += "<tr><td>"+matrix[i][0]+"</td><td>"+matrix[i][1]+"</td><td>"+matrix[i][2]+"</td><td>"+matrix[i][3]+"</td><td>"+matrix[i][4]+"</td><td>"+matrix[i][5]+"</td></tr>";
    }

    result += "</tbody></table>";
    result += "<button class='btn btn-block btn-outline-dark' onclick='playMemorize()'>I GOT IT!</button>";
    memorizeBoard.innerHTML = result;

    matrix = [];

}