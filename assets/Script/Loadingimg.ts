// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Loadingimg extends cc.Component {

    public Loadimg: cc.Sprite = null;
    public Time:number=10;
    public CountTime:number=10;
    public number:number=0;
    public bstart:boolean=false;

    // 位置A
    @property(cc.Node)
    public posA:cc.Node=null;
    // 位置B
    @property(cc.Node)
    public posB:cc.Node=null;


    //按键
    @property(cc.Button)
    button_1:cc.Button=null;
    @property(cc.Button)
    button_2:cc.Button=null;
    @property(cc.Button)
    button_3:cc.Button=null;
    @property(cc.Button)
    button_4:cc.Button=null;
    @property(cc.Button)
    button_5:cc.Button=null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // 注册按键事件
        this.button_1.node.on('click', this.onButton1, this);
        this.button_2.node.on('click', this.onButton2, this);
        this.button_3.node.on('click', this.onButton3, this);
        this.button_4.node.on('click', this.onButton4, this);
        this.button_5.node.on('click', this.onButton5, this);
    }

    start () {
        this.Loadimg=this.getComponent(cc.Sprite);
    }

    // 需要实现“扇形技能冷却效果”
    onButton1(){
        if(this.bstart){
            this.bstart=false;
        }
        else if(!this.bstart){
            this.Time=0;
            this.bstart=true;
        }
       

    }

    onButton2(){
        this.moveToA();
    }

    onButton3(){
        this.moveToB()
    }

    onButton4(){
        this.setOPacity();
    }

    onButton5(){
        this.allAction();
    }

    update (dt) {
        if(this.bstart){
            this.Time+=dt*10;
        }     
        if(this.Time>=10){
            this.Time=10
        }
        this.number=this.Time/this.CountTime;
        this.Loadimg.fillRange=this.number;
    }

    // 冷却效果

    moveToA(){
        let posationA:cc.Vec3=this.posA.position;
        // cc.tween(this.node)
        // .to(1,{position:posationA,scale:2})
        // .delay(1)
        // .start();

        let spawn=cc.spawn(cc.moveTo(1,posationA.x,posationA.y),cc.scaleTo(1,2));
        this.node.runAction(spawn);
    }

    moveToB(){
        let posationB:cc.Vec2=cc.v2(this.posB.position.x,this.posB.position.x);
        let bezierPoints=[cc.v2(0,this.posB.position.y), cc.v2(this.posB.position.x, 0),posationB]
        let seq=cc.sequence(
            cc.moveTo(1,posationB.x,posationB.y),
            cc.bezierTo(1,bezierPoints)      
        )
        this.node.runAction(seq);
    }

    // 循环不透明度
    setOPacity(){
        let seq=cc.repeatForever(
            cc.sequence(cc.fadeTo(1,0.1),cc.fadeTo(1,255)));
        this.node.runAction(seq);
    }

    allAction(){
        let posationA:cc.Vec3=this.posA.position;
        let posationB:cc.Vec2=cc.v2(this.posB.position.x,this.posB.position.x);
        let bezierPoints=[cc.v2(0,this.posB.position.y), cc.v2(this.posB.position.x, 0),posationB];
        let spawn=cc.spawn(cc.moveTo(1,posationA.x,posationA.y),cc.scaleTo(1,2));
        let seq=cc.sequence(
            cc.moveTo(1,posationB.x,posationB.y),
            cc.bezierTo(1,bezierPoints)      
        )
        let seq2=cc.repeatForever(
            cc.sequence(cc.fadeTo(1,0.1),cc.fadeTo(1,255)));
        let all=cc.sequence(spawn,seq,seq2);
        this.node.runAction(all);

    }

}
