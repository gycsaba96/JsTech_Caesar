module.exports = {
  getKeyToSecret: function (secret){
    updateSecretList();
    let l = secretlist.filter( (s) => (s.secret==secret) );
    if (l.length>0)
      return l[0].key;
    else
      return createNewKey(secret);
  },

};

let updateSecretList = function (){
    t=Date.now();
    secretlist = secretlist.filter( (s) => (s.validTime>t) );
    console.log(secretlist);
}

let createNewKey = function(nsecret){
  let card = { secret: nsecret,
               key: Math.floor(Math.random()*25)+1,
               validTime: Date.now()+60*60*1000 };
  secretlist.push(card);
  return card.key;
}

let secretlist = [];
