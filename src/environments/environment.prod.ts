
let env:any = {url:'https://musixmatchcom-musixmatch.p.mashape.com/wsr/1.1/',key:''};
try{
	env = require('./.env');
}
catch(e){
	console.warn(e);
}


export const environment = {
  production: true,
  url:env.url,
  key:env.key
};
