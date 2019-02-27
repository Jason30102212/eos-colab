import { Api, JsonRpc } from 'eosjs';
import JsSignatureProvider from 'eosjs/dist/eosjs-jssig';

// Main action call to blockchain
async function takeAction(action, dataValue) {
  const privateKey = localStorage.getItem("colab_key");
  const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
  const signatureProvider = new JsSignatureProvider([privateKey]);
  const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder, textEncoder: new TextEncoder });

  try {
    const resultWithConfig = await api.transact({
      actions: [{
        account: process.env.REACT_APP_EOS_CONTRACT_NAME,
        name: action,
        authorization: [{
          actor: localStorage.getItem("colab_account"),
          permission: 'active',
        }],
        data: dataValue,
      }]
    },{
      blocksBehind: 3,
      expireSeconds: 30
    });
    return resultWithConfig;
  } catch (err) {
    throw(err);
  }
}

class ApiService {

  static getCurrentUser() {
    return new Promise((resolve, reject) => {
      if (!localStorage.getItem("colab_account")) {
        return reject();
      }
      takeAction("login", { username: localStorage.getItem("colab_account") })
        .then(() => {
          resolve(localStorage.getItem("colab_account"));
        })
        .catch(err => {
          localStorage.removeItem("colab_account");
          localStorage.removeItem("colab_key");
        });
    });
  }

  static login({ username, key }) {
    return new Promise((resolve, reject) => {
      localStorage.setItem("colab_account", key);
      localStorage.setItem("colab_key", key);
      takeAction("login", { username: username })
        .then(() => {
          resolve();
        })
        .catch(err => {
          localStorage.removeItem("colab_account");
          localStorage.removeItem("colab_key");
          reject(err);
        });
    });
  }

  static register({ username, key }) {
    return new Promise(( resolve, key ) {
      takeAction("register", { user })
        .then(() => {
          resolve();
        })
        .catch(err => {
          reject(err);
        })
    })
  }
}

export default ApiService;
