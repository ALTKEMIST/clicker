var save_data = {};
var lps_aux;
var musicOn = false;

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
    console.log('Game version: 1.1.0');

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
                save_data['stoneSC'] = save_data['stoneSC'] * Math.pow(1.02,(save_data['stone']+1));
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
            if (save_data['stone']>=20 && !save_data['eterna_juventud']){
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
        $("#cheatsMSG").html("You already have this contract.");
        $('#cheats').modal("show");
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
  