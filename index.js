


const  cats  = ["Milo", "Otis", "Garfield"];
 
function logCats (cats){
    console.log("cats:",cats);

}


function destructivelyAppendCat (){
    cats.push("Ralph");

}


function destructivelyPrependCat(){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}
  function appendCat(){
    const copyofcats = [...cats,"Broom"];
    return copyofcats;
  }

  function prependCat (){
    const copyofcats = ["Arnold",...cats];
    return copyofcats;
  }

  function removeLastCat(){
    const sliceOfCats= cats.slice(0,2);
    return sliceOfCats;
    
  }

  function removeFirstCat(){
    const copyofcatswithslice=cats.slice(1);
    return copyofcatswithslice;
  }
  