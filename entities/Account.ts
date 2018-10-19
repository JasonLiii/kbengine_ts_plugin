import Entity from "../kbengine/Entity";
import {RegisterScript} from "../kbengine/ExportEntity";


export class Account extends Entity
{
    exampleVariable=0
    set_exampleVariable(oldVal){

    }
}
RegisterScript("Account", Account);