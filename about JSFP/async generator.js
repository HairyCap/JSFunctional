//async generators
async function *fetchURLs(urls) {
	for(let url of urls){
		let resp =await fetch(url);
		if(resp.status == 200) {
			let text = await resp.text();
			yield text.toUpperCase();
		}else{
			yield undefined;
		}
	}
}

async function *fetchURLS(urls) {
	const prs = urls.map(fetch);

	for(pr of prs){
		let resp = await pr;
		if( resp.status == 200){
			let text = await resp.text();
			yield text.toUpperCase();
		}else{
			yield undefined;
		}
	}
}

//wrong! not work because async function with for .. of returns promiss 
for( let text of fetchURLs( favoriteSites )){
	console.log(text)
}

async function main(facoriteSites) {
	for await (let text of fetchURLs(facoriteSites)){
		console.log(text)
	}
}
