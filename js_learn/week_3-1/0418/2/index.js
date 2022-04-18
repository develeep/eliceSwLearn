
// 아래 코드가 수행될 수 있도록 exchange 폴더에서 모듈을 import 하세요.
import euroToWon from './exchange/euro.js'
import {dollarToWon} from './exchange/dollar.js'
import * as ye from './exchange/asia.js'


console.log(euroToWon(100));
console.log(dollarToWon(200));
console.log(ye.yuanToWon(300));
console.log(ye.yenToWon(400));