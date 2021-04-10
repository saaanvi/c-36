class Form{
    constructor(){

    }
    display(){
        var title = createElement('h1');
        title.html("CAR RACING GAME");
        title.position(130,0);

        var input = createInput("Name");
        input.position(130,160);

        var button = createButton("PLAY");
        button.position(250,200);

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount += 1;
            player.update(name);
           
            player.updateCount(playerCount);
            var greeting =createElement('h3');
            greeting.position(130,160);
            greeting.html("hello   "+name)
        })
    }

}