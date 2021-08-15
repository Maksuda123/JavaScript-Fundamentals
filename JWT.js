// JWT = JSON WEB TOKEN....Eta borto mane web Application er jonno user authorization kore... microService er khatre aita khub e populer
// Web application secure korer jonno er bumika ase
// Http ekta stateless protocol
// Amra browser theke server a or server theke server a http protocol use kore request response adan prodan kori.
// stateless mane holo client site intraction er shomoi http kono kisu mone rakhe na. Pottek request er shomoi ja ja dorkar pathate hoi http nije kisu mone rakhe na.ai jonno e bola hoi http shateless.
// Dynamic application a user k url + identity o pathare hoi  //Static website a url pathale e hoi.
// JWT Website = jwt.io


// Supose fb a ami home page a aci er por onno kono page a jete ki amk identity pathate hoi? http to stateless.... ekbr login korle e se amk chinte pare well jahutu stateless user er identity nai onno page a so ki vabe amk chinse browser? Web Application ki vabe browser session mone rakse?
// Web application vibino vabe e session mone rakte pare..er modda common holo token er beboher. So token er 2 ta populer option ase. 1. JWT koten 2. Session token

// JWT Mechanism = clint jokhon Authentacion korbe she user er shob info json akare token hishabe pathiya dai sign kore. Client er porer request a pura token tai request er shate pathiya dei shekhane tar info ase. Sever a khatre kisu save korse na shob client er kase e ase. So client jokhon request kore server bujte pare kon user. Ai token ta kono id na. eta ekta json object with all info. Aita e JWT bola hai. Er modda 3 ta part...header, payload(data), signature(hash string/secreat key). Server er kase o ai secreat key ta thake ja diya she user k identify kore. Shob data public er kase e thake but secreate key ta server er secure store er modda thake.
// JWT password er moton na aita user er identity jeta server dekha validate user ki na bujte pare.
// JWT token ta keo peya gele login korte parbey API requst a aita pathiya diya login korty parby. Session token er khatre compromize hole invalid kore dite pari.But jwt er khatre expire time sesh na hole valid thakby, invalid kora jai na ek matro token blacklist kore diya jai.
// jwt rest ApI, micro service er khatre use korte pari.
// Node js a JWT er libraty ase.

