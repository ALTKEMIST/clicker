var save_data = {};
var lps_aux;

function loadLista(){
    save_data = JSON.parse(localStorage.getItem('save_data'));

    if (save_data==null){
        save_data = {};
    }

    load();
}
function run(){
    save_data['lps'] = save_data['azufre'] * save_data['azufre_v'];
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
                save_data['azufre'] = 0;
                save_data['azufre_v'] = 1;
                save_data['azufreC'] = 10;
                save_data['azufreSC'] = 100;
                save_data['azufreSpirits'] = 0;
                save_data['click_cost'] = 1000;
                
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
                save_data['azufreC'] = save_data['azufreC'] + Math.pow(1.4,(save_data['azufre']+1));
                save_data['azufre'] += 1;
                stop();
                run();
            }
            break;
    }
    production.innerHTML = save_data['counter'];
    per_second.innerHTML = save_data['lps'];

    azufre.innerHTML = save_data['azufre'];
    azufre_cost.innerHTML = save_data['azufreC'].toFixed(2);
}

function upgradeSpirit(type){
    switch(type){
        case 0:
            if (save_data['counter']>=save_data['click_cost']){
                save_data['counter'] -= Math.round(save_data['click_cost']);
                save_data['click_cost'] = save_data['click_cost'] + Math.pow(2.1,(save_data['multiplier']+1));
                save_data['multiplier'] += 1;
                stop();
                run();
            }
            break;
        case 1:
            if (save_data['counter']>=save_data['azufreSC']){
                save_data['counter'] -= Math.round(save_data['azufreSC']);
                save_data['azufreSC'] = save_data['azufreSC'] + Math.pow(1.9,(save_data['azufreSpirits']+1));
                save_data['azufreSpirits'] += 1;
                save_data['azufre_v'] = save_data['azufre_v']*2;
                stop();
                run();
                
            }
            break;
    }
    production.innerHTML = save_data['counter'];
    per_second.innerHTML = save_data['lps'];

    azufreValue.innerHTML = save_data['azufre_v'];
    azufreS_cost.innerHTML = save_data['azufreSC'].toFixed(2);
    clicks_cost.innerHTML = save_data['click_cost'].toFixed(2);
}

function saveGame(){
    localStorage.setItem('save_data', JSON.stringify(save_data));
    gameState.innerHTML = "<small class='text-success'>Partida guardada satisfactoriamente </small>";
}

function clearGame(){
    if (confirm("The game data will be deleted.")){
        
        localStorage.removeItem('save_data');
        gameState.innerHTML = "<small class='text-danger'>Partida eliminada satisfactoriamente </small>";
    }
    
}

