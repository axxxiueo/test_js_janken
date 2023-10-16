const GU    = 1;
const CHOKI = 2;
const PA    = 3;

let hum = prompt('半角数字で1〜3の数字を入力してください。\n\n' + GU + ':グー\n' + CHOKI + ':チョキ\n' + PA + ':パー');
hum = parseInt(hum, 10);

if (hum !== GU && hum !== CHOKI && hum !== PA){
    alert('入力値をうまく認識できませんでした。ブラウザを再読み込みすると、もう一度挑戦できます。');
}else{
    let com = Math.floor(Math.random() * 3) + 1;
    let comHandName = '';
    switch (com){
        case GU:
            comHandName = 'グー';
            break;
        case CHOKI:
            comHandName = 'チョキ';
            break;
        case PA:
            comHandName = 'パー';
            break;
    }

    let msgResult = '';
    if (hum === com){
        msgResult = '結果はあいこでした。';
    }else if ((com === GU & hum === PA) || (com === CHOKI && hum === GU) || (com === PA && hum === CHOKI)){
        msgResult = '勝ちました。';
    }else{
        msgResult = '負けました。';
    }

msgResult = msgResult + 'コンピュータの出した手は「' + comHandName + '」でした';
    alert(msgResult);
}

