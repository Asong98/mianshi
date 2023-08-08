"use strict";
cc._RF.push(module, '349731Sg/hBFaKK/VSgI07u', 'Loadingimg');
// Script/Loadingimg.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Loadingimg = /** @class */ (function (_super) {
    __extends(Loadingimg, _super);
    function Loadingimg() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Loadimg = null;
        _this.Time = 10;
        _this.CountTime = 10;
        _this.number = 0;
        _this.bstart = false;
        // 位置A
        _this.posA = null;
        // 位置B
        _this.posB = null;
        //按键
        _this.button_1 = null;
        _this.button_2 = null;
        _this.button_3 = null;
        _this.button_4 = null;
        _this.button_5 = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    Loadingimg.prototype.onLoad = function () {
        // 注册按键事件
        this.button_1.node.on('click', this.onButton1, this);
        this.button_2.node.on('click', this.onButton2, this);
        this.button_3.node.on('click', this.onButton3, this);
        this.button_4.node.on('click', this.onButton4, this);
        this.button_5.node.on('click', this.onButton5, this);
    };
    Loadingimg.prototype.start = function () {
        this.Loadimg = this.getComponent(cc.Sprite);
    };
    // 需要实现“扇形技能冷却效果”
    Loadingimg.prototype.onButton1 = function () {
        if (this.bstart) {
            this.bstart = false;
        }
        else if (!this.bstart) {
            this.Time = 0;
            this.bstart = true;
        }
    };
    Loadingimg.prototype.onButton2 = function () {
        this.moveToA();
    };
    Loadingimg.prototype.onButton3 = function () {
        this.moveToB();
    };
    Loadingimg.prototype.onButton4 = function () {
        this.setOPacity();
    };
    Loadingimg.prototype.onButton5 = function () {
        this.allAction();
    };
    Loadingimg.prototype.update = function (dt) {
        if (this.bstart) {
            this.Time += dt * 10;
        }
        if (this.Time >= 10) {
            this.Time = 10;
        }
        this.number = this.Time / this.CountTime;
        this.Loadimg.fillRange = this.number;
    };
    // 冷却效果
    Loadingimg.prototype.moveToA = function () {
        var posationA = this.posA.position;
        // cc.tween(this.node)
        // .to(1,{position:posationA,scale:2})
        // .delay(1)
        // .start();
        var spawn = cc.spawn(cc.moveTo(1, posationA.x, posationA.y), cc.scaleTo(1, 2));
        this.node.runAction(spawn);
    };
    Loadingimg.prototype.moveToB = function () {
        var posationB = cc.v2(this.posB.position.x, this.posB.position.x);
        var bezierPoints = [cc.v2(0, this.posB.position.y), cc.v2(this.posB.position.x, 0), posationB];
        var seq = cc.sequence(cc.moveTo(1, posationB.x, posationB.y), cc.bezierTo(1, bezierPoints));
        this.node.runAction(seq);
    };
    // 循环不透明度
    Loadingimg.prototype.setOPacity = function () {
        var seq = cc.repeatForever(cc.sequence(cc.fadeTo(1, 0.1), cc.fadeTo(1, 255)));
        this.node.runAction(seq);
    };
    Loadingimg.prototype.allAction = function () {
        var posationA = this.posA.position;
        var posationB = cc.v2(this.posB.position.x, this.posB.position.x);
        var bezierPoints = [cc.v2(0, this.posB.position.y), cc.v2(this.posB.position.x, 0), posationB];
        var spawn = cc.spawn(cc.moveTo(1, posationA.x, posationA.y), cc.scaleTo(1, 2));
        var seq = cc.sequence(cc.moveTo(1, posationB.x, posationB.y), cc.bezierTo(1, bezierPoints));
        var seq2 = cc.repeatForever(cc.sequence(cc.fadeTo(1, 0.1), cc.fadeTo(1, 255)));
        var all = cc.sequence(spawn, seq, seq2);
        this.node.runAction(all);
    };
    __decorate([
        property(cc.Node)
    ], Loadingimg.prototype, "posA", void 0);
    __decorate([
        property(cc.Node)
    ], Loadingimg.prototype, "posB", void 0);
    __decorate([
        property(cc.Button)
    ], Loadingimg.prototype, "button_1", void 0);
    __decorate([
        property(cc.Button)
    ], Loadingimg.prototype, "button_2", void 0);
    __decorate([
        property(cc.Button)
    ], Loadingimg.prototype, "button_3", void 0);
    __decorate([
        property(cc.Button)
    ], Loadingimg.prototype, "button_4", void 0);
    __decorate([
        property(cc.Button)
    ], Loadingimg.prototype, "button_5", void 0);
    Loadingimg = __decorate([
        ccclass
    ], Loadingimg);
    return Loadingimg;
}(cc.Component));
exports.default = Loadingimg;

cc._RF.pop();