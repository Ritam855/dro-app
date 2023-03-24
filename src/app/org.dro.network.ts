import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.dro.network{
   export class reliefitem extends Asset {
      reliefitemid: string;
      name: string;
      ownername: string;
      description: string;
      issuer: Trader;
      owner: Trader;
   }
   export class request extends Asset {
      orderid: string;
      itemname: string;
      orderer: Trader;
      vendor: Trader;
   }
   export abstract class Trader extends Participant {
      name: string;
      Address: string;
   }
   export class osdma extends Trader {
      DistrictAuthorityId: string;
   }
   export class reliefcamp extends Trader {
      CampHeadId: string;
   }
   export class distributor extends Trader {
      DistributorId: string;
   }
   export class civilians extends Trader {
      AdharId: string;
   }
   export class Initiaterequest extends Transaction {
      orderId: string;
      itemname: string;
      orderer: Trader;
      vendor: Trader;
   }
   export class Transferreliefitem extends Transaction {
      newownername: string;
      itemname: string;
      reliefitem: reliefitem;
      issuer: Trader;
      newOwner: Trader;
   }
// }
