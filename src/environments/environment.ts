// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

declare var require:any;

let env:any = {url:'https://musixmatchcom-musixmatch.p.mashape.com/wsr/1.1/',key:''};
try{
	env = require('./.env');
}
catch(e){
	console.log(e);
}

export const environment = {
  production: false,
  url:env.url,//'https://musixmatchcom-musixmatch.p.mashape.com/wsr/1.1/',
  key:env.key,//'a1fqm4Jwwkmshck8KKMrJmYRJP2Gp1RIBdOjsnYV1Lbo5SJZ34'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
