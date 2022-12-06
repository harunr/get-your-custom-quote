var Currency = {
    rates: {
        USD: 1,
        EUR: 1.03663,
        GBP: 1.20544,
        CAD: .745686,
        ARS: .00602643,
        AUD: .671095,
        BRL: .184837,
        CLP: .00108439,
        CNY: .139478,
        CYP: .397899,
        CZK: .0425768,
        DKK: .139397,
        EEK: .0706676,
        HKD: .128033,
        HUF: .00253313,
        ISK: .007099,
        INR: .0122442,
        JMD: .00649902,
        JPY: .00717538,
        LVL: 1.57329,
        LTL: .320236,
        MTL: .293496,
        MXN: .0516833,
        NZD: .621655,
        NOK: .100868,
        PLN: .220926,
        SGD: .725279,
        SKK: 21.5517,
        SIT: 175.439,
        ZAR: .0582671,
        KRW: 748753e-9,
        SEK: .0955912,
        CHF: 1.05552,
        TWD: .0323161,
        UYU: .0255197,
        MYR: .223241,
        BSD: 1,
        CRC: .00164966,
        RON: .210868,
        PHP: .017637,
        AED: .272294,
        VEB: 962608e-15,
        IDR: 637456e-10,
        TRY: .0536975,
        THB: .0278084,
        TTD: .147556,
        ILS: .29215,
        SYP: 398012e-9,
        XCD: .370373,
        COP: 205505e-9,
        RUB: .0165289,
        HRK: .137683,
        KZT: .00214936,
        TZS: 428776e-9,
        XPT: 983.505,
        SAR: .266667,
        NIO: .0278276,
        LAK: 579241e-10,
        OMR: 2.59684,
        AMD: .00254318,
        CDF: 488235e-9,
        KPW: .00111116,
        SPL: 6,
        KES: .00817722,
        ZWD: .00276319,
        KHR: 241816e-9,
        MVR: .0649451,
        GTQ: .128324,
        BZD: .496898,
        BYR: 398398e-10,
        LYD: .204772,
        DZD: .00722892,
        BIF: 486144e-9,
        GIP: 1.20544,
        BOB: .144959,
        XOF: .00158033,
        STD: 421771e-10,
        NGN: .00225567,
        PGK: .285102,
        ERN: .0666667,
        MWK: 975681e-9,
        CUP: .0417282,
        GMD: .0162788,
        CVE: .0094008,
        BTN: .0122442,
        XAF: .00158033,
        UGX: 267244e-9,
        MAD: .0935718,
        MNT: 292171e-9,
        LSL: .0582671,
        XAG: 21.3049,
        TOP: .424262,
        SHP: 1.20544,
        RSD: .00886285,
        HTG: .00726185,
        MGA: 230604e-9,
        MZN: .015665,
        FKP: 1.20544,
        BWP: .0774708,
        HNL: .0404077,
        PYG: 13905e-8,
        JEP: 1.20544,
        EGP: .0406983,
        LBP: 66335e-8,
        ANG: .5587,
        WST: .36951,
        TVD: .671095,
        GYD: .00479378,
        GGP: 1.20544,
        NPR: .00764907,
        KMF: .0021071,
        IRR: 234723e-10,
        XPD: 1842.47,
        SRD: .0320592,
        TMM: 572484e-10,
        SZL: .0582671,
        MOP: .124304,
        BMD: 1,
        XPF: .00868693,
        ETB: .0188684,
        JOD: 1.41044,
        MDL: .0521268,
        MRO: .00262629,
        YER: .00399681,
        BAM: .530019,
        AWG: .558659,
        PEN: .259095,
        VEF: 962608e-12,
        SLL: 547807e-10,
        KYD: 1.21952,
        AOA: .00195901,
        TND: .309712,
        TJS: .0995542,
        SCR: .0747935,
        LKR: .00272121,
        DJF: .00562493,
        GNF: 114118e-9,
        VUV: .00842388,
        SDG: .00175686,
        IMP: 1.20544,
        GEL: .369732,
        FJD: .451562,
        DOP: .0183428,
        XDR: 1.31406,
        MUR: .0229147,
        MMK: 476898e-9,
        LRD: .00649407,
        BBD: .5,
        ZMK: 591841e-10,
        XAU: 1750.86,
        VND: 402526e-10,
        UAH: .027085,
        TMT: .286242,
        IQD: 685794e-9,
        BGN: .530019,
        KGS: .0118413,
        RWF: 948361e-9,
        BHD: 2.65957,
        UZS: 889034e-10,
        PKR: .00445254,
        MKD: .0168994,
        AFN: .0112149,
        NAD: .0582671,
        BDT: .00980459,
        AZN: .587392,
        SOS: .00176002,
        QAR: .274725,
        PAB: 1,
        CUC: 1,
        SVC: .114286,
        SBD: .12145,
        ALL: .00905202,
        BND: .725279,
        KWD: 3.2513,
        GHS: .0689993,
        ZMW: .0591841,
        XBT: 16055.5,
        NTD: .0337206,
        BYN: .398398,
        CNH: .137858,
        MRU: .0262629,
        STN: .0421771,
        VES: .0962608,
        MXV: .36322,
        VED: .0962608,
        SLE: .0547807
    },
    convert: function (D, R, S) {
        return D * this.rates[R] / this.rates[S]
    }
};
//# sourceMappingURL=/s/javascripts/currencies.js.map