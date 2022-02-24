module.exports = function toReadable (number) {
    let str='', str_num=-'', n1=0, n10=0, n100=0;
    let number_1=[
        '',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen'
    ];

    let number_10=[
        '',
        '',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety'
    ];

    if(number==0) return 'zero';
    str_num=String(number).split('').reverse().join('');
    n1=Number(str_num[0]);
    if (str_num.length>1) n10=Number(str_num[1]);
    if (str_num.length>2) n100=Number(str_num[2]);

    if(n100) 
        str = number_1[n100]+' hundred';
    if(n10>1)  
        str = str + ((n100)?' ':'') + number_10[n10];
    if(n10==1) 
        str = str + ((n100)?' ':'') + number_1[10+n1];
    else
        if(n1) 
            str = str + ((n10||n100)?' ':'') + number_1[n1]; 
    return str;
}
