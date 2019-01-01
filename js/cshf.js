/*
 * @title: Client Side Hash Function
 * @author: heisramby
 *
 * */

function pre_hash(str) {
    function ascii_sum(str) {
        sum = 0;
        splited_str = str.split('');
        for (i = 0; i < splited_str.length; i++) {
            sum += splited_str[i].charCodeAt(0);
        }
        return sum;
    }

    DEN_SURF = 43094;
    DEMIRANDOM = (DEN_SURF * ascii_sum(str)).toString();
    RANDOM_CHARS = ['8', 'v', 'w', 'a', 'q', 'j', 'c', 'b', 'p', '5'];
    FINAL_HASH = '';

    DEMI_INDEXES = DEMIRANDOM.split('');

    for (i = 0; i < 6; i++) {
        FINAL_HASH += RANDOM_CHARS[parseInt(DEMI_INDEXES[i])];
    }

    RANDOM_CHARS = ['k', '6', 'c', 'u', 'y', 'm', '1', 'q', 't', 'i'];
    QRO_SURF = 11699;
    DEMIRANDOM = (Math.abs(Math.sin(QRO_SURF) * ascii_sum(str))).toString();
    DEMI_INDEXES = DEMIRANDOM.split('');
    INDEXES = new Array();

    for (i = 0; i < DEMI_INDEXES.length; i++) {
        if (!(DEMI_INDEXES[i] === '.')) {
            INDEXES.push(parseInt(DEMI_INDEXES[i]));
        }
    }

    for (i = 0; i < 6; i++) {
        FINAL_HASH += RANDOM_CHARS[INDEXES[i]];
    }

    RANDOM_CHARS = ['o', 'w', 'f', 'h', 'z', 'r', 'a', 'm', 'b', 'y'];
    VAT_SURF = 526236;
    DEMIRANDOM = (Math.E * VAT_SURF * ascii_sum(str)).toString();
    DEMI_INDEXES = DEMIRANDOM.split('');
    NEW_INDEXES = new Array();

    for (i = 0; i < DEMI_INDEXES.length; i++) {
        if (!(DEMI_INDEXES[i] === '.')) {
            NEW_INDEXES.push(parseInt(DEMI_INDEXES[i]));
        }
    }

    for (i = 0; i < 6; i++) {
        FINAL_HASH += RANDOM_CHARS[NEW_INDEXES[i]];
    }

    RANDOM_CHARS = ['1', '0', 'm', 'z', 'x', '8', '3', 'h', 'i', 'e'];
    MON_SURF = 238397;
    DEMIRANDOM = (Math.abs(Math.sin(MON_SURF * ascii_sum(str)))).toString();
    DEMI_INDEXES = DEMIRANDOM.split('');
    NEW_INDEXES = new Array();

    for (i = 0; i < DEMI_INDEXES.length; i++) {
        if (!(DEMI_INDEXES[i] === '.')) {
            NEW_INDEXES.push(parseInt(DEMI_INDEXES[i]));
        }
    }

    for (i = 0; i < 6; i++) {
        FINAL_HASH += RANDOM_CHARS[NEW_INDEXES[i]];
    }

    return FINAL_HASH;
}