'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "cd624034d250391f0426aa1dc32bb578",
".git/config": "d9faca28d4bb43ce8dbeb96469815db3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6782018074b56db2dfc32116031a1193",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "090645fd007544edeb75a6f4adc3580d",
".git/logs/refs/heads/main": "7520d979c87962a1bead1870267d9cd6",
".git/logs/refs/remotes/origin/main": "58b342d458920ad7fe9721dc3eec6952",
".git/objects/00/e4de71b53fe8a18291f93e9adead9f8b9a1318": "258c3cfb18bf6f6965bcaf03102d625e",
".git/objects/01/c9d3cd3cc3980059f807e6ec72cdcceb8f57e5": "afca1cbd85ca94f0828c504da6d3df1f",
".git/objects/02/73acc1c70cde02d501c941de2e8d4deaa55f3f": "3770c7af6ea5fdc54b723b7a9e225c57",
".git/objects/08/1db4060f64741fda0096d2748e512e4dc98ef9": "f6bc9cb15517e6a9fd857349fc6b40de",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/09/838812bc58455160f0e653e6a139fb4c564639": "cbf8ad3919351300a80f17e0c47cc0f8",
".git/objects/0b/a484e811566479ea6e5b390cdab655a627a9b3": "83cb324c21174e5a9d7788abd85af86e",
".git/objects/0c/281083ea011b91f0db1b654fad4b311189f575": "98e303f545d59602dde47530d845c80d",
".git/objects/0d/bb506b63fd0abcef1af9576b2b50cce2e5236e": "d5a0d0c48479a7b9d05ad041228a7ccb",
".git/objects/10/5b287f1a3d99ee33759192eaf981b6f2ff883a": "d6da9b1153f54f870c902edee51d5518",
".git/objects/12/9ddb94b02182f3ba92aad09eb1a486a6b56a81": "f43e9b3c20d0b43c99e9c32757e652da",
".git/objects/15/485dc22a3f13af574a454a9bcfbe97bdbb25d7": "9be34e03e100fd502fb6cfa7f4aa646f",
".git/objects/15/bdea7aa6008d2622c51fa77a5655ffb845032a": "c5f4ae422953ad8887aef59648394662",
".git/objects/15/d8999dceb44becbad70754146d9346f846b51d": "a80a85281b8d3c29323263afb05de765",
".git/objects/17/5a97fabfc0edf079c7bc63e522bdbb4b556efe": "91615ea76cacf3b1080ad8c0ed450068",
".git/objects/19/1d439fec9f17cec12e2c10636b6c1c22b17b59": "e02f76904ebca6e1d595f3183051f8de",
".git/objects/1c/3d72ed74d62ce2e030cc316ffccdf1e986d337": "3726a7146408078370c505cbee58a2a9",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/ee7c361e56c2ff15bcf59112097ac587ae2c0a": "448f5d9c2b7bfd07b036f983bfe3e6f7",
".git/objects/21/0f0c591735738cf99a09e17f2d0e61dc44aaa9": "0f916ba4906bd133fde418bcd40b8d1e",
".git/objects/25/13cb47d31bf4d25ece970efbcc0cf38c98ff33": "0f04449ae257a1c3f491911facffe5ab",
".git/objects/25/757baaa312a993bc8adee8776cbea72efc9a6e": "f5529b1a1d6df74baf5c904e90c209d7",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/29/e1b813109fe7fa23a2e3503b944b25e5c8060d": "d1a0239049e3201f91a2c5f99958c508",
".git/objects/2b/2f8a5be47bf7e9a433dcbac6cefd9a90d8cf2f": "221132c755659be7560a31f4e47e1e52",
".git/objects/2c/83e671e484ccabc0780e06c2781d43f17e0d2d": "0422fb1acd4cbfa73e65e16245523e4a",
".git/objects/2e/eff8a58d63f814ac243c35609849fbaba17634": "8e773e849e8e500cf963125ec4cf7ad7",
".git/objects/2f/9e90b6f9f66bb65cbeec94f07b18f01d2bccf1": "08b610b5671213defc86c98a816456ff",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/39/25d6b78ea8090a50d489d9d53296d19aaeb174": "f3ccca758d2a98a342d70877a483badb",
".git/objects/39/2fb0ace59a46be2b728db3a70988b8b494cc11": "71c7b0a60f5e40c7fd5b2f9f827175a6",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/8b278dcf427fc8cd3aea9229068bbcb561dc07": "903474a4ea43f1f2a93e5627d1324b4a",
".git/objects/3c/bf558f2d6d3da90f44e978ce099ec29a7e5ede": "4d6b4b0e12b893288c0d4a3d2ad79fea",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/fd0bdcf200e2a4f845a9e48e737bdf47f7ca63": "57d224eecc43997e1cd83beddf624ca1",
".git/objects/42/4690305d5e90eea6f899ef09534ab58595f49e": "1d69e4789fe0532d718dcbde02d8feae",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/80b6fa21c0195523aaea4e5ccc7d780a189c43": "a15b602732e1c0c0e532a8bdd428a43e",
".git/objects/48/a69c83a9e71252ba1b0455d1f8afae2652dace": "f482ad31529d8c486e0914937b37e2b8",
".git/objects/49/28168eee780297254ed3ac2fbfb7ea44410ad7": "9ca58d0dae01e20994d296f5b8fbca8d",
".git/objects/49/762b1e41048344ef3d691986e7409d12893480": "078ddf8851fa6933540c962119a258d5",
".git/objects/4b/3eeacf6a454d2299ef080a507c5ff6c2922497": "61f11a87cb6beee1f3aad4e4951a73bf",
".git/objects/4b/4cf3ce6ef869a4b5c23dab6defbff3704a74f7": "f5f736e184cb9fdb2e596b3ebec69632",
".git/objects/4f/283bf7e2cede5a0d679093e3cd16c023e21336": "939f40e399e67d7e939658388f2d0d23",
".git/objects/53/180de1c76fe39e86b273d44e9d2d74bbe3b2c7": "0081c571c8a5a326caa37ee4e83b6425",
".git/objects/53/a6d77034b63afb3614895f259a4218c616aed5": "4004871e5710eac7b96545e42d72ad42",
".git/objects/54/a280b27a5b29664f7866c68fcafbec2a5581f5": "733a027a2fd8d41e6dfaf243db5aae94",
".git/objects/55/b128840fa816190a33aa823389846d4e4a6117": "49ee3c835efcba60b0f4104f2de03b6a",
".git/objects/57/e069b712b03e490b46d53476cc4123b5322fd7": "ed541b9e3e3d00802d3ecb82680c2bb6",
".git/objects/59/f82a13a9578dcde1d55587f1e9a79deec3cf7a": "d8fe5f911a41327e97327726bdbf91ac",
".git/objects/5d/b35b2db5a69009d2a3c1399b2496c085f55be7": "94ff894c8808b65798c531e3c7060ee5",
".git/objects/5e/b0337ef2788013645cd11640e3581182d0987c": "9c26400f807f24c3fe4d882cd8ece943",
".git/objects/5f/e4d7aaa4455b7e6276fc57f6c62a0f60b045a3": "529d7547f73a1105f76fe12aae8e4f31",
".git/objects/61/c9f203fcfd0c35109fb75a428346527337f608": "5fffc48d8acbbfd17a8d30b1195fa334",
".git/objects/62/c7b60d6e3d59904db877900dac88efdfdb52e2": "f8e53522559893f5148fc7cef986f97e",
".git/objects/63/f837c76e139f59ba075a163cd3d769cac33a7b": "d0284eacc24a42af1817d1541266517a",
".git/objects/68/9afcfd21968f2dc06f21631222e14b1f3b42a2": "f02f4b31eb3d7509c04b67d466b7a6a9",
".git/objects/69/82885587508acd6444d8677702eab59cc204da": "069a42ce3258d5814edc10611a1c8ce8",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6e/9bea2c3f53cb053d39346cdcf4f6736dab2ad1": "c8fd7ff3a96cd8ed2f212c8dd8b0894a",
".git/objects/70/efdb7988cd2ce67498fe81b4ac939814ec1071": "004ce78e4c35863a8c2aa8aba6991157",
".git/objects/71/25a992c6b61aa61fc86a538a8afb25c9874803": "ca3cad515cbcff9f550073b46301b64e",
".git/objects/72/6af14be2ab5f1b281d1840ffd5c55f2c1f1d56": "d775d767d268980c22eae749ec0f8f70",
".git/objects/75/fb8b43b65233958d139664c3068fb28631225a": "17f21bf3aabd77fc2fb3f284f290f12c",
".git/objects/76/e248a80725303c7296e268339be120e7ba922f": "87b221ee8f8db35acd78172fc6936bab",
".git/objects/78/dfa20c742646523f6b1d2ed88cd1d2e90b134f": "dba2bb0bd545568bfe0cba68b27379a7",
".git/objects/7d/5cedfc7c034fc6bf06b43249a5f84a9b4e7eef": "ea599250e02ee231da8d22b07058e522",
".git/objects/7d/e2162e0436059738421cccc41238405395776e": "4a0abff2f0e1de9f1e12165d2dd4c343",
".git/objects/80/5a4b4a2a5c0a63b42817f0e042c417b78d603d": "6317bc02859dd8bd52ea4b5c962aef3b",
".git/objects/82/87737584edbfbd0316fa7d79283d2cd2400e4d": "c964782f34d3adcfa50011af6a725a85",
".git/objects/82/d19ce76ec718f5e2875796930db03c24e40475": "21e2174ea0a8243c26fc539579023ec0",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/43c66f1f0efb98f9007f110e85059039753f34": "de33b1d8fd96ad83da5de48a5faf03db",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/d8d5622f425a63a63501e61c3478c518b9e421": "f00142601a551cacad57a04060817029",
".git/objects/85/ffedc72d07fe57eb3583dbe7f4dc08453bb498": "948c0ed651e4b831cdb2330fb857884b",
".git/objects/87/100676eb4ab6d844d99f623fb98cd77ea48b5d": "6e2dbd51f6b6f515058fccc90ac6b660",
".git/objects/87/b768aebc205d2929d2382829a0616b74080d6e": "df24b5a9a1bf6767a5d50f5027752cdb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/026e2f89077fc67e5601d9b842e90829fbd73c": "558eafbd5fa79ed62f4919f1161b1b7d",
".git/objects/8c/68cd0fa10d6a3ee25b0a5eec80f98111c2d4ff": "483cd64846d9ce5794f18bf9ef195bae",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/604f98a1f3f44b650f2253adb5a0db52dedc20": "edfaeaffe4c5b5041a24adfa24e1959e",
".git/objects/95/30c33fb8588d9e3df9b10e5662005d780ea9b7": "813f2dd92017109fef85fcc8eea36348",
".git/objects/95/575a27dc6b8c628a2d3be5d9b27cc0638b3605": "61f6d89204f05c77a154125d89eb63db",
".git/objects/97/5b2a73c02167f77c2a644c0db1bcd4fa536ad5": "c1bd5f915e8ec5284795b876c0be559e",
".git/objects/97/efa6e30bca6c1c0386ba9c2d73ab92ed289f8f": "9e80a288c559ac614f2b86b262edb14b",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9a/0e5d06e17115a3a93540925da5e799103646b4": "8dddd6a25434bcff283fa17d71f78e2b",
".git/objects/9a/2aad04137543b39557f08ec69a0fcc0f0c2e77": "6fe5175b11d7eddaf32bfcbfce72d63e",
".git/objects/9d/3c7d11ab1fcac0ea38017bde5a8116af521f9c": "a388d50cb642a3e36beeece7142a8b3b",
".git/objects/9d/8916407b1341f68b5b9f72784d2ffbad818c9c": "d446f9a2f09cf70cf36556530beecea5",
".git/objects/a1/cb0ebe2986c899502a5f08d12c839dbf75d1ff": "494c4736c29a0a445bafb4399357ce65",
".git/objects/a4/3dfb81b8e017658ebe5067a77e40f442156502": "3f2c653130e0b5827f182a2ad2379112",
".git/objects/a4/d18eacbc3d07e5f524e7d83d6ce61c093748c6": "45d346742ee98cdb1ec137a868226571",
".git/objects/aa/759fd1cbbdf1a685c621dc0fa1db582f67131e": "33dd0d0063ec2f0099b0b3ee2a7e2511",
".git/objects/ab/18c0b576f45e21d4a2914dfee465419cc5f822": "bdbca32c2a0ed2b4b343f1312baba17f",
".git/objects/ab/e12ec9216bd4f7e71501a8a4ef474cb304b439": "2fc18d9b59a14527ac473429523f9ed2",
".git/objects/ac/9f8e9fb4f204b74512732b33459933656dcd01": "0c68f15293f20cdf254878ffcbca9f57",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b6/1f91f37dcc8d0fda36437ff94947c5558f9978": "879a901747cb46cf40aeeb869d152449",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/be/ff14f8c784342ca71497848ab3c84fbababd46": "525abf9ada5a4e392bdb3f8f8e89c15c",
".git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "f455d63cfccab304798020f3d589d259",
".git/objects/c1/16d7305d75dd80e8e45cfc0634618cf4ccf503": "1d8a9ee87ac2520ddb8d8aec66c29207",
".git/objects/c5/db7259fad1ce69f5b68361e17744d3202cbad1": "d988a744de5b4c1397da18b7e27a93b4",
".git/objects/c9/2e6934e805d76c29389a3052391bc46b27f991": "f1c11832496ebda65698e9f1efb907fd",
".git/objects/cc/e6a5bf7a469d27431048f89bb32724018c2533": "65068a0f164ea4cad59a5e711af3569a",
".git/objects/ce/ebdc3f9d9d88ba65c84ba2dcd1b15232a2264b": "75294661c18f272be2440653d1d8deee",
".git/objects/cf/76af5529beb98be7b900e519f73c848f465c8f": "8569c48e2d6b9455c172f30dc01b375d",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d3/c59eba709e1feb4b75dcb5c6ea52aba67e3baf": "69af5f5aa1448d11b3e658bce7b2dc8c",
".git/objects/d4/0c0767c04657a6394cbceff3edc9fa03a0d1a5": "eb3e5d7eaa03c04eeca2104ca660e395",
".git/objects/d4/1bca11aa1beeffb0e436c582044a23e158908b": "93d09a4d586e41ac03a50e64bbfcef1c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2983d12dc3f89cc9ed83719ef2f171e16526a3": "9c9b7ac8cc92305b16223d11b8d20804",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/848eed5608d07fdd9bacd710eaf5db0254837f": "2a140419d26e7eb1e25539ee2a944693",
".git/objects/de/b300daee30ac7a48e4cb49a0447b8590149808": "d87af0375d5cbc0e2ed4574d50c0dfb0",
".git/objects/de/c52d8cba1fa2b2d4f4be21bfaf6fafd725db5f": "96a847e9bed636705af83b86d1792196",
".git/objects/e3/b16ef000ebcab052f74ab274ffd63188b63a7b": "124e52b2483ff43470096cc78ed6a0bf",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e7/6dfff9f9f1bfa8a437d8a202e8ace5233a10ad": "ad10cd2f7501e8cff10f9b4d60dd81b6",
".git/objects/e8/a749203195471539ce6ab8d92810674593133f": "821544d648f4f7e2eda62dadfa27154a",
".git/objects/e9/b1d9c0052b2503bfc6603d4ee502e7e98a4e3f": "e42e057ccd032e7fbbc08277a761134e",
".git/objects/ea/7b6e576c7c79d7455239739747c62698a5a9f8": "f3de96e1e13de91b31e19823aa5efa02",
".git/objects/eb/4d15169696e165f1773f3269a849c48adfdf41": "40a342dca94d15e8dd9f3fdc77f942e1",
".git/objects/eb/95302b7598c1869451ae93a2198beee956b383": "79ba5427caadd3d30ff4605601149244",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/9818e62d95668025fc6e81455975d44a4dcec1": "0c874e1a1543166d14e260a61b9656a5",
".git/objects/f0/828f0338611650b48c407c29cfe341d35bc474": "a85d035e128874ff6449b65d4bb9cfc4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/ec0a9c2195cc3b9622fc68cb9ef0c68dc5e034": "5ae88acb9f0a0a813fd68fc60ac5a9bb",
".git/objects/f6/549c38ddde803b594569ed2f26879c2a644f8a": "4822011b5d34ea15b3a30565c8cb496c",
".git/objects/f8/41f750c865861c5c87d4f49c1fd1030b920cf1": "76e7101f701d6cd6b565733acef9cb75",
".git/objects/fa/f6bc7bb7dcc63ab55984149d85556a8ce9f4fc": "8f62b91f0760431729b045bfb0e9e04f",
".git/refs/heads/main": "f39860918fb5efc4bab4edcf09edd993",
".git/refs/remotes/origin/main": "f39860918fb5efc4bab4edcf09edd993",
"assets/AssetManifest.bin": "a34aae2fb7f7ac9bc2ab96253c51afef",
"assets/AssetManifest.bin.json": "5e6055c0d88b018835dee63e38298719",
"assets/AssetManifest.json": "e8199770746d5e16a94bef11eb904bf3",
"assets/assets/audio/correct.mp3": "fd3763e0354565e1893f006a110b0ef7",
"assets/assets/audio/incorrect.mp3": "1a7e6662abd24421e0ef0e9bd31abd23",
"assets/assets/audio/soundtrack.mp3": "013f7b162a67450894f45be500d3a932",
"assets/assets/images/5.png": "4bf0608ab997add88f2927739929399a",
"assets/assets/images/background.jpg": "19fc97726685094b0ca3e9c933556f2e",
"assets/assets/images/background1.jpg": "d2f5418200e6c4a182b37072ad8162e2",
"assets/assets/images/backgroungforanswer.png": "6f3f72641222c82fff2a3bebfdb4ef00",
"assets/assets/images/back_button.png": "676605db2e4b0049c09f8a36ca0ade4e",
"assets/assets/images/check.png": "4d0f478f84eccaa09b8f03eee745f352",
"assets/assets/images/confetti.gif": "550a1d6d0c7ce5e8fc75b04b3eb1f011",
"assets/assets/images/flashcards/left/00.png": "10c3dd6ff2ecf5e5d164d698823059ef",
"assets/assets/images/flashcards/left/10.png": "713dfb766eecb24b1ae4a3654ab5df1f",
"assets/assets/images/flashcards/left/20.png": "1bb3eadddaf49588367f380cd7e68625",
"assets/assets/images/flashcards/left/30.png": "1cf80afd68e417e15f1a9f3ecc43d21d",
"assets/assets/images/flashcards/left/40.png": "c48a4d2ac85dd3b14c4f9af6ff15b9c8",
"assets/assets/images/flashcards/left/50.png": "a6dd2b89740f3cf214e2eebcdd46ec7e",
"assets/assets/images/flashcards/left/60.png": "a54cd63824782b8acdc9552a87345256",
"assets/assets/images/flashcards/left/70.png": "8831600367f56817e972ed2066a310a3",
"assets/assets/images/flashcards/left/80.png": "7849def858ae18196165f1ceb9a4234d",
"assets/assets/images/flashcards/left/90.png": "197460be36ce320dd10ecf002b7d3ca6",
"assets/assets/images/flashcards/right/0.png": "4481e72067200feb3c933f046ccddd5e",
"assets/assets/images/flashcards/right/1.png": "b44954a64c4dfb12f69d888098b5c9f0",
"assets/assets/images/flashcards/right/2.png": "faabfd9b77e4414c50f174a4e396fc9b",
"assets/assets/images/flashcards/right/3.png": "cecf0ca3b78568dc8f4e3c87feeeb7ad",
"assets/assets/images/flashcards/right/4.png": "389374fdccc0844dfa0af422f28b92e5",
"assets/assets/images/flashcards/right/5.png": "b21e78b05fcd5160bd1d9512a930ea41",
"assets/assets/images/flashcards/right/6.png": "f010ea9341b007d4e519e857b02fa6b9",
"assets/assets/images/flashcards/right/7.png": "9437a5f6f529f48ce36b6b22a609e77e",
"assets/assets/images/flashcards/right/8.png": "94e6ec45f5d973b5a16e835c22777c74",
"assets/assets/images/flashcards/right/9.png": "e3753577d75bd7d6b2f2460172cc23ff",
"assets/assets/images/iconbackground.png": "8777e40d6b1128bc32eb2c7fb70ececd",
"assets/assets/images/icon_choise_number1.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/icon_choise_number2.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/icon_choise_number3.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/icon_choise_number4.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/icon_choise_number5.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/icon_type_view.jpg": "19670df89ea7e076be4a156f4aef5c7e",
"assets/assets/images/incorrect.gif": "61641556bd4157249d7f741cb88f746d",
"assets/assets/images/listening.png": "b49a529a7ad4872ce102b00968c8d6bd",
"assets/assets/images/pokeball.png": "465c50a0584e76d1f2f979308409d96a",
"assets/assets/images/pokeball_close.png": "45da7cc6f10fa8c301aefaabeee3460d",
"assets/assets/images/pokeball_dark.png": "51b8b7a4abb1e7fc41b65b173ab6f408",
"assets/assets/images/pokeball_open.png": "e4501836a398324aefda31a95937af25",
"assets/assets/images/soroban_h.png": "1cf6243766b73815ac67cb14cbdae58c",
"assets/assets/images/topic1/icon_choise_number1.png": "608abdfcabdc714ba17a34e46eadb61b",
"assets/assets/images/topic1/icon_choise_number2.png": "fbce4a91e36183b711612772d2c8d22d",
"assets/assets/images/topic1/icon_choise_number3.png": "bd6e135806c32a0c23966ca91aac2b7c",
"assets/assets/images/topic1/icon_choise_number4.png": "9c593f1c7ea0a90efce483febfe60a14",
"assets/assets/images/topic1/icon_choise_number5.png": "a158efd3fdb30f60e3f622a977d56c3b",
"assets/assets/images/topic1/icon_type_view.jpg": "19670df89ea7e076be4a156f4aef5c7e",
"assets/assets/images/topic2/icon_choise_number1.png": "e2f9152e45ea5da5f443803b65b74aa6",
"assets/assets/images/topic2/icon_choise_number2.png": "715cd24dcaa38aa67b8ea698c4d7a170",
"assets/assets/images/topic2/icon_choise_number3.png": "fcdd9ce6c942aa00d1c50ba12b8bdc73",
"assets/assets/images/topic2/icon_choise_number4.png": "0ce9a4e5e01c4af55bdf891434292cc1",
"assets/assets/images/topic2/icon_choise_number5.png": "34363a120fb960a47a9aa454cac52e51",
"assets/assets/images/topic2/icon_type_view.jpg": "8d9f95aab55a90e45ee87280bc235eb8",
"assets/assets/images/topic3/icon_choise_number1.png": "6e751317b7367bab105cef7a9f19f8c2",
"assets/assets/images/topic3/icon_choise_number2.png": "50e28fb5d5bc5cbd2d2d3460f6e938ae",
"assets/assets/images/topic3/icon_choise_number3.png": "8b2eed438494a5b0f05c991bcb276343",
"assets/assets/images/topic3/icon_choise_number4.png": "155eed91a98e821264ec1d8b2f827058",
"assets/assets/images/topic3/icon_choise_number5.png": "e3521f3ea75ede1e88b397ef599a0790",
"assets/assets/images/topic3/icon_type_view.jpg": "99be38a1378bf8b0e49e7d35eb427cba",
"assets/assets/images/topic4/icon_choise_number1.png": "af302caf915f2880c3527518fb4deeac",
"assets/assets/images/topic4/icon_choise_number2.png": "f15cef85bc8a388d26bf3bbf435df75c",
"assets/assets/images/topic4/icon_choise_number3.png": "82241cbcce1f5e98c6ea5a69b2503ca0",
"assets/assets/images/topic4/icon_choise_number4.png": "e3488a414daef03f41e7187e49b33150",
"assets/assets/images/topic4/icon_choise_number5.png": "32847566afee818cf9712ac8a74770c5",
"assets/assets/images/topic4/icon_type_view.jpg": "27e1e60caa9010d04e3afe004c1321ee",
"assets/assets/images/topic5/icon_choise_number1.png": "969a6876ee14e5354c0c42fbddb84d60",
"assets/assets/images/topic5/icon_choise_number2.png": "b77a54c8af26affec39d944c840222b8",
"assets/assets/images/topic5/icon_choise_number3.png": "edb08a85398340a1d6cbcbf59525c198",
"assets/assets/images/topic5/icon_choise_number4.png": "78a1d04108884abdc0773ec7e3b1c0a4",
"assets/assets/images/topic5/icon_choise_number5.png": "1cefa9de934f1ba02aa36f676fd5f7e4",
"assets/assets/images/topic5/icon_type_view.jpg": "c67bff36ef3b11d3192695066a82156d",
"assets/assets/images/topic6/icon_choise_number1.png": "c95e2bc8a26f3323529598774371ac8b",
"assets/assets/images/topic6/icon_choise_number2.png": "e0ad02548fd0c3b1cfee2f22d49f5614",
"assets/assets/images/topic6/icon_choise_number3.png": "3d13e74212d5bc2cfd986375128999b2",
"assets/assets/images/topic6/icon_choise_number4.png": "a6364e07e2bd24edf6c2a40ec847a80a",
"assets/assets/images/topic6/icon_choise_number5.png": "202d3ebdf10cf92a69f43787ff470966",
"assets/assets/images/topic6/icon_type_view.jpg": "aa7ee695c04e72c681d929ca2797b8b3",
"assets/assets/images/topic7/icon_choise_number1.png": "808824df508d44ee9af2522fb8749dd0",
"assets/assets/images/topic7/icon_choise_number2.png": "ee83fe3577e1b4ce7c9ce91be0d7f0b5",
"assets/assets/images/topic7/icon_choise_number3.png": "22728c4965b9c12ce855cf48e3e2ad54",
"assets/assets/images/topic7/icon_choise_number4.png": "1a807caab915669ca6b8a624913bab0e",
"assets/assets/images/topic7/icon_choise_number5.png": "9a56083e09ad9c27355a0aea2c81fdc6",
"assets/assets/images/topic7/icon_type_view.jpg": "a5c83bb79381001eec999fb2bdaba21b",
"assets/assets/images/topic8/icon_choise_number1.png": "d79b61138a6e0ff8d923b8ca38f3a212",
"assets/assets/images/topic8/icon_choise_number2.png": "a10785cf7248757d95753241573de9bc",
"assets/assets/images/topic8/icon_choise_number3.png": "15635b2df381631c1cd6d73c4a161719",
"assets/assets/images/topic8/icon_choise_number4.png": "8442c1b4436ea8914d91ba68c83d5d4d",
"assets/assets/images/topic8/icon_choise_number5.png": "b65cd8fe70ff1842b5f51eb2ec8bce33",
"assets/assets/images/topic8/icon_type_view.jpg": "6159e42ab48341af992184c1987cfe9d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "2fd091bd695578de2c37b3f761f9206f",
"assets/NOTICES": "cc5c9383e7371a4ada34d1add84cd0e1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "b396557a50ef55d569923b1e3a1e8673",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9a934bf5aad15df8ca67dc64c5a1e05d",
"/": "9a934bf5aad15df8ca67dc64c5a1e05d",
"main.dart.js": "58f4ae61b1d24f8aa444f0de2af9df44",
"manifest.json": "3c71077d4ba63fdcee2e543af37a2ed0",
"version.json": "08715f3e6e51f29b411d59c6ab00ba6e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
