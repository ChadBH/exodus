import { DataStore } from '@aws-amplify/datastore';
import { CreateNeed } from './ui-components';
import { Vault } from './models';
import { Have } from './models';
import { Need } from './models';

import { Amplify} from "aws-amplify";

import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);


//await DataStore.save(
    //new Have({
		//"description": "Lorem ipsum dolor sit amet",
		//"vaultID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d"
	//})
//);
//
//await DataStore.save(
    //new Need({
		//"description": "Lorem ipsum dolor sit amet",
		//"vaultID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d"
	//})
//);
//

//const vaultToDelete = await DataStore.query(Vault, 123456789);
//DataStore.delete(vaultToDelete);

//const haveToDelete = await DataStore.query(Have, 123456789);
//DataStore.delete(haveToDelete);

//const needToDelete = await DataStore.query(Need, 123456789);
//DataStore.delete(needToDelete);


//const haves = await DataStore.query(Have);
//console.log(haves);

//const vaults = await DataStore.query(Vault);
//console.log(vaults);

async function Needs(){

  return DataStore.query(Need).then(needs => {
    const descriptions = needs.map(need => 
      "<li class=\"list-group-item\">"+need.description+"</li>"
    )
    const joined = descriptions.join("")
    document.getElementById("needs").innerHTML = joined;
  })
}

async function Haves(){

  return DataStore.query(Have).then(haves => {
    const descriptions = haves.map(have => 
      "<li class=\"list-group-item\">"+have.description+"</li>"
    )
    const joined = descriptions.join("")
    document.getElementById("haves").innerHTML = joined;
  })
}

async function Vaults(){
  const vaults = await DataStore.query(Vault);
  console.log(vaults);
}

//async function Save(){
  //await DataStore.save(
    //new Vault({
		//"Code": "Lorem ipsum dolor sit amet",
		//"Key": "Lorem ipsum dolor sit amet",
		//"Have": [],
		//"Needs": []
	//})
//);
//}

function App() {

  Haves();
  Needs();

  return (
        <div className="container">
        <div className="row">
            <div className="col-sm-6">
                <h4>Need</h4>
                <ul className="list-group" id="needs">
                </ul>
            </div>
            <div className="col-sm-6">
                <h4>Have</h4>
                <div></div>
                <ul className="list-group" id="haves">
                </ul>
            </div>
        </div>
    </div>
  );
}

export default App;
