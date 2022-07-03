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
        production.innerHTML = save_data['counter'];
    },1000);
}

function stop(){
    clearInterval(lps_aux);
}

function load() {
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

                save_data['backgroundImage'] = "";
                save_data['backgroundMusic'] = "";
                
                
                run();
                break;

            default:
                
                console.log('Game loaded successfully');

                run();

                break;

        }
        production.innerHTML = save_data['counter'];
        per_second.innerHTML = save_data['lps'];
        azufre.innerHTML = save_data['azufre'];
        azufreValue.innerHTML = save_data['azufre_v'];
        azufre_cost.innerHTML = save_data['azufreC'].toFixed(2);
        azufreS_cost.innerHTML = save_data['azufreSC'].toFixed(2);

        clicks_cost.innerHTML = save_data['click_cost'].toFixed(2);

        mercurio.innerHTML = save_data['mercurio'];
        mercurioValue.innerHTML = save_data['mercurio_v'];
        mercurio_cost.innerHTML = save_data['mercurioC'].toFixed(2);
        mercurioS_cost.innerHTML = save_data['mercurioSC'].toFixed(2);

        sal.innerHTML = save_data['sal'];
        salValue.innerHTML = save_data['sal_v'];
        sal_cost.innerHTML = save_data['salC'].toFixed(2);
        salS_cost.innerHTML = save_data['salSC'].toFixed(2);

        fire.innerHTML = save_data['fire'];
        fireValue.innerHTML = save_data['fire_v'];
        fire_cost.innerHTML = save_data['fireC'].toFixed(2);
        fireS_cost.innerHTML = save_data['fireSC'].toFixed(2);

        water.innerHTML = save_data['water'];
        waterValue.innerHTML = save_data['water_v'];
        water_cost.innerHTML = save_data['waterC'].toFixed(2);
        waterS_cost.innerHTML = save_data['waterSC'].toFixed(2);

        air.innerHTML = save_data['air'];
        airValue.innerHTML = save_data['air_v'];
        air_cost.innerHTML = save_data['airC'].toFixed(2);
        airS_cost.innerHTML = save_data['airSC'].toFixed(2);

        earth.innerHTML = save_data['earth'];
        earthValue.innerHTML = save_data['earth_v'];
        earth_cost.innerHTML = save_data['earthC'].toFixed(2);
        earthS_cost.innerHTML = save_data['earthSC'].toFixed(2);

        stones.innerHTML = save_data['stone'];
        stoneS_cost.innerHTML = save_data['stoneSC'].toFixed(2);


        document.body.style.backgroundImage = "url('" + save_data['backgroundImage'] +"')";

        if (save_data['backgroundMusic'] !== ''){
            player.src = save_data['backgroundMusic'];
        }
    }
    catch (e){
        console.log ('Unexpected error: ' + e.message)
    }
}

function add(){
    save_data['counter'] += 1 * save_data['multiplier']; 
    production.innerHTML = save_data['counter'];
}

function upgrade(type){
    switch(type){
        case 1:
            if (save_data['counter']>=save_data['azufreC']){
                save_data['counter'] -= Math.round(save_data['azufreC']);
                save_data['azufreC'] = save_data['azufreC'] * Math.pow(1.4,(save_data['azufre']+1));
                save_data['azufre'] += 1;
                stop();
                run();
                azufre.innerHTML = save_data['azufre'];
                azufre_cost.innerHTML = save_data['azufreC'].toFixed(2);
            }
            break;
        case 2:
            if (save_data['counter']>=save_data['mercurioC']){
                save_data['counter'] -= Math.round(save_data['mercurioC']);
                save_data['mercurioC'] = save_data['mercurioC'] * Math.pow(1.6,(save_data['mercurio']+1));
                save_data['mercurio'] += 1;
                stop();
                run();
                mercurio.innerHTML = save_data['mercurio'];
                mercurio_cost.innerHTML = save_data['mercurioC'].toFixed(2);
            }
            break;
        case 3:
            if (save_data['counter']>=save_data['salC']){
                save_data['counter'] -= Math.round(save_data['salC']);
                save_data['salC'] = save_data['salC'] * Math.pow(1.8,(save_data['sal']+1));
                save_data['sal'] += 1;
                stop();
                run();
                sal.innerHTML = save_data['sal'];
                sal_cost.innerHTML = save_data['salC'].toFixed(2);
            }
            break;
        case 4:
            if (save_data['counter']>=save_data['fireC']){
                save_data['counter'] -= Math.round(save_data['fireC']);
                save_data['fireC'] = save_data['fireC'] * Math.pow(2.0,(save_data['fire']+1));
                save_data['fire'] += 1;
                stop();
                run();
                fire.innerHTML = save_data['fire'];
                fire_cost.innerHTML = save_data['fireC'].toFixed(2);
            }
            break;
        case 5:
            if (save_data['counter']>=save_data['waterC']){
                save_data['counter'] -= Math.round(save_data['waterC']);
                save_data['waterC'] = save_data['waterC'] * Math.pow(2.2,(save_data['water']+1));
                save_data['water'] += 1;
                stop();
                run();
                water.innerHTML = save_data['water'];
                water_cost.innerHTML = save_data['waterC'].toFixed(2);
            }
            break;
        case 6:
            if (save_data['counter']>=save_data['airC']){
                save_data['counter'] -= Math.round(save_data['airC']);
                save_data['airC'] = save_data['airC'] * Math.pow(2.4,(save_data['air']+1));
                save_data['air'] += 1;
                stop();
                run();
                air.innerHTML = save_data['air'];
                air_cost.innerHTML = save_data['airC'].toFixed(2);
            }
            break;
        case 7:
            if (save_data['counter']>=save_data['earthC']){
                save_data['counter'] -= Math.round(save_data['earthC']);
                save_data['earthC'] = save_data['earthC'] * Math.pow(2.6,(save_data['earth']+1));
                save_data['earth'] += 1;
                stop();
                run();
                earth.innerHTML = save_data['earth'];
                earth_cost.innerHTML = save_data['earthC'].toFixed(2);
            }
            break;
    }
    production.innerHTML = save_data['counter'];
    per_second.innerHTML = save_data['lps'];
}

