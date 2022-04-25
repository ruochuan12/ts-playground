abstract class BaseCi{
    constructor(){}
    abstract init(): void;
}

class WeappCi extends BaseCi{
    init(){
        console.log(1);
    }
}

const weappCi = new WeappCi();

console.log(weappCi);