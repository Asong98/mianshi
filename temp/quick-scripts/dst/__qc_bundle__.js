
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/Helloworld');
require('./assets/Script/Loadingimg');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Helloworld.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e1b90/rohdEk4SdmmEZANaD', 'Helloworld');
// Script/Helloworld.ts

"use strict";
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
var Helloworld = /** @class */ (function (_super) {
    __extends(Helloworld, _super);
    function Helloworld() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
    }
    Helloworld.prototype.start = function () {
        // init logic
        // this.label.string = this.text;
    };
    __decorate([
        property(cc.Label)
    ], Helloworld.prototype, "label", void 0);
    __decorate([
        property
    ], Helloworld.prototype, "text", void 0);
    Helloworld = __decorate([
        ccclass
    ], Helloworld);
    return Helloworld;
}(cc.Component));
exports.default = Helloworld;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxIZWxsb3dvcmxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBWUM7UUFURyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7O0lBTTNCLENBQUM7SUFKRywwQkFBSyxHQUFMO1FBQ0ksYUFBYTtRQUNiLGlDQUFpQztJQUNyQyxDQUFDO0lBUkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs2Q0FDSTtJQUd2QjtRQURDLFFBQVE7NENBQ2M7SUFOTixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBWTlCO0lBQUQsaUJBQUM7Q0FaRCxBQVlDLENBWnVDLEVBQUUsQ0FBQyxTQUFTLEdBWW5EO2tCQVpvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWxsb3dvcmxkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy8gaW5pdCBsb2dpY1xyXG4gICAgICAgIC8vIHRoaXMubGFiZWwuc3RyaW5nID0gdGhpcy50ZXh0O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Loadingimg.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxMb2FkaW5naW1nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBaUlDO1FBL0hVLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFDMUIsVUFBSSxHQUFRLEVBQUUsQ0FBQztRQUNmLGVBQVMsR0FBUSxFQUFFLENBQUM7UUFDcEIsWUFBTSxHQUFRLENBQUMsQ0FBQztRQUNoQixZQUFNLEdBQVMsS0FBSyxDQUFDO1FBRTVCLE1BQU07UUFFQyxVQUFJLEdBQVMsSUFBSSxDQUFDO1FBQ3pCLE1BQU07UUFFQyxVQUFJLEdBQVMsSUFBSSxDQUFDO1FBR3pCLElBQUk7UUFFSixjQUFRLEdBQVcsSUFBSSxDQUFDO1FBRXhCLGNBQVEsR0FBVyxJQUFJLENBQUM7UUFFeEIsY0FBUSxHQUFXLElBQUksQ0FBQztRQUV4QixjQUFRLEdBQVcsSUFBSSxDQUFDO1FBRXhCLGNBQVEsR0FBVyxJQUFJLENBQUM7O0lBdUc1QixDQUFDO0lBckdHLHdCQUF3QjtJQUV4QiwyQkFBTSxHQUFOO1FBQ0ksU0FBUztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJ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QyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNJO0lBMUJQLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FpSTlCO0lBQUQsaUJBQUM7Q0FqSUQsQUFpSUMsQ0FqSXVDLEVBQUUsQ0FBQyxTQUFTLEdBaUluRDtrQkFqSW9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRpbmdpbWcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHB1YmxpYyBMb2FkaW1nOiBjYy5TcHJpdGUgPSBudWxsO1xyXG4gICAgcHVibGljIFRpbWU6bnVtYmVyPTEwO1xyXG4gICAgcHVibGljIENvdW50VGltZTpudW1iZXI9MTA7XHJcbiAgICBwdWJsaWMgbnVtYmVyOm51bWJlcj0wO1xyXG4gICAgcHVibGljIGJzdGFydDpib29sZWFuPWZhbHNlO1xyXG5cclxuICAgIC8vIOS9jee9rkFcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHVibGljIHBvc0E6Y2MuTm9kZT1udWxsO1xyXG4gICAgLy8g5L2N572uQlxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwdWJsaWMgcG9zQjpjYy5Ob2RlPW51bGw7XHJcblxyXG5cclxuICAgIC8v5oyJ6ZSuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgYnV0dG9uXzE6Y2MuQnV0dG9uPW51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgYnV0dG9uXzI6Y2MuQnV0dG9uPW51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgYnV0dG9uXzM6Y2MuQnV0dG9uPW51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgYnV0dG9uXzQ6Y2MuQnV0dG9uPW51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgYnV0dG9uXzU6Y2MuQnV0dG9uPW51bGw7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICAvLyDms6jlhozmjInplK7kuovku7ZcclxuICAgICAgICB0aGlzLmJ1dHRvbl8xLm5vZGUub24oJ2NsaWNrJywgdGhpcy5vbkJ1dHRvbjEsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uXzIubm9kZS5vbignY2xpY2snLCB0aGlzLm9uQnV0dG9uMiwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5idXR0b25fMy5ub2RlLm9uKCdjbGljaycsIHRoaXMub25CdXR0b24zLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbl80Lm5vZGUub24oJ2NsaWNrJywgdGhpcy5vbkJ1dHRvbjQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uXzUubm9kZS5vbignY2xpY2snLCB0aGlzLm9uQnV0dG9uNSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuTG9hZGltZz10aGlzLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOmcgOimgeWunueOsOKAnOaJh+W9ouaKgOiDveWGt+WNtOaViOaenOKAnVxyXG4gICAgb25CdXR0b24xKCl7XHJcbiAgICAgICAgaWYodGhpcy5ic3RhcnQpe1xyXG4gICAgICAgICAgICB0aGlzLmJzdGFydD1mYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZighdGhpcy5ic3RhcnQpe1xyXG4gICAgICAgICAgICB0aGlzLlRpbWU9MDtcclxuICAgICAgICAgICAgdGhpcy5ic3RhcnQ9dHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25CdXR0b24yKCl7XHJcbiAgICAgICAgdGhpcy5tb3ZlVG9BKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CdXR0b24zKCl7XHJcbiAgICAgICAgdGhpcy5tb3ZlVG9CKClcclxuICAgIH1cclxuXHJcbiAgICBvbkJ1dHRvbjQoKXtcclxuICAgICAgICB0aGlzLnNldE9QYWNpdHkoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ1dHRvbjUoKXtcclxuICAgICAgICB0aGlzLmFsbEFjdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBpZih0aGlzLmJzdGFydCl7XHJcbiAgICAgICAgICAgIHRoaXMuVGltZSs9ZHQqMTA7XHJcbiAgICAgICAgfSAgICAgXHJcbiAgICAgICAgaWYodGhpcy5UaW1lPj0xMCl7XHJcbiAgICAgICAgICAgIHRoaXMuVGltZT0xMFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm51bWJlcj10aGlzLlRpbWUvdGhpcy5Db3VudFRpbWU7XHJcbiAgICAgICAgdGhpcy5Mb2FkaW1nLmZpbGxSYW5nZT10aGlzLm51bWJlcjtcclxuICAgIH1cclxuXHJcbiAgICAvLyDlhrfljbTmlYjmnpxcclxuXHJcbiAgICBtb3ZlVG9BKCl7XHJcbiAgICAgICAgbGV0IHBvc2F0aW9uQTpjYy5WZWMzPXRoaXMucG9zQS5wb3NpdGlvbjtcclxuICAgICAgICAvLyBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgLy8gLnRvKDEse3Bvc2l0aW9uOnBvc2F0aW9uQSxzY2FsZToyfSlcclxuICAgICAgICAvLyAuZGVsYXkoMSlcclxuICAgICAgICAvLyAuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgbGV0IHNwYXduPWNjLnNwYXduKGNjLm1vdmVUbygxLHBvc2F0aW9uQS54LHBvc2F0aW9uQS55KSxjYy5zY2FsZVRvKDEsMikpO1xyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oc3Bhd24pO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVUb0IoKXtcclxuICAgICAgICBsZXQgcG9zYXRpb25COmNjLlZlYzI9Y2MudjIodGhpcy5wb3NCLnBvc2l0aW9uLngsdGhpcy5wb3NCLnBvc2l0aW9uLngpO1xyXG4gICAgICAgIGxldCBiZXppZXJQb2ludHM9W2NjLnYyKDAsdGhpcy5wb3NCLnBvc2l0aW9uLnkpLCBjYy52Mih0aGlzLnBvc0IucG9zaXRpb24ueCwgMCkscG9zYXRpb25CXVxyXG4gICAgICAgIGxldCBzZXE9Y2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgIGNjLm1vdmVUbygxLHBvc2F0aW9uQi54LHBvc2F0aW9uQi55KSxcclxuICAgICAgICAgICAgY2MuYmV6aWVyVG8oMSxiZXppZXJQb2ludHMpICAgICAgXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oc2VxKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDlvqrnjq/kuI3pgI/mmI7luqZcclxuICAgIHNldE9QYWNpdHkoKXtcclxuICAgICAgICBsZXQgc2VxPWNjLnJlcGVhdEZvcmV2ZXIoXHJcbiAgICAgICAgICAgIGNjLnNlcXVlbmNlKGNjLmZhZGVUbygxLDAuMSksY2MuZmFkZVRvKDEsMjU1KSkpO1xyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oc2VxKTtcclxuICAgIH1cclxuXHJcbiAgICBhbGxBY3Rpb24oKXtcclxuICAgICAgICBsZXQgcG9zYXRpb25BOmNjLlZlYzM9dGhpcy5wb3NBLnBvc2l0aW9uO1xyXG4gICAgICAgIGxldCBwb3NhdGlvbkI6Y2MuVmVjMj1jYy52Mih0aGlzLnBvc0IucG9zaXRpb24ueCx0aGlzLnBvc0IucG9zaXRpb24ueCk7XHJcbiAgICAgICAgbGV0IGJlemllclBvaW50cz1bY2MudjIoMCx0aGlzLnBvc0IucG9zaXRpb24ueSksIGNjLnYyKHRoaXMucG9zQi5wb3NpdGlvbi54LCAwKSxwb3NhdGlvbkJdO1xyXG4gICAgICAgIGxldCBzcGF3bj1jYy5zcGF3bihjYy5tb3ZlVG8oMSxwb3NhdGlvbkEueCxwb3NhdGlvbkEueSksY2Muc2NhbGVUbygxLDIpKTtcclxuICAgICAgICBsZXQgc2VxPWNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICBjYy5tb3ZlVG8oMSxwb3NhdGlvbkIueCxwb3NhdGlvbkIueSksXHJcbiAgICAgICAgICAgIGNjLmJlemllclRvKDEsYmV6aWVyUG9pbnRzKSAgICAgIFxyXG4gICAgICAgIClcclxuICAgICAgICBsZXQgc2VxMj1jYy5yZXBlYXRGb3JldmVyKFxyXG4gICAgICAgICAgICBjYy5zZXF1ZW5jZShjYy5mYWRlVG8oMSwwLjEpLGNjLmZhZGVUbygxLDI1NSkpKTtcclxuICAgICAgICBsZXQgYWxsPWNjLnNlcXVlbmNlKHNwYXduLHNlcSxzZXEyKTtcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGFsbCk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------