function upgradeSpirit(type){
    switch(type){
        case 0:
            if (save_data['counter']>=save_data['click_cost']){
                save_data['counter'] -= Math.round(save_data['click_cost']);
                save_data['click_cost'] = save_data['click_cost'] * Math.pow(2.1,(save_data['multiplier']+1));
                save_data['multiplier'] += 1;
                stop();
                run();
                clicks_cost.innerHTML = save_data['click_cost'].toFixed(2);
            }
            break;
        case 1:
            if (save_data['counter']>=save_data['azufreSC']){
                save_data['counter'] -= Math.round(save_data['azufreSC']);
                save_data['azufreSC'] = save_data['azufreSC'] * Math.pow(1.9,(save_data['azufreSpirits']+1));
                save_data['azufreSpirits'] += 1;
                save_data['azufre_v'] = save_data['azufre_v']*2;
                stop();
                run();
                azufreValue.innerHTML = save_data['azufre_v'];
                azufreS_cost.innerHTML = save_data['azufreSC'].toFixed(2);
            }
            break;
        case 2:
            if (save_data['counter']>=save_data['mercurioSC']){
                save_data['counter'] -= Math.round(save_data['mercurioSC']);
                save_data['mercurioSC'] = save_data['mercurioSC'] * Math.pow(1.9,(save_data['mercurioSpirits']+1));
                save_data['mercurioSpirits'] += 1;
                save_data['mercurio_v'] = save_data['mercurio_v']*2;
                stop();
                run();
                mercurioValue.innerHTML = save_data['mercurio_v'];
                mercurioS_cost.innerHTML = save_data['mercurioSC'].toFixed(2);
            }
            break;
        case 3:
            if (save_data['counter']>=save_data['salSC']){
                save_data['counter'] -= Math.round(save_data['salSC']);
                save_data['salSC'] = save_data['salSC'] * Math.pow(1.9,(save_data['salSpirits']+1));
                save_data['salSpirits'] += 1;
                save_data['sal_v'] = save_data['sal_v']*2;
                stop();
                run();
                salValue.innerHTML = save_data['sal_v'];
                salS_cost.innerHTML = save_data['salSC'].toFixed(2);
            }
            break;
        case 4:
            if (save_data['counter']>=save_data['fireSC']){
                save_data['counter'] -= Math.round(save_data['fireSC']);
                save_data['fireSC'] = save_data['fireSC'] * Math.pow(1.9,(save_data['fireSpirits']+1));
                save_data['fireSpirits'] += 1;
                save_data['fire_v'] = save_data['fire_v']*2;
                stop();
                run();
                fireValue.innerHTML = save_data['fire_v'];
                fireS_cost.innerHTML = save_data['fireSC'].toFixed(2);
            }
            break;
        case 5:
            if (save_data['counter']>=save_data['waterSC']){
                save_data['counter'] -= Math.round(save_data['waterSC']);
                save_data['waterSC'] = save_data['waterSC'] * Math.pow(1.9,(save_data['waterSpirits']+1));
                save_data['waterSpirits'] += 1;
                save_data['water_v'] = save_data['water_v']*2;
                stop();
                run();
                waterValue.innerHTML = save_data['water_v'];
                waterS_cost.innerHTML = save_data['waterSC'].toFixed(2);
            }
            break;
        case 6:
            if (save_data['counter']>=save_data['airSC']){
                save_data['counter'] -= Math.round(save_data['airSC']);
                save_data['airSC'] = save_data['airSC'] * Math.pow(1.9,(save_data['airSpirits']+1));
                save_data['airSpirits'] += 1;
                save_data['air_v'] = save_data['air_v']*2;
                stop();
                run();
                airValue.innerHTML = save_data['air_v'];
                airS_cost.innerHTML = save_data['airSC'].toFixed(2);
            }
            break;
        case 7:
            if (save_data['counter']>=save_data['earthSC']){
                save_data['counter'] -= Math.round(save_data['earthSC']);
                save_data['earthSC'] = save_data['earthSC'] * Math.pow(1.9,(save_data['earthSpirits']+1));
                save_data['earthSpirits'] += 1;
                save_data['earth_v'] = save_data['earth_v']*2;
                stop();
                run();
                earthValue.innerHTML = save_data['earth_v'];
                earthS_cost.innerHTML = save_data['earthSC'].toFixed(2);
            }
            break;
        case 8:
            if (save_data['counter']>=save_data['stoneSC']){
                save_data['counter'] -= Math.round(save_data['stoneSC']);
                save_data['stoneSC'] = save_data['stoneSC'] * Math.pow(4,(save_data['stone']+1));
                save_data['stone'] += 1;
                stop();
                run();
                stones.innerHTML = save_data['stone'];
                stoneS_cost.innerHTML = save_data['stoneSC'].toFixed(2);
            }
            break;
    }
    production.innerHTML = save_data['counter'];
    per_second.innerHTML = save_data['lps'];    
    
}

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


  